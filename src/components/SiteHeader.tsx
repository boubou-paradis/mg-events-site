import Link from 'next/link';
import Image from 'next/image';

// En-tête réutilisable, identique au header inline des pages existantes.
export default function SiteHeader({ active }: { active?: 'accueil' | 'formules' | 'blog' | 'animajet' }) {
  const linkClass = (key: string) =>
    active === key
      ? 'text-sm text-[#c9a227]'
      : 'text-sm text-[#aaa] hover:text-[#c9a227] transition-colors';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="MG Events Animation DJ Mariage Bretagne"
              width={200}
              height={80}
              className="h-14 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={linkClass('accueil')}>Accueil</Link>
            <Link href="/animations-interactives-mariage" className={linkClass('animajet')}>AnimaJet</Link>
            <Link href="/#formules" className={linkClass('formules')}>Nos formules</Link>
            <Link href="/blog" className={linkClass('blog')}>Blog</Link>
            <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
