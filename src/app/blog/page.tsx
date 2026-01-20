import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Conseils Mariage & Animation DJ',
  description: 'Conseils et astuces pour réussir votre mariage en Bretagne. Choisir son DJ, ouverture de bal, étincelles froides, animations originales.',
  alternates: {
    canonical: 'https://www.mg-events35.com/blog',
  },
};

const articles = [
  {
    slug: 'top-salles-mariage-ille-et-vilaine',
    title: 'Top 5 des salles de mariage en Ille-et-Vilaine',
    excerpt: 'Découvrez les plus belles salles de mariage du 35 : Domaine de Cicé-Blossac, Château de la Ballue, Manoir de la Begaudière... Notre sélection d\'expert.',
    image: '/images/gallery-1.jpg',
    date: '20 janvier 2026',
    readTime: '10 min',
  },
  {
    slug: 'comment-choisir-dj-mariage-bretagne',
    title: 'Comment choisir son DJ de mariage en Bretagne ?',
    excerpt: 'Le choix du DJ est crucial pour la réussite de votre soirée de mariage. Découvrez nos conseils pour faire le bon choix : expérience, matériel, feeling...',
    image: '/images/gallery-2.jpg',
    date: '15 janvier 2026',
    readTime: '8 min',
  },
  {
    slug: 'ouverture-de-bal-conseils',
    title: 'Ouverture de bal : nos conseils pour un moment inoubliable',
    excerpt: 'L\'ouverture de bal est l\'un des moments les plus émouvants de votre mariage. Voici nos conseils pour le réussir : choix de la musique, effets, chorégraphie...',
    image: '/images/etincelles-ouverture-bal.jpg',
    date: '10 janvier 2026',
    readTime: '6 min',
  },
  {
    slug: 'etincelles-froides-mariage-securite',
    title: 'Étincelles froides : effet spectaculaire en toute sécurité',
    excerpt: 'Les étincelles froides font rêver mais soulèvent des questions de sécurité. Tout ce que vous devez savoir sur cet effet tendance pour votre mariage.',
    image: '/images/hero-bg.jpg',
    date: '5 janvier 2026',
    readTime: '6 min',
  },
  {
    slug: 'animations-mariage-originales-2026',
    title: 'Les animations de mariage qui font la différence en 2026',
    excerpt: 'Quiz interactif, photo mystère, partage en direct... Découvrez les nouvelles tendances d\'animation pour un mariage original et mémorable.',
    image: '/images/gallery-4.jpg',
    date: '1 janvier 2026',
    readTime: '7 min',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" alt="MG Events Animation DJ Mariage Bretagne" className="h-14 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Accueil</Link>
              <Link href="/#formules" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Nos formules</Link>
              <span className="text-sm text-[#c9a227]">Blog</span>
              <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-4">
            Blog <span className="text-[#c9a227]">MG Events</span>
          </h1>
          <p className="text-[#888] text-lg max-w-2xl">
            Conseils, astuces et inspirations pour réussir votre mariage en Bretagne.
            Tout ce que vous devez savoir sur l&apos;animation, la musique et les effets spéciaux.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article key={article.slug} className="group">
                <Link href={`/blog/${article.slug}`}>
                  <div className="card-dark overflow-hidden hover:border-[#c9a227]/30 transition-colors">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-[#666] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {article.date}
                        </span>
                        <span>{article.readTime} de lecture</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-[family-name:var(--font-display)] text-xl text-white mb-3 group-hover:text-[#c9a227] transition-colors">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[#888] text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>

                      {/* Read more */}
                      <span className="inline-flex items-center gap-2 text-[#c9a227] text-sm font-medium">
                        Lire l&apos;article
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card-dark p-8 border-[#c9a227]/30 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
              Vous préparez votre mariage en <span className="text-[#c9a227]">Bretagne</span> ?
            </h2>
            <p className="text-[#888] mb-6">
              Découvrez nos formules d&apos;animation DJ et demandez votre devis personnalisé.
              Réponse garantie sous 24h !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#formules" className="btn-outline">
                Voir nos formules
              </Link>
              <Link href="/#contact" className="btn-gold">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-[#c9a227] hover:underline">
              ← MG Events - DJ Mariage Bretagne
            </Link>
            <div className="flex items-center gap-4 text-sm text-[#666]">
              <Link href="/mentions-legales" className="hover:text-[#c9a227] transition-colors">Mentions légales</Link>
              <span>|</span>
              <Link href="/cgv" className="hover:text-[#c9a227] transition-colors">CGV</Link>
              <span>|</span>
              <Link href="/confidentialite" className="hover:text-[#c9a227] transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
