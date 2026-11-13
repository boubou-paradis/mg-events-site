import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronDown, Mail, Phone, MapPin, CalendarCheck, Car } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList } from '@/components/animajet/ClusterSections';
import YouTubeLite from '@/components/YouTubeLite';
import { animajetVideos } from '@/data/animajetVideos';
import { venues, getVenue } from '@/data/venues';
import { cities } from '@/data/cities';

const BASE = 'https://www.mg-events35.com';

export function generateStaticParams() {
  return venues.map((v) => ({ lieu: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lieu: string }> }): Promise<Metadata> {
  const { lieu } = await params;
  const venue = getVenue(lieu);
  if (!venue) return { title: 'Page non trouvée' };
  const url = `${BASE}/lieux-reception-bretagne/${venue.slug}`;
  return {
    title: venue.metaTitle,
    description: venue.metaDescription,
    alternates: { canonical: url },
    openGraph: {
    images: ['https://www.mg-events35.com/images/og-default.jpg'], title: `DJ mariage au ${venue.name}`, description: venue.metaDescription, url },
  };
}

export default async function VenuePage({ params }: { params: Promise<{ lieu: string }> }) {
  const { lieu } = await params;
  const venue = getVenue(lieu);
  if (!venue) notFound();

  const url = `${BASE}/lieux-reception-bretagne/${venue.slug}`;
  const city = venue.citySlug ? cities.find((c) => c.slug === venue.citySlug) : undefined;
  const others = venues.filter((v) => v.slug !== venue.slug);

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: venue.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: venue.commune,
      postalCode: venue.postalCode,
      addressRegion: venue.department,
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: venue.latitude, longitude: venue.longitude },
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `DJ mariage au ${venue.name} (${venue.commune})`,
    serviceType: 'DJ et animation de mariage',
    areaServed: { '@type': 'Place', name: `${venue.commune} (${venue.departmentCode})` },
    provider: { '@type': 'LocalBusiness', name: 'MG Events Animation', telephone: '+33648106166', url: BASE },
    url,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Lieux de réception', item: `${BASE}/lieux-reception-bretagne` },
      { '@type': 'ListItem', position: 3, name: venue.name, item: url },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: venue.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {[placeSchema, serviceSchema, breadcrumbSchema, faqSchema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link
            href="/lieux-reception-bretagne"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Lieux de réception en Bretagne
          </Link>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-6">
            DJ mariage au <span className="text-[#c9a227]">{venue.name}</span>
          </h1>
          <div className="flex flex-wrap gap-3 mb-8 text-sm">
            <span className="card-dark px-3 py-1.5 inline-flex items-center gap-1.5 text-[#aaa]">
              <MapPin size={14} className="text-[#c9a227]" />
              {venue.commune} ({venue.departmentCode})
            </span>
            <span className="card-dark px-3 py-1.5 inline-flex items-center gap-1.5 text-[#aaa]">
              <CalendarCheck size={14} className="text-[#c9a227]" />
              Mariage animé en {venue.lastWedding}
            </span>
            <span className="card-dark px-3 py-1.5 inline-flex items-center gap-1.5 text-[#aaa]">
              <Car size={14} className="text-[#c9a227]" />
              Environ {venue.distanceFromRedonKm} km de Redon
            </span>
          </div>
          <p className="text-lg text-[#aaa] leading-relaxed mb-8">{venue.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Vérifier ma date
            </Link>
            <a href="tel:+33648106166" className="btn-outline inline-flex items-center gap-2">
              <Phone size={18} />
              06 48 10 61 66
            </a>
          </div>
        </div>
      </section>

      <Section bg="#141414" narrow>
        <SectionTitle center={false}>
          Le lieu : <span className="text-[#c9a227]">{venue.type.toLowerCase()}</span>
        </SectionTitle>
        <Prose>
          {venue.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </Section>

      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Notre expérience <span className="text-[#c9a227]">sur place</span>
        </SectionTitle>
        <Prose>
          {venue.ourExperience.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            Pendant le repas, les invités jouent depuis leur téléphone avec{' '}
            <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">
              AnimaJet
            </Link>
            , la plateforme d&apos;animations interactives que nous avons développée : quiz des mariés, Le Bon
            Ordre, Photo Mystère, photos des invités en direct sur écran.
          </p>
        </Prose>
        <YouTubeLite video={animajetVideos.presentation} />
      </Section>

      <Section bg="#141414" narrow>
        <SectionTitle center={false}>
          Nos conseils pour un mariage au <span className="text-[#c9a227]">{venue.name}</span>
        </SectionTitle>
        <div className="card-dark p-6">
          <CheckList items={venue.tips} />
        </div>
        <p className="text-[#888] text-sm mt-6">
          Nos formules et tarifs sont détaillés sur la page{' '}
          <Link href="/tarifs-dj-mariage" className="text-[#c9a227] hover:underline">tarifs DJ mariage</Link>.
          {city && (
            <>
              {' '}Voir aussi notre page{' '}
              <Link href={`/dj-mariage/${city.slug}`} className="text-[#c9a227] hover:underline">
                DJ mariage {city.name}
              </Link>
              .
            </>
          )}
        </p>
      </Section>

      {/* FAQ */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span>
          </h2>
          <div className="space-y-4">
            {venue.faqs.map((faq, i) => (
              <div key={i} className="card-dark p-6">
                <h3 className="text-white font-medium mb-3 flex items-start gap-3">
                  <ChevronDown size={20} className="text-[#c9a227] shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-[#888] ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section bg="#141414" narrow>
        <SectionTitle center={false}>
          D&apos;autres lieux où <span className="text-[#c9a227]">nous avons joué</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((v) => (
            <Link
              key={v.slug}
              href={`/lieux-reception-bretagne/${v.slug}`}
              className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors"
            >
              <p className="text-white font-medium mb-1">{v.name}</p>
              <p className="text-[#888] text-sm">
                {v.commune} ({v.departmentCode}) · {v.lastWedding}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}
