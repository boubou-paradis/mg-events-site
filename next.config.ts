import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formats modernes pour une meilleure compression
    formats: ['image/avif', 'image/webp'],
    // Tailles d'images optimisées pour le responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        // Applique les headers de sécurité à toutes les routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https:; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirection des anciens formats de sitemap vers le nouveau
      {
        source: '/pages-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/post-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      // Consolidation SEO juillet 2026 : pages doublons fusionnées vers les
      // pages villes dynamiques (Google positionnait les deux versions)
      {
        source: '/dj-mariage-rennes',
        destination: '/dj-mariage/rennes',
        permanent: true,
      },
      {
        source: '/dj-mariage-laval',
        destination: '/dj-mariage/laval',
        permanent: true,
      },
      // Consolidation SEO juillet 2026 (2e vague) : pages villes autonomes fusionnées
      // vers la route dynamique unique /dj-mariage/[ville] (règle "1 ville = 1 URL",
      // déjà appliquée à Rennes/Laval). Contenu unique migré dans src/data/cities.ts.
      {
        source: '/dj-morlaix',
        destination: '/dj-mariage/morlaix',
        permanent: true,
      },
      {
        source: '/dj-mariage-quimper',
        destination: '/dj-mariage/quimper',
        permanent: true,
      },
      // Redirections anciennes URLs (ancien site) vers pages actuelles
      {
        source: '/services',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/politique-de-confidentialit%C3%A9',
        destination: '/confidentialite',
        permanent: true,
      },
      {
        source: '/politique-de-cookies',
        destination: '/confidentialite',
        permanent: true,
      },
      {
        source: '/mentions-l%C3%A9gales',
        destination: '/mentions-legales',
        permanent: true,
      },
      {
        source: '/nous-contacter',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/notre-mission',
        destination: '/philosophie',
        permanent: true,
      },
      {
        source: '/termes-et-conditions',
        destination: '/cgv',
        permanent: true,
      },
      {
        source: '/book-online',
        destination: '/#contact',
        permanent: true,
      },
      // Recentrage géographique juillet 2026 : Finistère (29) et Mayenne (53)
      // retirés définitivement de la zone d'intervention (trop éloignés de
      // Redon, demandes non viables logistiquement). Redirection propre vers
      // zones-intervention plutôt que 404 — ne pas recréer ces pages.
      {
        source: '/dj-mariage-finistere',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage-mayenne',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage/brest',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage/quimper',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage/morlaix',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage/concarneau',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage/laval',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage/mayenne-ville',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-mariage/chateau-gontier',
        destination: '/zones-intervention',
        permanent: true,
      },
      {
        source: '/dj-soiree-entreprise/brest',
        destination: '/dj-soiree-entreprise',
        permanent: true,
      },
      {
        source: '/dj-soiree-entreprise/quimper',
        destination: '/dj-soiree-entreprise',
        permanent: true,
      },
      {
        source: '/dj-soiree-entreprise/laval',
        destination: '/dj-soiree-entreprise',
        permanent: true,
      },
      {
        source: '/animation-anniversaire/brest',
        destination: '/dj-anniversaire-bretagne',
        permanent: true,
      },
      {
        source: '/animation-anniversaire/laval',
        destination: '/dj-anniversaire-bretagne',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
