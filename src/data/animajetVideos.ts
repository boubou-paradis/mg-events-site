// Vidéos de la chaîne YouTube AnimaJet (https://www.youtube.com/@animajet-v4q).
// AnimaJet est conçu et développé par MG Events. Durées au format ISO 8601 (schema VideoObject).

export const ANIMAJET_YOUTUBE_CHANNEL = 'https://www.youtube.com/@animajet-v4q';

export type AnimaJetVideo = {
  id: string;
  title: string;
  description: string;
  uploadDate: string; // ISO
  duration: string; // ISO 8601
};

export const animajetVideos = {
  presentation: {
    id: 'dd4hmO79Z6g',
    title: "AnimaJet, c'est quoi ? Jeux interactifs et animations pour DJ et soirées privées",
    description:
      "Présentation d'AnimaJet, la plateforme de jeux interactifs conçue par MG Events : les invités jouent depuis leur téléphone via un QR code, les résultats s'affichent sur grand écran.",
    uploadDate: '2026-10-21T11:11:44Z',
    duration: 'PT1M34S',
  },
  quizIA: {
    id: '3BrNw0PtGG0',
    title: "Quiz interactif : créez-le avec l'IA en 30 secondes",
    description:
      "Comment créer un quiz interactif personnalisé sur les mariés ou la personne fêtée avec AnimaJet : les invités répondent sur leur téléphone, classement en direct.",
    uploadDate: '2026-10-20T18:39:23Z',
    duration: 'PT2M2S',
  },
  bonOrdre: {
    id: 'HrUM5KOsCRA',
    title: "Le Bon Ordre : l'équipe de la mariée contre celle du marié",
    description:
      "Le Bon Ordre, jeu AnimaJet où deux équipes s'affrontent pour remettre des éléments dans le bon ordre depuis leur téléphone.",
    uploadDate: '2026-10-20T19:06:50Z',
    duration: 'PT1M31S',
  },
  matching: {
    id: 'faw02HI5RGE',
    title: 'Matching : le jeu des points communs entre invités',
    description:
      "Matching, le jeu AnimaJet qui fait découvrir aux invités leurs points communs : idéal pour briser la glace entre deux familles.",
    uploadDate: '2026-10-20T19:30:36Z',
    duration: 'PT1M31S',
  },
  animaBuzz: {
    id: 't-BOfzbmPU8',
    title: 'AnimaBuzz : les téléphones des invités deviennent des buzzers',
    description:
      "AnimaBuzz transforme le téléphone de chaque invité en buzzer pour un blind test ou un quiz de rapidité, sans application à installer.",
    uploadDate: '2026-10-20T17:46:49Z',
    duration: 'PT1M40S',
  },
  roue: {
    id: 'ZU7AAwjiczM',
    title: 'Roue de la Destinée : défis, gages et le jeu des 12 mois',
    description:
      "La Roue de la Destinée AnimaJet : une roue géante sur écran pour tirer défis et gages, et le jeu des 12 mois pour faire participer les tables.",
    uploadDate: '2026-10-19T19:00:29Z',
    duration: 'PT1M49S',
  },
  photoMystere: {
    id: 'Gb_sUuqwido',
    title: 'Photo Mystère : le jeu qui fait deviner toute la salle',
    description:
      "Photo Mystère : une photo se dévoile progressivement sur grand écran et toute la salle tente de deviner, depuis son téléphone.",
    uploadDate: '2026-10-19T18:07:46Z',
    duration: 'PT1M56S',
  },
  photosInvites: {
    id: 'k5kJHYtyolQ',
    title: 'Photos, messages et album des invités',
    description:
      "Les invités envoient photos et messages depuis leur téléphone, affichés en direct sur écran et réunis dans un album souvenir.",
    uploadDate: '2026-10-19T17:09:07Z',
    duration: 'PT1M44S',
  },
  animaBooth: {
    id: 'UYvv3wdb8o0',
    title: 'AnimaBooth : transformez une tablette en borne photo',
    description: 'AnimaBooth transforme une simple tablette en borne photo connectée aux animations AnimaJet.',
    uploadDate: '2026-10-26T18:07:01Z',
    duration: 'PT2M7S',
  },
  animaVote: {
    id: 'fbUCCRtwNz0',
    title: 'AnimaVote : le vote du public en direct sur téléphone',
    description:
      'AnimaVote : le public vote en direct depuis son téléphone et les résultats s’affichent sur grand écran.',
    uploadDate: '2026-10-27T11:57:44Z',
    duration: 'PT1M58S',
  },
} satisfies Record<string, AnimaJetVideo>;

export function videoObjectSchema(v: AnimaJetVideo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
    uploadDate: v.uploadDate,
    duration: v.duration,
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    publisher: { '@type': 'Organization', name: 'MG Events Animation' },
  };
}
