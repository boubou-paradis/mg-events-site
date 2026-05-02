import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DJ Mariage Laval | Animation Soirée Mayenne - MG Events',
  description: "DJ mariage à Laval et dans toute la Mayenne. Château-Gontier, Évron, Craon, Bonchamp-lès-Laval. 25 ans d'expérience, AnimaJet exclusif, photobooth vintage. Devis gratuit sous 24h ✓",
  keywords: 'DJ mariage Laval, DJ Laval, DJ mariage Mayenne, animation mariage Laval, DJ Château-Gontier, DJ mariage 53, animation soirée Laval',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-laval',
  },
  openGraph: {
    title: 'DJ Mariage Laval | Animation Soirée Mayenne - MG Events',
    description: "DJ mariage à Laval et dans toute la Mayenne. 25 ans d'expérience, AnimaJet exclusif, photobooth vintage. Devis gratuit ✓",
    url: 'https://www.mg-events35.com/dj-mariage-laval',
  },
};

const pointsForts = [
  { icon: Mic2, title: '+25 ans d\'expérience', description: 'DJ depuis 1999, discothèques bretonnes et mariages' },
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
    question: 'Quel est le prix d\'un DJ mariage à Laval ?',
    answer: 'Nos formules DJ mariage à Laval démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent le déplacement à Laval et dans toute la Mayenne, l\'installation complète son et lumière, et le démontage.',
  },
  {
    question: 'Vous vous déplacez à Château-Gontier, Évron et Craon ?',
    answer: 'Oui, nous intervenons dans toute la Mayenne sans frais supplémentaire : Laval, Château-Gontier-sur-Mayenne, Évron, Craon, Bonchamp-lès-Laval, Ernée, Mayenne ville, Villaines-la-Juhel, Montsûrs, Sainte-Suzanne... Tout le département 53 est couvert.',
  },
  {
    question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
    answer: 'Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle, 2 techniciens et la diffusion de vos musiques. Idéal pour les cérémonies en extérieur dans les châteaux et domaines de la Mayenne.',
  },
  {
    question: 'Quelles animations proposez-vous pour un mariage à Laval ?',
    answer: 'Nous proposons des animations exclusives : AnimaJet (quiz interactif, photo mystère, partage live sur grand écran), photobooth vintage TSF années 60 avec impressions sur place, étincelles froides certifiées CE pour une ouverture de bal spectaculaire, fumée lourde et jeux lumineux LED. Des animations que vos invités ne sont pas prêts d\'oublier !',
  },
  {
    question: 'Quel délai de réservation pour un mariage à Laval ?',
    answer: 'Nous conseillons de réserver 12 à 18 mois à l\'avance pour les dates de mai à septembre. Les châteaux et domaines de la Mayenne se réservent tôt. En basse saison, 6 mois peuvent suffire. N\'hésitez pas à nous contacter dès que votre date est fixée.',
  },
  {
    question: 'Comment choisir son DJ pour un mariage à Laval ?',
    answer: 'Pour bien choisir votre DJ mariage à Laval, vérifiez : l\'expérience réelle en mariage (pas seulement en discothèque), les avis vérifiables de mariés dans la région, la qualité du matériel son et lumière, et la capacité à gérer toutes les générations. Chez MG Events, nous proposons une rencontre préalable pour construire ensemble votre soirée idéale.',
  },
  {
    question: 'Le matériel est-il conforme aux normes de sécurité ?',
    answer: 'Absolument. Tout notre matériel est professionnel et conforme aux normes. Nos lanceurs d\'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE, sans danger pour les salles. Nous disposons d\'une assurance responsabilité civile professionnelle couvrant tous nos déplacements en Mayenne.',
  },
];

const lieuxMariage53 = [
  { nom: 'Château de Craon', ville: 'Craon', type: 'Château & Parc' },
  { nom: 'Domaine de Cimbré', ville: 'Bonchamp-lès-Laval', type: 'Domaine & Étang' },
  { nom: 'Château du Rocher', ville: 'Mézangers', type: 'Château historique' },
  { nom: 'Manoir de la Cour', ville: 'Quelaines-Saint-Gault', type: 'Manoir & Jardins' },
  { nom: 'Château de la Roche-Pichemer', ville: 'Bouère', type: 'Château Renaissance' },
  { nom: 'Domaine des Hayes', ville: 'Saint-Denis-d\'Anjou', type: 'Domaine champêtre' },
];

const zonesIntervention = [
  { zone: 'Laval Agglomération', villes: 'Laval, Saint-Berthevin, Changé, Bonchamp-lès-Laval, L\'Huisserie, Louverné, Entrammes, Laval-Changé' },
  { zone: 'Sud Mayenne', villes: 'Château-Gontier-sur-Mayenne, Craon, Cossé-le-Vivien, Renazé, Saint-Aignan-sur-Roë, Grez-en-Bouère' },
  { zone: 'Est Mayenne', villes: 'Évron, Montsûrs, Sainte-Suzanne, Bais, Jublains, Saint-Denis-de-Gastines' },
  { zone: 'Nord & Ouest Mayenne', villes: 'Mayenne, Ernée, Gorron, Villaines-la-Juhel, Ambrières-les-Vallées, Lassay-les-Châteaux' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.mg-events35.com/dj-mariage-laval#organization',
  name: 'MG Events Animation - DJ Mariage Laval',
  image: 'https://www.mg-events35.com/images/logo.png',
  description: 'DJ animateur professionnel pour mariage à Laval et dans toute la Mayenne (53). Animation musicale, AnimaJet exclusif, photobooth vintage, étincelles froides. 25 ans d\'expérience.',
  url: 'https://www.mg-events35.com/dj-mariage-laval',
  telephone: '+33648106166',
  email: 'contact@mg-events35.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Laval',
    addressRegion: 'Pays de la Loire',
    postalCode: '53000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.0734,
    longitude: -0.7695,
  },
  areaServed: [
    { '@type': 'City', name: 'Laval' },
    { '@type': 'City', name: 'Château-Gontier' },
    { '@type': 'City', name: 'Évron' },
    { '@type': 'City', name: 'Craon' },
    { '@type': 'City', name: 'Bonchamp-lès-Laval' },
    { '@type': 'City', name: 'Ernée' },
    { '@type': 'AdministrativeArea', name: 'Mayenne' },
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
      author: { '@type': 'Person', name: 'Sophie & Thomas' },
      reviewBody: 'Merci à Guillaume et Laurence pour leur investissement et professionnalisme. Notre mariage à Laval était une réussite totale. Ne changez pas !',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Claire & Antoine' },
      reviewBody: 'Mariage parfait au Château de Craon ! Une ambiance magique du cocktail jusqu\'à la fermeture. On recommande les yeux fermés.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Aurélie & Sébastien' },
      reviewBody: 'Les animations AnimaJet ont fait un carton lors de notre mariage à Château-Gontier. Tous nos invités en parlent encore des mois après !',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formules DJ Mariage Laval',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Formule Éclat d'Amour" }, price: '1200', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Rêve en Blanc' }, price: '1490', priceCurrency: 'EUR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Formule Conte de Fées' }, price: '1690', priceCurrency: 'EUR' },
    ],
  },
};

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques bretonnes aux plus beaux châteaux de la Mayenne' },
  { icon: Disc3, value: 'AnimaJet', label: 'exclusif', description: 'Animations interactives uniques : quiz, photo mystère, partage live' },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux salles et domaines du 53' },
];

export default function DJMariageLaval() {
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
              <img src="/images/logo.png" alt="MG Events Animation DJ Mariage Bretagne" className="h-14 w-auto" />
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
          <Link href="/dj-mariage-mayenne" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            DJ Mariage Mayenne (53)
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ Mariage <span className="text-[#c9a227]">Laval</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation de soirée en Mayenne — Château-Gontier, Évron, Craon
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
                Vous préparez votre mariage à <strong className="text-white">Laval ou dans la Mayenne</strong> ?
                MG Events Animation se déplace dans tout le département 53 sans frais supplémentaire :
                <span className="text-[#c9a227]"> Laval, Château-Gontier-sur-Mayenne, Évron, Craon, Bonchamp-lès-Laval</span>,
                mais aussi Ernée, Mayenne, Montsûrs, Sainte-Suzanne, Villaines-la-Juhel et l&apos;ensemble du bocage mayennais.
              </p>
              <p className="text-[#888] leading-relaxed mb-6">
                Avec <strong className="text-white">25 ans de carrière DJ</strong>, des centaines de mariages animés dans le Grand Ouest
                et notre technologie exclusive <span className="text-[#c9a227]">AnimaJet</span>, nous transformons votre réception en
                une soirée inoubliable. Animations interactives, photobooth vintage TSF, étincelles froides, fumée lourde —
                tout le spectacle qu&apos;on n&apos;attendait pas à Laval, et pourtant.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                La Mayenne regorge de <strong className="text-white">châteaux et domaines d&apos;exception</strong> — Château de Craon,
                Domaine de Cimbré, Château du Rocher — que nous connaissons parfaitement.
                Chaque salle a ses spécificités acoustiques ; nous arrivons préparés pour que le son soit parfait.
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
                  src="/images/gallery-5.jpg"
                  alt="DJ mariage animation soirée Laval Mayenne"
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
            Pourquoi choisir <span className="text-[#c9a227]">MG Events</span> pour votre mariage à Laval ?
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
            DJ Professionnel Depuis 1999 — <span className="text-[#c9a227]">L&apos;Expérience Fait la Différence</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Avant d&apos;animer des mariages à <strong className="text-white">Laval et en Mayenne</strong>, j&apos;ai passé plus de 25 ans
            derrière les platines dans les plus grandes discothèques bretonnes. Cette formation sur le terrain —
            des milliers de soirées à lire les dancefloors — m&apos;a donné une capacité unique à
            <span className="text-[#c9a227]"> sentir l&apos;ambiance</span> et adapter la musique en temps réel pour que personne ne reste assis.
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
              Unique dans le Grand Ouest, notre système AnimaJet transforme votre soirée en expérience participative.
              Vos invités deviennent acteurs de la fête : quiz musicaux en direct, photos mystère partagées sur grand écran,
              blind tests sur tablettes... Une animation que peu de DJs en Mayenne peuvent vous proposer.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Quiz interactif</p>
                <p className="text-[#888] text-sm">Tous les invités jouent en temps réel</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Photo mystère</p>
                <p className="text-[#888] text-sm">Photos partagées sur écran géant</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 text-center">
                <p className="text-[#c9a227] font-medium mb-1">Blind test live</p>
                <p className="text-[#888] text-sm">Compétition musicale façon télé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">formules DJ mariage</span> à Laval
          </h2>
          <p className="text-[#888] text-center mb-12">
            Prestations adaptées à vos envies, déplacement inclus dans tout le 53
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
        </div>
      </section>

      {/* Lieux de mariage */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Les plus beaux lieux de mariage <span className="text-[#c9a227]">autour de Laval</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            La Mayenne cache de véritables trésors : châteaux Renaissance, domaines champêtres, manoirs discrets.
            Nous connaissons parfaitement chaque lieu et adaptons notre installation à chaque espace.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lieuxMariage53.map((lieu, index) => (
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
            Et aussi : Domaine de la Guérie, Château de Montjean, Manoir du Tertre, Domaine de la Touche, Ferme de la Belottière...
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage dans tout le <span className="text-[#c9a227]">département 53</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Aucun frais de déplacement</strong> dans toute la Mayenne.
            De Laval à Évron, de Château-Gontier à Ernée, nous intervenons partout.
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
            Ils nous ont fait confiance <span className="text-[#c9a227]">en Mayenne</span>
          </h2>
          <p className="text-[#888] text-center mb-12">Témoignages de mariages animés dans le 53</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Merci à Guillaume et Laurence pour leur investissement et professionnalisme.
                Notre mariage à Laval était une réussite totale. Vous le faites par passion — ne changez pas !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Sophie & Thomas</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Laval</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Mariage parfait au Château de Craon ! Une ambiance magique du cocktail jusqu&apos;à la fermeture.
                Guillaume a su lire notre piste de danse et maintenir l&apos;énergie jusqu&apos;au bout.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Claire & Antoine</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Château de Craon</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Les animations AnimaJet ont fait un carton ! Tous nos invités, des grands-parents aux enfants,
                ont joué au quiz. Nos invités en parlent encore 6 mois après le mariage.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Aurélie & Sébastien</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Château-Gontier</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Les étincelles froides pour notre ouverture de bal au Domaine de Cimbré, c&apos;était féerique.
                Une équipe ultra-professionnelle et vraiment sympa. Merci pour tout !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Marion & Florian</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Domaine de Cimbré, Bonchamp</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Super prestation pour notre mariage près d&apos;Évron. La cérémonie laïque sonorisée était parfaite,
                et la soirée dansante a tenu toutes ses promesses. Vraiment au top !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Émilie & Nicolas</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage près d&apos;Évron</p>
            </div>
            <div className="card-dark p-6">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />)}</div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Le photobooth vintage a été l&apos;attraction de la soirée à Mayenne ville.
                Tous nos invités repartis avec leurs tirages photos. Une équipe qui fait vraiment la différence.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Léa & Maxime</p>
              <p className="text-[#888] text-sm flex items-center gap-1"><MapPin size={14} className="text-[#c9a227]" />Mariage à Mayenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> — DJ Mariage Laval
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

      {/* Maillage départements voisins */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Nous intervenons aussi dans les régions voisines
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dj-mariage-mayenne" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Mayenne (53)
            </Link>
            <Link href="/dj-mariage-ille-et-vilaine" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Ille-et-Vilaine (35)
            </Link>
            <Link href="/dj-mariage/rennes" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Rennes
            </Link>
            <Link href="/dj-mariage-loire-atlantique" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Loire-Atlantique (44)
            </Link>
            <Link href="/dj-mariage/nantes" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Nantes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre mariage à Laval mérite une <span className="text-[#c9a227]">soirée d&apos;exception</span>
          </h2>
          <p className="text-[#888] mb-8">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h.
            Disponibilité vérifiée immédiatement.
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
