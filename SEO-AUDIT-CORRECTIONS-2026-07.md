# Audit & corrections SEO chirurgicales — Juillet 2026

Branche : `seo/optim-chirurgicale-2026-07`
Périmètre : optimisation prudente, sans refonte. Aucun changement de design, formulaire, tracking, tarif ou coordonnée.

---

## 1. Résumé des problèmes trouvés

| # | Problème | Statut |
|---|----------|--------|
| 1 | **Cannibalisation Morlaix** : `/dj-morlaix` (page autonome riche) + `/dj-mariage/morlaix` (route dynamique) ciblaient la même intention. | ✅ Corrigé |
| 2 | **Cannibalisation Quimper** : `/dj-mariage-quimper` (page autonome) + `/dj-mariage/quimper` (route dynamique) — schéma identique à Morlaix. | ✅ Corrigé (extension raisonnée, voir §5) |
| 3 | **Accueil vs `/dj-mariage-bretagne`** | ✅ Déjà résolu avant cette mission (commit `c34e4d3`) — aucune action |
| 4 | **Canonical / UTM sur l'accueil** | ✅ Déjà correct — aucune action |
| 5 | **CTR faible pages fort volume** (Rennes, Morlaix, Quimper…) | ✅ Titles préservés/renforcés + maillage |
| 6 | **Article ouverture de bal** : page 1, CTR faible | ✅ Title + meta + maillage |

---

## 2. État AVANT / APRÈS

### Cannibalisation Morlaix
- **Avant** : deux pages indexables, deux canonical auto-référentes distinctes, deux `LocalBusiness` avec `@id` différents, `/dj-morlaix` présente au sitemap (priority 0.85). La requête « dj morlaix » était captée par le title autonome `DJ Morlaix · Mariage & Soirée…`.
- **Après** : `/dj-morlaix` → **308 permanent** → `/dj-mariage/morlaix` (saut unique, query string préservée). Contenu local unique migré dans `cities.ts`. Title `DJ Morlaix · Mariage & Soirée · Avis 5★ · Dès 1200€` **conservé** sur la page cible via un override (`metaTitle`) → aucune perte du signal « dj morlaix ». Retirée du sitemap.

### Cannibalisation Quimper
- **Avant** : `/dj-mariage-quimper` (≈250 impressions, pos. ~15) + `/dj-mariage/quimper` indexables en parallèle. Title autonome `DJ Quimper · Mariage & Soirée…`.
- **Après** : `/dj-mariage-quimper` → **308 permanent** → `/dj-mariage/quimper` (saut unique). Contenu migré. Title `DJ Quimper · Mariage & Soirée…` conservé via override. Retirée du sitemap.

---

## 3. URL concernées

| Ancienne URL | Nouvelle URL (cible 301/308) | HTTP vérifié |
|---|---|---|
| `/dj-morlaix` | `/dj-mariage/morlaix` | 308 → 200 (1 saut) |
| `/dj-mariage-quimper` | `/dj-mariage/quimper` | 308 → 200 (1 saut) |

> **Note 308 vs 301** : Next.js émet un **308 (Permanent Redirect)** pour `permanent: true`. Google le traite **exactement comme un 301** pour la consolidation d'autorité. C'est le pattern déjà en place pour `/dj-mariage-rennes` et `/dj-mariage-laval` — cohérence conservée.

---

## 4. Fichiers modifiés

| Fichier | Nature |
|---|---|
| `src/data/cities.ts` | Interface `City` + `metaTitle?`/`metaDescription?` ; enrichissement des fiches **morlaix** et **quimper** (communes, lieux, témoignages, paragraphe local) |
| `src/app/dj-mariage/[ville]/page.tsx` | `generateMetadata` utilise les overrides `metaTitle`/`metaDescription` s'ils existent (fallback = template) |
| `next.config.ts` | +2 redirections permanentes (Morlaix, Quimper) |
| `src/app/sitemap.ts` | Retrait des 2 anciennes URLs |
| `src/app/page.tsx` | Footer : liens Morlaix/Quimper repointés vers la route dynamique |
| `src/app/zones-intervention/page.tsx` | 2 liens repointés |
| `src/app/lieux-reception-bretagne/page.tsx` | 1 lien repointé |
| `src/app/blog/ouverture-de-bal-conseils/page.tsx` | Title + meta + 2 liens contextuels (fumée lourde, étincelles froides) |
| `src/app/blog/top-salles-mariage-ille-et-vilaine/page.tsx` | 1 lien contextuel vers `/dj-mariage/rennes` |
| **Supprimés** | `src/app/dj-morlaix/page.tsx`, `src/app/dj-mariage-quimper/page.tsx` |

---

## 5. Détail & raison SEO de chaque modification

### Consolidation Morlaix (priorité #1, explicite)
- Migration dans `cities.ts` (fiche `morlaix`) : +4 communes (Roscoff, Saint-Pol-de-Léon, Carantec, Landivisiau), +3 lieux (Manoir de Kerlut, Domaine de Keridreuff, Ferme de Kerguélen), +2 témoignages déjà présents sur la page autonome, +1 paragraphe `seoDescription` sur l'ancrage discothèques Finistère.
- **Raison** : ne pas perdre le contenu local unique en supprimant la page ; concentrer les signaux sur une seule URL ; supprimer un signal contradictoire pour Google.

### Consolidation Quimper (extension raisonnée)
- **Décision** : le brief flaggait l'ambiguïté de l'URL canonique de Quimper sans instruire explicitement la consolidation. Preuve technique retenue pour agir : (1) cannibalisation strictement identique à Morlaix (2 pages auto-canonical sur la même intention) ; (2) **règle projet établie « 1 ville = 1 URL `/dj-mariage/[ville]` »**, déjà appliquée à Rennes et Laval (pages plates redirigées) ; (3) action **100 % réversible** (1 redirection + 1 ligne sitemap).
- Migration `cities.ts` (fiche `quimper`) : +4 communes, +3 lieux (Château de Lanniron, Manoir du Stang, Domaine de Kerampensal), +2 témoignages.

### Overrides de title (`metaTitle`/`metaDescription`)
- **Raison** : le template dynamique produit « DJ & Animation Mariage {ville} » ; les pages autonomes captaient la requête courte « dj morlaix » / « dj quimper ». L'override préserve **à l'identique** le title/description performant sur la page cible → consolidation **sans perte de CTR**. Mécanisme surgical : n'affecte QUE les 2 villes concernées, template inchangé pour les 22 autres.

### Article ouverture de bal
- Title : `Ouverture de bal : 10 conseils…` → `Ouverture de bal mariage : musique, chorégraphie et effets` (ajoute « mariage » + « musique », fort volume).
- Meta : reformulée sur le **contenu réel** (musique, chorégraphie, fumée lourde, étincelles froides). Aucune promesse absente (pas de « durée idéale » ni « erreurs » — sections inexistantes).
- +2 liens contextuels internes en phrase (pas de bloc artificiel).

### Maillage Rennes
- 1 lien contextuel ajouté depuis `top-salles-mariage-ille-et-vilaine` (page géographiquement très pertinente), ancre variée « DJ mariage à Rennes ». Rennes conserve ses 3 liens existants (accueil, zones, Ille-et-Vilaine) → total raisonnable, pas de sur-optimisation.

---

## 6. Risques évités

- **Perte de la requête « dj morlaix » / « dj quimper »** lors de la consolidation → neutralisée par les overrides de title.
- **Chaîne de redirections** → vérifié : saut unique direct vers l'URL finale (200).
- **Perte de contenu local** → migré dans `cities.ts` avant suppression.
- **Faux avis / fausse note agrégée** → aucun témoignage inventé ; seuls des éléments **déjà présents** sur les pages autonomes ont été déplacés.
- **Doublon de `LocalBusiness`** → audité : le 2ᵉ nœud `LocalBusiness @ /#organization` est le `provider` (référence sans note) du `Service` global ; fusionné par Google avec l'`EntertainmentBusiness` (nœud org unique portant la note). La page cible garde son `LocalBusiness` à `@id` unique. Design validé GSC (0 erreur d'avis au 20/07). **Non modifié.**
- **Rupture template villes** → le template n'a reçu qu'un fallback `??`, aucun changement de structure.

---

## 7. Redirections ajoutées / corrigées
- `+/dj-morlaix → /dj-mariage/morlaix` (308 permanent)
- `+/dj-mariage-quimper → /dj-mariage/quimper` (308 permanent)
- Redirections existantes (Rennes, Laval, anciennes URLs) : **inchangées** (déjà permanentes, directes, cibles canoniques).

## 8. Canonicals vérifiées
- Accueil : `https://www.mg-events35.com` (absolue, propre, sans UTM) — inchangée.
- `/dj-mariage/morlaix` et `/dj-mariage/quimper` : auto-référentes, correctes (vérifié dans le HTML rendu).
- `metadataBase` global présent → URLs absolues cohérentes HTTPS/www.

## 9. Pages dont title/meta ont changé
- `/dj-mariage/morlaix` (title/description via override — équivalents à l'ancienne page autonome).
- `/dj-mariage/quimper` (idem).
- `/blog/ouverture-de-bal-conseils` (title + meta).

## 10. Liens internes ajoutés
- `top-salles-mariage-ille-et-vilaine` → `/dj-mariage/rennes` (contextuel).
- `ouverture-de-bal-conseils` → `/fumee-lourde-mariage` et `/etincelles-froides-mariage` (contextuels).
- 3 liens repointés (Morlaix/Quimper) : accueil, zones-intervention, lieux-reception-bretagne.

## 11. Données structurées modifiées
- Aucune modification directe de schéma. Les schémas des pages cibles sont générés par le template (déjà valides). Les `review` migrés enrichissent le `LocalBusiness` page-spécifique (note agrégée inchangée : reviewCount 45, aligné sur le nœud org global).

---

## 12–14. Résultats de validation

- **Lint** (`npm run lint`) : **0 erreur**, 19 warnings — **tous préexistants** (imports inutilisés : `Check`, `cities`, `pointsForts`, `MapPin`, `ChevronDown`…). Aucun warning introduit par cette mission.
- **Typecheck** (`npx tsc --noEmit`) : **OK** (après régénération de `.next`). L'erreur initiale (`validator.ts` référençant les pages supprimées) était un artefact `.next` périmé, disparu au build.
- **Tests** : aucun script de test dans le projet (`package.json` n'en définit pas).
- **Build** (`npm run build`) : **succès**. Routes `/dj-morlaix` et `/dj-mariage-quimper` absentes du build ; 23 pages villes SSG générées.

### Vérifications runtime (serveur prod local)
| Contrôle | Résultat |
|---|---|
| `/dj-morlaix` | 308 → `/dj-mariage/morlaix` |
| `/dj-mariage-quimper` | 308 → `/dj-mariage/quimper` |
| Cible morlaix / quimper | 200 / 200 |
| Saut unique (pas de chaîne) | ✅ |
| Query string préservée (`?utm_source=gbp`) | ✅ conservée |
| Sitemap contient anciennes URLs | ❌ non (nettoyé) |
| Sitemap contient `dj-mariage/morlaix` + `dj-mariage/quimper` | ✅ |
| Title override rendu | ✅ « DJ Morlaix · … » / « DJ Quimper · … » |
| Canonical auto-référente cible | ✅ |

---

## 15. Éléments nécessitant une intervention humaine (Search Console, après déploiement)
1. Tester les redirections en prod : `curl -I https://www.mg-events35.com/dj-morlaix` et `/dj-mariage-quimper` (attendu 308 → cible).
2. **Inspection d'URL** GSC pour `/dj-mariage/morlaix` et `/dj-mariage/quimper` → **Demander l'indexation**.
3. Surveiller la disparition progressive de `/dj-morlaix` et `/dj-mariage-quimper` de l'index.
4. Re-soumettre le sitemap (`https://www.mg-events35.com/sitemap.xml`).
5. `npm run indexnow` (Bing/Copilot) après déploiement.
6. Surveiller les requêtes « dj morlaix », « dj quimper », « dj mariage rennes » sur 28 jours (consolidation des impressions sur les URLs uniques).
7. Vérifier que l'accueil et `/dj-mariage-bretagne` ne s'échangent plus les requêtes régionales.
8. Correctif hors-code connu : redirect apex `https://mg-events35.com → www` en **307** (au lieu de 308) — à régler dans Vercel → Domains.

## 16. Recommandations volontairement NON appliquées
- **Pas de nouvelle page ville** (Dinan, Saint-Brieuc, Fouesnant « dj fouesnant » 79 imp…) : exigerait des lieux réels vérifiés (politique anti-doorway).
- **Pas de refonte des titles de villes/départements** déjà au format CTR (`· Avis 5★ · Dès 1200€`) : ils progressent, risque > bénéfice.
- **Pas de modification** des pages AnimaJet, `/feu-artifice-jour`, `/dj-mariage-bretagne` (déjà différenciée), robots.txt (correct), canonical accueil (correcte).
- **Éléments locaux à fournir par le propriétaire** pour renforcer l'E-E-A-T sans invention : photos réelles de mariages géolocalisées (Morlaix, Quimper, Rennes), noms de salles réellement desservies non encore listées, témoignages vérifiables supplémentaires, backlinks de salles/traiteurs partenaires.

## 17. Commandes de vérification post-déploiement
```bash
curl -I https://www.mg-events35.com/dj-morlaix              # attendu : 308 -> /dj-mariage/morlaix
curl -I https://www.mg-events35.com/dj-mariage-quimper      # attendu : 308 -> /dj-mariage/quimper
curl -s https://www.mg-events35.com/dj-mariage/morlaix | grep -i '<title>'    # DJ Morlaix · …
curl -s https://www.mg-events35.com/sitemap.xml | grep -E 'dj-morlaix|dj-mariage-quimper'   # attendu : vide
npm run indexnow
```

---

## 18. Vérifications POST-DÉPLOIEMENT PRODUCTION — 21 juillet 2026

PR #1 mergée dans `main` (commit `4adfbf2`) → déploiement Vercel production. Contrôles exécutés sur `https://www.mg-events35.com` une fois le déploiement live.

> Note : la **preview Vercel** de la PR était protégée par *Deployment Protection (Authentication SSO)* → inaccessible en anonyme. Les contrôles ont donc été faits directement sur la **production publique** (identique, même commit).

| Contrôle | Attendu | Résultat |
|---|---|---|
| `/dj-morlaix` | 308 → `/dj-mariage/morlaix` | ✅ 308, loc = `/dj-mariage/morlaix` |
| `/dj-mariage-quimper` | 308 → `/dj-mariage/quimper` | ✅ 308, loc = `/dj-mariage/quimper` |
| Saut unique (pas de chaîne/boucle) | 1 hop | ✅ `hops=1` pour les deux |
| Cibles finales | 200 | ✅ 200 / 200 |
| Query string préservée | conservée | ✅ `?utm_source=google&utm_medium=wix_google_business_profile` transmis intact |
| Title Morlaix | `DJ Morlaix · …` | ✅ `DJ Morlaix · Mariage & Soirée · Avis 5★ · Dès 1200€` |
| Title Quimper | `DJ Quimper · …` | ✅ `DJ Quimper · Mariage & Soirée · Avis 5★ · Dès 1200€` |
| Canonical Morlaix / Quimper | URL finale | ✅ auto-référentes (`/dj-mariage/morlaix`, `/dj-mariage/quimper`) |
| Anciennes URL dans sitemap | absentes | ✅ absentes |
| Nouvelles URL dans sitemap | présentes | ✅ `dj-mariage/morlaix` + `dj-mariage/quimper` (1×) |
| `/blog/ouverture-de-bal-conseils` | 200 + nouveau title | ✅ 200, title « Ouverture de bal mariage : musique, chorégraphie et effets » |
| Lien Rennes (top-salles) | 1 lien, non cassé | ✅ 1 balise `<a>` visible → `/dj-mariage/rennes` (200) ; le « 2 » d'un grep brut = payload RSC Next, pas un doublon |
| Mobile / formulaires | inchangés | ✅ aucun code design/formulaire touché ; pages rendues en 200, endpoint `/api/contact` intact |

**Conclusion : déploiement production validé, toutes les redirections et métadonnées conformes.**

### Reste à faire (manuel, quand tu le décides)
- GSC : Inspection d'URL + réindexation de `/dj-mariage/morlaix` et `/dj-mariage/quimper`.
- Re-soumettre le sitemap dans GSC.
- `npm run indexnow` (Bing/Copilot).
- Surveiller sur 28 j la consolidation des requêtes « dj morlaix » / « dj quimper » / « dj mariage rennes ».
