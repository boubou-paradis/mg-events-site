import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  date: string;
  location: string;
  eventType: string;
  formule: string;
  message: string;
  website?: string; // honeypot : doit rester vide
}

// Échappe les caractères HTML pour éviter toute injection dans l'email
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Rate limiting en mémoire par IP (best effort sur serverless :
// chaque instance a sa propre Map, mais ça bloque les rafales d'un même bot)
const submissions = new Map<string, number[]>();
const RATE_LIMIT = 5; // max 5 envois...
const RATE_WINDOW_MS = 10 * 60 * 1000; // ...par 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  // Évite que la Map grossisse indéfiniment
  if (submissions.size > 1000) {
    for (const [key, times] of submissions) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) submissions.delete(key);
    }
  }
  return false;
}

const formuleLabels: Record<string, string> = {
  eclat: "Eclat d'Amour (1200€)",
  reve: "Reve en Blanc (1490€)",
  conte: "Conte de Fees (1690€)",
  '': "Non specifiee",
};

const eventTypeLabels: Record<string, string> = {
  mariage: "Mariage",
  anniversaire: "Anniversaire",
  entreprise: "Evenement d'entreprise",
  autre: "Autre",
};

function formatDate(dateString: string): string {
  if (!dateString) return 'Non precisee';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Honeypot : un humain ne voit pas ce champ, un bot le remplit.
    // On répond "succès" pour ne pas signaler le filtre au bot.
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    // Rate limiting par IP
    const ip = (request.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de demandes. Veuillez réessayer dans quelques minutes.' },
        { status: 429 }
      );
    }

    // Validation basique
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Les champs nom, email et telephone sont requis.' },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }
    if (data.message && data.message.length > 5000) {
      return NextResponse.json(
        { error: 'Message trop long (5000 caractères maximum).' },
        { status: 400 }
      );
    }

    // 1. Enregistrer le lead dans Supabase (si configuré)
    if (supabase) {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            date: data.date || null,
            location: data.location || null,
            event_type: data.eventType,
            formule: data.formule || null,
            message: data.message || null,
          },
        ]);

      if (supabaseError) {
        console.error('Erreur Supabase:', supabaseError);
        return NextResponse.json(
          { error: 'Erreur lors de l\'enregistrement de votre demande.' },
          { status: 500 }
        );
      }
    }

    // 2. Envoyer email de notification (si Resend configuré)
    if (resend) {
      // Toutes les valeurs saisies par l'utilisateur sont échappées avant
      // interpolation dans le HTML de l'email
      const safe = {
        name: escapeHtml(data.name),
        email: escapeHtml(data.email),
        phone: escapeHtml(data.phone),
        address: escapeHtml(data.address || ''),
        postalCode: escapeHtml(data.postalCode || ''),
        city: escapeHtml(data.city || ''),
        location: escapeHtml(data.location || ''),
        eventType: escapeHtml(eventTypeLabels[data.eventType] || data.eventType || ''),
        formule: escapeHtml(formuleLabels[data.formule] || data.formule || 'Non specifiee'),
        message: escapeHtml(data.message || ''),
      };
      const fullAddress = [safe.address, [safe.postalCode, safe.city].filter(Boolean).join(' ')]
        .filter(Boolean)
        .join(', ');

      await resend.emails.send({
        from: 'MG Events <onboarding@resend.dev>',
        to: 'mgevents.ecommerce@gmail.com',
        replyTo: data.email,
        subject: `Nouvelle demande de devis - ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #c9a227; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">
              Nouvelle demande de devis
            </h1>

            <h2 style="color: #333;">Coordonnees</h2>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Nom:</strong> ${safe.name}</li>
              <li><strong>Email:</strong> ${safe.email}</li>
              <li><strong>Telephone:</strong> ${safe.phone}</li>
              ${fullAddress ? `<li><strong>Adresse postale:</strong> ${fullAddress}</li>` : ''}
            </ul>

            <h2 style="color: #333;">Details de l'evenement</h2>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Type:</strong> ${safe.eventType}</li>
              <li><strong>Date:</strong> ${formatDate(data.date)}</li>
              <li><strong>Lieu:</strong> ${safe.location || 'Non precise'}</li>
              <li><strong>Formule souhaitee:</strong> ${safe.formule}</li>
            </ul>

            ${safe.message ? `
            <h2 style="color: #333;">Message</h2>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
              ${safe.message.replace(/\n/g, '<br>')}
            </p>
            ` : ''}

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #888; font-size: 12px;">
              Ce message a ete envoye depuis le formulaire de contact de mg-events35.com<br>
              <strong>Repondez directement a cet email pour contacter le client.</strong>
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez reessayer.' },
      { status: 500 }
    );
  }
}
