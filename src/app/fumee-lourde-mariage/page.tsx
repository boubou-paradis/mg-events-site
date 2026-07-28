import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';

const SLUG = 'fumee-lourde-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Fumée Lourde Mariage Bretagne | Ouverture de bal sur nuage',
  description:
    "Fumée lourde pour votre ouverture de bal en Bretagne : un nuage blanc au sol, effet « danser sur un nuage », sans danger et sans odeur. Incluse dès la formule Rêve en Blanc.",
  keywords:
    'fumée lourde mariage, ouverture de bal fumée lourde, nuage au sol mariage, fumée lourde ouverture de bal Bretagne, effet nuage première danse, machine fumée lourde mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Fumée lourde pour ouverture de bal | MG Events Animation',
    description:
      "Dansez votre première danse sur un nuage : la fumée lourde reste au sol, sublime les photos et disparaît sans laisser de trace.",
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/etincelles-ouverture-bal.jpg` }],
  },
};

const faqs = [
  {
    question: "Qu'est-ce que la fumée lourde exactement ?",
    answer:
      "La fumée lourde est un brouillard blanc et dense qui reste au niveau du sol au lieu de monter, créant l'effet d'un nuage sous vos pieds pendant l'ouverture de bal. Contrairement à une fumée classique, elle ne se disperse pas dans la salle et ne déclenche pas la sensation de brouillard chez les invités.",
  },
  {
    question: 'La fumée lourde est-elle dangereuse ou salissante ?',
    answer:
      "Non. La fumée lourde est sans danger pour les invités, ne laisse aucun résidu au sol et ne tache ni les robes ni les costumes. Elle se dissipe d'elle-même en quelques minutes, sans odeur persistante.",
  },
  {
    question: 'La fumée lourde peut-elle déclencher les détecteurs de fumée de la salle ?',
    answer:
      "La fumée lourde reste au sol, ce qui limite fortement le risque par rapport à une fumée classique. Nous vérifions systématiquement ce point avec votre salle de réception en amont : c'est l'une des questions que nous posons lors de la coordination avec le lieu, pour que tout soit validé avant le jour J.",
  },
  {
    question: 'La fumée lourde est-elle incluse dans vos formules ?',
    answer:
      "Oui, la machine à fumée lourde est incluse dès la formule Rêve en Blanc (1490€ TTC), qui comprend aussi 2 lanceurs d'étincelles froides — le duo qui rend une ouverture de bal vraiment spectaculaire.",
  },
  {
    question: 'À quel moment utilise-t-on la fumée lourde pendant le mariage ?',
    answer:
      "Le moment roi, c'est l'ouverture de bal : le nuage se déploie au sol quelques secondes avant vos premiers pas, pour un effet maximal sur les photos et les vidéos. Elle peut aussi accompagner une entrée de salle des mariés ou un moment fort de la soirée, selon le déroulé préparé ensemble.",
  },
  {
    question: 'Le rendu photo et vidéo est-il vraiment à la hauteur ?',
    answer:
      "C'est même l'argument numéro un : le nuage blanc au sol donne des images dignes des plus beaux films de mariage, surtout combiné aux étincelles froides et à une mise en lumière adaptée. Nous nous coordonnons avec votre photographe et votre vidéaste pour qu'ils soient prêts au bon moment.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Fumée lourde pour ouverture de bal de mariage en Bretagne",
  serviceType: 'Effet spécial mariage — fumée lourde (nuage au sol)',
  description:
    "Machine à fumée lourde pour ouverture de bal : nuage blanc au sol, sans danger, sans résidu. Incluse dès la formule Rêve en Blanc (1490€ TTC) avec les étincelles froides.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: "Secteurs de l'Ille-et-Vilaine, de la Loire-Atlantique et du Morbihan situés dans un rayon approximatif de 100 km autour de Redon (35). Au-delà : sur étude et sur devis.",
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Fumée lourde mariage', item: `${BASE}/${SLUG}` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FumeeLourdeMariagePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link
            href="/#formules"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Nos formules mariage
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Fumée lourde pour votre <span className="text-[#c9a227]">ouverture de bal</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Votre première danse sur un nuage — l&apos;effet le plus photographié des mariages
              </h2>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Un nuage blanc se déploie au sol, vous vous élancez pour vos premiers pas de couple marié,
                  et toute la salle retient son souffle. Sans danger, sans odeur, sans résidu — et incluse
                  dès notre formule Rêve en Blanc.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
                  <Mail size={18} />
                  Préparer mon ouverture de bal
                </Link>
                <a href="tel:+33648106166" className="btn-outline inline-flex items-center gap-2">
                  <Phone size={18} />
                  06 48 10 61 66
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20 bg-[#141414]">
                <Image
                  src="/images/etincelles-ouverture-bal.jpg"
                  alt="Ouverture de bal de mariage avec effets spéciaux - fumée lourde et étincelles - MG Events Bretagne"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le concept */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          L&apos;effet <span className="text-[#c9a227]">nuage au sol</span>, comment ça marche
        </SectionTitle>
        <Prose>
          <p>
            Contrairement à une fumée classique qui monte et envahit la salle, la{' '}
            <strong className="text-white">fumée lourde</strong> est refroidie avant d&apos;être diffusée :
            plus dense que l&apos;air, elle s&apos;étale au ras du sol en un tapis blanc et opaque. Le
            résultat : vous semblez <strong className="text-white">danser sur un nuage</strong>, les invités
            voient parfaitement la scène, et l&apos;air de la salle reste limpide.
          </p>
          <p>
            C&apos;est un effet éphémère par nature — le nuage se dissipe de lui-même en quelques minutes,
            sans laisser de trace au sol, sans odeur et sans tacher la robe. C&apos;est aussi ce qui le rend
            précieux : il n&apos;existe que le temps de votre première danse, et il vit ensuite pour
            toujours sur vos photos et votre film de mariage.
          </p>
          <p>
            Après 25 ans de mariages, on peut vous le confirmer : c&apos;est au moment où le nuage se
            déploie que les téléphones se lèvent dans toute la salle. Combinée aux{' '}
            <Link href="/etincelles-froides-mariage" className="text-[#c9a227] hover:underline">
              étincelles froides
            </Link>{' '}
            et à une mise en lumière travaillée, la fumée lourde transforme une ouverture de bal en scène
            de film.
          </p>
        </Prose>
      </Section>

      {/* Déroulé */}
      <Section bg="#141414">
        <SectionTitle>Une ouverture de bal <span className="text-[#c9a227]">millimétrée</span></SectionTitle>
        <Steps
          steps={[
            {
              title: 'On prépare ensemble',
              text: "Choix du morceau, entrée sur la piste, signal pour le photographe : tout est calé lors du rendez-vous de préparation, et validé avec votre salle de réception.",
            },
            {
              title: 'Le nuage se déploie',
              text: "Quelques secondes avant vos premiers pas, la machine diffuse le nuage au sol. La lumière se pose sur vous, la salle fait silence.",
            },
            {
              title: 'La piste s\'ouvre',
              text: "À la fin de votre danse, les invités vous rejoignent sur le nuage encore présent — et la soirée dansante est lancée sur une image inoubliable.",
            },
          ]}
        />
      </Section>

      {/* Conditions & inclusion */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Incluse dès la formule <span className="text-[#c9a227]">Rêve en Blanc</span>
        </SectionTitle>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce qu&apos;il faut savoir</h3>
          <CheckList
            items={[
              'Machine à fumée lourde incluse dès Rêve en Blanc (1490€ TTC)',
              "Combinée à 2 lanceurs d'étincelles froides dans la même formule",
              'Sans danger pour les invités, enfants compris',
              'Aucun résidu au sol, aucune tache sur les tenues',
              'Validation systématique avec votre salle en amont',
              'Coordination avec photographe et vidéaste pour le moment clé',
            ]}
          />
        </div>
        <div className="mt-6 card-dark p-6 border-[#c9a227]/30">
          <p className="text-[#aaa] text-sm leading-relaxed">
            Conditions techniques : la fumée lourde s&apos;utilise en intérieur, sur une piste de danse
            dégagée. Nous vérifions avec votre lieu de réception les contraintes éventuelles (détecteurs,
            hauteur sous plafond, ventilation) avant de valider le déroulé — vous n&apos;avez rien à gérer.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white text-center mb-12">
            Questions <span className="text-[#c9a227]">fréquentes</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-dark p-6">
                <h3 className="text-white font-medium mb-3 flex items-start gap-3">
                  <ChevronDown size={20} className="text-[#c9a227] shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-[#888] ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Pour une ouverture de bal <span className="text-[#c9a227]">complète</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/etincelles-froides-mariage', title: 'Étincelles froides', desc: "L'autre effet star de l'ouverture de bal" },
            { href: '/blog/ouverture-de-bal-conseils', title: "Réussir son ouverture de bal", desc: 'Musique, chorégraphie et timing' },
            { href: '/tarifs-dj-mariage', title: 'Tarifs DJ mariage', desc: 'Formules et options en détail' },
            { href: '/dj-mariage-bretagne', title: 'Découvrir les formules mariage', desc: 'La prestation complète' },
            { href: '/blog/planning-soiree-mariage', title: 'Planning de soirée', desc: 'Placer l\'ouverture de bal au bon moment' },
            { href: '/feu-artifice-jour', title: "Feu d'Artifice de Jour", desc: "L'effet spectaculaire version plein jour" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
              <p className="text-white font-medium mb-1">{link.title}</p>
              <p className="text-[#888] text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Offrez-vous une première danse <span className="text-[#c9a227]">sur un nuage</span>
          </h2>
          <p className="text-[#888] mb-8">
            La fumée lourde est incluse dès la formule Rêve en Blanc (1490€ TTC), avec les étincelles
            froides. Vérifions ensemble votre date : devis gratuit sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis gratuit
            </Link>
            <Link href="/tarifs-dj-mariage" className="btn-outline inline-flex items-center gap-2">
              Voir tous nos tarifs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
