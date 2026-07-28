import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Check,
  Smartphone,
  QrCode,
  Monitor,
  Sparkles,
  Heart,
  Users,
  Star,
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import AnimaJetIcon from '@/components/animajet/AnimaJetIcon';
import {
  animajetFeatures,
  animajetClusterPages,
  animajetGallery,
  animajetCoreFaqs,
} from '@/data/animajet';

const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Animations interactives mariage | AnimaJet — Quiz, Blind Test, Mur Photo',
  description:
    "AnimaJet : la plateforme d'animations interactives de mariage par MG Events. Quiz, blind test, partage photo, mur photo. Sans application, sur écran géant.",
  keywords:
    'animation interactive mariage, animation digitale mariage, quiz mariage interactif, blind test mariage, mur photo mariage, partage photo mariage, animation mariage smartphone, AnimaJet',
  alternates: { canonical: `${BASE}/animations-interactives-mariage` },
  openGraph: {
    title: 'Animations interactives de mariage — AnimaJet par MG Events',
    description:
      "Quiz, blind test, partage photo en direct, mur photo... AnimaJet transforme votre mariage en expérience interactive. Sans application, sur écran géant.",
    url: `${BASE}/animations-interactives-mariage`,
    images: [`${BASE}/images/animajet-animations-interactives-mariage.jpg`],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Animations interactives de mariage',
  name: 'AnimaJet — Animations interactives de mariage',
  description:
    "Plateforme d'animations interactives pour mariages développée par MG Events : quiz, blind test, roue de la destinée, photo mystère, partage photo en direct, mur photo événementiel. Participation depuis le smartphone des invités via QR Code, sans application, affichage sur écran géant.",
  brand: { '@type': 'Brand', name: 'AnimaJet' },
  provider: { '@type': 'LocalBusiness', '@id': `${BASE}/#organization`, name: 'MG Events Animation' },
  areaServed: [
    { '@type': 'State', name: 'Bretagne' },
    { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
    { '@type': 'AdministrativeArea', name: 'Morbihan' },
    { '@type': 'AdministrativeArea', name: 'Finistère' },
    { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
    { '@type': 'AdministrativeArea', name: 'Mayenne' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Animations interactives AnimaJet',
    itemListElement: animajetFeatures.map((f) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: f.name, description: f.description },
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Animations interactives mariage',
      item: `${BASE}/animations-interactives-mariage`,
    },
  ],
};

const pillarFaqs = [
  ...animajetCoreFaqs,
  {
    question: 'Combien de temps durent les animations interactives pendant un mariage ?',
    answer:
      "C'est entièrement modulable. On peut lancer un quiz de 10 minutes pendant le vin d'honneur, un blind test de 20 minutes entre deux plats, et laisser le partage photo et le mur photo tourner toute la soirée en arrière-plan. Nous calons le rythme avec vous lors du rendez-vous de préparation, sans jamais empiéter sur les moments forts (entrée des mariés, ouverture de bal).",
  },
  {
    question: 'Les animations interactives remplacent-elles le DJ ?',
    answer:
      "Au contraire, elles le complètent. AnimaJet est piloté en direct par le DJ, qui enchaîne musique et animations au bon moment pour maintenir l'énergie. Vous gardez un vrai DJ professionnel aux platines — avec, en plus, une vraie dimension participative pour vos invités.",
  },
  {
    question: "Peut-on personnaliser les quiz et les jeux à notre histoire ?",
    answer:
      "Oui, c'est même recommandé. Quiz sur la rencontre des mariés, photos d'enfance dans la photo mystère, vos musiques marquantes dans le blind test... Plus c'est personnalisé, plus l'émotion et les rires sont au rendez-vous. Nous préparons tout cela ensemble avant le jour J.",
  },
];

const whyInteractive = [
  {
    icon: Heart,
    title: 'Vos invités deviennent acteurs',
    text: "Fini les invités spectateurs qui regardent leur téléphone dans leur coin. Avec AnimaJet, le téléphone devient l'outil de la fête : tout le monde joue, ensemble, en même temps.",
  },
  {
    icon: Users,
    title: 'Toutes les générations réunies',
    text: 'Un blind test fédère grands-parents, parents et jeunes mariés sur le même jeu. La photo mystère crée des fous rires intergénérationnels. Personne ne reste sur la touche.',
  },
  {
    icon: Sparkles,
    title: 'Des souvenirs qui restent',
    text: "Vous récupérez des centaines de photos prises par vos invités, et vos proches parlent encore du quiz ou du mur photo des mois plus tard. L'animation devient une partie du récit de votre mariage.",
  },
];

const howItWorks = [
  {
    icon: QrCode,
    step: '1',
    title: 'On scanne le QR Code',
    text: "Un QR Code unique est affiché sur les tables et l'écran géant. Les invités le scannent avec l'appareil photo de leur téléphone.",
  },
  {
    icon: Smartphone,
    step: '2',
    title: 'On joue depuis son smartphone',
    text: "Aucune application à télécharger : tout se passe dans le navigateur. Connexion en moins de 5 secondes, même pour les moins technophiles.",
  },
  {
    icon: Monitor,
    step: '3',
    title: "Tout s'affiche sur écran géant",
    text: "Questions, scores, photos et défis apparaissent en direct sur grand écran, au centre de la salle. Toute la réception vit l'animation ensemble.",
  },
];

export default function AnimationsInteractivesMariage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: pillarFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />

      <SiteHeader active="animajet" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link href="/" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] text-xs uppercase tracking-widest rounded-full mb-6">
                Conçu &amp; développé par MG Events
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Animations interactives de <span className="text-[#c9a227]">mariage</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                AnimaJet : quiz, blind test, partage photo en direct et mur photo — vos invités deviennent acteurs de la fête
              </h2>
              <p className="text-[#888] leading-relaxed mb-6">
                Et si, le jour de votre mariage, le smartphone de vos invités devenait l&apos;outil de la fête plutôt qu&apos;une distraction ?
                C&apos;est exactement ce que permet <strong className="text-white">AnimaJet</strong>, notre plateforme d&apos;
                <strong className="text-white">animations interactives</strong> que nous avons conçue et développée nous-mêmes.
              </p>
              <p className="text-[#888] leading-relaxed mb-8">
                Quiz personnalisé, blind test musical, photo mystère, roue de la destinée, partage de photos en direct, mur photo événementiel...
                Tout se joue depuis le téléphone, <span className="text-[#c9a227]">sans application à télécharger</span>, et s&apos;affiche en direct sur écran géant.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                  <Mail size={18} />
                  Demander un devis gratuit
                </Link>
                <a href="tel:+33648106166" className="btn-outline inline-flex items-center gap-2">
                  <Phone size={18} />
                  06 48 10 61 66
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20">
                <Image
                  src="/images/animajet-animations-interactives-mariage.jpg"
                  alt="AnimaJet, plateforme d'animations interactives pour mariage : photos en live, jeux interactifs, QR instantané"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'AnimaJet */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-8">
            Qu&apos;est-ce qu&apos;une <span className="text-[#c9a227]">animation interactive de mariage</span> ?
          </h2>
          <div className="prose prose-invert max-w-none text-[#aaa] leading-relaxed space-y-6">
            <p>
              Une animation interactive de mariage, c&apos;est une animation à laquelle <strong className="text-white">vos invités participent
              activement</strong>, en temps réel, au lieu d&apos;assister passivement. Là où un DJ classique fait danser, l&apos;animation interactive
              fait <em>jouer</em>, <em>deviner</em>, <em>voter</em>, <em>partager</em>. Elle s&apos;appuie sur un principe simple mais redoutablement efficace :
              chacun a déjà un smartphone dans sa poche.
            </p>
            <p>
              Pendant longtemps, les téléphones étaient l&apos;ennemi du DJ : des invités le nez sur leur écran, déconnectés de la fête. AnimaJet inverse
              complètement cette logique. Le smartphone devient la <strong className="text-white">télécommande de la soirée</strong> : on scanne un QR Code,
              on rejoint le jeu, et l&apos;écran géant au centre de la salle devient le théâtre commun où tout le monde se retrouve.
            </p>
            <p>
              AnimaJet réunit toutes ces animations dans une seule plateforme, pensée spécifiquement pour les mariages. C&apos;est
              <strong className="text-white"> notre création</strong> : nous l&apos;avons développée nous-mêmes et nous la maîtrisons de A à Z. Et surtout,
              elle est <span className="text-[#c9a227]">incluse dans toutes nos formules</span>, dès la formule Éclat d&apos;Amour à 1200€ TTC.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Pourquoi les animations interactives <span className="text-[#c9a227]">transforment un mariage</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            En 2026, les couples ne veulent plus d&apos;une soirée où l&apos;on attend que ça se passe. Ils veulent une fête où chacun vit quelque chose.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {whyInteractive.map((item, i) => (
              <div key={i} className="card-dark p-6">
                <item.icon size={36} className="text-[#c9a227] mb-4" />
                <h3 className="text-white font-medium mb-3">{item.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les animations (grille de features) */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Toutes les <span className="text-[#c9a227]">animations AnimaJet</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Une palette complète d&apos;animations interactives, à combiner selon l&apos;ambiance que vous souhaitez et les moments de votre journée.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animajetFeatures.map((feature) => {
              const card = (
                <>
                  <div className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center mb-4">
                    <AnimaJetIcon name={feature.icon} size={24} className="text-[#c9a227]" />
                  </div>
                  <h3 className="text-white font-medium mb-1">{feature.name}</h3>
                  <p className="text-[#c9a227] text-xs mb-3">{feature.tagline}</p>
                  <p className="text-[#888] text-sm leading-relaxed">{feature.description}</p>
                  {feature.clusterSlug && (
                    <span className="text-[#c9a227] text-sm mt-3 inline-flex items-center gap-1">
                      En savoir plus <ArrowRight size={14} />
                    </span>
                  )}
                </>
              );
              return feature.clusterSlug ? (
                <Link
                  key={feature.id}
                  href={`/${feature.clusterSlug}`}
                  className="card-dark p-6 hover:border-[#c9a227]/40 transition-colors group"
                >
                  {card}
                </Link>
              ) : (
                <div key={feature.id} className="card-dark p-6">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Comment ça marche ? <span className="text-[#c9a227]">3 étapes, zéro friction</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            La simplicité est la clé d&apos;une bonne participation. AnimaJet a été conçu pour que même vos invités les moins à l&apos;aise avec la technologie jouent sans hésiter.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="card-dark p-6 text-center relative">
                <span className="absolute top-4 right-5 text-5xl font-[family-name:var(--font-display)] text-[#c9a227]/15">
                  {step.step}
                </span>
                <step.icon size={40} className="text-[#c9a227] mx-auto mb-4" />
                <h3 className="text-white font-medium mb-3">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            AnimaJet <span className="text-[#c9a227]">en images</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Aperçu des animations interactives AnimaJet et de l&apos;ambiance qu&apos;elles créent sur une soirée de mariage.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {animajetGallery.map((media, i) => (
              <figure key={i} className="card-dark overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    title={media.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-[#888] text-xs leading-relaxed">{media.description}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pages du cluster */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-4">
            Explorez chaque <span className="text-[#c9a227]">animation en détail</span>
          </h2>
          <p className="text-[#888] text-center mb-12 max-w-3xl mx-auto">
            Chaque animation interactive mérite qu&apos;on s&apos;y attarde. Découvrez comment elle se déroule, à quel moment la programmer et l&apos;effet qu&apos;elle produit sur vos invités.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {animajetClusterPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="card-dark p-5 group hover:border-[#c9a227]/40 transition-colors flex items-center justify-between gap-3"
              >
                <span className="text-white font-medium group-hover:text-[#c9a227] transition-colors">{page.navLabel}</span>
                <ArrowRight size={18} className="text-[#c9a227] group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Différenciateur : créateur de la plateforme */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card-dark p-8 border-[#c9a227]/30">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-6 text-center">
              L&apos;animation conçue et pilotée par <span className="text-[#c9a227]">celui qui l&apos;a développée</span>
            </h2>
            <p className="text-[#888] mb-6 text-center max-w-2xl mx-auto">
              AnimaJet n&apos;est pas un gadget acheté sur étagère : c&apos;est une plateforme que nous avons développée nous-mêmes,
              affinée mariage après mariage. Voici ce qui fait la différence :
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Plateforme que nous avons conçue et développée, maîtrisée de A à Z',
                'Aucune application à installer pour vos invités',
                'Quiz et jeux personnalisés à votre histoire',
                'Participation depuis le smartphone via QR Code unique',
                'Affichage professionnel sur écran géant',
                'Pilotée en direct par un vrai DJ aux platines',
                'Incluse dès la formule Éclat d\'Amour (1200€ TTC)',
                'Adaptée à toutes les générations, de 7 à 77 ans',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
                  <p className="text-[#888] text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span> — Animations interactives
          </h2>
          <div className="space-y-4">
            {pillarFaqs.map((faq, index) => (
              <div key={index} className="card-dark p-6">
                <h3 className="text-white font-medium mb-3 flex items-start gap-3">
                  <Star size={18} className="text-[#c9a227] shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-[#888] ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Offrez à vos invités une soirée <span className="text-[#c9a227]">dont ils se souviendront</span>
          </h2>
          <p className="text-[#888] mb-8">
            AnimaJet est inclus dans toutes nos formules DJ mariage. MG Events est basé à Redon (35) et intervient
            prioritairement dans les secteurs de l&apos;Ille-et-Vilaine, de la Loire-Atlantique et du Morbihan situés dans un rayon approximatif de 100 km autour de Redon.
            Parlons de votre projet — devis personnalisé sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis gratuit
            </Link>
            <a href="tel:+33648106166" className="btn-outline inline-flex items-center gap-2">
              <Phone size={18} />
              06 48 10 61 66
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
