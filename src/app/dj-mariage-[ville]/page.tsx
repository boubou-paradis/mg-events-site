import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, HelpCircle } from 'lucide-react';
import { cities, getCityBySlug, getAllCitySlugs, getCitiesByDepartment, type City } from '@/data/cities';
import { notFound } from 'next/navigation';

// Génération statique de toutes les pages ville
export async function generateStaticParams() {
  return getAllCitySlugs().map((ville) => ({
    ville,
  }));
}

// Métadonnées SEO dynamiques
export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);

  if (!city) {
    return { title: 'Page non trouvée' };
  }

  const nearbyText = city.nearbyCommunes.slice(0, 3).join(', ');

  return {
    title: `DJ Mariage ${city.name} | Animation Mariage ${city.departmentCode} | MG Events`,
    description: `DJ animateur mariage à ${city.name} (${city.departmentCode}). ${nearbyText} et environs. +20 ans d'expérience, photobooth vintage, étincelles froides. Devis gratuit ✓`,
    keywords: `DJ mariage ${city.name}, DJ mariage ${city.departmentCode}, animation mariage ${city.name}, DJ ${city.name}, sono mariage ${city.name}`,
    alternates: {
      canonical: `https://www.mg-events35.com/dj-mariage-${city.slug}`,
    },
    openGraph: {
      title: `DJ Mariage ${city.name} | MG Events Animation`,
      description: `DJ animateur mariage à ${city.name}. +20 ans d'expérience, photobooth vintage, animations interactives.`,
      url: `https://www.mg-events35.com/dj-mariage-${city.slug}`,
    },
  };
}

const pointsForts = [
  { icon: Mic2, title: "+20 ans d'expérience", description: 'Plus de 100 mariages animés en Bretagne' },
  { icon: Sparkles, title: 'Effets spectaculaires', description: 'Étincelles froides certifiées CE, fumée lourde' },
  { icon: Camera, title: 'Photobooth vintage', description: 'Style TSF années 60, impressions sur place' },
  { icon: Music, title: 'AnimaJet exclusif', description: 'Animations interactives uniques en Bretagne' },
];

const formules = [
  { name: "Éclat d'Amour", price: '1200', description: "L'essentiel pour une soirée réussie" },
  { name: 'Rêve en Blanc', price: '1490', description: 'Notre formule la plus demandée', popular: true },
  { name: 'Conte de Fées', price: '1690', description: "L'expérience complète avec photobooth" },
];

const musicStats = [
  { icon: Headphones, value: '+25 ans', label: "d'expérience DJ", description: 'Des discothèques bretonnes aux plus beaux mariages' },
  { icon: Disc3, value: 'Répertoire', label: 'musical complet', description: "80's, rock, variété française, hits actuels, électro..." },
  { icon: Volume2, value: 'Matériel', label: 'professionnel', description: 'Son et lumière adaptés aux plus belles salles' },
];

const musicFaqs = [
  { question: 'Quel style de musique passez-vous en mariage ?', answer: "Notre répertoire couvre tous les styles : années 80, rock, new wave, variété française, hits actuels, électro, musiques du monde. Nous adaptons la programmation à vos goûts et à l'ambiance de la soirée." },
  { question: 'Peut-on vous transmettre une playlist personnalisée ?', answer: "Absolument ! Nous créons ensemble votre playlist idéale en amont, tout en gardant la flexibilité de nous adapter en direct aux réactions de la piste de danse." },
  { question: "L'ambiance est-elle adaptée à toutes les générations ?", answer: "C'est notre spécialité. Avec 25 ans d'expérience en discothèque, nous savons fédérer grands-parents, parents et jeunes sur la même piste de danse." },
];

// Génère les FAQs spécifiques à la ville
function generateCityFaqs(city: City) {
  return [
    {
      question: `Quel est le prix d'un DJ mariage à ${city.name} ?`,
      answer: `Nos formules DJ mariage à ${city.name} démarrent à 1200€ TTC (formule Éclat d'Amour) et vont jusqu'à 1690€ TTC (formule Conte de Fées avec photobooth). Ces tarifs incluent le déplacement à ${city.name} et environs, l'installation et le démontage.`,
    },
    {
      question: `Vous déplacez-vous à ${city.name} et ses environs ?`,
      answer: `Oui, nous intervenons à ${city.name} et dans toutes les communes environnantes sans frais supplémentaire : ${city.nearbyCommunes.join(', ')}.`,
    },
    {
      question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
      answer: `Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle, 2 techniciens et la diffusion de vos musiques choisies. Idéal pour les cérémonies en extérieur à ${city.name}.`,
    },
    {
      question: `Quelles animations proposez-vous pour un mariage à ${city.name} ?`,
      answer: `Nous proposons des animations exclusives : AnimaJet (quiz interactif, photo mystère, partage live), photobooth vintage TSF années 60, étincelles froides certifiées CE pour l'ouverture de bal, fumée lourde et jeux lumineux.`,
    },
    {
      question: `Quel est le délai de réservation pour un mariage à ${city.name} ?`,
      answer: `Nous vous conseillons de réserver 12 à 18 mois à l'avance pour les dates prisées (mai à septembre). ${city.name} est une destination prisée pour les mariages. Pour la basse saison, 6 mois peuvent suffire.`,
    },
    {
      question: 'Le matériel est-il aux normes de sécurité ?',
      answer: `Tout notre matériel est professionnel et conforme aux normes. Nos lanceurs d'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE, sans danger pour les salles. Nous disposons d'une assurance RC professionnelle.`,
    },
  ];
}

// Génère le schema LocalBusiness pour la ville
function generateLocalBusinessSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.mg-events35.com/dj-mariage-${city.slug}#organization`,
    "name": `MG Events Animation - DJ Mariage ${city.name}`,
    "image": "https://www.mg-events35.com/images/logo.png",
    "description": `DJ animateur professionnel pour mariage à ${city.name} (${city.departmentCode}). Animation musicale, photobooth vintage, étincelles froides. Plus de 20 ans d'expérience.`,
    "url": `https://www.mg-events35.com/dj-mariage-${city.slug}`,
    "telephone": "+33648106166",
    "email": "contact@mg-events35.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "Bretagne",
      "postalCode": city.postalCode,
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.latitude,
      "longitude": city.longitude
    },
    "areaServed": [
      { "@type": "City", "name": city.name },
      ...city.nearbyCommunes.map(commune => ({ "@type": "City", "name": commune })),
      { "@type": "AdministrativeArea", "name": city.department }
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
      "itemListElement": formules.map(f => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": `Formule ${f.name}` },
        "price": f.price,
        "priceCurrency": "EUR"
      }))
    }
  };
}

// Génère le schema Reviews pour la ville
function generateReviewsSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MG Events Animation",
    "review": city.testimonials.map(t => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": t.author },
      "reviewBody": t.text
    }))
  };
}

// Liens vers les autres villes du même département
function getOtherCitiesInDepartment(city: City): City[] {
  return getCitiesByDepartment(city.departmentCode).filter(c => c.slug !== city.slug);
}

// Départements pour le maillage
const departments = [
  { name: 'Ille-et-Vilaine', code: '35', slug: 'ille-et-vilaine' },
  { name: 'Morbihan', code: '56', slug: 'morbihan' },
  { name: 'Finistère', code: '29', slug: 'finistere' },
  { name: 'Loire-Atlantique', code: '44', slug: 'loire-atlantique' },
  { name: 'Mayenne', code: '53', slug: 'mayenne' },
];

export default async function DJMariageVille({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCityBySlug(ville);

  if (!city) {
    notFound();
  }

  const faqs = generateCityFaqs(city);
  const localBusinessSchema = generateLocalBusinessSchema(city);
  const reviewsSchema = generateReviewsSchema(city);
  const otherCities = getOtherCitiesInDepartment(city);
  const otherDepartments = departments.filter(d => d.code !== city.departmentCode);

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
          <Link href={`/dj-mariage-${city.departmentSlug}`} className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            DJ Mariage {city.department} ({city.departmentCode})
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ Mariage <span className="text-[#c9a227]">{city.name}</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Votre animation de mariage à {city.name} et ses environs
              </h2>
              <p className="text-[#888] leading-relaxed mb-8">
                Vous cherchez un <strong className="text-white">DJ pour votre mariage à {city.name}</strong> ?
                MG Events Animation se déplace à {city.name} et dans toutes les communes environnantes :
                <span className="text-[#c9a227]"> {city.nearbyCommunes.join(', ')}</span>.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Avec plus de <strong className="text-white">20 ans d&apos;expérience</strong> et plus de 100 mariages animés en Bretagne,
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
                  alt={`DJ mariage ambiance dancefloor ${city.name}`}
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
            Pourquoi choisir <span className="text-[#c9a227]">MG Events</span> pour votre mariage à {city.name} ?
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
            Avant de devenir <strong className="text-white">DJ animateur de mariage à {city.name}</strong>, j&apos;ai passé plus de 25 ans
            à faire vibrer les dancefloors des plus grandes discothèques bretonnes.
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

        {/* FAQ Schema */}
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
            Nos <span className="text-[#c9a227]">formules de mariage</span> à {city.name}
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

      {/* Lieux de mariage populaires */}
      {city.weddingVenues.length > 0 && (
        <section className="py-16 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
              Lieux de mariage populaires à <span className="text-[#c9a227]">{city.name}</span>
            </h2>
            <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
              Nous connaissons parfaitement les plus beaux <strong className="text-white">lieux de réception</strong> de {city.name} et adaptons
              notre installation à chaque espace. Châteaux, domaines, manoirs ou salles de réception — nous intervenons partout.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.weddingVenues.map((lieu, index) => (
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
          </div>
        </section>
      )}

      {/* Zones d'intervention */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            DJ Mariage à <span className="text-[#c9a227]">{city.name}</span> et environs
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            <strong className="text-white">Aucun frais de déplacement supplémentaire</strong> pour {city.name} et les communes environnantes.
          </p>
          <div className="card-dark p-6">
            <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
              <MapPin size={18} />
              Communes desservies autour de {city.name}
            </h3>
            <p className="text-[#888] leading-relaxed">
              {city.nearbyCommunes.join(', ')}
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      {city.testimonials.length > 0 && (
        <section className="py-16 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
              Ils nous ont fait confiance à <span className="text-[#c9a227]">{city.name}</span>
            </h2>
            <p className="text-[#888] text-center mb-12">
              Témoignages de mariages animés à {city.name} et environs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.testimonials.map((testimonial, index) => (
                <div key={index} className="card-dark p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#c9a227" className="text-[#c9a227]" />
                    ))}
                  </div>
                  <blockquote className="text-[#aaa] italic mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  {testimonial.venue && (
                    <p className="text-[#888] text-sm flex items-center gap-1">
                      <MapPin size={14} className="text-[#c9a227]" />
                      {testimonial.venue}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> - DJ Mariage {city.name}
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

      {/* Autres villes du département */}
      {otherCities.length > 0 && (
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
              DJ Mariage dans les autres villes de {city.department}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {otherCities.map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/dj-mariage-${otherCity.slug}`}
                  className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
                >
                  DJ Mariage {otherCity.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres départements */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Nous intervenons aussi dans les départements voisins
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {otherDepartments.map((dept) => (
              <Link
                key={dept.slug}
                href={`/dj-mariage-${dept.slug}`}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
              >
                DJ Mariage {dept.name} ({dept.code})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles de blog */}
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
                Guide complet pour trouver le DJ idéal pour votre mariage.
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
            Prêt à faire de votre mariage à {city.name} une <span className="text-[#c9a227]">fête inoubliable</span> ?
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
