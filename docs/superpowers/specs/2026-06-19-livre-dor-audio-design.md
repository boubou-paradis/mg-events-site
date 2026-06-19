# Livre d'Or Audio — nouvelle prestation MG Events

**Date :** 2026-06-19
**Statut :** validé (questions de cadrage répondues)

## Objectif

Ajouter le **Livre d'Or Audio** au site : un téléphone rétro où les invités décrochent
le combiné et laissent un message vocal aux mariés. Souvenir audio authentique à réécouter.

## Décisions de cadrage

- **Pas d'exclusivité revendiquée** (cohérent avec la ligne AnimaJet : on ne sur-promet pas).
  Angle : prestation incluse / atout des formules, ton émotionnel.
- **Disponibilité :** inclus dans **Rêve en Blanc** (1490€) et **Conte de Fées** (1690€) ;
  **aussi en location seule à 40€**. Pas dans Éclat d'Amour.
- **Emplacement home :** section dédiée juste **après le Photobooth**.
- Image : `public/images/livre d or audio.png` → renommée `livre-dor-audio-mariage.png`.

## Lots

### Lot 0 — Image
Renommer le fichier en slug SEO sans espaces : `livre-dor-audio-mariage.png`.

### Lot 1 — Formules (`src/app/page.tsx`, fn `Formules`)
Ajouter une feature `Livre d'Or Audio` aux tableaux `features` de Rêve en Blanc et Conte de Fées.

### Lot 2 — Section home `#livre-dor-audio`
Nouvelle section après le Photobooth, style `card-dark` cohérent :
- image téléphone rétro en lightbox (`LightboxTrigger` + `Image`),
- titre accrocheur + description SEO 150-200 mots (concept / émotion / rétro-vintage / souvenir audio),
- carte « Inclus dans Rêve en Blanc & Conte de Fées »,
- carte « Location seule — 40€ » (calquée sur la carte location photobooth),
- lien « En savoir plus » → `/livre-dor-audio`,
- ajout de l'ancre `#livre-dor-audio` dans `QuickNav`.

### Lot 3 — Page SEO `/livre-dor-audio`
Page standalone (NE PAS utiliser `ClusterPageShell` qui est AnimaJet-only).
Composer avec `SiteHeader`/`SiteFooter` + `ClusterSections` (génériques) :
- `metadata` : title/description/keywords ciblant *livre d'or audio mariage, livre d'or sonore,
  livre d'or vocal, téléphone à messages mariage, audio guestbook, livre d'or original mariage*,
  `alternates.canonical`, openGraph.
- Hero (h1 + sous-titre + image + CTA devis/téléphone) + breadcrumb Accueil → Livre d'Or Audio.
- Sections : « Le concept » (Prose), « Comment ça se passe » (Steps 3 étapes),
  « Pourquoi c'est inoubliable » (Prose + CheckList), bloc « Inclus / location 40€ ».
- FAQ 5-6 questions + schémas `Service`, `FAQPage`, `BreadcrumbList`.
- CTA final devis + retour formules.

### Lot 4 — Maillage & sitemap
- `src/app/sitemap.ts` : ajouter `/livre-dor-audio` (priority ~0.8, lastModified 2026-06-19).
- Lien footer home + lien depuis la section Photobooth si pertinent.

## Vérification
- `next build` passe, page prérendue statique.
- Aucune revendication d'exclusivité dans les textes ajoutés.
