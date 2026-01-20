import { MetadataRoute } from 'next'
import { cities } from '@/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mg-events35.com'
  const today = new Date().toISOString().split('T')[0]

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
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/comment-choisir-dj-mariage-bretagne`,
      lastModified: today,
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

  // Pages dynamiques soirée entreprise (villes avec forEnterprise: true)
  const entreprisePages: MetadataRoute.Sitemap = cities
    .filter((city) => city.forEnterprise)
    .map((city) => ({
      url: `${baseUrl}/dj-soiree-entreprise/${city.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  // Pages dynamiques anniversaire (villes avec forBirthday: true)
  const anniversairePages: MetadataRoute.Sitemap = cities
    .filter((city) => city.forBirthday)
    .map((city) => ({
      url: `${baseUrl}/animation-anniversaire/${city.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticPages, ...djMariagePages, ...entreprisePages, ...anniversairePages]
}
