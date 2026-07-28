import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';

const SLUG = 'etincelles-froides-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Étincelles Froides Mariage Bretagne | Ouverture de bal',
  description:
    "Étincelles froides certifiées CE pour votre mariage en Bretagne : machines Mac Mah MAC SPARK 300, effet spectaculaire et maîtrisé pour l'ouverture de bal. Incluses dès Rêve en Blanc.",
  keywords:
    'étincelles froides mariage, étincelles froides mariage Bretagne, ouverture de bal étincelles, gerbes étincelles mariage, machine étincelles froides, étincelles froides salle mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Étincelles froides pour mariage | MG Events Animation',
    description:
      'Deux gerbes d\'étincelles encadrent votre première danse. Machines professionnelles certifiées CE, utilisables en intérieur.',
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/etincelles-ouverture-bal.jpg` }],
  },
};

const faqs = [
  {
    question: 'Les étincelles froides sont-elles vraiment sans danger ?',
    answer:
      "Oui, à condition d'utiliser du matériel professionnel : nos machines Mac Mah MAC SPARK 300 sont certifiées CE et conçues pour l'événementiel en intérieur. Les étincelles produites sont « froides » : elles ne brûlent pas au toucher. Nous gérons le placement des machines, les distances de sécurité et le déclenchement.",
  },
  {
    question: 'Les étincelles froides sont-elles adaptées à toutes les salles ?',
    answer:
      "Dans la grande majorité des cas, oui : les étincelles froides sont précisément conçues pour l'intérieur. Certaines salles ont toutefois leurs propres règles (détecteurs sensibles, hauteur sous plafond, consignes du propriétaire). Nous validons systématiquement ce point avec votre lieu de réception avant le mariage.",
  },
  {
    question: 'À quel moment déclencher les étincelles froides ?',
    answer:
      "Le grand classique, c'est l'ouverture de bal : deux gerbes s'élèvent au moment où vous commencez à danser. Elles peuvent aussi marquer votre entrée en salle, l'arrivée du gâteau ou le lancement de la soirée dansante. Le moment est choisi ensemble lors de la préparation, en coordination avec le photographe.",
  },
  {
    question: 'Les étincelles froides sont-elles incluses dans vos formules ?',
    answer:
      "Oui : 2 lanceurs d'étincelles froides sont inclus dès la formule Rêve en Blanc (1490€ TTC), avec la machine à fumée lourde. C'est le duo d'effets qui rend une ouverture de bal réellement spectaculaire.",
  },
  {
    question: 'Ça fait de la fumée ou des odeurs ?',
    answer:
      "Très peu : les machines à étincelles froides professionnelles produisent une gerbe lumineuse avec un dégagement minime, sans flamme. C'est ce qui les distingue des feux d'artifice classiques, interdits en intérieur.",
  },
  {
    question: 'Combien de fois peut-on déclencher les étincelles pendant la soirée ?',
    answer:
      "Le déroulé est défini ensemble en préparation. En pratique, nous concentrons l'effet sur un ou deux moments forts — l'ouverture de bal en tête — pour préserver l'effet de surprise. Un effet répété dix fois n'impressionne plus personne ; bien placé, il marque toute la salle.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Étincelles froides pour mariage en Bretagne',
  serviceType: 'Effet spécial mariage — étincelles froides certifiées CE',
  description:
    "Gerbes d'étincelles froides pour ouverture de bal : machines Mac Mah MAC SPARK 300 certifiées CE, utilisables en intérieur. 2 lanceurs inclus dès la formule Rêve en Blanc (1490€ TTC).",
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
    { '@type': 'ListItem', position: 2, name: 'Étincelles froides mariage', item: `${BASE}/${SLUG}` },
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

export default function EtincellesFroidesMariagePage() {
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
                Étincelles froides pour votre <span className="text-[#c9a227]">mariage</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Deux gerbes lumineuses encadrent votre première danse — spectaculaire, et maîtrisé
              </h2>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Nos machines professionnelles Mac Mah MAC SPARK 300, certifiées CE et conçues pour
                  l&apos;intérieur, projettent des gerbes d&apos;étincelles qui ne brûlent pas. L&apos;effet
                  waouh d&apos;un feu d&apos;artifice, sans flamme et sans risque pour vos invités.
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
                  alt="Étincelles froides pendant une ouverture de bal de mariage - MG Events Bretagne"
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
          Des étincelles <span className="text-[#c9a227]">froides</span>, vraiment
        </SectionTitle>
        <Prose>
          <p>
            Le nom n&apos;est pas un argument marketing : les{' '}
            <strong className="text-white">étincelles froides</strong> sont produites par des machines qui
            projettent des particules incandescentes à très basse température. Résultat : une gerbe
            lumineuse de plusieurs mètres, visuellement identique à un feu d&apos;artifice, mais{' '}
            <strong className="text-white">sans flamme</strong> et utilisable en intérieur — là où la
            pyrotechnie classique est strictement interdite.
          </p>
          <p>
            Nous utilisons exclusivement des machines professionnelles{' '}
            <strong className="text-white">Mac Mah MAC SPARK 300, certifiées CE</strong> et conformes aux
            normes européennes de sécurité. Le placement des lanceurs, les distances de sécurité et le
            déclenchement sont gérés par nos soins : votre seul rôle est de danser.
          </p>
          <p>
            L&apos;association gagnante, c&apos;est étincelles froides +{' '}
            <Link href="/fumee-lourde-mariage" className="text-[#c9a227] hover:underline">fumée lourde</Link> :
            le nuage au sol, les gerbes qui s&apos;élèvent de part et d&apos;autre, et vous au centre.
            C&apos;est l&apos;image que vos invités garderont de votre soirée — et celle que votre
            photographe attend.
          </p>
        </Prose>
      </Section>

      {/* Déroulé */}
      <Section bg="#141414">
        <SectionTitle>Le moment <span className="text-[#c9a227]">parfait</span>, préparé ensemble</SectionTitle>
        <Steps
          steps={[
            {
              title: 'Validation avec votre salle',
              text: "Nous vérifions en amont les consignes de votre lieu de réception (détecteurs, hauteur, règlement intérieur) pour que l'effet soit validé sans stress.",
            },
            {
              title: 'Calage du déroulé',
              text: "Ouverture de bal, entrée en salle, arrivée du gâteau : on choisit le ou les moments, le morceau et le signal, en lien avec votre photographe.",
            },
            {
              title: 'Le déclenchement',
              text: "Les gerbes s'élèvent exactement au moment convenu, synchronisées avec la musique. Effet garanti sur la salle — et sur les photos.",
            },
          ]}
        />
      </Section>

      {/* Sécurité & inclusion */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Incluses dès la formule <span className="text-[#c9a227]">Rêve en Blanc</span>
        </SectionTitle>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">L&apos;essentiel à retenir</h3>
          <CheckList
            items={[
              '2 lanceurs Mac Mah MAC SPARK 300 certifiés CE',
              'Inclus dès la formule Rêve en Blanc (1490€ TTC)',
              'Utilisables en intérieur, sans flamme',
              'Placement et distances de sécurité gérés par nos soins',
              'Déclenchement synchronisé avec votre musique',
              'Validation préalable avec votre salle de réception',
            ]}
          />
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
          Pour aller <span className="text-[#c9a227]">plus loin</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/fumee-lourde-mariage', title: 'Fumée lourde', desc: 'Le nuage au sol pour la première danse' },
            { href: '/blog/etincelles-froides-mariage-securite', title: 'Étincelles froides et sécurité', desc: 'Tout savoir avant de se décider' },
            { href: '/blog/ouverture-de-bal-conseils', title: "Réussir son ouverture de bal", desc: 'Musique, chorégraphie et timing' },
            { href: '/tarifs-dj-mariage', title: 'Tarifs DJ mariage', desc: 'Formules et options en détail' },
            { href: '/dj-mariage-bretagne', title: 'DJ de mariage en Bretagne', desc: 'La prestation complète' },
            { href: '/feu-artifice-jour', title: "Feu d'Artifice de Jour", desc: 'La poudre Holi pour vos photos de jour' },
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
            Un moment que vos invités <span className="text-[#c9a227]">n&apos;oublieront pas</span>
          </h2>
          <p className="text-[#888] mb-8">
            Étincelles froides et fumée lourde incluses dès la formule Rêve en Blanc (1490€ TTC).
            Vérifions votre date : devis gratuit sous 24h.
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
