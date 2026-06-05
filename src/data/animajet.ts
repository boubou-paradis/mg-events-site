// Données centrales du cluster SEO AnimaJet
// AnimaJet est la plateforme d'animations interactives propriétaire de MG Events.
// Ce module centralise les features, les pages du cluster, la galerie média et
// le mapping ville -> animation vedette (pour le maillage local sans duplication).

export type LucideIconName =
  | 'Brain'
  | 'Music'
  | 'Dices'
  | 'Sparkles'
  | 'ListOrdered'
  | 'Timer'
  | 'Share2'
  | 'Images'
  | 'Smartphone'
  | 'QrCode'
  | 'Monitor'
  | 'PartyPopper'
  | 'Trophy'
  | 'Camera'
  | 'Wand2';

// ---------------------------------------------------------------------------
// Les fonctionnalités AnimaJet
// ---------------------------------------------------------------------------
export interface AnimaJetFeature {
  id: string;
  name: string;
  icon: LucideIconName;
  tagline: string;
  description: string;
  // slug de la page satellite dédiée (si elle existe)
  clusterSlug?: string;
}

export const animajetFeatures: AnimaJetFeature[] = [
  {
    id: 'quiz',
    name: 'Quiz interactif',
    icon: 'Brain',
    tagline: 'Tous les invités jouent en temps réel',
    description:
      "Un quiz personnalisé sur les mariés, leur histoire ou la culture générale. Les invités répondent depuis leur smartphone, le classement s'affiche en direct sur l'écran géant. Rires et compétition bon enfant garantis, de 7 à 77 ans.",
    clusterSlug: 'quiz-mariage-interactif',
  },
  {
    id: 'blind-test',
    name: 'Blind test musical',
    icon: 'Music',
    tagline: 'La bataille musicale façon émission TV',
    description:
      "Premières notes, qui trouve le titre ? Les invités buzzent sur leur téléphone, le score grimpe en direct. Le blind test mélange les générations : les parents brillent sur les classiques, les jeunes sur les hits actuels.",
    clusterSlug: 'blind-test-mariage',
  },
  {
    id: 'roue',
    name: 'Roue de la destinée',
    icon: 'Dices',
    tagline: 'Gages, défis et fous rires',
    description:
      "La roue tourne sur l'écran géant et désigne un invité, un gage ou un défi. Un format imprévisible qui relance l'énergie de la soirée et crée des moments inoubliables sur la piste de danse.",
  },
  {
    id: 'photo-mystere',
    name: 'Photo Mystère',
    icon: 'Sparkles',
    tagline: 'Une image qui se révèle peu à peu',
    description:
      "Une photo floue apparaît progressivement : photo d'enfance des mariés, lieu de leur rencontre, invité déguisé... Les premiers à deviner marquent des points. Un jeu de complicité plein d'émotion.",
  },
  {
    id: 'bon-ordre',
    name: 'Bon Ordre',
    icon: 'ListOrdered',
    tagline: 'Le jeu de classement collaboratif',
    description:
      "Remettre dans le bon ordre les étapes de l'histoire des mariés, des chansons par date de sortie, des photos par année... Un défi logique et amusant qui fait réfléchir toute la tablée.",
  },
  {
    id: 'rapidite',
    name: 'Jeux de rapidité',
    icon: 'Timer',
    tagline: 'Le premier qui buzze gagne',
    description:
      "Des mini-jeux nerveux où chaque milliseconde compte. Parfaits pour réveiller l'ambiance entre deux plats ou lancer la soirée dansante sur les chapeaux de roue.",
  },
  {
    id: 'partage-photo',
    name: 'Partage photo en direct',
    icon: 'Share2',
    tagline: "Les photos des invités sur l'écran, en live",
    description:
      "Chaque invité envoie ses plus beaux clichés depuis son téléphone : ils s'affichent instantanément sur grand écran. Vous récupérez des centaines de photos de votre mariage, vues sous tous les angles.",
    clusterSlug: 'partage-photo-mariage',
  },
  {
    id: 'mur-photo',
    name: 'Mur photo événementiel',
    icon: 'Images',
    tagline: 'Une mosaïque vivante de votre soirée',
    description:
      "Toutes les photos partagées composent un mur photo qui se remplit en temps réel sur l'écran géant. Un diaporama collectif et évolutif qui devient l'un des temps forts visuels de la réception.",
    clusterSlug: 'mur-photo-mariage',
  },
  {
    id: 'smartphone',
    name: 'Participation smartphone',
    icon: 'Smartphone',
    tagline: 'Aucune application à télécharger',
    description:
      "Tout fonctionne directement dans le navigateur du téléphone. Pas d'application, pas de compte à créer, pas de manipulation compliquée : même les grands-parents jouent sans difficulté.",
    clusterSlug: 'animation-mariage-smartphone',
  },
  {
    id: 'qrcode',
    name: 'QR Code unique',
    icon: 'QrCode',
    tagline: 'On scanne, on joue',
    description:
      "Un QR Code unique par événement, affiché sur les tables et l'écran. Les invités le scannent et rejoignent instantanément toutes les animations. Connexion en moins de 5 secondes.",
  },
  {
    id: 'ecran-geant',
    name: 'Affichage écran géant',
    icon: 'Monitor',
    tagline: 'Le spectacle au centre de la salle',
    description:
      "Quiz, scores, photos et défis s'affichent sur grand écran via vidéoprojection professionnelle. Toute la salle vit l'animation ensemble, dans une dynamique collective fédératrice.",
  },
];

// ---------------------------------------------------------------------------
// Le cluster de pages SEO (pilier + satellites)
// Sert au maillage croisé et au sitemap.
// ---------------------------------------------------------------------------
export interface ClusterPage {
  slug: string;
  navLabel: string; // libellé court pour le maillage
  keyword: string; // requête principale ciblée
  priority: number; // priorité sitemap
}

export const animajetPillar: ClusterPage = {
  slug: 'animations-interactives-mariage',
  navLabel: 'Animations interactives',
  keyword: 'animation interactive mariage',
  priority: 0.9,
};

export const animajetClusterPages: ClusterPage[] = [
  { slug: 'quiz-mariage-interactif', navLabel: 'Quiz interactif', keyword: 'quiz mariage interactif', priority: 0.8 },
  { slug: 'blind-test-mariage', navLabel: 'Blind test', keyword: 'blind test mariage', priority: 0.8 },
  { slug: 'animation-mariage-smartphone', navLabel: 'Animation smartphone', keyword: 'animation mariage smartphone', priority: 0.8 },
  { slug: 'partage-photo-mariage', navLabel: 'Partage photo', keyword: 'partage photo mariage', priority: 0.8 },
  { slug: 'photos-invites-mariage', navLabel: 'Photos des invités', keyword: 'photos invités mariage', priority: 0.75 },
  { slug: 'mur-photo-mariage', navLabel: 'Mur photo', keyword: 'mur photo mariage', priority: 0.8 },
  { slug: 'animation-cocktail-mariage', navLabel: 'Animation cocktail', keyword: 'animation cocktail mariage', priority: 0.75 },
  { slug: 'jeu-interactif-mariage', navLabel: 'Jeu interactif', keyword: 'jeu interactif mariage', priority: 0.75 },
  { slug: 'animation-moderne-mariage', navLabel: 'Animation moderne', keyword: 'animation moderne mariage', priority: 0.75 },
  { slug: 'animation-digitale-mariage', navLabel: 'Animation digitale', keyword: 'animation digitale mariage', priority: 0.75 },
];

export const allClusterPages: ClusterPage[] = [animajetPillar, ...animajetClusterPages];

// Renvoie les liens de maillage croisé pour une page du cluster (toutes sauf la page courante).
export function getRelatedClusterPages(currentSlug: string, limit = 6): ClusterPage[] {
  return allClusterPages.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

// ---------------------------------------------------------------------------
// SEO local avancé : mapping déterministe ville -> animation vedette.
// Permet de varier le bloc AnimaJet d'une ville à l'autre (anti-duplication).
// ---------------------------------------------------------------------------
const cityHighlightFeatures: string[] = [
  'quiz',
  'blind-test',
  'partage-photo',
  'mur-photo',
  'roue',
  'photo-mystere',
];

// Hash simple et stable d'un slug -> index
function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

// Renvoie l'animation AnimaJet mise en avant pour une ville donnée (stable).
export function getCityFeaturedAnimation(citySlug: string): AnimaJetFeature {
  const featureId = cityHighlightFeatures[slugHash(citySlug) % cityHighlightFeatures.length];
  return animajetFeatures.find((f) => f.id === featureId) ?? animajetFeatures[0];
}

// Renvoie 4 animations à afficher dans le bloc de maillage ville (la vedette + 3 autres),
// dans un ordre qui dépend de la ville pour éviter une duplication stricte.
export function getCityMeshFeatures(citySlug: string): AnimaJetFeature[] {
  const featured = getCityFeaturedAnimation(citySlug);
  const pool = animajetFeatures.filter(
    (f) => f.clusterSlug && f.id !== featured.id,
  );
  const start = slugHash(citySlug + 'mesh') % pool.length;
  const rotated = [...pool.slice(start), ...pool.slice(0, start)];
  return [featured, ...rotated].slice(0, 5);
}

// ---------------------------------------------------------------------------
// Galerie média AnimaJet (structure SEO).
// Les fichiers /images/animajet-*.jpg sont à fournir (captures réelles).
// En attendant, on réutilise des visuels existants comme placeholders.
// ---------------------------------------------------------------------------
export interface MediaItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'presentation' | 'quiz' | 'blind-test' | 'partage-photo' | 'mur-photo' | 'ecran-geant' | 'soiree';
  // true = visuel d'ambiance existant utilisé en attendant une vraie capture AnimaJet
  isPlaceholder?: boolean;
}

export const animajetGallery: MediaItem[] = [
  {
    src: '/images/animajet-jeux-interactifs-mariage.png',
    alt: 'Interface AnimaJet : quiz, photo mystère, roue de la destinée, mur photo et partage photo en direct pour mariage',
    title: 'AnimaJet — les jeux interactifs de mariage (quiz, photo mystère, roue, mur photo)',
    description:
      "Présentation des animations interactives AnimaJet : quiz, photo mystère, bon ordre, roue de la destinée, partage de photos en live et mur photo, accessibles par QR Code depuis le smartphone des invités.",
    category: 'presentation',
  },
  {
    src: '/images/animajet-animations-interactives-mariage.jpg',
    alt: "Bannière AnimaJet, plateforme d'animations interactives pour mariage : photos en live, jeux interactifs, QR instantané",
    title: 'AnimaJet — animations interactives de mariage par MG Events',
    description:
      "AnimaJet transforme chaque mariage en expérience interactive : partage de photos en live, jeux interactifs et accès instantané par QR Code, sans application à télécharger.",
    category: 'presentation',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Invités participant à une animation interactive pendant une soirée de mariage en Bretagne',
    title: 'Soirée de mariage animée par AnimaJet — invités en jeu',
    description:
      "Ambiance d'une soirée de mariage où les invités participent ensemble aux animations interactives AnimaJet, smartphone en main.",
    category: 'soiree',
    isPlaceholder: true,
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Piste de danse et écran géant lors d\'un mariage animé par MG Events',
    title: "Écran géant et animation de soirée de mariage",
    description:
      "L'écran géant au centre de la salle diffuse quiz, scores et photos en direct pendant la soirée dansante.",
    category: 'ecran-geant',
    isPlaceholder: true,
  },
  {
    src: '/images/gallery-7.jpg',
    alt: 'Photos des invités partagées pendant une réception de mariage',
    title: 'Partage des photos des invités — réception de mariage',
    description:
      "Les invités immortalisent les meilleurs moments : avec le partage photo en direct AnimaJet, ces clichés s'affichent instantanément sur grand écran.",
    category: 'partage-photo',
    isPlaceholder: true,
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Mosaïque de souvenirs d\'une soirée de mariage en Bretagne',
    title: 'Mur photo collaboratif — souvenirs de mariage',
    description:
      "Tous les clichés de la soirée composent un mur photo vivant, l'un des temps forts visuels de la réception avec AnimaJet.",
    category: 'mur-photo',
    isPlaceholder: true,
  },
];

// ---------------------------------------------------------------------------
// Helper : schéma Service pour une page satellite du cluster
// ---------------------------------------------------------------------------
const BASE_URL = 'https://www.mg-events35.com';

export function buildClusterServiceSchema(opts: {
  slug: string;
  name: string;
  description: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Animation interactive de mariage',
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}/${opts.slug}`,
    brand: { '@type': 'Brand', name: 'AnimaJet' },
    provider: { '@type': 'LocalBusiness', '@id': `${BASE_URL}/#organization`, name: 'MG Events Animation' },
    areaServed: [
      { '@type': 'State', name: 'Bretagne' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Mayenne' },
    ],
    isPartOf: { '@type': 'Service', name: 'AnimaJet', url: `${BASE_URL}/animations-interactives-mariage` },
  };
}

// ---------------------------------------------------------------------------
// FAQ transverses réutilisables sur le cluster
// ---------------------------------------------------------------------------
export const animajetCoreFaqs = [
  {
    question: "Qu'est-ce qu'AnimaJet exactement ?",
    answer:
      "AnimaJet est la plateforme d'animations interactives développée par MG Events. Elle réunit quiz, blind test, roue de la destinée, photo mystère, partage photo en direct et mur photo événementiel. Les invités participent depuis leur smartphone, sans application à télécharger, et tout s'affiche en direct sur écran géant. C'est une exclusivité MG Events, unique dans le Grand Ouest.",
  },
  {
    question: 'Faut-il télécharger une application pour participer ?',
    answer:
      "Non, et c'est tout l'intérêt. AnimaJet fonctionne directement dans le navigateur du smartphone. Les invités scannent un QR Code unique et rejoignent les animations en quelques secondes. Aucun compte à créer, aucune application : même les invités les moins à l'aise avec la technologie participent sans difficulté.",
  },
  {
    question: 'AnimaJet convient-il à toutes les générations ?',
    answer:
      "Oui. Les animations sont pensées pour fédérer de 7 à 77 ans. Le blind test mélange les classiques et les hits actuels, le quiz porte sur les mariés et leur histoire, le partage photo implique tout le monde. C'est précisément cette dimension intergénérationnelle qui crée l'ambiance.",
  },
  {
    question: "AnimaJet est-il inclus dans les formules MG Events ?",
    answer:
      "Oui, AnimaJet est inclus dès la formule Éclat d'Amour (1200€ TTC). Nos formules Rêve en Blanc (1490€) et Conte de Fées (1690€) ajoutent éclairage, effets et photobooth vintage. Le déplacement en Bretagne et dans le Grand Ouest est inclus, sans surprise tarifaire.",
  },
];
