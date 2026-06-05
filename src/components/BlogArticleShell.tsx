import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, Mail } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const BASE = 'https://www.mg-events35.com';

interface Faq {
  question: string;
  answer: string;
}

interface RelatedLink {
  href: string;
  title: string;
  desc: string;
}

interface BlogArticleShellProps {
  slug: string;
  h1: React.ReactNode;
  plainTitle: string; // pour le schema
  description: string;
  heroImage: string;
  heroAlt: string;
  date: string; // affiché (ex: "5 juin 2026")
  isoDate: string; // ex: "2026-06-05"
  readTime: string; // ex: "9 min"
  faqs?: Faq[];
  related?: RelatedLink[];
  children: React.ReactNode;
}

export default function BlogArticleShell({
  slug,
  h1,
  plainTitle,
  description,
  heroImage,
  heroAlt,
  date,
  isoDate,
  readTime,
  faqs = [],
  related = [],
  children,
}: BlogArticleShellProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: plainTitle,
    description,
    image: `${BASE}${heroImage}`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: { '@type': 'Person', name: 'Guillaume', worksFor: { '@type': 'Organization', name: 'MG Events Animation' } },
    publisher: {
      '@type': 'Organization',
      name: 'MG Events Animation',
      logo: { '@type': 'ImageObject', url: `${BASE}/images/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: plainTitle, item: `${BASE}/blog/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            }),
          }}
        />
      )}

      <SiteHeader active="blog" />

      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-[400px]">
          <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <article className="relative -mt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          {/* Article header */}
          <div className="card-dark p-8 mb-8">
            <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {readTime} de lecture
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">{h1}</h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={20} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume</p>
                <p className="text-[#888] text-sm">MG Events Animation</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="prose prose-invert max-w-none">
            <div className="text-[#aaa] leading-relaxed space-y-6">{children}</div>
          </div>

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-6">
                Questions <span className="text-[#c9a227]">fréquentes</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
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
          )}

          {/* CTA */}
          <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
            <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
              Envie d&apos;un mariage <span className="text-[#c9a227]">vraiment original</span> ?
            </h3>
            <p className="text-[#888] mb-6">
              AnimaJet, photobooth vintage, quiz et blind test interactifs... Créons ensemble une soirée
              dont vos invités se souviendront. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/animations-interactives-mariage" className="btn-outline">
                Découvrir AnimaJet
              </Link>
              <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                <Mail size={16} />
                Demander un devis
              </Link>
            </div>
          </div>

          {/* Author */}
          <div className="card-dark p-6 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={32} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume - MG Events Animation</p>
                <p className="text-[#888] text-sm">
                  DJ animateur depuis plus de 25 ans, créateur d&apos;AnimaJet, passionné par les mariages et les belles fêtes en Bretagne.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-6">Articles similaires</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link key={r.href} href={r.href} className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                    <p className="text-white font-medium mb-1">{r.title}</p>
                    <p className="text-[#888] text-sm">{r.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
