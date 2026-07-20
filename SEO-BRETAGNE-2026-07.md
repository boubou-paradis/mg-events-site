# Chantier SEO — Cannibalisation « DJ mariage Bretagne »

**Date d'intervention :** 20 juillet 2026
**Périmètre :** clarification des intentions entre la landing commerciale et l'article de blog.
**Décision stratégique :** aucune fusion, aucune 301, aucun canonical croisé, aucune suppression.

---

## 1. Diagnostic initial

### URL concernées

| URL | Rôle visé | Rôle constaté avant intervention |
|---|---|---|
| `/dj-mariage-bretagne` | Page commerciale de référence | Marginalisée — pos. 30,9 |
| `/blog/comment-choisir-dj-mariage-bretagne` | Guide informatif | Servie par Google sur les requêtes **commerciales** |

### Données Search Console de départ (export 19 avr → 18 juil 2026)

| Page | Impressions | Clics | Position |
|---|---:|---:|---:|
| `/blog/comment-choisir-dj-mariage-bretagne` | 521 | 0 | 26,0 |
| `/dj-mariage-bretagne` | 85 | 0 | 30,9 |

| Requête | Impressions | Clics | Position |
|---|---:|---:|---:|
| dj mariage bretagne | 732 | 0 | 21,4 |
| dj bretagne mariage | 209 | 0 | 22,9 |
| dj bretagne | 170 | 0 | 19,6 |

Historique : le pilier était à ~596 impressions / position 22 début juillet. Il a **chuté à 85 impressions / position 30,9** après le renforcement de maillage du 3 juillet (commit `1757f0f`).

### Cause probable identifiée

**Sur-optimisation des ancres exactes, aggravée par le correctif du 3 juillet.**

1. Le 3 juillet, une pastille d'ancre **exacte** « DJ Mariage Bretagne » a été ajoutée sur le template `/dj-mariage/[ville]` (~23 pages) **et** sur les 5 pages département — soit **~28 liens internes d'ancre strictement identique créés d'un coup**, en plus des 6 cartes de prestations et du footer sitewide. Au total : **4 variantes d'ancre seulement** pour ~65 liens entrants.
2. Le pilier s'est effondré **immédiatement après**. Le signal envoyé n'était plus « cette page fait autorité » mais « ces liens sont manipulatoires ».
3. En parallèle, l'article de blog portait **« DJ de mariage en Bretagne » dans son Title ET son H1**, et liait le pilier depuis son introduction avec l'ancre exacte `DJ mariage Bretagne`. Google disposait donc de deux pages au champ lexical quasi identique et a retenu la plus ancienne et la mieux maillée : l'article.
4. **Facteur aggravant non identifié auparavant : 4 pages** portaient « DJ Mariage Bretagne » dans leur Title — le pilier, l'article, `/zones-intervention` et `/tarifs-dj-mariage`. La dilution était plus large que le duo analysé.

### Contrôles techniques préalables (tous conformes)

- Aucune redirection ni middleware entre les deux URL (`next.config.ts` vérifié, aucun `middleware.ts` dans le projet).
- Les deux URL : HTTP 200, canonical autoréférente, `index, follow`, présentes au sitemap.
- 1 seul H1 par page, contenu rendu côté serveur (SSG), liens internes en `<a href>` crawlables — aucun bouton JS en remplacement d'un lien.

---

## 2. Modifications effectuées

### 2.1 Article — repositionnement informatif

| Élément | Avant | Après |
|---|---|---|
| **Title** | `Comment choisir son DJ de mariage en Bretagne ? Guide 2026` | `Comment choisir son DJ de mariage ? 10 critères` |
| **H1** | `Comment choisir son DJ de mariage en Bretagne ?` | `Comment choisir le bon DJ pour son mariage ?` |
| **Meta description** | `Le choix du DJ est crucial pour la réussite de votre mariage…` | `Découvrez les critères essentiels pour choisir un DJ de mariage fiable : expérience, matériel, ambiance, contrat, tarifs, avis et questions à poser.` |

- Title final rendu : `Comment choisir son DJ de mariage ? 10 critères | MG Events Animation` (68 caractères — le template de marque est ajouté par `layout.tsx`, formulation raccourcie en conséquence).
- **« Bretagne » retiré du Title, du H1, de l'alt du logo, de l'alt de l'image hero et du lien de footer.** Conservé uniquement dans le corps (section tarifs, CTA) où la mention est naturelle.
- Intro réécrite : répond immédiatement à l'intention informative, **plus aucune ancre commerciale exacte dans le premier paragraphe**.
- Ajout d'un **résumé « Les 10 critères en un coup d'œil »** (ordre identique aux sections).
- **5 nouvelles sections de fond** couvrant les intentions non traitées : animer sans être envahissant, préparation musicale, gestion des demandes des invités, coordination prestataires, contrat & assurance.
- Ajout d'une **FAQ visible (4 questions)** : questions à poser, contrat obligatoire, délai de réservation, matériel de secours.
- Sections renumérotées et retitrées pour ne plus recouper les titres de la page commerciale.

### 2.2 Article — CTA commercial haut de page

Bloc inséré juste après l'introduction et le résumé, avec les composants existants (`card-dark`, `btn-gold`, `btn-outline`) :

- Titre : *Vous recherchez directement un DJ pour votre mariage en Bretagne ?*
- Bouton principal : **Découvrir notre prestation DJ mariage Bretagne** → `/dj-mariage-bretagne` (unique usage fort de l'ancre)
- Bouton secondaire : **Vérifier la disponibilité de ma date** → `/#contact`
- CTA de bas d'article : ancre variée **Voir les formules MG Events** / **Vérifier votre date**

### 2.3 Page commerciale — renforcement

| Élément | Avant | Après |
|---|---|---|
| **Title** | `DJ Mariage Bretagne · Avis 5★ · Dès 1200€` | `DJ Mariage Bretagne – Animation, tarifs et devis` |
| **H1** | `DJ Mariage en Bretagne` | `DJ mariage en Bretagne` |
| **Sous-titre** | `Animation élégante sur mesure dans les 5 départements…` | `25 ans d'expérience, des formules de 1 200 € à 1 690 € et des animations exclusives pour votre mariage en Bretagne.` |
| **Meta description** | `DJ mariage en Bretagne — Avis 5★, formules transparentes dès 1200€ TTC…` | `DJ de mariage en Bretagne avec 25 ans d'expérience. Découvrez nos formules, animations, tarifs et demandez la disponibilité de votre date.` |

Bloc de réassurance ajouté au-dessus de la ligne de flottaison, **uniquement avec des données réelles du projet** : 45 avis 5/5 (valeur du `layout.tsx`), les 5 départements réellement couverts, « Depuis 1999 ».
CTA hero enrichis : **Vérifier la disponibilité de ma date** + **Voir les formules et tarifs** (`/tarifs-dj-mariage`) + téléphone.

### 2.4 Corrections géographiques

Le site ne contient **aucune donnée** sur les Côtes-d'Armor (0 ville dans `cities.ts`, 0 page, 0 mention). La couverture réelle est : **35, 29, 56** (région Bretagne) + **44, 53** (limitrophes).

- Section restructurée en deux groupes explicites : **« Région Bretagne »** (Ille-et-Vilaine, Finistère, Morbihan) et **« Bretagne historique et départements limitrophes »** (Loire-Atlantique, Mayenne).
- Titre de section : « Nos zones d'intervention **en Bretagne** » → « Nos zones d'intervention **pour les mariages** ».
- Hero : « se déplace dans **toute la Bretagne** » → « intervient **principalement** en Ille-et-Vilaine, dans le Morbihan, le Finistère, la Loire-Atlantique et la Mayenne — et selon le projet dans les autres départements bretons ».
- FAQ « Intervenez-vous dans toute la Bretagne ? » → « Dans quels départements intervenez-vous ? », réponse honnête mentionnant que les Côtes-d'Armor sont étudiées au cas par cas.
- Même correction appliquée à `/zones-intervention`.
- **Aucun département n'est revendiqué sans donnée dans le projet.**

### 2.4 bis — Frais de déplacement : correction d'une information commerciale fausse

**Signalé par le client en cours de chantier.** Condition réelle :
**déplacement inclus jusqu'à 100 km aller-retour au départ de Redon (35), puis 0,66 €/km.**

Le site affirmait au contraire, à **15 endroits** :
- « **Aucun frais de déplacement dans un rayon de 150 km** » (pilier Bretagne, zones-intervention) ;
- « **Aucun frais de déplacement** dans tout le Finistère / le Morbihan / l'Ille-et-Vilaine / la Mayenne / la Cornouaille » (6 pages) ;
- « nous couvrons tout le département **sans frais supplémentaire** » (7 FAQ départementales) ;
- « Ces tarifs **incluent le déplacement dans tout le département** » (5 FAQ prix) ;
- « **Aucun frais de déplacement supplémentaire** pour {ville} » (template ville → ~23 pages) ;
- Vannes et Laval dans `cities.ts` : « sans frais de déplacement supplémentaire ».

100 km aller-retour correspond à un rayon d'environ **50 km autour de Redon**. Rennes (~65 km), Nantes (~65 km), Vannes (~55 km) et *a fortiori* Brest, Quimper ou Laval sont **tous au-delà**. La quasi-totalité des pages locales promettait donc la gratuité d'un déplacement en réalité facturé.

**Toutes les occurrences ont été remplacées** par la formulation exacte :
> *Le déplacement est inclus jusqu'à 100 km aller-retour au départ de Redon (35) ; au-delà, 0,66 € du kilomètre, toujours indiqué sur le devis.*

Vérifié sur le HTML rendu : **0 occurrence restante** des trois formulations fausses, mention correcte présente sur le pilier, `/zones-intervention`, `/tarifs-dj-mariage`, les pages département et le template ville.

> ⚠️ Enjeu au-delà du SEO : une promesse de gratuité non tenue est un argument commercial trompeur, susceptible d'être opposé par un client au moment du devis.

### 2.5 Données structurées

| Page | Modification |
|---|---|
| `/dj-mariage-bretagne` | **`reviewCount` 52 → 45** (incohérence : le `layout.tsx` et 6 autres pages déclarent 45). Ajout d'un **`BreadcrumbList`** (absent). `LocalBusiness` conservé avec son `@id` page-spécifique (règle du 29 juin respectée). `FAQPage` conservé — les 6 Q/R sont bien visibles. |
| `/blog/comment-choisir…` | **Aucun JSON-LD n'existait.** Ajout de `BlogPosting` (headline, description, image, `datePublished` 2026-01-15, `dateModified` 2026-07-20, author `Person` Guillaume, publisher `Organization` + logo, `mainEntityOfPage`), `BreadcrumbList` et `FAQPage` — ce dernier adossé à une FAQ **réellement visible**. |

Anomalie restante connue : `reviewCount: '47'` sur `/dj-mariage-quimper` et `/dj-morlaix` (voir § validation humaine).

### 2.6 Maillage interne — diversification des ancres

Le nombre d'ancres distinctes vers `/dj-mariage-bretagne` passe de **4 à 19** (mesuré sur le HTML rendu de 97 pages) :

| Fichier | Ancre avant | Ancre après |
|---|---|---|
| `dj-mariage/[ville]/page.tsx` (~23 pages) | DJ Mariage Bretagne | Nos prestations en Bretagne |
| `dj-mariage-finistere` | DJ Mariage Bretagne | DJ de mariage en Bretagne |
| `dj-mariage-morbihan` | DJ Mariage Bretagne | Animation de mariage en Bretagne |
| `dj-mariage-ille-et-vilaine` | DJ Mariage Bretagne | Toute notre zone bretonne |
| `dj-mariage-loire-atlantique` | DJ Mariage Bretagne | Nos prestations en Bretagne |
| `dj-mariage-mayenne` | DJ Mariage Bretagne | Découvrir les formules mariage |
| `dj-mariage-quimper` | DJ Mariage Bretagne | Organiser l'ambiance de votre mariage |
| `etincelles-froides-mariage` | DJ mariage Bretagne | DJ de mariage en Bretagne |
| `photobooth-mariage` | DJ mariage Bretagne | Notre prestation DJ pour votre mariage |
| `sonorisation-ceremonie-laique` | DJ mariage Bretagne | Animation de mariage en Bretagne |
| `fumee-lourde-mariage` | DJ mariage Bretagne | Découvrir les formules mariage |
| `tarifs-dj-mariage` | DJ mariage Bretagne | MG Events Animation en Bretagne |
| `dj-anniversaire-bretagne` | DJ mariage Bretagne | Consulter les prestations DJ mariage |
| `lieux-reception-bretagne` (×2) | DJ Mariage Bretagne | DJ de mariage en Bretagne / Retour à nos prestations mariage |
| `page.tsx` (accueil) | DJ Mariage Bretagne → | Notre prestation DJ pour votre mariage → |
| `SiteFooter.tsx` (sitewide) | DJ mariage Bretagne | DJ mariage en Bretagne |

**Lien contextuel ajouté du pilier vers l'article** (ancre informative, jamais commerciale) :
*« Consultez notre guide pour bien choisir votre DJ »*. La carte blog du pilier passe de « Comment choisir son DJ mariage en Bretagne ? » à « Les critères pour choisir son DJ de mariage » (idem sur `/dj-mariage/[ville]` et `/dj-mariage-ille-et-vilaine`).

### 2.7 Pages connexes

- **`/zones-intervention`** — Title `Zones d'intervention DJ Mariage Bretagne` → `Zones d'intervention : où nous nous déplaçons` (sort de la collision). Intro réécrite sur l'intention « déplacement » : zone réelle, rayon de 150 km sans frais depuis Bains-sur-Oust, étude au cas par cas au-delà. 3 CTA ajoutés vers le pilier, les tarifs et le devis.
- **`/tarifs-dj-mariage`** — Title `Tarif DJ Mariage Bretagne | …` → `Tarif DJ mariage : prix, formules et devis gratuit`. Seul changement : suppression de la collision exacte. H1, contenu, prix et structure inchangés (page récente, on laisse Google la traiter). **Prix vérifiés cohérents sur tout le site** : 1200 / 1490 / 1690 € (le 1600 € relevé concerne les formules entreprise, contexte distinct).

---

## 3. Fichiers modifiés

```
src/app/blog/comment-choisir-dj-mariage-bretagne/page.tsx   (repositionnement complet + JSON-LD)
src/app/dj-mariage-bretagne/page.tsx                        (métadonnées, hero, géo, schémas, maillage)
src/app/zones-intervention/page.tsx                         (title, intro, CTA)
src/app/tarifs-dj-mariage/page.tsx                          (title, ancre)
src/app/dj-mariage/[ville]/page.tsx                         (ancres)
src/app/dj-mariage-finistere/page.tsx                       (ancre)
src/app/dj-mariage-morbihan/page.tsx                        (ancre)
src/app/dj-mariage-ille-et-vilaine/page.tsx                 (ancres)
src/app/dj-mariage-loire-atlantique/page.tsx                (ancre)
src/app/dj-mariage-mayenne/page.tsx                         (ancre)
src/app/dj-mariage-quimper/page.tsx                         (ancre)
src/app/dj-anniversaire-bretagne/page.tsx                   (ancre)
src/app/etincelles-froides-mariage/page.tsx                 (ancre)
src/app/fumee-lourde-mariage/page.tsx                       (ancre)
src/app/photobooth-mariage/page.tsx                         (ancre)
src/app/sonorisation-ceremonie-laique/page.tsx              (ancre)
src/app/lieux-reception-bretagne/page.tsx                   (ancres)
src/app/blog/page.tsx                                       (titre + extrait de l'article)
src/app/page.tsx                                            (ancre accueil)
src/components/SiteFooter.tsx                               (ancre sitewide)
src/app/sitemap.ts                                          (lastModified des 4 pages touchées)
```

---

## 4. Contrôles techniques exécutés

| Contrôle | Résultat |
|---|---|
| `npx tsc --noEmit` | OK |
| `npx eslint` (fichiers modifiés) | 0 problème |
| `npm run build` | Compiled successfully |
| Aucun test automatisé dans le projet | `package.json` ne définit pas de script `test` |
| Les 2 URL en 200 | OK |
| Canonical autoréférentes | OK sur les deux |
| Aucune 301 entre les deux pages | Vérifié (`next.config.ts`, aucun middleware) |
| Aucune redirection en chaîne créée | Vérifié |
| Titles différents | OK |
| H1 différents, 1 seul par page | OK |
| Meta descriptions différentes | OK |
| Pages indexables (`noindex` absent) | OK |
| JSON-LD présents et cohérents avec le visible | OK |
| Liens `<a href>` crawlables entre les 2 pages | 2 dans chaque sens |
| Ancres distinctes vers le pilier | 4 → **19** |
| Contraste badge feu d'artifice | 7,05:1 (or/marine), 17,06:1 (blanc/marine) — AAA |

---

## 5. Éléments volontairement NON modifiés

| Élément | Raison |
|---|---|
| URL des deux pages | Interdit par le brief — SEO acquis préservé |
| Redirection / fusion / canonical croisé | Décision stratégique : on observe d'abord l'effet de la clarification |
| Template Title de `/dj-mariage/[ville]` | Voir § Laval — le corriger dégraderait Rennes |
| Message du badge `/feu-artifice-jour` | Validé le matin même ; les contrôles de l'étape 13 sont tous passés |
| Page « DJ Fouesnant » | Politique anti-doorway respectée — **aucune page créée** |
| `reviewCount: '47'` (Quimper, Morlaix) | Hors périmètre du chantier Bretagne — signalé pour validation |
| Structure et design | Composants existants réutilisés, aucun nouveau composant |

---

## 6. Points nécessitant une validation humaine

0. **Frais de déplacement** — la règle appliquée (100 km aller-retour inclus au départ de Redon, puis 0,66 €/km) a été communiquée oralement. **À vérifier qu'elle correspond bien aux CGV et aux devis émis**, et à reporter dans `/cgv` si ce n'est pas déjà le cas. Point à confirmer : les 100 km se comptent-ils bien **aller-retour** (soit ~50 km de rayon) ?
1. **Côtes-d'Armor (22)** — le département n'apparaît nulle part dans le projet. La page indique désormais une étude « au cas par cas ». **À confirmer : MG Events intervient-il réellement dans le 22 ?** Si oui, il faudra du contenu réel (villes, lieux) avant de l'annoncer.
2. **Nombre d'avis** — `reviewCount` valait 52 sur le pilier, 45 dans le `layout.tsx` et sur 6 pages, 47 sur Quimper et Morlaix. J'ai aligné le pilier sur 45. **Quel est le nombre réel d'avis ?** Toutes les pages doivent porter la même valeur.
3. **« dj laval » (492 imp., 13,9 → 15,3)** — aucune erreur technique : redirect `308` en un seul saut, page en 200, canonical autoréférente, maillage intact. La cause probable est le changement de Title du template ville le 3 juillet (`DJ Mariage X` → `DJ & Animation Mariage X`) qui a éloigné la proximité « DJ Laval ». **Le corriger profiterait à Laval mais dégraderait Rennes**, qui a gagné grâce à ce même changement. Décision à arbitrer.
4. **« dj fouesnant » (106 imp., aucune page)** — Fouesnant est en Finistère Sud, proche de Concarneau qui a une page. Aucune mention n'a été ajoutée : à faire uniquement si MG Events y intervient réellement et avec un contenu qui apporte une information vraie.
5. **Badge `/feu-artifice-jour` sur mobile** — le badge reste sous la ligne de flottaison (le hero empile la photo après le texte). C'est l'encart texte qui porte le message en premier écran.

---

## 7. Tableau de suivi — à remplir au prochain export GSC

| Requête | URL positionnée | Impressions | Clics | CTR | Position |
| --- | --- | ---: | ---: | ---: | ---: |
| dj mariage bretagne | | | | | |
| dj bretagne mariage | | | | | |
| dj bretagne | | | | | |
| comment choisir dj mariage | | | | | |
| choisir DJ mariage | | | | | |
| dj laval | | | | | |
| dj fouesnant | | | | | |

**Référence de départ (19 avr → 18 juil 2026) :** dj mariage bretagne 732/0/21,4 · dj bretagne mariage 209/0/22,9 · dj bretagne 170/0/19,6 · dj laval 492/0/15,3 · dj fouesnant 106/0/16,6.

### Indicateurs à surveiller en priorité

1. **Quelle URL Google affiche sur « dj mariage bretagne »** — c'est le seul vrai juge de paix. Objectif : bascule de l'article vers `/dj-mariage-bretagne`.
2. Impressions de `/dj-mariage-bretagne` : remontée attendue vers 500+ (elles étaient à 596 avant le 3 juillet).
3. Apparition de l'article sur les requêtes informatives (« comment choisir dj mariage », « questions à poser DJ ») — signe que le repositionnement a pris.
4. Position moyenne du cluster Bretagne : passage sous la barre des 20 (entrée en page 2 haute).
5. Premier clic sur ces requêtes — actuellement 0 sur plus de 1 100 impressions.

---

## 8. Critères de décision pour une fusion ultérieure

**Ne rien décider avant 6 à 8 semaines** de données post-intervention (soit **vers mi-septembre 2026**), le temps que Google recrawle et réévalue les deux pages.

Envisager la fusion **uniquement si les trois conditions suivantes sont réunies** :

1. Google continue à positionner **l'article** sur « dj mariage bretagne » malgré la séparation des intentions.
2. Le pilier **ne remonte pas** au-dessus de la position 20.
3. L'article **n'a pas décollé** sur les requêtes informatives — c'est-à-dire que la clarification n'a créé aucune valeur nouvelle.

Si une seule de ces conditions n'est pas remplie, **conserver les deux URL**.

**Direction retenue en cas de fusion :**
- conserver `/dj-mariage-bretagne` ;
- y intégrer les meilleurs passages informatifs de l'article ;
- rediriger l'article en 301 vers la page commerciale.

**Cette redirection ne doit pas être mise en place maintenant.**
