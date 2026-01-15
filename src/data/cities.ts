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
  nearbyCommunes: string[];
  weddingVenues: {
    nom: string;
    ville: string;
    type: string;
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
    nearbyCommunes: ['Cesson-Sévigné', 'Bruz', 'Chantepie', 'Saint-Jacques-de-la-Lande', 'Pacé', 'Betton', 'Saint-Grégoire', 'Vezin-le-Coquet'],
    weddingVenues: [
      { nom: 'Domaine de Cicé-Blossac', ville: 'Bruz', type: 'Domaine & Golf' },
      { nom: 'Manoir de la Begaudière', ville: 'Rennes', type: 'Manoir' },
      { nom: 'Château du Bois Guy', ville: 'Parigné', type: 'Château' },
      { nom: 'Le Florian', ville: 'Rennes', type: 'Salle de réception' },
    ],
    testimonials: [
      { author: 'Morane & Kevin', text: "Merci à Guillaume et Laurence pour leur superbe prestation à notre mariage à Rennes ! Les invités ont été conquis et ont enflammé le dancefloor.", venue: 'Domaine de Cicé-Blossac' },
      { author: 'Sophie & Maxime', text: "Une soirée inoubliable au Manoir de la Begaudière. L'ambiance était parfaite du début à la fin !", venue: 'Manoir de la Begaudière' },
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
    nearbyCommunes: ['Dinard', 'Cancale', 'Saint-Lunaire', 'Saint-Briac-sur-Mer', 'Paramé', 'Rothéneuf', 'Saint-Servan'],
    weddingVenues: [
      { nom: 'Grand Hôtel des Thermes', ville: 'Saint-Malo', type: 'Hôtel de luxe' },
      { nom: 'Domaine des Ormes', ville: 'Epiniac', type: 'Domaine' },
      { nom: 'Manoir du Cunningham', ville: 'Saint-Malo', type: 'Manoir' },
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
    nearbyCommunes: ['Vitré', 'La Guerche-de-Bretagne', 'Châteaubourg', 'Javené', 'Lécousse', 'Romagné'],
    weddingVenues: [
      { nom: 'Château de Fougères', ville: 'Fougères', type: 'Château médiéval' },
      { nom: 'Domaine de la Haute Forêt', ville: 'Fougères', type: 'Domaine' },
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
    nearbyCommunes: ['Châteaubourg', 'Janzé', 'La Guerche-de-Bretagne', 'Argentré-du-Plessis', 'Étrelles'],
    weddingVenues: [
      { nom: 'Château de Vitré', ville: 'Vitré', type: 'Château' },
      { nom: 'Domaine du Rocher', ville: 'Vitré', type: 'Domaine' },
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
    nearbyCommunes: ['Guichen', 'Bain-de-Bretagne', 'Grand-Fougeray', 'Pipriac', 'Saint-Nicolas-de-Redon', 'Allaire'],
    weddingVenues: [
      { nom: 'Abbaye Saint-Sauveur', ville: 'Redon', type: 'Lieu historique' },
      { nom: 'Domaine de la Vilaine', ville: 'Redon', type: 'Domaine' },
    ],
    testimonials: [
      { author: 'Claire & Antoine', text: "Superbe prestation pour notre mariage au bord de la Vilaine. Merci MG Events !" },
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
    nearbyCommunes: ['Saint-Malo', 'Saint-Lunaire', 'Saint-Briac-sur-Mer', 'Pleurtuit', 'La Richardais'],
    weddingVenues: [
      { nom: 'Grand Hôtel Barrière', ville: 'Dinard', type: 'Hôtel de luxe' },
      { nom: 'Villa Reine Hortense', ville: 'Dinard', type: 'Villa Belle Époque' },
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
    nearbyCommunes: ['Rezé', 'Saint-Herblain', 'Orvault', 'Vertou', 'Carquefou', 'La Chapelle-sur-Erdre', 'Bouguenais', 'Couëron'],
    weddingVenues: [
      { nom: 'Château de la Poterie', ville: 'Nantes', type: 'Château' },
      { nom: 'Domaine de la Frémoire', ville: 'Vertou', type: 'Domaine' },
      { nom: 'Manoir de la Régate', ville: 'Nantes', type: 'Manoir' },
      { nom: 'Château du Plessis', ville: 'La Chapelle-sur-Erdre', type: 'Château' },
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
    nearbyCommunes: ['Pornichet', 'La Baule', 'Guérande', 'Trignac', 'Montoir-de-Bretagne', 'Saint-André-des-Eaux'],
    weddingVenues: [
      { nom: 'Domaine du Bois de la Cour', ville: 'Saint-Nazaire', type: 'Domaine' },
      { nom: 'Escal\'Atlantic', ville: 'Saint-Nazaire', type: 'Lieu atypique' },
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
    nearbyCommunes: ['Pornichet', 'Le Pouliguen', 'Guérande', 'Saint-André-des-Eaux', 'Batz-sur-Mer'],
    weddingVenues: [
      { nom: 'Hôtel Hermitage Barrière', ville: 'La Baule', type: 'Palace' },
      { nom: 'Castel Marie-Louise', ville: 'La Baule', type: 'Hôtel de charme' },
      { nom: 'Royal Thalasso Barrière', ville: 'La Baule', type: 'Hôtel' },
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
    nearbyCommunes: ['La Baule', 'Le Croisic', 'Piriac-sur-Mer', 'La Turballe', 'Mesquer'],
    weddingVenues: [
      { nom: 'Domaine de Carheil', ville: 'Guérande', type: 'Domaine' },
      { nom: 'Château de Careil', ville: 'Guérande', type: 'Château' },
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
    nearbyCommunes: ['Arradon', 'Séné', 'Theix-Noyalo', 'Ploeren', 'Plescop', 'Saint-Avé', 'Meucon'],
    weddingVenues: [
      { nom: 'Domaine de Rochevilaine', ville: 'Billiers', type: 'Domaine vue mer' },
      { nom: 'Château de Kerlarec', ville: 'Arradon', type: 'Château' },
      { nom: 'Manoir de Kerhuel', ville: 'Pluneret', type: 'Manoir' },
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
    nearbyCommunes: ['Lanester', 'Ploemeur', 'Hennebont', 'Larmor-Plage', 'Quéven', 'Guidel'],
    weddingVenues: [
      { nom: 'Domaine de Kerbastic', ville: 'Guidel', type: 'Domaine' },
      { nom: 'Château de Locguénolé', ville: 'Hennebont', type: 'Château-Hôtel' },
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
    nearbyCommunes: ['Noyal-Pontivy', 'Saint-Thuriau', 'Cléguérec', 'Le Sourn', 'Malguénac'],
    weddingVenues: [
      { nom: 'Château des Rohan', ville: 'Pontivy', type: 'Château' },
      { nom: 'Domaine de Kerguéhennec', ville: 'Bignan', type: 'Domaine' },
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
    nearbyCommunes: ['Carnac', 'Quiberon', 'Sainte-Anne-d\'Auray', 'Pluneret', 'Brech', 'Erdeven'],
    weddingVenues: [
      { nom: 'Domaine de Kerninon', ville: 'Pluneret', type: 'Domaine' },
      { nom: 'Hôtel & Spa Miramar', ville: 'Carnac', type: 'Hôtel Thalasso' },
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
    nearbyCommunes: ['Plouzané', 'Guipavas', 'Le Relecq-Kerhuon', 'Plougastel-Daoulas', 'Gouesnou', 'Guilers'],
    weddingVenues: [
      { nom: 'Château de Kerjean', ville: 'Saint-Vougay', type: 'Château Renaissance' },
      { nom: 'Domaine de Oatlands', ville: 'Plougastel', type: 'Domaine' },
      { nom: 'Océanopolis', ville: 'Brest', type: 'Lieu atypique' },
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
    nearbyCommunes: ['Ergué-Gabéric', 'Pluguffan', 'Plomelin', 'Fouesnant', 'Bénodet', 'Concarneau'],
    weddingVenues: [
      { nom: 'Manoir de Kerhuel', ville: 'Plonéour-Lanvern', type: 'Manoir' },
      { nom: 'Château de Guilguiffin', ville: 'Landudec', type: 'Château' },
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
    nearbyCommunes: ['Saint-Martin-des-Champs', 'Plourin-lès-Morlaix', 'Garlan', 'Plouigneau', 'Lanmeur'],
    weddingVenues: [
      { nom: 'Château du Taureau', ville: 'Baie de Morlaix', type: 'Château insulaire' },
      { nom: 'Manoir de Coat Amour', ville: 'Morlaix', type: 'Manoir' },
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
    nearbyCommunes: ['Fouesnant', 'Trégunc', 'Rosporden', 'Pont-Aven', 'Névez'],
    weddingVenues: [
      { nom: 'Domaine de la Forêt', ville: 'Concarneau', type: 'Domaine' },
      { nom: 'Ville Close', ville: 'Concarneau', type: 'Site historique' },
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
    nearbyCommunes: ['Saint-Berthevin', 'Changé', 'L\'Huisserie', 'Bonchamp-lès-Laval', 'Louverné', 'Entrammes'],
    weddingVenues: [
      { nom: 'Château de Laval', ville: 'Laval', type: 'Château' },
      { nom: 'Domaine du Tertre', ville: 'Laval', type: 'Domaine' },
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
    nearbyCommunes: ['Aron', 'Moulay', 'Contest', 'Martigné-sur-Mayenne', 'Saint-Baudelle'],
    weddingVenues: [
      { nom: 'Château de Mayenne', ville: 'Mayenne', type: 'Château' },
      { nom: 'Domaine des Vaux', ville: 'Mayenne', type: 'Domaine' },
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
    nearbyCommunes: ['Bazouges', 'Chemazé', 'Saint-Fort', 'Loigné-sur-Mayenne', 'Ménil'],
    weddingVenues: [
      { nom: 'Prieuré de Château-Gontier', ville: 'Château-Gontier', type: 'Lieu historique' },
      { nom: 'Domaine de la Maroutière', ville: 'Château-Gontier', type: 'Domaine' },
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
