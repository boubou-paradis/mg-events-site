export interface Partner {
  id: string;
  name: string;
  category: 'photographe' | 'salle' | 'traiteur' | 'fleuriste' | 'decorateur' | 'officiant' | 'autre';
  categoryLabel: string;
  description: string;
  specialties: string[];
  zone: string;
  website: string;
  phone?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  logo?: string;
}

export const partners: Partner[] = [
  {
    id: 'vincent-guihur',
    name: 'Vincent GUIHUR',
    category: 'photographe',
    categoryLabel: 'Photographe & Vidéaste',
    description: 'Vincent GUIHUR, photographe et vidéaste professionnel en Ille-et-Vilaine, capture vos plus beaux moments avec talent et sensibilité. Spécialisé dans les reportages de mariage, il propose également des séances photo famille, bébé et entreprise, ainsi que la location de photobooth pour vos événements.',
    specialties: ['Reportage mariage', 'Vidéo mariage', 'Location Photobooth', 'Séance famille & bébé', 'Photographie entreprise'],
    zone: 'Ille-et-Vilaine (35) et alentours',
    website: 'https://photographe-ille-et-vilaine.fr/',
    facebook: 'https://www.facebook.com/vincent.guihur.photographe',
  },
  {
    id: 'morgane-carmouet',
    name: 'Morgane Carmouet',
    category: 'photographe',
    categoryLabel: 'Photographe',
    description: 'Dans l\'Objectif de Morgane, c\'est une photographe passionnée par l\'amour et les relations humaines. Spécialisée dans la capture des moments uniques et émotionnels, elle immortalise chaque instant de votre mariage avec sensibilité et authenticité, vous permettant de revivre votre histoire à travers ses clichés.',
    specialties: ['Photographie de mariage', 'Reportage famille', 'Séances photo couple', 'Collections photographiques'],
    zone: 'Bretagne et Grand Ouest',
    website: 'https://www.danslobjectifdemorgane.com/',
    phone: '06 76 77 85 66',
    email: 'danslobjectifdemorgane@gmail.com',
    facebook: 'https://www.facebook.com/danslobjectifdeMorgane/',
    instagram: 'https://www.instagram.com/danslobjectifdemorgane',
  },
  {
    id: 'globe-traiteur',
    name: 'Globe Traiteur',
    category: 'traiteur',
    categoryLabel: 'Traiteur & Organisateur événementiel',
    description: 'Globe Traiteur, un monde de couleurs et de saveurs ! Organisateur d\'événements culinaires basé en Centre Bretagne, Globe Traiteur sublime vos mariages avec des prestations complètes : consultation personnalisée, dégustation préalable, service soigné et coordination le jour J. Une équipe passionnée au service de votre réception.',
    specialties: ['Mariage', 'Réception', 'Séminaire entreprise', 'Anniversaire', 'Vente à emporter'],
    zone: 'Morbihan (56) - Centre Bretagne (Pontivy, Locminé)',
    website: 'https://www.leglobetraiteur.fr/',
    facebook: 'https://www.facebook.com/globetraiteur',
  },
  {
    id: 'lun-des-sens',
    name: 'L\'Un des Sens',
    category: 'traiteur',
    categoryLabel: 'Restaurant & Traiteur',
    description: 'L\'Un des Sens, restaurant et traiteur à Vezin-le-Coquet près de Rennes, vous accompagne pour tous vos événements. Repas de famille, anniversaires, repas associatifs : profitez de menus personnalisés sur place ou en prestation traiteur. Livraison de plats chauds à domicile possible (minimum 10 personnes).',
    specialties: ['Repas de famille', 'Anniversaire', 'Repas associatif', 'Menu personnalisé', 'Livraison plats chauds'],
    zone: 'Ille-et-Vilaine (35) - Vezin-le-Coquet, Rennes et environs',
    website: 'http://restolundessens.wifeo.com/',
    phone: '02 99 64 52 77',
  },
];

export const categoryIcons: Record<Partner['category'], string> = {
  photographe: 'Camera',
  salle: 'Building2',
  traiteur: 'UtensilsCrossed',
  fleuriste: 'Flower2',
  decorateur: 'Palette',
  officiant: 'Heart',
  autre: 'Star',
};

export const categoryLabels: Record<Partner['category'], string> = {
  photographe: 'Photographes & Vidéastes',
  salle: 'Salles de réception',
  traiteur: 'Traiteurs',
  fleuriste: 'Fleuristes',
  decorateur: 'Décorateurs',
  officiant: 'Officiants de cérémonie',
  autre: 'Autres prestataires',
};
