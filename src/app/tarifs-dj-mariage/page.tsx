import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight, Check } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList } from '@/components/animajet/ClusterSections';

const SLUG = 'tarifs-dj-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Tarif DJ Mariage Bretagne | Prix, formules & devis gratuit',
  description:
    "Tarifs DJ mariage en Bretagne : formules de 1200€ à 1690€ TTC, cérémonie laïque 180€, photobooth vintage 240€. Prix transparents, ce qui est inclus, devis gratuit sous 24h.",
  keywords:
    'tarif DJ mariage Bretagne, prix DJ mariage, tarif DJ mariage Rennes, combien coûte un DJ mariage, prix DJ mariage Ille-et-Vilaine, formule DJ mariage, devis DJ mariage gratuit',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Tarif DJ Mariage Bretagne | Prix transparents & formules détaillées',
    description:
      'Formules DJ mariage de 1200€ à 1690€ TTC, options cérémonie laïque, photobooth, livre d\'or audio. Tout ce qui est inclus, sans surprise.',
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/console-dj-pro.jpg` }],
  },
};

const formules = [
  {
    name: "Éclat d'Amour",
    price: '1200',
    description: "L'essentiel pour une soirée réussie",
    features: [
      'Sonorisation cocktail (enceinte batterie)',
      'Sonorisation complète repas & dancefloor',
      'Animation interactive (quiz, photo-live)',
      '2 micros sans fil',
      '4 éclairages robotisés',
      '4 totems LED vintage',
      'Vidéoprojecteur + écran',
      'Accompagnement témoins/convives',
      'Groupe WhatsApp dédié',
    ],
    pourQui:
      "Pour les couples qui veulent un DJ animateur expérimenté, un son et une lumière professionnels, sans les effets spéciaux.",
  },
  {
    name: 'Rêve en Blanc',
    price: '1490',
    description: 'Notre formule la plus demandée',
    features: [
      "Tout de la formule Éclat d'Amour",
      'Ambiance salle RGBW (6 projecteurs)',
      'Boule à facettes 50cm',
      'Machine à fumée lourde',
      '2 lanceurs étincelles froides',
      "Livre d'Or Audio (téléphone rétro à messages)",
    ],
    pourQui:
      "Pour une ouverture de bal spectaculaire (fumée lourde + étincelles froides) et une salle entièrement mise en lumière.",
    popular: true,
  },
  {
    name: 'Conte de Fées',
    price: '1690',
    description: "L'expérience complète et magique",
    features: [
      'Tout de la formule Rêve en Blanc',
      'Photobooth vintage TSF',
      'Appareil reflex + écran tactile 15"',
      '150 impressions incluses',
    ],
    pourQui:
      "Pour les couples qui veulent l'expérience complète, photobooth vintage compris : vos invités repartent avec leurs photos imprimées.",
  },
];

const options = [
  {
    name: 'Cérémonie laïque',
    price: '180',
    detail:
      "Sonorisation complète sur batterie (enceinte JBL EON ONE MK2, 2 micros HF ou cravate, table de mixage) + 2 techniciens dédiés. Sur le même lieu que la réception.",
    href: '/sonorisation-ceremonie-laique',
  },
  {
    name: 'Photobooth vintage (location seule)',
    price: '240',
    detail:
      'Cabine TSF années 60, appareil reflex, écran tactile 15", 150 tirages inclus. Déjà inclus sans supplément dans la formule Conte de Fées.',
    href: '/photobooth-mariage',
  },
  {
    name: "Livre d'Or Audio (location seule)",
    price: '40',
    detail:
      'Téléphone rétro à messages vocaux. Déjà inclus dans les formules Rêve en Blanc et Conte de Fées.',
    href: '/livre-dor-audio',
  },
  {
    name: "Feu d'Artifice de Jour (poudre Holi)",
    price: '120',
    detail:
      'Tir de poudre colorée pour la sortie des mariés ou la photo de groupe, en plein jour. Sur demande.',
    href: '/feu-artifice-jour',
  },
];

const faqs = [
  {
    question: 'Quel est le prix d\'un DJ mariage en Bretagne chez MG Events ?',
    answer:
      "Nos formules mariage vont de 1200€ TTC (Éclat d'Amour) à 1690€ TTC (Conte de Fées, photobooth vintage inclus), en passant par Rêve en Blanc à 1490€ TTC, notre formule la plus demandée avec fumée lourde et étincelles froides. Les tarifs sont affichés en toute transparence : ce que vous voyez est ce que vous payez.",
  },
  {
    question: 'Que comprend exactement le tarif ?',
    answer:
      "Chaque formule comprend la présence du DJ animateur toute la soirée, la sonorisation du cocktail au dancefloor, les éclairages, 2 micros sans fil pour les discours, les animations interactives AnimaJet (quiz, photo-live), le rendez-vous de préparation et un groupe WhatsApp dédié avec les témoins. Aucun matériel n'est facturé en supplément caché.",
  },
  {
    question: 'La cérémonie laïque est-elle incluse dans les formules ?',
    answer:
      "La sonorisation de cérémonie laïque est une option à 180€ TTC : enceinte sur batterie, 2 micros sans fil ou cravate, table de mixage et 2 techniciens dédiés pendant la cérémonie. Elle doit se dérouler sur le même lieu que la réception.",
  },
  {
    question: 'Le photobooth est-il inclus dans les formules ?',
    answer:
      "Le photobooth vintage TSF est inclus sans supplément dans la formule Conte de Fées (1690€). Avec les autres formules, il est disponible en option à 240€ avec 150 tirages inclus.",
  },
  {
    question: "Pourquoi les tarifs d'un DJ mariage varient-ils autant d'un prestataire à l'autre ?",
    answer:
      "Le prix reflète l'expérience du DJ, la qualité et la quantité du matériel (sonorisation, éclairage, effets), le temps de préparation en amont, la durée de présence le jour J et les animations proposées. Un DJ mariage professionnel prépare votre soirée pendant des heures avant même d'arriver : rendez-vous, playlist personnalisée, coordination avec le traiteur et les témoins.",
  },
  {
    question: 'Y a-t-il des frais de déplacement ?',
    answer:
      "Nous sommes basés près de Redon (Ille-et-Vilaine) et intervenons dans toute la Bretagne et les départements limitrophes (35, 56, 29, 44, 53). Le devis précise toujours les conditions exactes selon votre lieu de réception : demandez votre devis gratuit, il est personnalisé et sans engagement.",
  },
  {
    question: "Jusqu'à quelle heure le DJ anime-t-il la soirée ?",
    answer:
      "Nous construisons le déroulé avec vous lors du rendez-vous de préparation : horaires de début, temps forts et heure de fin sont définis ensemble et inscrits au devis. Pas de mauvaise surprise en fin de soirée.",
  },
  {
    question: 'Comment obtenir un devis précis pour mon mariage ?',
    answer:
      "Remplissez le formulaire de contact avec votre date, votre lieu de réception et le nombre d'invités : nous vérifions la disponibilité et vous répondons sous 24h avec un devis personnalisé et gratuit.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Prestation DJ mariage en Bretagne — formules et tarifs',
  serviceType: 'DJ mariage, animation de soirée, sonorisation et éclairage',
  description:
    "Formules DJ mariage transparentes de 1200€ à 1690€ TTC en Bretagne : sonorisation, éclairage, animations interactives, fumée lourde, étincelles froides, photobooth vintage.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: 'Bretagne, Grand Ouest',
  },
  offers: [
    {
      '@type': 'Offer',
      name: "Formule Éclat d'Amour",
      price: '1200',
      priceCurrency: 'EUR',
      description: 'Sonorisation cocktail, repas et soirée, 2 micros, éclairages, animations interactives.',
    },
    {
      '@type': 'Offer',
      name: 'Formule Rêve en Blanc',
      price: '1490',
      priceCurrency: 'EUR',
      description: "Formule Éclat d'Amour + ambiance salle RGBW, fumée lourde, étincelles froides, Livre d'Or Audio.",
    },
    {
      '@type': 'Offer',
      name: 'Formule Conte de Fées',
      price: '1690',
      priceCurrency: 'EUR',
      description: 'Formule Rêve en Blanc + photobooth vintage TSF avec 150 impressions.',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Tarifs DJ mariage', item: `${BASE}/${SLUG}` },
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

export default function TarifsDjMariagePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link
            href="/#formules"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Nos formules en un coup d&apos;œil
          </Link>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-6">
            Tarif DJ mariage en <span className="text-[#c9a227]">Bretagne</span> : des prix transparents
          </h1>
          <p className="text-[#aaa] text-lg leading-relaxed mb-8">
            Combien coûte un DJ de mariage ? Chez MG Events Animation, la réponse est affichée noir sur
            blanc : trois formules de <strong className="text-white">1200€ à 1690€ TTC</strong>, des options
            claires et un devis gratuit personnalisé sous 24h. Pas de prix caché, pas de supplément
            surprise le jour J.
          </p>
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
      </section>

      {/* Formules détaillées */}
      <Section bg="#141414">
        <SectionTitle>
          Nos trois formules <span className="text-[#c9a227]">mariage</span>
        </SectionTitle>
        <p className="text-[#888] text-center max-w-2xl mx-auto mb-10">
          Chaque formule comprend le DJ animateur toute la soirée, le rendez-vous de préparation, la
          sonorisation, les éclairages et les animations interactives AnimaJet.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {formules.map((formule) => (
            <div
              key={formule.name}
              className={`card-dark p-8 flex flex-col ${formule.popular ? 'border-[#c9a227]/40' : ''}`}
            >
              {formule.popular && (
                <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-2">La plus demandée</p>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-1">{formule.name}</h3>
              <p className="text-[#888] text-sm mb-4">{formule.description}</p>
              <p className="mb-6">
                <span className="text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">{formule.price}</span>
                <span className="text-[#888] ml-2">€ TTC</span>
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {formule.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#aaa]">
                    <Check size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#888] text-sm italic border-l-2 border-[#c9a227]/30 pl-4">{formule.pourQui}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Options */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Les options, <span className="text-[#c9a227]">au prix juste</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {options.map((option) => (
            <Link key={option.name} href={option.href} className="card-dark p-6 hover:border-[#c9a227]/30 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-medium group-hover:text-[#c9a227] transition-colors">{option.name}</p>
                <p className="shrink-0 ml-3">
                  <span className="text-2xl font-[family-name:var(--font-display)] text-[#c9a227]">{option.price}</span>
                  <span className="text-[#888] text-sm ml-1">€</span>
                </p>
              </div>
              <p className="text-[#888] text-sm leading-relaxed">{option.detail}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Ce qui influence le prix */}
      <Section bg="#141414" narrow>
        <SectionTitle center={false}>
          Ce qui fait le prix d&apos;un <span className="text-[#c9a227]">DJ mariage professionnel</span>
        </SectionTitle>
        <Prose>
          <p>
            Une prestation DJ mariage ne se résume pas à quelques heures de musique. Quand vous comparez
            des devis, regardez ce qu&apos;il y a derrière le chiffre : la{' '}
            <strong className="text-white">durée de présence réelle</strong> (du vin d&apos;honneur à la fin
            de soirée, souvent plus de 10 heures sur place), le{' '}
            <strong className="text-white">matériel de sonorisation et d&apos;éclairage</strong> apporté, le
            temps de préparation en amont, et les <strong className="text-white">animations incluses</strong>.
          </p>
          <p>
            Chez MG Events, chaque mariage commence bien avant le jour J : un rendez-vous de préparation
            pour construire le déroulé, une playlist travaillée avec vous (vos incontournables comme vos
            interdits), un groupe WhatsApp avec les témoins pour organiser les surprises, et une
            coordination avec le traiteur et le photographe pour que les temps forts tombent au bon moment.
            C&apos;est ce travail invisible qui fait la différence entre une soirée qui s&apos;enchaîne
            naturellement et une soirée qui flotte.
          </p>
        </Prose>
        <div className="mt-8 card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Inclus dans toutes nos formules, sans supplément</h3>
          <CheckList
            items={[
              'Rendez-vous de préparation et déroulé personnalisé',
              'DJ animateur présent du cocktail à la fin de soirée',
              '2 micros sans fil pour les discours et surprises',
              'Animations interactives AnimaJet (quiz, photo-live)',
              'Coordination avec traiteur, photographe et témoins',
              'Groupe WhatsApp dédié avec les témoins',
            ]}
          />
        </div>
      </Section>

      {/* Lire un devis */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Comment lire un <span className="text-[#c9a227]">devis DJ mariage</span>
        </SectionTitle>
        <Prose>
          <p>
            Un bon devis doit répondre à quatre questions simples : <strong className="text-white">qui</strong>{' '}
            (le DJ qui sera réellement présent le jour J), <strong className="text-white">quoi</strong> (le
            matériel et les animations, poste par poste), <strong className="text-white">quand</strong>{' '}
            (heure de début, heure de fin, temps forts) et <strong className="text-white">combien</strong>{' '}
            (un prix TTC ferme, options comprises). Si l&apos;un de ces éléments est flou, demandez des
            précisions avant de signer.
          </p>
          <p>
            Nos devis détaillent la formule choisie, les options retenues (cérémonie laïque, photobooth,
            feu d&apos;artifice de jour…), le lieu et les horaires convenus. Le prix affiché sur cette page
            est celui que vous retrouverez sur votre devis. Pour comprendre les fourchettes de prix
            pratiquées sur le marché, consultez notre article{' '}
            <Link href="/blog/prix-dj-mariage-bretagne" className="text-[#c9a227] hover:underline">
              Combien coûte un DJ de mariage en Bretagne ?
            </Link>
          </p>
        </Prose>
      </Section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions fréquentes sur nos <span className="text-[#c9a227]">tarifs</span>
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

      {/* Maillage */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Pour aller <span className="text-[#c9a227]">plus loin</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/dj-mariage-bretagne', title: 'DJ mariage Bretagne', desc: 'Notre prestation dans toute la région' },
            { href: '/photobooth-mariage', title: 'Photobooth vintage', desc: 'La cabine TSF années 60 en détail' },
            { href: '/sonorisation-ceremonie-laique', title: 'Cérémonie laïque', desc: 'Sonorisation complète à 180€' },
            { href: '/blog/questions-a-poser-dj-mariage', title: 'Questions à poser à son DJ', desc: 'La checklist avant de signer' },
            { href: '/zones-intervention', title: "Zones d'intervention", desc: 'Bretagne et départements limitrophes' },
            { href: '/blog/comment-choisir-dj-mariage-bretagne', title: 'Comment choisir son DJ', desc: 'Les vrais critères qui comptent' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
              <p className="text-white font-medium mb-1">{link.title}</p>
              <p className="text-[#888] text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Parlons de votre <span className="text-[#c9a227]">soirée</span>
          </h2>
          <p className="text-[#888] mb-8">
            Donnez-nous votre date, votre lieu et vos envies : nous vérifions la disponibilité et vous
            envoyons un devis personnalisé et gratuit sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis gratuit
            </Link>
            <Link href="/#formules" className="btn-outline inline-flex items-center gap-2">
              Voir les formules en détail <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
