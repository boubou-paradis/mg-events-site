import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Headphones, Volume2, Disc3, HelpCircle, Calendar, Users, Lightbulb, Monitor } from 'lucide-react';
import { cities, getCityBySlug, getAllCitySlugs, getCitiesByDepartment, type City } from '@/data/cities';
import AnimaJetMeshBlock from '@/components/animajet/AnimaJetMeshBlock';
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
    title: `DJ & Animation Mariage ${city.name} · Avis 5★ · Dès 1200€`,
    description: `DJ animateur mariage à ${city.name} (${city.department}) — Avis 5★, formules dès 1200€ TTC tout inclus. 25 ans d'expérience, AnimaJet, photobooth vintage. ${nearbyText} et environs. Devis gratuit sous 24h ✓`,
    keywords: `DJ mariage ${city.name}, DJ animateur ${city.name}, animation mariage ${city.name}, animateur de soirée ${city.name}, sonorisation mariage ${city.name}, DJ mariage ${city.departmentCode}, DJ ${city.name}`,
    alternates: {
      canonical: `https://www.mg-events35.com/dj-mariage/${city.slug}`,
    },
    openGraph: {
      title: `DJ Mariage ${city.name} | MG Events Animation`,
      description: `DJ animateur mariage à ${city.name}. Avis 5★, dès 1200€. 25 ans d'expérience, photobooth vintage, animations interactives.`,
      url: `https://www.mg-events35.com/dj-mariage/${city.slug}`,
    },
  };
}

const pointsForts = [
  { icon: Mic2, title: "25 ans d'expérience", description: 'Plus de 100 mariages animés en Bretagne' },
  { icon: Sparkles, title: 'Effets spectaculaires', description: 'Étincelles froides certifiées CE, fumée lourde' },
  { icon: Camera, title: 'Photobooth vintage', description: 'Style TSF années 60, impressions sur place' },
  { icon: Music, title: 'AnimaJet, notre création', description: 'Animations interactives conçues et développées par MG Events' },
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

const servicesInclus = [
  { icon: Calendar, title: 'Rendez-vous de préparation', description: 'Entretien personnalisé pour construire votre programme, playlist et timing de soirée' },
  { icon: Users, title: 'Coordination prestataires', description: 'Liaison avec votre traiteur, photographe, fleuriste et wedding planner' },
  { icon: Mic2, title: 'Cérémonie laïque', description: 'Sonorisation complète de votre cérémonie (option à 180€, 2 techniciens dédiés)' },
  { icon: Volume2, title: 'Vin d\'honneur & repas', description: 'Ambiance musicale douce pour l\'apéritif, fond sonore élégant pendant le dîner' },
  { icon: Lightbulb, title: 'Éclairage professionnel', description: 'Mise en lumière : lyres mobiles, wash LED, lasers, stroboscopes et effets spéciaux' },
  { icon: Sparkles, title: 'AnimaJet, notre création', description: 'Quiz interactif, photo mystère sur grand écran, blind test live — conçu et développé par MG Events' },
  { icon: Music, title: 'Programmation sur mesure', description: 'Playlist co-construite avec vous, adaptée en direct aux envies de la piste de danse' },
  { icon: Star, title: 'Animation intergénérationnelle', description: 'Fédérer de 7 à 77 ans sur la même piste de danse : notre marque de fabrique depuis 25 ans' },
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
      answer: `Nous proposons nos animations signature : AnimaJet (quiz interactif, photo mystère, partage live), notre plateforme que nous avons développée, photobooth vintage TSF années 60, étincelles froides certifiées CE pour l'ouverture de bal, fumée lourde et jeux lumineux.`,
    },
    {
      question: `Quel est le délai de réservation pour un mariage à ${city.name} ?`,
      answer: `Nous vous conseillons de réserver 12 à 18 mois à l'avance pour les dates prisées (mai à septembre). ${city.name} est une destination prisée pour les mariages. Pour la basse saison, 6 mois peuvent suffire.`,
    },
    {
      question: `Comment choisir son DJ pour un mariage à ${city.name} ?`,
      answer: `Pour bien choisir votre DJ mariage à ${city.name}, vérifiez : l'expérience réelle en mariage (pas seulement en discothèque), les avis vérifiables de mariés dans la région, la qualité du matériel son et lumière, et la capacité à gérer toutes les générations. Rencontrez le DJ avant de signer, discutez de votre playlist et testez sa réactivité. Chez MG Events, nous proposons une rencontre préalable gratuite pour construire votre soirée sur mesure.`,
    },
    {
      question: `Comment se déroule la préparation avec votre DJ avant le mariage à ${city.name} ?`,
      answer: `Nous organisons un rendez-vous de préparation personnalisé (en visio ou présentiel) 2 à 3 mois avant votre mariage à ${city.name}. Nous construisons ensemble votre programme : playlist, timing de soirée, animations, ouverture de bal. Vous complétez notre formulaire pour noter vos préférences musicales et vos "interdits de passer". Le jour J, nous arrivons 2h à 3h avant le début pour installation et tests son/lumière.`,
    },
    {
      question: 'Quel matériel utilisez-vous pour la sonorisation et l\'éclairage ?',
      answer: `Nous utilisons du matériel professionnel haut de gamme : enceintes actives, caisson de basse, mélangeur numérique, platines Denon. Pour l'éclairage : lyres mobiles, wash LED, lasers, machine à fumée lourde, stroboscopes. Pour les effets : lanceurs d'étincelles froides Mac Mah MAC SPARK 300 certifiés CE. Tout est adapté à la taille et à l'acoustique de votre salle à ${city.name}.`,
    },
    {
      question: 'Le matériel est-il aux normes de sécurité ?',
      answer: `Tout notre matériel est professionnel et conforme aux normes. Nos lanceurs d'étincelles froides Mac Mah MAC SPARK 300 sont certifiés CE, sans danger pour les salles. Nous disposons d'une assurance RC professionnelle.`,
    },
  ];
}

// Génère le schema BreadcrumbList pour le fil d'Ariane
function generateBreadcrumbSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.mg-events35.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `DJ Mariage ${city.department}`,
        "item": `https://www.mg-events35.com/dj-mariage-${city.departmentSlug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `DJ Mariage ${city.name}`,
        "item": `https://www.mg-events35.com/dj-mariage/${city.slug}`
      }
    ]
  };
}

// Génère le schema LocalBusiness pour la ville
function generateLocalBusinessSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.mg-events35.com/dj-mariage/${city.slug}#organization`,
    "name": `MG Events Animation - DJ Mariage ${city.name}`,
    "image": "https://www.mg-events35.com/images/logo.png",
    "description": `DJ animateur professionnel pour mariage à ${city.name} (${city.departmentCode}). Animation musicale, photobooth vintage, étincelles froides. 25 ans d'expérience.`,
    "url": `https://www.mg-events35.com/dj-mariage/${city.slug}`,
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
    "review": city.testimonials.map(t => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": t.author },
      "reviewBody": t.text
    })),
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
  const breadcrumbSchema = generateBreadcrumbSchema(city);
  const localBusinessSchema = generateLocalBusinessSchema(city);
  const otherCities = getOtherCitiesInDepartment(city);
  const otherDepartments = departments.filter(d => d.code !== city.departmentCode);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
                Avec <strong className="text-white">25 ans d&apos;expérience</strong> et plus de 100 mariages animés en Bretagne,
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
                  src="/images/gallery-1.jpg"
                  alt={`DJ mariage ambiance dancefloor ${city.name}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu SEO unique - Description locale */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-8">
            Se marier à <span className="text-[#c9a227]">{city.name}</span> : notre expertise locale
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            {city.seoDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-[#aaa] leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Points forts locaux */}
          <div className="mt-10 card-dark p-6">
            <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
              <Star size={20} />
              Pourquoi choisir {city.name} pour votre mariage ?
            </h3>
            <ul className="space-y-3">
              {city.localHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-[#aaa]">
                  <Check size={18} className="text-[#c9a227] shrink-0 mt-1" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DJ animateur & services d'animation (SEO variantes) */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre <span className="text-[#c9a227]">DJ animateur</span> à {city.name} et en {city.department}
          </h2>
          <div className="space-y-5 text-[#aaa] leading-relaxed">
            <p>
              Chez MG Events, nous sommes bien plus qu&apos;un simple DJ : nous sommes votre
              <strong className="text-white"> DJ animateur de mariage à {city.name}</strong>. Notre rôle ne se
              limite pas à enchaîner les morceaux — nous orchestrons toute votre <strong className="text-white">animation de soirée</strong>,
              du lancement du vin d&apos;honneur jusqu&apos;au dernier slow. En véritable
              <strong className="text-white"> animateur de soirée de mariage</strong>, nous prenons le micro avec justesse,
              rythmons les temps forts (entrée des mariés, discours, jeux, ouverture de bal) et fédérons vos invités,
              de 7 à 77 ans, autour de la piste de danse.
            </p>
            <p>
              Notre prestation d&apos;<strong className="text-white">animation mariage à {city.name}</strong> comprend une
              <strong className="text-white"> sonorisation professionnelle</strong> calibrée pour chaque moment, un
              <strong className="text-white"> éclairage sur mesure</strong> adapté à votre salle, et nos animations
              interactives AnimaJet (quiz, blind test, photo mystère). En amont, nous coordonnons le déroulé avec
              votre traiteur, votre photographe et votre wedding planner pour un jour J parfaitement fluide. Un seul
              <strong className="text-white"> prestataire événementiel</strong> pour votre musique, votre son, vos lumières et vos animations.
            </p>
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

      {/* Services inclus */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Ce qui est <span className="text-[#c9a227]">inclus</span> dans votre prestation
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            De la cérémonie laïque à la soirée dansante — une animation élégante et sur mesure,
            avec une coordination complète avec vos prestataires.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {servicesInclus.map((service, index) => (
              <div key={index} className="card-dark p-5">
                <service.icon size={30} className="text-[#c9a227] mb-3" />
                <h3 className="text-white font-medium mb-2 text-sm">{service.title}</h3>
                <p className="text-[#888] text-xs leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          {/* Wedding planner callout */}
          <div className="card-dark p-6 border-[#c9a227]/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Users size={30} className="text-[#c9a227] shrink-0" />
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">Vous êtes wedding planner ou organisateur de mariage ?</h3>
                <p className="text-[#888] text-sm">
                  Nous collaborons régulièrement avec les wedding planners de {city.name} et de la région.
                  Coordination en amont, communication le jour J, respect strict des timings — nous nous intégrons
                  parfaitement à votre organisation. Contactez-nous pour discuter d&apos;un partenariat.
                </p>
              </div>
              <Link href="/#contact" className="btn-gold shrink-0 text-sm inline-flex items-center gap-2">
                <Mail size={16} />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animations signature */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">animations signature</span> pour votre mariage
          </h2>
          <p className="text-[#888] text-center mb-10 max-w-2xl mx-auto">
            Au-delà de la musique, des animations uniques qui font la différence
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/#photobooth" className="card-dark p-6 group hover:border-[#c9a227]/40 transition-colors">
              <Camera size={32} className="text-[#c9a227] mb-3" />
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors text-lg">
                Photobooth Vintage TSF
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Notre cabine photobooth style TSF années 60, avec impressions instantanées sur place.
                Un souvenir unique et authentique pour chacun de vos invités — inclus dans la formule Conte de Fées.
              </p>
              <span className="text-[#c9a227] text-sm mt-4 inline-block">Voir le photobooth →</span>
            </Link>
            <Link href="/#animajet" className="card-dark p-6 group hover:border-[#c9a227]/40 transition-colors">
              <Monitor size={32} className="text-[#c9a227] mb-3" />
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors text-lg">
                AnimaJet — notre création maison
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Quiz interactif, photo mystère, blind test musical en direct sur grand écran.
                Une plateforme d&apos;animation que nous avons conçue et développée, pour faire vibrer tous vos invités.
              </p>
              <span className="text-[#c9a227] text-sm mt-4 inline-block">Découvrir AnimaJet →</span>
            </Link>
            <Link href="/feu-artifice-jour" className="card-dark p-6 group hover:border-[#c9a227]/40 transition-colors relative sm:col-span-2">
              <span className="absolute top-4 right-4 px-2.5 py-1 bg-[#c9a227] text-[#0a0a0a] text-xs font-semibold uppercase tracking-wider rounded-full">
                Nouveauté
              </span>
              <Sparkles size={32} className="text-[#c9a227] mb-3" />
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors text-lg">
                Feu d&apos;Artifice de Jour — Explosion de Couleurs
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Un tir de 4 canons de poudre Holi, couleurs au choix, déclenché de façon synchronisée pour
                sublimer la fin de cérémonie laïque ou la sortie des mariés à {city.name}. Un effet
                spectaculaire en plein jour, idéal pour des photos de groupe inoubliables — 120€ pour 4 couleurs.
              </p>
              <span className="text-[#c9a227] text-sm mt-4 inline-block">Découvrir le feu d&apos;artifice de jour →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Maillage AnimaJet — bloc varie selon la ville (anti-duplication) */}
      <AnimaJetMeshBlock cityName={city.name} />

      {/* Lieux de mariage populaires */}
      {city.weddingVenues.length > 0 && (
        <section className="py-16 bg-[#0a0a0a]">
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
                  href={`/dj-mariage/${otherCity.slug}`}
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
            <Link
              href="/dj-mariage-bretagne"
              className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
            >
              DJ Mariage Bretagne
            </Link>
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
