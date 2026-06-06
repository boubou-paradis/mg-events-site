import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Check, Sparkles, Camera, Music, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Animations mariage originales : les tendances 2026',
  description: 'Quiz interactif, photo mystère, partage photo en direct... Découvrez les nouvelles tendances d\'animation pour un mariage original et mémorable en 2026.',
  alternates: {
    canonical: 'https://www.mg-events35.com/blog/animations-mariage-originales-2026',
  },
};

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="MG Events Animation DJ Mariage Bretagne"
                width={200}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Accueil</Link>
              <Link href="/#formules" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Nos formules</Link>
              <Link href="/blog" className="text-sm text-[#c9a227]">Blog</Link>
              <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-[400px]">
          <Image
            src="/images/gallery-4.jpg"
            alt="Animations de mariage originales"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <article className="relative -mt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          {/* Article Header */}
          <div className="card-dark p-8 mb-8">
            <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                1 janvier 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                7 min de lecture
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Les animations de mariage qui font la différence en <span className="text-[#c9a227]">2026</span>
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={20} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume</p>
                <p className="text-[#888] text-sm">MG Events Animation</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-[#aaa] leading-relaxed space-y-6">
              <p className="text-lg">
                Les mariages évoluent, et avec eux les attentes des couples. En 2026, la tendance est claire :
                les invités ne veulent plus être de simples spectateurs, ils veulent <strong className="text-white">vivre l&apos;expérience</strong>.
                Découvrez les animations qui transforment une soirée de mariage en un moment unique et mémorable.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                1. Le partage de photos en temps réel
              </h2>
              <div className="card-dark p-6 my-6">
                <div className="flex items-start gap-4">
                  <Share2 size={32} className="text-[#c9a227] shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-2">Comment ça marche ?</p>
                    <p className="text-sm">
                      Vos invités prennent des photos avec leur smartphone et les envoient sur une plateforme dédiée.
                      Les clichés s&apos;affichent instantanément sur grand écran, créant un diaporama live de votre soirée.
                      Toute la magie capturée, tous ensemble !
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Cette animation crée une vraie dynamique collective. Les invités adorent voir leurs photos
                projetées et cherchent à capturer les meilleurs moments. Résultat : vous récupérez des centaines
                de photos de votre mariage vues par vos proches.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                2. Le quiz musical interactif
              </h2>
              <div className="card-dark p-6 my-6">
                <div className="flex items-start gap-4">
                  <Music size={32} className="text-[#c9a227] shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-2">Le blind test nouvelle génération</p>
                    <p className="text-sm">
                      Qui reconnaîtra le titre en premier ? Les invités jouent depuis leur téléphone
                      et le classement s&apos;affiche en direct. Ambiance garantie et fous rires assurés
                      pour toutes les générations !
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Le quiz musical est parfait pour animer le début de soirée ou une pause pendant le repas.
                Il permet de mélanger les générations : les parents reconnaissent les classiques,
                les jeunes brillent sur les hits actuels. Un vrai moment de partage !
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                3. La photo mystère
              </h2>
              <div className="card-dark p-6 my-6">
                <div className="flex items-start gap-4">
                  <Sparkles size={32} className="text-[#c9a227] shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-2">Un jeu de devinettes original</p>
                    <p className="text-sm">
                      Une photo floue s&apos;affiche progressivement à l&apos;écran. Les invités doivent deviner
                      de qui ou de quoi il s&apos;agit avant que l&apos;image soit totalement révélée.
                      Photos de couple, invités bébés, lieux importants... les possibilités sont infinies !
                    </p>
                  </div>
                </div>
              </div>
              <p>
                La photo mystère crée des moments de complicité uniques. Imaginez la tête de vos invités
                quand ils découvrent une photo de vous à 5 ans, ou leur réaction en reconnaissant
                un ami d&apos;enfance sur une vieille photo de classe !
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                4. Le photobooth vintage vs moderne
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="card-dark p-4">
                  <Camera size={28} className="text-[#c9a227] mb-3" />
                  <p className="text-white font-medium mb-2">Photobooth vintage</p>
                  <p className="text-sm">
                    Style TSF années 60, charme authentique, impression papier instantanée.
                    Les invités repartent avec un souvenir physique et unique.
                  </p>
                </div>
                <div className="card-dark p-4">
                  <Camera size={28} className="text-[#c9a227] mb-3" />
                  <p className="text-white font-medium mb-2">Photobooth moderne</p>
                  <p className="text-sm">
                    Écran tactile, filtres numériques, partage instantané sur les réseaux.
                    Plus technologique mais moins de charme.
                  </p>
                </div>
              </div>
              <p>
                La tendance 2026 ? Le retour du vintage ! Les couples recherchent l&apos;authenticité
                et le charme d&apos;antan. Notre photobooth style TSF années 60 fait sensation à chaque mariage.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                5. AnimaJet : la plateforme que nous avons développée
              </h2>
              <p>
                Chez MG Events, nous avons conçu et développé <strong className="text-white">AnimaJet</strong>,
                notre propre plateforme d&apos;animation interactive. Elle regroupe toutes les animations
                dont nous avons parlé : partage photo, quiz musical, photo mystère...
              </p>
              <p>
                Le tout accessible depuis le smartphone de vos invités, sans application à télécharger,
                avec un affichage en direct sur grand écran. Une plateforme que nous maîtrisons de A à Z et qui fait vraiment
                la différence !
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                Ce qui fait la différence
              </h2>
              <p>
                En 2026, les couples ne veulent plus d&apos;un DJ qui se contente de passer de la musique.
                Ils recherchent une <span className="text-[#c9a227]">véritable expérience</span> pour leurs invités.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  'Des animations qui impliquent tous les invités',
                  'Une personnalisation à l\'image du couple',
                  'Des moments de partage intergénérationnels',
                  'Des souvenirs uniques à emporter',
                  'Une soirée dont on parle encore des années après',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check size={18} className="text-[#c9a227] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Envie d&apos;un mariage <span className="text-[#c9a227]">vraiment original</span> ?
                </h3>
                <p className="text-[#888] mb-6">
                  AnimaJet, photobooth vintage, quiz musical... Toutes ces animations sont disponibles
                  avec MG Events. Créons ensemble une soirée dont vos invités se souviendront !
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/#formules" className="btn-outline">
                    Découvrir nos formules
                  </Link>
                  <Link href="/#contact" className="btn-gold">
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="card-dark p-6 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={32} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume - MG Events Animation</p>
                <p className="text-[#888] text-sm">
                  DJ animateur depuis plus de 20 ans, passionné par les mariages et les belles fêtes en Bretagne.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-6">
              Articles similaires
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/comment-choisir-dj-mariage-bretagne" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Choisir son DJ mariage</p>
                <p className="text-[#888] text-sm">Guide complet pour bien choisir...</p>
              </Link>
              <Link href="/blog/ouverture-de-bal-conseils" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Ouverture de bal : nos conseils</p>
                <p className="text-[#888] text-sm">Réussir ce moment magique...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
