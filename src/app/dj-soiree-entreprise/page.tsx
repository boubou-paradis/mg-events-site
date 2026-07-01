import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { cities } from '@/data/cities';

const SLUG = 'dj-soiree-entreprise';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'DJ Soirée Entreprise Bretagne | Animation CE, séminaire & gala',
  description:
    "DJ animateur pour vos soirées d'entreprise en Bretagne : séminaires, galas, vœux, CE/CSE. Animations interactives AnimaJet, photobooth logo, formules dès 800€. Devis gratuit.",
  keywords:
    "DJ soirée entreprise Bretagne, DJ soirée entreprise Rennes, animation soirée entreprise, DJ comité d'entreprise, animation séminaire Bretagne, DJ gala entreprise, soirée CSE animation",
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: "DJ soirée entreprise en Bretagne | MG Events Animation",
    description:
      "Séminaires, galas, soirées de fin d'année : une animation professionnelle qui fédère vos équipes, avec quiz interactifs et photobooth personnalisé à votre logo.",
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/console-dj-pro.jpg` }],
  },
};

const formules = [
  { name: 'Cocktail', price: '800', description: "Animation musicale d'ambiance (4h)" },
  { name: 'Corporate', price: '1200', description: 'Soirée complète avec jeux interactifs', popular: true },
  { name: 'Premium', price: '1600', description: 'Expérience complète avec photobooth' },
];

const faqs = [
  {
    question: "Quels types d'événements d'entreprise animez-vous ?",
    answer:
      "Soirées de fin d'année, vœux, séminaires, galas, inaugurations, lancements de produit, soirées CE/CSE, team building : nous adaptons le format à votre événement, de l'ambiance musicale discrète pendant un cocktail à la soirée dansante complète avec animations interactives.",
  },
  {
    question: "Quels sont vos tarifs pour une soirée d'entreprise ?",
    answer:
      "Trois formules : Cocktail à 800€ (animation musicale d'ambiance, 4h), Corporate à 1200€ (soirée complète avec jeux interactifs) et Premium à 1600€ (expérience complète avec photobooth personnalisé). Chaque devis est ensuite ajusté à votre lieu, vos horaires et votre nombre de collaborateurs.",
  },
  {
    question: 'En quoi consistent les animations interactives pour une soirée entreprise ?',
    answer:
      "Avec AnimaJet, notre plateforme d'animations conçue maison, vos collaborateurs participent depuis leur téléphone via un simple QR code : quiz personnalisé sur votre entreprise, blind test par équipes, photo live sur écran géant. Aucune application à installer — même les moins technophiles participent en quelques secondes.",
  },
  {
    question: 'Le photobooth peut-il être personnalisé aux couleurs de notre entreprise ?',
    answer:
      "Oui : les impressions du photobooth sont personnalisables avec votre logo et le nom de votre événement. C'est un souvenir que vos collaborateurs emportent, et un vrai moment de cohésion pendant la soirée.",
  },
  {
    question: "Intervenez-vous partout en Bretagne pour les soirées d'entreprise ?",
    answer:
      "Oui, nous intervenons dans toute la Bretagne et les départements limitrophes : Rennes, Nantes, Vannes, Saint-Malo, Laval et leurs environs. Basés près de Redon, nous nous déplaçons avec l'ensemble du matériel son et lumière.",
  },
  {
    question: "Comment se passe la préparation d'une soirée d'entreprise ?",
    answer:
      "Un échange en amont avec l'organisateur (RH, CSE, direction ou agence) pour définir le déroulé, les temps forts, les contraintes du lieu et la couleur musicale. Le jour J, nous arrivons en avance pour l'installation et les tests : votre seul rôle est de profiter de la soirée avec vos équipes.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Animation DJ pour soirée d'entreprise en Bretagne",
  serviceType: "DJ soirée d'entreprise, séminaire, gala, CE/CSE",
  description:
    "Animation professionnelle de soirées d'entreprise en Bretagne : sonorisation, éclairage, animations interactives AnimaJet, photobooth personnalisé au logo. Formules de 800€ à 1600€.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: 'Bretagne, Grand Ouest',
  },
  offers: formules.map((f) => ({
    '@type': 'Offer',
    name: `Formule ${f.name}`,
    price: f.price,
    priceCurrency: 'EUR',
    description: f.description,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'DJ soirée entreprise', item: `${BASE}/${SLUG}` },
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

export default function DjSoireeEntreprisePage() {
  const enterpriseCities = cities.filter((c) => c.forEnterprise);

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
            href="/"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Accueil MG Events
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ soirée entreprise en <span className="text-[#c9a227]">Bretagne</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Une animation professionnelle et festive qui fédère vos équipes — sans soirée froide ni karaoké subi
              </h2>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Soirée de fin d&apos;année, séminaire, gala, vœux, événement CE/CSE : un DJ animateur
                  expérimenté, des quiz interactifs auxquels chacun participe depuis son téléphone, et un
                  photobooth personnalisé à votre logo.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                  <Mail size={18} />
                  Organiser une soirée d&apos;entreprise
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
                  src="/images/console-dj-pro.jpg"
                  alt="Console DJ professionnelle pour animation de soirée d'entreprise en Bretagne - MG Events"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le problème des soirées d'entreprise */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le vrai défi d&apos;une soirée d&apos;entreprise : <span className="text-[#c9a227]">faire participer tout le monde</span>
        </SectionTitle>
        <Prose>
          <p>
            Une soirée d&apos;entreprise réunit des personnes qui ne se côtoient pas toutes, d&apos;âges et
            de goûts musicaux très différents, dont certaines n&apos;ont aucune envie de danser à 21h devant
            leur direction. C&apos;est exactement le même défi qu&apos;un mariage toutes générations — notre
            spécialité depuis 25 ans.
          </p>
          <p>
            Notre méthode : commencer par une <strong className="text-white">ambiance musicale juste</strong>{' '}
            (assez présente pour installer l&apos;énergie, assez discrète pour que les conversations
            restent possibles), puis créer les premiers moments collectifs avec des{' '}
            <strong className="text-white">animations interactives</strong> — un quiz sur votre entreprise,
            un blind test par équipes — avant d&apos;ouvrir la piste quand la salle est prête, pas avant.
          </p>
          <p>
            Avec <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">AnimaJet</Link>,
            notre plateforme d&apos;animations conçue et développée maison, vos collaborateurs participent
            depuis leur téléphone via un QR code : pas d&apos;application à installer, pas de volontaire
            forcé sur scène. Les plus réservés jouent depuis leur table — et ce sont souvent eux qui
            finissent en tête du classement.
          </p>
        </Prose>
      </Section>

      {/* Déroulé */}
      <Section bg="#141414">
        <SectionTitle>Comment se déroule votre <span className="text-[#c9a227]">soirée</span></SectionTitle>
        <Steps
          steps={[
            {
              title: 'Préparation avec vous',
              text: "Un échange avec l'organisateur (RH, CSE, direction) : déroulé, temps forts, discours, remises de prix, contraintes du lieu et couleur musicale souhaitée.",
            },
            {
              title: 'Cocktail et repas animés',
              text: "Ambiance musicale calibrée, micro pour les prises de parole, puis quiz ou blind test interactif pour mélanger les équipes sans temps mort.",
            },
            {
              title: 'La piste se lance',
              text: "Lecture de la salle, montée progressive, photobooth qui tourne à plein régime : la soirée se termine sur la piste, pas devant le vestiaire à 22h30.",
            },
          ]}
        />
      </Section>

      {/* Formules */}
      <Section bg="#0a0a0a">
        <SectionTitle>Nos formules <span className="text-[#c9a227]">entreprise</span></SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {formules.map((formule) => (
            <div
              key={formule.name}
              className={`card-dark p-8 text-center ${formule.popular ? 'border-[#c9a227]/40' : ''}`}
            >
              {formule.popular && (
                <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-2">La plus demandée</p>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-2">{formule.name}</h3>
              <p className="mb-3">
                <span className="text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">{formule.price}</span>
                <span className="text-[#888] ml-2">€</span>
              </p>
              <p className="text-[#888] text-sm">{formule.description}</p>
            </div>
          ))}
        </div>
        <p className="text-[#888] text-sm text-center mt-6 max-w-2xl mx-auto">
          Chaque devis est ajusté à votre lieu, vos horaires et le format de votre événement.
        </p>
        <div className="mt-8 max-w-4xl mx-auto card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce que nous apportons</h3>
          <CheckList
            items={[
              'Sonorisation et éclairage professionnels adaptés à la salle',
              'Micro sans fil pour discours et remises de prix',
              'Quiz et blind test interactifs personnalisés (AnimaJet)',
              'Photobooth avec impressions personnalisées à votre logo',
              'DJ animateur habitué aux publics intergénérationnels',
              'Ponctualité, discrétion et tenue adaptée à votre événement',
            ]}
          />
        </div>
      </Section>

      {/* Villes */}
      <Section bg="#141414" narrow>
        <SectionTitle center={false}>
          Soirées d&apos;entreprise dans <span className="text-[#c9a227]">toute la Bretagne</span>
        </SectionTitle>
        <p className="text-[#888] mb-6">
          Basés près de Redon, nous animons vos événements d&apos;entreprise partout en Bretagne et dans
          les départements limitrophes :
        </p>
        <div className="flex flex-wrap gap-3">
          {enterpriseCities.map((city) => (
            <Link
              key={city.slug}
              href={`/dj-soiree-entreprise/${city.slug}`}
              className="inline-flex items-center gap-1.5 card-dark px-4 py-2 text-sm text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/30 transition-colors"
            >
              <MapPin size={14} className="text-[#c9a227]" />
              {city.name}
            </Link>
          ))}
          <Link
            href="/zones-intervention"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-[#c9a227] hover:underline"
          >
            Toutes nos zones →
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <section className="py-16 bg-[#0a0a0a]">
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

      {/* Maillage */}
      <Section bg="#141414" narrow>
        <SectionTitle center={false}>
          À découvrir <span className="text-[#c9a227]">aussi</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/animations-interactives-mariage', title: 'Animations interactives AnimaJet', desc: 'Quiz, blind test et photo live sur écran géant' },
            { href: '/photobooth-mariage', title: 'Photobooth vintage', desc: 'Personnalisable au logo de votre entreprise' },
            { href: '/dj-anniversaire-bretagne', title: 'DJ anniversaire', desc: 'Soirées privées et anniversaires en Bretagne' },
            { href: '/blog/quiz-ou-blind-test-mariage', title: 'Quiz ou blind test ?', desc: 'Choisir la bonne animation pour votre public' },
            { href: '/zones-intervention', title: "Zones d'intervention", desc: 'Bretagne et départements limitrophes' },
            { href: '/livre-dor-audio', title: "Livre d'Or Audio", desc: 'Le téléphone à messages, aussi pour les départs et jubilés' },
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
            Offrez à vos équipes une soirée <span className="text-[#c9a227]">dont elles parleront encore lundi</span>
          </h2>
          <p className="text-[#888] mb-8">
            Décrivez-nous votre événement : date, lieu, nombre de collaborateurs, format souhaité.
            Réponse et devis personnalisé sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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

      <SiteFooter />
    </div>
  );
}
