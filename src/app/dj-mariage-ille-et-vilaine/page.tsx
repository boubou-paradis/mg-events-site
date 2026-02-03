import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DJ Mariage Ille-et-Vilaine (35) | MG Events Animation',
  description: "DJ animateur mariage en Ille-et-Vilaine (35). Rennes, Saint-Malo, Fougères, Vitré, Redon, Dinard. +20 ans d'expérience, photobooth vintage, animations interactives. Devis gratuit ✓",
  keywords: 'DJ mariage Ille-et-Vilaine, DJ mariage 35, DJ mariage Rennes, DJ mariage Saint-Malo, DJ mariage Fougères, DJ mariage Vitré, DJ mariage Redon, DJ mariage Dinard, animation mariage Bretagne',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-ille-et-vilaine',
  },
  openGraph: {
    title: 'DJ Mariage Ille-et-Vilaine (35) | MG Events Animation',
    description: "DJ animateur mariage en Ille-et-Vilaine (35). Rennes, Saint-Malo, Fougères, Vitré. +20 ans d'expérience, photobooth vintage, animations interactives.",
    url: 'https://www.mg-events35.com/dj-mariage-ille-et-vilaine',
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
    question: 'Quel est le prix d\'un DJ mariage en Ille-et-Vilaine ?',
    answer: 'Nos formules DJ mariage dans le 35 démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent le déplacement dans tout le département, l\'installation et le démontage.',
  },
  {
    question: 'Vous déplacez-vous à Saint-Malo, Fougères et Vitré ?',
    answer: 'Oui, nous intervenons dans toute l\'Ille-et-Vilaine sans frais de déplacement supplémentaire : Rennes, Saint-Malo, Dinard, Cancale, Fougères, Vitré, Redon, Dol-de-Bretagne et toute la côte d\'Émeraude.',
  },
  {
    question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
    answer: 'Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle, 2 techniciens et la diffusion de vos musiques choisies. Idéal pour les cérémonies en extérieur dans les châteaux et domaines du 35.',
  },
  {
    question: 'Quelles animations proposez-vous pour un mariage dans le 35 ?',
    answer: 'Nous proposons des animations exclusives : AnimaJet (quiz interactif, photo mystère, partage live), photobooth vintage TSF années 60, étincelles froides certifiées CE pour l\'ouverture de bal, fumée lourde et jeux lumineux. Des prestations uniques en Bretagne !',
  },
  {
    question: 'Quel est le délai de réservation pour un mariage à Rennes ?',
    answer: 'Nous vous conseillons de réserver 12 à 18 mois à l\'avance pour les dates prisées (mai à septembre). Les mariages à Rennes et Saint-Malo sont très demandés. Pour la basse saison, 6 mois peuvent suffire.',
  },
  {
    question: 'Le matériel est-il aux normes de sécurité ?',
    answer: 'Absolument. Tout notre matériel est professionnel et conforme aux normes. Nos lanceurs d\'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE, sans danger pour les salles. Nous disposons d\'une assurance RC professionnelle.',
  },
];

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques bretonnes aux plus beaux mariages de Rennes et du 35' },
  { icon: Disc3, value: 'Répertoire', label: 'musical complet', description: "80's, rock, variété française, hits actuels, électro... toutes les générations" },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux plus belles salles d\'Ille-et-Vilaine' },
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
  "@id": "https://www.mg-events35.com/#organization",
  "name": "MG Events Animation - DJ Mariage Ille-et-Vilaine",
  "image": "https://www.mg-events35.com/images/logo.png",
  "description": "DJ animateur professionnel pour mariage en Ille-et-Vilaine (35). Animation musicale, photobooth vintage, étincelles froides. Plus de 20 ans d'expérience.",
  "url": "https://www.mg-events35.com/dj-mariage-ille-et-vilaine",
  "telephone": "+33648106166",
  "email": "contact@mg-events35.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rennes",
    "addressRegion": "Bretagne",
    "postalCode": "35000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1173,
    "longitude": -1.6778
  },
  "areaServed": [
    { "@type": "City", "name": "Rennes" },
    { "@type": "City", "name": "Saint-Malo" },
    { "@type": "City", "name": "Fougères" },
    { "@type": "City", "name": "Vitré" },
    { "@type": "City", "name": "Redon" },
    { "@type": "City", "name": "Dinard" },
    { "@type": "City", "name": "Cancale" },
    { "@type": "City", "name": "Dol-de-Bretagne" },
    { "@type": "AdministrativeArea", "name": "Ille-et-Vilaine" }
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
      "author": { "@type": "Person", "name": "Morane & Kevin" },
      "reviewBody": "Merci à Guillaume et Laurence pour leur superbe prestation à notre mariage à Rennes ! Les invités ont été conquis et ont enflammé le dancefloor."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Marine & Thomas" },
      "reviewBody": "Une soirée magique au bord de la mer à Saint-Malo ! Les étincelles froides pendant l'ouverture de bal resteront gravées dans nos mémoires."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Camille & Julien" },
      "reviewBody": "Notre mariage au château près de Fougères a été une réussite totale grâce à MG Events. La fumée lourde pour notre première danse était parfaite."
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

const lieuxMariage35 = [
  { nom: "Domaine de Cicé-Blossac", ville: "Bruz", type: "Domaine & Golf" },
  { nom: "Château de la Ballue", ville: "Bazouges-la-Pérouse", type: "Château & Jardins" },
  { nom: "Manoir de la Begaudière", ville: "Rennes", type: "Manoir" },
  { nom: "Domaine de la Roche Hervé", ville: "Missillac", type: "Domaine" },
  { nom: "Les Jardins de l'Orangerie", ville: "Combourg", type: "Jardins" },
  { nom: "Château du Bois Guy", ville: "Parigné", type: "Château" },
];

const zonesIntervention = [
  { zone: "Rennes Métropole", villes: "Rennes, Cesson-Sévigné, Bruz, Chantepie, Saint-Jacques-de-la-Lande, Pacé, Betton, Saint-Grégoire" },
  { zone: "Côte d'Émeraude", villes: "Saint-Malo, Dinard, Cancale, Saint-Lunaire, Saint-Briac-sur-Mer, Paramé" },
  { zone: "Pays de Fougères", villes: "Fougères, Vitré, La Guerche-de-Bretagne, Châteaubourg, Janzé" },
  { zone: "Pays de Redon", villes: "Redon, Guichen, Bain-de-Bretagne, Grand-Fougeray, Pipriac" },
  { zone: "Pays de Saint-Malo", villes: "Dol-de-Bretagne, Combourg, Tinténiac, Pleine-Fougères, Pontorson" },
];

export default function DJMariageIlleEtVilaine() {
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
                DJ Mariage <span className="text-[#c9a227]">Ille-et-Vilaine</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Votre animation de mariage à Rennes et dans tout le 35
              </h2>
              <p className="text-[#888] leading-relaxed mb-8">
                Vous cherchez un <strong className="text-white">DJ pour votre mariage en Ille-et-Vilaine (35)</strong> ?
                MG Events Animation se déplace dans tout le département : <span className="text-[#c9a227]">Rennes, Saint-Malo, Fougères, Vitré</span>,
                mais aussi <span className="text-[#c9a227]">Redon, Dinard, Cancale, Dol-de-Bretagne, Bruz, Cesson-Sévigné, Betton, Chantepie,
                Saint-Grégoire, Pacé, Le Rheu, Montfort-sur-Meu</span> et toute la côte d&apos;Émeraude.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Avec plus de <strong className="text-white">20 ans d&apos;expérience</strong> et plus de 100 mariages animés dans le 35,
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
                  src="/images/gallery-1.jpg"
                  alt="DJ mariage ambiance dancefloor Ille-et-Vilaine"
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
            Avant de devenir <strong className="text-white">DJ animateur de mariage en Ille-et-Vilaine</strong>, j&apos;ai passé plus de 25 ans
            à faire vibrer les dancefloors des plus grandes discothèques du Finistère et du Morbihan.
            Cette expérience unique me permet de <span className="text-[#c9a227]">lire une piste de danse</span> et d&apos;adapter la musique en temps réel.
          </p>

          {/* Stats */}
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

          {/* Music FAQ */}
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
        </div>
      </section>

      {/* Lieux de mariage populaires en Ille-et-Vilaine */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Lieux de mariage populaires en <span className="text-[#c9a227]">Ille-et-Vilaine</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Nous connaissons parfaitement les plus beaux <strong className="text-white">lieux de réception du 35</strong> et adaptons
            notre installation à chaque espace. Châteaux, domaines, manoirs ou salles de réception — nous intervenons partout.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lieuxMariage35.map((lieu, index) => (
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
            Et bien d&apos;autres lieux : Domaine de Tizé, Château de Montmuran, Manoir du Plessis,
            Domaine des Music&apos;Halles, La Maison Neuve...
          </p>
        </div>
      </section>

      {/* Zones d'intervention détaillées */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage dans tout le <span className="text-[#c9a227]">département 35</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Aucun frais de déplacement</strong> dans toute l&apos;Ille-et-Vilaine.
            Nous intervenons de la côte d&apos;Émeraude jusqu&apos;aux portes de la Mayenne.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Ils nous ont fait confiance en <span className="text-[#c9a227]">Ille-et-Vilaine</span>
          </h2>
          <p className="text-[#888] text-center mb-12">
            Témoignages de mariages animés dans le 35
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Témoignage 1 - Rennes */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Merci à Guillaume et Laurence pour leur superbe prestation à notre mariage à Rennes !
                Les invités ont été conquis et ont enflammé le dancefloor, toutes générations confondues.
                Le photobooth a fait sensation !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Morane & Kevin</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Rennes
              </p>
            </div>

            {/* Témoignage 2 - Saint-Malo */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Une soirée magique au bord de la mer ! Guillaume a su créer une ambiance incroyable
                dans notre salle avec vue sur les remparts. Les étincelles froides pendant l&apos;ouverture
                de bal resteront gravées dans nos mémoires.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Marine & Thomas</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Saint-Malo
              </p>
            </div>

            {/* Témoignage 3 - Fougères */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Professionnels, à l&apos;écoute et tellement sympathiques ! Notre mariage au château
                près de Fougères a été une réussite totale grâce à MG Events. La fumée lourde
                pour notre première danse était juste parfaite.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Camille & Julien</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Fougères
              </p>
            </div>

            {/* Témoignage 4 - Vitré */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Nous avons adoré les animations AnimaJet ! Nos invités se sont pris au jeu
                et la soirée est passée trop vite. Merci pour votre énergie communicative
                et votre professionnalisme sans faille.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Léa & Maxime</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Vitré
              </p>
            </div>

            {/* Témoignage 5 - Dinard */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Le photobooth vintage a été l&apos;attraction de la soirée ! Tous nos invités
                repartis avec leurs photos souvenirs. Guillaume et Laurence forment un duo
                au top, on recommande à 100%.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Charlotte & Antoine</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Dinard
              </p>
            </div>

            {/* Témoignage 6 - Redon */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;De la cérémonie laïque à la fermeture du dancefloor, tout était parfait.
                Guillaume a su s&apos;adapter à notre playlist tout en gardant l&apos;ambiance.
                Merci pour ce moment magique !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Sophie & Pierre</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Redon
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

      {/* Villes d'intervention en Ille-et-Vilaine */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-4">
            DJ Mariage dans les <span className="text-[#c9a227]">villes d&apos;Ille-et-Vilaine</span>
          </h2>
          <p className="text-[#888] text-center mb-8 max-w-2xl mx-auto">
            Nous intervenons dans toutes les villes du département 35. Découvrez nos prestations près de chez vous.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/dj-mariage/rennes" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Rennes</span>
            </Link>
            <Link href="/dj-mariage/saint-malo" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Saint-Malo</span>
            </Link>
            <Link href="/dj-mariage/fougeres" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Fougères</span>
            </Link>
            <Link href="/dj-mariage/vitre" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Vitré</span>
            </Link>
            <Link href="/dj-mariage/redon" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Redon</span>
            </Link>
            <Link href="/dj-mariage/dinard" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Dinard</span>
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
            <Link href="/dj-mariage-morbihan" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Morbihan (56)
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

      {/* Articles de blog - Maillage interne */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Nos conseils pour votre <span className="text-[#c9a227]">mariage en Bretagne</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/comment-choisir-dj-mariage-bretagne" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">
                Comment choisir son DJ mariage en Bretagne ?
              </h3>
              <p className="text-[#888] text-sm">
                Guide complet pour trouver le DJ idéal pour votre mariage dans le 35.
              </p>
            </Link>
            <Link href="/blog/ouverture-de-bal-conseils" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">
                Réussir son ouverture de bal
              </h3>
              <p className="text-[#888] text-sm">
                Conseils et idées pour une première danse mémorable.
              </p>
            </Link>
            <Link href="/blog/etincelles-froides-mariage-securite" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">
                Étincelles froides : sécurité et effet garanti
              </h3>
              <p className="text-[#888] text-sm">
                Tout savoir sur les étincelles froides pour votre mariage.
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
