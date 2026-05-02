import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Star, Mic2, Camera, Sparkles, Music, Phone, Mail, MapPin, ChevronDown, Calendar, Users, Lightbulb, Volume2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DJ Mariage Bretagne | Animation Soirée 29, 35, 56, 44 - MG Events',
  description: "DJ mariage en Bretagne : animation élégante sur mesure, sonorisation et éclairage professionnels. Ille-et-Vilaine, Finistère, Morbihan, Loire-Atlantique. 25 ans d'expérience en discothèques bretonnes. Devis gratuit ✓",
  keywords: 'DJ mariage Bretagne, DJ mariage breton, animation mariage Bretagne, DJ Bretagne mariage, sono mariage Bretagne, animation soirée Bretagne, DJ 35 29 56 44',
  alternates: {
    canonical: 'https://www.mg-events35.com/dj-mariage-bretagne',
  },
  openGraph: {
    title: 'DJ Mariage Bretagne | Animation Soirée - MG Events',
    description: "DJ mariage en Bretagne : animation élégante, sonorisation et éclairage professionnels. 25 ans d'expérience.",
    url: 'https://www.mg-events35.com/dj-mariage-bretagne',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.mg-events35.com/dj-mariage-bretagne#organization',
  name: 'MG Events Animation - DJ Mariage Bretagne',
  image: 'https://www.mg-events35.com/images/logo.png',
  description: 'DJ animateur professionnel pour mariage en Bretagne. Animation élégante sur mesure, sonorisation et éclairage professionnels. 25 ans d\'expérience dans les discothèques et mariages bretons.',
  url: 'https://www.mg-events35.com/dj-mariage-bretagne',
  telephone: '+33648106166',
  email: 'contact@mg-events35.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rennes',
    addressRegion: 'Bretagne',
    postalCode: '35000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.1173,
    longitude: -1.6778,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Bretagne' },
    { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
    { '@type': 'AdministrativeArea', name: 'Finistère' },
    { '@type': 'AdministrativeArea', name: 'Morbihan' },
    { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
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
    reviewCount: '52',
    bestRating: '5',
    worstRating: '1',
  },
};

const departments = [
  {
    name: 'Ille-et-Vilaine (35)',
    slug: 'ille-et-vilaine',
    cities: ['Rennes', 'Saint-Malo', 'Fougères', 'Vitré', 'Redon', 'Dinard'],
    description: 'Capitale régionale Rennes, côte d\'Émeraude, châteaux des Marches de Bretagne',
  },
  {
    name: 'Finistère (29)',
    slug: 'finistere',
    cities: ['Brest', 'Quimper', 'Morlaix', 'Concarneau', 'Douarnenez'],
    description: 'Pointe bretonne, presqu\'île de Crozon, domaines face à l\'Atlantique',
  },
  {
    name: 'Morbihan (56)',
    slug: 'morbihan',
    cities: ['Vannes', 'Lorient', 'Pontivy', 'Auray', 'La Trinité-sur-Mer'],
    description: 'Golfe du Morbihan, rivières d\'Étel, châteaux et manoirs côtiers',
  },
  {
    name: 'Loire-Atlantique (44)',
    slug: 'loire-atlantique',
    cities: ['Nantes', 'Saint-Nazaire', 'La Baule', 'Guérande', 'Ancenis'],
    description: 'Vignoble du Muscadet, châteaux de l\'Erdre, presqu\'île guérandaise',
  },
  {
    name: 'Mayenne (53)',
    slug: 'mayenne',
    cities: ['Laval', 'Château-Gontier', 'Évron', 'Craon', 'Mayenne'],
    description: 'Châteaux de la Mayenne, bocage authentique, domaines champêtres',
  },
];

const differentiateurs = [
  {
    icon: Mic2,
    title: '+25 ans d\'expérience',
    desc: 'Forgé dans les discothèques bretonnes depuis 1999 — avant de rejoindre les plus beaux châteaux',
  },
  {
    icon: Sparkles,
    title: 'Effets spectaculaires',
    desc: 'Étincelles froides certifiées CE, fumée lourde, lasers — des effets que vos invités n\'oublieront pas',
  },
  {
    icon: Camera,
    title: 'Photobooth vintage TSF',
    desc: 'Style radio des années 60, impressions immédiates — l\'attraction photo de votre mariage',
  },
  {
    icon: Music,
    title: 'AnimaJet exclusif',
    desc: 'Quiz interactif, photo mystère sur grand écran, blind test live — unique en Bretagne',
  },
];

const servicesInclus = [
  { icon: Calendar, title: 'Rendez-vous préparation', desc: 'Programme, playlist, timing sur mesure' },
  { icon: Users, title: 'Coordination prestataires', desc: 'Traiteur, photographe, wedding planner' },
  { icon: Volume2, title: 'Cérémonie laïque', desc: 'Sonorisation complète (option 180€)' },
  { icon: Lightbulb, title: 'Éclairage professionnel', desc: 'Lyres, wash LED, effets visuels' },
];

const faqs = [
  {
    question: 'Combien coûte un DJ mariage en Bretagne ?',
    answer: 'Nos formules DJ mariage en Bretagne démarrent à 1200€ TTC (formule Éclat d\'Amour) et vont jusqu\'à 1690€ TTC (formule Conte de Fées avec photobooth inclus). Ces tarifs comprennent le déplacement dans toute la Bretagne, la sonorisation, l\'éclairage, l\'installation et le démontage. Aucun frais caché.',
  },
  {
    question: 'Intervenez-vous dans toute la Bretagne ?',
    answer: 'Oui, nous couvrons toute la Bretagne historique et les départements limitrophes : Ille-et-Vilaine (35), Finistère (29), Morbihan (56), Loire-Atlantique (44) et Mayenne (53). De Rennes à Brest, de Saint-Malo à Nantes, nous nous déplaçons sans frais supplémentaire dans un rayon de 150 km.',
  },
  {
    question: 'Qu\'est-ce qui vous différencie des autres DJ mariages en Bretagne ?',
    answer: 'Trois choses : (1) 25 ans d\'expérience terrain forgée dans les discothèques bretonnes — une capacité à lire une piste de danse que les DJ d\'occasion n\'ont pas ; (2) AnimaJet, notre système d\'animation interactif exclusif en Bretagne (quiz, photo mystère, blind test) ; (3) des tarifs transparents affichés sur le site. Pas de mauvaises surprises.',
  },
  {
    question: 'Proposez-vous l\'animation de cérémonie laïque en Bretagne ?',
    answer: 'Oui, notre prestation cérémonie laïque est à 180€ : sonorisation professionnelle, 2 techniciens, diffusion de vos musiques. Idéal pour les cérémonies en extérieur dans les châteaux et domaines bretons. Cette prestation peut être ajoutée à n\'importe quelle formule.',
  },
  {
    question: 'Travaillez-vous avec des wedding planners bretons ?',
    answer: 'Absolument. Nous collaborons régulièrement avec les wedding planners et organisateurs de mariage de Bretagne. Coordination en amont sur le programme et les timings, communication le jour J, respect strict du planning établi — nous nous intégrons à votre organisation. Contactez-nous pour discuter d\'un partenariat.',
  },
  {
    question: 'Quel délai pour réserver votre DJ mariage en Bretagne ?',
    answer: 'Nous conseillons de réserver 12 à 18 mois à l\'avance pour les dates de mai à septembre, les plus demandées. Les samedis d\'été sont souvent complets 15 à 18 mois à l\'avance. En basse saison, 6 mois peuvent suffire. Vérifiez votre date dès que possible.',
  },
];

export default function DJMariageBretagne() {
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
          <Link href="/" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                DJ Mariage <span className="text-[#c9a227]">en Bretagne</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Animation élégante sur mesure dans les 5 départements — châteaux, domaines et demeures de caractère
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
                La Bretagne est l&apos;une des régions les plus riches de France pour les mariages :
                châteaux médiévaux, manoirs en granit, domaines face à l&apos;océan, fermes de caractère rénovées,
                abbayes et demeures historiques... Chaque mariage breton a son décor unique.
                <strong className="text-white"> MG Events Animation se déplace dans toute la Bretagne</strong> —
                Ille-et-Vilaine, Finistère, Morbihan, Loire-Atlantique et Mayenne — pour apporter
                une animation à la hauteur de ces lieux d&apos;exception.
              </p>
              <p className="text-[#888] leading-relaxed mb-6">
                Notre ancrage breton est authentique : <strong className="text-white">25 ans de carrière DJ dans les discothèques de Bretagne</strong>,
                des dancefloors du Finistère au Morbihan, avant de rejoindre les plus beaux châteaux et domaines de la région.
                Cette formation terrain — lire une piste, sentir une ambiance, adapter la programmation en temps réel —
                est ce qui fait la différence entre un DJ de cérémonie et un vrai animateur de soirée.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Et avec notre technologie exclusive <span className="text-[#c9a227]">AnimaJet</span> — quiz interactif,
                photo mystère sur grand écran, blind test live — nous ajoutons une dimension participative
                que très peu de DJs bretons peuvent offrir. <strong className="text-white">De la cérémonie laïque à la soirée dansante</strong>,
                une prestation complète, élégante, coordonnée avec tous vos prestataires.
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
                  alt="DJ mariage animation soirée Bretagne"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos différenciateurs */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Ce que les autres DJ bretons <span className="text-[#c9a227]">n&apos;ont pas</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiateurs.map((d, index) => (
              <div key={index} className="card-dark p-6 text-center">
                <d.icon size={40} className="text-[#c9a227] mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">{d.title}</h3>
                <p className="text-[#888] text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Une prestation <span className="text-[#c9a227]">complète</span> de A à Z
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Sonorisation et éclairage professionnels, animations interactives, coordination avec vos prestataires —
            tout est inclus dans votre devis.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {servicesInclus.map((s, index) => (
              <div key={index} className="card-dark p-5">
                <s.icon size={30} className="text-[#c9a227] mb-3" />
                <h3 className="text-white font-medium mb-2 text-sm">{s.title}</h3>
                <p className="text-[#888] text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="card-dark p-6 border-[#c9a227]/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Users size={30} className="text-[#c9a227] shrink-0" />
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">Wedding planners & organisateurs de mariages bretons</h3>
                <p className="text-[#888] text-sm">
                  Nous travaillons régulièrement en binôme avec les wedding planners de Bretagne.
                  Coordination programme et timings en amont, communication en temps réel le jour J.
                  Nous respectons votre organisation et nous y adaptons sans friction.
                </p>
              </div>
              <Link href="/#contact" className="btn-gold shrink-0 text-sm inline-flex items-center gap-2">
                <Mail size={16} />
                Partenariat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zones par département */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Nos zones d&apos;intervention <span className="text-[#c9a227]">en Bretagne</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            5 départements, plus de 50 villes couvertes. <strong className="text-white">Aucun frais de déplacement</strong>
            dans un rayon de 150 km.
          </p>
          <div className="space-y-6">
            {departments.map((dept) => (
              <div key={dept.slug} className="card-dark p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-white">
                      <span className="text-[#c9a227]">{dept.name}</span>
                    </h3>
                    <p className="text-[#888] text-sm mt-1">{dept.description}</p>
                  </div>
                  <Link
                    href={`/dj-mariage-${dept.slug}`}
                    className="btn-gold text-sm inline-flex items-center gap-2 w-fit shrink-0"
                  >
                    Voir le département →
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dept.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/dj-mariage/${city.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`}
                      className="px-3 py-1 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors text-sm"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lieux en Bretagne */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Châteaux, domaines et <span className="text-[#c9a227]">demeures de caractère</span>
          </h2>
          <p className="text-[#888] text-center mb-8 max-w-3xl mx-auto">
            Nous intervenons dans les plus beaux lieux de réception bretons : châteaux historiques, domaines face à la mer,
            manoirs en granit, abbayes... Chaque salle a ses spécificités acoustiques — nous arrivons préparés.
          </p>
          <div className="text-center">
            <Link
              href="/lieux-reception-bretagne"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a227]/40 rounded-lg text-[#c9a227] hover:bg-[#c9a227]/10 hover:border-[#c9a227] transition-all duration-300"
            >
              <MapPin size={18} />
              Découvrir tous les lieux de réception en Bretagne
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Ils nous ont fait confiance <span className="text-[#c9a227]">en Bretagne</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Merci à Guillaume et Laurence pour leur superbe prestation à notre mariage à Rennes ! Les invités ont été conquis et ont enflammé le dancefloor toute la nuit.", author: "Morane & Kevin", location: "Rennes — Domaine de Cicé-Blossac" },
              { text: "Mariage parfait au Château de Keriolet ! Guillaume et Laurence ont su créer une ambiance magique du début à la fin. On recommande les yeux fermés.", author: "Marine & Loïc", location: "Concarneau — Château de Keriolet" },
              { text: "Les animations AnimaJet ont fait un carton ! Tous nos invités, des grands-parents aux enfants, ont joué au quiz. On ne pensait pas que ça pouvait être aussi immersif.", author: "Aurélie & Sébastien", location: "Château-Gontier — Mayenne" },
              { text: "Une soirée magique au bord de la mer à Saint-Malo ! Les étincelles froides pendant l'ouverture de bal resteront gravées dans nos mémoires.", author: "Marine & Thomas", location: "Saint-Malo — Côte d'Émeraude" },
              { text: "Mariage face au Golfe du Morbihan, une ambiance féerique jusqu'au bout de la nuit. Guillaume sait vraiment lire sa piste. Merci !", author: "Anaïs & Romain", location: "Arradon — Golfe du Morbihan" },
              { text: "De la cérémonie laïque à la fermeture du dancefloor, tout était parfait. Équipe réactive, matériel nickel, ambiance au top. 10/10.", author: "Camille & Julien", location: "Nantes — Domaine de la Frémoire" },
            ].map((t, i) => (
              <div key={i} className="card-dark p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="#c9a227" className="text-[#c9a227]" />)}
                </div>
                <blockquote className="text-[#aaa] italic mb-4">&ldquo;{t.text}&rdquo;</blockquote>
                <p className="text-white font-medium">{t.author}</p>
                <p className="text-[#888] text-sm flex items-center gap-1">
                  <MapPin size={14} className="text-[#c9a227]" />
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> — DJ Mariage Bretagne
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

      {/* Blog */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-8">
            Conseils pour votre <span className="text-[#c9a227]">mariage en Bretagne</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/comment-choisir-dj-mariage-bretagne" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">Comment choisir son DJ mariage en Bretagne ?</h3>
              <p className="text-[#888] text-sm">Guide complet pour trouver le DJ idéal pour votre mariage.</p>
            </Link>
            <Link href="/blog/animations-mariage-originales-2026" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">Animations mariage originales 2026</h3>
              <p className="text-[#888] text-sm">Les tendances animations pour vos mariages bretons en 2026.</p>
            </Link>
            <Link href="/lieux-reception-bretagne" className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors">
              <h3 className="text-white font-medium mb-2 group-hover:text-[#c9a227] transition-colors">Les plus beaux lieux de réception en Bretagne</h3>
              <p className="text-[#888] text-sm">Châteaux, domaines et manoirs pour votre mariage breton.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre mariage breton mérite un DJ <span className="text-[#c9a227]">à la hauteur du lieu</span>
          </h2>
          <p className="text-[#888] mb-8">
            Devis personnalisé sous 24h. Disponibilité vérifiée immédiatement pour votre date.
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
