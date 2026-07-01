import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { cities } from '@/data/cities';

const SLUG = 'dj-anniversaire-bretagne';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'DJ Anniversaire Bretagne | Animation soirée privée',
  description:
    "DJ animateur pour votre anniversaire en Bretagne : 30, 40, 50, 60 ans, soirée privée ou familiale. Musique toutes générations, quiz interactifs, photobooth. Devis gratuit sous 24h.",
  keywords:
    'DJ anniversaire Bretagne, DJ anniversaire Ille-et-Vilaine, DJ soirée privée Bretagne, animation anniversaire adulte, DJ anniversaire 40 ans, DJ anniversaire 50 ans, animation anniversaire Rennes',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'DJ anniversaire en Bretagne | MG Events Animation',
    description:
      'Une soirée privée à votre image : musique toutes générations, animations interactives et effets pour marquer le coup. 30, 40, 50, 60 ans et plus.',
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/scene-anniversaire-1.jpg` }],
  },
};

const faqs = [
  {
    question: 'Animez-vous les anniversaires en Bretagne ?',
    answer:
      "Oui : anniversaires adultes (30, 40, 50, 60 ans et plus), fêtes de famille et soirées privées font partie de nos prestations régulières, dans toute la Bretagne et les départements limitrophes. Basés près de Redon, nous nous déplaçons avec tout le matériel son et lumière.",
  },
  {
    question: "Comment gérez-vous une soirée avec plusieurs générations d'invités ?",
    answer:
      "C'est notre quotidien depuis 25 ans, sur les mariages comme sur les anniversaires. La règle : chacun doit entendre « sa » musique au bon moment. On construit la soirée en montée progressive — ambiance pendant le repas, premiers tubes fédérateurs, puis la piste qui monte en énergie — en lisant la salle en permanence.",
  },
  {
    question: 'Proposez-vous des animations en plus de la musique ?',
    answer:
      "Oui : quiz personnalisé sur la personne fêtée (souvenirs, photos d'enfance, anecdotes), blind test par équipes, photo live sur écran… Avec AnimaJet, notre plateforme d'animations interactives, les invités participent depuis leur téléphone via un QR code, sans installer d'application. Le photobooth vintage et le Livre d'Or Audio sont aussi disponibles.",
  },
  {
    question: "Peut-on organiser une surprise pour la personne fêtée ?",
    answer:
      "Bien sûr, et c'est souvent le meilleur moment de la soirée. Nous préparons avec vous l'entrée surprise, la vidéo souvenir sur écran, le quiz spécial ou le medley de ses chansons favorites — en toute discrétion, avec un groupe WhatsApp dédié aux organisateurs.",
  },
  {
    question: "Quel est le tarif d'un DJ pour un anniversaire ?",
    answer:
      "Le tarif dépend de la durée, du lieu, du matériel nécessaire et des animations souhaitées : chaque anniversaire est différent, du repas de famille à la grande soirée dansante. Décrivez-nous votre projet via le formulaire de contact : devis gratuit et personnalisé sous 24h.",
  },
  {
    question: 'Fournissez-vous le matériel son et lumière ?',
    answer:
      "Oui, l'intégralité : sonorisation adaptée à la taille de la salle, éclairage de piste, micro sans fil pour les discours et les surprises. Vous n'avez rien à louer de votre côté.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Animation DJ pour anniversaire et soirée privée en Bretagne',
  serviceType: 'DJ anniversaire, soirée privée, fête de famille',
  description:
    "DJ animateur pour anniversaires adultes et soirées privées en Bretagne : sonorisation, éclairage, animations interactives personnalisées, photobooth vintage.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: 'Bretagne, Grand Ouest',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'DJ anniversaire Bretagne', item: `${BASE}/${SLUG}` },
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

export default function DjAnniversaireBretagnePage() {
  const birthdayCities = cities.filter((c) => c.forBirthday);

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
                DJ anniversaire en <span className="text-[#c9a227]">Bretagne</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                30, 40, 50, 60 ans… une soirée privée à votre image, qui fait danser toutes les générations
              </h2>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Un anniversaire réussi, c&apos;est une salle où grands-parents, amis d&apos;enfance et
                  collègues finissent sur la même piste de danse. Musique sur mesure, quiz personnalisé sur
                  la personne fêtée, photobooth vintage : on construit la soirée autour de vous.
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
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20 bg-[#141414]">
                <Image
                  src="/images/scene-anniversaire-1.jpg"
                  alt="Soirée anniversaire animée par DJ avec éclairage de piste - MG Events Bretagne"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approche */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Un anniversaire, ça ne s&apos;anime pas comme <span className="text-[#c9a227]">une boîte de nuit</span>
        </SectionTitle>
        <Prose>
          <p>
            Le piège classique d&apos;une soirée d&apos;anniversaire : une playlist calée sur les goûts
            d&apos;une seule génération, un volume qui empêche les conversations pendant le repas, et une
            piste qui ne démarre jamais vraiment. Après 25 ans de soirées — discothèques bretonnes,
            mariages, anniversaires — on sait qu&apos;une salle se gagne progressivement.
          </p>
          <p>
            Concrètement : pendant le repas, la musique reste un <strong className="text-white">fond
            complice</strong>, jamais un obstacle. Les animations arrivent au bon moment — un{' '}
            <strong className="text-white">quiz personnalisé sur la personne fêtée</strong> fait toujours
            mouche : photos d&apos;enfance sur écran, anecdotes que seuls les amis de lycée connaissent,
            questions piège pour la famille. Puis vient l&apos;heure de la piste, lancée sur les titres qui
            fédèrent, avant de monter en énergie en lisant la salle.
          </p>
          <p>
            Et parce qu&apos;un anniversaire mérite aussi ses souvenirs : le{' '}
            <Link href="/photobooth-mariage" className="text-[#c9a227] hover:underline">photobooth vintage</Link>{' '}
            fait repartir chaque invité avec sa photo imprimée, et le{' '}
            <Link href="/livre-dor-audio" className="text-[#c9a227] hover:underline">Livre d&apos;Or Audio</Link>{' '}
            recueille les messages vocaux de vos proches — à réécouter longtemps après la fête.
          </p>
        </Prose>
      </Section>

      {/* Déroulé */}
      <Section bg="#141414">
        <SectionTitle>Comment se construit <span className="text-[#c9a227]">votre soirée</span></SectionTitle>
        <Steps
          steps={[
            {
              title: 'On prépare ensemble',
              text: "Un échange sur la personne fêtée, les invités, la salle et vos envies : playlist, surprises, quiz personnalisé, vidéo souvenir. Groupe WhatsApp avec les organisateurs.",
            },
            {
              title: 'Repas et animations',
              text: "Ambiance musicale dosée, micro pour les discours, quiz et blind test au bon moment — courts, rythmés, jamais imposés.",
            },
            {
              title: 'La piste pour finir',
              text: "Des tubes fédérateurs aux sons plus actuels, la montée en énergie se fait en lisant la salle. Objectif : tout le monde debout, des cousins aux grands-parents.",
            },
          ]}
        />
      </Section>

      {/* Ce qui est inclus */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Ce que comprend la <span className="text-[#c9a227]">prestation</span>
        </SectionTitle>
        <div className="card-dark p-6">
          <CheckList
            items={[
              'DJ animateur présent toute la soirée',
              'Sonorisation adaptée à la taille de votre salle',
              'Éclairage de piste et ambiance',
              'Micro sans fil pour discours et surprises',
              'Quiz personnalisé et blind test interactifs (AnimaJet)',
              'Préparation en amont et coordination des surprises',
            ]}
          />
          <p className="text-[#888] text-sm mt-6">
            Options : <Link href="/photobooth-mariage" className="text-[#c9a227] hover:underline">photobooth vintage</Link>,{' '}
            <Link href="/livre-dor-audio" className="text-[#c9a227] hover:underline">Livre d&apos;Or Audio</Link>,{' '}
            <Link href="/etincelles-froides-mariage" className="text-[#c9a227] hover:underline">étincelles froides</Link> pour
            l&apos;arrivée du gâteau. Chaque anniversaire étant différent, le devis est établi sur mesure.
          </p>
        </div>
      </Section>

      {/* Villes */}
      <Section bg="#141414" narrow>
        <SectionTitle center={false}>
          Anniversaires dans <span className="text-[#c9a227]">toute la Bretagne</span>
        </SectionTitle>
        <p className="text-[#888] mb-6">
          Nous animons vos anniversaires et soirées privées partout en Bretagne et dans les départements
          limitrophes :
        </p>
        <div className="flex flex-wrap gap-3">
          {birthdayCities.map((city) => (
            <Link
              key={city.slug}
              href={`/animation-anniversaire/${city.slug}`}
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
            { href: '/animations-interactives-mariage', title: 'Animations interactives AnimaJet', desc: 'Quiz, blind test et photo live personnalisés' },
            { href: '/photobooth-mariage', title: 'Photobooth vintage', desc: 'Des souvenirs imprimés pour vos invités' },
            { href: '/livre-dor-audio', title: "Livre d'Or Audio", desc: 'Les messages vocaux de vos proches' },
            { href: '/dj-soiree-entreprise', title: 'DJ soirée entreprise', desc: 'Séminaires, galas et soirées CE/CSE' },
            { href: '/dj-mariage-bretagne', title: 'DJ mariage Bretagne', desc: 'Notre prestation mariage complète' },
            { href: '/zones-intervention', title: "Zones d'intervention", desc: 'Bretagne et départements limitrophes' },
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
            Un anniversaire qui vous <span className="text-[#c9a227]">ressemble</span>
          </h2>
          <p className="text-[#888] mb-8">
            Racontez-nous la personne fêtée, la salle et vos envies : nous construisons la soirée avec
            vous. Devis gratuit et personnalisé sous 24h.
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
