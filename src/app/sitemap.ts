import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'
import { allClusterPages } from '@/data/animajet'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mg-events35.com'
  // Date de dernière mise à jour réelle du contenu — à actualiser manuellement
  // lors d'un ajout ou d'une refonte de page (ne pas remettre new Date() :
  // une date qui change à chaque build fait perdre toute valeur au lastmod).
  const today = '2026-07-03'

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // Pages département DJ mariage
    {
      url: `${baseUrl}/dj-mariage-ille-et-vilaine`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dj-mariage-morbihan`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dj-mariage-finistere`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dj-mariage-loire-atlantique`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dj-mariage-mayenne`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Pages régionales et locales (fort potentiel SEO)
    {
      url: `${baseUrl}/dj-mariage-bretagne`,
      lastModified: '2026-07-20',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lieux-reception-bretagne`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dj-morlaix`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/dj-mariage-quimper`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Prestation Livre d'Or Audio
    {
      url: `${baseUrl}/livre-dor-audio`,
      lastModified: '2026-06-19',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Prestation Feu d'Artifice de Jour (poudre Holi)
    {
      url: `${baseUrl}/feu-artifice-jour`,
      lastModified: '2026-07-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Page tarifs (forte intention commerciale)
    {
      url: `${baseUrl}/tarifs-dj-mariage`,
      lastModified: '2026-07-20',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Pages prestations
    {
      url: `${baseUrl}/photobooth-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/sonorisation-ceremonie-laique`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fumee-lourde-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/etincelles-froides-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dj-soiree-entreprise`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/dj-anniversaire-bretagne`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Page zones d'intervention
    {
      url: `${baseUrl}/zones-intervention`,
      lastModified: '2026-07-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog — nouveaux articles juillet 2026
    {
      url: `${baseUrl}/blog/prix-dj-mariage-bretagne`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/questions-a-poser-dj-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/planning-soiree-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/animation-repas-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/playlist-mariage-toutes-generations`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/erreurs-animation-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/dj-ou-playlist-spotify-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/musique-vin-honneur`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog
    {
      url: `${baseUrl}/blog/feu-artifice-jour-mariage-poudre-holi`,
      lastModified: '2026-07-20',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/photobooth-vintage-mariage-bretagne`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/comment-choisir-dj-mariage-bretagne`,
      lastModified: '2026-07-20',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ouverture-de-bal-conseils`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/etincelles-froides-mariage-securite`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/animations-mariage-originales-2026`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/top-salles-mariage-ille-et-vilaine`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Nouveaux articles blog — cluster AnimaJet
    {
      url: `${baseUrl}/blog/animations-interactives-revolution-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/idees-animation-mariage-originale-2026`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/occuper-invites-cocktail-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/quiz-ou-blind-test-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/album-photo-collaboratif-mariage`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Page philosophie
    {
      url: `${baseUrl}/philosophie`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Pages légales
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Pages dynamiques DJ mariage par ville (toutes les villes)
  const djMariagePages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/dj-mariage/${city.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Pages entreprise et anniversaire VOLONTAIREMENT exclues du sitemap :
  // elles sont en noindex (contenu quasi-dupliqué d'une ville à l'autre).
  // À réintégrer ici une fois dotées d'un contenu local unique par ville.

  // Cluster AnimaJet (pilier + pages satellites)
  const clusterPages: MetadataRoute.Sitemap = allClusterPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }))

  return [...staticPages, ...clusterPages, ...djMariagePages]
}
