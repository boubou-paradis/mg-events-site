import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  location: string;
  eventType: string;
  formule: string;
  message: string;
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

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validation basique
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Les champs nom, email et telephone sont requis.' },
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
              <li><strong>Nom:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Telephone:</strong> ${data.phone}</li>
            </ul>

            <h2 style="color: #333;">Details de l'evenement</h2>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Type:</strong> ${eventTypeLabels[data.eventType] || data.eventType}</li>
              <li><strong>Date:</strong> ${data.date || 'Non precisee'}</li>
              <li><strong>Lieu:</strong> ${data.location || 'Non precise'}</li>
              <li><strong>Formule souhaitee:</strong> ${formuleLabels[data.formule] || data.formule || 'Non specifiee'}</li>
            </ul>

            ${data.message ? `
            <h2 style="color: #333;">Message</h2>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
              ${data.message.replace(/\n/g, '<br>')}
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
