import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Polices variables : sans option weight, next/font charge un seul fichier
// par famille couvrant toutes les graisses (au lieu d'un fichier par graisse)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mg-events35.com'),
  title: {
    default: "MG Events Animation | DJ Mariage Bretagne",
    template: "%s | MG Events Animation",
  },
  description: "DJ mariage Bretagne — Avis 5★, formules transparentes dès 1200€ TTC. 25 ans d'expérience, AnimaJet, photobooth vintage. Devis gratuit sous 24h ✓",
  keywords: "DJ mariage Bretagne, animation mariage Bretagne, DJ Rennes, DJ Vannes, DJ Nantes, sonorisation mariage Bretagne, photobooth vintage mariage, étincelles froides mariage, cérémonie laïque sonorisation, AnimaJet animation interactive",
  authors: [{ name: "MG Events Animation" }],
  creator: "MG Events Animation",
  publisher: "MG Events Animation",
  openGraph: {
    title: "MG Events Animation - DJ Mariage Bretagne",
    description: "DJ animateur mariage en Bretagne. 25 ans d'expérience, animations interactives, photobooth vintage.",
    url: "https://www.mg-events35.com",
    siteName: "MG Events Animation",
    images: [
      {
        url: "https://www.mg-events35.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "MG Events Animation - DJ Mariage Bretagne",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MG Events Animation - DJ Mariage Bretagne",
    description: "DJ animateur mariage en Bretagne. 25 ans d'expérience.",
    images: ["https://www.mg-events35.com/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mg-events35.com",
  },
};

const weddingServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Wedding DJ & Animation",
  "name": "DJ Mariage & Animation de Soirée — MG Events Animation",
  "description": "Animation musicale professionnelle pour mariages, au départ de Redon (35). De la cérémonie laïque à la soirée dansante : sonorisation, éclairage professionnel, photobooth vintage, étincelles froides, AnimaJet. 25 ans d'expérience. Déplacement inclus jusqu'à 100 km aller-retour au départ de Redon ; au-delà, 0,66 €/km indiqué sur le devis.",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://www.mg-events35.com/#organization",
    "name": "MG Events Animation"
  },
  "areaServed": [
    { "@type": "State", "name": "Bretagne" },
    { "@type": "AdministrativeArea", "name": "Ille-et-Vilaine" },
    { "@type": "AdministrativeArea", "name": "Morbihan" },
    { "@type": "AdministrativeArea", "name": "Loire-Atlantique" }
  ],
  "category": "Wedding Entertainment",
  "audience": { "@type": "Audience", "audienceType": "Mariés et futurs mariés" },
  "offers": [
    {
      "@type": "Offer",
      "name": "Formule Éclat d'Amour",
      "description": "Sonorisation cocktail, repas et soirée dansante, 2 micros, éclairages, AnimaJet inclus",
      "price": "1200",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer",
      "name": "Formule Rêve en Blanc",
      "description": "Formule complète avec ambiance RGBW, boule à facettes, fumée lourde et étincelles froides certifiées CE",
      "price": "1490",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer",
      "name": "Formule Conte de Fées",
      "description": "Expérience premium avec photobooth vintage TSF années 60 et 150 impressions incluses",
      "price": "1690",
      "priceCurrency": "EUR"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations DJ animateur & animation de mariage",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DJ animateur de mariage", "description": "DJ animateur professionnel : animation de soirée, prise de micro, lecture de la piste de danse, 25 ans d'expérience." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sonorisation & éclairage professionnel", "description": "Sonorisation de mariage haut de gamme et éclairage sur mesure : cérémonie laïque, vin d'honneur, repas et soirée dansante." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Photobooth vintage TSF", "description": "Cabine photobooth style TSF années 60 avec impressions instantanées personnalisées." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AnimaJet — animations interactives", "description": "Plateforme d'animations interactives conçue et développée par MG Events : quiz, blind test, photo mystère sur grand écran." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Effets spéciaux", "description": "Étincelles froides certifiées CE et fumée lourde pour l'ouverture de bal." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Feu d'Artifice de Jour", "description": "Tir de poudre Holi colorée pour la sortie des mariés et la photo de groupe." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Livre d'Or Audio", "description": "Téléphone rétro à messages vocaux : vos invités laissent un souvenir audio à réécouter pour la vie." } }
    ]
  }
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "AnimaJet - Animations interactives pour mariage par MG Events",
  "description": "Découvrez AnimaJet, la plateforme d'animations interactives que MG Events a conçue et développée, pour vos mariages en Bretagne : quiz musical, photo mystère, partage live. Une expérience participative pour votre soirée de mariage.",
  "thumbnailUrl": "https://www.mg-events35.com/images/animajet-thumbnail.jpg",
  "uploadDate": "2025-01-01T00:00:00+01:00",
  "duration": "PT40S",
  "contentUrl": "https://www.mg-events35.com/promo-animajet.mp4",
  "embedUrl": "https://www.mg-events35.com/promo-animajet.mp4",
  "publisher": {
    "@type": "Organization",
    "name": "MG Events Animation",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mg-events35.com/images/logo.png"
    }
  },
  "potentialAction": {
    "@type": "WatchAction",
    "target": "https://www.mg-events35.com/#animajet"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "@id": "https://www.mg-events35.com/#organization",
  "name": "MG Events Animation",
  "description": "DJ animateur mariage en Bretagne. 25 ans d'expérience. Animation musicale, sonorisation, mise en lumière, photobooth vintage, étincelles froides pour mariages et événements en Ille-et-Vilaine, Morbihan, Loire-Atlantique.",
  "image": "https://www.mg-events35.com/images/logo.png",
  "logo": "https://www.mg-events35.com/images/logo.png",
  "url": "https://www.mg-events35.com",
  "telephone": "+33648106166",
  "email": "mg.events35@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10, La Lande des Couédies",
    "addressLocality": "Bains-sur-Oust",
    "postalCode": "35600",
    "addressRegion": "Bretagne",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6931,
    "longitude": -2.08544
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Bretagne"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ille-et-Vilaine"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Morbihan"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Loire-Atlantique"
    }
  ],
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "45",
    "reviewCount": "45"
  },
  "sameAs": [
    "https://www.facebook.com/MGevents35/",
    "https://www.mariages.net/musique-mariage/mg-events-animation--e233666"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Formules DJ Mariage",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formule Éclat d'Amour",
          "description": "Sonorisation cocktail, repas et soirée dansante, 2 micros, 4 éclairages, vidéoprojecteur, AnimaJet inclus"
        },
        "price": "1200",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formule Rêve en Blanc",
          "description": "Formule complète avec ambiance RGBW, boule à facettes, fumée lourde et étincelles froides"
        },
        "price": "1490",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Formule Conte de Fées",
          "description": "Expérience premium avec photobooth vintage et 150 impressions incluses"
        },
        "price": "1690",
        "priceCurrency": "EUR"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <meta name="google-site-verification" content="bG7T2SAL139z-XpkOLLwMcXnpU2_sT2Hcb04bJuOsDU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        {/* Google Tag (gtag.js) - Google Analytics + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17731993014"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17731993014');
            gtag('config', 'G-NFW78JJ08Z');
          `}
        </Script>
      </body>
    </html>
  );
}
