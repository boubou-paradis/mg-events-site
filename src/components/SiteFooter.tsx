import Link from 'next/link';

const prestations = [
  { href: '/tarifs-dj-mariage', label: 'Tarifs' },
  { href: '/photobooth-mariage', label: 'Photobooth' },
  { href: '/sonorisation-ceremonie-laique', label: 'Cérémonie laïque' },
  { href: '/fumee-lourde-mariage', label: 'Fumée lourde' },
  { href: '/etincelles-froides-mariage', label: 'Étincelles froides' },
  { href: '/dj-soiree-entreprise', label: 'Soirée entreprise' },
  { href: '/dj-anniversaire-bretagne', label: 'Anniversaire' },
  { href: '/dj-mariage-bretagne', label: 'DJ mariage Bretagne' },
];

// Pied de page réutilisable, identique au footer inline des pages existantes.
export default function SiteFooter() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Liens prestations (maillage interne) */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6 pb-6 border-b border-[#c9a227]/10">
          {prestations.map((p) => (
            <Link key={p.href} href={p.href} className="text-xs text-[#666] hover:text-[#c9a227] transition-colors">
              {p.label}
            </Link>
          ))}
        </div>
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
