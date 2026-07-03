import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3 } from 'lucide-react';
import AnimaJetMeshBlock from '@/components/animajet/AnimaJetMeshBlock';

export const metadata: Metadata = {
  title: 'DJ Morlaix · Mariage & Soirée · Avis 5★ · Dès 1200€',
  description: "DJ à Morlaix pour mariage et soirée, dans tout le Finistère Nord : Roscoff, Saint-Pol-de-Léon, Carantec, Plougasnou, Landivisiau. Avis 5★, formules dès 1200€ TTC. 25 ans d'expérience, AnimaJet. Devis gratuit sous 24h ✓",
  keywords: 'DJ mariage Morlaix, DJ Morlaix, DJ mariage Finistère Nord, animation mariage Morlaix, DJ Roscoff, DJ Saint-Pol-de-Léon, DJ mariage 29, animation soirée Morlaix',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-morlaix',
  },
  openGraph: {
    title: 'DJ Mariage Morlaix | Animation Soirée Finistère - MG Events',
    description: "DJ mariage à Morlaix et dans le Finistère Nord. 25 ans d'expérience discothèques Finistère, AnimaJet notre plateforme maison. Devis gratuit ✓",
    url: 'https://www.mg-events35.com/dj-morlaix',
  },
};

const pointsForts = [
  { icon: Mic2, title: '+25 ans en discothèque', description: 'Forgé sur les scènes du Finistère depuis 1999' },
  { icon: Sparkles, title: 'Effets spectaculaires', description: 'Étincelles froides certifiées CE, fumée lourde' },
  { icon: Camera, title: 'Photobooth vintage', description: 'Style TSF années 60, impressions sur place' },
  { icon: Music, title: 'AnimaJet, notre création', description: 'Animations interactives conçues et développées par MG Events' },
];

const formules = [
  { name: 'Éclat d\'Amour', price: '1200', description: 'L\'essentiel pour une soirée réussie' },
  { name: 'Rêve en Blanc', price: '1490', description: 'Notre formule la plus demandée', popular: true },
  { name: 'Conte de Fées', price: '1690', description: 'L\'expérience complète avec photobooth' },
];

const faqs = [
  {
    question: 'Quel est le prix d\'un DJ mariage à Morlaix ?',
    answer: 'Nos formules DJ mariage à Morlaix démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent le déplacement à Morlaix et dans tout le Finistère Nord, l\'installation son et lumière complète, et le démontage.',
  },
  {
    question: 'Vous déplacez-vous à Roscoff, Saint-Pol-de-Léon et Carantec ?',
    answer: 'Oui, nous intervenons dans tout le Finistère Nord sans frais supplémentaire : Morlaix, Roscoff, Saint-Pol-de-Léon, Carantec, Plougasnou, Landivisiau, Landerneau, Saint-Thégonnec-Loc-Eguiner... Tout le pays de Morlaix et le Léon sont couverts.',
  },
  {
    question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
    answer: 'Oui, prestation cérémonie laïque à 180€ : sonorisation professionnelle, 2 techniciens, diffusion de vos musiques. Parfait pour les cérémonies en extérieur dans les enclos paroissiaux, les chapelles ou face à la baie de Morlaix.',
  },
  {
    question: 'Quelles animations proposez-vous pour un mariage à Morlaix ?',
    answer: 'Nos animations signature : AnimaJet (quiz interactif, photo mystère partagée sur grand écran, blind test en direct), notre plateforme que nous avons développée, photobooth vintage TSF années 60 avec impressions immédiates, étincelles froides certifiées CE pour l\'ouverture de bal, fumée lourde et jeux lumineux LED. Des prestations qui font la différence dans le Finistère.',
  },
  {
    question: 'Quel délai de réservation pour un mariage à Morlaix ?',
    answer: 'Nous recommandons de réserver 12 à 18 mois à l\'avance pour les dates de mai à septembre. Les domaines du Finistère Nord se réservent tôt. En basse saison, 6 mois peuvent suffire. Contactez-nous dès que votre date est fixée pour vérifier les disponibilités.',
  },
  {
    question: 'Comment choisir son DJ pour un mariage à Morlaix ?',
    answer: 'Privilégiez un DJ qui connaît réellement le Finistère : les salles, les traiteurs locaux, les contraintes acoustiques des lieux de caractère. Vérifiez les avis, demandez des références de mariages dans la région et rencontrez le DJ avant de signer. Chez MG Events, nous proposons une rencontre préalable pour construire votre soirée sur mesure.',
  },
  {
    question: 'Le matériel est-il conforme aux normes de sécurité ?',
    answer: 'Absolument. Tout notre matériel est professionnel et conforme aux normes. Nos lanceurs d\'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE, sans danger pour les salles. Nous disposons d\'une assurance responsabilité civile professionnelle pour toutes nos interventions en Finistère.',
  },
];

const lieuxMariage29Nord = [
  { nom: 'Château du Taureau', ville: 'Baie de Morlaix', type: 'Château insulaire Vauban' },
  { nom: 'Manoir de Coat Amour', ville: 'Morlaix', type: 'Manoir & Jardins' },
  { nom: 'Manoir de Kerlut', ville: 'Ploudaniel', type: 'Manoir breton' },
  { nom: 'Domaine de Keridreuff', ville: 'Saint-Martin-des-Champs', type: 'Domaine champêtre' },
  { nom: 'Manoir de Kergrist', ville: 'Ploubezre', type: 'Manoir Renaissance' },
  { nom: 'Ferme de Kerguélen', ville: 'Carantec', type: 'Ferme rénovée vue mer' },
];

const zonesIntervention = [
  { zone: 'Morlaix & Agglomération', villes: 'Morlaix, Saint-Martin-des-Champs, Plourin-lès-Morlaix, Garlan, Plouigneau, Lanmeur, Plouezoc\'h' },
  { zone: 'Léon & Pays de Léon', villes: 'Saint-Pol-de-Léon, Roscoff, Carantec, Landivisiau, Landerneau, Saint-Thégonnec, Guimiliau' },
  { zone: 'Trégor Finistérien', villes: 'Plougasnou, Locquirec, Plounévez-Lochrist, Cléder, Sibiril, Taulé, Plouénan' },
  { zone: 'Vers Brest', villes: 'Brest, Plougastel-Daoulas, Guipavas, Lesneven, La Roche-Maurice, Daoulas, Plabennec' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.mg-events35.com/dj-morlaix#organization',
  name: 'MG Events Animation - DJ Mariage Morlaix',
  image: 'https://www.mg-events35.com/images/logo.png',
  description: 'DJ animateur professionnel pour mariage à Morlaix et dans le Finistère Nord (29). Animation musicale, AnimaJet notre plateforme maison, photobooth vintage, étincelles froides. 25 ans d\'expérience.',
  url: 'https://www.mg-events35.com/dj-morlaix',
  telephone: '+33648106166',
  email: 'contact@mg-events35.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Morlaix',
    addressRegion: 'Bretagne',
    postalCode: '29600',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.5778,
    longitude: -3.8278,
  },
  areaServed: [
    { '@type': 'City', name: 'Morlaix' },
    { '@type': 'City', name: 'Roscoff' },
    { '@type': 'City', name: 'Saint-Pol-de-Léon' },
    { '@type': 'City', name: 'Carantec' },
    { '@type': 'City', name: 'Plougasnou' },
    { '@type': 'City', name: 'Landivisiau' },
    { '@type': 'AdministrativeArea', name: 'Finistère' },
  ],
  priceRange: '1200€ - 1690€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '20:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Solène & Erwan' },
      reviewBody: 'Animation musicale au top pour notre mariage à Morlaix. Guillaume a su créer une ambiance incroyable dans notre salle. Merci pour cette soirée mémorable !',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Pauline & Romain' },
      reviewBody: 'Des professionnels adorables et très réactifs. Notre mariage à Morlaix était parfait. La fumée lourde pour la danse restera gravée dans nos mémoires.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Anaïs & Loïc' },
      reviewBody: 'Mariage face à la baie de Morlaix, une ambiance inoubliable ! Guillaume connaît parfaitement la région et ça se sent dans son approche.',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules DJ Mariage Morlaix',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Formule Éclat d'Amour" }, price: '1200', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Rêve en Blanc' }, price: '1490', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Conte de Fées' }, price: '1690', priceCurrency: 'EUR' },
    ],
  },
};

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Forgé dans les discothèques du Finistère : Le Kalicut, La Guinguette, Le 29...' },
  { icon: Disc3, value: 'AnimaJet', label: 'notre création', description: 'Animations interactives développées maison : quiz, photo mystère, blind test live' },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux salles du Finistère Nord' },
];

export default function DJMorlaix() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="MG Events Animation DJ Mariage Bretagne"
                width={200}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Accueil</Link>
              <Link href="/#formules" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Nos formules</Link>
              <Link href="/blog" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Blog</Link>
              <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link href="/dj-mariage-finistere" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            DJ Mariage Finistère (29)
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ Mariage <span className="text-[#c9a227]">Morlaix</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation de soirée dans le Finistère — Roscoff, Saint-Pol-de-Léon, Carantec
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
                Votre mariage à <strong className="text-white">Morlaix ou dans le Finistère Nord</strong> mérite un DJ qui connaît
                vraiment le territoire. MG Events Animation se déplace à
                <span className="text-[#c9a227]"> Morlaix, Roscoff, Saint-Pol-de-Léon, Carantec, Plougasnou, Landivisiau</span>
                et dans tout le pays de Léon — sans frais de déplacement supplémentaire.
              </p>
              <p className="text-[#888] leading-relaxed mb-6">
                Notre ancrage dans le Finistère est réel : <strong className="text-white">25 ans de scène dans les discothèques du 29</strong>,
                dont certaines entre Brest et Morlaix. Cette expérience unique sur les dancefloors finistériens nous a appris
                à lire les ambiances, à sentir le moment où la piste bascule — et à ne jamais la laisser retomber.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                De l&apos;insolite <strong className="text-white">Château du Taureau</strong> (forteresse Vauban accessible en bateau)
                aux manoirs du Léon, en passant par les fermes rénovées de la baie de Carantec —
                nous connaissons les contraintes de chaque lieu et arrivons préparés. Et
                <span className="text-[#c9a227]"> AnimaJet</span>, la plateforme que nous avons conçue et développée, transforme chaque soirée en expérience participative mémorable.
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
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="DJ mariage animation soirée Morlaix Finistère"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Pourquoi choisir <span className="text-[#c9a227]">MG Events</span> pour votre mariage à Morlaix ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pointsForts.map((point, index) => (
              <div key={index} className="card-dark p-6 text-center">
                <point.icon size={40} className="text-[#c9a227] mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">{point.title}</h3>
                <p className="text-[#888] text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Finistère */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Forgé dans les Discothèques du Finistère — <span className="text-[#c9a227]">Une Expertise Authentique</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Ce n&apos;est pas une ligne sur un CV : j&apos;ai passé <strong className="text-white">plus de 25 ans derrière les platines</strong>
            dans les discothèques du Finistère — Le Kalicut, La Guinguette, Le 29, et d&apos;autres scènes du pays de Morlaix.
            Cette formation terrain, des milliers de soirées à gérer des pistes de danse exigeantes,
            me donne aujourd&apos;hui ce que les DJs d&apos;occasion ne peuvent pas avoir :
            <span className="text-[#c9a227]"> l&apos;instinct du dancefloor</span>.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {musicStats.map((stat, index) => (
              <div key={index} className="card-dark p-6 text-center">
                <stat.icon size={40} className="text-[#c9a227] mx-auto mb-4" />
                <div className="text-xl font-[family-name:var(--font-display)] text-white mb-1">
                  <strong>{stat.value}</strong> {stat.label}
                </div>
                <p className="text-[#888] text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="card-dark p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-4 text-center">
              Morlaix & le Finistère Nord : <span className="text-[#c9a227]">un territoire que nous connaissons</span>
            </h3>
            <p className="text-[#888] mb-4">
              La région morlaisienne a ses spécificités. Les salles voûtées des vieux manoirs, l&apos;acoustique
              particulière des granges en granite rénovées, les espaces ouverts face à la baie où le vent peut
              compliquer la sonorisation — nous avons appris à maîtriser tout ça sur le terrain.
            </p>
            <p className="text-[#888]">
              Morlaix est aussi une ville culturelle avec une vie associative forte. Ses habitants apprécient
              la qualité, l&apos;authenticité et... une bonne ambiance. Nous partageons ces valeurs. À chaque mariage
              dans la région, nous apportons ce même soin à créer une soirée qui correspond vraiment à votre
              identité — pas un copier-coller de soirée générique.
            </p>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">formules DJ mariage</span> à Morlaix
          </h2>
          <p className="text-[#888] text-center mb-12">
            Prestations adaptées à vos envies, déplacement inclus dans tout le Finistère
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {formules.map((formule, index) => (
              <div key={index} className={`card-dark p-6 ${formule.popular ? 'border-[#c9a227]/40' : ''}`}>
                {formule.popular && (
                  <span className="inline-block px-3 py-1 bg-[#c9a227] text-[#0a0a0a] text-xs font-semibold uppercase rounded-full mb-4">
                    Populaire
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-2">{formule.name}</h3>
                <p className="text-[#888] text-sm mb-4">{formule.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-[family-name:var(--font-display)] text-[#c9a227]">{formule.price}</span>
                  <span className="text-[#888] ml-2">€ TTC</span>
                </div>
                <Link href="/#formules" className="text-[#c9a227] text-sm hover:underline">
                  Voir le détail →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-[#888] text-center mt-8 text-sm">
            <span className="text-[#c9a227] font-medium">Nouveauté</span> — sublimez la sortie des mariés avec notre{' '}
            <Link href="/feu-artifice-jour" className="text-[#c9a227] hover:underline">feu d&apos;artifice de jour</Link>{' '}
            (poudre Holi, 4 couleurs au choix, 120€)
          </p>
        </div>
      </section>

      {/* Lieux de mariage */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Les plus beaux lieux de mariage <span className="text-[#c9a227]">autour de Morlaix</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Du Château du Taureau sur son îlot aux manoirs du Léon, le Finistère Nord abrite des lieux
            de réception exceptionnels et souvent méconnus. Nous les connaissons tous.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lieuxMariage29Nord.map((lieu, index) => (
              <div key={index} className="card-dark p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c9a227]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#c9a227]" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">{lieu.nom}</h3>
                  <p className="text-[#888] text-xs">{lieu.ville} • {lieu.type}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#666] text-sm text-center mt-8">
            Et aussi : Manoir de Traon Ar Vilin, Domaine de Kernévez, Château de Kerdruc, Ferme de Keriolet...
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage dans tout le <span className="text-[#c9a227]">Finistère Nord</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Aucun frais de déplacement</strong> dans tout le Finistère.
            De Morlaix à Roscoff, de Landivisiau à Plougasnou, nous intervenons partout.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {zonesIntervention.map((zone, index) => (
              <div key={index} className="card-dark p-5">
                <h3 className="text-[#c9a227] font-medium mb-2 flex items-center gap-2">
                  <MapPin size={16} />
                  {zone.zone}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">{zone.villes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Ils nous ont fait confiance <span className="text-[#c9a227]">dans le Finistère</span>
          </h2>
          <p className="text-[#888] text-center mb-12">Témoignages de mariages animés dans le pays de Morlaix et le Finistère Nord</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Animation musicale au top pour notre mariage à Morlaix. Guillaume a su créer
                une ambiance incroyable dans notre salle. Merci pour cette soirée mémorable !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Solène & Erwan</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Morlaix</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Des professionnels adorables et très réactifs. Notre mariage à Morlaix était parfait.
                La fumée lourde pour la danse et les étincelles restera gravée dans nos mémoires. Merci !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Pauline & Romain</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Morlaix</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Mariage face à la baie de Morlaix, une ambiance inoubliable ! Guillaume connaît
                parfaitement la région et ça se sent dans son approche. Le photobooth a fait un carton.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Anaïs & Loïc</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage en baie de Morlaix</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Super prestation pour notre mariage à Carantec avec vue sur l&apos;île Callot.
                Les animations AnimaJet ont conquis tous nos invités. Une équipe au top !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Camille & Yann</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Carantec</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Notre mariage à Saint-Pol-de-Léon était magique. Guillaume a mis une ambiance
                de folie toute la nuit, toutes générations confondues. On recommande à 100% !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Marine & Tanguy</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Saint-Pol-de-Léon</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Merci pour votre investissement, gentillesse et professionnalisme.
                Notre mariage à Landivisiau était une fête magnifique. Ne changez surtout pas !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Océane & Francky</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Landivisiau</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> — DJ Mariage Morlaix
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

      {/* Maillage Finistère */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Découvrez nos autres pages Finistère et Bretagne
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dj-mariage-finistere" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Finistère (29)
            </Link>
            <Link href="/dj-mariage/brest" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Brest
            </Link>
            <Link href="/dj-mariage/quimper" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Quimper
            </Link>
            <Link href="/dj-mariage-ille-et-vilaine" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Ille-et-Vilaine (35)
            </Link>
            <Link href="/dj-mariage-morbihan" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Morbihan (56)
            </Link>
          </div>
        </div>
      </section>

      {/* Maillage AnimaJet */}
      <AnimaJetMeshBlock cityName="Morlaix" />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre mariage à Morlaix mérite le <span className="text-[#c9a227]">meilleur</span>
          </h2>
          <p className="text-[#888] mb-8">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h.
            Disponibilité vérifiée immédiatement pour votre date.
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

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-[#c9a227] hover:underline">
              ← Retour à l&apos;accueil MG Events - DJ Mariage Bretagne
            </Link>
            <div className="flex items-center gap-4 text-sm text-[#666]">
              <Link href="/mentions-legales" className="hover:text-[#c9a227] transition-colors">Mentions légales</Link>
              <span>|</span>
              <Link href="/cgv" className="hover:text-[#c9a227] transition-colors">CGV</Link>
              <span>|</span>
              <Link href="/confidentialite" className="hover:text-[#c9a227] transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
