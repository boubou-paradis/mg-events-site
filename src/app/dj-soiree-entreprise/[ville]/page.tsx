import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Mic2, Camera, Users, Music, Phone, Mail, MapPin, ChevronDown, Building2, Presentation, Award, HelpCircle } from 'lucide-react';
import { getCityBySlug, getEnterpriseCitySlugs, type City } from '@/data/cities';
import { notFound } from 'next/navigation';

// Génération statique des pages entreprise (10 villes)
export async function generateStaticParams() {
  return getEnterpriseCitySlugs().map((ville) => ({
    ville,
  }));
}

// Métadonnées SEO dynamiques
export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);

  if (!city || !city.forEnterprise) {
    return { title: 'Page non trouvée' };
  }

  return {
    title: `DJ Soirée Entreprise ${city.name} | Animation Corporate ${city.departmentCode} | MG Events`,
    description: `DJ animateur pour soirée d'entreprise à ${city.name}. Séminaires, team building, soirées corporate. Animation professionnelle, photobooth logo. Devis gratuit ✓`,
    keywords: `DJ entreprise ${city.name}, animation corporate ${city.name}, soirée entreprise ${city.name}, team building ${city.name}, DJ séminaire ${city.departmentCode}`,
    alternates: {
      canonical: `https://www.mg-events35.com/dj-soiree-entreprise/${city.slug}`,
    },
    openGraph: {
      title: `DJ Soirée Entreprise ${city.name} | MG Events Animation`,
      description: `DJ animateur pour soirée d'entreprise à ${city.name}. Séminaires, team building, animations interactives.`,
      url: `https://www.mg-events35.com/dj-soiree-entreprise/${city.slug}`,
    },
  };
}

const pointsForts = [
  { icon: Mic2, title: "Expérience corporate", description: "Animation de nombreux événements d'entreprise" },
  { icon: Users, title: 'Team building musical', description: 'Activités interactives pour renforcer la cohésion' },
  { icon: Camera, title: 'Photobooth personnalisé', description: 'Photos avec logo entreprise, partage instantané' },
  { icon: Music, title: 'AnimaJet interactif', description: 'Quiz, blind test et animations digitales' },
];

const formules = [
  { name: 'Cocktail', price: '800', description: "Animation musicale d'ambiance (4h)" },
  { name: 'Corporate', price: '1200', description: 'Soirée complète avec jeux interactifs', popular: true },
  { name: 'Premium', price: '1600', description: 'Expérience complète avec photobooth' },
];

const corporateStats = [
  { icon: Building2, value: 'Entreprises', label: 'de toutes tailles', description: 'PME, ETI, grands groupes : nous adaptons nos prestations' },
  { icon: Presentation, value: 'Événements', label: 'sur mesure', description: 'Séminaires, team building, soirées de fin d\'année, lancements produit' },
  { icon: Award, value: 'Qualité', label: 'professionnelle', description: 'Matériel haut de gamme, ponctualité, discrétion' },
];

// Génère les FAQs pour les événements entreprise
function generateEnterpriseFaqs(city: City) {
  return [
    {
      question: `Quel est le tarif d'un DJ pour une soirée d'entreprise à ${city.name} ?`,
      answer: `Nos formules animation corporate à ${city.name} démarrent à 800€ TTC (formule Cocktail 4h) et vont jusqu'à 1600€ TTC (formule Premium avec photobooth personnalisé). Les tarifs incluent le déplacement et l'installation.`,
    },
    {
      question: 'Pouvez-vous personnaliser l\'animation avec notre branding ?',
      answer: `Absolument ! Nous intégrons votre logo sur le photobooth, les animations AnimaJet et pouvons créer des quiz/blind tests personnalisés autour de votre entreprise ou de votre secteur d'activité.`,
    },
    {
      question: `Intervenez-vous dans les hôtels et centres de congrès de ${city.name} ?`,
      answer: `Oui, nous intervenons régulièrement dans les espaces corporate de ${city.name} : hôtels, centres de congrès, salles de réception. Nous nous adaptons à chaque lieu et à ses contraintes techniques.`,
    },
    {
      question: 'Proposez-vous des animations team building ?',
      answer: `Oui ! Nos animations interactives AnimaJet sont parfaites pour le team building : blind test musical, quiz personnalisé, défis par équipes. Idéal pour renforcer la cohésion d'équipe tout en s'amusant.`,
    },
    {
      question: 'Quel est le délai de réservation pour un événement corporate ?',
      answer: `Pour les événements d'entreprise, nous recommandons 2 à 3 mois d'avance minimum. Les périodes de fin d'année (novembre-décembre) sont très demandées pour les soirées de Noël.`,
    },
    {
      question: 'Facturez-vous en HT ou TTC ?',
      answer: `Nos tarifs affichés sont TTC. Nous fournissons une facture complète avec TVA déductible pour votre comptabilité d'entreprise. Paiement par virement ou chèque.`,
    },
  ];
}

// Schema BreadcrumbList pour le fil d'Ariane
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
        "name": `DJ Soirée Entreprise ${city.name}`,
        "item": `https://www.mg-events35.com/dj-soiree-entreprise/${city.slug}`
      }
    ]
  };
}

// Schema LocalBusiness pour entreprise
function generateEnterpriseSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.mg-events35.com/dj-soiree-entreprise/${city.slug}#organization`,
    "name": `MG Events Animation - DJ Soirée Entreprise ${city.name}`,
    "image": "https://www.mg-events35.com/images/logo.png",
    "description": `DJ animateur pour soirée d'entreprise à ${city.name}. Animation corporate, team building, photobooth personnalisé. Plus de 20 ans d'expérience.`,
    "url": `https://www.mg-events35.com/dj-soiree-entreprise/${city.slug}`,
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
      ...city.nearbyCommunes.slice(0, 5).map(commune => ({ "@type": "City", "name": commune })),
    ],
    "priceRange": "800€ - 1600€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Formules Animation Corporate",
      "itemListElement": formules.map(f => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": `Formule ${f.name}` },
        "price": f.price,
        "priceCurrency": "EUR"
      }))
    }
  };
}

export default async function DJSoireeEntreprise({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCityBySlug(ville);

  if (!city || !city.forEnterprise) {
    notFound();
  }

  const faqs = generateEnterpriseFaqs(city);
  const breadcrumbSchema = generateBreadcrumbSchema(city);
  const enterpriseSchema = generateEnterpriseSchema(city);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseSchema) }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="MG Events Animation"
                width={200}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Accueil</Link>
              <Link href="/#autres-evenements" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Événements</Link>
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
                DJ Soirée Entreprise <span className="text-[#c9a227]">{city.name}</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation musicale pour vos événements corporate à {city.name}
              </h2>
              <p className="text-[#888] leading-relaxed mb-8">
                Vous organisez une <strong className="text-white">soirée d&apos;entreprise à {city.name}</strong> ?
                MG Events Animation propose des prestations sur mesure pour vos événements corporate :
                <span className="text-[#c9a227]"> séminaires, team building, soirées de fin d&apos;année, lancements produit</span>.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Avec plus de <strong className="text-white">20 ans d&apos;expérience</strong>, nous créons une ambiance professionnelle
                et conviviale. Notre technologie <span className="text-[#c9a227]">AnimaJet</span> permet des animations interactives
                (quiz, blind test) personnalisables avec votre branding.
              </p>
              {city.businessAreas && (
                <p className="text-[#888] leading-relaxed mb-8">
                  Nous intervenons dans les zones d&apos;activité de {city.name} :
                  <span className="text-[#c9a227]"> {city.businessAreas.join(', ')}</span>.
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                  <Mail size={18} />
                  Demander un devis
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
                  alt={`DJ soirée entreprise ${city.name}`}
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
            Une animation <span className="text-[#c9a227]">corporate sur mesure</span>
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

      {/* Nos services corporate */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos services pour les <span className="text-[#c9a227]">entreprises</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Des prestations adaptées à tous vos événements professionnels à {city.name}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {corporateStats.map((stat, index) => (
              <div key={index} className="card-dark p-6 text-center">
                <stat.icon size={40} className="text-[#c9a227] mx-auto mb-4" />
                <div className="text-xl font-[family-name:var(--font-display)] text-white mb-1">
                  <strong>{stat.value}</strong> {stat.label}
                </div>
                <p className="text-[#888] text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Types d'événements */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Presentation size={20} />
                Séminaires & Conventions
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Animation musicale d&apos;ambiance pour vos pauses, cocktails et soirées de gala.
                Sonorisation professionnelle pour vos interventions.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Users size={20} />
                Team Building
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Animations interactives pour renforcer la cohésion : blind test musical,
                quiz personnalisé, défis par équipes avec notre technologie AnimaJet.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Star size={20} />
                Soirées de fin d&apos;année
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Soirée de Noël ou nouvel an mémorable pour vos équipes.
                Photobooth avec logo, animations festives, playlist sur mesure.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Award size={20} />
                Lancements & Inaugurations
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Animation musicale pour vos événements exceptionnels :
                lancement produit, inauguration, anniversaire d&apos;entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">formules corporate</span>
          </h2>
          <p className="text-[#888] text-center mb-12">
            Tarifs HT sur devis • TVA déductible
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
                <Link href="/#contact" className="text-[#c9a227] text-sm hover:underline">
                  Demander un devis →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> - Événements corporate
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

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
              }))
            })
          }}
        />
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Organisez un événement <span className="text-[#c9a227]">mémorable</span> à {city.name}
          </h2>
          <p className="text-[#888] mb-8">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis
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
              ← Retour à l&apos;accueil MG Events
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
