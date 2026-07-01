import { Metadata } from 'next';
import { createElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Camera,
  Building2,
  UtensilsCrossed,
  Flower2,
  Palette,
  Heart,
  Star,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ArrowLeft,
  Handshake,
  CheckCircle,
} from 'lucide-react';
import { partners, Partner } from '@/data/partners';

export const metadata: Metadata = {
  title: 'Nos Partenaires de Confiance | Photographes, Traiteurs, Fleuristes Mariage Bretagne',
  description: 'Découvrez nos partenaires de confiance pour votre mariage en Bretagne : photographes professionnels, traiteurs gastronomiques, fleuristes artisans. Prestataires recommandés par MG Events en Ille-et-Vilaine et Morbihan.',
  keywords: ['partenaires mariage bretagne', 'photographe mariage bretagne', 'traiteur mariage morbihan', 'fleuriste mariage', 'prestataires mariage rennes', 'prestataires mariage vannes'],
  alternates: {
    canonical: 'https://www.mg-events35.com/partenaires',
  },
  openGraph: {
    title: 'Nos Partenaires de Confiance | MG Events Animation Bretagne',
    description: 'Photographes, traiteurs, fleuristes : découvrez nos partenaires de confiance pour votre mariage en Bretagne. Professionnels recommandés par MG Events.',
    type: 'website',
    url: 'https://www.mg-events35.com/partenaires',
    siteName: 'MG Events Animation',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Partenaires de Confiance | MG Events Animation',
    description: 'Photographes, traiteurs, fleuristes : découvrez nos partenaires pour votre mariage en Bretagne.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Icon mapping
const getCategoryIcon = (category: Partner['category']) => {
  const icons = {
    photographe: Camera,
    salle: Building2,
    traiteur: UtensilsCrossed,
    fleuriste: Flower2,
    decorateur: Palette,
    officiant: Heart,
    autre: Star,
  };
  return icons[category];
};

// ============ HEADER ============
function Header() {
  const zones = [
    { label: 'Ille-et-Vilaine (35)', href: '/dj-mariage-ille-et-vilaine' },
    { label: 'Morbihan (56)', href: '/dj-mariage-morbihan' },
    { label: 'Finistère (29)', href: '/dj-mariage-finistere' },
    { label: 'Loire-Atlantique (44)', href: '/dj-mariage-loire-atlantique' },
    { label: 'Mayenne (53)', href: '/dj-mariage-mayenne' },
  ];

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
            <Link href="/partenaires" className="text-sm text-[#c9a227] transition-colors">Partenaires</Link>
            <Link href="/#contact" className="btn-gold">
              Devis gratuit
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

// ============ PARTNER CARD ============
function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="card-dark p-8 hover:border-[#c9a227]/40 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        {/* Category Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl flex items-center justify-center border border-[#c9a227]/20 shrink-0">
          {createElement(getCategoryIcon(partner.category), { size: 28, className: 'text-[#c9a227]' })}
        </div>

        <div className="flex-1">
          <span className="text-xs text-[#c9a227] uppercase tracking-wider">{partner.categoryLabel}</span>
          <h2 className="text-2xl font-[family-name:var(--font-display)] text-white mt-1">
            {partner.name}
          </h2>
          <div className="flex items-center gap-2 mt-2 text-sm text-[#888]">
            <MapPin size={14} className="text-[#c9a227]" />
            {partner.zone}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#aaa] leading-relaxed mb-6">
        {partner.description}
      </p>

      {/* Specialties */}
      <div className="mb-6">
        <p className="text-xs text-[#666] uppercase tracking-wider mb-3">Spécialités</p>
        <div className="flex flex-wrap gap-2">
          {partner.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-3 py-1 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-sm text-[#aaa]"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Contact & Links */}
      <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#c9a227]/10">
        {/* Website - Primary CTA */}
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center gap-2"
        >
          <ExternalLink size={16} />
          Visiter le site
        </a>

        {/* Phone */}
        {partner.phone && (
          <a
            href={`tel:${partner.phone}`}
            className="inline-flex items-center gap-2 text-sm text-[#aaa] hover:text-[#c9a227] transition-colors"
          >
            <Phone size={16} />
            {partner.phone}
          </a>
        )}

        {/* Email */}
        {partner.email && (
          <a
            href={`mailto:${partner.email}`}
            className="inline-flex items-center gap-2 text-sm text-[#aaa] hover:text-[#c9a227] transition-colors"
          >
            <Mail size={16} />
            Contact
          </a>
        )}

        {/* Facebook */}
        {partner.facebook && (
          <a
            href={partner.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#aaa] hover:text-[#3b5998] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        )}

        {/* Instagram */}
        {partner.instagram && (
          <a
            href={partner.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#aaa] hover:text-[#E4405F] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        )}
      </div>
    </article>
  );
}

// ============ FOOTER ============
function Footer() {
  const zones = [
    { label: 'Ille-et-Vilaine', href: '/dj-mariage-ille-et-vilaine' },
    { label: 'Morbihan', href: '/dj-mariage-morbihan' },
    { label: 'Finistère', href: '/dj-mariage-finistere' },
    { label: 'Loire-Atlantique', href: '/dj-mariage-loire-atlantique' },
    { label: 'Mayenne', href: '/dj-mariage-mayenne' },
  ];

  const villesMariage = [
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Saint-Malo', slug: 'saint-malo' },
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Brest', slug: 'brest' },
    { name: 'Lorient', slug: 'lorient' },
    { name: 'Quimper', slug: 'quimper' },
    { name: 'Laval', slug: 'laval' },
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
            <p className="text-[#888] text-sm mb-4">DJ animateur mariage en Bretagne depuis plus de 20 ans.</p>
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
              <li><Link href="/philosophie" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Notre philosophie</Link></li>
              <li><Link href="/partenaires" className="text-[#c9a227] text-sm hover:text-[#c9a227] transition-colors">Nos partenaires</Link></li>
              <li><Link href="/mentions-legales" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgv" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">CGV</Link></li>
              <li><Link href="/confidentialite" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Confidentialité</Link></li>
              <li>
                <a href="https://www.facebook.com/MGevents35/" target="_blank" rel="noopener noreferrer" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#c9a227]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">
            © {new Date().getFullYear()} MG Events Animation - DJ Mariage Bretagne - Tous droits réservés
          </p>
          <p className="text-xs text-[#444]">
            Rennes • Vannes • Nantes • Quimper • Brest • Laval
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function PartenairesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 bg-[#0a0a0a] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#c9a227] transition-colors"
            >
              <ArrowLeft size={16} />
              Retour à l&apos;accueil
            </Link>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full mb-6">
              <Handshake size={18} className="text-[#c9a227]" />
              <span className="text-sm text-[#aaa]">Réseau de confiance</span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Nos <span className="text-gradient-gold">Partenaires</span>
            </h1>

            <p className="text-lg text-[#888] max-w-2xl mx-auto mb-8">
              Nous avons sélectionné pour vous les meilleurs professionnels du mariage en Bretagne.
              Des prestataires de confiance avec qui nous collaborons régulièrement.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#aaa]">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#c9a227]" />
                <span>Professionnels vérifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#c9a227]" />
                <span>Collaboration régulière</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#c9a227]" />
                <span>Recommandés par MG Events</span>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid gap-8 mb-16">
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="card-dark p-8 border-[#c9a227]/30 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
              Vous êtes un professionnel du mariage ?
            </h2>
            <p className="text-[#888] mb-6 max-w-xl mx-auto">
              Vous souhaitez rejoindre notre réseau de partenaires de confiance ?
              Contactez-nous pour discuter d&apos;une collaboration.
            </p>
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Nous contacter
            </Link>
          </div>
        </div>
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
                "name": "Nos Partenaires",
                "item": "https://www.mg-events35.com/partenaires"
              }
            ]
          })
        }}
      />

      {/* Schema.org ItemList - Partenaires */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Partenaires de confiance MG Events Animation",
            "description": "Photographes, traiteurs et fleuristes recommandés par MG Events pour votre mariage en Bretagne",
            "numberOfItems": partners.length,
            "itemListElement": partners.map((partner, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "LocalBusiness",
                "name": partner.name,
                "description": partner.description,
                "url": partner.website,
                "areaServed": {
                  "@type": "Place",
                  "name": partner.zone
                },
                ...(partner.phone && { "telephone": partner.phone }),
                ...(partner.email && { "email": partner.email }),
                "priceRange": "€€",
                "knowsAbout": partner.specialties,
              }
            }))
          })
        }}
      />
    </>
  );
}
