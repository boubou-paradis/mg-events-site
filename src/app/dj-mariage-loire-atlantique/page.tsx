import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, HelpCircle } from 'lucide-react';
import AnimaJetMeshBlock from '@/components/animajet/AnimaJetMeshBlock';

export const metadata: Metadata = {
  title: 'DJ Mariage Loire-Atlantique (44) | MG Events Animation Nantes',
  description: "DJ animateur mariage en Loire-Atlantique (44). Nantes, Saint-Nazaire, La Baule, Guérande, Pornic, Clisson. +20 ans d'expérience, photobooth vintage, animations interactives. Devis gratuit ✓",
  keywords: 'DJ mariage Loire-Atlantique, DJ mariage 44, DJ mariage Nantes, DJ mariage Saint-Nazaire, DJ mariage La Baule, DJ mariage Guérande, DJ mariage Pornic, DJ mariage Clisson, animation mariage Pays de la Loire',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-loire-atlantique',
  },
  openGraph: {
    title: 'DJ Mariage Loire-Atlantique (44) | MG Events Animation Nantes',
    description: "DJ animateur mariage en Loire-Atlantique (44). Nantes, Saint-Nazaire, La Baule, Guérande. +20 ans d'expérience, photobooth vintage, animations interactives.",
    url: 'https://www.mg-events35.com/dj-mariage-loire-atlantique',
  },
};

const pointsForts = [
  { icon: Mic2, title: '+20 ans d\'expérience', description: 'Plus de 100 mariages animés en Bretagne' },
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
    question: 'Quel est le prix d\'un DJ mariage à Nantes ?',
    answer: 'Nos formules DJ mariage en Loire-Atlantique démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent le déplacement dans tout le département 44.',
  },
  {
    question: 'Vous déplacez-vous à La Baule et Saint-Nazaire ?',
    answer: 'Oui, nous couvrons toute la Loire-Atlantique sans frais supplémentaire : Nantes, Saint-Nazaire, Guérande, La Baule, Pornic, Ancenis, Châteaubriant, Clisson, Le Croisic, Pornichet... La côte Atlantique n\'a pas de secret pour nous !',
  },
  {
    question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
    answer: 'Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle et 2 techniciens. Idéal pour les cérémonies en plein air dans les domaines viticoles et châteaux du vignoble nantais.',
  },
  {
    question: 'Quelles animations proposez-vous pour un mariage dans le 44 ?',
    answer: 'Nous proposons nos animations signature : AnimaJet (quiz interactif, photo mystère, partage live), notre plateforme que nous avons développée, photobooth vintage TSF années 60, étincelles froides certifiées CE, fumée lourde et jeux lumineux. Parfait pour les mariages face à l\'océan !',
  },
  {
    question: 'Quel est le délai de réservation pour un mariage à Nantes ?',
    answer: 'Nous conseillons de réserver 12 à 18 mois à l\'avance pour les dates prisées (mai à septembre). Les mariages à Nantes, La Baule et sur la côte sont très demandés. Pour la basse saison, 6 mois peuvent suffire.',
  },
  {
    question: 'Le matériel est-il adapté aux salles en bord de mer ?',
    answer: 'Absolument. Notre matériel professionnel est adapté à tous types de lieux : châteaux, domaines viticoles, salles face à l\'océan. Nos lanceurs d\'étincelles froides sont certifiés CE et nous disposons d\'une assurance RC professionnelle.',
  },
];

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques bretonnes aux plus beaux mariages de Nantes et la côte' },
  { icon: Disc3, value: 'Répertoire', label: 'musical complet', description: "80's, rock, variété française, hits actuels, électro... toutes les générations" },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux domaines et châteaux du 44' },
];

const musicFaqs = [
  { question: 'Quel style de musique passez-vous en mariage ?', answer: "Notre répertoire couvre tous les styles : années 80, rock, new wave, variété française, hits actuels, électro, musiques du monde. Nous adaptons la programmation à vos goûts et à l'ambiance de la soirée." },
  { question: 'Peut-on vous transmettre une playlist personnalisée ?', answer: "Absolument ! Nous créons ensemble votre playlist idéale en amont, tout en gardant la flexibilité de nous adapter en direct aux réactions de la piste de danse." },
  { question: "L'ambiance est-elle adaptée à toutes les générations ?", answer: "C'est notre spécialité. Avec 25 ans d'expérience en discothèque, nous savons fédérer grands-parents, parents et jeunes sur la même piste de danse." },
];

// Données structurées pour le SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mg-events35.com/dj-mariage-loire-atlantique#organization",
  "name": "MG Events Animation - DJ Mariage Loire-Atlantique",
  "image": "https://www.mg-events35.com/images/logo.png",
  "description": "DJ animateur professionnel pour mariage en Loire-Atlantique (44). Animation musicale, photobooth vintage, étincelles froides à Nantes, Saint-Nazaire, La Baule.",
  "url": "https://www.mg-events35.com/dj-mariage-loire-atlantique",
  "telephone": "+33648106166",
  "email": "contact@mg-events35.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nantes",
    "addressRegion": "Pays de la Loire",
    "postalCode": "44000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.2184,
    "longitude": -1.5536
  },
  "areaServed": [
    { "@type": "City", "name": "Nantes" },
    { "@type": "City", "name": "Saint-Nazaire" },
    { "@type": "City", "name": "La Baule" },
    { "@type": "City", "name": "Guérande" },
    { "@type": "City", "name": "Pornic" },
    { "@type": "City", "name": "Clisson" },
    { "@type": "City", "name": "Ancenis" },
    { "@type": "City", "name": "Châteaubriant" },
    { "@type": "AdministrativeArea", "name": "Loire-Atlantique" }
  ],
  "priceRange": "1200€ - 1690€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "45",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Pauline & Nicolas" },
      "reviewBody": "Notre mariage près de Nantes était une vraie réussite grâce à MG Events. Nous n'avons eu que des super retours des invités !"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Émilie & Romain" },
      "reviewBody": "Mariage parfait à La Baule avec vue sur l'océan. Guillaume et Laurence ont su créer une ambiance magique jusqu'au bout de la nuit."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Aurélie & Florian" },
      "reviewBody": "Superbe prestation dans notre domaine viticole à Clisson. Les animations AnimaJet ont conquis tous nos invités."
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Formules DJ Mariage",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Formule Éclat d'Amour" },
        "price": "1200",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Formule Rêve en Blanc" },
        "price": "1490",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Formule Conte de Fées" },
        "price": "1690",
        "priceCurrency": "EUR"
      }
    ]
  }
};

const lieuxMariage44 = [
  { nom: "Domaine de la Frémoire", ville: "Vertou", type: "Domaine viticole" },
  { nom: "Château de la Gascherie", ville: "La Chapelle-sur-Erdre", type: "Château" },
  { nom: "Domaine de la Ragotière", ville: "La Regrippière", type: "Domaine viticole" },
  { nom: "Manoir de la Jahotière", ville: "Saint-Herblain", type: "Manoir" },
  { nom: "Château du Pé", ville: "Saint-Julien-de-Concelles", type: "Château & Vignes" },
  { nom: "Domaine de Pont Carré", ville: "Guérande", type: "Domaine" },
];

const zonesIntervention44 = [
  { zone: "Nantes Métropole", villes: "Nantes, Rezé, Saint-Herblain, Orvault, Carquefou, Vertou, Bouguenais, Saint-Sébastien-sur-Loire" },
  { zone: "Côte Atlantique", villes: "La Baule, Pornichet, Le Croisic, Le Pouliguen, Saint-Nazaire, Pornic, Saint-Brévin" },
  { zone: "Presqu'île de Guérande", villes: "Guérande, La Turballe, Piriac-sur-Mer, Mesquer, Herbignac" },
  { zone: "Vignoble Nantais", villes: "Clisson, Vallet, Le Loroux-Bottereau, La Chapelle-Heulin, Mouzillon" },
  { zone: "Nord Loire", villes: "Châteaubriant, Ancenis, Nort-sur-Erdre, Blain, Savenay" },
];

export default function DJMariageLoireAtlantique() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Schema.org LocalBusiness avec Reviews intégrées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
          <Link href="/" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ Mariage <span className="text-[#c9a227]">Loire-Atlantique</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation de mariage à Nantes et dans tout le 44
              </h2>
              <p className="text-[#888] leading-relaxed mb-8">
                Vous cherchez un <strong className="text-white">DJ pour votre mariage en Loire-Atlantique (44)</strong> ?
                MG Events Animation se déplace dans tout le département : <span className="text-[#c9a227]">Nantes, Saint-Nazaire, La Baule, Guérande</span>,
                mais aussi <span className="text-[#c9a227]">Pornic, Clisson, Ancenis, Le Croisic, Pornichet, Vertou, Rezé,
                Orvault, Carquefou, Châteaubriant</span> et tout le vignoble nantais.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Avec plus de <strong className="text-white">20 ans d&apos;expérience</strong> et plus de 100 mariages animés,
                nous transformons votre soirée en un moment inoubliable. Que ce soit face à l&apos;océan à La Baule ou dans un domaine viticole à Clisson,
                notre force ? Des animations interactives avec <span className="text-[#c9a227]">AnimaJet</span>, la plateforme que nous avons conçue et développée, un photobooth vintage,
                et des effets spectaculaires (fumée lourde, étincelles froides certifiées CE).
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
                  src="/images/gallery-4.jpg"
                  alt="DJ mariage ambiance Loire-Atlantique"
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
            Pourquoi choisir <span className="text-[#c9a227]">MG Events</span> pour votre mariage ?
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

      {/* Experience Musicale */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Professionnel Depuis 1999 — <span className="text-[#c9a227]">Une Expertise Unique</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Avant de devenir <strong className="text-white">DJ animateur de mariage en Loire-Atlantique</strong>, j&apos;ai passé plus de 25 ans
            à faire vibrer les dancefloors des discothèques bretonnes. Cette expérience me permet de <span className="text-[#c9a227]">lire une piste de danse</span> et d&apos;adapter la musique en temps réel.
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
              Questions sur notre <span className="text-[#c9a227]">animation musicale</span>
            </h3>
            <div className="space-y-4">
              {musicFaqs.map((faq, index) => (
                <div key={index} className="border-b border-[#c9a227]/10 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-white font-medium mb-2 flex items-start gap-2">
                    <HelpCircle size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
                    {faq.question}
                  </h4>
                  <p className="text-[#888] text-sm pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* FAQ Schema - Toutes les FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [...faqs, ...musicFaqs].map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
              }))
            })
          }}
        />
      </section>

      {/* Formules */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">formules de mariage</span>
          </h2>
          <p className="text-[#888] text-center mb-12">
            Des prestations adaptées à vos envies et votre budget
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

      {/* Lieux de mariage populaires en Loire-Atlantique */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Lieux de mariage populaires en <span className="text-[#c9a227]">Loire-Atlantique</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Nous connaissons parfaitement les plus beaux <strong className="text-white">lieux de réception du 44</strong> :
            domaines viticoles du vignoble nantais, châteaux, manoirs et salles face à l&apos;océan.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lieuxMariage44.map((lieu, index) => (
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
            Et bien d&apos;autres lieux : Château de la Chesnaie, Domaine de l&apos;Oiselinière, Manoir de l&apos;Espérance,
            Les Jardins de la Mignardière, Le Domaine du Bois Saint-Louis...
          </p>
        </div>
      </section>

      {/* Zones d'intervention détaillées */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage dans tout le <span className="text-[#c9a227]">département 44</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Déplacement inclus</strong> dans toute la Loire-Atlantique.
            De la côte Atlantique au vignoble nantais, nous intervenons partout.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zonesIntervention44.map((zone, index) => (
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
            Ils nous ont fait confiance en <span className="text-[#c9a227]">Loire-Atlantique</span>
          </h2>
          <p className="text-[#888] text-center mb-12">
            Témoignages de mariages animés dans le 44
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Témoignage 1 - Nantes */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Si vous cherchez un DJ pour n&apos;importe quelle occasion prenez le les yeux fermés.
                Notre mariage près de Nantes était une vraie réussite. Tous les invités étaient ravis !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Pauline & Nicolas</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Nantes
              </p>
            </div>

            {/* Témoignage 2 - La Baule */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Mariage parfait avec vue sur l&apos;océan ! Guillaume et Laurence ont su créer
                une ambiance magique. Les étincelles froides au coucher du soleil, c&apos;était grandiose.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Émilie & Romain</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à La Baule
              </p>
            </div>

            {/* Témoignage 3 - Clisson */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Superbe prestation dans notre domaine viticole ! Les animations AnimaJet
                ont conquis tous nos invités. Le photobooth a fait un carton jusqu&apos;à la fin.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Aurélie & Florian</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Clisson
              </p>
            </div>

            {/* Témoignage 4 - Saint-Nazaire */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Une équipe au top ! De la cérémonie laïque face à la mer jusqu&apos;au
                dancefloor enflammé, tout était parfait. On recommande à 200%.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Lucie & Mathieu</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Saint-Nazaire
              </p>
            </div>

            {/* Témoignage 5 - Guérande */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Notre mariage près des marais salants restera gravé dans nos mémoires.
                Guillaume a su adapter la musique à chaque moment. Merci pour cette soirée magique !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Manon & Thibault</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Guérande
              </p>
            </div>

            {/* Témoignage 6 - Pornic */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Professionnels, réactifs et tellement sympathiques. La fumée lourde
                pour notre ouverture de bal était sublime. Tout le monde en parle encore !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Julie & Alexandre</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Pornic
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Villes d'intervention en Loire-Atlantique */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-4">
            DJ Mariage dans les <span className="text-[#c9a227]">villes de Loire-Atlantique</span>
          </h2>
          <p className="text-[#888] text-center mb-8 max-w-2xl mx-auto">
            Nous intervenons dans toutes les villes du département 44. Découvrez nos prestations près de chez vous.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link href="/dj-mariage/nantes" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Nantes</span>
            </Link>
            <Link href="/dj-mariage/saint-nazaire" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Saint-Nazaire</span>
            </Link>
            <Link href="/dj-mariage/la-baule" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">La Baule</span>
            </Link>
            <Link href="/dj-mariage/guerande" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Guérande</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Autres départements */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Nous intervenons aussi dans les départements voisins
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dj-mariage-ille-et-vilaine" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Ille-et-Vilaine (35)
            </Link>
            <Link href="/dj-mariage-morbihan" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Morbihan (56)
            </Link>
            <Link href="/dj-mariage-finistere" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Finistère (29)
            </Link>
            <Link href="/dj-mariage-mayenne" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Mayenne (53)
            </Link>
          </div>
        </div>
      </section>

      {/* Articles de blog - Maillage interne */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Nos conseils pour votre <span className="text-[#c9a227]">mariage en Loire-Atlantique</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/comment-choisir-dj-mariage-bretagne" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">
                Comment choisir son DJ mariage ?
              </h3>
              <p className="text-[#888] text-sm">
                Guide complet pour trouver le DJ idéal pour votre mariage dans le 44.
              </p>
            </Link>
            <Link href="/blog/ouverture-de-bal-conseils" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">
                Réussir son ouverture de bal
              </h3>
              <p className="text-[#888] text-sm">
                Conseils et idées pour une première danse mémorable face à l&apos;océan.
              </p>
            </Link>
            <Link href="/blog/etincelles-froides-mariage-securite" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">
                Étincelles froides : effet garanti
              </h3>
              <p className="text-[#888] text-sm">
                Tout savoir sur les étincelles froides pour sublimer votre mariage.
              </p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-[#c9a227] hover:underline">
              Voir tous nos articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Maillage AnimaJet */}
      <AnimaJetMeshBlock cityName="Loire-Atlantique" placeLabel="en Loire-Atlantique" />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Prêt à faire de votre mariage une <span className="text-[#c9a227]">fête inoubliable</span> ?
          </h2>
          <p className="text-[#888] mb-8">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h.
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
