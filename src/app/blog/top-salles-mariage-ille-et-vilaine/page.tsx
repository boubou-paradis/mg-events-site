import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, MapPin, Star, Users, Leaf, Castle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 5 des salles de mariage en Ille-et-Vilaine (35) | Guide 2026',
  description: 'Découvrez les plus belles salles de mariage en Ille-et-Vilaine : Domaine de Cicé-Blossac, Château de la Ballue, Manoir de la Begaudière... Notre sélection pour un mariage inoubliable.',
  keywords: 'salle mariage Ille-et-Vilaine, lieu réception mariage 35, domaine mariage Rennes, château mariage Bretagne, salle mariage Rennes',
  alternates: {
    canonical: 'https://www.mg-events35.com/blog/top-salles-mariage-ille-et-vilaine',
  },
  openGraph: {
    title: 'Top 5 des salles de mariage en Ille-et-Vilaine (35)',
    description: 'Notre sélection des plus beaux lieux de réception pour votre mariage en Ille-et-Vilaine.',
    url: 'https://www.mg-events35.com/blog/top-salles-mariage-ille-et-vilaine',
  },
};

const salles = [
  {
    rang: 1,
    nom: "Domaine de Cicé-Blossac",
    ville: "Bruz",
    type: "Domaine & Golf",
    capacite: "200 personnes",
    atouts: ["Cadre verdoyant avec golf 18 trous", "Multiples espaces intérieurs et extérieurs", "Hébergement sur place", "À 10 min de Rennes"],
    description: "Situé aux portes de Rennes, le Domaine de Cicé-Blossac offre un cadre exceptionnel avec son golf, ses jardins à la française et ses salles de réception élégantes. L'un des lieux les plus prisés du département pour les mariages haut de gamme.",
    conseil: "Réservez 18 mois à l'avance pour les dates en haute saison. Le domaine propose des forfaits tout compris très pratiques.",
  },
  {
    rang: 2,
    nom: "Château de la Ballue",
    ville: "Bazouges-la-Pérouse",
    type: "Château historique",
    capacite: "150 personnes",
    atouts: ["Jardins classés 'Jardin Remarquable'", "Architecture XVIIe siècle", "Vue panoramique sur la campagne", "Chambres d'hôtes sur place"],
    description: "Ce château du XVIIe siècle, classé Monument Historique, possède des jardins labellisés 'Jardin Remarquable'. Un lieu chargé d'histoire pour un mariage romantique et intimiste au cœur de la campagne bretonne.",
    conseil: "Idéal pour les cérémonies laïques en extérieur. Les jardins offrent des spots photos exceptionnels.",
  },
  {
    rang: 3,
    nom: "Manoir de la Begaudière",
    ville: "Orgères",
    type: "Manoir champêtre",
    capacite: "180 personnes",
    atouts: ["Ambiance champêtre authentique", "Grand parc arboré", "Grange rénovée avec cachet", "Proche de Rennes (15 min)"],
    description: "Le Manoir de la Begaudière séduit par son authenticité et son charme champêtre. La grange rénovée avec ses pierres apparentes et ses poutres offre un cadre chaleureux, tandis que le parc permet des cocktails en plein air mémorables.",
    conseil: "Parfait pour les mariages champêtres et bohèmes. Prévoyez un plan B en cas de pluie pour le cocktail.",
  },
  {
    rang: 4,
    nom: "Domaine de Quincampoix",
    ville: "Noyal-sur-Vilaine",
    type: "Domaine & Jardins",
    capacite: "250 personnes",
    atouts: ["Orangerie lumineuse", "Jardins à la française", "Grande capacité d'accueil", "Parking spacieux"],
    description: "Ce domaine élégant dispose d'une magnifique orangerie baignée de lumière naturelle et de jardins parfaitement entretenus. Sa grande capacité en fait un choix idéal pour les mariages avec beaucoup d'invités.",
    conseil: "L'orangerie est particulièrement belle en fin d'après-midi avec la lumière dorée. Idéal pour les grandes familles.",
  },
  {
    rang: 5,
    nom: "Château des Pères",
    ville: "Piré-Chancé",
    type: "Château & Parc",
    capacite: "200 personnes",
    atouts: ["Château du XVIIIe siècle", "Parc de 30 hectares", "Étang romantique", "Ambiance exclusive"],
    description: "Le Château des Pères offre un cadre majestueux avec son architecture classique et son immense parc. L'étang ajoute une touche romantique parfaite pour les photos de couple. Un lieu qui garantit un effet 'wow' pour vos invités.",
    conseil: "Le parc est idéal pour une cérémonie laïque au bord de l'étang. Pensez à la sono adaptée pour l'extérieur.",
  },
];

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
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
              <Link href="/blog" className="text-sm text-[#c9a227]">Blog</Link>
              <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-[400px]">
          <Image
            src="/images/gallery-1.jpg"
            alt="Salle de mariage Ille-et-Vilaine"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <article className="relative -mt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          {/* Article Header */}
          <div className="card-dark p-8 mb-8">
            <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                20 janvier 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                10 min de lecture
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Top 5 des salles de mariage en <span className="text-[#c9a227]">Ille-et-Vilaine</span>
            </h1>

            <p className="text-[#888]">
              Notre sélection des plus beaux lieux de réception pour un mariage inoubliable dans le 35.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={20} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume</p>
                <p className="text-[#888] text-sm">MG Events Animation</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-[#aaa] leading-relaxed space-y-6">
              <p className="text-lg">
                Vous cherchez <strong className="text-white">la salle idéale pour votre mariage en Ille-et-Vilaine</strong> ?
                Le département 35 regorge de lieux d&apos;exception : châteaux historiques, domaines champêtres, manoirs de charme...
                Après avoir animé plus de 100 mariages dans la région, nous avons sélectionné pour vous les 5 lieux qui nous ont le plus marqués.
              </p>

              <div className="card-dark p-6 border-[#c9a227]/30">
                <p className="text-white font-medium mb-2">
                  <Castle className="inline mr-2 text-[#c9a227]" size={18} />
                  Notre critère de sélection
                </p>
                <p className="text-[#888] text-sm">
                  Nous avons choisi ces lieux pour leur cadre exceptionnel, la qualité de leur accueil,
                  et surtout... l&apos;acoustique et l&apos;espace dancefloor ! Car oui, en tant que DJ, on sait
                  qu&apos;une belle salle doit aussi permettre de faire la fête.
                </p>
              </div>

              {/* Liste des salles */}
              {salles.map((salle) => (
                <div key={salle.rang} className="mt-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center text-[#0a0a0a] font-bold text-xl">
                      {salle.rang}
                    </span>
                    <div>
                      <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
                        {salle.nom}
                      </h2>
                      <p className="text-[#c9a227] text-sm flex items-center gap-2">
                        <MapPin size={14} />
                        {salle.ville} • {salle.type}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4">{salle.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="card-dark p-4">
                      <p className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                        <Users size={16} className="text-[#c9a227]" />
                        Capacité
                      </p>
                      <p className="text-[#888] text-sm">{salle.capacite}</p>
                    </div>
                    <div className="card-dark p-4">
                      <p className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                        <Star size={16} className="text-[#c9a227]" />
                        Points forts
                      </p>
                      <ul className="text-[#888] text-sm space-y-1">
                        {salle.atouts.slice(0, 2).map((atout) => (
                          <li key={atout}>• {atout}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="card-dark p-4 border-l-4 border-[#c9a227]">
                    <p className="text-white text-sm font-medium mb-1">
                      <Leaf className="inline mr-2 text-[#c9a227]" size={16} />
                      Notre conseil de DJ
                    </p>
                    <p className="text-[#888] text-sm">{salle.conseil}</p>
                  </div>
                </div>
              ))}

              {/* Section conseils généraux */}
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-16 mb-6">
                Nos conseils pour bien choisir votre salle
              </h2>

              <h3 className="text-xl text-white mt-8 mb-4">Pensez à l&apos;acoustique</h3>
              <p>
                Une salle avec trop de réverbération (pierre, hauts plafonds) peut rendre la musique désagréable.
                Lors de votre visite, tapez dans vos mains : si l&apos;écho dure plus de 2 secondes, il faudra prévoir
                un traitement acoustique ou adapter la sonorisation.
              </p>

              <h3 className="text-xl text-white mt-8 mb-4">Vérifiez l&apos;alimentation électrique</h3>
              <p>
                Un DJ professionnel a besoin d&apos;une alimentation stable (minimum 16A). Les vieux bâtiments peuvent
                avoir des installations limitées. Posez la question au propriétaire et transmettez l&apos;info à votre DJ.
              </p>

              <h3 className="text-xl text-white mt-8 mb-4">L&apos;espace dancefloor</h3>
              <p>
                Prévoyez environ <span className="text-[#c9a227]">1m² par personne</span> pour la piste de danse.
                Pour 100 invités, une piste de 50-60m² est idéale. Vérifiez que les tables peuvent être déplacées
                après le repas pour libérer l&apos;espace.
              </p>

              {/* CTA */}
              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Vous avez trouvé votre salle ?
                </h3>
                <p className="text-[#888] mb-6">
                  Il vous faut maintenant un DJ qui connaît ces lieux ! Chez MG Events, nous avons déjà animé
                  des mariages dans la plupart de ces domaines. On connaît les contraintes techniques et on s&apos;adapte.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/dj-mariage-ille-et-vilaine" className="btn-outline">
                    DJ Mariage Ille-et-Vilaine
                  </Link>
                  <Link href="/#contact" className="btn-gold">
                    Demander un devis
                  </Link>
                </div>
              </div>

              {/* FAQ Schema */}
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                Questions fréquentes
              </h2>

              <div className="space-y-4">
                <div className="card-dark p-4">
                  <h3 className="text-white font-medium mb-2">Quel budget prévoir pour une salle de mariage en Ille-et-Vilaine ?</h3>
                  <p className="text-[#888] text-sm">
                    Les tarifs varient de 1 500€ à 8 000€ selon le lieu et la saison. Les châteaux et domaines premium
                    sont généralement entre 4 000€ et 6 000€ pour un week-end complet.
                  </p>
                </div>
                <div className="card-dark p-4">
                  <h3 className="text-white font-medium mb-2">Quand réserver sa salle de mariage ?</h3>
                  <p className="text-[#888] text-sm">
                    Pour les lieux les plus prisés, réservez 18 à 24 mois à l&apos;avance pour les dates en haute saison
                    (mai à septembre). En basse saison, 12 mois peuvent suffire.
                  </p>
                </div>
                <div className="card-dark p-4">
                  <h3 className="text-white font-medium mb-2">Les salles acceptent-elles les DJ externes ?</h3>
                  <p className="text-[#888] text-sm">
                    La grande majorité des lieux en Ille-et-Vilaine acceptent les prestataires externes.
                    Vérifiez simplement les horaires autorisés pour la musique (souvent jusqu&apos;à 4h du matin).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="card-dark p-6 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={32} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume - MG Events Animation</p>
                <p className="text-[#888] text-sm">
                  DJ animateur depuis 25 ans, nous avons animé des mariages dans la plupart
                  de ces lieux d&apos;exception en Ille-et-Vilaine.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-6">
              Articles similaires
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/comment-choisir-dj-mariage-bretagne" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Comment choisir son DJ mariage ?</p>
                <p className="text-[#888] text-sm">Le guide complet pour faire le bon choix...</p>
              </Link>
              <Link href="/blog/ouverture-de-bal-conseils" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Ouverture de bal : nos conseils</p>
                <p className="text-[#888] text-sm">Réussir ce moment magique...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Top 5 des salles de mariage en Ille-et-Vilaine (35)",
            "description": "Découvrez les plus belles salles de mariage en Ille-et-Vilaine : Domaine de Cicé-Blossac, Château de la Ballue, Manoir de la Begaudière...",
            "author": {
              "@type": "Person",
              "name": "Guillaume",
              "jobTitle": "DJ Animateur",
              "worksFor": { "@type": "Organization", "name": "MG Events Animation" }
            },
            "publisher": {
              "@type": "Organization",
              "name": "MG Events Animation",
              "logo": { "@type": "ImageObject", "url": "https://www.mg-events35.com/images/logo.png" }
            },
            "datePublished": "2026-01-20",
            "dateModified": "2026-01-20",
            "mainEntityOfPage": "https://www.mg-events35.com/blog/top-salles-mariage-ille-et-vilaine"
          })
        }}
      />

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel budget prévoir pour une salle de mariage en Ille-et-Vilaine ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les tarifs varient de 1 500€ à 8 000€ selon le lieu et la saison. Les châteaux et domaines premium sont généralement entre 4 000€ et 6 000€ pour un week-end complet."
                }
              },
              {
                "@type": "Question",
                "name": "Quand réserver sa salle de mariage ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour les lieux les plus prisés, réservez 18 à 24 mois à l'avance pour les dates en haute saison (mai à septembre). En basse saison, 12 mois peuvent suffire."
                }
              },
              {
                "@type": "Question",
                "name": "Les salles acceptent-elles les DJ externes ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La grande majorité des lieux en Ille-et-Vilaine acceptent les prestataires externes. Vérifiez simplement les horaires autorisés pour la musique (souvent jusqu'à 4h du matin)."
                }
              }
            ]
          })
        }}
      />

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-[#c9a227] hover:underline">
              ← MG Events - DJ Mariage Bretagne
            </Link>
            <div className="flex items-center gap-4 text-sm text-[#666]">
              <Link href="/mentions-legales" className="hover:text-[#c9a227] transition-colors">Mentions légales</Link>
              <span>|</span>
              <Link href="/cgv" className="hover:text-[#c9a227] transition-colors">CGV</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
