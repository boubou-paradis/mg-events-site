import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight, Check } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';

const SLUG = 'photobooth-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Photobooth Mariage Bretagne | Borne photo vintage TSF',
  description:
    "Photobooth vintage TSF années 60 pour votre mariage en Bretagne : appareil reflex, écran tactile 15\", 150 impressions incluses. Inclus formule Conte de Fées ou location 240€.",
  keywords:
    'photobooth mariage Bretagne, photobooth vintage mariage, location photobooth mariage, borne photo mariage, photobooth mariage Rennes, photobooth TSF, animation photo mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Photobooth vintage mariage en Bretagne | MG Events Animation',
    description:
      'La cabine photo vintage TSF années 60 : impressions instantanées, personnalisation à vos prénoms, souvenirs pour tous vos invités.',
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/photobooth-1.jpg` }],
  },
};

const faqs = [
  {
    question: 'Le photobooth est-il inclus dans vos formules mariage ?',
    answer:
      "Le photobooth vintage est inclus sans supplément dans notre formule Conte de Fées (1690€ TTC). Avec les formules Éclat d'Amour et Rêve en Blanc, il est disponible en option à 240€, avec 150 tirages inclus.",
  },
  {
    question: 'Peut-on louer le photobooth seul, sans prestation DJ ?',
    answer:
      "Oui, le photobooth vintage est disponible en location seule à 240€ avec 150 tirages inclus. C'est une solution appréciée pour les mariages qui ont déjà leur animation, mais aussi pour les anniversaires et les soirées d'entreprise.",
  },
  {
    question: 'Combien de photos les invités peuvent-ils imprimer ?',
    answer:
      "150 impressions sont incluses. Les photos sont imprimées sur place, instantanément : vos invités repartent avec leur souvenir dans la poche, et vous récupérez l'ensemble des clichés numériques après le mariage.",
  },
  {
    question: 'Le photobooth est-il personnalisé pour notre mariage ?',
    answer:
      'Oui. Les impressions sont personnalisées avec vos prénoms et la date de votre mariage. Le style vintage TSF années 60 de la cabine en fait aussi un élément de décoration à part entière, qui trouve sa place dans tous les thèmes, du champêtre au château.',
  },
  {
    question: "Comment fonctionne le photobooth pour les invités ?",
    answer:
      "C'est très simple : un écran tactile de 15 pouces guide chaque invité, un appareil reflex professionnel prend la photo (bien plus qualitative qu'une webcam), et l'imprimante sort le tirage en quelques secondes. Aucune application à installer, tout le monde y arrive du premier coup.",
  },
  {
    question: 'Où installer le photobooth dans la salle de réception ?',
    answer:
      "Nous l'installons à un endroit visible mais à l'écart de la piste de danse — souvent près du bar ou du coin lounge — pour qu'il vive toute la soirée sans gêner le service du traiteur ni la sono. L'installation et la désinstallation sont comprises, nous nous occupons de tout.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Photobooth vintage pour mariage en Bretagne',
  serviceType: 'Location de photobooth — borne photo vintage TSF pour mariage',
  description:
    "Photobooth vintage TSF années 60 avec appareil reflex, écran tactile 15 pouces et 150 impressions incluses. Inclus dans la formule Conte de Fées ou en location à 240€.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: 'Bretagne, Grand Ouest',
  },
  offers: {
    '@type': 'Offer',
    price: '240',
    priceCurrency: 'EUR',
    description: 'Location du photobooth vintage avec 150 tirages inclus (inclus sans supplément dans la formule Conte de Fées).',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Photobooth mariage', item: `${BASE}/${SLUG}` },
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

export default function PhotoboothMariagePage() {
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
            href="/#photobooth"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Le photobooth en images
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Photobooth mariage en <span className="text-[#c9a227]">Bretagne</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                La borne photo vintage TSF années 60 qui fait repartir vos invités avec un souvenir imprimé
              </h2>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Un appareil reflex professionnel, un écran tactile, une imprimante instantanée — le tout
                  dans une cabine au look rétro qui décore votre salle autant qu&apos;elle l&apos;anime.
                  150 impressions incluses, personnalisées à vos prénoms.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                  <Mail size={18} />
                  Ajouter un photobooth à mon mariage
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
                  src="/images/photobooth-1.jpg"
                  alt="Photobooth vintage TSF années 60 pour mariage en Bretagne - MG Events Animation"
                  fill
                  className="object-cover"
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
          Un photobooth <span className="text-[#c9a227]">vintage</span>, pas une simple borne
        </SectionTitle>
        <Prose>
          <p>
            La plupart des bornes photo se ressemblent : une boîte noire avec une tablette. Notre{' '}
            <strong className="text-white">photobooth vintage style TSF années 60</strong> est un objet à
            part entière, que les invités remarquent dès leur arrivée. Posé près du bar ou du coin lounge,
            il attire naturellement les curieux — et une fois la première photo imprimée, la file ne
            désemplit plus de la soirée.
          </p>
          <p>
            Côté technique, rien n&apos;est laissé au hasard : un{' '}
            <strong className="text-white">appareil reflex professionnel</strong> (pas une webcam), un{' '}
            <strong className="text-white">écran tactile de 15 pouces</strong> qui guide les invités, et une
            imprimante qui sort chaque tirage en quelques secondes. Les photos sont{' '}
            <span className="text-[#c9a227]">personnalisées avec vos prénoms et votre date</span> — un vrai
            souvenir de votre mariage, pas une photo anonyme.
          </p>
          <p>
            En fin de soirée, beaucoup de couples nous disent que le coin photobooth a été le deuxième
            point de rencontre du mariage après la piste de danse : les générations s&apos;y croisent, les
            tablées se mélangent, et les grands-parents s&apos;y prêtent au jeu aussi volontiers que les
            enfants.
          </p>
        </Prose>
      </Section>

      {/* Comment ça se passe */}
      <Section bg="#141414">
        <SectionTitle>Comment se passe le <span className="text-[#c9a227]">photobooth</span> le jour J</SectionTitle>
        <Steps
          steps={[
            {
              title: 'On installe, vous ne gérez rien',
              text: "Nous installons la cabine à l'endroit idéal de votre salle, à l'écart de la piste et du service traiteur. Tout est prêt avant l'arrivée des invités.",
            },
            {
              title: 'Vos invités jouent toute la soirée',
              text: "Écran tactile, appareil reflex, impression instantanée : chacun repart avec son tirage personnalisé à vos prénoms. 150 impressions incluses.",
            },
            {
              title: 'Vous gardez tous les clichés',
              text: "Après le mariage, vous récupérez l'ensemble des photos numériques : les poses sérieuses, les fous rires et tout ce qui s'est passé entre les deux.",
            },
          ]}
        />
      </Section>

      {/* Tarif */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Photobooth inclus ou en <span className="text-[#c9a227]">location</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card-dark p-6">
            <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-2">Inclus dans</p>
            <p className="text-white font-[family-name:var(--font-display)] text-lg mb-1">Conte de Fées</p>
            <p className="text-[#888] text-sm">
              Sans supplément dans notre formule complète à 1690€ TTC : DJ animateur, fumée lourde,
              étincelles froides, Livre d&apos;Or Audio et photobooth.
            </p>
          </div>
          <div className="card-dark p-6 border-[#c9a227]/30">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-[#c9a227] uppercase tracking-wider">Location seule</p>
              <div className="text-right">
                <span className="text-3xl font-[family-name:var(--font-display)] text-[#c9a227]">240</span>
                <span className="text-[#888] ml-1">€</span>
              </div>
            </div>
            <p className="text-[#888] text-sm flex items-start gap-2">
              <Check size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
              150 tirages inclus — à ajouter à n&apos;importe quelle formule ou à réserver seul.
            </p>
          </div>
        </div>
        <div className="mt-8 card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce qui est compris</h3>
          <CheckList
            items={[
              'Cabine vintage TSF années 60, élément déco à part entière',
              'Appareil photo reflex professionnel',
              'Écran tactile 15" simple pour toutes les générations',
              '150 impressions instantanées incluses',
              'Personnalisation des tirages à vos prénoms et votre date',
              'Installation, désinstallation et assistance comprises',
            ]}
          />
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

      {/* Maillage */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          À découvrir <span className="text-[#c9a227]">aussi</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/blog/photobooth-vintage-mariage-bretagne', title: 'Guide du photobooth vintage', desc: 'Conseils et idées pour bien l\'utiliser' },
            { href: '/livre-dor-audio', title: "Livre d'Or Audio", desc: 'Le téléphone rétro à messages vocaux' },
            { href: '/animations-interactives-mariage', title: 'Animations interactives AnimaJet', desc: 'Quiz, blind test et photo live' },
            { href: '/tarifs-dj-mariage', title: 'Tarifs DJ mariage', desc: 'Formules et options en toute transparence' },
            { href: '/dj-mariage-bretagne', title: 'DJ mariage Bretagne', desc: 'Notre prestation complète' },
            { href: '/mur-photo-mariage', title: 'Mur photo en direct', desc: 'Les photos des invités sur grand écran' },
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
            Offrez un <span className="text-[#c9a227]">souvenir imprimé</span> à chacun de vos invités
          </h2>
          <p className="text-[#888] mb-8">
            Photobooth inclus dans la formule Conte de Fées ou en location à 240€. Dites-nous votre date
            et votre lieu : devis gratuit sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis gratuit
            </Link>
            <Link href="/tarifs-dj-mariage" className="btn-outline inline-flex items-center gap-2">
              Voir tous nos tarifs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
