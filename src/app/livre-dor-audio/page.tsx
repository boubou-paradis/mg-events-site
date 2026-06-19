import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight, Check } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';

const SLUG = 'livre-dor-audio';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: "Livre d'Or Audio mariage | Téléphone rétro à messages vocaux — MG Events",
  description:
    "Le Livre d'Or Audio : un téléphone rétro où vos invités décrochent et laissent un message vocal aux mariés. Un souvenir sonore authentique à réécouter des années après. Inclus dans nos formules ou en location à 40€.",
  keywords:
    "livre d'or audio, livre d'or audio mariage, livre d'or sonore, livre d'or vocal, téléphone à messages mariage, audio guestbook, livre d'or original mariage, téléphone rétro mariage, livre d'or téléphone",
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: "Livre d'Or Audio mariage — le téléphone rétro à messages vocaux | MG Events",
    description:
      "Vos invités décrochent un téléphone rétro et laissent un message vocal. Des souvenirs audio authentiques à réécouter pour toujours.",
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/livre-dor-audio-mariage.png` }],
  },
};

const faqs = [
  {
    question: "Qu'est-ce qu'un livre d'or audio ?",
    answer:
      "Le livre d'or audio est une alternative moderne et émouvante au livre d'or papier. Il prend la forme d'un téléphone rétro posé sur une table : vos invités décrochent le combiné et laissent un message vocal aux mariés. Vous récupérez ensuite tous ces messages — déclarations, anecdotes, rires, chansons — à réécouter quand vous le souhaitez.",
  },
  {
    question: "Comment fonctionne le téléphone du livre d'or audio ?",
    answer:
      "C'est volontairement très simple : on décroche, on écoute le message d'accueil personnalisé, puis on parle après le bip. En raccrochant, le message est enregistré automatiquement. Aucune application, aucun bouton compliqué — même les grands-parents l'utilisent sans aucune difficulté.",
  },
  {
    question: "Quand récupère-t-on les messages enregistrés ?",
    answer:
      "Nous vous remettons l'intégralité des messages audio après votre mariage. Vous conservez ainsi un fichier sonore complet, un véritable trésor à réécouter pour vos anniversaires de mariage ou simplement quand l'envie vous prend de revivre ce jour.",
  },
  {
    question: "Le livre d'or audio s'intègre-t-il à tous les thèmes de mariage ?",
    answer:
      "Oui. Le téléphone a un look vintage intemporel qui s'accorde aussi bien avec un mariage champêtre ou bohème qu'avec une réception chic et élégante. Posé sur une table de la salle ou près du vin d'honneur, il devient un objet déco autant qu'une animation.",
  },
  {
    question: "Le livre d'or audio est-il inclus dans vos formules ?",
    answer:
      "Le Livre d'Or Audio est inclus dans nos formules Rêve en Blanc (1490€) et Conte de Fées (1690€). Il est également disponible en location seule à 40€ si vous souhaitez l'ajouter à une autre prestation ou le réserver indépendamment.",
  },
  {
    question: "Pourquoi choisir un livre d'or audio plutôt qu'un livre d'or classique ?",
    answer:
      "Un livre d'or papier recueille quelques mots écrits ; le livre d'or audio capture les voix, les intonations, l'émotion et la spontanéité de vos proches. Réentendre la voix d'un grand-parent ou le rire d'un ami des années plus tard a une valeur sentimentale incomparable.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Livre d'Or Audio pour mariage",
  serviceType: "Animation mariage — livre d'or audio (téléphone rétro à messages vocaux)",
  description:
    "Location d'un téléphone rétro permettant aux invités de laisser des messages vocaux aux mariés. Souvenirs audio remis après le mariage. Inclus dans les formules DJ mariage MG Events ou en location seule.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: 'Bretagne, Grand Ouest',
  },
  offers: {
    '@type': 'Offer',
    price: '40',
    priceCurrency: 'EUR',
    description: 'Location seule du Livre d\'Or Audio (inclus sans supplément dans les formules Rêve en Blanc et Conte de Fées).',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: "Livre d'Or Audio", item: `${BASE}/${SLUG}` },
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

export default function LivreOrAudioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link
            href="/#formules"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Nos formules de mariage
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Livre d&apos;Or <span className="text-[#c9a227]">Audio</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Le téléphone rétro qui recueille les plus belles voix de votre mariage
              </h2>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Vos invités décrochent le combiné d&apos;un téléphone vintage et laissent un message vocal,
                  rien que pour vous. Des souvenirs sonores authentiques, drôles ou émouvants, que vous
                  réécouterez avec bonheur des années après votre mariage.
                </p>
              </div>
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
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20 bg-[#141414]">
                <Image
                  src="/images/livre-dor-audio-mariage.png"
                  alt="Livre d'or audio - téléphone rétro vintage pour messages vocaux des invités au mariage - MG Events"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le concept */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le <span className="text-[#c9a227]">livre d&apos;or audio</span>, un souvenir qui se réécoute
        </SectionTitle>
        <Prose>
          <p>
            Le livre d&apos;or papier se range dans un tiroir et finit oublié. Le{' '}
            <strong className="text-white">livre d&apos;or audio</strong>, lui, capture quelque chose
            d&apos;irremplaçable : la voix de ceux que vous aimez. Posé sur une jolie table, un{' '}
            <strong className="text-white">téléphone rétro</strong> invite chaque convive à décrocher le
            combiné et à confier, en toute intimité, quelques mots aux mariés.
          </p>
          <p>
            Une déclaration émue, une anecdote qui fait rire, un conseil de couple, les rires des enfants
            ou même une chanson improvisée : chaque message devient un{' '}
            <span className="text-[#c9a227]">fragment sonore unique</span> de votre journée. À la fin de la
            soirée, nous vous remettons l&apos;intégralité des enregistrements — un véritable trésor à
            conserver et à réécouter pour chaque anniversaire de mariage.
          </p>
        </Prose>
      </Section>

      {/* Comment ça se passe */}
      <Section bg="#141414">
        <SectionTitle>Comment se déroule le <span className="text-[#c9a227]">livre d&apos;or audio</span></SectionTitle>
        <Steps
          steps={[
            {
              title: 'On décroche',
              text: "Le téléphone rétro est installé sur une table. Un invité curieux décroche le combiné et entend votre message d'accueil personnalisé.",
            },
            {
              title: 'On laisse son message',
              text: "Après le bip, chacun parle librement : un mot doux, un souvenir, un éclat de rire. Aucune application, aucun bouton compliqué.",
            },
            {
              title: 'On garde le trésor',
              text: "En raccrochant, le message est enregistré. Après le mariage, nous vous remettons tous les messages audio à conserver pour toujours.",
            },
          ]}
        />
      </Section>

      {/* Pourquoi c'est inoubliable */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Pourquoi le livre d&apos;or audio <span className="text-[#c9a227]">émeut toujours</span>
        </SectionTitle>
        <Prose>
          <p>
            Réentendre la voix d&apos;un grand-parent, le rire d&apos;un ami d&apos;enfance ou les premiers
            mots d&apos;un enfant a une valeur sentimentale qu&apos;aucune phrase écrite ne peut égaler. Le
            livre d&apos;or audio fige l&apos;émotion brute, la spontanéité et la tendresse de l&apos;instant.
          </p>
          <p>
            Son look <strong className="text-white">vintage</strong> en fait aussi un véritable objet de
            décoration, qui s&apos;intègre naturellement à tous les univers — du mariage champêtre et bohème à
            la réception la plus élégante. C&apos;est une animation douce, sans contrainte, qui se vit en
            parallèle de la fête tout au long de la soirée.
          </p>
        </Prose>
        <div className="mt-8 card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce que le livre d&apos;or audio apporte à votre mariage</h3>
          <CheckList
            items={[
              'Les vraies voix de vos proches, conservées pour toujours',
              "Une animation sans contrainte qui se vit toute la soirée",
              'Un objet déco vintage qui s\'accorde à tous les thèmes',
              'Messages remis après le mariage, prêts à réécouter',
              'Bien plus vivant et émouvant qu\'un livre d\'or papier',
              'Inclus dans les formules Rêve en Blanc & Conte de Fées',
            ]}
          />
        </div>

        {/* Disponibilité / tarif */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="card-dark p-6">
            <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-2">Inclus dans</p>
            <p className="text-white font-[family-name:var(--font-display)] text-lg mb-1">Rêve en Blanc &amp; Conte de Fées</p>
            <p className="text-[#888] text-sm">Sans supplément, dès la formule Rêve en Blanc (1490€).</p>
          </div>
          <div className="card-dark p-6 border-[#c9a227]/30">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-[#c9a227] uppercase tracking-wider">Location seule</p>
              <div className="text-right">
                <span className="text-3xl font-[family-name:var(--font-display)] text-[#c9a227]">40</span>
                <span className="text-[#888] ml-1">€</span>
              </div>
            </div>
            <p className="text-[#888] text-sm flex items-start gap-2">
              <Check size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
              À ajouter à n&apos;importe quelle prestation ou à réserver seul.
            </p>
          </div>
        </div>
      </Section>

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

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Offrez à votre mariage un <span className="text-[#c9a227]">souvenir qui se réécoute</span>
          </h2>
          <p className="text-[#888] mb-8">
            Le Livre d&apos;Or Audio est inclus dans nos formules Rêve en Blanc et Conte de Fées, et
            disponible en location seule à 40€. Contactez-nous pour un devis personnalisé sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis gratuit
            </Link>
            <Link href="/#formules" className="btn-outline inline-flex items-center gap-2">
              Voir nos formules <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
