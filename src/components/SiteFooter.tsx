import Link from 'next/link';

// Pied de page réutilisable, identique au footer inline des pages existantes.
export default function SiteFooter() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-[#c9a227] hover:underline">
            ← Retour à l&apos;accueil MG Events - DJ Mariage Bretagne
          </Link>
          <div className="flex items-center gap-4 text-sm text-[#666]">
            <Link href="/mentions-legales" className="hover:text-[#c9a227] transition-colors">Mentions légales</Link>
            <span>|</span>
            <Link href="/cgv" className="hover:text-[#c9a227] transition-colors">CGV</Link>
            <span>|</span>
            <Link href="/confidentialite" className="hover:text-[#c9a227] transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
