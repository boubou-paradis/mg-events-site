// Configuration des villes pour les pages SEO

/**
 * Zone commerciale :
 *  - 'prioritaire' : secteur d'environ 100 km autour de Redon (35), où MG Events
 *    intervient habituellement. ATTENTION : ce n'est PAS la distance incluse dans
 *    les forfaits (100 km ALLER-RETOUR, soit ~50 km aller — voir TRAVEL_RULE).
 *  - 'etendue' : au-delà du secteur habituel. Prestation possible, mais étudiée
 *    au cas par cas et chiffrée sur devis (kilomètres + hébergement éventuel).
 */
export type CityZone = 'prioritaire' | 'etendue';

/**
 * Règle tarifaire officielle, unique source de vérité pour tout le site.
 * Ne jamais présenter les 100 km comme un rayon : ce sont 100 km aller-retour.
 */
export const TRAVEL_RULE = {
  includedRoundTripKm: 100,
  extraKmPrice: '0,66 €/km',
  base: 'Redon (35)',
  short: 'Déplacement inclus jusqu’à 100 km aller-retour au départ de Redon (35). Au-delà, les kilomètres supplémentaires sont facturés 0,66 €/km et indiqués clairement sur le devis.',
  asterisk: '* Tarifs incluant jusqu’à 100 km aller-retour au départ de Redon. Au-delà, 0,66 €/km supplémentaire, précisé sur le devis.',
  outsideArea: 'Pour les lieux situés en dehors de notre zone habituelle, les prestations sont étudiées au cas par cas selon la date, la formule choisie et les contraintes logistiques. Des frais de déplacement et, si nécessaire, d’hébergement sont précisés sur le devis.',
  /**
   * À rappeler partout où une distance approximative est citée : les distances
   * ville-à-ville affichées sur le site sont indicatives. Ne JAMAIS en déduire
   * qu'une ville est « comprise » dans les 100 km A/R inclus.
   */
  exactDistance: 'La distance exacte est calculée selon l’adresse du lieu de réception.',
} as const;

export interface City {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  departmentSlug: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  population?: string;
  /**
   * Distance routière approximative Redon → ville, en km (trajet aller).
   * Sert à classer la ville en zone prioritaire ou étendue, et à afficher un
   * discours honnête sur le déplacement. Ne pas confondre avec les 100 km A/R
   * inclus dans les forfaits.
   */
  distanceFromRedonKm: number;
  zone: CityZone;
  // Overrides SEO facultatifs (title/description) — utilisés pour les villes dont
  // une ancienne page autonome bien positionnée a été consolidée ici : on conserve
  // le title/description qui captait la requête courte "DJ <ville>". Sinon le
  // template dynamique fournit les valeurs par défaut.
  metaTitle?: string;
  metaDescription?: string;
  // Contenu SEO unique par ville
  seoDescription: string; // 2-3 paragraphes uniques sur les mariages dans cette ville
  localHighlights: string[]; // Points forts locaux (3-4 bullet points)
  nearbyCommunes: string[];
  weddingVenues: {
    nom: string;
    ville: string;
    type: string;
    description?: string; // Description du lieu
  }[];
  testimonials: {
    author: string;
    text: string;
    venue?: string;
  }[];
  // Pour pages entreprise
  forEnterprise?: boolean;
  businessAreas?: string[];
  // Pour pages anniversaire
  forBirthday?: boolean;
}

export const cities: City[] = [
  // ========== ILLE-ET-VILAINE (35) ==========
  {
    name: 'Rennes',
    slug: 'rennes',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    departmentSlug: 'ille-et-vilaine',
    postalCode: '35000',
    latitude: 48.1173,
    longitude: -1.6778,
    population: '220 000',
    distanceFromRedonKm: 70,
    zone: 'prioritaire',
    // Test CTR 28/08/2026 : "DJ Mariage Rennes" en tête de title (au lieu de
    // "DJ & Animation Mariage Rennes") pour capter l'expression exacte dès le
    // début du snippet. Template global ajoute " | MG Events Animation".
    metaTitle: 'DJ Mariage Rennes · Avis 5★ · Dès 1200€',
    seoDescription: `Rennes, capitale de la Bretagne, est la métropole de référence pour les mariages haut de gamme dans le Grand Ouest. Avec son patrimoine historique, son accessibilité exceptionnelle (TGV Paris-Rennes en 1h25) et une offre de domaines et châteaux parmi les plus denses de France, la métropole rennaise séduit chaque année des centaines de couples de toute la région — et au-delà.

Chercher un DJ mariage à Rennes, c'est chercher quelqu'un qui connaît vraiment le territoire. Les salles ont chacune leurs contraintes acoustiques : la pierre apparente du Manoir de la Begaudière réverbère différemment des volumes contemporains du Florian. Le Domaine de Cicé-Blossac, à Bruz, avec son golf 18 trous et ses jardins à la française, est l'un des lieux les plus prisés du 35 — et nous y avons animé de nombreuses soirées. Chaque fois, nous arrivons avec une installation adaptée à l'espace, jamais du matériel "générique".

L'offre de lieux de réception autour de Rennes est remarquable : châteaux Renaissance des Marches de Bretagne, manoirs du pays rennais cachés dans les vallons, domaines champêtres de la forêt de Rennes, salles contemporaines en périphérie de la métropole. Le Château de Montmuran (classé Monument Historique), le Domaine de Tizé à Thorigné-Fouillard avec ses étangs, ou encore le Château du Bois Guy à Parigné dans son écrin de forêt privée — chaque lieu raconte une histoire différente et mérite une animation à sa hauteur.

Rennes, c'est aussi une ville vivante avec une scène culturelle forte. Les couples rennais ont souvent des attentes musicales éclectiques : electro, rock alternatif, variété française, bretonne revisitée, hits des 80s et 90s... Notre répertoire couvre tous ces univers. Et avec notre expérience de 25 ans en discothèque, nous savons lire une piste de danse et adapter la programmation en temps réel — pas seulement suivre une playlist figée.

Notre plateforme AnimaJet, que nous avons conçue et développée nous-mêmes, ajoute une dimension participative à votre mariage à Rennes : quiz interactif en direct, photos mystère partagées sur grand écran, blind test live, roue de la destinée... Des animations qui font vraiment partie du souvenir du mariage.

Au-delà de la soirée dansante, nous proposons la sonorisation de cérémonie laïque (à 180€), idéale pour les cérémonies en extérieur au Domaine de Cicé-Blossac ou dans les jardins des manoirs rennais. Deux techniciens dédiés, retransmission en direct des musiques que vous avez choisies, sonorisation discrète mais puissante.

En tant que DJ mariage à Rennes depuis 25 ans, nous avons constitué un réseau de partenaires de confiance dans la métropole : photographes, vidéastes, wedding planners, traiteurs. Cette connaissance de l'écosystème local garantit une coordination parfaite le jour J, et souvent des recommandations croisées qui facilitent l'organisation.

Concrètement, un mariage rennais avec MG Events, c'est : un rendez-vous de préparation personnalisé pour construire votre programme musical et le timing de votre soirée, une coordination avec votre traiteur et votre photographe, une animation élégante et sur mesure de la cérémonie laïque à la soirée dansante — avec cet équilibre musical entre les générations qui est notre marque de fabrique depuis plus de 25 ans. Le vin d'honneur en musique douce, le repas en fond sonore élégant, puis l'explosion de la piste de danse : chaque moment de votre journée est pensé. Quel budget pour un DJ mariage à Rennes ? Nos formules démarrent à 1200€ TTC (formule Éclat d'Amour), 1490€ pour la formule Rêve en Blanc, et 1690€ pour la formule Conte de Fées incluant le photobooth vintage TSF. Des tarifs transparents, sans surprise : les forfaits incluent jusqu'à 100 km aller-retour au départ de Redon (35), et les kilomètres supplémentaires éventuels sont facturés 0,66 €/km, indiqués noir sur blanc sur votre devis.`,
    localHighlights: [
      'Capitale bretonne : le plus grand choix de domaines, châteaux et manoirs de la région',
      'TGV Paris-Rennes en 1h25 — accessibilité maximale pour vos invités nationaux',
      'Tradition bretonne intégrée : sets fest-noz revisités sur demande',
      'Réseau partenaires premium : photographes, traiteurs, fleuristes rennais recommandés',
      'À 45 min de Fougères, Vitré, Saint-Malo — idéal pour un mariage en Ille-et-Vilaine',
    ],
    nearbyCommunes: ['Cesson-Sévigné', 'Bruz', 'Chantepie', 'Saint-Jacques-de-la-Lande', 'Pacé', 'Betton', 'Saint-Grégoire', 'Vezin-le-Coquet', 'Le Rheu', 'Montfort-sur-Meu', 'Acigné', 'Chartres-de-Bretagne', 'Thorigné-Fouillard', 'Vern-sur-Seiche', 'Corps-Nuds', 'Noyal-sur-Vilaine', 'Liffré'],
    weddingVenues: [
      { nom: 'Domaine de Cicé-Blossac', ville: 'Bruz', type: 'Domaine & Golf', description: 'Golf 18 trous et jardins à la française — le lieu le plus demandé du 35' },
      { nom: 'Manoir de la Begaudière', ville: 'Rennes', type: 'Manoir XVIIe', description: 'Manoir historique avec parc arboré en plein cœur de Rennes' },
      { nom: 'Château du Bois Guy', ville: 'Parigné', type: 'Château', description: 'Château romantique avec étang et forêt privée, 45 min de Rennes' },
      { nom: 'Domaine de Tizé', ville: 'Thorigné-Fouillard', type: 'Domaine', description: 'Domaine avec étangs et espaces verts à 15 min du centre de Rennes' },
      { nom: 'Château de Montmuran', ville: 'Les Iffs', type: 'Château historique', description: 'Château médiéval classé Monument Historique, 30 min de Rennes' },
      { nom: 'Le Florian', ville: 'Rennes', type: 'Salle de réception', description: 'Grande capacité, équipements modernes, parking — pour les grands mariages' },
      { nom: 'Manoir du Plessis', ville: 'Cesson-Sévigné', type: 'Manoir & Jardins', description: 'Manoir de caractère à 10 min de Rennes, cadre intime et verdoyant' },
      { nom: 'Château de la Ballue', ville: 'Bazouges-la-Pérouse', type: 'Château historique', description: 'Château du XVIIe avec jardins labyrinthiques à la française, 45 min de Rennes' },
    ],
    testimonials: [
      { author: 'Morane & Kevin', text: "Merci à Guillaume et Laurence pour leur superbe prestation à notre mariage à Rennes ! Les invités ont été conquis et ont enflammé le dancefloor toute la nuit.", venue: 'Domaine de Cicé-Blossac' },
      { author: 'Sophie & Maxime', text: "Une soirée inoubliable au Manoir de la Begaudière. L'ambiance était parfaite du début à la fin, toutes les générations ont dansé !", venue: 'Manoir de la Begaudière' },
      { author: 'Camille & Thomas', text: "Les étincelles froides pour notre ouverture de bal au Château du Bois Guy, c'était magique. Le photobooth vintage a fait sensation auprès de nos invités.", venue: 'Château du Bois Guy' },
      { author: 'Lucie & Antoine', text: "AnimaJet c'est une idée de génie — le quiz interactif a mis une ambiance de folie ! Nos invités en parlent encore. Merci MG Events pour cette soirée parfaite à Rennes.", venue: 'Domaine de Tizé' },
    ],
    forEnterprise: true,
    businessAreas: ['Rennes Atalante', 'Saint-Grégoire Business Park', 'Cesson-Sévigné', 'Zone ViaSilva'],
    forBirthday: true,
  },
  {
    name: 'Saint-Malo',
    slug: 'saint-malo',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    departmentSlug: 'ille-et-vilaine',
    postalCode: '35400',
    latitude: 48.6493,
    longitude: -2.0049,
    population: '46 000',
    distanceFromRedonKm: 140,
    zone: 'etendue',
    seoDescription: `Saint-Malo, cité corsaire emblématique de la Côte d'Émeraude, offre un décor de mariage absolument unique en France. Les remparts séculaires, les plages de sable fin et la vue sur la baie créent une atmosphère romantique incomparable. Un mariage à Saint-Malo, c'est la promesse de photos exceptionnelles avec la mer en toile de fond et d'une ambiance iodée qui marque les esprits.

Les lieux de réception malouins rivalisent de prestige : hôtels Belle Époque face à la mer, manoirs de corsaires dans l'intra-muros, domaines avec vue sur le large. Le Grand Hôtel des Thermes et ses terrasses panoramiques, le Domaine des Ormes et son château dans les terres, ou encore les salles privatisables des remparts offrent des options pour tous les styles de mariage.

Notre expérience de DJ mariage à Saint-Malo nous a appris à composer avec les particularités locales : acoustique des salles voûtées de l'intra-muros, gestion du vent pour les cocktails en terrasse, coordination avec les marées pour les photos sur la plage du Sillon. Nous travaillons en étroite collaboration avec les meilleurs photographes et traiteurs de la côte pour garantir une journée parfaite.`,
    localHighlights: [
      'Cadre maritime exceptionnel : remparts, plages et couchers de soleil sur la baie',
      'Hébergements de charme pour vos invités dans la cité corsaire',
      'Spécialiste des mariages en bord de mer : gestion du vent, sono adaptée aux terrasses',
      'À 1h de Rennes et 3h de Paris : accessibilité optimale pour vos invités',
    ],
    nearbyCommunes: ['Dinard', 'Cancale', 'Saint-Lunaire', 'Saint-Briac-sur-Mer', 'Paramé', 'Rothéneuf', 'Saint-Servan'],
    weddingVenues: [
      { nom: 'Grand Hôtel des Thermes', ville: 'Saint-Malo', type: 'Hôtel de luxe', description: 'Palace face à la mer avec spa et terrasses panoramiques' },
      { nom: 'Domaine des Ormes', ville: 'Epiniac', type: 'Domaine', description: 'Château et parc de 200 hectares avec golf et hébergements' },
      { nom: 'Manoir du Cunningham', ville: 'Saint-Malo', type: 'Manoir', description: 'Demeure de caractère avec jardin clos dans l\'intra-muros' },
    ],
    testimonials: [
      { author: 'Marine & Thomas', text: "Une soirée magique au bord de la mer à Saint-Malo ! Les étincelles froides pendant l'ouverture de bal resteront gravées dans nos mémoires." },
      { author: 'Aurélie & Romain', text: "Mariage parfait face aux remparts. MG Events a su créer une ambiance exceptionnelle." },
    ],
    forEnterprise: true,
    businessAreas: ['Zone du Val', 'Saint-Malo Agglomération'],
    forBirthday: false,
  },
  {
    name: 'Fougères',
    slug: 'fougeres',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    departmentSlug: 'ille-et-vilaine',
    postalCode: '35300',
    latitude: 48.3525,
    longitude: -1.1987,
    population: '20 000',
    distanceFromRedonKm: 130,
    zone: 'etendue',
    seoDescription: `Fougères possède l'un des plus impressionnants châteaux médiévaux d'Europe, véritable joyau des Marches de Bretagne. Cette forteresse du XIe siècle et son quartier médiéval offrent un cadre de mariage féerique pour les couples amoureux d'histoire. La ville haute avec ses maisons à colombages et la ville basse dominée par les tours du château créent une atmosphère de conte de fées.

Le pays de Fougères regorge de domaines et manoirs nichés dans la campagne vallonnée des Marches de Bretagne. À mi-chemin entre Rennes et le Mont-Saint-Michel, la région attire des couples de toute la France séduits par son authenticité préservée. Les forêts de Fougères et de Villecartier offrent des décors naturels exceptionnels pour vos photos de mariage.

Nous intervenons régulièrement dans le pays fougerais et connaissons les spécificités acoustiques des salles voûtées et des granges rénovées typiques de la région. Notre matériel s'adapte parfaitement aux lieux de caractère, avec une sonorisation qui respecte l'architecture tout en garantissant une qualité audio irréprochable pour votre soirée dansante.`,
    localHighlights: [
      'Château médiéval classé parmi les plus beaux de France',
      'Cadre champêtre authentique entre bocage et forêts',
      'À 45 min de Rennes et 45 min du Mont-Saint-Michel',
      'Domaines et manoirs de caractère à prix accessibles',
    ],
    nearbyCommunes: ['Vitré', 'La Guerche-de-Bretagne', 'Châteaubourg', 'Javené', 'Lécousse', 'Romagné'],
    weddingVenues: [
      { nom: 'Château de Fougères', ville: 'Fougères', type: 'Château médiéval', description: 'Forteresse médiévale avec 13 tours et jardins romantiques' },
      { nom: 'Domaine de la Haute Forêt', ville: 'Fougères', type: 'Domaine', description: 'Domaine boisé avec étang et grange rénovée' },
    ],
    testimonials: [
      { author: 'Camille & Julien', text: "Notre mariage au château près de Fougères a été une réussite totale grâce à MG Events. La fumée lourde pour notre première danse était parfaite." },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'Vitré',
    slug: 'vitre',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    departmentSlug: 'ille-et-vilaine',
    postalCode: '35500',
    latitude: 48.1244,
    longitude: -1.2125,
    population: '18 000',
    distanceFromRedonKm: 110,
    zone: 'etendue',
    seoDescription: `Vitré, classée "Petite Cité de Caractère" et "Plus Beaux Détours de France", offre un patrimoine médiéval remarquablement préservé. Son château triangulaire unique, ses ruelles pavées et ses maisons à pans de bois créent un décor de mariage hors du temps. La ville a conservé son authenticité avec plus de 100 maisons médiévales et Renaissance formant un ensemble architectural exceptionnel.

Le pays vitréen, aux portes de la Bretagne, combine charme rural et accessibilité. À seulement 35 minutes de Rennes par l'autoroute, Vitré attire les couples souhaitant un mariage de caractère sans les contraintes logistiques des zones isolées. Les domaines environnants, souvent d'anciennes propriétés de la noblesse bretonne, proposent des cadres intimistes et élégants.

En tant que DJ mariage expérimenté à Vitré, nous apprécions particulièrement l'acoustique des salles de réception locales, souvent installées dans d'anciennes granges en pierre rénovées avec goût. Notre équipement professionnel sublime ces espaces authentiques tout en garantissant un son puissant et clair pour vos moments de fête.`,
    localHighlights: [
      'Cité médiévale exceptionnellement préservée avec château classé',
      'À 35 min de Rennes : le charme de la campagne sans l\'éloignement',
      'Granges et manoirs authentiques rénovés avec élégance',
      'Région verdoyante idéale pour photos champêtres',
    ],
    nearbyCommunes: ['Châteaubourg', 'Janzé', 'La Guerche-de-Bretagne', 'Argentré-du-Plessis', 'Étrelles'],
    weddingVenues: [
      { nom: 'Château de Vitré', ville: 'Vitré', type: 'Château', description: 'Château triangulaire unique avec tours et remparts médiévaux' },
      { nom: 'Domaine du Rocher', ville: 'Vitré', type: 'Domaine', description: 'Propriété de charme avec parc paysager et dépendances' },
    ],
    testimonials: [
      { author: 'Emilie & Nicolas', text: "Animation au top pour notre mariage à Vitré. Tous nos invités ont dansé jusqu'au bout de la nuit !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'Redon',
    slug: 'redon',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    departmentSlug: 'ille-et-vilaine',
    postalCode: '35600',
    latitude: 47.6514,
    longitude: -2.0847,
    population: '10 000',
    distanceFromRedonKm: 0,
    zone: 'prioritaire',
    seoDescription: `Redon, au confluent de la Vilaine et de l'Oust, est une ville d'eau au patrimoine fluvial unique en Bretagne. L'ancienne abbaye bénédictine Saint-Sauveur, le port de plaisance et les quais bordés de maisons d'armateurs créent une atmosphère paisible et romantique. Cette position de carrefour, aux confins de trois départements (Ille-et-Vilaine, Morbihan, Loire-Atlantique), en fait un lieu de réception idéal pour rassembler famille et amis de toute la région.

Le pays de Redon offre un cadre bucolique préservé avec ses marais, ses prairies et ses chemins de halage le long des canaux de Bretagne. Les domaines locaux, souvent d'anciennes propriétés de négociants en sel ou en vin, combinent élégance discrète et tarifs plus accessibles que sur la côte. C'est l'endroit parfait pour un mariage champêtre authentique dans un cadre de châteaux, domaines et demeures de caractère, loin de l'agitation des grandes villes.

Basés à Bains-sur-Oust, à 15 kilomètres de Redon, nous sommes véritablement le DJ mariage le plus proche du pays redonnais. Notre connaissance intime du territoire, des salles de réception et des prestataires locaux nous permet de vous accompagner avec une expertise de proximité inégalée. Nous intervenons régulièrement à Redon, Allaire, Saint-Nicolas-de-Redon, Guémené-Penfao, Pipriac, Grand-Fougeray et dans tous les villages alentour. La distance exacte est calculée selon l'adresse du lieu de réception : les forfaits incluent jusqu'à 100 km aller-retour au départ de Redon, et les kilomètres supplémentaires éventuels sont facturés 0,66 €/km, indiqués sur le devis.

Notre technologie exclusive AnimaJet ajoute une dimension participative rare dans la région : quiz interactif en direct, partage de photos sur grand écran, blind test live, roue de la destinée. Des animations qui fédèrent toutes les générations — et aucun concurrent local ne peut vous proposer ça. Avec 25 ans d'expérience DJ, de la cérémonie laïque à la soirée dansante, nous vous garantissons une animation élégante et sur mesure, avec une coordination parfaite avec vos autres prestataires.`,
    localHighlights: [
      'Notre base : nous sommes installés à Bains-sur-Oust, à 15 min de Redon — le DJ mariage local',
      'Carrefour de 3 départements (35, 56, 44) : idéal pour rassembler vos invités',
      'Cadre fluvial unique avec canaux, marais et chemins de halage préservés',
      'Tarifs des domaines plus accessibles que sur la côte, cadre authentique garanti',
    ],
    nearbyCommunes: ['Guichen', 'Bain-de-Bretagne', 'Grand-Fougeray', 'Pipriac', 'Saint-Nicolas-de-Redon', 'Allaire', 'Bains-sur-Oust', 'Guémené-Penfao', 'Herbignac', 'La Chapelle-de-Brain', 'Malansac', 'Saint-Just'],
    weddingVenues: [
      { nom: 'Abbaye Saint-Sauveur', ville: 'Redon', type: 'Lieu historique', description: 'Abbaye bénédictine du IXe siècle avec cloître roman' },
      { nom: 'Domaine de la Vilaine', ville: 'Redon', type: 'Domaine', description: 'Propriété au bord de la Vilaine avec parc arboré' },
      { nom: 'Château de Bienassis', ville: 'Erquy', type: 'Château', description: 'Château avec douves et jardins à la française' },
      { nom: 'Manoir de la Molière', ville: 'Allaire', type: 'Manoir & Étang', description: 'Manoir entouré d\'étangs, cadre romantique préservé' },
      { nom: 'Domaine du Bois d\'Amont', ville: 'Saint-Nicolas-de-Redon', type: 'Domaine champêtre', description: 'Domaine champêtre avec prairie et grange rénovée' },
      { nom: 'La Ferme de la Bouvardière', ville: 'Pipriac', type: 'Ferme de caractère', description: 'Ferme bretonne rénovée avec salle de réception en pierres' },
    ],
    testimonials: [
      { author: 'Claire & Antoine', text: "Superbe prestation pour notre mariage au bord de la Vilaine. Guillaume et Laurence ont créé une ambiance parfaite du vin d'honneur jusqu'à la fermeture. Merci MG Events !" },
      { author: 'Marie & Kevin', text: "AnimaJet a mis tout le monde d'accord : les grands-parents, les enfants, tout le monde a joué au quiz ! Notre mariage à Allaire restera gravé dans les mémoires.", venue: 'Domaine près d\'Allaire' },
      { author: 'Céline & Florent', text: "Les étincelles froides pour notre ouverture de bal c'était féerique. Et la sono parfaitement adaptée à la grange en pierres. Un duo vraiment professionnel.", venue: 'Pipriac' },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'Dinard',
    slug: 'dinard',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    departmentSlug: 'ille-et-vilaine',
    postalCode: '35800',
    latitude: 48.6328,
    longitude: -2.0700,
    population: '10 000',
    distanceFromRedonKm: 135,
    zone: 'etendue',
    seoDescription: `Dinard, la "Nice du Nord", a conservé tout le charme de la Belle Époque avec ses villas somptueuses, ses jardins exotiques et ses plages élégantes. Face à Saint-Malo de l'autre côté de la Rance, cette station balnéaire chic offre un cadre de mariage d'un raffinement rare. Les couchers de soleil sur la baie, les villas aux architectures extravagantes et l'atmosphère distinguée séduisent les couples en quête d'élégance.

La promenade du Clair de Lune, les plages de l'Écluse et de Saint-Énogat, les pointes rocheuses offrent des décors de photos de mariage variés et spectaculaires. Les hôtels de luxe dinardais perpétuent la tradition d'accueil haut de gamme qui a fait la réputation de la station auprès de l'aristocratie britannique dès le XIXe siècle.

Un mariage à Dinard demande une expertise particulière : gestion des cocktails en terrasse face au vent marin, adaptation aux espaces souvent intimes des villas Belle Époque, coordination avec les prestataires locaux habitués à l'exigence de la clientèle. Notre expérience de 25 ans sur la Côte d'Émeraude nous permet de relever ces défis avec professionnalisme.`,
    localHighlights: [
      'Station balnéaire chic avec villas Belle Époque classées',
      'Vue exceptionnelle sur Saint-Malo et la baie de la Rance',
      'Hôtels et restaurants gastronomiques de haut standing',
      'Festival du Film Britannique : ambiance internationale garantie',
    ],
    nearbyCommunes: ['Saint-Malo', 'Saint-Lunaire', 'Saint-Briac-sur-Mer', 'Pleurtuit', 'La Richardais'],
    weddingVenues: [
      { nom: 'Grand Hôtel Barrière', ville: 'Dinard', type: 'Hôtel de luxe', description: 'Palace Belle Époque avec vue panoramique sur la baie' },
      { nom: 'Villa Reine Hortense', ville: 'Dinard', type: 'Villa Belle Époque', description: 'Villa historique avec jardins en terrasse face à la mer' },
    ],
    testimonials: [
      { author: 'Léa & Hugo', text: "Mariage de rêve à Dinard avec vue sur la mer. L'équipe MG Events était parfaite !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },

  // ========== LOIRE-ATLANTIQUE (44) ==========
  {
    name: 'Nantes',
    slug: 'nantes',
    department: 'Loire-Atlantique',
    departmentCode: '44',
    departmentSlug: 'loire-atlantique',
    postalCode: '44000',
    latitude: 47.2184,
    longitude: -1.5536,
    population: '320 000',
    distanceFromRedonKm: 80,
    zone: 'prioritaire',
    seoDescription: `Nantes, métropole créative et dynamique, combine patrimoine historique et effervescence contemporaine. L'ancien duché de Bretagne offre un choix incomparable de lieux de réception : châteaux des bords de l'Erdre, domaines viticoles du Muscadet, manoirs du vignoble nantais. La ville elle-même propose des espaces atypiques comme les Machines de l'Île ou des salles avec vue sur la Loire.

La région nantaise est réputée pour la qualité de ses vignobles. Un mariage dans le pays du Muscadet, c'est l'occasion d'offrir à vos invités une expérience œnologique unique avec les vins locaux : Muscadet Sèvre-et-Maine, Gros Plant, coteaux d'Ancenis. Les domaines viticoles ouvrent leurs chais et leurs jardins pour des réceptions intimistes ou grandioses.

Notre expertise de DJ mariage à Nantes s'appuie sur une connaissance approfondie de la scène événementielle locale. Nous travaillons régulièrement avec les meilleurs traiteurs nantais, photographes et wedding planners de la métropole. Cette synergie avec l'écosystème local garantit une coordination parfaite le jour J.`,
    localHighlights: [
      'Métropole dynamique avec TGV Paris-Nantes en 2h15',
      'Vignoble du Muscadet : mariages œnologiques dans les domaines',
      'Patrimoine exceptionnel : châteaux de l\'Erdre, manoirs du vignoble',
      'Scène événementielle riche : prestataires de haut niveau disponibles',
    ],
    nearbyCommunes: ['Rezé', 'Saint-Herblain', 'Orvault', 'Vertou', 'Carquefou', 'La Chapelle-sur-Erdre', 'Bouguenais', 'Couëron'],
    weddingVenues: [
      { nom: 'Château de la Poterie', ville: 'Nantes', type: 'Château', description: 'Château du XVIIe avec orangerie et parc à la française' },
      { nom: 'Domaine de la Frémoire', ville: 'Vertou', type: 'Domaine', description: 'Domaine viticole avec chai contemporain et vignes' },
      { nom: 'Manoir de la Régate', ville: 'Nantes', type: 'Manoir', description: 'Manoir en bord d\'Erdre avec terrasse sur l\'eau' },
      { nom: 'Château du Plessis', ville: 'La Chapelle-sur-Erdre', type: 'Château', description: 'Château romantique avec douves et jardins paysagers' },
    ],
    testimonials: [
      { author: 'Laura & Pierre', text: "Mariage parfait à Nantes ! MG Events a su mettre une ambiance de folie. Le photobooth vintage a fait sensation." },
      { author: 'Mathilde & Alexandre', text: "Une soirée exceptionnelle au Domaine de la Frémoire. Merci pour cette animation au top !" },
    ],
    forEnterprise: true,
    businessAreas: ['Île de Nantes', 'Euronantes', 'Atlanpole', 'Saint-Herblain'],
    forBirthday: true,
  },
  {
    name: 'Saint-Nazaire',
    slug: 'saint-nazaire',
    department: 'Loire-Atlantique',
    departmentCode: '44',
    departmentSlug: 'loire-atlantique',
    postalCode: '44600',
    latitude: 47.2736,
    longitude: -2.2137,
    population: '72 000',
    distanceFromRedonKm: 60,
    zone: 'prioritaire',
    seoDescription: `Saint-Nazaire, ville portuaire tournée vers l'océan, offre des lieux de mariage résolument atypiques. L'héritage des grands paquebots se retrouve dans des espaces de réception uniques comme Escal'Atlantic, installé dans l'ancienne base sous-marine. Pour les couples en quête d'originalité, un mariage nazairien promet une expérience mémorable entre patrimoine industriel et horizons maritimes.

La baie de Saint-Nazaire, avec sa vue sur le pont et l'estuaire de la Loire, crée des tableaux spectaculaires pour vos photos de mariage. À deux pas de La Baule et du littoral guérandais, Saint-Nazaire combine les avantages d'une ville active avec la proximité immédiate des plages et des marais salants.

Notre expérience de DJ à Saint-Nazaire nous a familiarisés avec les contraintes acoustiques particulières des lieux industriels reconvertis. Nous savons adapter notre sonorisation aux espaces atypiques, qu'il s'agisse d'anciennes halles portuaires ou de salles panoramiques face à l'océan, pour garantir un son parfait quelle que soit la configuration.`,
    localHighlights: [
      'Lieux atypiques : ancienne base sous-marine, halles portuaires rénovées',
      'Vue sur l\'estuaire de la Loire et le pont de Saint-Nazaire',
      'Proximité immédiate de La Baule et de la côte sauvage',
      'Ville dynamique avec hébergements accessibles pour vos invités',
    ],
    nearbyCommunes: ['Pornichet', 'La Baule', 'Guérande', 'Trignac', 'Montoir-de-Bretagne', 'Saint-André-des-Eaux'],
    weddingVenues: [
      { nom: 'Domaine du Bois de la Cour', ville: 'Saint-Nazaire', type: 'Domaine', description: 'Domaine boisé avec grange rénovée et espaces extérieurs' },
      { nom: 'Escal\'Atlantic', ville: 'Saint-Nazaire', type: 'Lieu atypique', description: 'Espace événementiel dans l\'ancienne base sous-marine' },
    ],
    testimonials: [
      { author: 'Manon & Florian', text: "Super ambiance pour notre mariage à Saint-Nazaire. Les étincelles froides ont créé un moment magique !" },
    ],
    forEnterprise: true,
    businessAreas: ['Zone portuaire', 'Parc d\'activités'],
    forBirthday: false,
  },
  {
    name: 'La Baule',
    slug: 'la-baule',
    department: 'Loire-Atlantique',
    departmentCode: '44',
    departmentSlug: 'loire-atlantique',
    postalCode: '44500',
    latitude: 47.2869,
    longitude: -2.3929,
    population: '16 000',
    distanceFromRedonKm: 75,
    zone: 'prioritaire',
    seoDescription: `La Baule, avec sa baie de 9 kilomètres souvent citée parmi les plus belles d'Europe, incarne le luxe balnéaire à la française. Ses palaces Belle Époque, ses villas d'architectes et son front de mer élégant attirent une clientèle exigeante pour des mariages d'exception. Un mariage à La Baule, c'est l'assurance d'un cadre prestigieux avec l'océan Atlantique en toile de fond.

Les établissements haut de gamme baulois sont rompus à l'organisation d'événements de prestige. L'Hermitage Barrière, le Royal Thalasso, le Castel Marie-Louise offrent des prestations all-inclusive avec hébergement, restauration gastronomique et espaces de réception face à la mer. Pour les mariages plus intimistes, les villas Belle Époque des parcs boisés de La Baule se privatisent avec élégance.

Un mariage à La Baule exige un DJ à la hauteur du cadre. Notre expérience des palaces et hôtels de luxe nous permet de proposer une prestation irréprochable, tant sur le plan technique qu'esthétique. Régie discrète, équipement haut de gamme, tenue soignée : nous nous adaptons aux standards de l'hôtellerie de prestige.`,
    localHighlights: [
      'Baie classée parmi les plus belles d\'Europe',
      'Palaces et hôtels 5 étoiles habitués aux mariages haut de gamme',
      'Cocktails pieds dans le sable sur plage privée possible',
      'Proximité de Guérande et des marais salants pour photos uniques',
    ],
    nearbyCommunes: ['Pornichet', 'Le Pouliguen', 'Guérande', 'Saint-André-des-Eaux', 'Batz-sur-Mer'],
    weddingVenues: [
      { nom: 'Hôtel Hermitage Barrière', ville: 'La Baule', type: 'Palace', description: 'Palace 5 étoiles avec plage privée et jardins luxuriants' },
      { nom: 'Castel Marie-Louise', ville: 'La Baule', type: 'Hôtel de charme', description: 'Demeure anglo-normande avec parc face à l\'océan' },
      { nom: 'Royal Thalasso Barrière', ville: 'La Baule', type: 'Hôtel', description: 'Hôtel 5 étoiles avec spa et terrasses panoramiques' },
    ],
    testimonials: [
      { author: 'Charlotte & Maxence', text: "Mariage d'exception à La Baule face à l'océan. MG Events a été à la hauteur de nos attentes !" },
    ],
    forEnterprise: true,
    businessAreas: ['Centre des congrès Atlantia'],
    forBirthday: false,
  },
  {
    name: 'Guérande',
    slug: 'guerande',
    department: 'Loire-Atlantique',
    departmentCode: '44',
    departmentSlug: 'loire-atlantique',
    postalCode: '44350',
    latitude: 47.3283,
    longitude: -2.4286,
    population: '16 000',
    distanceFromRedonKm: 70,
    zone: 'prioritaire',
    seoDescription: `Guérande, cité médiévale ceinte de remparts intacts, offre un décor de mariage digne d'un conte de fées. Ses ruelles pavées, ses échoppes d'artisans et sa collégiale Saint-Aubin créent une atmosphère hors du temps. À quelques kilomètres, les marais salants et leurs reflets argentés composent des paysages uniques pour des photos de mariage inoubliables.

La presqu'île guérandaise combine patrimoine historique et richesse naturelle. Entre l'océan sauvage de la côte, les marais salants millénaires et la douceur du pays blanc, les possibilités de mise en scène pour votre mariage sont infinies. Les domaines locaux, souvent d'anciennes propriétés de paludiers ou de négociants en sel, offrent un charme authentique préservé.

Notre connaissance du territoire guérandais nous permet de vous conseiller sur les meilleurs créneaux horaires pour profiter de la lumière des marais salants, les emplacements idéaux pour vos cocktails à l'abri du vent, les prestataires locaux de confiance. Un mariage à Guérande mérite cette attention aux détails qui fait la différence.`,
    localHighlights: [
      'Cité médiévale fortifiée avec remparts intacts du XVe siècle',
      'Marais salants classés : décor unique pour photos de mariage',
      'Entre océan sauvage et douceur du pays guérandais',
      'À 10 min de La Baule : prestige de la côte sans les prix parisiens',
    ],
    nearbyCommunes: ['La Baule', 'Le Croisic', 'Piriac-sur-Mer', 'La Turballe', 'Mesquer'],
    weddingVenues: [
      { nom: 'Domaine de Carheil', ville: 'Guérande', type: 'Domaine', description: 'Domaine avec vue sur les marais salants et chapelle privée' },
      { nom: 'Château de Careil', ville: 'Guérande', type: 'Château', description: 'Château Renaissance avec jardins et douves' },
    ],
    testimonials: [
      { author: 'Pauline & Jonathan', text: "Ambiance médiévale et moderne à la fois pour notre mariage dans les remparts de Guérande. Merci MG Events !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },

  // ========== MORBIHAN (56) ==========
  {
    name: 'Vannes',
    slug: 'vannes',
    department: 'Morbihan',
    departmentCode: '56',
    departmentSlug: 'morbihan',
    postalCode: '56000',
    latitude: 47.6559,
    longitude: -2.7603,
    population: '55 000',
    distanceFromRedonKm: 60,
    zone: 'prioritaire',
    seoDescription: `Vannes, porte d'entrée du Golfe du Morbihan, est l'une des destinations de mariage les plus prisées de Bretagne Sud. Ses remparts fleuris, ses maisons à colombages, son port de plaisance et la "petite mer" aux 40 îles composent un décor romantique unique. Chercher un DJ mariage à Vannes, c'est chercher un professionnel qui connaît vraiment le territoire, ses domaines face au Golfe et l'exigence d'une clientèle habituée aux belles réceptions.

La région vannetaise regorge de lieux d'exception. Le Domaine de Rochevilaine à Billiers, les châteaux et manoirs d'Arradon, de Séné et de la presqu'île de Rhuys, les domaines du pays de Vannes accueillent des mariages dans des cadres à couper le souffle. La lumière du Golfe, changeante au fil des marées, garantit des photos inoubliables — et une animation mariage à Vannes à la hauteur de ces décors.

En tant que DJ animateur à Vannes, notre rôle va bien au-delà de la musique. Nous orchestrons toute l'animation de votre soirée : prise de parole au micro avec justesse, coordination des temps forts (entrée des mariés, discours, jeux, ouverture de bal), lecture de la piste de danse en temps réel grâce à 25 ans d'expérience en discothèque. Un vrai animateur de soirée qui fédère vos invités de 7 à 77 ans, sans jamais forcer l'ambiance.

Notre prestation comprend une sonorisation professionnelle haut de gamme, calibrée pour chaque moment — fond sonore feutré pendant le repas, son puissant et maîtrisé pour enflammer le dancefloor — et un éclairage sur mesure adapté à votre salle (lyres, wash LED, effets). La sonorisation de mariage à Vannes doit composer avec des lieux variés : terrasses ventées face au Golfe, salles en pierre à l'acoustique délicate, domaines en extérieur. Notre matériel et notre installation s'adaptent à chaque configuration.

DJ Morbihan de proximité, nous intervenons régulièrement à Vannes et dans le Morbihan Sud et Centre : Auray, Ploërmel, Pontivy, Locminé, Sarzeau, le Golfe et la presqu'île de Rhuys. Vannes est à une heure environ de notre base de Redon, ce qui fait de nous un partenaire naturel pour l'animation mariage dans le secteur vannetais.

Notre plateforme AnimaJet, que nous avons conçue et développée nous-mêmes, ajoute une dimension participative rare : quiz interactif en direct, photo mystère sur grand écran, blind test live, partage de photos. Au-delà de la soirée dansante, nous proposons la sonorisation de cérémonie laïque (180€) avec deux techniciens dédiés, idéale pour les cérémonies en extérieur face au Golfe. Quel budget pour un DJ mariage à Vannes ? Nos formules démarrent à 1200€ TTC (Éclat d'Amour), 1490€ (Rêve en Blanc) et 1690€ (Conte de Fées avec photobooth vintage). Tarifs transparents : les forfaits incluent jusqu'à 100 km aller-retour au départ de Redon (35), et au-delà les kilomètres supplémentaires sont facturés 0,66 €/km, précisés sur le devis.`,
    localHighlights: [
      'Golfe du Morbihan : "petite mer" aux paysages féeriques et domaines face à l\'eau',
      'Domaines face au Golfe avec couchers de soleil spectaculaires',
      'Centre médiéval préservé pour cérémonie civile à la mairie',
      'Sonorisation adaptée aux terrasses ventées et salles en pierre du Golfe',
      'DJ Morbihan de proximité : Auray, Lorient, Ploërmel, Pontivy',
    ],
    nearbyCommunes: ['Arradon', 'Séné', 'Theix-Noyalo', 'Ploeren', 'Plescop', 'Saint-Avé', 'Meucon', 'Sarzeau', 'Baden', 'Le Bono', 'Elven', 'Grand-Champ'],
    weddingVenues: [
      { nom: 'Domaine de Rochevilaine', ville: 'Billiers', type: 'Domaine vue mer', description: 'Relais & Châteaux avec spa et falaises face à l\'océan' },
      { nom: 'Château de Kerlarec', ville: 'Arradon', type: 'Château', description: 'Château romantique avec vue panoramique sur le Golfe' },
      { nom: 'Manoir de Kerhuel', ville: 'Pluneret', type: 'Manoir', description: 'Manoir breton authentique avec parc et étang' },
      { nom: 'Château de Suscinio', ville: 'Sarzeau', type: 'Château ducal', description: 'Château médiéval face aux marais de la presqu\'île de Rhuys' },
      { nom: 'Domaine de Kerguéhennec', ville: 'Bignan', type: 'Domaine & Parc', description: 'Château classique avec parc de sculptures, 30 min de Vannes' },
      { nom: 'Île-aux-Moines', ville: 'Golfe du Morbihan', type: 'Réception sur île', description: 'Réception insulaire accessible en bateau, cadre exceptionnel' },
    ],
    testimonials: [
      { author: 'Anaïs & Romain', text: "Mariage magique dans le Golfe du Morbihan. L'ambiance créée par MG Events était exceptionnelle, un vrai DJ animateur qui a fait danser tout le monde !" },
      { author: 'Julie & Yann', text: "Les étincelles froides au Domaine de Rochevilaine resteront notre plus beau souvenir. Sonorisation impeccable et animation au top. Merci !", venue: 'Domaine de Rochevilaine' },
      { author: 'Marion & Steven', text: "Guillaume et Laurence ont assuré l'animation de notre mariage à Vannes du vin d'honneur jusqu'au bout de la nuit. Professionnels, à l'écoute, on recommande à 200% !", venue: 'Mariage à Vannes' },
    ],
    forEnterprise: true,
    businessAreas: ['Parc du Golfe', 'Zone de Kerlann'],
    forBirthday: true,
  },
  {
    name: 'Lorient',
    slug: 'lorient',
    department: 'Morbihan',
    departmentCode: '56',
    departmentSlug: 'morbihan',
    postalCode: '56100',
    latitude: 47.7485,
    longitude: -3.3700,
    population: '57 000',
    distanceFromRedonKm: 110,
    zone: 'etendue',
    seoDescription: `Lorient, ville aux cinq ports, mêle patrimoine maritime et modernité avec caractère. Reconstruite après la guerre, elle a su préserver des trésors aux alentours : le château de Locguénolé à Hennebont, les plages sauvages de Guidel et Ploemeur, les rias mystérieuses de la rivière d'Étel. Un mariage lorientais, c'est l'authenticité bretonne sans les foules touristiques.

La région lorientaise offre des domaines de caractère à des tarifs plus accessibles que la côte sud. Les anciennes propriétés de capitaines au long cours, les manoirs cachés dans les vallons du Scorff et du Blavet, les salles avec vue sur la rade proposent des cadres variés pour tous les budgets. Le Festival Interceltique a donné à la ville une culture de l'événementiel bien rodée.

Notre expérience de DJ mariage à Lorient intègre naturellement la dimension celtique quand les couples le souhaitent. Nous pouvons alterner sets festifs contemporains et moments de musique bretonne revisitée, fest-noz moderne ou ballades celtiques pour l'émotion. Cette polyvalence fait la richesse d'un mariage en pays lorientais.`,
    localHighlights: [
      'Tarifs des domaines plus accessibles que sur la côte sud',
      'Culture celtique forte : possibilité d\'intégrer des sets bretons',
      'Côte sauvage de Guidel et Ploemeur pour photos nature',
      'Ville habituée aux grands événements (Festival Interceltique)',
    ],
    nearbyCommunes: ['Lanester', 'Ploemeur', 'Hennebont', 'Larmor-Plage', 'Quéven', 'Guidel'],
    weddingVenues: [
      { nom: 'Domaine de Kerbastic', ville: 'Guidel', type: 'Domaine', description: 'Domaine familial avec vue sur l\'Océan et jardins paysagers' },
      { nom: 'Château de Locguénolé', ville: 'Hennebont', type: 'Château-Hôtel', description: 'Relais & Châteaux au bord du Blavet avec parc de 120 hectares' },
    ],
    testimonials: [
      { author: 'Margot & Bastien', text: "Superbe prestation pour notre mariage à Lorient. Le photobooth vintage a fait le bonheur de tous !" },
    ],
    forEnterprise: true,
    businessAreas: ['Base sous-marine', 'Zone Keryado'],
    forBirthday: false,
  },
  {
    name: 'Pontivy',
    slug: 'pontivy',
    department: 'Morbihan',
    departmentCode: '56',
    departmentSlug: 'morbihan',
    postalCode: '56300',
    latitude: 48.0689,
    longitude: -2.9647,
    population: '15 000',
    distanceFromRedonKm: 90,
    zone: 'prioritaire',
    seoDescription: `Pontivy, au cœur géographique de la Bretagne, possède un double patrimoine : médiéval avec le château des Rohan, et napoléonien avec ses alignements de maisons uniformes. Cette ville de caractère, au confluent du Blavet et du canal de Nantes à Brest, offre un cadre de mariage authentique loin de l'agitation côtière.

Le centre Bretagne recèle des trésors méconnus : le domaine de Kerguéhennec et son centre d'art contemporain, les forêts de Quénécan et de Pontcallec, les chapelles perdues dans la campagne. Ces décors préservés séduisent les couples en quête d'authenticité et de tranquillité, avec des budgets souvent plus doux que sur le littoral.

Un mariage à Pontivy, c'est choisir le cœur battant de la Bretagne. Nous apprécions particulièrement animer dans cette région où les traditions sont vivaces. Les couples qui le souhaitent peuvent intégrer des éléments de la culture bretonne : quelques danses en cercle pour ouvrir le bal, un kan ha diskan revisité, des mélodies celtiques pendant le repas.`,
    localHighlights: [
      'Cœur géographique de la Bretagne : facile d\'accès pour tous vos invités',
      'Château des Rohan et patrimoine napoléonien unique',
      'Domaine de Kerguéhennec : art contemporain dans un écrin de verdure',
      'Budgets accessibles : domaines et traiteurs moins chers que sur la côte',
    ],
    nearbyCommunes: ['Noyal-Pontivy', 'Saint-Thuriau', 'Cléguérec', 'Le Sourn', 'Malguénac'],
    weddingVenues: [
      { nom: 'Château des Rohan', ville: 'Pontivy', type: 'Château', description: 'Forteresse des ducs de Bretagne avec douves et tours imposantes' },
      { nom: 'Domaine de Kerguéhennec', ville: 'Bignan', type: 'Domaine', description: 'Château classique avec parc de sculptures et centre d\'art' },
    ],
    testimonials: [
      { author: 'Céline & Gaëtan', text: "Animation parfaite pour notre mariage au coeur de la Bretagne. Merci MG Events !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'Auray',
    slug: 'auray',
    department: 'Morbihan',
    departmentCode: '56',
    departmentSlug: 'morbihan',
    postalCode: '56400',
    latitude: 47.6706,
    longitude: -2.9922,
    population: '14 000',
    distanceFromRedonKm: 75,
    zone: 'prioritaire',
    seoDescription: `Auray, avec son port de Saint-Goustan aux maisons à colombages et sa position stratégique entre Vannes et la presqu'île de Quiberon, séduit les couples amoureux d'authenticité. La rivière d'Auray, les alignements mégalithiques de Carnac à deux pas, la basilique de Sainte-Anne-d'Auray pour les mariages religieux : le pays d'Auray offre une richesse patrimoniale exceptionnelle.

La région alréenne combine patrimoine préhistorique unique au monde et douceur de vivre morbihannaise. Les domaines et manoirs nichés entre les landes de Carnac et les rives du Golfe du Morbihan proposent des cadres intimistes et romantiques. La lumière particulière de la baie de Quiberon, les couchers de soleil sur les menhirs créent des tableaux photographiques inoubliables.

Notre expérience de DJ mariage à Auray et dans le pays carnacois nous a appris à composer avec les spécificités locales : la dimension spirituelle pour les couples qui se marient à Sainte-Anne, l'intégration de la culture mégalithique dans les animations, la gestion des sites exceptionnels classés. Cette sensibilité au territoire fait la différence.`,
    localHighlights: [
      'Port de Saint-Goustan : charme pittoresque pour photos de mariage',
      'Alignements de Carnac à 10 min : décor préhistorique unique au monde',
      'Basilique Sainte-Anne-d\'Auray : haut lieu de pèlerinage breton',
      'Presqu\'île de Quiberon accessible pour escapade romantique',
    ],
    nearbyCommunes: ['Carnac', 'Quiberon', 'Sainte-Anne-d\'Auray', 'Pluneret', 'Brech', 'Erdeven'],
    weddingVenues: [
      { nom: 'Domaine de Kerninon', ville: 'Pluneret', type: 'Domaine', description: 'Manoir du XVIIe avec parc boisé et étang romantique' },
      { nom: 'Hôtel & Spa Miramar', ville: 'Carnac', type: 'Hôtel Thalasso', description: 'Hôtel 5 étoiles face à la mer avec thalassothérapie' },
    ],
    testimonials: [
      { author: 'Elise & Fabien', text: "Un mariage de rêve près des alignements de Carnac. L'équipe MG Events était formidable !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'La Trinité-sur-Mer',
    slug: 'la-trinite-sur-mer',
    department: 'Morbihan',
    departmentCode: '56',
    departmentSlug: 'morbihan',
    postalCode: '56470',
    latitude: 47.5853,
    longitude: -3.0297,
    population: '1 600',
    distanceFromRedonKm: 85,
    zone: 'prioritaire',
    seoDescription: `La Trinité-sur-Mer, port de plaisance mythique de la voile française et terre d'Éric Tabarly, offre un cadre de mariage rare où l'élégance nautique rencontre la douceur du Morbihan. Les coques blanches alignées dans la baie, les terrasses face à la rivière de Crac'h et le célèbre pont de Kerisper composent un décor chic et lumineux, idéal pour un mariage bord de mer raffiné.

Au-delà du port, la presqu'île trinitaine déploie des plages de sable fin — Kervilen, Men Dù, la Mer Blanche — et, à quelques minutes seulement, les alignements mégalithiques de Carnac, uniques au monde. Cette proximité immédiate entre océan, patrimoine préhistorique et villages de caractère (Carnac, Locmariaquer, Crac'h) permet des séances photo d'une variété exceptionnelle, du lever de soleil sur les menhirs aux couchers de soleil sur les bateaux.

Notre expérience de DJ mariage à La Trinité-sur-Mer et dans le pays d'Auray nous a appris à composer avec les spécificités d'une destination prisée : la gestion du vent marin pour la sonorisation en extérieur, le choix des créneaux pour profiter de la lumière dorée de la baie de Quiberon, la coordination avec les hôtels de charme et domaines locaux. Cette connaissance fine du territoire fait toute la différence pour une soirée réussie au plus près de l'eau.`,
    localHighlights: [
      'Port de plaisance mythique de la voile (cité d\'Éric Tabarly) : décor nautique chic',
      'Plages de Kervilen et Men Dù : sable fin pour des photos de mariage en bord de mer',
      'Alignements de Carnac à 5 min : décor mégalithique unique au monde',
      'Pont de Kerisper sur la rivière de Crac\'h : panorama romantique au crépuscule',
    ],
    nearbyCommunes: ['Carnac', 'Crac\'h', 'Saint-Philibert', 'Locmariaquer', 'Quiberon', 'Auray'],
    weddingVenues: [
      { nom: 'Le Lodge Kerisper', ville: 'La Trinité-sur-Mer', type: 'Hôtel de charme', description: 'Maison de capitaine du XIXe restaurée, jardin et piscine, prisée pour les mariages intimistes' },
      { nom: 'Hôtel Le Diana', ville: 'Carnac-Plage', type: 'Hôtel 4★ front de mer', description: 'Réceptions face à l\'océan sur la grande plage de Carnac, à 10 min' },
    ],
    testimonials: [
      { author: 'Camille & Antoine', text: "Un mariage les pieds dans l'eau à La Trinité, ambiance nautique parfaite. MG Events a su faire danser tout le monde jusqu'au bout de la nuit !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'Ploërmel',
    slug: 'ploermel',
    department: 'Morbihan',
    departmentCode: '56',
    departmentSlug: 'morbihan',
    postalCode: '56800',
    latitude: 47.9314,
    longitude: -2.3969,
    population: '10 000',
    distanceFromRedonKm: 50,
    zone: 'prioritaire',
    seoDescription: `Ploërmel, cœur historique du centre Bretagne aux portes de la forêt de Brocéliande, offre aux couples un cadre de mariage entre légende arthurienne et nature préservée. Sa vieille ville médiévale — maisons à pans de bois, horloge astronomique, vitraux de l'église Saint-Armel — et la proximité immédiate du Lac au Duc, le plus grand plan d'eau intérieur du Morbihan, en font une destination de réception aussi romantique qu'authentique.

Le pays de Ploërmel concentre quelques-uns des lieux les plus emblématiques de Bretagne intérieure. Le Château de Josselin, forteresse médiévale dominant l'Oust à un quart d'heure, compte parmi les plus beaux décors de mariage de la région. Les rives boisées du Lac au Duc, le golf et les domaines de Taupont et Loyat, ou encore les manoirs nichés en lisière de Brocéliande proposent des cadres variés — du château de caractère à la réception champêtre face à l'eau.

DJ mariage à Ploërmel, c'est savoir composer avec ces lieux singuliers : l'acoustique des grandes salles de château, les contraintes des réceptions en extérieur au bord du lac, l'ambiance intimiste des domaines de campagne. Ploërmel se situe à environ 50 km de notre base. La distance exacte est calculée selon l'adresse du lieu de réception. Les forfaits incluent jusqu'à 100 km aller-retour ; les kilomètres supplémentaires sont facturés 0,66 €/km. Nous intervenons également à Josselin, Malestroit, Guer, Mauron et La Gacilly.

Au-delà de la soirée dansante, nous adaptons nos animations à l'esprit du lieu : sets variété et hits internationaux pour faire danser toutes les générations, touches de musique bretonne et fest-noz revisité chères au centre Bretagne, et notre plateforme AnimaJet (quiz interactif, photo mystère, blind test live) pour une réception participative. Avec 25 ans d'expérience derrière les platines, nous lisons la piste de danse et adaptons la programmation en temps réel.`,
    localHighlights: [
      'Lac au Duc : plus grand plan d\'eau du Morbihan, cadre nature pour réceptions au bord de l\'eau',
      'Château de Josselin à 15 min : décor médiéval d\'exception sur l\'Oust',
      'Aux portes de Brocéliande : l\'imaginaire arthurien pour un mariage féérique',
      'À environ 50 km de notre base de Redon : l\'un de nos secteurs d\'intervention les plus proches',
    ],
    nearbyCommunes: ['Josselin', 'Taupont', 'Loyat', 'Campénéac', 'Guer', 'Malestroit', 'Mauron', 'La Gacilly', 'Guégon'],
    weddingVenues: [
      { nom: 'Château de Josselin', ville: 'Josselin', type: 'Château médiéval', description: 'Forteresse classée dominant l\'Oust, l\'un des plus beaux châteaux de Bretagne' },
      { nom: 'Le Roi Arthur', ville: 'Ploërmel', type: 'Hôtel & Golf', description: 'Hôtel-spa et golf au bord du Lac au Duc, réceptions face à l\'eau' },
      { nom: 'Château de Crévy', ville: 'La Chapelle-Caro', type: 'Château', description: 'Château de caractère et parc à proximité de Malestroit' },
    ],
    testimonials: [
      { author: 'Anaïs & Gwendal', text: "Mariage magique au bord du Lac au Duc à Ploërmel. Guillaume a su faire danser nos invités de 7 à 77 ans, merci MG Events !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
];

// Fonctions utilitaires
export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getCitiesForWedding = (): City[] => {
  return cities;
};

export const getCitiesForEnterprise = (): City[] => {
  return cities.filter(city => city.forEnterprise);
};

export const getCitiesForBirthday = (): City[] => {
  return cities.filter(city => city.forBirthday);
};

export const getCitiesByDepartment = (departmentCode: string): City[] => {
  return cities.filter(city => city.departmentCode === departmentCode);
};

/** Villes du secteur habituel (~100 km autour de Redon), triées par proximité. */
export const getPriorityCities = (): City[] =>
  cities.filter(city => city.zone === 'prioritaire').sort((a, b) => a.distanceFromRedonKm - b.distanceFromRedonKm);

/** Villes hors secteur habituel : prestation possible, mais sur étude et sur devis. */
export const getExtendedCities = (): City[] =>
  cities.filter(city => city.zone === 'etendue').sort((a, b) => a.distanceFromRedonKm - b.distanceFromRedonKm);

/** Départements dont au moins une ville est dans le secteur prioritaire. */
export const isPriorityDepartment = (departmentCode: string): boolean =>
  cities.some(city => city.departmentCode === departmentCode && city.zone === 'prioritaire');

// Slugs pour generateStaticParams
export const getAllCitySlugs = (): string[] => {
  return cities.map(city => city.slug);
};

export const getEnterpriseCitySlugs = (): string[] => {
  return cities.filter(city => city.forEnterprise).map(city => city.slug);
};

export const getBirthdayCitySlugs = (): string[] => {
  return cities.filter(city => city.forBirthday).map(city => city.slug);
};
