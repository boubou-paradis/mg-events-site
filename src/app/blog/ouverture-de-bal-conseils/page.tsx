import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ouverture de bal mariage : musique, chorégraphie et effets',
  description: 'Réussir votre ouverture de bal de mariage : choix de la musique, chorégraphie simple ou surprise, fumée lourde et étincelles froides pour une première danse inoubliable.',
  alternates: {
    canonical: 'https://www.mg-events35.com/blog/ouverture-de-bal-conseils',
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
            src="/images/etincelles-ouverture-bal.jpg"
            alt="Ouverture de bal avec étincelles froides"
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
                10 janvier 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                6 min de lecture
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Ouverture de bal : nos conseils pour un moment <span className="text-[#c9a227]">inoubliable</span>
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
                L&apos;ouverture de bal est bien plus qu&apos;une simple danse : c&apos;est le moment où vous ouvrez officiellement
                la fête en tant que couple marié. C&apos;est souvent l&apos;un des souvenirs les plus marquants de la soirée.
                Voici nos conseils pour en faire un instant magique.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                1. Choisir la bonne musique
              </h2>
              <p>
                Le choix de la chanson est crucial. Elle doit vous <strong className="text-white">représenter en tant que couple</strong>.
                Optez pour un morceau qui a une signification particulière pour vous : votre première danse, la chanson
                de votre rencontre, ou simplement un titre que vous adorez tous les deux.
              </p>
              <p>
                Quelques conseils pratiques :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Évitez les morceaux trop longs (3-4 minutes maximum)</li>
                <li>Préférez une chanson avec un tempo régulier</li>
                <li>Testez la musique en conditions réelles avant le jour J</li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                2. Chorégraphie ou pas ?
              </h2>
              <p>
                La question que tous les couples se posent ! Voici les options :
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="card-dark p-4">
                  <p className="text-white font-medium mb-2">Danse libre</p>
                  <p className="text-sm">Authentique et spontanée. Parfait si vous n&apos;êtes pas à l&apos;aise avec la danse.</p>
                </div>
                <div className="card-dark p-4">
                  <p className="text-white font-medium mb-2">Chorégraphie simple</p>
                  <p className="text-sm">Quelques pas appris en cours. Élégant sans être intimidant.</p>
                </div>
                <div className="card-dark p-4">
                  <p className="text-white font-medium mb-2">Chorégraphie surprise</p>
                  <p className="text-sm">Commencez en douceur puis surprenez avec un medley dynamique !</p>
                </div>
                <div className="card-dark p-4">
                  <p className="text-white font-medium mb-2">Flash mob</p>
                  <p className="text-sm">Invités inclus ! Demande beaucoup de préparation mais effet garanti.</p>
                </div>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                3. Les effets qui subliment le moment
              </h2>
              <p>
                Une ouverture de bal réussie passe aussi par l&apos;ambiance visuelle. Voici les effets les plus demandés :
              </p>

              <h3 className="text-xl text-white mt-8 mb-4">La fumée lourde</h3>
              <p>
                Cet effet crée un tapis de nuages à vos pieds, donnant l&apos;impression de danser sur les nuages.
                <span className="text-[#c9a227]"> Un effet féérique</span> qui fait toujours sensation dans les photos et vidéos.
                Découvrez notre <Link href="/fumee-lourde-mariage" className="text-[#c9a227] hover:underline">prestation de fumée lourde</Link>.
              </p>

              <h3 className="text-xl text-white mt-8 mb-4">Les étincelles froides</h3>
              <p>
                Des fontaines d&apos;étincelles qui encadrent votre danse sans aucun danger. Effet spectaculaire garanti !
                Chez MG Events, nous utilisons des machines <strong className="text-white">certifiées CE</strong> pour une sécurité totale —
                tout savoir sur nos <Link href="/etincelles-froides-mariage" className="text-[#c9a227] hover:underline">étincelles froides pour mariage</Link>.
              </p>

              <h3 className="text-xl text-white mt-8 mb-4">Le jeu de lumières</h3>
              <p>
                Un éclairage tamisé pendant la danse, puis une explosion de lumières et de couleurs au moment
                où la fête démarre vraiment. La transition parfaite !
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                4. L&apos;émotion avant tout
              </h2>
              <p>
                N&apos;oubliez pas l&apos;essentiel : ce moment est le vôtre. Peu importe si vous n&apos;êtes pas de grands danseurs,
                l&apos;important est de profiter de cet instant à deux, sous les regards bienveillants de vos proches.
              </p>
              <p>
                Conseil : regardez-vous dans les yeux, souriez, et laissez l&apos;émotion vous porter.
                Vos invités seront touchés par votre complicité, pas par vos pas de danse.
              </p>

              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Envie d&apos;une ouverture de bal <span className="text-[#c9a227]">spectaculaire</span> ?
                </h3>
                <p className="text-[#888] mb-6">
                  Fumée lourde, étincelles froides, jeu de lumières... Nous créons l&apos;ambiance parfaite
                  pour votre première danse.
                </p>
                <Link href="/#contact" className="btn-gold">
                  Demander un devis
                </Link>
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
                  DJ animateur depuis 25 ans, passionné par les mariages et les belles fêtes en Bretagne.
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
              <Link href="/blog/etincelles-froides-mariage-securite" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Étincelles froides : sécurité</p>
                <p className="text-[#888] text-sm">Tout savoir sur cet effet tendance...</p>
              </Link>
              <Link href="/blog/comment-choisir-dj-mariage-bretagne" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Choisir son DJ mariage</p>
                <p className="text-[#888] text-sm">Guide complet pour bien choisir...</p>
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
