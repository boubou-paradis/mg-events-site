import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3 } from 'lucide-react';
import AnimaJetMeshBlock from '@/components/animajet/AnimaJetMeshBlock';

export const metadata: Metadata = {
  title: 'DJ Quimper · Mariage & Soirée · Avis 5★ · Dès 1200€',
  description: "DJ à Quimper pour mariage et soirée, dans tout le Finistère Sud : Concarneau, Bénodet, Fouesnant, Pont-l'Abbé, Douarnenez. Avis 5★, formules dès 1200€ TTC. 25 ans d'expérience, AnimaJet, photobooth vintage. Devis gratuit sous 24h ✓",
  keywords: 'DJ mariage Quimper, DJ Quimper, DJ mariage Finistère, animation mariage Quimper, DJ Concarneau, DJ mariage 29, animation soirée Quimper, DJ Cornouaille',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-quimper',
  },
  openGraph: {
    title: 'DJ Mariage Quimper | Animation Soirée Finistère - MG Events',
    description: "DJ mariage à Quimper et dans tout le Finistère Sud. 25 ans d'expérience, AnimaJet notre plateforme maison, photobooth vintage. Devis gratuit ✓",
    url: 'https://www.mg-events35.com/dj-mariage-quimper',
  },
};

const pointsForts = [
  { icon: Mic2, title: '+25 ans d\'expérience', description: 'DJ depuis 1999, discothèques finistériennes et mariages' },
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
    question: 'Quel est le prix d\'un DJ mariage à Quimper ?',
    answer: 'Nos formules DJ mariage à Quimper démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent le déplacement à Quimper et dans tout le Finistère Sud, l\'installation complète son et lumière, et le démontage.',
  },
  {
    question: 'Vous vous déplacez à Concarneau, Bénodet et Fouesnant ?',
    answer: 'Oui, nous intervenons dans tout le Finistère Sud sans frais supplémentaire : Quimper, Concarneau, Fouesnant, Bénodet, Pont-l\'Abbé, Douarnenez, Audierne, Plomelin, Ergué-Gabéric, Rosporden, Quimperlé, Trégunc, Névez, Clohars-Carnoët et l\'ensemble de la Cornouaille.',
  },
  {
    question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
    answer: 'Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle, 2 techniciens et la diffusion de vos musiques. Idéal pour les cérémonies en extérieur dans les châteaux et manoirs du Finistère, ou en bord de mer à Bénodet et Fouesnant.',
  },
  {
    question: 'Quelles animations proposez-vous pour un mariage à Quimper ?',
    answer: 'Nous proposons nos animations signature : AnimaJet (quiz interactif, photo mystère, partage live sur grand écran, roue de la destinée), notre plateforme que nous avons développée, photobooth vintage TSF années 60 avec impressions sur place, étincelles froides certifiées CE pour une ouverture de bal féerique, fumée lourde et jeux lumineux LED. Des animations que vos invités cornouaillais ne sont pas prêts d\'oublier !',
  },
  {
    question: 'Quel délai de réservation pour un mariage en Cornouaille ?',
    answer: 'Nous conseillons de réserver 12 à 18 mois à l\'avance pour les dates de mai à septembre. Les châteaux et manoirs de Cornouaille se réservent tôt, surtout en été avec la haute saison touristique. En basse saison, 6 mois peuvent suffire. N\'hésitez pas à nous contacter dès que votre date est fixée.',
  },
  {
    question: 'Comment choisir son DJ pour un mariage à Quimper ?',
    answer: 'Pour bien choisir votre DJ mariage à Quimper, vérifiez : l\'expérience réelle en mariage dans la région (pas seulement en discothèque), les avis vérifiables de mariés en Cornouaille, la qualité du matériel son et lumière, et la capacité à gérer toutes les générations. Chez MG Events, nous proposons une rencontre préalable pour construire ensemble votre soirée idéale.',
  },
  {
    question: 'Le matériel est-il adapté aux lieux de caractère de Cornouaille ?',
    answer: 'Absolument. Le Finistère est riche en manoirs et châteaux avec des configurations acoustiques particulières : pierres apparentes, poutres, salles voûtées. Nous adaptons systématiquement notre installation à la salle. Tout notre matériel est professionnel et conforme aux normes. Nos lanceurs d\'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE, sans danger pour les salles historiques.',
  },
];

const lieuxMariage29 = [
  { nom: 'Château de Lanniron', ville: 'Quimper', type: 'Château & Jardins' },
  { nom: 'Manoir de Kerhuel', ville: 'Plonéour-Lanvern', type: 'Manoir XVIe' },
  { nom: 'Château de Guilguiffin', ville: 'Landudec', type: 'Château de granit' },
  { nom: 'Manoir du Stang', ville: 'La Forêt-Fouesnant', type: 'Manoir & Bois' },
  { nom: 'Domaine de Kerampensal', ville: 'Elliant', type: 'Domaine champêtre' },
  { nom: 'Manoir de Coatanscour', ville: 'Plomelin', type: 'Manoir & Étang' },
];

const zonesIntervention = [
  { zone: 'Quimper Agglomération', villes: 'Quimper, Ergué-Gabéric, Plomelin, Pluguffan, Plonéour-Lanvern, Plogastel-Saint-Germain, Landudec, Quéménéven' },
  { zone: 'Cornouaille Sud', villes: 'Concarneau, Fouesnant, Bénodet, Clohars-Fouesnant, Trégunc, Névez, Pont-Aven, La Forêt-Fouesnant' },
  { zone: 'Pays Bigouden', villes: 'Pont-l\'Abbé, Loctudy, Penmarc\'h, Saint-Guénolé, Guilvinec, Plomeur, Treffiagat' },
  { zone: 'Cornouaille Ouest & Nord', villes: 'Douarnenez, Audierne, Pont-Croix, Châteaulin, Pleyben, Rosporden, Quimperlé, Bannalec' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.mg-events35.com/dj-mariage-quimper#organization',
  name: 'MG Events Animation - DJ Mariage Quimper',
  image: 'https://www.mg-events35.com/images/logo.png',
  description: 'DJ animateur professionnel pour mariage à Quimper et dans tout le Finistère Sud (29). Animation musicale, AnimaJet notre plateforme maison, photobooth vintage, étincelles froides. 25 ans d\'expérience en discothèques bretonnes.',
  url: 'https://www.mg-events35.com/dj-mariage-quimper',
  telephone: '+33648106166',
  email: 'contact@mg-events35.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Quimper',
    addressRegion: 'Bretagne',
    postalCode: '29000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.9959,
    longitude: -4.0967,
  },
  areaServed: [
    { '@type': 'City', name: 'Quimper' },
    { '@type': 'City', name: 'Concarneau' },
    { '@type': 'City', name: 'Fouesnant' },
    { '@type': 'City', name: 'Bénodet' },
    { '@type': 'City', name: 'Pont-l\'Abbé' },
    { '@type': 'City', name: 'Douarnenez' },
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
      author: { '@type': 'Person', name: 'Anaïg & Corentin' },
      reviewBody: 'Une soirée magique au Château de Lanniron. Guillaume a su marier tradition bretonne et hits contemporains, les invités ont dansé jusqu\'à la fermeture. On recommande les yeux fermés.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Camille & Yoann' },
      reviewBody: 'AnimaJet a été LE moment de notre mariage à Concarneau. Le quiz interactif a fait participer même nos grands-parents ! Une équipe ultra-professionnelle.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Rozenn & Pierrick' },
      reviewBody: 'Mariage à Fouesnant avec vue sur mer. Les étincelles froides pour notre première danse étaient féeriques. Merci à Guillaume et Laurence pour leur investissement !',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules DJ Mariage Quimper',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Formule Éclat d'Amour" }, price: '1200', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Rêve en Blanc' }, price: '1490', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Conte de Fées' }, price: '1690', priceCurrency: 'EUR' },
    ],
  },
};

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques finistériennes aux plus beaux châteaux de Cornouaille' },
  { icon: Disc3, value: 'AnimaJet', label: 'notre création', description: 'Quiz, photo mystère, blind test, roue de la destinée — développé maison' },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux manoirs et châteaux du 29' },
];

export default function DJMariageQuimper() {
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
                DJ Mariage <span className="text-[#c9a227]">Quimper</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation de soirée dans le Finistère Sud — Cornouaille, Bénodet, Concarneau
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
                Vous préparez votre mariage à <strong className="text-white">Quimper ou en Cornouaille</strong> ?
                MG Events Animation se déplace dans tout le Finistère Sud sans frais supplémentaire :
                <span className="text-[#c9a227]"> Quimper, Concarneau, Fouesnant, Bénodet, Pont-l&apos;Abbé, Douarnenez</span>,
                mais aussi Audierne, Plomelin, Ergué-Gabéric, Rosporden et l&apos;ensemble de la Cornouaille.
              </p>
              <p className="text-[#888] leading-relaxed mb-6">
                Avec <strong className="text-white">plus de 25 ans de carrière DJ</strong> — discothèques bretonnes et finistériennes depuis 1999 —
                et <span className="text-[#c9a227]">AnimaJet</span>, la plateforme que nous avons conçue et développée, nous transformons votre réception en
                une soirée inoubliable. De la cérémonie laïque à la soirée dansante : une animation élégante et sur mesure,
                avec une coordination complète avec vos prestataires.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                La Cornouaille regorge de <strong className="text-white">châteaux, manoirs et demeures de caractère</strong> — Château de Lanniron,
                Manoir de Kerhuel, Château de Guilguiffin — que nous connaissons parfaitement.
                Chaque lieu a ses spécificités acoustiques ; nous arrivons préparés pour que le son soit parfait,
                des salles voûtées aux jardins en bord d&apos;Odet.
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
                  alt="DJ mariage animation soirée Quimper Finistère Cornouaille"
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
            Pourquoi choisir <span className="text-[#c9a227]">MG Events</span> pour votre mariage à Quimper ?
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
            DJ Professionnel en Cornouaille — <span className="text-[#c9a227]">L&apos;Expérience Fait la Différence</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Avant d&apos;animer des mariages à <strong className="text-white">Quimper et en Finistère</strong>, j&apos;ai passé plus de 25 ans
            derrière les platines dans les plus grandes discothèques de Bretagne et du Finistère.
            Cette formation sur le terrain m&apos;a donné une capacité unique à
            <span className="text-[#c9a227]"> sentir l&apos;ambiance</span> et adapter la musique en temps réel
            — équilibre musical entre les générations, de la cérémonie laïque à la soirée dansante.
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
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-6 text-center">
              AnimaJet : <span className="text-[#c9a227]">l&apos;animation interactive qui change tout</span>
            </h3>
            <p className="text-[#888] text-center mb-6 max-w-2xl mx-auto">
              Conçu et développé par MG Events, notre système AnimaJet transforme votre soirée en expérience participative.
              Vos invités deviennent acteurs de la fête — une plateforme que nous maîtrisons de A à Z, puisque nous l&apos;avons créée.
            </p>
            <div className="grid sm:grid-cols-4 gap-4">
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Quiz interactif</p>
                <p className="text-[#888] text-sm">Tous les invités jouent en temps réel</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Partage photos</p>
                <p className="text-[#888] text-sm">Photos partagées sur écran géant en direct</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Blind test live</p>
                <p className="text-[#888] text-sm">Compétition musicale façon télé</p>
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
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">formules DJ mariage</span> à Quimper
          </h2>
          <p className="text-[#888] text-center mb-12">
            Prestations adaptées à vos envies, déplacement inclus dans tout le Finistère Sud
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
            Les plus beaux lieux de mariage <span className="text-[#c9a227]">en Cornouaille</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            La Cornouaille regorge de châteaux, manoirs et demeures de caractère en granit bleu.
            Nous connaissons parfaitement chaque lieu et adaptons notre installation à chaque espace acoustique.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lieuxMariage29.map((lieu, index) => (
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
            Et aussi : Manoir de Keromnès, Château du Dresnay, Domaine de Moulin Mer, Ferme du Bois de la Salle, Manoir de Trégarantec...
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage dans tout le <span className="text-[#c9a227]">Finistère Sud</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Aucun frais de déplacement</strong> dans toute la Cornouaille.
            De Quimper à Douarnenez, de Bénodet à Quimperlé, nous intervenons partout dans le 29.
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
            Ils nous ont fait confiance <span className="text-[#c9a227]">en Cornouaille</span>
          </h2>
          <p className="text-[#888] text-center mb-12">Témoignages de mariages animés dans le Finistère Sud</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Une soirée magique au Château de Lanniron. Guillaume a su marier tradition bretonne et hits contemporains,
                nos invités ont dansé jusqu&apos;à la fermeture. On recommande les yeux fermés.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Anaïg & Corentin</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Château de Lanniron, Quimper</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;AnimaJet a été LE moment de notre mariage. Le quiz interactif a fait participer même nos grands-parents !
                Une équipe ultra-professionnelle et une coordination parfaite avec notre traiteur.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Camille & Yoann</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Concarneau</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Mariage à Fouesnant avec vue sur mer. Les étincelles froides pour notre première danse étaient féeriques.
                Merci à Guillaume et Laurence pour leur investissement et leur professionnalisme !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Rozenn & Pierrick</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Fouesnant</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Excellent DJ pour notre mariage au Manoir de Kerhuel. La sono était parfaite dans ce cadre de pierre,
                et le photobooth vintage a fait un carton auprès de nos invités. Vraiment au top !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Nolwenn & Baptiste</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Manoir de Kerhuel, Cornouaille</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;La cérémonie laïque sonorisée sur la plage de Bénodet était un moment exceptionnel.
                Et la soirée dansante qui a suivi a tenu toutes ses promesses. Merci MG Events !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Lucie & Tom</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Bénodet</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Le rendez-vous de préparation en amont était très rassurant. Guillaume connaît vraiment les lieux de Cornouaille.
                Notre soirée au Château de Guilguiffin était exactement ce qu&apos;on avait rêvé.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Malo & Sophie</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Château de Guilguiffin, Landudec</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> — DJ Mariage Quimper
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
            <Link href="/dj-mariage-finistere" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Finistère (29)
            </Link>
            <Link href="/dj-mariage/rennes" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Rennes
            </Link>
            <Link href="/dj-mariage-morbihan" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Morbihan (56)
            </Link>
            <Link href="/dj-mariage-bretagne" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Bretagne
            </Link>
            <Link href="/#contact" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              Nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* Maillage AnimaJet */}
      <AnimaJetMeshBlock cityName="Quimper" />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre mariage à Quimper mérite une <span className="text-[#c9a227]">soirée d&apos;exception</span>
          </h2>
          <p className="text-[#888] mb-8">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h.
            Disponibilité vérifiée immédiatement pour le Finistère Sud.
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
