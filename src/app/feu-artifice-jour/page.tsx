import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight, Check, Lock } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';

const SLUG = 'feu-artifice-jour';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Feu d\'Artifice de Jour Mariage Bretagne | Poudre Holi Cérémonie',
  description:
    "Un tir de 4 canons de poudre Holi qui explose en couleurs au moment fort de votre cérémonie. 120€, 4 couleurs — option réservée à nos clients DJ, non disponible seule.",
  keywords:
    "feu d'artifice de jour mariage, poudre Holi mariage, explosion couleurs cérémonie, feu artifice cérémonie laïque, canon poudre Holi mariage Bretagne, animation originale mariage, feu d'artifice diurne, poudre colorée mariage",
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: "Feu d'Artifice de Jour mariage — explosion de couleurs en poudre Holi | MG Events",
    description:
      "4 canons de poudre Holi, couleurs au choix, déclenchement synchronisé. Un effet spectaculaire en plein jour pour des photos inoubliables. 120€, en complément d'une formule DJ MG Events uniquement.",
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/feu-artifice-jour-mariage.png` }],
  },
};

const faqs = [
  {
    question: 'Puis-je réserver uniquement le feu d\'artifice de jour, sans prestation DJ ?',
    answer:
      "Non, le feu d'artifice de jour est une option exclusivement proposée aux clients ayant réservé une formule DJ ou animation avec MG Events. Nous ne proposons pas ce service de manière indépendante (ni location, ni installation seule).",
  },
  {
    question: 'Comment fonctionne le feu d\'artifice de jour ?',
    answer:
      "Le feu d'artifice de jour repose sur 4 canons de poudre Holi de 80 cm. Au moment choisi, ils sont déclenchés de façon synchronisée et propulsent un nuage de poudre colorée à plusieurs mètres de hauteur. L'effet est immédiat, spectaculaire et totalement visible en plein jour, contrairement aux feux d'artifice classiques réservés à la nuit.",
  },
  {
    question: "Qu'est-ce que la poudre Holi ?",
    answer:
      "La poudre Holi est une poudre colorée fine, inspirée de la fête indienne des couleurs. Elle est non toxique, légère et se disperse dans l'air en formant de magnifiques nuages colorés. C'est elle qui crée l'effet « explosion de couleurs » de notre feu d'artifice de jour, pour un rendu photo absolument unique.",
  },
  {
    question: 'Quelles couleurs sont disponibles ?',
    answer:
      "Vous composez votre tir comme vous le souhaitez : rose, bleu, jaune, vert, violet, orange… Notre formule comprend 4 couleurs au choix, que vous sélectionnez en fonction de votre thème de mariage ou de votre charte de couleurs. Un même tir peut mêler plusieurs teintes pour un effet arc-en-ciel saisissant.",
  },
  {
    question: 'À quel moment du mariage déclencher le feu d\'artifice de jour ?',
    answer:
      "Les moments les plus marquants sont la fin de la cérémonie laïque, la sortie des mariés (mairie ou église), la photo de groupe et le cocktail. C'est l'instant idéal pour immortaliser une image forte et colorée, avec tous vos invités réunis. Nous calons le déclenchement avec vous et votre photographe pour ne rien manquer.",
  },
  {
    question: 'Quel est le tarif ?',
    answer:
      "Le feu d'artifice de jour est proposé à 120€ pour un tir de 4 couleurs au choix, en supplément de votre formule DJ ou animation MG Events. C'est une nouveauté disponible sur demande : contactez-nous pour plus d'informations et pour vérifier la disponibilité à la date de votre mariage.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Feu d\'Artifice de Jour pour mariage (poudre Holi)',
  serviceType: "Animation mariage — feu d'artifice de jour / explosion de couleurs en poudre Holi",
  description:
    "Tir de 4 canons de poudre Holi colorée, déclenché de façon synchronisée lors d'un mariage. Effet spectaculaire en plein jour, idéal pour la fin de cérémonie laïque, la sortie des mariés et la photo de groupe. Nouveauté MG Events, sur demande. Important : il s'agit d'une option complémentaire, proposée exclusivement aux clients ayant réservé une formule DJ ou animation MG Events. Ce service n'est pas disponible seul, ni en location ni en installation indépendante.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: "Secteurs de l'Ille-et-Vilaine, de la Loire-Atlantique et du Morbihan situés dans un rayon approximatif de 100 km autour de Redon (35). Au-delà : sur étude et sur devis.",
  },
  offers: {
    '@type': 'Offer',
    price: '120',
    priceCurrency: 'EUR',
    description:
      "Tir de feu d'artifice de jour : 4 canons de poudre Holi, 4 couleurs au choix. Sur demande. Option additionnelle réservée aux clients ayant réservé une formule DJ ou animation MG Events — non commercialisée seule.",
    availability: 'https://schema.org/LimitedAvailability',
  },
  isRelatedTo: {
    '@type': 'Service',
    name: 'Prestation DJ animateur mariage MG Events',
    url: `${BASE}/tarifs-dj-mariage`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: "Feu d'Artifice de Jour", item: `${BASE}/${SLUG}` },
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

export default function FeuArtificeJourPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        {/* Halos colorés (clin d'œil à la poudre Holi) */}
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link
            href="/#feu-artifice-jour"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Nos animations de mariage
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 bg-[#c9a227] text-[#0a0a0a] text-xs font-semibold uppercase tracking-wider rounded-full">
                Nouveauté
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Feu d&apos;Artifice de Jour — <span className="text-[#c9a227]">Explosion de Couleurs</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Un nuage de poudre Holi qui explose en couleurs au plus beau moment de votre mariage
              </h2>
              {/* Mention d'exclusivité (lecture en diagonale) */}
              <p className="flex items-start gap-3 rounded-lg border border-[#c9a227]/40 bg-[#1a1a2e] p-4 text-sm leading-relaxed text-[#e8e8ea] mb-6">
                <Lock size={18} className="mt-0.5 shrink-0 text-[#c9a227]" aria-hidden="true" />
                <span>
                  Cette prestation est proposée <strong className="text-[#c9a227]">exclusivement en
                  complément d&apos;une formule DJ/animation MG Events</strong> — elle n&apos;est pas
                  disponible en location ou installation seule.
                </span>
              </p>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Imaginez la sortie des mariés ou la fin de votre cérémonie laïque sublimée par un
                  tir de <strong className="text-white">4 canons de poudre Holi</strong> qui libèrent
                  un nuage coloré spectaculaire, en plein jour. Une image forte, joyeuse et
                  inoubliable — parfaite pour la photo de groupe.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                  <Mail size={18} />
                  Demander un devis DJ + Feu d&apos;Artifice de Jour
                </Link>
                <a href="tel:+33648106166" className="btn-outline inline-flex items-center gap-2">
                  <Phone size={18} />
                  06 48 10 61 66
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20 bg-[#141414]">
                <Image
                  src="/images/feu-artifice-jour-mariage.png"
                  alt="Feu d'artifice de jour - tir de poudre Holi colorée lors d'une cérémonie de mariage en Bretagne - MG Events"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Ruban promo "Nouveauté" */}
                <div className="absolute top-0 left-0 z-20 h-32 w-32 overflow-hidden pointer-events-none">
                  <span className="absolute top-7 -left-9 w-44 -rotate-45 bg-[#c9a227] py-1 text-center text-[11px] font-semibold uppercase leading-tight tracking-wider text-[#0a0a0a] shadow-lg">
                    Nouveauté
                  </span>
                </div>

                {/* Badge d'exclusivité en overlay — SPÉCIFIQUE à cette page, ne pas déplacer dans un composant partagé */}
                <div className="absolute inset-x-0 bottom-0 z-20 border-t-2 border-[#c9a227] bg-[#1a1a2e]/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.45)] pointer-events-none sm:px-6 sm:py-4">
                  <p className="flex items-center justify-center gap-2 text-center text-[13px] font-semibold uppercase leading-snug tracking-wide text-[#c9a227] sm:text-base">
                    <Lock size={16} className="shrink-0" aria-hidden="true" />
                    Offre exclusivement réservée à nos clients
                  </p>
                  <p className="mt-1 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white sm:text-sm">
                    Non disponible seul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le concept */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le <span className="text-[#c9a227]">feu d&apos;artifice de jour</span>, l&apos;alternative colorée aux feux de nuit
        </SectionTitle>
        <Prose>
          <p>
            Les feux d&apos;artifice classiques sont magnifiques… mais réservés à la nuit. Le{' '}
            <strong className="text-white">feu d&apos;artifice de jour</strong> renverse les codes : il
            explose en pleine lumière, au cœur de votre journée, là où se concentrent les émotions et les
            photos. Le secret ? La <strong className="text-white">poudre Holi</strong>, cette poudre
            colorée légère et non toxique inspirée de la célèbre fête indienne des couleurs.
          </p>
          <p>
            Au moment choisi, <strong className="text-white">4 canons de 80 cm</strong> sont déclenchés de
            façon <span className="text-[#c9a227]">synchronisée</span> et projettent un nuage de couleurs à
            plusieurs mètres de hauteur. L&apos;effet est immédiat, joyeux et spectaculaire — un instant
            suspendu qui transforme une simple sortie de cérémonie en image de carte postale.
          </p>
        </Prose>
      </Section>

      {/* Fonctionnement */}
      <Section bg="#141414">
        <SectionTitle>Comment se déroule le <span className="text-[#c9a227]">tir de poudre Holi</span></SectionTitle>
        <Steps
          steps={[
            {
              title: 'On choisit les couleurs',
              text: "Vous sélectionnez 4 couleurs parmi rose, bleu, jaune, vert, violet, orange… en accord avec votre thème de mariage. On cale ensemble le moment idéal du tir.",
            },
            {
              title: 'On synchronise le tir',
              text: "Les 4 canons de poudre Holi (80 cm) sont positionnés et déclenchés de façon synchronisée par nos soins, en coordination avec votre photographe pour capter l'instant parfait.",
            },
            {
              title: 'On immortalise',
              text: "Le nuage de couleurs explose en plein jour : sortie des mariés, photo de groupe, cocktail… Un souvenir visuel fort et des photos absolument uniques.",
            },
          ]}
        />
      </Section>

      {/* Pourquoi c'est spectaculaire */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Pourquoi le feu d&apos;artifice de jour <span className="text-[#c9a227]">fait sensation</span>
        </SectionTitle>
        <Prose>
          <p>
            C&apos;est une animation <strong className="text-white">originale</strong> que peu d&apos;invités
            ont déjà vue : l&apos;effet de surprise est total. Les couleurs vives qui jaillissent dans le ciel
            créent une explosion de joie partagée, parfaite pour rassembler tout le monde au même endroit, au
            même instant.
          </p>
          <p>
            C&apos;est aussi une <strong className="text-white">mine d&apos;or pour vos photos</strong> : la
            poudre Holi capte magnifiquement la lumière du jour et donne des clichés dynamiques, colorés et
            pleins de mouvement. La fin de cérémonie laïque, la sortie d&apos;église ou le cocktail prennent
            une toute autre dimension.
          </p>
        </Prose>
        <div className="mt-8 card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce que le feu d&apos;artifice de jour apporte à votre mariage</h3>
          <CheckList
            items={[
              '4 canons de poudre Holi de 80 cm, tir synchronisé',
              '4 couleurs au choix selon votre thème',
              'Un effet spectaculaire visible en plein jour',
              'Idéal pour la fin de cérémonie laïque et la sortie des mariés',
              'Des photos de groupe colorées et inoubliables',
              'Une animation originale qui surprend vos invités',
              'Une option qui se greffe à votre formule DJ MG Events',
            ]}
          />
        </div>

        {/* Tarif */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="card-dark p-6">
            <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-2">Disponibilité</p>
            <p className="text-white font-[family-name:var(--font-display)] text-lg mb-1">
              Réservé à nos clients — sur demande
            </p>
            <p className="text-[#888] text-sm">
              Option ajoutée à votre formule DJ/animation MG Events. Contactez-nous pour vérifier la
              disponibilité à votre date.
            </p>
          </div>
          <div className="card-dark p-6 border-[#c9a227]/30">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-[#c9a227] uppercase tracking-wider">Le tir</p>
              <div className="text-right">
                <span className="text-3xl font-[family-name:var(--font-display)] text-[#c9a227]">120</span>
                <span className="text-[#888] ml-1">€</span>
              </div>
            </div>
            <p className="text-[#888] text-sm flex items-start gap-2">
              <Check size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
              Pour un tir de 4 couleurs au choix, en supplément de votre formule.
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
            Une <span className="text-[#c9a227]">explosion de couleurs</span> pour votre grand jour
          </h2>
          <p className="text-[#888] mb-4">
            Ajoutez le feu d&apos;artifice de jour à votre formule DJ MG Events : 120€ pour un tir de 4
            couleurs au choix, sur demande et selon disponibilité à votre date.
          </p>
          <p className="text-sm text-[#e8e8ea] mb-8 inline-flex items-start gap-2 rounded-lg border border-[#c9a227]/40 bg-[#1a1a2e] px-4 py-3 text-left">
            <Lock size={16} className="mt-0.5 shrink-0 text-[#c9a227]" aria-hidden="true" />
            <span>
              Option réservée à nos clients : elle n&apos;est pas proposée seule, ni en location ni en
              installation indépendante.
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis DJ + Feu d&apos;Artifice de Jour
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
