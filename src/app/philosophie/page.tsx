import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Music,
  Users,
  FileCheck,
} from 'lucide-react';
import { AnimatedSection, ScrollIndicator } from './components';

export const metadata: Metadata = {
  title: 'Notre Philosophie · DJ Mariage Bretagne',
  description: 'Votre soirée, vos invités au centre : notre approche du métier de DJ animateur mariage en Bretagne. 25 ans d\'expérience, formules dès 1200€.',
  keywords: ['philosophie', 'DJ mariage bretagne', 'valeurs', 'engagement', 'expérience', 'MG Events', 'tarif DJ mariage'],
  alternates: {
    canonical: 'https://www.mg-events35.com/philosophie',
  },
  openGraph: {
    title: 'Notre Philosophie | MG Events Animation',
    description: 'C\'est votre soirée. Simplement. Découvrez notre approche unique du métier de DJ animateur en Bretagne.',
    type: 'website',
    url: 'https://www.mg-events35.com/philosophie',
    siteName: 'MG Events Animation',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notre Philosophie | MG Events Animation',
    description: 'C\'est votre soirée. Simplement. 25 ans d\'expérience au service de votre événement.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ============ HEADER ============
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="MG Events Animation DJ Mariage Bretagne"
              width={240}
              height={96}
              sizes="(max-width: 768px) 200px, 240px"
              className="h-20 md:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">À propos</Link>
            <Link href="/#formules" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Formules</Link>
            <Link href="/zones-intervention" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Zones</Link>
            <Link href="/blog" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Blog</Link>
            <Link href="/partenaires" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Partenaires</Link>
            <Link href="/#contact" className="btn-gold">
              Devis gratuit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

// ============ FOOTER ============
function Footer() {
  const zones = [
    { label: 'Ille-et-Vilaine', href: '/dj-mariage-ille-et-vilaine' },
    { label: 'Morbihan', href: '/dj-mariage-morbihan' },
    { label: 'Loire-Atlantique', href: '/dj-mariage-loire-atlantique' },
  ];

  const villesMariage = [
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Saint-Malo', slug: 'saint-malo' },
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Redon', slug: 'redon' },
    { name: 'Lorient', slug: 'lorient' },
    { name: 'Saint-Nazaire', slug: 'saint-nazaire' },
    { name: 'Pontivy', slug: 'pontivy' },
  ];

  return (
    <footer className="py-16 bg-[#0a0a0a] border-t border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="MG Events Animation DJ Mariage Bretagne"
              width={120}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-[#888] text-sm mb-4">DJ animateur mariage en Bretagne depuis 25 ans.</p>
            <p className="text-[#888] text-sm">
              <a href="tel:+33648106166" className="text-[#c9a227] hover:underline">06 48 10 61 66</a><br />
              <a href="mailto:mg.events35@gmail.com" className="text-[#c9a227] hover:underline">mg.events35@gmail.com</a>
            </p>
          </div>

          {/* Zones départements */}
          <div>
            <h4 className="text-white font-medium mb-4">Par département</h4>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li key={zone.href}>
                  <Link href={zone.href} className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                    DJ Mariage {zone.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones villes */}
          <div>
            <h4 className="text-white font-medium mb-4">Par ville</h4>
            <ul className="space-y-2">
              {villesMariage.map((ville) => (
                <li key={ville.slug}>
                  <Link href={`/dj-mariage/${ville.slug}`} className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                    DJ Mariage {ville.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/zones-intervention" className="text-[#c9a227] text-sm hover:underline">Toutes nos zones →</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-white font-medium mb-4">Blog</h4>
            <ul className="space-y-2">
              <li><Link href="/blog/comment-choisir-dj-mariage-bretagne" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Choisir son DJ mariage</Link></li>
              <li><Link href="/blog/ouverture-de-bal-conseils" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Ouverture de bal</Link></li>
              <li><Link href="/blog/etincelles-froides-mariage-securite" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Étincelles froides</Link></li>
              <li><Link href="/blog" className="text-[#c9a227] text-sm hover:underline">Tous les articles →</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><Link href="/philosophie" className="text-[#c9a227] text-sm transition-colors">Notre philosophie</Link></li>
              <li><Link href="/partenaires" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Nos partenaires</Link></li>
              <li><Link href="/mentions-legales" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgv" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">CGV</Link></li>
              <li><Link href="/confidentialite" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#c9a227]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">
            © {new Date().getFullYear()} MG Events Animation - DJ Mariage Bretagne - Tous droits réservés
          </p>
          <p className="text-xs text-[#444]">
            Rennes • Vannes • Nantes • Redon • Lorient • Saint-Malo
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function PhilosophiePage() {
  const engagements = [
    {
      icon: Heart,
      title: 'Votre événement, votre style',
      description: "L'installation s'adapte à votre salle, votre thème, votre ambiance. Chaque événement est unique, on s'ajuste, toujours.",
    },
    {
      icon: Music,
      title: 'Du matériel pro, bien dosé',
      description: "Du beau matériel, bien entretenu, avec un son qui sait se faire doux pendant le repas et percutant pour enflammer le dancefloor. Adapté et intégré à votre salle sans gâcher votre décoration.",
    },
    {
      icon: Users,
      title: 'Vos invités participent',
      description: "Blind tests, quiz, jeux interactifs, galerie photo en direct, impression depuis le téléphone. Vos invités deviennent acteurs de la soirée.",
    },
    {
      icon: FileCheck,
      title: 'Du sérieux, du vrai',
      description: "Contrats aux normes, assurances, échanges clairs avant le jour J. Un groupe WhatsApp dédié avec vos témoins pour tout coordonner. Pas de mauvaise surprise, pas de flou.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a]">
        {/* HERO */}
        <section
          className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-32 relative"
          aria-labelledby="hero-title"
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 80%, rgba(201, 162, 39, 0.06) 0%, transparent 70%)'
            }}
            aria-hidden="true"
          />

          <h1
            id="hero-title"
            className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-white animate-fade-up"
          >
            C&apos;est <span className="text-gradient-gold">votre</span> soirée.
          </h1>

          <p className="mt-6 text-xl md:text-2xl italic text-[#888] animate-fade-up delay-200">
            Simplement.
          </p>

          <ScrollIndicator />
        </section>

        {/* LA QUESTION */}
        <AnimatedSection className="max-w-[1100px] mx-auto px-6 py-12">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="section-title text-white mb-8">
            La seule question <span className="text-gradient-gold">qui compte</span>
          </h2>
          <p className="text-lg text-[#aaa] leading-relaxed mb-6">
            Quand vous cherchez un DJ pour votre mariage, votre anniversaire ou votre événement, la question est finalement assez simple : <strong className="text-white">« j&apos;ai quoi, pour combien ? »</strong>
          </p>
          <p className="text-lg text-[#aaa] leading-relaxed mb-6">
            Est-ce que mes invités vont passer un bon moment ? Est-ce qu&apos;ils vont danser ? Est-ce qu&apos;ils vont participer ? Est-ce qu&apos;ils vont repartir avec des souvenirs ? Est-ce que la prestation sera propre, professionnelle, sans mauvaise surprise ?
          </p>
          <p className="text-lg text-[#aaa] leading-relaxed">
            C&apos;est à ces questions qu&apos;on essaie de répondre. Ni plus, ni moins.
          </p>
        </AnimatedSection>

        {/* NOTRE CONVICTION */}
        <AnimatedSection className="max-w-[1100px] mx-auto px-6 py-12">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="section-title text-white mb-8">
            Une conviction <span className="text-gradient-gold">simple</span>
          </h2>
          <p className="text-lg text-[#aaa] leading-relaxed mb-6">
            Après 25 ans dans l&apos;événementiel, on a appris une chose : ce n&apos;est pas uniquement la quantité de matériel qui rend une soirée mémorable. C&apos;est l&apos;expérience. C&apos;est ce moment où tout le monde se retrouve sur la piste. C&apos;est le fou rire pendant un jeu. C&apos;est la photo imprimée qu&apos;on colle sur le frigo et qu&apos;on regarde encore 5 ans après.
          </p>
          <p className="text-lg text-[#aaa] leading-relaxed mb-8">
            Alors on a fait un choix. Mettre <strong className="text-white">l&apos;écran au centre avec votre nom, vos photos, vos animations</strong>. Et la régie sur le côté, discrète, accessible. Parce que le soir de votre événement, la star c&apos;est vous. Pas nous.
          </p>

          {/* Citation */}
          <blockquote className="relative bg-[#1a1a1a] border-l-4 border-[#c9a227] p-6 my-6">
            <span
              className="absolute top-0 left-4 font-[family-name:var(--font-display)] text-8xl text-[#c9a227] opacity-15 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-xl italic text-[#aaa] leading-relaxed relative z-10">
              Chaque détail est pensé pour que vos invités passent la meilleure soirée possible.
            </p>
          </blockquote>
        </AnimatedSection>

        {/* NOS ENGAGEMENTS */}
        <AnimatedSection className="max-w-[1100px] mx-auto px-6 py-12">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="section-title text-white mb-8">
            Ce qu&apos;on <span className="text-gradient-gold">vous promet</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {engagements.map((engagement) => {
              const IconComponent = engagement.icon;
              return (
                <article
                  key={engagement.title}
                  className="p-6 bg-[#c9a227]/5 border border-[#c9a227]/10 rounded-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-5 h-5 text-[#c9a227]" aria-hidden="true" />
                    <h3 className="text-xs font-mono tracking-[0.12em] uppercase text-[#c9a227]">
                      {engagement.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#aaa] leading-relaxed">
                    {engagement.description}
                  </p>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        {/* TARIF */}
        <AnimatedSection className="max-w-[1100px] mx-auto px-6 py-12">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="section-title text-white mb-8">
            Un tarif <span className="text-gradient-gold">juste</span>
          </h2>
          <p className="text-lg text-[#aaa] leading-relaxed mb-8">
            On propose un tarif sans surprise, clair, pour une prestation complète : du vin d&apos;honneur jusqu&apos;à 4h du matin, ou plus en fonction de l&apos;ambiance. Son, lumière, animation interactive, professionnalisme.
          </p>

          {/* Chiffres */}
          <div className="flex flex-wrap justify-between items-start gap-6 my-8 py-6 border-y border-[#c9a227]/10">
            <div className="flex-1 min-w-[120px] text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#c9a227]">
                25+
              </div>
              <div className="text-xs font-mono tracking-[0.1em] uppercase text-[#888] mt-2">
                Années d&apos;expérience
              </div>
            </div>
            <div className="flex-1 min-w-[120px] text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#c9a227]">
                1200€
              </div>
              <div className="text-xs font-mono tracking-[0.1em] uppercase text-[#888] mt-2">
                À partir de
              </div>
            </div>
            <div className="flex-1 min-w-[120px] text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#c9a227]">
                100%
              </div>
              <div className="text-xs font-mono tracking-[0.1em] uppercase text-[#888] mt-2">
                Centré sur vous
              </div>
            </div>
          </div>

          <p className="text-lg text-[#aaa] leading-relaxed mb-8">
            Vous comparez les offres ? C&apos;est normal. Faites-le. Regardez ce qui est inclus, posez des questions, regardez les formules. Un tarif accessible ne veut pas dire une prestation au rabais, et un tarif élevé ne garantit pas une soirée réussie. Choisissez celle qui correspond à votre vision et vos envies de la soirée.
          </p>

          {/* Citation */}
          <blockquote className="relative bg-[#1a1a1a] border-l-4 border-[#c9a227] p-8">
            <span
              className="absolute top-0 left-4 font-[family-name:var(--font-display)] text-8xl text-[#c9a227] opacity-15 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="text-xl italic text-[#aaa] leading-relaxed relative z-10">
              Si cette vision vous parle, on sera ravis d&apos;en discuter avec vous. Simplement.
            </p>
          </blockquote>
        </AnimatedSection>

        {/* CTA FINAL */}
        <AnimatedSection className="text-center px-6 py-16 relative">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(201, 162, 39, 0.04) 0%, transparent 60%)'
            }}
            aria-hidden="true"
          />

          <h2 className="section-title text-white mb-6 relative z-10">
            Parlons de <span className="text-gradient-gold">votre</span> soirée
          </h2>
          <p className="text-xl text-[#aaa] max-w-xl mx-auto mb-10 relative z-10">
            Racontez-nous votre projet. On vous dira simplement ce qu&apos;on peut faire pour vous.
          </p>

          <Link href="/#contact" className="btn-gold inline-block relative z-10">
            Nous contacter
          </Link>

          {/* Signature */}
          <div className="mt-16 pt-8 border-t border-[#c9a227]/20 max-w-md mx-auto relative z-10">
            <p className="italic text-[#888]">
              25 ans de scène. Une seule conviction : c&apos;est votre soirée.
            </p>
            <p className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[#c9a227] mt-3">
              MG Events Animation — Bretagne
            </p>
          </div>
        </AnimatedSection>
      </main>
      <Footer />

      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.mg-events35.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Notre Philosophie",
                "item": "https://www.mg-events35.com/philosophie"
              }
            ]
          })
        }}
      />

      {/* Schema.org AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Notre Philosophie | MG Events Animation",
            "description": "Découvrez la philosophie de MG Events Animation : 25 ans d'expérience au service de votre soirée. DJ mariage en Bretagne.",
            "url": "https://www.mg-events35.com/philosophie",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "MG Events Animation",
              "description": "DJ animateur mariage et événementiel en Bretagne depuis plus de 25 ans",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 48.1173,
                  "longitude": -1.6778
                },
                "geoRadius": "150000"
              },
              "priceRange": "€€",
              "foundingDate": "2000"
            }
          })
        }}
      />
    </>
  );
}
