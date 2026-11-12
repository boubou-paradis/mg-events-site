// Détection de liens dans les champs libres du formulaire de devis.
// Les bots de spam glissent systématiquement une URL dans le message ;
// un vrai client n'a aucune raison d'en mettre une.
//
// Motifs détectés :
//   - http:// ou https://
//   - www.
//   - un domaine suivi d'un chemin : site.online/page, exemple.fr/offre
//
// Ne matche PAS : les dates (12/06/2027 : pas de TLD alphabétique), les prix
// (1 200 €), les emails sans chemin (nom@domaine.fr : précédé d'un @), ni les
// adresses postales (12 rue de la Paix).
const LINK_PATTERNS: RegExp[] = [
  /https?:\/\//i,
  /\bwww\./i,
  // domaine.tld/chemin — le domaine doit être en début de chaîne ou précédé
  // d'un espace / d'une ponctuation ouvrante (jamais d'un @ → emails exclus)
  /(?:^|[\s(<[«"'])[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}\/\S/i,
];

export function containsLink(value: string | undefined | null): boolean {
  if (!value) return false;
  return LINK_PATTERNS.some((pattern) => pattern.test(value));
}

// Retourne le nom du premier champ contenant un lien, ou null si tout est propre
export function findFieldWithLink(fields: Record<string, string | undefined | null>): string | null {
  for (const [name, value] of Object.entries(fields)) {
    if (containsLink(value)) return name;
  }
  return null;
}

export const LINK_REJECTED_MESSAGE =
  'Les liens ne sont pas acceptés dans le formulaire. Merci de les retirer puis de renvoyer votre demande.';
