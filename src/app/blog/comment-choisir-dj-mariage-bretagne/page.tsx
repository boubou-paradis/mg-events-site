import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comment choisir son DJ de mariage en Bretagne ? Guide 2026',
  description: 'Le choix du DJ est crucial pour la réussite de votre mariage. Découvrez nos conseils pour bien choisir : expérience, matériel, feeling, références, prix.',
  alternates: {
    canonical: 'https://www.mg-events35.com/blog/comment-choisir-dj-mariage-bretagne',
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
            src="/images/gallery-1.jpg"
            alt="DJ mariage Bretagne ambiance dancefloor"
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
                15 janvier 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                8 min de lecture
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Comment choisir son DJ de mariage en <span className="text-[#c9a227]">Bretagne</span> ?
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
                Le choix du DJ est l&apos;une des décisions les plus importantes pour la réussite de votre soirée de mariage.
                C&apos;est lui qui donnera le tempo, créera l&apos;ambiance et fera danser vos invités jusqu&apos;au bout de la nuit.
                Mais comment s&apos;y retrouver parmi toutes les offres ? Voici notre guide complet pour faire le bon choix.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                1. L&apos;expérience : le critère numéro un
              </h2>
              <p>
                Un DJ expérimenté saura <strong className="text-white">lire l&apos;ambiance</strong> de votre soirée et s&apos;adapter
                en temps réel. Il connaît les moments clés d&apos;un mariage, sait quand monter en puissance et quand laisser
                respirer la piste de danse.
              </p>
              <p>
                Posez les bonnes questions : combien de mariages a-t-il animés ? Depuis combien d&apos;années exerce-t-il ?
                Un DJ avec <span className="text-[#c9a227]">plus de 100 mariages</span> à son actif aura forcément développé
                un savoir-faire que vous ne retrouverez pas chez un débutant.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                2. Le matériel professionnel
              </h2>
              <p>
                Un bon DJ investit dans du matériel de qualité. La sonorisation doit être adaptée à la taille de votre salle,
                les lumières doivent créer une vraie ambiance, et tout doit être aux normes de sécurité.
              </p>
              <div className="card-dark p-6 my-6">
                <p className="text-white font-medium mb-3">Checklist matériel à vérifier :</p>
                <ul className="space-y-2">
                  {[
                    'Sonorisation professionnelle adaptée',
                    'Éclairages robotisés et LED',
                    'Micros sans fil de qualité',
                    'Matériel de secours en cas de panne',
                    'Assurance responsabilité civile',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#aaa]">
                      <Check size={16} className="text-[#c9a227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                3. Le feeling lors du premier contact
              </h2>
              <p>
                Votre DJ sera présent pendant l&apos;un des plus beaux jours de votre vie. Il est essentiel que le courant passe !
                Lors de votre premier échange, évaluez :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Est-il à l&apos;écoute de vos envies ?</li>
                <li>Pose-t-il des questions sur votre univers musical ?</li>
                <li>Vous sentez-vous en confiance ?</li>
                <li>Est-il réactif dans ses réponses ?</li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                4. Les références et avis
              </h2>
              <p>
                Consultez les avis en ligne sur <strong className="text-white">Mariages.net</strong>, Google ou Facebook.
                Demandez des vidéos de prestations précédentes. Un DJ qui n&apos;a rien à cacher sera fier de vous montrer son travail.
              </p>
              <p>
                Attention aux avis trop parfaits ou trop nombreux en peu de temps : privilégiez les témoignages détaillés
                qui parlent de moments précis de la soirée.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                5. Le rapport qualité-prix
              </h2>
              <p>
                Le prix d&apos;un DJ mariage en Bretagne varie généralement entre <span className="text-[#c9a227]">800€ et 2000€</span> selon
                les prestations incluses. Méfiez-vous des tarifs trop bas : ils cachent souvent du matériel bas de gamme
                ou un manque d&apos;expérience.
              </p>
              <p>
                Comparez les devis en détail : qu&apos;est-ce qui est inclus ? Sonorisation cocktail ? Éclairages ? Animations ?
                Un devis transparent est le signe d&apos;un professionnel sérieux.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                6. Les services complémentaires
              </h2>
              <p>
                Certains DJ proposent des services qui font la différence : photobooth, animations interactives,
                effets spéciaux (fumée lourde, étincelles froides). Ces extras peuvent transformer une bonne soirée
                en un moment <span className="text-[#c9a227]">vraiment inoubliable</span>.
              </p>

              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Besoin d&apos;un DJ pour votre mariage en Bretagne ?
                </h3>
                <p className="text-[#888] mb-6">
                  Chez MG Events, nous cochons toutes les cases : +20 ans d&apos;expérience, matériel pro,
                  animations exclusives et un vrai accompagnement personnalisé.
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
              <Link href="/blog/ouverture-de-bal-conseils" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Ouverture de bal : nos conseils</p>
                <p className="text-[#888] text-sm">Réussir ce moment magique...</p>
              </Link>
              <Link href="/blog/animations-mariage-originales-2026" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Animations mariage 2026</p>
                <p className="text-[#888] text-sm">Les tendances qui font la différence...</p>
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
