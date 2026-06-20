import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User, Check, Sparkles, Palette, Camera, Sun } from 'lucide-react';

const SLUG = 'feu-artifice-jour-mariage-poudre-holi';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Feu d\'artifice de jour mariage : la poudre Holi explose en couleurs | MG Events',
  description:
    "Le feu d'artifice de jour à la poudre Holi : l'animation originale qui colore la sortie des mariés et la cérémonie laïque en plein jour. Fonctionnement, couleurs, moments idéaux et tarif (120€).",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: "Feu d'artifice de jour mariage : la poudre Holi explose en couleurs",
    description:
      "Tout savoir sur le feu d'artifice de jour à la poudre Holi pour un mariage en Bretagne : concept, couleurs, moments idéaux et tarif.",
    url: `${BASE}/blog/${SLUG}`,
    images: [{ url: `${BASE}/images/feu-artifice-jour-mariage.png` }],
  },
};

const faqs = [
  {
    q: 'Le feu d\'artifice de jour est-il dangereux ?',
    a: "Non. La poudre Holi est une poudre colorée fine et non toxique, projetée par des canons à air comprimé : il n'y a ni flamme, ni explosion pyrotechnique, ni chaleur. C'est une animation visuelle, sans danger pour vos invités, parfaite en extérieur.",
  },
  {
    q: 'Quelle est la différence avec les étincelles froides ?',
    a: "Les étincelles froides subliment l'ouverture de bal, le soir, à l'intérieur ou en extérieur, avec des jets lumineux. Le feu d'artifice de jour, lui, joue sur la couleur en plein jour : il est pensé pour les moments diurnes comme la fin de cérémonie laïque ou la sortie des mariés. Les deux animations sont complémentaires.",
  },
  {
    q: 'Quelles couleurs peut-on choisir ?',
    a: "Rose, bleu, jaune, vert, violet, orange… Notre formule comprend 4 couleurs au choix, que vous sélectionnez selon votre thème de mariage. Un même tir peut mélanger plusieurs teintes pour un effet arc-en-ciel.",
  },
  {
    q: 'La poudre tache-t-elle les vêtements ?',
    a: "La poudre Holi se dépose légèrement et se brosse facilement une fois sèche. Pour la robe de mariée, nous calons le positionnement et le sens du vent avec vous afin de maîtriser l'effet : on peut viser un nuage spectaculaire derrière les mariés sans les recouvrir, ou au contraire jouer le jeu des couleurs pour des photos plus folles.",
  },
  {
    q: 'Quel est le tarif du feu d\'artifice de jour ?',
    a: "Le feu d'artifice de jour est proposé à 120€ pour un tir de 4 couleurs au choix. C'est une nouveauté disponible sur demande : contactez-nous pour vérifier la disponibilité à la date de votre mariage en Bretagne.",
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: "Feu d'artifice de jour mariage : la poudre Holi explose en couleurs",
  image: `${BASE}/images/feu-artifice-jour-mariage.png`,
  datePublished: '2026-06-20',
  dateModified: '2026-06-20',
  author: { '@type': 'Person', name: 'Laurence — MG Events Animation' },
  publisher: {
    '@type': 'Organization',
    name: 'MG Events Animation',
    logo: { '@type': 'ImageObject', url: `${BASE}/images/logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${SLUG}` },
  description:
    "Le feu d'artifice de jour à la poudre Holi : l'animation originale qui colore la sortie des mariés et la cérémonie laïque en plein jour.",
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
        <div className="relative h-[400px] bg-[#141414]">
          <Image
            src="/images/feu-artifice-jour-mariage.png"
            alt="Feu d'artifice de jour - explosion de poudre Holi colorée lors d'un mariage en Bretagne - MG Events"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
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
                20 juin 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                7 min de lecture
              </span>
              <span className="px-2 py-0.5 bg-[#c9a227]/10 border border-[#c9a227]/20 rounded-full text-[#c9a227] text-xs">
                Animation mariage
              </span>
              <span className="px-2 py-0.5 bg-[#c9a227] text-[#0a0a0a] rounded-full text-xs font-semibold uppercase tracking-wider">
                Nouveauté
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Feu d&apos;artifice de jour :{' '}
              <span className="text-[#c9a227]">l&apos;explosion de couleurs qui sublime votre mariage</span>
            </h1>

            <p className="text-[#888] text-lg mb-6">
              Et si vos plus belles photos prenaient des couleurs ? Le feu d&apos;artifice de jour, à base de
              poudre Holi, est l&apos;animation originale qui colore la sortie des mariés et la fin de cérémonie
              laïque en plein jour. On vous explique tout : concept, couleurs, moments idéaux et tarif.
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
              <li><a href="#concept" className="hover:text-[#c9a227] transition-colors">1. Qu&apos;est-ce que le feu d&apos;artifice de jour ?</a></li>
              <li><a href="#poudre-holi" className="hover:text-[#c9a227] transition-colors">2. La poudre Holi : d&apos;où vient cette explosion de couleurs ?</a></li>
              <li><a href="#pourquoi" className="hover:text-[#c9a227] transition-colors">3. Pourquoi l&apos;adopter pour votre mariage ?</a></li>
              <li><a href="#moments" className="hover:text-[#c9a227] transition-colors">4. À quel moment le déclencher ?</a></li>
              <li><a href="#fonctionnement" className="hover:text-[#c9a227] transition-colors">5. Comment ça fonctionne ?</a></li>
              <li><a href="#faq" className="hover:text-[#c9a227] transition-colors">6. Questions fréquentes</a></li>
            </ol>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-[#aaa] leading-relaxed space-y-6">

              <h2 id="concept" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                1. Qu&apos;est-ce que le feu d&apos;artifice de jour ?
              </h2>
              <p>
                Les feux d&apos;artifice classiques sont magnifiques… mais réservés à la nuit. Le{' '}
                <strong className="text-white">feu d&apos;artifice de jour</strong> renverse les codes : il
                explose en pleine lumière, au cœur de votre journée, là où se concentrent les émotions et les
                photos. Plutôt que des gerbes de feu, il libère un nuage de{' '}
                <strong className="text-white">poudre colorée</strong> qui monte à plusieurs mètres de hauteur
                et reste suspendu quelques secondes — le temps de capter des clichés inoubliables.
              </p>
              <p>
                Concrètement, ce sont <strong className="text-white">4 canons de poudre Holi de 80 cm</strong>,
                déclenchés de façon <span className="text-[#c9a227]">synchronisée</span>, qui transforment une
                simple sortie de cérémonie en image de carte postale. L&apos;effet est immédiat, joyeux et
                totalement visible en plein jour.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-8">
                {[
                  { icon: Sun, title: 'Visible en plein jour', desc: 'L\'effet spectaculaire qui manque aux feux d\'artifice classiques, réservés à la nuit' },
                  { icon: Palette, title: '4 couleurs au choix', desc: 'Rose, bleu, jaune, vert, violet, orange… selon votre thème de mariage' },
                  { icon: Camera, title: 'Photos mémorables', desc: 'Un nuage coloré derrière les mariés pour des clichés dynamiques et pleins de vie' },
                ].map((item) => (
                  <div key={item.title} className="card-dark p-4 text-center">
                    <item.icon size={28} className="text-[#c9a227] mx-auto mb-2" />
                    <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                    <p className="text-[#888] text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 id="poudre-holi" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                2. La poudre Holi : d&apos;où vient cette explosion de couleurs ?
              </h2>
              <p>
                La <strong className="text-white">poudre Holi</strong> tire son nom de la célèbre{' '}
                <strong className="text-white">fête indienne des couleurs</strong>, Holi, où l&apos;on se
                couvre mutuellement de pigments éclatants pour célébrer le printemps, l&apos;amour et le
                renouveau. C&apos;est une poudre fine, légère et <strong className="text-white">non
                toxique</strong>, qui se disperse dans l&apos;air en formant de magnifiques nuages colorés.
              </p>
              <p>
                Pour un mariage, cette symbolique tombe à pic : <span className="text-[#c9a227]">la joie, la
                couleur et le renouveau</span>. Projetée par nos canons, la poudre capte la lumière du jour et
                crée un rendu photo absolument unique — bien plus original qu&apos;un lâcher de ballons ou de
                pétales, et infiniment plus spectaculaire.
              </p>

              <h2 id="pourquoi" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                3. Pourquoi l&apos;adopter pour votre mariage ?
              </h2>
              <p>
                C&apos;est une animation que peu d&apos;invités ont déjà vue : l&apos;effet de surprise est
                total. Les couleurs vives qui jaillissent créent une explosion de joie partagée, parfaite pour
                rassembler tout le monde au même endroit, au même instant.
              </p>
              <ul className="space-y-3 my-6">
                {[
                  'Un effet spectaculaire et original, visible en plein jour',
                  'Des photos de groupe dynamiques, colorées et pleines de mouvement',
                  'Une animation qui surprend et fait participer tous vos invités',
                  'Une poudre non toxique, sans flamme ni chaleur',
                  '4 couleurs à coordonner avec votre thème et votre décoration',
                  'Idéal en extérieur : jardins, châteaux, domaines bretons',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="card-dark p-6 my-8 border-l-4 border-[#c9a227]">
                <p className="text-white italic">
                  &ldquo;On voulait un moment fort pour la sortie de notre cérémonie laïque. L&apos;explosion de
                  couleurs au-dessus de nos têtes, c&apos;était magique — et nos photos de groupe sont
                  devenues nos préférées de toute la journée !&rdquo;
                </p>
                <p className="text-[#888] text-sm mt-3">— Témoignage de mariés, Bretagne</p>
              </div>

              <h2 id="moments" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                4. À quel moment déclencher le feu d&apos;artifice de jour ?
              </h2>
              <p>
                Tout l&apos;intérêt du feu d&apos;artifice de jour, c&apos;est de marquer un{' '}
                <strong className="text-white">moment fort en plein jour</strong>. Voici les instants où il fait
                le plus d&apos;effet :
              </p>
              <div className="space-y-4 my-8">
                {[
                  { title: 'La fin de cérémonie laïque', desc: 'Juste après le « oui » et l\'échange des alliances : un final coloré qui scelle l\'émotion et lance la fête.' },
                  { title: 'La sortie des mariés', desc: 'À la sortie de la mairie, de l\'église ou du lieu de cérémonie, sous une haie d\'honneur : l\'image iconique de la journée.' },
                  { title: 'La photo de groupe', desc: 'Tous les invités réunis, un nuage de couleurs derrière vous : la photo souvenir que tout le monde voudra encadrer.' },
                  { title: 'Le cocktail / vin d\'honneur', desc: 'Un temps fort pour animer l\'apéritif et créer la surprise pendant que le couple profite de ses proches.' },
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
              <p>
                Notre conseil : on cale le déclenchement avec vous <strong className="text-white">et votre
                photographe</strong>, pour que l&apos;objectif soit prêt au bon moment. Un feu d&apos;artifice
                de jour, ça ne dure que quelques secondes — autant ne rien manquer.
              </p>

              <h2 id="fonctionnement" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                5. Comment ça fonctionne ?
              </h2>
              <p>
                Le dispositif est simple et maîtrisé de A à Z par notre équipe :
              </p>
              <div className="grid sm:grid-cols-3 gap-4 my-8">
                {[
                  { step: '1', title: 'On choisit les couleurs', desc: 'Vous sélectionnez 4 couleurs en accord avec votre thème. On définit ensemble le moment du tir.' },
                  { step: '2', title: 'On positionne les canons', desc: '4 canons de poudre Holi de 80 cm, placés selon le lieu, le vent et l\'angle du photographe.' },
                  { step: '3', title: 'On déclenche en synchro', desc: 'Tir synchronisé au moment choisi : le nuage de couleurs explose en plein jour. Magique.' },
                ].map((item) => (
                  <div key={item.step} className="card-dark p-6 relative">
                    <span className="absolute top-3 right-5 text-5xl font-[family-name:var(--font-display)] text-[#c9a227]/15">
                      {item.step}
                    </span>
                    <p className="text-white font-medium mb-2">{item.title}</p>
                    <p className="text-[#888] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="card-dark p-6 my-8 bg-gradient-to-r from-[#c9a227]/5 to-transparent border-[#c9a227]/20">
                <p className="text-white font-medium mb-2">Le tarif</p>
                <p className="text-[#888]">
                  Le feu d&apos;artifice de jour est proposé à <strong className="text-[#c9a227]">120€ pour un
                  tir de 4 couleurs au choix</strong>. C&apos;est une nouveauté disponible sur demande :
                  pensez à nous en parler tôt pour réserver votre date.
                </p>
              </div>

              <h2 id="faq" className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                6. Questions fréquentes
              </h2>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <div key={item.q} className="card-dark p-6">
                    <h3 className="text-white font-medium mb-3">{item.q}</h3>
                    <p className="text-[#888] text-sm">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Envie d&apos;une <span className="text-[#c9a227]">explosion de couleurs</span> pour votre mariage en Bretagne ?
                </h3>
                <p className="text-[#888] mb-8 max-w-xl mx-auto">
                  Le feu d&apos;artifice de jour est une nouveauté à 120€ pour 4 couleurs au choix, disponible
                  sur demande. Contactez-nous pour vérifier la disponibilité de votre date et recevoir plus
                  d&apos;informations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/feu-artifice-jour" className="btn-outline">
                    Découvrir le feu d&apos;artifice de jour
                  </Link>
                  <Link href="/#contact" className="btn-gold">
                    Nous contacter pour plus d&apos;informations
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
                  DJ animatrice chez MG Events, passionnée par la création de moments forts et de souvenirs
                  uniques pour chaque mariage en Bretagne.
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
                <p className="text-white font-medium mb-1">Étincelles froides : effet spectaculaire en sécurité</p>
                <p className="text-[#888] text-sm">L&apos;autre effet star de l&apos;ouverture de bal</p>
              </Link>
              <Link href="/blog/animations-mariage-originales-2026" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Animations mariage originales 2026</p>
                <p className="text-[#888] text-sm">Quiz, partage photo, photo mystère...</p>
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
