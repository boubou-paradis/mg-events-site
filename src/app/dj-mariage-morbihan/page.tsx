import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DJ Mariage Morbihan | Animation Mariage Vannes',
  description: "DJ animateur mariage dans le Morbihan. Vannes, Lorient, Pontivy, Auray. +20 ans d'expérience, photobooth vintage, animations interactives. Devis gratuit ✓",
  keywords: 'DJ mariage Morbihan, DJ mariage Vannes, DJ mariage Lorient, DJ mariage Auray, DJ mariage Pontivy, animation mariage 56',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-morbihan',
  },
  openGraph: {
    title: 'DJ Mariage Morbihan | Animation Mariage Vannes - MG Events',
    description: "DJ animateur mariage dans le Morbihan. Vannes, Lorient, Pontivy, Auray. +20 ans d'expérience, photobooth vintage, animations interactives.",
    url: 'https://www.mg-events35.com/dj-mariage-morbihan',
  },
};

const pointsForts = [
  { icon: Mic2, title: '+20 ans d\'expérience', description: 'Plus de 100 mariages animés en Bretagne' },
  { icon: Sparkles, title: 'Effets spectaculaires', description: 'Étincelles froides certifiées CE, fumée lourde' },
  { icon: Camera, title: 'Photobooth vintage', description: 'Style TSF années 60, impressions sur place' },
  { icon: Music, title: 'AnimaJet exclusif', description: 'Animations interactives uniques en Bretagne' },
];

const formules = [
  { name: 'Éclat d\'Amour', price: '1200', description: 'L\'essentiel pour une soirée réussie' },
  { name: 'Rêve en Blanc', price: '1490', description: 'Notre formule la plus demandée', popular: true },
  { name: 'Conte de Fées', price: '1690', description: 'L\'expérience complète avec photobooth' },
];

const faqs = [
  {
    question: 'Quel est le prix d\'un DJ mariage dans le Morbihan ?',
    answer: 'Nos formules DJ mariage dans le 56 démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent le déplacement dans tout le département, l\'installation et le démontage.',
  },
  {
    question: 'Intervenez-vous sur les îles du Morbihan ?',
    answer: 'Oui, nous pouvons nous déplacer à Belle-Île-en-Mer, l\'Île-aux-Moines et Groix. Un supplément peut s\'appliquer pour couvrir les frais de transport maritime du matériel.',
  },
  {
    question: 'Vous déplacez-vous à Vannes, Lorient et Auray ?',
    answer: 'Oui, nous couvrons tout le Morbihan sans frais de déplacement supplémentaire : Vannes, Lorient, Auray, Pontivy, Ploërmel, Carnac, La Trinité-sur-Mer, Quiberon, Sarzeau et tout le Golfe du Morbihan.',
  },
  {
    question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
    answer: 'Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle, 2 techniciens et la diffusion de vos musiques. Idéal pour les cérémonies face au Golfe du Morbihan ou dans les domaines du 56.',
  },
  {
    question: 'Quel est le délai de réservation ?',
    answer: 'Nous vous conseillons de réserver 12 à 18 mois à l\'avance pour les dates prisées (mai à septembre). Les mariages à Vannes et autour du Golfe sont très demandés. Pour la basse saison, 6 mois peuvent suffire.',
  },
  {
    question: 'Le matériel est-il aux normes ?',
    answer: 'Absolument. Tout notre matériel est professionnel et conforme aux normes de sécurité. Nos lanceurs d\'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE. Nous disposons d\'une assurance responsabilité civile professionnelle.',
  },
];

// Lieux de mariage prestigieux du Morbihan
const lieuxMariage56 = [
  { nom: "Domaine de Rochevilaine", ville: "Billiers", type: "Domaine face mer" },
  { nom: "Château de Trécesson", ville: "Campénéac", type: "Château médiéval" },
  { nom: "Manoir de Kerhuel", ville: "Pluneret", type: "Manoir & Jardins" },
  { nom: "Domaine de Kerguéhennec", ville: "Bignan", type: "Domaine & Parc" },
  { nom: "Château de Suscinio", ville: "Sarzeau", type: "Château ducal" },
  { nom: "Domaine de Branféré", ville: "Le Guerno", type: "Domaine & Parc" },
];

// Zones d'intervention dans le Morbihan
const zonesIntervention56 = [
  { zone: "Vannes & Golfe", villes: "Vannes, Séné, Arradon, Baden, Île-aux-Moines, Sarzeau, Arzon, Port-Navalo" },
  { zone: "Pays d'Auray", villes: "Auray, Carnac, La Trinité-sur-Mer, Quiberon, Plouharnel, Erdeven, Étel, Belz" },
  { zone: "Pays de Lorient", villes: "Lorient, Lanester, Hennebont, Ploemeur, Guidel, Larmor-Plage, Port-Louis" },
  { zone: "Centre Morbihan", villes: "Pontivy, Locminé, Baud, Josselin, Ploërmel, La Gacilly, Malestroit" },
  { zone: "Côte & Îles", villes: "Belle-Île-en-Mer, Groix, Île-d'Houat, Île-d'Hoëdic, Presqu'île de Rhuys" },
];

// Données structurées pour le SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mg-events35.com/dj-mariage-morbihan#organization",
  "name": "MG Events Animation - DJ Mariage Morbihan",
  "image": "https://www.mg-events35.com/images/logo.png",
  "description": "DJ animateur professionnel pour mariage dans le Morbihan (56). Animation musicale, photobooth vintage, étincelles froides à Vannes, Lorient, Auray.",
  "url": "https://www.mg-events35.com/dj-mariage-morbihan",
  "telephone": "+33648106166",
  "email": "contact@mg-events35.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vannes",
    "addressRegion": "Bretagne",
    "postalCode": "56000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6587,
    "longitude": -2.7606
  },
  "areaServed": [
    { "@type": "City", "name": "Vannes" },
    { "@type": "City", "name": "Lorient" },
    { "@type": "City", "name": "Auray" },
    { "@type": "City", "name": "Pontivy" },
    { "@type": "City", "name": "Ploërmel" },
    { "@type": "City", "name": "Carnac" },
    { "@type": "City", "name": "La Trinité-sur-Mer" },
    { "@type": "AdministrativeArea", "name": "Morbihan" }
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

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MG Events Animation",
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Marie & Julien" },
      "reviewBody": "Un grand merci pour votre professionnalisme, votre écoute, votre dynamisme ! Vous avez su donner à notre mariage à Vannes l'ambiance que nous espérions."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Céline & Arnaud" },
      "reviewBody": "Mariage parfait au Domaine de Rochevilaine ! Les étincelles froides face à l'océan étaient magiques. Merci pour cette soirée inoubliable."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Laura & Yannick" },
      "reviewBody": "Notre mariage à Carnac a été une réussite totale. Le photobooth vintage a fait un carton ! On recommande les yeux fermés."
    }
  ]
};

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques du Morbihan aux plus beaux mariages de Vannes et Lorient' },
  { icon: Disc3, value: 'Répertoire', label: 'musical complet', description: "80's, rock, variété française, hits actuels, électro... toutes les générations" },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux salles du Morbihan et du Golfe' },
];

const musicFaqs = [
  { question: 'Quel style de musique passez-vous en mariage ?', answer: "Notre répertoire couvre tous les styles : années 80, rock, new wave, variété française, hits actuels, électro, musiques du monde. Nous adaptons la programmation à vos goûts et à l'ambiance de la soirée." },
  { question: 'Peut-on vous transmettre une playlist personnalisée ?', answer: "Absolument ! Nous créons ensemble votre playlist idéale en amont, tout en gardant la flexibilité de nous adapter en direct aux réactions de la piste de danse." },
  { question: "L'ambiance est-elle adaptée à toutes les générations ?", answer: "C'est notre spécialité. Avec 25 ans d'expérience en discothèque, nous savons fédérer grands-parents, parents et jeunes sur la même piste de danse." },
];

export default function DJMariageMorbihan() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Schema.org Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
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
          <Link href="/" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ Mariage <span className="text-[#c9a227]">Morbihan</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation de mariage à Vannes, Lorient et dans tout le 56
              </h2>
              <p className="text-[#888] leading-relaxed mb-8">
                Votre <strong className="text-white">mariage dans le Morbihan</strong> mérite une animation à la hauteur !
                MG Events Animation intervient à <span className="text-[#c9a227]">Vannes, Lorient, Pontivy, Auray, Ploërmel, La Trinité-sur-Mer, Carnac, Belle-Île</span>...
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Avec plus de <strong className="text-white">20 ans d&apos;expérience</strong> et plus de 100 mariages animés,
                nous transformons votre soirée en un moment inoubliable. Notre force ? Des animations interactives
                exclusives grâce à notre technologie <span className="text-[#c9a227]">AnimaJet</span>, un photobooth vintage unique,
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
                  src="/images/gallery-2.jpg"
                  alt="DJ mariage ambiance soirée Morbihan"
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
            Avant de devenir <strong className="text-white">DJ animateur de mariage dans le Morbihan</strong>, j&apos;ai passé plus de 25 ans
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": musicFaqs.map(faq => ({
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
        </div>
      </section>

      {/* Lieux de mariage populaires dans le Morbihan */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Lieux de mariage populaires dans le <span className="text-[#c9a227]">Morbihan</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Nous connaissons parfaitement les plus beaux <strong className="text-white">lieux de réception du 56</strong> :
            domaines face à l&apos;océan, châteaux médiévaux, manoirs et salles avec vue sur le Golfe du Morbihan.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lieuxMariage56.map((lieu, index) => (
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
            Et bien d&apos;autres lieux : Domaine de Kerbastic, Manoir de Kerazan, Château de Kerlévenan,
            Domaine de la Roche du Theil, Les Jardins de Kerfouler...
          </p>
        </div>
      </section>

      {/* Zones d'intervention détaillées */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage dans tout le <span className="text-[#c9a227]">département 56</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Aucun frais de déplacement</strong> dans tout le Morbihan.
            Du Golfe aux terres intérieures, nous intervenons partout.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zonesIntervention56.map((zone, index) => (
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
            Ils nous ont fait confiance dans le <span className="text-[#c9a227]">Morbihan</span>
          </h2>
          <p className="text-[#888] text-center mb-12">
            Témoignages de mariages animés dans le 56
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Témoignage 1 - Vannes */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Un grand merci pour votre professionnalisme, votre écoute, votre dynamisme !
                Vous avez su donner à notre mariage à Vannes l&apos;ambiance que nous espérions.
                Tous nos invités ont adoré !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Marie & Julien</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Vannes
              </p>
            </div>

            {/* Témoignage 2 - Rochevilaine */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Mariage parfait au Domaine de Rochevilaine avec vue sur l&apos;océan !
                Les étincelles froides au coucher du soleil étaient magiques.
                Merci pour cette soirée inoubliable.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Céline & Arnaud</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Domaine de Rochevilaine
              </p>
            </div>

            {/* Témoignage 3 - Carnac */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Notre mariage à Carnac a été une réussite totale grâce à MG Events.
                Le photobooth vintage a fait un carton jusqu&apos;à la fin de la soirée !
                On recommande les yeux fermés.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Laura & Yannick</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Carnac
              </p>
            </div>

            {/* Témoignage 4 - Lorient */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Guillaume et Laurence ont su mettre une ambiance de folie à notre mariage
                près de Lorient. Les animations AnimaJet ont conquis jeunes et moins jeunes.
                Une équipe au top !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Élodie & Kévin</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Lorient
              </p>
            </div>

            {/* Témoignage 5 - Golfe */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Cérémonie laïque face au Golfe puis soirée enflammée... tout était parfait.
                La fumée lourde pour notre ouverture de bal restera gravée dans nos mémoires.
                Merci infiniment !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Manon & Bastien</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Golfe du Morbihan
              </p>
            </div>

            {/* Témoignage 6 - Auray */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Super prestation pour notre mariage à Auray ! Des vrais professionnels,
                réactifs et tellement sympathiques. Le dancefloor n&apos;a pas désempli de la soirée.
                Merci pour tout !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Chloé & Maxime</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Auray
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
            <Link href="/dj-mariage-finistere" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Finistère (29)
            </Link>
            <Link href="/dj-mariage-loire-atlantique" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Loire-Atlantique (44)
            </Link>
            <Link href="/dj-mariage-mayenne" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Mayenne (53)
            </Link>
          </div>
        </div>
      </section>

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
