import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MG Events Animation | DJ Mariage Bretagne",
  description: "DJ professionnel pour votre mariage en Bretagne. 6 ans d'expérience, animations personnalisées, ambiance garantie. Finistère, Morbihan, Ille-et-Vilaine, Loire-Atlantique.",
  keywords: "DJ mariage Bretagne, animation mariage, DJ Rennes, DJ Vannes, DJ Nantes, sonorisation mariage",
  openGraph: {
    title: "MG Events Animation | DJ Mariage Bretagne",
    description: "DJ professionnel pour votre mariage en Bretagne. Ambiance garantie !",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
