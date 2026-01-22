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
