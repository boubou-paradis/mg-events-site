import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DJ Mariage Rennes | Animation Soirée Ille-et-Vilaine - MG Events',
  description: "DJ mariage Rennes : animation sur mesure, 25 ans d'expérience, AnimaJet exclusif. Domaine de Cicé-Blossac, Château de Montmuran, manoirs rennais. Devis gratuit sous 24h ✓",
  keywords: 'DJ mariage Rennes, DJ Rennes mariage, animation mariage Rennes, DJ mariage 35, animation soirée Rennes, DJ Ille-et-Vilaine, animation mariage Rennes Bretagne',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-rennes',
  },
  openGraph: {
    title: 'DJ Mariage Rennes | Animation Soirée Ille-et-Vilaine - MG Events',
    description: "DJ mariage Rennes : animation sur mesure, 25 ans d'expérience, AnimaJet. Devis gratuit sous 24h ✓",
    url: 'https://www.mg-events35.com/dj-mariage-rennes',
  },
};

const pointsForts = [
  { icon: Mic2, title: '+25 ans d\'expérience', description: 'DJ depuis 1999, discothèques bretonnes et mariages dans le 35' },
  { icon: Sparkles, title: 'Effets spectaculaires', description: 'Étincelles froides certifiées CE, fumée lourde' },
  { icon: Camera, title: 'Photobooth vintage', description: 'Style TSF années 60, impressions sur place' },
  { icon: Music, title: 'AnimaJet exclusif', description: 'Animations interactives uniques dans le Grand Ouest' },
];

const formules = [
  { name: 'Éclat d\'Amour', price: '1200', description: 'L\'essentiel pour une soirée réussie' },
  { name: 'Rêve en Blanc', price: '1490', description: 'Notre formule la plus demandée', popular: true },
  { name: 'Conte de Fées', price: '1690', description: 'L\'expérience complète avec photobooth' },
];

const faqs = [
  {
    question: 'Quel est le tarif d\'un DJ mariage à Rennes ?',
    answer: 'Nos formules DJ mariage à Rennes démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent le déplacement dans toute l\'Ille-et-Vilaine, l\'installation complète son et lumière, et le démontage. Zéro surprise : tout est annoncé d\'emblée, sans options cachées.',
  },
  {
    question: 'Comment choisir son DJ pour un mariage à Rennes ?',
    answer: 'Pour bien choisir votre DJ mariage à Rennes, vérifiez avant tout l\'expérience réelle en mariage (et pas seulement en discothèque), les avis authentiques de mariés dans la région, la qualité du matériel son et lumière, et la capacité à gérer toutes les générations — des grands-parents aux enfants. Chez MG Events, nous proposons un rendez-vous de préparation personnalisé pour construire ensemble votre programme musical et le timing de votre soirée. Une relation de confiance avant le jour J, pas un service anonyme.',
  },
  {
    question: 'Quels styles de musique proposez-vous ?',
    answer: 'Notre répertoire couvre tous les univers musicaux : variété française des années 60 à aujourd\'hui, hits internationaux, pop, rock, électro, RnB, soul, reggaeton, mais aussi musique bretonne revisitée et fest-noz modernisé sur demande. Après 25 ans de discothèques, nous savons lire une piste de danse et adapter la programmation en temps réel — pas seulement suivre une playlist figée. L\'équilibre musical entre les générations est notre marque de fabrique.',
  },
  {
    question: 'Intervenez-vous pour les cérémonies laïques à Rennes ?',
    answer: 'Oui, nous proposons la sonorisation de cérémonie laïque à 180€, avec 2 techniciens dédiés. Idéal pour les cérémonies en extérieur dans les jardins du Domaine de Cicé-Blossac, les parcs des manoirs rennais ou les espaces verts du Domaine de Tizé. Vos musiques, en qualité professionnelle, pour un moment d\'émotion parfaite.',
  },
  {
    question: 'Vous déplacez-vous hors de Rennes, dans les communes du 35 ?',
    answer: 'Oui, nous intervenons dans toute l\'Ille-et-Vilaine sans frais supplémentaire : Rennes métropole (Cesson-Sévigné, Bruz, Saint-Jacques-de-la-Lande, Chantepie, Betton, Saint-Grégoire, Pacé, Vezin-le-Coquet, Le Rheu), mais aussi Montfort-sur-Meu, Vitré, Fougères, Redon, Saint-Malo, Dinard — et tout le 35. Les châteaux et domaines en dehors de Rennes (Château du Bois Guy à Parigné, Château de Montmuran aux Iffs, Château de la Ballue à Bazouges-la-Pérouse) font partie de nos lieux habituels.',
  },
  {
    question: 'Quel délai de réservation pour un mariage à Rennes ?',
    answer: 'Nous conseillons de réserver 12 à 18 mois à l\'avance pour les dates de mai à septembre. Les domaines et châteaux autour de Rennes — Cicé-Blossac, Montmuran, Domaine de Tizé — se réservent très tôt. En basse saison, 6 mois peuvent suffire. Contactez-nous dès que votre date est fixée : disponibilité vérifiée immédiatement.',
  },
  {
    question: 'Qu\'est-ce qui différencie MG Events des autres DJs à Rennes ?',
    answer: 'Trois choses que nos concurrents rennais ne proposent pas en même temps : 25 ans d\'expérience en discothèque (une école du dancefloor que les DJs "mariage only" n\'ont pas), AnimaJet en exclusivité dans le Grand Ouest (quiz interactif, photo mystère, blind test live — vos invités deviennent acteurs de la fête), et une transparence tarifaire totale. Pas de surprise le jour J, pas de prestation "au forfait" qu\'on découvre en cours de route. Guillaume et Laurence s\'investissent personnellement dans chaque mariage — ce n\'est pas une agence qui sous-traite.',
  },
];

const lieuxMariageRennes = [
  { nom: 'Domaine de Cicé-Blossac', ville: 'Bruz', type: 'Domaine & Golf', description: 'Golf 18 trous et jardins à la française — le lieu le plus demandé du 35' },
  { nom: 'Manoir de la Begaudière', ville: 'Rennes', type: 'Manoir XVIIe', description: 'Manoir historique avec parc arboré en plein cœur de Rennes' },
  { nom: 'Château du Bois Guy', ville: 'Parigné', type: 'Château', description: 'Château romantique avec étang et forêt privée, 45 min de Rennes' },
  { nom: 'Domaine de Tizé', ville: 'Thorigné-Fouillard', type: 'Domaine & Étangs', description: 'Domaine avec étangs et espaces verts à 15 min du centre de Rennes' },
  { nom: 'Château de Montmuran', ville: 'Les Iffs', type: 'Château historique', description: 'Château médiéval classé Monument Historique, 30 min de Rennes' },
  { nom: 'Le Florian', ville: 'Rennes', type: 'Salle de réception', description: 'Grande capacité, équipements modernes — idéal pour les grands mariages rennais' },
  { nom: 'Manoir du Plessis', ville: 'Cesson-Sévigné', type: 'Manoir & Jardins', description: 'Manoir de caractère à 10 min de Rennes, cadre intime et verdoyant' },
  { nom: 'Château de la Ballue', ville: 'Bazouges-la-Pérouse', type: 'Château XVIIe', description: 'Jardins labyrinthiques à la française, 45 min de Rennes' },
];

const zonesIntervention = [
  { zone: 'Rennes Métropole', villes: 'Rennes, Cesson-Sévigné, Bruz, Chantepie, Saint-Jacques-de-la-Lande, Betton, Saint-Grégoire, Pacé, Vezin-le-Coquet, Le Rheu, Montfort-sur-Meu' },
  { zone: 'Est & Nord Ille-et-Vilaine', villes: 'Vitré, Fougères, Acigné, Noyal-sur-Vilaine, Liffré, Thorigné-Fouillard, Châteaubourg, La Guerche-de-Bretagne' },
  { zone: 'Ouest & Sud Ille-et-Vilaine', villes: 'Redon, Bains-sur-Oust, Guichen, Corps-Nuds, Vern-sur-Seiche, Chartres-de-Bretagne, Mordelles' },
  { zone: 'Côte & Pays Malouin', villes: 'Saint-Malo, Dinard, Cancale, Dol-de-Bretagne, Combourg, Antrain, Pleine-Fougères' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.mg-events35.com/dj-mariage-rennes#organization',
  name: 'MG Events Animation - DJ Mariage Rennes',
  image: 'https://www.mg-events35.com/images/logo.png',
  description: 'DJ animateur professionnel pour mariage à Rennes et dans toute l\'Ille-et-Vilaine (35). Animation musicale, AnimaJet exclusif, photobooth vintage TSF, étincelles froides. 25 ans d\'expérience en discothèques bretonnes.',
  url: 'https://www.mg-events35.com/dj-mariage-rennes',
  telephone: '+33648106166',
  email: 'contact@mg-events35.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rennes',
    addressRegion: 'Bretagne',
    postalCode: '35000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.1173,
    longitude: -1.6778,
  },
  areaServed: [
    { '@type': 'City', name: 'Rennes' },
    { '@type': 'City', name: 'Cesson-Sévigné' },
    { '@type': 'City', name: 'Bruz' },
    { '@type': 'City', name: 'Vitré' },
    { '@type': 'City', name: 'Fougères' },
    { '@type': 'City', name: 'Saint-Malo' },
    { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
    { '@type': 'AdministrativeArea', name: 'Bretagne' },
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
      author: { '@type': 'Person', name: 'Morane & Kevin' },
      reviewBody: 'Merci à Guillaume et Laurence pour leur superbe prestation à notre mariage à Rennes ! Les invités ont été conquis et ont enflammé le dancefloor toute la nuit.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Sophie & Maxime' },
      reviewBody: 'Une soirée inoubliable au Manoir de la Begaudière. L\'ambiance était parfaite du début à la fin, toutes les générations ont dansé !',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Camille & Thomas' },
      reviewBody: 'Les étincelles froides pour notre ouverture de bal au Château du Bois Guy, c\'était magique. Le photobooth vintage a fait sensation auprès de nos invités.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Lucie & Antoine' },
      reviewBody: 'AnimaJet c\'est une idée de génie — le quiz interactif a mis une ambiance de folie ! Nos invités en parlent encore. Merci MG Events pour cette soirée parfaite.',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules DJ Mariage Rennes',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Formule Éclat d'Amour" }, price: '1200', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Rêve en Blanc' }, price: '1490', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Conte de Fées' }, price: '1690', priceCurrency: 'EUR' },
    ],
  },
};

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques bretonnes aux plus beaux châteaux et domaines du 35' },
  { icon: Disc3, value: 'AnimaJet', label: 'exclusif', description: 'Quiz, photo mystère, blind test live — unique dans le Grand Ouest' },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux manoirs et domaines rennais' },
];

const differentiateurs = [
  '25 ans de discothèques : une lecture du dancefloor que les DJs "mariage only" n\'ont pas',
  'AnimaJet exclusif dans le Grand Ouest : quiz, photo mystère, blind test live',
  'Photobooth vintage TSF années 60 avec impressions sur place',
  'Étincelles froides certifiées CE pour une ouverture de bal spectaculaire',
  'Cérémonie laïque sonorisée (180€) par 2 techniciens dédiés',
  'Coordination avec vos prestataires : traiteur, photographe, wedding planner',
  'Tarifs transparents, tout inclus — pas de surprise le jour J',
];

export default function DJMariageRennes() {
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
          <Link href="/dj-mariage-ille-et-vilaine" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            DJ Mariage Ille-et-Vilaine (35)
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ Mariage <span className="text-[#c9a227]">Rennes</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation de soirée en Ille-et-Vilaine — De la cérémonie laïque à la soirée dansante
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
                Vous préparez votre mariage à <strong className="text-white">Rennes ou dans l&apos;Ille-et-Vilaine</strong> ?
                MG Events Animation se déplace dans toute la métropole rennaise et le département 35 sans frais supplémentaire :
                <span className="text-[#c9a227]"> Cesson-Sévigné, Bruz, Saint-Jacques-de-la-Lande, Chantepie, Vitré, Fougères, Saint-Malo</span>
                et tous les châteaux et domaines qui jalonnent la région.
              </p>
              <p className="text-[#888] leading-relaxed mb-6">
                Avec <strong className="text-white">plus de 25 ans de carrière DJ</strong> — discothèques bretonnes depuis 1999 —
                et notre technologie exclusive <span className="text-[#c9a227]">AnimaJet</span>, nous transformons votre réception en
                une soirée inoubliable. Une <strong className="text-white">animation élégante et sur mesure</strong>,
                avec coordination complète avec vos prestataires : traiteur, photographe, wedding planner.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Rennes est la capitale bretonne du mariage haut de gamme : <strong className="text-white">châteaux, domaines et demeures de caractère</strong> —
                Domaine de Cicé-Blossac, Château de Montmuran, Manoir de la Begaudière — que nous connaissons parfaitement.
                Chaque salle a ses spécificités acoustiques ; nous arrivons préparés pour que le son soit impeccable.
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
                  src="/images/gallery-1.jpg"
                  alt="DJ mariage animation soirée Rennes Ille-et-Vilaine"
                  fill
                  className="object-cover"
                  priority
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
            Pourquoi choisir <span className="text-[#c9a227]">MG Events</span> pour votre mariage à Rennes ?
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

      {/* Expertise */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Professionnel à Rennes Depuis 1999 — <span className="text-[#c9a227]">L&apos;Expérience Fait la Différence</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Avant d&apos;animer des mariages à <strong className="text-white">Rennes et dans l&apos;Ille-et-Vilaine</strong>, j&apos;ai passé
            plus de 25 ans derrière les platines dans les plus grandes discothèques de Bretagne.
            Cette formation sur le terrain — des milliers de soirées à lire les dancefloors —
            m&apos;a donné une capacité unique à <span className="text-[#c9a227]">sentir l&apos;ambiance</span> et adapter la musique en temps réel,
            avec cet <strong className="text-white">équilibre musical entre les générations</strong> qui est notre marque de fabrique.
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

          {/* Ce que les autres DJs rennais ne proposent pas */}
          <div className="card-dark p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-6 text-center">
              Ce que les autres DJs à Rennes <span className="text-[#c9a227]">ne proposent pas</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {differentiateurs.map((diff, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
                  <p className="text-[#888] text-sm">{diff}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AnimaJet */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-dark p-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-4 text-center">
              AnimaJet : <span className="text-[#c9a227]">l&apos;animation interactive exclusive à Rennes</span>
            </h2>
            <p className="text-[#888] text-center mb-8 max-w-2xl mx-auto">
              Unique dans le Grand Ouest, notre système AnimaJet transforme votre soirée rennaise en expérience participative.
              Vos invités deviennent acteurs de la fête — aucun DJ concurrent à Rennes ne peut vous proposer ça.
            </p>
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Quiz interactif</p>
                <p className="text-[#888] text-sm">Tous les invités jouent en temps réel sur leur téléphone</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Photo mystère</p>
                <p className="text-[#888] text-sm">Photos partagées sur écran géant en direct</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Blind test live</p>
                <p className="text-[#888] text-sm">Compétition musicale façon émission TV</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Roue de la destinée</p>
                <p className="text-[#888] text-sm">Gages et défis pour animer la soirée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">formules DJ mariage</span> à Rennes
          </h2>
          <p className="text-[#888] text-center mb-12">
            Tarifs clairs, déplacement inclus dans tout le 35 — aucune surprise
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
            Option cérémonie laïque sonorisée : <span className="text-white font-medium">+180€</span> — 2 techniciens, sonorisation professionnelle
          </p>
        </div>
      </section>

      {/* Lieux de mariage */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Les plus belles salles de réception <span className="text-[#c9a227]">à Rennes et en Ille-et-Vilaine</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Rennes offre l&apos;une des plus belles sélections de <strong className="text-white">châteaux, domaines et manoirs</strong> du Grand Ouest.
            Nous connaissons chaque lieu, ses contraintes acoustiques et son ambiance — nous arrivons toujours préparés.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lieuxMariageRennes.map((lieu, index) => (
              <div key={index} className="card-dark p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#c9a227]/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">{lieu.nom}</h3>
                    <p className="text-[#888] text-xs">{lieu.ville} • {lieu.type}</p>
                  </div>
                </div>
                <p className="text-[#666] text-xs leading-relaxed">{lieu.description}</p>
              </div>
            ))}
          </div>
          <p className="text-[#666] text-sm text-center mt-8">
            Et aussi : Château de la Robinais, Château des Rochers, Domaine de la Roche, Manoir de Keralio, Ferme de la Haute Lande...
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage dans tout le <span className="text-[#c9a227]">département 35</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Aucun frais de déplacement</strong> dans toute l&apos;Ille-et-Vilaine.
            De Rennes à Saint-Malo, de Fougères à Redon — nous intervenons partout dans le 35.
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
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Ils nous ont fait confiance <span className="text-[#c9a227]">à Rennes</span>
          </h2>
          <p className="text-[#888] text-center mb-12">Témoignages de mariages animés dans le 35</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Merci à Guillaume et Laurence pour leur superbe prestation. Les invités ont été conquis et ont enflammé le dancefloor toute la nuit !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Morane & Kevin</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Domaine de Cicé-Blossac</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Une soirée inoubliable au Manoir de la Begaudière. L&apos;ambiance était parfaite du début à la fin, toutes les générations ont dansé !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Sophie & Maxime</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Manoir de la Begaudière</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Les étincelles froides pour notre ouverture de bal, c&apos;était magique. Le photobooth vintage TSF a fait sensation auprès de tous nos invités.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Camille & Thomas</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Château du Bois Guy</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;AnimaJet c&apos;est une idée de génie — le quiz interactif a mis une ambiance de folie ! Nos invités en parlent encore des mois après.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Lucie & Antoine</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Domaine de Tizé</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> — DJ Mariage Rennes
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
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Nous intervenons aussi dans les régions voisines
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dj-mariage-ille-et-vilaine" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Ille-et-Vilaine (35)
            </Link>
            <Link href="/dj-mariage-bretagne" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Bretagne
            </Link>
            <Link href="/dj-mariage-morbihan" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Morbihan (56)
            </Link>
            <Link href="/dj-mariage-finistere" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Finistère (29)
            </Link>
            <Link href="/zones-intervention" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              Toutes nos zones →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre mariage à Rennes mérite une <span className="text-[#c9a227]">soirée d&apos;exception</span>
          </h2>
          <p className="text-[#888] mb-8">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h.
            Disponibilité vérifiée immédiatement pour toute l&apos;Ille-et-Vilaine.
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
