import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getRelatedClusterPages } from '@/data/animajet';

interface Faq {
  question: string;
  answer: string;
}

interface ClusterPageShellProps {
  slug: string;
  breadcrumbName: string; // nom dans le fil d'Ariane
  h1: React.ReactNode;
  subtitle: string;
  intro?: React.ReactNode; // paragraphes d'intro optionnels (hero)
  heroImage: string;
  heroAlt: string;
  faqs: Faq[];
  // Schémas JSON-LD supplémentaires (Service, Event...) propres à la page
  extraSchemas?: Record<string, unknown>[];
  children: React.ReactNode; // contenu unique de la page
}

const BASE = 'https://www.mg-events35.com';

export default function ClusterPageShell({
  slug,
  breadcrumbName,
  h1,
  subtitle,
  intro,
  heroImage,
  heroAlt,
  faqs,
  extraSchemas = [],
  children,
}: ClusterPageShellProps) {
  const related = getRelatedClusterPages(slug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Animations interactives mariage',
        item: `${BASE}/animations-interactives-mariage`,
      },
      { '@type': 'ListItem', position: 3, name: breadcrumbName, item: `${BASE}/${slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {extraSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <SiteHeader active="animajet" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link
            href="/animations-interactives-mariage"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Animations interactives de mariage
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                {h1}
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">{subtitle}</h2>
              {intro && <div className="text-[#888] leading-relaxed mb-8 space-y-4">{intro}</div>}
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                  <Mail size={18} />
                  Demander un devis gratuit
                </Link>
                <a href="tel:+33648106166" className="btn-outline inline-flex items-center gap-2">
                  <Phone size={18} />
                  06 48 10 61 66
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20">
                <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu unique */}
      {children}

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-dark p-6">
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

      {/* Maillage interne cluster */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Découvrez nos autres <span className="text-[#c9a227]">animations interactives</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {related.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
              >
                {page.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Envie d&apos;un mariage <span className="text-[#c9a227]">vraiment interactif</span> ?
          </h2>
          <p className="text-[#888] mb-8">
            AnimaJet est inclus dans toutes nos formules DJ mariage. MG Events est basé à Redon (35) et intervient
            prioritairement dans les secteurs de l&apos;Ille-et-Vilaine, de la Loire-Atlantique et du Morbihan situés dans un rayon approximatif de 100 km autour de Redon.
            Contactez-nous pour un devis personnalisé sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis gratuit
            </Link>
            <Link href="/animations-interactives-mariage" className="btn-outline inline-flex items-center gap-2">
              Voir toutes les animations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
