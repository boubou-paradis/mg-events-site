// Lieux de réception où MG Events a réellement animé un mariage (sources : devis, contrats
// et plannings Gmail, nov. 2026). Politique anti-doorway : uniquement des lieux réels,
// faits publics vérifiables, pas de capacité/prix inventés (les annuaires se contredisent).

export type Venue = {
  slug: string;
  name: string;
  commune: string;
  postalCode: string;
  department: string;
  departmentCode: string;
  citySlug?: string; // page /dj-mariage/[ville] la plus proche
  distanceFromRedonKm: number; // approximatif, route
  latitude: number;
  longitude: number;
  type: string;
  lastWedding: string; // "septembre 2026"
  metaTitle: string;
  metaDescription: string;
  intro: string;
  about: string[]; // le lieu (faits publics)
  ourExperience: string[]; // notre expérience sur place
  tips: string[]; // conseils pratiques pour les couples
  faqs: { question: string; answer: string }[];
};

export const venues: Venue[] = [
  {
    slug: 'manoir-de-la-perdrilais-pipriac',
    name: 'Manoir de la Perdrilais',
    commune: 'Pipriac',
    postalCode: '35550',
    department: 'Ille-et-Vilaine',
    departmentCode: '35',
    citySlug: 'redon',
    distanceFromRedonKm: 25,
    latitude: 47.8097,
    longitude: -1.9469,
    type: 'Manoir avec gîtes',
    lastWedding: 'septembre 2026',
    metaTitle: 'DJ Mariage Manoir de la Perdrilais (Pipriac) · Avis 5★',
    metaDescription:
      "DJ mariage au Manoir de la Perdrilais à Pipriac (35) : nous y avons animé un mariage en septembre 2026. Salle, logistique, conseils et animations. Devis sous 24h.",
    intro:
      "Le Manoir de la Perdrilais, à Pipriac, est à environ 25 km de notre base de Redon : c'est l'un des lieux de mariage les plus proches de chez nous. Nous y avons animé un mariage en septembre 2026.",
    about: [
      "Le manoir se trouve dans la campagne de Pipriac, au sud de l'Ille-et-Vilaine, entre Redon et Rennes. La réception se tient dans une ancienne laiterie restaurée du domaine, la salle Anne de Bretagne, à taille humaine.",
      "Gros atout pour un mariage sur deux jours : le domaine compte plusieurs gîtes de charme à quelques pas de la salle. Une bonne partie des invités dort sur place, ce qui change tout pour la soirée : personne ne surveille sa montre pour reprendre la route.",
      "Le lieu annonce un projet de nouvelle salle de réception plus grande pour 2027. Si vous réservez pour 2027 ou 2028, demandez au manoir dans quelle salle se tiendra votre réception : sono et lumière ne se dimensionnent pas de la même façon.",
    ],
    ourExperience: [
      "Pipriac étant à une demi-heure de Redon, l'installation se fait sereinement en amont, avec un repérage facile si besoin. Dans une salle de cette taille, le réglage du son est essentiel : assez présent pour faire danser, jamais agressif pour les invités assis près de l'espace DJ.",
      "Comme les invités logent sur place, la soirée peut monter en puissance tranquillement. On garde de l'énergie pour la fin de nuit, et on prévoit des titres plus calmes en fin de soirée pour ne pas déranger les gîtes.",
    ],
    tips: [
      "Réservez les gîtes en même temps que le lieu : ils partent vite en saison.",
      "Demandez au manoir la salle prévue pour votre date (salle actuelle ou future grande salle 2027).",
      "Prévoyez le brunch du lendemain sur place : c'est le moment idéal pour le diaporama des photos des invités.",
    ],
    faqs: [
      {
        question: 'Avez-vous déjà animé un mariage au Manoir de la Perdrilais ?',
        answer:
          "Oui, en septembre 2026. Nous connaissons le lieu, ses accès et sa salle. Pipriac est à environ 25 km de notre base de Redon, donc largement dans les 100 km aller-retour inclus dans nos forfaits.",
      },
      {
        question: 'Y a-t-il des frais de déplacement pour Pipriac ?',
        answer:
          "Non : Pipriac est à environ 25 km de Redon, soit une cinquantaine de kilomètres aller-retour, inclus dans tous nos forfaits.",
      },
    ],
  },
  {
    slug: 'domaine-du-val-de-caratel-louisfert',
    name: 'Domaine du Val de Caratel',
    commune: 'Louisfert',
    postalCode: '44110',
    department: 'Loire-Atlantique',
    departmentCode: '44',
    citySlug: undefined,
    distanceFromRedonKm: 60,
    latitude: 47.6797,
    longitude: -1.4373,
    type: 'Hameau restauré au pied d’un château',
    lastWedding: 'août 2026',
    metaTitle: 'DJ Mariage Domaine du Val de Caratel (Louisfert) · Avis 5★',
    metaDescription:
      "DJ mariage au Domaine du Val de Caratel à Louisfert, près de Châteaubriant (44) : nous y avons animé un mariage en août 2026. Retour d'expérience et conseils.",
    intro:
      "Le Domaine du Val de Caratel, à Louisfert près de Châteaubriant, est un hameau restauré au pied d'un château du XVIIe siècle. Nous y avons animé un mariage fin août 2026.",
    about: [
      "Le domaine se compose de plusieurs bâtiments rénovés autour d'un château inscrit à l'inventaire supplémentaire des monuments historiques. Les couples disposent de plusieurs espaces : cour, salle de réception, hébergements, et une petite chapelle sur demande pour un moment intime.",
      "Le lieu est à une vingtaine de minutes de Châteaubriant, au nord de la Loire-Atlantique, à la limite de l'Ille-et-Vilaine : pratique pour des familles venues de Rennes comme de Nantes.",
    ],
    ourExperience: [
      "Sur un domaine à plusieurs espaces, la clé est d'anticiper les déplacements des invités : musique d'ambiance au vin d'honneur, puis enchaînement vers la salle pour le repas et la soirée. Nous prévoyons une sonorisation dédiée à chaque moment pour que la transition se fasse sans temps mort.",
      "Le domaine se prête bien aux animations interactives : un quiz des mariés ou une Photo Mystère sur grand écran pendant le repas, puis la piste de danse jusqu'au bout de la nuit.",
    ],
    tips: [
      "Faites un point avec le domaine sur l'espace prévu pour le vin d'honneur en cas de pluie.",
      "Si vous voulez la chapelle, réservez-la dès la signature : c'est une option sur demande.",
      "Pour les invités venant de loin, les hébergements sur place évitent la route de nuit.",
    ],
    faqs: [
      {
        question: 'Connaissez-vous le Domaine du Val de Caratel ?',
        answer:
          "Oui, nous y avons animé un mariage en août 2026. Louisfert est à environ 60 km de notre base de Redon, dans la zone couverte par nos forfaits (100 km aller-retour inclus, puis 0,66 €/km précisé sur le devis).",
      },
      {
        question: 'Proposez-vous aussi la sonorisation de la cérémonie laïque ?',
        answer:
          "Oui : micro sans fil pour les intervenants, musique d'entrée et de sortie, enceinte autonome pour une cérémonie en extérieur. Voir notre page sonorisation de cérémonie laïque.",
      },
    ],
  },
  {
    slug: 'manoir-de-la-boulaie-haute-goulaine',
    name: 'Manoir de la Boulaie',
    commune: 'Haute-Goulaine',
    postalCode: '44115',
    department: 'Loire-Atlantique',
    departmentCode: '44',
    citySlug: 'nantes',
    distanceFromRedonKm: 85,
    latitude: 47.1977,
    longitude: -1.4167,
    type: 'Manoir des années 1920 dans les vignes',
    lastWedding: 'juillet 2026',
    metaTitle: 'DJ Mariage Manoir de la Boulaie (Haute-Goulaine) · Avis 5★',
    metaDescription:
      "DJ mariage au Manoir de la Boulaie à Haute-Goulaine, près de Nantes (44) : nous y avons animé un mariage en juillet 2026 avec Jardin de Vent. Retour d'expérience.",
    intro:
      "Le Manoir de la Boulaie, à Haute-Goulaine, à une quinzaine de kilomètres de Nantes, est un domaine des années 1920 au milieu des vignes de Muscadet. Nous y avons animé un mariage en juillet 2026, coordonné par la wedding planner Jardin de Vent.",
    about: [
      "Le manoir est connu pour sa table gastronomique et son cadre au cœur du vignoble nantais. Il accueille aussi des mariages, avec un parc qui se prête aux cocktails en extérieur et aux photos de couple au coucher du soleil.",
      "Haute-Goulaine est à l'est de Nantes, facilement accessible par le périphérique : pratique pour des invités qui arrivent de la gare ou de l'aéroport de Nantes.",
    ],
    ourExperience: [
      "Pour ce mariage, nous sommes arrivés la veille pour installer le matériel tranquillement et sommes restés dormir sur place. Le jour J, la journée suivait un planning précis préparé par la wedding planner : cocktail animé en fin d'après-midi, entrée des mariés en musique, repas, puis ouverture de bal vers 23h et soirée dansante.",
      "Travailler avec une wedding planner change la donne : un seul interlocuteur pour le timing, les musiques du fil rouge et les vidéos des témoins. Nous nous calons sur son rétroplanning et elle n'a plus qu'à donner le top départ de chaque moment.",
    ],
    tips: [
      "Si vous avez une wedding planner, donnez-lui le contact de votre DJ tôt : le planning du jour J se construit à plusieurs.",
      "Le manoir est aussi un restaurant : vérifiez avec lui les horaires de fin de soirée et les contraintes de son.",
      "Prévoyez les photos de couple au coucher du soleil dans les vignes, pendant que les invités s'installent.",
    ],
    faqs: [
      {
        question: 'Avez-vous déjà animé un mariage au Manoir de la Boulaie ?',
        answer:
          "Oui, en juillet 2026, en lien avec la wedding planner Jardin de Vent. Nous avons installé la veille pour être prêts sans stress le jour J.",
      },
      {
        question: 'Intervenez-vous près de Nantes depuis Redon ?',
        answer:
          "Oui : Haute-Goulaine est à environ 85 km de notre base de Redon. Les forfaits incluent 100 km aller-retour ; au-delà, 0,66 €/km, précisé à l'avance sur le devis.",
      },
    ],
  },
];

export function getVenue(slug: string) {
  return venues.find((v) => v.slug === slug);
}
