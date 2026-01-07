import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mg-events35.com'),
  title: {
    default: "MG Events Animation | DJ Mariage Bretagne",
    template: "%s | MG Events Animation",
  },
  description: "DJ animateur mariage en Bretagne. +20 ans d'expérience, animations interactives AnimaJet, photobooth vintage, étincelles froides. Devis gratuit. Finistère, Morbihan, Ille-et-Vilaine, Loire-Atlantique, Mayenne.",
  keywords: "DJ mariage Bretagne, animation mariage, DJ Rennes, DJ Vannes, DJ Nantes, DJ Quimper, DJ Brest, sonorisation mariage, photobooth mariage, étincelles froides mariage",
  authors: [{ name: "MG Events Animation" }],
  creator: "MG Events Animation",
  publisher: "MG Events Animation",
  openGraph: {
    title: "MG Events Animation - DJ Mariage Bretagne",
    description: "DJ animateur mariage en Bretagne. +20 ans d'expérience, animations interactives, photobooth vintage.",
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
    description: "DJ animateur mariage en Bretagne. +20 ans d'expérience.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MG Events Animation",
  "description": "DJ animateur de mariage en Bretagne. Animations interactives, photobooth vintage, effets spéciaux.",
  "image": "https://www.mg-events35.com/images/logo.png",
  "url": "https://www.mg-events35.com",
  "telephone": "+33648106166",
  "email": "mg.events35@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 Lan Lande des Couëdies",
    "addressLocality": "Bains-sur-Oust",
    "postalCode": "35600",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.7083",
    "longitude": "-2.0614"
  },
  "areaServed": [
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
      "name": "Finistère"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Loire-Atlantique"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Mayenne"
    }
  ],
  "priceRange": "1200€ - 1690€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "45",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/MGevents35/"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "21:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="bG7T2SAL139z-XpkOLLwMcXnpU2_sT2Hcb04bJuOsDU" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
