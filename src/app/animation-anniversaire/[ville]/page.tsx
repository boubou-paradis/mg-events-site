import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Mic2, Camera, PartyPopper, Music, Phone, Mail, MapPin, ChevronDown, Cake, Gift, Sparkles, HelpCircle } from 'lucide-react';
import { getCityBySlug, getBirthdayCitySlugs, type City } from '@/data/cities';
import { notFound } from 'next/navigation';

// Génération statique des pages anniversaire (5 villes principales)
export async function generateStaticParams() {
  return getBirthdayCitySlugs().map((ville) => ({
    ville,
  }));
}

// Métadonnées SEO dynamiques
export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);

  if (!city || !city.forBirthday) {
    return { title: 'Page non trouvée' };
  }

  return {
    title: `Animation Anniversaire ${city.name} | DJ Fête Privée ${city.departmentCode} | MG Events`,
    description: `DJ animateur pour anniversaire à ${city.name}. Animation musicale, karaoké, photobooth. Fêtes privées mémorables. Devis gratuit ✓`,
    keywords: `DJ anniversaire ${city.name}, animation anniversaire ${city.name}, fête privée ${city.name}, DJ soirée ${city.name}, animation ${city.departmentCode}`,
    alternates: {
      canonical: `https://www.mg-events35.com/animation-anniversaire/${city.slug}`,
    },
    openGraph: {
      title: `Animation Anniversaire ${city.name} | MG Events Animation`,
      description: `DJ animateur pour anniversaire à ${city.name}. Animation musicale, karaoké, photobooth.`,
      url: `https://www.mg-events35.com/animation-anniversaire/${city.slug}`,
    },
  };
}

const pointsForts = [
  { icon: Mic2, title: 'Animation sur mesure', description: "Adaptée à l'âge et aux goûts des invités" },
  { icon: PartyPopper, title: 'Ambiance garantie', description: 'Jeux, karaoké et moments festifs' },
  { icon: Camera, title: 'Photobooth vintage', description: 'Souvenirs photos pour tous les invités' },
  { icon: Music, title: 'Playlist personnalisée', description: 'Vos morceaux préférés pour un moment unique' },
];

const formules = [
  { name: 'Essentiel', price: '600', description: 'Animation musicale (4h)' },
  { name: 'Festif', price: '900', description: 'Animation complète avec jeux', popular: true },
  { name: 'VIP', price: '1200', description: 'Expérience premium avec photobooth' },
];

const birthdayFeatures = [
  { icon: Cake, value: 'Tous les âges', label: '30, 40, 50 ans...', description: 'Chaque anniversaire mérite une fête à la hauteur' },
  { icon: Gift, value: 'Sur mesure', label: 'Vos envies', description: 'Playlist, animations et ambiance personnalisées' },
  { icon: Sparkles, value: 'Effets', label: 'spectaculaires', description: 'Fumée lourde et étincelles froides disponibles' },
];

// FAQs pour anniversaire
function generateBirthdayFaqs(city: City) {
  return [
    {
      question: `Quel est le tarif d'un DJ pour un anniversaire à ${city.name} ?`,
      answer: `Nos formules animation anniversaire à ${city.name} démarrent à 600€ TTC (4h d'animation) et vont jusqu'à 1200€ TTC (formule VIP avec photobooth). Le déplacement à ${city.name} est inclus.`,
    },
    {
      question: 'À partir de combien de personnes intervenez-vous ?',
      answer: `Nous intervenons à partir de 30 personnes pour garantir une ambiance festive. Pour les événements plus intimistes, contactez-nous pour étudier votre demande.`,
    },
    {
      question: 'Proposez-vous du karaoké ?',
      answer: `Oui ! Le karaoké est disponible en option (150€) ou inclus dans la formule Festif. Avec des milliers de titres disponibles, c'est idéal pour créer des moments de partage mémorables.`,
    },
    {
      question: `Intervenez-vous à domicile à ${city.name} ?`,
      answer: `Oui, nous intervenons chez vous si l'espace le permet, mais aussi dans les salles des fêtes, restaurants privatisés ou domaines de ${city.name} et environs.`,
    },
    {
      question: 'Quelles animations proposez-vous pour un anniversaire ?',
      answer: `Nous proposons : quiz musical personnalisé, karaoké, blind test, jeux interactifs AnimaJet, photobooth vintage. Nous adaptons les animations à l'âge des participants et à vos envies.`,
    },
    {
      question: 'Peut-on personnaliser la playlist ?',
      answer: `Absolument ! Nous créons ensemble la playlist idéale avec vos morceaux préférés et ceux qui marqueront les esprits. Nous nous adaptons aussi en direct aux réactions de vos invités.`,
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
        "name": `Animation Anniversaire ${city.name}`,
        "item": `https://www.mg-events35.com/animation-anniversaire/${city.slug}`
      }
    ]
  };
}

// Schema LocalBusiness
function generateBirthdaySchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.mg-events35.com/animation-anniversaire/${city.slug}#organization`,
    "name": `MG Events Animation - Anniversaire ${city.name}`,
    "image": "https://www.mg-events35.com/images/logo.png",
    "description": `DJ animateur pour anniversaire à ${city.name}. Animation musicale, karaoké, photobooth. Fêtes privées mémorables.`,
    "url": `https://www.mg-events35.com/animation-anniversaire/${city.slug}`,
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
    "priceRange": "600€ - 1200€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Formules Animation Anniversaire",
      "itemListElement": formules.map(f => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": `Formule ${f.name}` },
        "price": f.price,
        "priceCurrency": "EUR"
      }))
    }
  };
}

export default async function AnimationAnniversaire({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCityBySlug(ville);

  if (!city || !city.forBirthday) {
    notFound();
  }

  const faqs = generateBirthdayFaqs(city);
  const breadcrumbSchema = generateBreadcrumbSchema(city);
  const birthdaySchema = generateBirthdaySchema(city);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birthdaySchema) }}
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
                Animation Anniversaire <span className="text-[#c9a227]">{city.name}</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                DJ pour votre fête d&apos;anniversaire à {city.name}
              </h2>
              <p className="text-[#888] leading-relaxed mb-8">
                Vous organisez un <strong className="text-white">anniversaire à {city.name}</strong> ?
                MG Events Animation transforme votre fête en un moment inoubliable avec une
                <span className="text-[#c9a227]"> animation musicale sur mesure</span>.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                30 ans, 40 ans, 50 ans ou plus — chaque anniversaire mérite une célébration à la hauteur !
                <strong className="text-white"> Karaoké, quiz musical, photobooth</strong>, playlist personnalisée :
                nous créons l&apos;ambiance qui vous ressemble.
              </p>
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
                  src="/images/gallery-3.jpg"
                  alt={`Animation anniversaire ${city.name}`}
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
            Une fête <span className="text-[#c9a227]">inoubliable</span> à {city.name}
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

      {/* Services anniversaire */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos services <span className="text-[#c9a227]">anniversaire</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Des animations adaptées à tous les âges et toutes les envies
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {birthdayFeatures.map((feat, index) => (
              <div key={index} className="card-dark p-6 text-center">
                <feat.icon size={40} className="text-[#c9a227] mx-auto mb-4" />
                <div className="text-xl font-[family-name:var(--font-display)] text-white mb-1">
                  <strong>{feat.value}</strong> {feat.label}
                </div>
                <p className="text-[#888] text-sm">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Animations disponibles */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Mic2 size={20} />
                Karaoké
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Des milliers de titres disponibles pour que chacun puisse monter sur scène !
                Du classique aux derniers hits, en français et en anglais.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Music size={20} />
                Quiz & Blind Test
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Animations interactives pour mettre l&apos;ambiance : quiz musical générationnel,
                blind test par équipes, défis musicaux.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Camera size={20} />
                Photobooth Vintage
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Notre photobooth style TSF années 60 avec accessoires, impressions illimitées
                et partage numérique instantané.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                <Sparkles size={20} />
                Effets Spéciaux
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Fumée lourde et étincelles froides certifiées CE pour des moments magiques
                (soufflage des bougies, entrée surprise...).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">formules anniversaire</span>
          </h2>
          <p className="text-[#888] text-center mb-12">
            Des prestations pour tous les budgets
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
            Questions <span className="text-[#c9a227]">fréquentes</span> - Anniversaire
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
            Fêtez votre anniversaire en <span className="text-[#c9a227]">grand</span> à {city.name}
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
