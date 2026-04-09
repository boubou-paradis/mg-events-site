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
      // Redirections anciennes URLs (ancien site) vers pages actuelles
      {
        source: '/services',
        destination: '/dj-mariage',
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
    ]
  },
};

export default nextConfig;
