import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, HelpCircle } from 'lucide-react';
import AnimaJetMeshBlock from '@/components/animajet/AnimaJetMeshBlock';

export const metadata: Metadata = {
  title: 'DJ Mariage Mayenne & Laval (53) · Sur étude · Dès 1200€',
  description: "DJ animateur mariage en Mayenne (53) : Laval, Château-Gontier, Évron, Craon. Basés à Redon (35), intervention étudiée au cas par cas — frais de route précisés sur le devis.",
  keywords: 'DJ mariage Mayenne, DJ mariage Laval, DJ mariage Château-Gontier, animation mariage 53, DJ mariage Évron',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-mayenne',
  },
  openGraph: {
    title: 'DJ Mariage Mayenne | Animation Mariage Laval - MG Events',
    description: "DJ animateur mariage en Mayenne. Laval, Château-Gontier, Mayenne. 25 ans d'expérience, animations interactives, photobooth vintage.",
    url: 'https://www.mg-events35.com/dj-mariage-mayenne',
  },
};

const pointsForts = [
  { icon: Mic2, title: '25 ans d\'expérience', description: 'Plus de 100 mariages animés en Bretagne' },
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
    question: 'Quel est le prix d\'un DJ mariage en Mayenne ?',
    answer: 'Nos formules DJ mariage dans le 53 démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs incluent la sonorisation, l\'éclairage, l\'installation et le démontage. Le déplacement est inclus jusqu\'à 100 km aller-retour au départ de Redon (35), la distance exacte étant calculée selon l\'adresse du lieu de réception ; au-delà, 0,66 € du kilomètre, toujours indiqué sur le devis.',
  },
  {
    question: 'Vous déplacez-vous en Mayenne ?',
    answer: 'MG Events est basé à Redon (35), à environ 140 km de Laval et 165 km de Mayenne : le département 53 se situe en dehors de notre zone d\'intervention habituelle. Nous y intervenons néanmoins régulièrement — Laval, Château-Gontier, Évron, Craon, Ernée — mais chaque demande est étudiée au cas par cas selon la date, la formule choisie et les contraintes logistiques. Les frais de déplacement sont précisés sur le devis.',
  },
  {
    question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
    answer: 'Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle, 2 techniciens et la diffusion de vos musiques. Idéal pour les cérémonies dans les châteaux et domaines du 53.',
  },
  {
    question: 'Quelles animations proposez-vous pour un mariage en Mayenne ?',
    answer: 'Nous proposons nos animations signature : AnimaJet (quiz interactif, photo mystère, partage live), notre plateforme que nous avons développée, photobooth vintage TSF années 60, étincelles froides certifiées CE et fumée lourde pour une ambiance magique.',
  },
  {
    question: 'Quel est le délai de réservation ?',
    answer: 'Nous vous conseillons de réserver 12 à 18 mois à l\'avance pour les dates prisées (mai à septembre). Les châteaux de la Mayenne sont très demandés. Pour la basse saison, 6 mois peuvent suffire.',
  },
  {
    question: 'Le matériel est-il aux normes ?',
    answer: 'Absolument. Tout notre matériel est professionnel et conforme aux normes de sécurité. Nos lanceurs d\'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE. Nous disposons d\'une assurance responsabilité civile professionnelle.',
  },
];

// Lieux de mariage prestigieux de la Mayenne
const lieuxMariage53 = [
  { nom: "Château de Craon", ville: "Craon", type: "Château & Parc" },
  { nom: "Château du Rocher", ville: "Mézangers", type: "Château historique" },
  { nom: "Domaine des Hayes", ville: "Saint-Denis-d'Anjou", type: "Domaine champêtre" },
  { nom: "Château de la Roche-Pichemer", ville: "Bouère", type: "Château Renaissance" },
  { nom: "Manoir de la Cour", ville: "Quelaines-Saint-Gault", type: "Manoir & Jardins" },
  { nom: "Domaine de Cimbré", ville: "Bonchamp-lès-Laval", type: "Domaine & Étang" },
];

// Zones d'intervention en Mayenne
const zonesIntervention53 = [
  { zone: "Laval Agglomération", villes: "Laval, Changé, Saint-Berthevin, Bonchamp-lès-Laval, L'Huisserie, Louverné, Entrammes" },
  { zone: "Château-Gontier", villes: "Château-Gontier-sur-Mayenne, Cossé-le-Vivien, Craon, Saint-Aignan-sur-Roë, Renazé" },
  { zone: "Nord Mayenne", villes: "Mayenne, Ernée, Gorron, Ambrières-les-Vallées, Lassay-les-Châteaux, Villaines-la-Juhel" },
  { zone: "Est Mayenne", villes: "Évron, Montsûrs, Sainte-Suzanne, Bais, Jublains, Neau" },
];

// Données structurées pour le SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mg-events35.com/dj-mariage-mayenne#organization",
  "name": "MG Events Animation - DJ Mariage Mayenne",
  "image": "https://www.mg-events35.com/images/logo.png",
  "description": "DJ animateur professionnel pour mariage en Mayenne (53). Animation musicale, photobooth vintage, étincelles froides à Laval, Château-Gontier, Mayenne, Évron. Basé à Redon (35) : les forfaits incluent jusqu'à 100 km aller-retour, au-delà 0,66 €/km précisés sur le devis.",
  "url": "https://www.mg-events35.com/dj-mariage-mayenne",
  "telephone": "+33648106166",
  "email": "contact@mg-events35.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10, La Lande des Couédies",
    "addressLocality": "Bains-sur-Oust",
    "addressRegion": "Bretagne",
    "postalCode": "35600",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6931,
    "longitude": -2.08544
  },
  "areaServed": [
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Château-Gontier" },
    { "@type": "City", "name": "Mayenne" },
    { "@type": "City", "name": "Évron" },
    { "@type": "City", "name": "Craon" },
    { "@type": "City", "name": "Ernée" },
    { "@type": "AdministrativeArea", "name": "Mayenne" }
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
      "author": { "@type": "Person", "name": "Sophie & Thomas" },
      "reviewBody": "Merci à vous deux pour votre investissement et votre professionnalisme. Notre mariage à Laval était une réussite totale !"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Claire & Antoine" },
      "reviewBody": "Mariage parfait au Château de Craon ! Une ambiance magique du cocktail jusqu'à la fin. On recommande les yeux fermés."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Aurélie & Sébastien" },
      "reviewBody": "Les animations AnimaJet ont fait un carton lors de notre mariage à Château-Gontier. Tous nos invités en parlent encore !"
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

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques bretonnes aux plus beaux mariages de Laval et la Mayenne' },
  { icon: Disc3, value: 'Répertoire', label: 'musical complet', description: "80's, rock, variété française, hits actuels, électro... toutes les générations" },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux salles et domaines du 53' },
];

const musicFaqs = [
  { question: 'Quel style de musique passez-vous en mariage ?', answer: "Notre répertoire couvre tous les styles : années 80, rock, new wave, variété française, hits actuels, électro, musiques du monde. Nous adaptons la programmation à vos goûts et à l'ambiance de la soirée." },
  { question: 'Peut-on vous transmettre une playlist personnalisée ?', answer: "Absolument ! Nous créons ensemble votre playlist idéale en amont, tout en gardant la flexibilité de nous adapter en direct aux réactions de la piste de danse." },
  { question: "L'ambiance est-elle adaptée à toutes les générations ?", answer: "C'est notre spécialité. Avec 25 ans d'expérience en discothèque, nous savons fédérer grands-parents, parents et jeunes sur la même piste de danse." },
];

export default function DJMariageMayenne() {
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
                DJ Mariage <span className="text-[#c9a227]">Mayenne</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Une prestation dans le 53, étudiée au cas par cas
              </h2>
              <p className="text-[#888] leading-relaxed mb-8">
                <strong className="text-white">MG Events Animation est basé à Redon (35)</strong> : la Mayenne se
                situe en dehors de notre secteur d&apos;intervention habituel (environ 100 km autour de Redon). Nous y
                intervenons néanmoins régulièrement à <span className="text-[#c9a227]">Laval, Château-Gontier,
                Mayenne, Évron, Craon</span>, sur étude et sur devis : les frais de déplacement sont calculés à
                l&apos;avance et indiqués clairement, sans mauvaise surprise.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Véritable <strong className="text-white">animateur de soirée en Mayenne</strong>, nous assurons
                l&apos;<strong className="text-white">animation mariage dans le 53</strong> de bout en bout :
                <strong className="text-white"> sonorisation de mariage</strong> professionnelle, éclairage sur mesure,
                prise de micro et animations interactives pour faire danser toutes les générations.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Avec <strong className="text-white">25 ans d&apos;expérience</strong> et plus de 100 mariages animés,
                nous transformons votre soirée en un moment inoubliable. Notre force ? Des animations interactives
                grâce à <span className="text-[#c9a227]">AnimaJet</span>, la plateforme que nous avons conçue et développée, un photobooth vintage,
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
                  src="/images/gallery-5.jpg"
                  alt="DJ mariage soirée Mayenne"
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
            Avant de devenir <strong className="text-white">DJ animateur de mariage en Mayenne</strong>, j&apos;ai passé plus de 25 ans
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
                  <span className="text-[#888] ml-2">€ TTC<span className="text-[#c9a227] font-semibold align-super text-sm ml-0.5">*</span></span>
                </div>
                <Link href="/#formules" className="text-[#c9a227] text-sm hover:underline">
                  Voir le détail →
                </Link>
              </div>
            ))}
          </div>
          {/* Note kilométrage — se rapporte à l'astérisque des 3 formules */}
          <div className="mt-8 rounded-lg border border-[#c9a227]/40 bg-[#1a1a2e] px-5 py-4">
            <p className="text-sm text-[#e8e8ea] leading-relaxed">
              <span className="text-[#c9a227] font-semibold">*&nbsp;Frais de déplacement</span> — Tarifs incluant
              jusqu&apos;à <strong className="text-white">100&nbsp;km aller-retour</strong> au départ de
              Redon&nbsp;(35). Au-delà, <strong className="text-white">0,66&nbsp;€/km</strong> supplémentaire,
              précisé sur le devis.
            <span className="block mt-2 text-[#bdbdc4]">Ce département étant en dehors de notre zone habituelle, des frais de route s&apos;appliquent : ils sont chiffrés et validés avec vous avant toute réservation.</span>
            </p>
          </div>
          <p className="text-[#888] text-center mt-8 text-sm">
            <span className="text-[#c9a227] font-medium">Nouveauté</span> — sublimez la sortie des mariés avec notre{' '}
            <Link href="/feu-artifice-jour" className="text-[#c9a227] hover:underline">feu d&apos;artifice de jour</Link>{' '}
            (poudre Holi, 4 couleurs au choix, 120€)
          </p>
        </div>
      </section>

      {/* Lieux de mariage populaires en Mayenne */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Lieux de mariage populaires en <span className="text-[#c9a227]">Mayenne</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Nous connaissons parfaitement les plus beaux <strong className="text-white">lieux de réception du 53</strong> :
            châteaux historiques, domaines champêtres et manoirs au cœur de la campagne mayennaise.
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
            Et bien d&apos;autres lieux : Domaine de la Guérie, Château de Montjean, Manoir du Tertre,
            Domaine de la Touche, Les Jardins de la Perrine...
          </p>
        </div>
      </section>

      {/* Zones d'intervention détaillées */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Les secteurs du <span className="text-[#c9a227]">département 53</span>
          </h2>
          <div className="max-w-3xl mx-auto mb-12 rounded-lg border border-[#c9a227]/40 bg-[#1a1a2e] px-5 py-4">
            <p className="text-sm text-[#e8e8ea] leading-relaxed">
              <span className="text-[#c9a227] font-semibold">Frais de déplacement</span> — Les forfaits incluent
              jusqu&apos;à <strong className="text-white">100 km aller-retour</strong> au départ de Redon (35).
              Au-delà, <strong className="text-white">0,66 €/km</strong> supplémentaire, précisé sur le devis.
            </p>
            <p className="text-sm text-[#bdbdc4] leading-relaxed mt-3 pt-3 border-t border-[#c9a227]/20">
              La Mayenne se situant entre 135 et 165 km de Redon, elle est en dehors de notre zone habituelle : les
              prestations y sont étudiées au cas par cas selon la date, la formule choisie et les contraintes
              logistiques. Des frais de déplacement et, si nécessaire, d&apos;hébergement sont précisés sur le devis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {zonesIntervention53.map((zone, index) => (
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
            Ils nous ont fait confiance en <span className="text-[#c9a227]">Mayenne</span>
          </h2>
          <p className="text-[#888] text-center mb-12">
            Témoignages de mariages animés dans le 53
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Témoignage 1 - Laval */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Merci à vous deux pour votre investissement, votre gentillesse et votre
                professionnalisme. Notre mariage à Laval était une réussite totale !
                Vous le faites par passion. Ne changez pas !&rdquo;
              </blockquote>
              <p className="text-white font-medium">Sophie & Thomas</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Laval
              </p>
            </div>

            {/* Témoignage 2 - Craon */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Mariage parfait au Château de Craon ! Guillaume et Laurence ont su
                créer une ambiance magique du cocktail jusqu&apos;à la fin de la soirée.
                On recommande les yeux fermés.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Claire & Antoine</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Château de Craon
              </p>
            </div>

            {/* Témoignage 3 - Château-Gontier */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Les animations AnimaJet ont fait un carton lors de notre mariage à
                Château-Gontier ! Tous nos invités en parlent encore. Le photobooth
                vintage était génial.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Aurélie & Sébastien</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Château-Gontier
              </p>
            </div>

            {/* Témoignage 4 - Évron */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Super prestation pour notre mariage près d&apos;Évron ! Les étincelles
                froides pour notre ouverture de bal étaient sublimes. Une équipe
                réactive et sympathique.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Marion & Florian</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage près d&apos;Évron
              </p>
            </div>

            {/* Témoignage 5 - Mayenne */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Une soirée de folie dans le nord de la Mayenne ! Guillaume sait
                vraiment lire la piste de danse et adapter la musique. Merci pour
                ces moments magiques.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Émilie & Nicolas</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Mariage à Mayenne
              </p>
            </div>

            {/* Témoignage 6 - Sainte-Suzanne */}
            <div className="card-dark p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <blockquote className="text-[#aaa] italic mb-4">
                &ldquo;Mariage au pied de la cité médiévale de Sainte-Suzanne, une ambiance
                inoubliable ! La fumée lourde pour notre première danse restera
                gravée dans nos mémoires.&rdquo;
              </blockquote>
              <p className="text-white font-medium">Léa & Maxime</p>
              <p className="text-[#888] text-sm flex items-center gap-1">
                <MapPin size={14} className="text-[#c9a227]" />
                Sainte-Suzanne
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

      {/* Villes d'intervention en Mayenne */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-4">
            DJ Mariage dans les <span className="text-[#c9a227]">villes de Mayenne</span>
          </h2>
          <p className="text-[#888] text-center mb-8 max-w-2xl mx-auto">
            Nos pages dédiées aux principales villes du 53. Chaque prestation y est étudiée au cas par cas, avec les
            frais de déplacement précisés sur le devis.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link href="/dj-mariage/laval" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Laval</span>
            </Link>
            <Link href="/dj-mariage/mayenne-ville" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Mayenne</span>
            </Link>
            <Link href="/dj-mariage/chateau-gontier" className="card-dark p-4 text-center group hover:border-[#c9a227]/40 transition-colors">
              <MapPin size={20} className="text-[#c9a227] mx-auto mb-2" />
              <span className="text-white group-hover:text-[#c9a227] transition-colors font-medium">Château-Gontier</span>
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
            <Link href="/dj-mariage-loire-atlantique" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              DJ Mariage Loire-Atlantique (44)
            </Link>
            <Link href="/dj-mariage-bretagne" className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors">
              Découvrir les formules mariage
            </Link>
          </div>
        </div>
      </section>

      {/* Maillage AnimaJet */}
      <AnimaJetMeshBlock cityName="Mayenne" placeLabel="en Mayenne" />

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
