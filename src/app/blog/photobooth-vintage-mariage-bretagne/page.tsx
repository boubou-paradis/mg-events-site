import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User, Check, Camera, Printer, Star, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Photobooth vintage mariage Bretagne : guide complet 2026 | MG Events',
  description: 'Tout savoir sur le photobooth vintage TSF pour votre mariage en Bretagne. Style années 60, impressions instantanées, intégration AnimaJet. Découvrez notre photobooth unique.',
  alternates: {
    canonical: 'https://www.mg-events35.com/blog/photobooth-vintage-mariage-bretagne',
  },
  openGraph: {
    title: 'Photobooth vintage mariage Bretagne : guide complet 2026',
    description: 'Tout ce qu\'il faut savoir sur le photobooth vintage TSF pour un mariage en Bretagne.',
    url: 'https://www.mg-events35.com/blog/photobooth-vintage-mariage-bretagne',
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
            src="/images/photobooth-2.jpg"
            alt="Photobooth vintage TSF mariage Bretagne - MG Events Animation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <article className="relative -mt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          {/* Article Header */}
          <div className="card-dark p-8 mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#666] mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                4 mai 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                8 min de lecture
              </span>
              <span className="px-2 py-0.5 bg-[#c9a227]/10 border border-[#c9a227]/20 rounded-full text-[#c9a227] text-xs">
                Animation mariage
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Photobooth vintage mariage :{' '}
              <span className="text-[#c9a227]">guide complet 2026</span>
            </h1>

            <p className="text-[#888] text-lg mb-6">
              Le photobooth est devenu incontournable dans les mariages. Mais tous les photobooths ne se valent pas.
              Découvrez pourquoi le style vintage TSF crée des souvenirs inoubliables — et ce qui distingue
              notre photobooth des autres en Bretagne.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={20} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Laurence — MG Events Animation</p>
                <p className="text-[#888] text-sm">DJ animatrice mariage, Bretagne</p>
              </div>
            </div>
          </div>

          {/* Table des matières */}
          <div className="card-dark p-6 mb-10 border-[#c9a227]/20">
            <p className="text-[#c9a227] text-sm font-medium uppercase tracking-wider mb-4">Dans cet article</p>
            <ol className="space-y-2 text-sm text-[#aaa]">
              <li><a href="#qu-est-ce-qu-un-photobooth-vintage" className="hover:text-[#c9a227] transition-colors">1. Qu&apos;est-ce qu&apos;un photobooth vintage TSF ?</a></li>
              <li><a href="#pourquoi-choisir" className="hover:text-[#c9a227] transition-colors">2. Pourquoi choisir un photobooth pour votre mariage ?</a></li>
              <li><a href="#notre-photobooth" className="hover:text-[#c9a227] transition-colors">3. Notre photobooth TSF : ce qui le rend unique</a></li>
              <li><a href="#vintage-vs-moderne" className="hover:text-[#c9a227] transition-colors">4. Photobooth vintage vs photobooth moderne</a></li>
              <li><a href="#animajet" className="hover:text-[#c9a227] transition-colors">5. L&apos;alliance photobooth + AnimaJet</a></li>
              <li><a href="#faq" className="hover:text-[#c9a227] transition-colors">6. Questions fréquentes</a></li>
            </ol>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-[#aaa] leading-relaxed space-y-6">

              <h2 id="qu-est-ce-qu-un-photobooth-vintage" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                1. Qu&apos;est-ce qu&apos;un photobooth vintage TSF ?
              </h2>
              <p>
                Le <strong className="text-white">photobooth vintage</strong> est une cabine photo inspirée des anciens appareils
                à pièces des années 60 — les célèbres cabines TSF (Téléphonie Sans Fil). Contrairement aux photobooths
                numériques modernes aux lignes épurées, le style vintage TSF apporte un charme authentique et rétro qui
                s&apos;intègre parfaitement à l&apos;univers d&apos;un mariage élégant.
              </p>
              <p>
                Notre photobooth TSF est conçu comme une vraie cabine d&apos;époque : bois vieilli, touches dorées,
                rideau velouté. Les invités adorent l&apos;effet &quot;machine à remonter le temps&quot; — et les photos
                qui en sortent ont ce petit quelque chose en plus qui fait la différence.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-8">
                {[
                  { icon: Camera, title: 'Style TSF années 60', desc: 'Design authentique qui s\'intègre à tous les décors de mariage' },
                  { icon: Printer, title: 'Impression instantanée', desc: 'Photos imprimées sur place en 30 secondes, format polaroïd ou 10×15' },
                  { icon: Star, title: 'Personnalisation', desc: 'Vos prénoms, date de mariage et message sur chaque impression' },
                ].map((item) => (
                  <div key={item.title} className="card-dark p-4 text-center">
                    <item.icon size={28} className="text-[#c9a227] mx-auto mb-2" />
                    <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                    <p className="text-[#888] text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 id="pourquoi-choisir" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                2. Pourquoi choisir un photobooth pour votre mariage ?
              </h2>
              <p>
                Le photobooth remplit plusieurs rôles essentiels lors d&apos;une soirée de mariage. D&apos;abord,
                il <strong className="text-white">anime naturellement les temps morts</strong> — les attentes entre les plats,
                les transitions entre les temps forts. Les invités se retrouvent autour de la cabine, partagent
                des fous rires, créent des souvenirs ensemble.
              </p>
              <p>
                Ensuite, il laisse un <strong className="text-white">souvenir concret</strong>. Dans un monde où tout est numérique
                et fugace, une impression photo format polaroïd que l&apos;on emporte chez soi a une valeur sentimentale
                incomparable. Vos invités pensent à vous chaque fois qu&apos;ils la voient sur leur frigidaire ou leur bureau.
              </p>

              <ul className="space-y-3 my-6">
                {[
                  'Anime les temps morts sans effort de votre part',
                  'Crée des moments de complicité intergénérationnels',
                  'Laisse un souvenir physique à chaque invité',
                  'Génère des photos supplémentaires de votre mariage',
                  'S\'adapte à tous les âges (de 7 à 77 ans !)',
                  'Ajoute une touche originale à votre décoration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="card-dark p-6 my-8 border-l-4 border-[#c9a227]">
                <p className="text-white italic">
                  &ldquo;Le photobooth a été l&apos;attraction principale de notre soirée. Nos invités ont fait la queue
                  jusqu&apos;à 1h du matin pour y passer ! Et aujourd&apos;hui, on a des dizaines de souvenirs photos
                  avec tous nos proches.&rdquo;
                </p>
                <p className="text-[#888] text-sm mt-3">— Marie & Thomas, mariés en septembre 2025 au Domaine de la Bourbansais</p>
              </div>

              <h2 id="notre-photobooth" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                3. Notre photobooth TSF : ce qui le rend unique en Bretagne
              </h2>

              <div className="relative aspect-[16/9] rounded-lg overflow-hidden my-8 border border-[#c9a227]/20">
                <Image
                  src="/images/photobooth-1.jpg"
                  alt="Photobooth vintage TSF années 60 - mariage Bretagne MG Events"
                  fill
                  className="object-cover"
                />
              </div>

              <p>
                Notre photobooth TSF se distingue sur plusieurs points essentiels. Ce n&apos;est pas un simple appareil
                photo sur pied avec un fond en papier — c&apos;est une véritable <strong className="text-white">installation
                scénographique</strong> pensée pour s&apos;intégrer à votre décoration de mariage.
              </p>

              <div className="space-y-4 my-8">
                {[
                  {
                    title: 'Design TSF authentique',
                    desc: 'Structure en bois massif, teintes dorées et noires, rideau en velours. Un meuble qui se pose élégamment dans n\'importe quelle salle de réception bretonne.',
                  },
                  {
                    title: 'Impressions personnalisées',
                    desc: 'Chaque photo est imprimée avec vos prénoms, la date de votre mariage et un message choisi par vous. Un souvenir unique à l\'image de votre couple.',
                  },
                  {
                    title: 'Accessoires inclus',
                    desc: 'Une caisse d\'accessoires pour animer les prises de vue : moustaches, lunettes, chapeaux, pancartes personnalisées... Ambiance garantie !',
                  },
                  {
                    title: 'Double impression',
                    desc: 'Une photo pour l\'invité, une pour vous. À la fin de la soirée, vous repartez avec toutes les impressions rassemblées dans un livre souvenir.',
                  },
                  {
                    title: 'Opérateur dédié',
                    desc: 'Un technicien MG Events surveille la cabine toute la soirée : chargement du papier, aide aux invités moins à l\'aise avec la technologie, qualité des impressions.',
                  },
                ].map((item) => (
                  <div key={item.title} className="card-dark p-5 flex gap-4">
                    <Sparkles size={20} className="text-[#c9a227] shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">{item.title}</p>
                      <p className="text-[#888] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="vintage-vs-moderne" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                4. Photobooth vintage vs photobooth moderne : lequel choisir ?
              </h2>
              <p>
                Il existe deux grandes familles de photobooths pour les mariages. Voici comment les distinguer
                et choisir celui qui correspond à votre vision :
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="card-dark p-6 border-[#c9a227]/30">
                  <h3 className="text-[#c9a227] font-medium mb-4 flex items-center gap-2">
                    <Camera size={20} />
                    Photobooth vintage TSF
                  </h3>
                  <ul className="space-y-2 text-sm text-[#aaa]">
                    {[
                      'Charme authentique, décoration de caractère',
                      'Impression papier instantanée (souvenir physique)',
                      'Accessible à tous, même sans smartphone',
                      'Idéal pour mariages classiques, champêtres, élégants',
                      'Accessoires inclus pour s\'amuser',
                      'Livre souvenir à la fin de soirée',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={14} className="text-[#c9a227] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-dark p-6">
                  <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                    <Camera size={20} />
                    Photobooth moderne (écran tactile)
                  </h3>
                  <ul className="space-y-2 text-sm text-[#aaa]">
                    {[
                      'Design épuré, technologique',
                      'Partage numérique instantané (réseaux sociaux)',
                      'Filtres et effets numériques',
                      'Convient aux mariages contemporains, urbains',
                      'Impression optionnelle (souvent payante)',
                      'Moins de charme, plus de fonctionnalités',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check size={14} className="text-[#888] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p>
                La tendance 2026 est clairement au retour du vintage. Les couples cherchent l&apos;authenticité,
                le charme du tangible. Une impression papier personnalisée que l&apos;on colle dans un album
                a une valeur émotionnelle bien supérieure à un simple fichier JPEG partagé sur Instagram.
              </p>

              <h2 id="animajet" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                5. L&apos;alliance photobooth + AnimaJet : la combinaison gagnante
              </h2>
              <p>
                Chez MG Events, nous avons poussé le concept encore plus loin en combinant notre photobooth vintage
                avec <strong className="text-white">AnimaJet</strong>, la plateforme d&apos;animation interactive
                que nous avons conçue et développée.
              </p>
              <p>
                Concrètement, vos invités peuvent :
              </p>
              <ul className="space-y-3 my-6">
                {[
                  'Prendre une photo dans le photobooth TSF et la faire imprimer instantanément',
                  'Envoyer cette photo sur AnimaJet pour qu\'elle s\'affiche sur grand écran devant tous les invités',
                  'Participer au quiz musical depuis leur smartphone pendant que d\'autres utilisent le photobooth',
                  'Jouer à la photo mystère avec des clichés pris dans le photobooth pendant la soirée',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Sparkles size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="card-dark p-6 my-8 bg-gradient-to-r from-[#c9a227]/5 to-transparent border-[#c9a227]/20">
                <p className="text-white font-medium mb-2">Le résultat ?</p>
                <p className="text-[#888]">
                  Vos invités ne s&apos;ennuient jamais. La soirée est rythmée par des moments d&apos;animation
                  naturels, sans que vous ayez à gérer quoi que ce soit. Tout est inclus, tout est géré par
                  notre équipe. Vous profitez de votre mariage.
                </p>
              </div>

              <h2 id="faq" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                6. Questions fréquentes sur le photobooth mariage
              </h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'Le photobooth est-il inclus dans vos formules ?',
                    a: 'Le photobooth vintage TSF est inclus dans la formule Conte de Fées (1690€). Il peut également être ajouté en option à nos autres formules. Contactez-nous pour un devis personnalisé.',
                  },
                  {
                    q: 'Combien de photos peut-on imprimer pendant la soirée ?',
                    a: 'Il n\'y a pas de limite fixe. En pratique, lors d\'un mariage de 100 à 150 personnes, nous imprimons entre 200 et 350 photos sur une soirée. Le papier est rechargé autant que nécessaire.',
                  },
                  {
                    q: 'La cabine s\'adapte-t-elle à toutes les salles de réception en Bretagne ?',
                    a: 'Oui. Notre photobooth TSF est compact (environ 1m² au sol) et peut être installé dans toutes les salles, châteaux, domaines ou barnums. Nous l\'avons utilisé dans plus d\'une centaine de lieux différents en Bretagne et Grand Ouest.',
                  },
                  {
                    q: 'Peut-on personnaliser les impressions avec nos prénoms et notre date ?',
                    a: 'Absolument. Chaque impression est personnalisée avec vos prénoms, la date du mariage et un message de votre choix. Vous validez le modèle avant la soirée.',
                  },
                  {
                    q: 'Combien de temps à l\'avance faut-il réserver le photobooth ?',
                    a: 'Nous recommandons de réserver au moins 6 à 12 mois à l\'avance pour les dates estivales (mai-septembre), qui sont les plus demandées. N\'attendez pas !',
                  },
                ].map((item) => (
                  <div key={item.q} className="card-dark p-6">
                    <h3 className="text-white font-medium mb-3">{item.q}</h3>
                    <p className="text-[#888] text-sm">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Vous voulez le photobooth vintage pour{' '}
                  <span className="text-[#c9a227]">votre mariage en Bretagne</span> ?
                </h3>
                <p className="text-[#888] mb-8 max-w-xl mx-auto">
                  Disponible en option ou inclus dans la formule Conte de Fées. Contactez-nous pour vérifier
                  la disponibilité de votre date et recevoir un devis personnalisé sous 24h.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/#photobooth" className="btn-outline">
                    Voir le photobooth en détail
                  </Link>
                  <Link href="/#contact" className="btn-gold">
                    Demander un devis gratuit
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
                <p className="text-white font-medium">Laurence — MG Events Animation</p>
                <p className="text-[#888] text-sm">
                  DJ animatrice et gestionnaire du photobooth chez MG Events, passionnée par la création
                  de souvenirs uniques pour chaque mariage en Bretagne.
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
              <Link href="/blog/animations-mariage-originales-2026" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Animations mariage originales 2026</p>
                <p className="text-[#888] text-sm">Quiz, partage photo, photo mystère...</p>
              </Link>
              <Link href="/blog/comment-choisir-dj-mariage-bretagne" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Choisir son DJ mariage en Bretagne</p>
                <p className="text-[#888] text-sm">Guide complet pour faire le bon choix</p>
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
