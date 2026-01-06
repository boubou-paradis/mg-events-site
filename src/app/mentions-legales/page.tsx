import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#c9a227]/10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#e0b82d] transition-colors">
            <ArrowLeft size={20} />
            Retour au site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-white mb-2">
          Mentions <span className="text-[#c9a227]">Légales</span>
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a227] mb-8" />

        <div className="space-y-8 text-[#aaa]">
          {/* Éditeur */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Éditeur du site
            </h2>
            <div className="card-dark p-6 space-y-2">
              <p className="text-white font-medium text-lg">MG Events Animation</p>
              <p>Guillaume Morel</p>
              <p>10 Lan Lande des Couëdies</p>
              <p>35600 Bains-sur-Oust</p>
              <div className="pt-4 border-t border-[#c9a227]/10 mt-4 space-y-2">
                <p><span className="text-[#888]">SIRET :</span> 499 112 308 00030</p>
                <p><span className="text-[#888]">Code APE :</span> 9329Z (Autres activités récréatives et de loisirs)</p>
                <p><span className="text-[#888]">Email :</span> <a href="mailto:mg.events35@gmail.com" className="text-[#c9a227] hover:underline">mg.events35@gmail.com</a></p>
                <p><span className="text-[#888]">Téléphone :</span> <a href="tel:+33648106166" className="text-[#c9a227] hover:underline">06 48 10 61 66</a></p>
              </div>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Hébergeur
            </h2>
            <div className="card-dark p-6 space-y-2">
              <p className="text-white font-medium">Vercel Inc.</p>
              <p>340 S Lemon Ave #4133</p>
              <p>Walnut, CA 91789, USA</p>
              <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#c9a227] hover:underline">vercel.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Propriété intellectuelle
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété
                exclusive de MG Events Animation, sauf mention contraire. Toute reproduction, représentation,
                modification ou adaptation, totale ou partielle, est strictement interdite sans autorisation
                préalable écrite.
              </p>
            </div>
          </section>

          {/* Crédits */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Crédits
            </h2>
            <div className="card-dark p-6 space-y-2">
              <p><span className="text-[#888]">Conception et réalisation :</span> MG Events Animation</p>
              <p><span className="text-[#888]">Photographies :</span> MG Events Animation et clients (avec autorisation)</p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Limitation de responsabilité
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                MG Events Animation s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site.
                Toutefois, il ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations
                mises à disposition. En conséquence, MG Events Animation décline toute responsabilité pour
                toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
            </div>
          </section>
        </div>

        {/* Links */}
        <div className="mt-12 pt-8 border-t border-[#c9a227]/10 flex flex-wrap gap-6 text-sm">
          <Link href="/cgv" className="text-[#888] hover:text-[#c9a227] transition-colors">
            Conditions Générales de Vente
          </Link>
          <Link href="/confidentialite" className="text-[#888] hover:text-[#c9a227] transition-colors">
            Politique de Confidentialité
          </Link>
          <a href="https://www.facebook.com/MGevents35" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#c9a227] transition-colors">
            Facebook
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#c9a227]/10 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-[#666]">
          © {new Date().getFullYear()} MG Events Animation - Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
