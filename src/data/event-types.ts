// Configuration des types d'événements pour les pages SEO

export interface EventType {
  id: string;
  name: string;
  slug: string;
  titlePrefix: string;
  description: string;
  keywords: string[];
  formules: {
    name: string;
    price: string;
    description: string;
    popular?: boolean;
  }[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const eventTypes: Record<string, EventType> = {
  mariage: {
    id: 'mariage',
    name: 'Mariage',
    slug: 'dj-mariage',
    titlePrefix: 'DJ Mariage',
    description: 'Animation musicale professionnelle pour votre mariage',
    keywords: ['DJ mariage', 'animation mariage', 'sono mariage', 'musique mariage'],
    formules: [
      { name: "Éclat d'Amour", price: '1200', description: "L'essentiel pour une soirée réussie" },
      { name: 'Rêve en Blanc', price: '1490', description: 'Notre formule la plus demandée', popular: true },
      { name: 'Conte de Fées', price: '1690', description: "L'expérience complète avec photobooth" },
    ],
    features: [
      { icon: 'Mic2', title: "25 ans d'expérience", description: 'Plus de 100 mariages animés en Bretagne' },
      { icon: 'Sparkles', title: 'Effets spectaculaires', description: 'Étincelles froides certifiées CE, fumée lourde' },
      { icon: 'Camera', title: 'Photobooth vintage', description: 'Style TSF années 60, impressions sur place' },
      { icon: 'Music', title: 'AnimaJet, notre création', description: 'Animations interactives conçues et développées par MG Events' },
    ],
    faqs: [
      {
        question: 'Quel est le délai de réservation recommandé ?',
        answer: 'Nous vous conseillons de réserver 12 à 18 mois à l\'avance pour les dates prisées (mai à septembre). Pour la basse saison, 6 mois peuvent suffire.',
      },
      {
        question: 'Proposez-vous la sonorisation de cérémonie laïque ?',
        answer: 'Oui, nous proposons une prestation cérémonie laïque à 180€ comprenant la sonorisation professionnelle, 2 techniciens et la diffusion de vos musiques choisies.',
      },
      {
        question: 'Peut-on personnaliser la playlist ?',
        answer: 'Absolument ! Nous créons ensemble votre playlist idéale en amont, tout en gardant la flexibilité de nous adapter en direct aux réactions de la piste de danse.',
      },
      {
        question: 'Le matériel est-il aux normes de sécurité ?',
        answer: 'Tout notre matériel est professionnel et conforme aux normes. Nos lanceurs d\'étincelles froides sont certifiés CE. Nous disposons d\'une assurance RC professionnelle.',
      },
    ],
  },

  entreprise: {
    id: 'entreprise',
    name: 'Soirée d\'entreprise',
    slug: 'dj-soiree-entreprise',
    titlePrefix: 'DJ Soirée Entreprise',
    description: 'Animation musicale pour vos événements corporate',
    keywords: ['DJ entreprise', 'animation corporate', 'soirée entreprise', 'team building musical'],
    formules: [
      { name: 'Cocktail', price: '800', description: 'Animation musicale d\'ambiance (4h)' },
      { name: 'Corporate', price: '1200', description: 'Soirée complète avec jeux interactifs', popular: true },
      { name: 'Premium', price: '1600', description: 'Expérience complète avec photobooth' },
    ],
    features: [
      { icon: 'Mic2', title: 'Expérience corporate', description: 'Animation de nombreux événements d\'entreprise' },
      { icon: 'Users', title: 'Team building musical', description: 'Activités interactives pour renforcer la cohésion' },
      { icon: 'Camera', title: 'Photobooth pro', description: 'Photos personnalisées avec logo entreprise' },
      { icon: 'Music', title: 'AnimaJet interactif', description: 'Quiz, blind test et animations digitales' },
    ],
    faqs: [
      {
        question: 'Pouvez-vous personnaliser l\'animation avec notre branding ?',
        answer: 'Absolument ! Nous intégrons votre logo sur le photobooth, les animations AnimaJet et pouvons créer des jeux personnalisés autour de votre entreprise.',
      },
      {
        question: 'Intervenez-vous pour des séminaires et team building ?',
        answer: 'Oui, nous proposons des animations musicales adaptées : blind test corporate, quiz interactifs, challenges musicaux pour renforcer la cohésion d\'équipe.',
      },
      {
        question: 'Quel est le délai de réservation ?',
        answer: 'Pour les événements corporate, nous recommandons 2 à 3 mois d\'avance. Les périodes de fin d\'année sont très demandées.',
      },
      {
        question: 'Facturez-vous en HT ou TTC ?',
        answer: 'Nos tarifs sont indiqués TTC. Nous fournissons une facture avec TVA déductible pour votre comptabilité.',
      },
    ],
  },

  anniversaire: {
    id: 'anniversaire',
    name: 'Anniversaire',
    slug: 'animation-anniversaire',
    titlePrefix: 'Animation Anniversaire',
    description: 'Animation musicale pour vos fêtes d\'anniversaire',
    keywords: ['DJ anniversaire', 'animation anniversaire', 'soirée anniversaire', 'fête privée'],
    formules: [
      { name: 'Essentiel', price: '600', description: 'Animation musicale (4h)' },
      { name: 'Festif', price: '900', description: 'Animation complète avec jeux', popular: true },
      { name: 'VIP', price: '1200', description: 'Expérience premium avec photobooth' },
    ],
    features: [
      { icon: 'Mic2', title: 'Animation sur mesure', description: 'Adaptée à l\'âge et aux goûts des invités' },
      { icon: 'PartyPopper', title: 'Ambiance garantie', description: 'Jeux, karaoké et moments festifs' },
      { icon: 'Camera', title: 'Photobooth vintage', description: 'Souvenirs photos pour tous les invités' },
      { icon: 'Music', title: 'Playlist personnalisée', description: 'Vos morceaux préférés pour un moment unique' },
    ],
    faqs: [
      {
        question: 'À partir de combien de personnes intervenez-vous ?',
        answer: 'Nous intervenons à partir de 30 personnes pour garantir une ambiance festive. Pour les événements plus intimistes, contactez-nous pour étudier votre demande.',
      },
      {
        question: 'Proposez-vous du karaoké ?',
        answer: 'Oui ! Le karaoké est disponible en option ou inclus dans certaines formules. Idéal pour créer des moments de partage.',
      },
      {
        question: 'Pouvez-vous adapter l\'animation pour un anniversaire d\'enfant ?',
        answer: 'Nous nous spécialisons dans les événements adultes. Pour les fêtes d\'enfants, nous recommandons des animateurs spécialisés.',
      },
      {
        question: 'Intervenez-vous dans des lieux privatisés ?',
        answer: 'Oui, nous intervenons dans les salles des fêtes, restaurants privatisés, domaines et chez vous si l\'espace le permet.',
      },
    ],
  },
};

// Fonctions utilitaires
export const getEventType = (id: string): EventType | undefined => {
  return eventTypes[id];
};

export const getAllEventTypes = (): EventType[] => {
  return Object.values(eventTypes);
};
