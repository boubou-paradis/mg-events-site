// Configuration des villes pour les pages SEO

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
    seoDescription: `Rennes, capitale de la Bretagne, est la métropole de référence pour les mariages haut de gamme dans le Grand Ouest. Avec son patrimoine historique, son accessibilité exceptionnelle (TGV Paris-Rennes en 1h25) et une offre de domaines et châteaux parmi les plus denses de France, la métropole rennaise séduit chaque année des centaines de couples de toute la région — et au-delà.

Chercher un DJ mariage à Rennes, c'est chercher quelqu'un qui connaît vraiment le territoire. Les salles ont chacune leurs contraintes acoustiques : la pierre apparente du Manoir de la Begaudière réverbère différemment des volumes contemporains du Florian. Le Domaine de Cicé-Blossac, à Bruz, avec son golf 18 trous et ses jardins à la française, est l'un des lieux les plus prisés du 35 — et nous y avons animé de nombreuses soirées. Chaque fois, nous arrivons avec une installation adaptée à l'espace, jamais du matériel "générique".

L'offre de lieux de réception autour de Rennes est remarquable : châteaux Renaissance des Marches de Bretagne, manoirs du pays rennais cachés dans les vallons, domaines champêtres de la forêt de Rennes, salles contemporaines en périphérie de la métropole. Le Château de Montmuran (classé Monument Historique), le Domaine de Tizé à Thorigné-Fouillard avec ses étangs, ou encore le Château du Bois Guy à Parigné dans son écrin de forêt privée — chaque lieu raconte une histoire différente et mérite une animation à sa hauteur.

Rennes, c'est aussi une ville vivante avec une scène culturelle forte. Les couples rennais ont souvent des attentes musicales éclectiques : electro, rock alternatif, variété française, bretonne revisitée, hits des 80s et 90s... Notre répertoire couvre tous ces univers. Et avec notre expérience de 25 ans en discothèque, nous savons lire une piste de danse et adapter la programmation en temps réel — pas seulement suivre une playlist figée.

Notre technologie exclusive AnimaJet ajoute une dimension participative que peu de DJ proposent à Rennes : quiz interactif en direct, photos mystère partagées sur grand écran, blind test live, roue de la destinée... Des animations que vos concurrents locaux ne proposent pas — et qui font vraiment partie du souvenir du mariage.

Au-delà de la soirée dansante, nous proposons la sonorisation de cérémonie laïque (à 180€), idéale pour les cérémonies en extérieur au Domaine de Cicé-Blossac ou dans les jardins des manoirs rennais. Deux techniciens dédiés, retransmission en direct des musiques que vous avez choisies, sonorisation discrète mais puissante.

En tant que DJ mariage à Rennes depuis plus de 20 ans, nous avons constitué un réseau de partenaires de confiance dans la métropole : photographes, vidéastes, wedding planners, traiteurs. Cette connaissance de l'écosystème local garantit une coordination parfaite le jour J, et souvent des recommandations croisées qui facilitent l'organisation.

Concrètement, un mariage rennais avec MG Events, c'est : un rendez-vous de préparation personnalisé pour construire votre programme musical et le timing de votre soirée, une coordination avec votre traiteur et votre photographe, une animation élégante et sur mesure de la cérémonie laïque à la soirée dansante — avec cet équilibre musical entre les générations qui est notre marque de fabrique depuis plus de 25 ans. Le vin d'honneur en musique douce, le repas en fond sonore élégant, puis l'explosion de la piste de danse : chaque moment de votre journée est pensé. Quel budget pour un DJ mariage à Rennes ? Nos formules démarrent à 1200€ TTC (formule Éclat d'Amour), 1490€ pour la formule Rêve en Blanc, et 1690€ pour la formule Conte de Fées incluant le photobooth vintage TSF. Des tarifs transparents, sans surprise — déplacement à Rennes et dans toute l'Ille-et-Vilaine inclus.`,
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
    seoDescription: `Redon, au confluent de la Vilaine et de l'Oust, est une ville d'eau au patrimoine fluvial unique en Bretagne. L'ancienne abbaye bénédictine Saint-Sauveur, le port de plaisance et les quais bordés de maisons d'armateurs créent une atmosphère paisible et romantique. Cette position de carrefour, aux confins de trois départements (Ille-et-Vilaine, Morbihan, Loire-Atlantique), en fait un lieu de réception idéal pour rassembler famille et amis de toute la région.

Le pays de Redon offre un cadre bucolique préservé avec ses marais, ses prairies et ses chemins de halage le long des canaux de Bretagne. Les domaines locaux, souvent d'anciennes propriétés de négociants en sel ou en vin, combinent élégance discrète et tarifs plus accessibles que sur la côte. C'est l'endroit parfait pour un mariage champêtre authentique dans un cadre de châteaux, domaines et demeures de caractère, loin de l'agitation des grandes villes.

Basés à Bains-sur-Oust, à 15 kilomètres de Redon, nous sommes véritablement le DJ mariage le plus proche du pays redonnais. Notre connaissance intime du territoire, des salles de réception et des prestataires locaux nous permet de vous accompagner avec une expertise de proximité inégalée. Nous intervenons régulièrement à Redon, Allaire, Saint-Nicolas-de-Redon, Guémené-Penfao, Pipriac, Grand-Fougeray et dans tous les villages alentour — sans frais de déplacement.

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
    seoDescription: `Dinard, la "Nice du Nord", a conservé tout le charme de la Belle Époque avec ses villas somptueuses, ses jardins exotiques et ses plages élégantes. Face à Saint-Malo de l'autre côté de la Rance, cette station balnéaire chic offre un cadre de mariage d'un raffinement rare. Les couchers de soleil sur la baie, les villas aux architectures extravagantes et l'atmosphère distinguée séduisent les couples en quête d'élégance.

La promenade du Clair de Lune, les plages de l'Écluse et de Saint-Énogat, les pointes rocheuses offrent des décors de photos de mariage variés et spectaculaires. Les hôtels de luxe dinardais perpétuent la tradition d'accueil haut de gamme qui a fait la réputation de la station auprès de l'aristocratie britannique dès le XIXe siècle.

Un mariage à Dinard demande une expertise particulière : gestion des cocktails en terrasse face au vent marin, adaptation aux espaces souvent intimes des villas Belle Époque, coordination avec les prestataires locaux habitués à l'exigence de la clientèle. Notre expérience de plus de 20 ans sur la Côte d'Émeraude nous permet de relever ces défis avec professionnalisme.`,
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
    seoDescription: `Vannes, porte d'entrée du Golfe du Morbihan, combine charme médiéval et douceur maritime. Ses remparts fleuris, ses maisons à colombages et son port de plaisance composent un décor de mariage enchanteur. Le Golfe du Morbihan, "petite mer" aux 40 îles, offre des panoramas exceptionnels accessibles en quelques minutes depuis le centre historique.

La région vannetaise regorge de domaines d'exception face au Golfe. Le Domaine de Rochevilaine à Billiers, les châteaux d'Arradon et de Séné, les manoirs de la presqu'île de Rhuys accueillent des mariages dans des cadres à couper le souffle. La lumière particulière du Golfe, changeante au fil des marées, garantit des photos de mariage uniques.

Notre expertise de DJ mariage à Vannes s'appuie sur une connaissance fine du territoire morbihannais. Nous connaissons les contraintes de chaque lieu : vent sur les terrasses face au Golfe, acoustique des salles en pierre, coordination avec les marées pour les transferts en bateau. Cette maîtrise locale fait la différence pour une journée sans accroc.`,
    localHighlights: [
      'Golfe du Morbihan : "petite mer" aux paysages féeriques',
      'Domaines face au Golfe avec couchers de soleil spectaculaires',
      'Centre médiéval préservé pour cérémonie civile à la mairie',
      'Possibilité de transfert en bateau pour cérémonie sur une île',
    ],
    nearbyCommunes: ['Arradon', 'Séné', 'Theix-Noyalo', 'Ploeren', 'Plescop', 'Saint-Avé', 'Meucon'],
    weddingVenues: [
      { nom: 'Domaine de Rochevilaine', ville: 'Billiers', type: 'Domaine vue mer', description: 'Relais & Châteaux avec spa et falaises face à l\'océan' },
      { nom: 'Château de Kerlarec', ville: 'Arradon', type: 'Château', description: 'Château romantique avec vue panoramique sur le Golfe' },
      { nom: 'Manoir de Kerhuel', ville: 'Pluneret', type: 'Manoir', description: 'Manoir breton authentique avec parc et étang' },
    ],
    testimonials: [
      { author: 'Anaïs & Romain', text: "Mariage magique dans le Golfe du Morbihan. L'ambiance créée par MG Events était exceptionnelle !" },
      { author: 'Julie & Yann', text: "Les étincelles froides au Domaine de Rochevilaine resteront notre plus beau souvenir. Merci !" },
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

  // ========== FINISTÈRE (29) ==========
  {
    name: 'Brest',
    slug: 'brest',
    department: 'Finistère',
    departmentCode: '29',
    departmentSlug: 'finistere',
    postalCode: '29200',
    latitude: 48.3904,
    longitude: -4.4861,
    population: '140 000',
    seoDescription: `Brest, cité du bout du monde tournée vers l'océan, offre un cadre de mariage empreint d'embruns et de caractère. La rade de Brest, l'une des plus belles du monde, les abers sauvages aux alentours, le château médiéval face au port militaire : la ville conjugue puissance maritime et patrimoine historique. Pour les couples aventuriers, un mariage brestois promet authenticité et grand air.

Le pays de Brest regorge de sites naturels exceptionnels : la pointe Saint-Mathieu et son abbaye face au large, la presqu'île de Crozon classée, les abers découpés du nord Finistère. Les domaines locaux, souvent d'anciennes propriétés de capitaines ou d'armateurs, offrent des vues imprenables sur la rade ou les côtes sauvages. Océanopolis propose même des réceptions atypiques au milieu des aquariums.

Nous intervenons régulièrement en Finistère nord malgré la distance depuis notre base. La route Rennes-Brest, bien desservie, nous permet d'assurer des prestations sans surcoût prohibitif. Notre matériel est conçu pour résister à l'humidité marine et nos playlists intègrent volontiers la culture celtique chère aux Finistériens.`,
    localHighlights: [
      'Rade de Brest parmi les plus belles baies du monde',
      'Pointe Saint-Mathieu, abers, presqu\'île de Crozon à proximité',
      'Culture celtique vivace : fest-noz et musique bretonne sur demande',
      'Lieux atypiques : Océanopolis, château de Brest face à la rade',
    ],
    nearbyCommunes: ['Plouzané', 'Guipavas', 'Le Relecq-Kerhuon', 'Plougastel-Daoulas', 'Gouesnou', 'Guilers'],
    weddingVenues: [
      { nom: 'Château de Kerjean', ville: 'Saint-Vougay', type: 'Château Renaissance', description: 'Joyau de la Renaissance bretonne avec jardins à la française' },
      { nom: 'Domaine de Oatlands', ville: 'Plougastel', type: 'Domaine', description: 'Propriété anglo-normande avec vue sur la rade de Brest' },
      { nom: 'Océanopolis', ville: 'Brest', type: 'Lieu atypique', description: 'Réceptions privatisées au cœur du centre marin' },
    ],
    testimonials: [
      { author: 'Maëlle & Corentin', text: "MG Events a traversé la Bretagne pour notre mariage à Brest et le résultat était au-delà de nos espérances !" },
    ],
    forEnterprise: true,
    businessAreas: ['Technopôle Brest-Iroise', 'Zone du Froutven'],
    forBirthday: true,
  },
  {
    name: 'Quimper',
    slug: 'quimper',
    department: 'Finistère',
    departmentCode: '29',
    departmentSlug: 'finistere',
    postalCode: '29000',
    latitude: 47.9959,
    longitude: -4.0967,
    population: '63 000',
    seoDescription: `Quimper, capitale historique de la Cornouaille, est le berceau de la culture bretonne avec sa cathédrale gothique, ses faïenceries réputées et ses ruelles médiévales au confluent de l'Odet et du Steir. Le Festival de Cornouaille en témoigne chaque été : ici, la tradition bretonne est vivante et fière. Un mariage quimpérois, c'est l'assurance d'une dimension culturelle authentique.

La Cornouaille offre des paysages d'une variété exceptionnelle : baie de Bénodet et plages de Fouesnant au sud, pointe du Raz et cap Sizun à l'ouest, montagnes Noires à l'intérieur. Les châteaux et manoirs cornouaillais, souvent construits en granit bleu de Locronan, présentent une architecture typique et des cadres préservés loin de la standardisation.

Notre approche du mariage en Cornouaille intègre naturellement la culture locale quand les couples le souhaitent. Un gavoté pour lancer la soirée, une plinn pour faire danser les grands-parents, des ballades en breton pour l'émotion : nous maîtrisons les codes de la fête bretonne tout en assurant une programmation contemporaine pour tous les publics.`,
    localHighlights: [
      'Capitale culturelle bretonne : traditions vivaces et authentiques',
      'Cathédrale Saint-Corentin et vieille ville médiévale pour photos',
      'Proximité de Bénodet, Fouesnant, pointe du Raz pour escapades',
      'Faïenceries de Quimper : cadeaux d\'invités typiques et élégants',
    ],
    nearbyCommunes: ['Ergué-Gabéric', 'Pluguffan', 'Plomelin', 'Fouesnant', 'Bénodet', 'Concarneau'],
    weddingVenues: [
      { nom: 'Manoir de Kerhuel', ville: 'Plonéour-Lanvern', type: 'Manoir', description: 'Manoir du XVIe avec chapelle privée et jardins clos' },
      { nom: 'Château de Guilguiffin', ville: 'Landudec', type: 'Château', description: 'Château de granit avec tours et parc romantique' },
    ],
    testimonials: [
      { author: 'Marion & Sébastien', text: "Excellente prestation DJ pour notre mariage en Cornouaille. Ambiance bretonne garantie !" },
    ],
    forEnterprise: true,
    businessAreas: ['Zone de Créac\'h Gwen'],
    forBirthday: false,
  },
  {
    name: 'Morlaix',
    slug: 'morlaix',
    department: 'Finistère',
    departmentCode: '29',
    departmentSlug: 'finistere',
    postalCode: '29600',
    latitude: 48.5778,
    longitude: -3.8278,
    population: '15 000',
    seoDescription: `Morlaix, dominée par son viaduc monumental, est une cité de caractère nichée au fond d'un estuaire. Ses maisons à pondalez (maisons à lanterne), son port de plaisance et sa baie parsemée d'îlots créent un décor unique en Bretagne. Le château du Taureau, forteresse Vauban accessible en bateau, offre même la possibilité d'un mariage sur une île fortifiée au milieu de la baie.

La région morlaisienne combine monts d'Arrée sauvages et côtes découpées de la baie. Les enclos paroissiaux de la vallée de l'Élorn (Saint-Thégonnec, Guimiliau) témoignent de la richesse historique du Léon. Les manoirs et fermes rénovées du pays proposent des cadres authentiques où la pierre de taille et les poutres apparentes créent une atmosphère chaleureuse.

Un mariage à Morlaix, c'est choisir un Finistère confidentiel, loin des flux touristiques de la pointe du Raz ou de Concarneau. Nous apprécions particulièrement les cérémonies dans cette région préservée où l'accueil breton prend tout son sens. Notre matériel traverse la Bretagne pour offrir la même qualité de prestation qu'aux portes de Rennes.`,
    localHighlights: [
      'Château du Taureau : mariage possible sur forteresse insulaire',
      'Viaduc monumental et maisons à pondalez pour photos originales',
      'Enclos paroissiaux classés à proximité pour cérémonie religieuse',
      'Monts d\'Arrée sauvages pour photos nature authentique',
    ],
    nearbyCommunes: ['Saint-Martin-des-Champs', 'Plourin-lès-Morlaix', 'Garlan', 'Plouigneau', 'Lanmeur'],
    weddingVenues: [
      { nom: 'Château du Taureau', ville: 'Baie de Morlaix', type: 'Château insulaire', description: 'Forteresse Vauban sur îlot, accessible en bateau' },
      { nom: 'Manoir de Coat Amour', ville: 'Morlaix', type: 'Manoir', description: 'Manoir de caractère avec parc et vue sur la baie' },
    ],
    testimonials: [
      { author: 'Solène & Erwan', text: "Animation musicale au top pour notre mariage à Morlaix. Merci pour cette soirée mémorable !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'Concarneau',
    slug: 'concarneau',
    department: 'Finistère',
    departmentCode: '29',
    departmentSlug: 'finistere',
    postalCode: '29900',
    latitude: 47.8744,
    longitude: -3.9186,
    population: '20 000',
    seoDescription: `Concarneau et sa Ville Close, forteresse médiévale posée sur l'eau, offrent un décor de mariage absolument unique. Cette cité corsaire cernée de remparts, accessible par un pont depuis le port de pêche, concentre restaurants, galeries et espaces de réception dans un cadre hors du temps. Un mariage dans la Ville Close, c'est transporter vos invités dans un autre siècle.

Le pays concarnois, entre Pont-Aven (cité des peintres) et les plages de sable fin de Trégunc et Fouesnant, offre une diversité de paysages remarquable. La lumière particulière qui a inspiré Gauguin et l'école de Pont-Aven baigne toujours ces rivages. Les domaines et manoirs de la région combinent architecture de granit et jardins luxuriants face à l'océan.

Notre expérience de DJ mariage à Concarneau inclut une parfaite connaissance des contraintes de la Ville Close : accès des véhicules, sonorisation respectueuse du patrimoine, coordination avec les autres événements de la cité. Cette expertise garantit une prestation fluide dans un cadre exceptionnel mais exigeant.`,
    localHighlights: [
      'Ville Close : forteresse médiévale sur l\'eau, décor unique',
      'Pont-Aven et sa lumière de peintres à 15 minutes',
      'Port de pêche authentique pour photos maritimes',
      'Plages de Fouesnant et Trégunc pour cocktail pieds dans le sable',
    ],
    nearbyCommunes: ['Fouesnant', 'Trégunc', 'Rosporden', 'Pont-Aven', 'Névez'],
    weddingVenues: [
      { nom: 'Domaine de la Forêt', ville: 'Concarneau', type: 'Domaine', description: 'Domaine boisé avec vue sur la baie et jardins paysagers' },
      { nom: 'Ville Close', ville: 'Concarneau', type: 'Site historique', description: 'Salles de réception dans les remparts médiévaux' },
    ],
    testimonials: [
      { author: 'Lucie & Kevin', text: "Mariage inoubliable dans la ville close de Concarneau avec MG Events !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },

  // ========== MAYENNE (53) ==========
  {
    name: 'Laval',
    slug: 'laval',
    department: 'Mayenne',
    departmentCode: '53',
    departmentSlug: 'mayenne',
    postalCode: '53000',
    latitude: 48.0734,
    longitude: -0.7695,
    population: '52 000',
    seoDescription: `Laval, préfecture de la Mayenne, est une ville d'art et d'histoire lovée dans les méandres de la rivière éponyme. Son château médiéval surplombant les quais, ses ruelles du vieux Laval et son patrimoine Renaissance (maison du Grand Veneur) en font une destination de mariage élégante et accessible. À la croisée de la Bretagne, de la Normandie et des Pays de la Loire, Laval facilite le rassemblement de vos invités.

La Mayenne, département le plus rural de l'Ouest, offre un cadre champêtre authentique avec ses bocages, ses vergers et ses manoirs discrets. Les prix des domaines et des prestataires y sont sensiblement inférieurs à ceux des zones côtières, permettant d'organiser un mariage de qualité avec un budget maîtrisé. La gastronomie mayennaise, entre produits laitiers et charcuteries du terroir, régalera vos convives.

Notre proximité avec la Mayenne (à 1h de notre base) fait de Laval une destination privilégiée pour nos prestations. Nous connaissons bien les lieux de réception lavallois et travaillons régulièrement avec les traiteurs et photographes locaux. Cette synergie garantit une coordination parfaite le jour de votre mariage.`,
    localHighlights: [
      'Carrefour Bretagne-Normandie-Pays de la Loire : facile pour tous vos invités',
      'Tarifs attractifs : domaines et prestataires moins chers que sur la côte',
      'Vieux Laval pittoresque avec château et quais de la Mayenne',
      'À 1h de Rennes, 1h30 du Mans, 2h30 de Paris en TGV',
    ],
    nearbyCommunes: ['Saint-Berthevin', 'Changé', 'L\'Huisserie', 'Bonchamp-lès-Laval', 'Louverné', 'Entrammes'],
    weddingVenues: [
      { nom: 'Château de Laval', ville: 'Laval', type: 'Château', description: 'Château médiéval dominant la Mayenne avec donjon cylindrique' },
      { nom: 'Domaine du Tertre', ville: 'Laval', type: 'Domaine', description: 'Domaine rural avec grange rénovée et parc paysager' },
    ],
    testimonials: [
      { author: 'Caroline & Vincent', text: "Superbe animation pour notre mariage à Laval. MG Events a su s'adapter à tous nos invités !" },
    ],
    forEnterprise: true,
    businessAreas: ['Zone des Touches', 'Parc d\'activités de la Maillarderie'],
    forBirthday: true,
  },
  {
    name: 'Mayenne',
    slug: 'mayenne-ville',
    department: 'Mayenne',
    departmentCode: '53',
    departmentSlug: 'mayenne',
    postalCode: '53100',
    latitude: 48.3028,
    longitude: -0.6144,
    population: '13 000',
    seoDescription: `Mayenne, sous-préfecture tranquille au bord de la rivière du même nom, incarne la douceur de vivre de la campagne mayennaise. Son château carolingien, l'un des plus anciens du Grand Ouest, et sa basilique Notre-Dame témoignent d'une histoire millénaire. Pour les couples recherchant l'authenticité et la sérénité, un mariage à Mayenne offre un cadre bucolique préservé.

Le nord de la Mayenne, aux confins de la Bretagne et de la Normandie, présente des paysages vallonnés parsemés de haies bocagères et de vergers de pommiers à cidre. Les fermes-manoirs et les domaines ruraux proposent des cadres intimistes où la nature est reine. L'accueil mayennais, simple et chaleureux, se retrouve chez tous les prestataires locaux.

Un mariage dans la campagne mayennaise, c'est offrir à vos invités une parenthèse hors du temps. Nous adaptons notre prestation à cette ambiance : son équilibré respectant la tranquillité des lieux, lumières d'ambiance créant une atmosphère feutrée, programmation musicale élégante qui monte progressivement en intensité jusqu'au bout de la nuit.`,
    localHighlights: [
      'Château carolingien parmi les plus anciens de l\'Ouest',
      'Campagne bocagère préservée pour mariage champêtre authentique',
      'Tarifs très accessibles pour domaines et prestataires',
      'Calme garanti : loin des zones touristiques saturées',
    ],
    nearbyCommunes: ['Aron', 'Moulay', 'Contest', 'Martigné-sur-Mayenne', 'Saint-Baudelle'],
    weddingVenues: [
      { nom: 'Château de Mayenne', ville: 'Mayenne', type: 'Château', description: 'Palais carolingien avec musée et espaces de réception historiques' },
      { nom: 'Domaine des Vaux', ville: 'Mayenne', type: 'Domaine', description: 'Ferme-manoir rénovée avec étang et prairies' },
    ],
    testimonials: [
      { author: 'Justine & Mathieu', text: "Un grand merci à MG Events pour l'animation de notre mariage en Mayenne !" },
    ],
    forEnterprise: false,
    forBirthday: false,
  },
  {
    name: 'Château-Gontier',
    slug: 'chateau-gontier',
    department: 'Mayenne',
    departmentCode: '53',
    departmentSlug: 'mayenne',
    postalCode: '53200',
    latitude: 47.8261,
    longitude: -0.7031,
    population: '12 000',
    seoDescription: `Château-Gontier, petite cité de caractère sur les bords de la Mayenne, charme par son patrimoine roman et son atmosphère paisible. Le prieuré Saint-Jean-Baptiste, les maisons anciennes du quartier Saint-Jean et les quais fleuris composent un décor de mariage plein de charme. Cette ville-jardin, récompensée par 4 fleurs, met un point d'honneur à l'esthétique de ses espaces publics.

Le sud de la Mayenne, frontalier avec le Maine-et-Loire, offre un paysage de douceur angevine. Les vignobles du Haut-Anjou ne sont qu'à quelques kilomètres, permettant d'agrémenter votre mariage de vins locaux de qualité. Les domaines de la région, souvent d'anciennes propriétés agricoles rénovées avec goût, proposent des réceptions authentiques et conviviales.

Château-Gontier représente l'exemple parfait du mariage champêtre accessible. À moins d'une heure de notre base de Bains-sur-Oust, nous intervenons régulièrement dans cette région où le rapport qualité-prix des prestations est particulièrement avantageux. Les couples profitent ainsi d'un cadre charmant sans grever leur budget.`,
    localHighlights: [
      'Petite cité de caractère 4 fleurs au bord de la Mayenne',
      'Prieuré roman et patrimoine médiéval préservé',
      'Proximité des vignobles du Haut-Anjou pour vins de qualité',
      'Rapport qualité-prix exceptionnel pour tous les prestataires',
    ],
    nearbyCommunes: ['Bazouges', 'Chemazé', 'Saint-Fort', 'Loigné-sur-Mayenne', 'Ménil'],
    weddingVenues: [
      { nom: 'Prieuré de Château-Gontier', ville: 'Château-Gontier', type: 'Lieu historique', description: 'Prieuré roman du XIe siècle avec cloître et jardins' },
      { nom: 'Domaine de la Maroutière', ville: 'Château-Gontier', type: 'Domaine', description: 'Gentilhommière avec parc arboré et dépendances' },
    ],
    testimonials: [
      { author: 'Amandine & Jérémy', text: "Parfait de A à Z ! MG Events a fait danser tout le monde lors de notre mariage." },
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
