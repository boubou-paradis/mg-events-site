import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MapPin, Phone, Mail, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Les Plus Beaux Lieux de Réception pour votre Mariage en Bretagne',
  description: "Châteaux, domaines, manoirs et demeures de caractère pour votre mariage en Bretagne : Ille-et-Vilaine, Finistère, Morbihan, Loire-Atlantique, Mayenne.",
  keywords: 'lieux réception mariage Bretagne, château mariage Bretagne, domaine mariage Bretagne, manoir mariage Bretagne, salle mariage Bretagne, lieux mariage Ille-et-Vilaine Finistère Morbihan',
  alternates: {
    canonical: 'https://www.mg-events35.com/lieux-reception-bretagne',
  },
  openGraph: {
    title: 'Les Plus Beaux Lieux de Réception Mariage en Bretagne | MG Events',
    description: "Châteaux, domaines et manoirs pour votre mariage en Bretagne. MG Events, DJ professionnel, intervient dans tous ces lieux d'exception.",
    url: 'https://www.mg-events35.com/lieux-reception-bretagne',
  },
};

const lieuxParDepartement = [
  {
    departement: 'Ille-et-Vilaine (35)',
    slug: 'ille-et-vilaine',
    couleur: 'Rennes et ses alentours',
    lieux: [
      { nom: 'Domaine de Cicé-Blossac', commune: 'Bruz', type: 'Domaine & Golf 18 trous', detail: 'Le lieu le plus demandé du 35 — jardins à la française, parc arboré, capacité 300+ invités' },
      { nom: 'Château de Montmuran', commune: 'Les Iffs', type: 'Château Monument Historique', detail: 'Forteresse médiévale classée du XIVe siècle, panorama exceptionnel sur le bocage rennais' },
      { nom: 'Manoir de la Begaudière', commune: 'Rennes', type: 'Manoir XVIIe siècle', detail: 'Manoir en granit avec parc arboré, au calme en plein cœur de la métropole rennaise' },
      { nom: 'Domaine de Tizé', commune: 'Thorigné-Fouillard', type: 'Domaine & Étangs', detail: 'Cadre naturel exceptionnel avec étangs et prairies, à 15 min de Rennes' },
      { nom: 'Château du Bois Guy', commune: 'Parigné', type: 'Château romantique', detail: 'Château privé entouré de forêt et d\'un étang — intimité garantie pour votre mariage' },
      { nom: 'Château de la Ballue', commune: 'Bazouges-la-Pérouse', type: 'Château & Jardins labyrinthes', detail: 'Jardins classés Remarquables, architecture XVIIe, atmosphère hors du temps' },
    ],
    cityLinks: [
      { name: 'Rennes', slug: 'rennes' },
      { name: 'Saint-Malo', slug: 'saint-malo' },
      { name: 'Fougères', slug: 'fougeres' },
      { name: 'Vitré', slug: 'vitre' },
    ],
  },
  {
    departement: 'Morbihan (56)',
    slug: 'morbihan',
    couleur: 'Golfe du Morbihan et côtes sauvages',
    lieux: [
      { nom: 'Domaine de Rochevilaine', commune: 'Billiers', type: 'Relais & Châteaux vue mer', detail: 'Falaises face à l\'océan, spa de luxe, jardins suspendus — le mariage haut de gamme morbihannais' },
      { nom: 'Château de Kerlarec', commune: 'Arradon', type: 'Château vue Golfe', detail: 'Vue panoramique sur le Golfe du Morbihan, parc romantique, chapelle privée' },
      { nom: 'Manoir de Kerhuel', commune: 'Pluneret', type: 'Manoir breton authentique', detail: 'Manoir en pierres avec parc paysager et étang — authenticité bretonne préservée' },
      { nom: 'Domaine de Kerbastic', commune: 'Guidel', type: 'Domaine vue océan', detail: 'Propriété familiale avec vue sur l\'Atlantique, jardins paysagers, ambiance intime' },
      { nom: 'Château de Kerguéhennec', commune: 'Bignan', type: 'Château & Parc sculpture', detail: 'Château XVIIIe et son parc de sculptures contemporaines — mariage art et nature' },
      { nom: 'Château de Locguénolé', commune: 'Hennebont', type: 'Château-Hôtel Relais & Châteaux', detail: 'Au bord du Blavet, parc de 120 hectares, hébergements de luxe sur place' },
    ],
    cityLinks: [
      { name: 'Vannes', slug: 'vannes' },
      { name: 'Lorient', slug: 'lorient' },
      { name: 'Auray', slug: 'auray' },
      { name: 'Pontivy', slug: 'pontivy' },
    ],
  },
  {
    departement: 'Finistère (29)',
    slug: 'finistere',
    couleur: 'Pointe bretonne et côtes découpées',
    lieux: [
      { nom: 'Domaine de Kervail', commune: 'Plomelin', type: 'Domaine champêtre', detail: 'Domaine rural avec grange rénovée, étang et prairies — mariage champêtre en Cornouaille' },
      { nom: 'Manoir de Moëllien', commune: 'Plonévez-Porzay', type: 'Manoir historique', detail: 'Manoir du XVIIe siècle en pleine campagne bigoudène, atmosphère romantique préservée' },
      { nom: 'Château de Keriolet', commune: 'Concarneau', type: 'Château néogothique', detail: 'Architecture néogothique unique en Bretagne, jardins et dépendances face à la mer' },
      { nom: 'Manoir de Kerlut', commune: 'Ploudaniel', type: 'Manoir & Jardins', detail: 'Manoir breton en pierres avec jardins soignés, à 30 min de Brest' },
      { nom: 'Château du Taureau', commune: 'Baie de Morlaix', type: 'Forteresse insulaire Vauban', detail: 'Expérience unique : château sur îlot accessible en bateau au milieu de la baie de Morlaix' },
      { nom: 'Abbaye de Daoulas', commune: 'Daoulas', type: 'Abbaye & Jardins médiévaux', detail: 'Cloître roman du XIIe siècle, jardins de plantes médicinales classés — mariage historique' },
    ],
    cityLinks: [
      { name: 'Brest', slug: 'brest' },
      { name: 'Quimper', slug: 'quimper' },
      { name: 'Morlaix', slug: 'morlaix' },
      { name: 'Concarneau', slug: 'concarneau' },
    ],
  },
  {
    departement: 'Loire-Atlantique (44)',
    slug: 'loire-atlantique',
    couleur: 'Vignoble nantais et côte Atlantique',
    lieux: [
      { nom: 'Manoir de la Régate', commune: 'Nantes', type: 'Manoir en bord d\'Erdre', detail: 'Manoir avec terrasse sur l\'Erdre, cadre naturel à 10 min du centre de Nantes' },
      { nom: 'Domaine de la Frémoire', commune: 'Vertou', type: 'Domaine viticole', detail: 'Chai contemporain dans les vignes du Muscadet — mariage avec dégustation de vins locaux' },
      { nom: 'Château du Plessis', commune: 'La Chapelle-sur-Erdre', type: 'Château avec douves', detail: 'Château romantique entouré de douves, jardins paysagers, sur les rives de l\'Erdre' },
      { nom: 'Castel Marie-Louise', commune: 'La Baule', type: 'Hôtel de charme face à l\'océan', detail: 'Demeure anglo-normande Belle Époque, parc face à la mer, standing 5 étoiles' },
      { nom: 'Hôtel Hermitage Barrière', commune: 'La Baule', type: 'Palace balnéaire', detail: 'Palace 5 étoiles avec plage privée, salles de réception panoramiques sur la baie' },
    ],
    cityLinks: [
      { name: 'Nantes', slug: 'nantes' },
      { name: 'Saint-Nazaire', slug: 'saint-nazaire' },
      { name: 'La Baule', slug: 'la-baule' },
      { name: 'Guérande', slug: 'guerande' },
    ],
  },
  {
    departement: 'Mayenne (53)',
    slug: 'mayenne',
    couleur: 'Châteaux et bocage mayennais',
    lieux: [
      { nom: 'Château de Craon', commune: 'Craon', type: 'Château & Parc classé', detail: 'Château XVIIIe avec parc à l\'anglaise de 35 hectares — le plus beau château de la Mayenne' },
      { nom: 'Domaine de Cimbré', commune: 'Bonchamp-lès-Laval', type: 'Domaine & Étang', detail: 'Domaine familial avec étang, prairie et dépendances rénovées, à 10 min de Laval' },
      { nom: 'Château du Rocher', commune: 'Mézangers', type: 'Château historique', detail: 'Château médiéval remanié, environnement naturel exceptionnel dans la campagne mayennaise' },
      { nom: 'Manoir de la Cour', commune: 'Quelaines-Saint-Gault', type: 'Manoir & Jardins', detail: 'Manoir élégant avec jardins à la française et dépendances — charme discret de la Mayenne' },
    ],
    cityLinks: [
      { name: 'Laval', slug: 'laval' },
      { name: 'Château-Gontier', slug: 'chateau-gontier' },
      { name: 'Mayenne', slug: 'mayenne-ville' },
    ],
  },
];

export default function LieuxReceptionBretagne() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Les plus beaux lieux de réception mariage en Bretagne',
            description: 'Sélection de châteaux, domaines et manoirs pour mariages en Bretagne — avec intervention de MG Events Animation',
            numberOfItems: lieuxParDepartement.reduce((acc, d) => acc + d.lieux.length, 0),
            itemListElement: lieuxParDepartement.flatMap((dept, dI) =>
              dept.lieux.map((lieu, lI) => ({
                '@type': 'ListItem',
                position: dI * 10 + lI + 1,
                name: `${lieu.nom} — ${lieu.commune} (${dept.departement})`,
                description: lieu.detail,
              }))
            ),
          }),
        }}
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
              <Link href="/dj-mariage-bretagne" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">DJ de mariage en Bretagne</Link>
              <Link href="/blog" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Blog</Link>
              <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link href="/dj-mariage-bretagne" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour à nos prestations mariage
          </Link>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-6">
            Les plus beaux lieux de réception <span className="text-[#c9a227]">pour votre mariage en Bretagne</span>
          </h1>
          <p className="text-xl text-[#aaa] max-w-3xl mb-8">
            Châteaux, domaines, manoirs et demeures de caractère — une sélection de{' '}
            <strong className="text-white">{lieuxParDepartement.reduce((acc, d) => acc + d.lieux.length, 0)} lieux</strong>{' '}
            dans les 5 départements où MG Events Animation intervient régulièrement.
          </p>
          <p className="text-[#888] max-w-3xl leading-relaxed">
            Chaque lieu de réception a ses spécificités : acoustique de la pierre apparente, configuration des espaces,
            règles sonores, accessibilité. Nous connaissons ces contraintes et arrivons préparés pour que
            la prestation son et lumière soit parfaite quelle que soit la salle choisie.
          </p>
        </div>
      </section>

      {/* Lieux par département */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {lieuxParDepartement.map((dept, deptIndex) => (
              <div key={deptIndex}>
                {/* Header département */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
                      <span className="text-[#c9a227]">{dept.departement}</span>
                    </h2>
                    <p className="text-[#888] text-sm mt-1">{dept.couleur}</p>
                  </div>
                  <Link
                    href={`/dj-mariage-${dept.slug}`}
                    className="btn-gold text-sm inline-flex items-center gap-2 w-fit"
                  >
                    DJ Mariage {dept.departement} →
                  </Link>
                </div>

                {/* Grille des lieux */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                  {dept.lieux.map((lieu, lieuIndex) => (
                    <div key={lieuIndex} className="card-dark p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#c9a227]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin size={16} className="text-[#c9a227]" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-sm">{lieu.nom}</h3>
                          <p className="text-[#c9a227] text-xs">{lieu.commune} • {lieu.type}</p>
                        </div>
                      </div>
                      <p className="text-[#888] text-xs leading-relaxed pl-11">{lieu.detail}</p>
                      <div className="mt-3 pl-11 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#c9a227" className="text-[#c9a227]" />)}
                        <span className="text-[#666] text-xs ml-1">MG Events intervient ici</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Liens vers villes du département */}
                <div className="flex flex-wrap gap-3">
                  <span className="text-[#666] text-sm self-center">DJ mariage dans ce département :</span>
                  {dept.cityLinks.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/dj-mariage/${city.slug}`}
                      className="px-3 py-1 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors text-sm"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir pour ces lieux */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Pourquoi ces lieux nous font <span className="text-[#c9a227]">confiance</span> ?
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Après 25 ans de terrain et des centaines de mariages animés, nous avons développé
            une expertise précieuse : comprendre les contraintes acoustiques et logistiques de chaque lieu.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-3">Acoustique adaptée</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                La pierre apparente d&apos;un château médiéval réverbère différemment d&apos;une grange rénovée
                ou d&apos;une salle contemporaine. Nous connaissons ces spécificités et adaptons notre
                sonorisation pour un son clair, puissant mais jamais agressif.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-3">Logistique maîtrisée</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Accès des véhicules, installation discrète, respect des planchers anciens,
                normes électriques des bâtiments classés — nous avons tout vu, tout géré.
                Le jour J, aucune mauvaise surprise logistique.
              </p>
            </div>
            <div className="card-dark p-6">
              <h3 className="text-[#c9a227] font-medium mb-3">Coordination prestataires</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Traiteur, photographe, wedding planner, fleuriste : nous travaillons en équipe.
                Chaque intervenant sait quand l&apos;autre agit. Résultat : une soirée fluide,
                sans couacs ni temps morts qui cassent l&apos;ambiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre lieu de réception est sur cette liste ?
          </h2>
          <p className="text-[#888] mb-8">
            Contactez-nous pour confirmer notre disponibilité à votre date et recevoir un devis personnalisé sous 24h.
            Nous connaissons certainement déjà votre salle.
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

      {/* Maillage interne */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white font-medium text-center mb-6">Nos pages par département</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Ille-et-Vilaine', href: '/dj-mariage-ille-et-vilaine' },
              { label: 'Finistère', href: '/dj-mariage-finistere' },
              { label: 'Morbihan', href: '/dj-mariage-morbihan' },
              { label: 'Loire-Atlantique', href: '/dj-mariage-loire-atlantique' },
              { label: 'Mayenne', href: '/dj-mariage-mayenne' },
              { label: 'Laval', href: '/dj-mariage/laval' },
              { label: 'Morlaix', href: '/dj-mariage/morlaix' },
              { label: 'Bretagne', href: '/dj-mariage-bretagne' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors text-sm"
              >
                DJ Mariage {link.label}
              </Link>
            ))}
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
