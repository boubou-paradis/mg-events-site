import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, Mail, Phone, ArrowRight, Check } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';

const SLUG = 'sonorisation-ceremonie-laique';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Sonorisation Cérémonie Laïque Bretagne | DJ mariage — 180€',
  description:
    "Sonorisation de cérémonie laïque en Bretagne : enceinte sur batterie, micros sans fil et cravate, 2 techniciens dédiés. Musiques d'entrée, discours, échange des vœux. 180€ TTC.",
  keywords:
    'sonorisation cérémonie laïque, DJ cérémonie laïque Bretagne, musique cérémonie laïque mariage, sono cérémonie extérieur, micro cérémonie laïque, cérémonie laïque Bretagne',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Sonorisation de cérémonie laïque en Bretagne | MG Events Animation',
    description:
      "Une cérémonie laïque où chaque mot s'entend et chaque musique tombe juste : sono sur batterie, micros HF et techniciens dédiés.",
    url: `${BASE}/${SLUG}`,
    images: [{ url: `${BASE}/images/ceremonie-laique.jpg` }],
  },
};

const faqs = [
  {
    question: 'Combien coûte la sonorisation d\'une cérémonie laïque ?',
    answer:
      "Notre formule cérémonie laïque est à 180€ TTC : enceinte JBL EON ONE MK2 sur batterie, 2 micros sans fil et/ou 2 micros cravate, table de mixage avec connexion ordinateur ou tablette, et 2 techniciens dédiés pendant toute la cérémonie. La cérémonie doit se dérouler sur le même lieu que votre réception.",
  },
  {
    question: 'La sonorisation fonctionne-t-elle en extérieur, sans électricité ?',
    answer:
      "Oui, c'est même l'intérêt principal de notre installation : tout fonctionne sur batterie. Vous pouvez célébrer votre cérémonie au fond d'un parc, sous un arbre ou face à la mer, sans rallonge ni groupe électrogène.",
  },
  {
    question: 'Qui gère la musique pendant la cérémonie ?',
    answer:
      "Deux techniciens sont dédiés à votre cérémonie : l'un gère les niveaux des micros (officiant, lectures, vœux), l'autre lance les musiques au bon moment — l'entrée des mariés, les rituels, la sortie. Rien n'est laissé à un invité débordé avec un téléphone.",
  },
  {
    question: 'Peut-on choisir toutes les musiques de la cérémonie ?',
    answer:
      "Bien sûr. Lors du rendez-vous de préparation, nous construisons ensemble le déroulé musical : la musique d'entrée, les fonds sonores pendant les lectures, le morceau de l'échange des vœux et la musique de sortie. Vous choisissez, nous cadrons les transitions.",
  },
  {
    question: "Travaillez-vous avec l'officiant de cérémonie ?",
    answer:
      "Oui, nous nous coordonnons avec votre officiant ou officiante avant le jour J : ordre des interventions, signaux pour lancer les musiques, gestion des micros pour les intervenants. Une cérémonie fluide, c'est d'abord une bonne coordination. L'officiant n'est pas compris dans la formule.",
  },
  {
    question: 'La cérémonie laïque peut-elle être sur un lieu différent de la réception ?',
    answer:
      "Notre formule à 180€ s'applique lorsque la cérémonie se déroule sur le même lieu que la réception (le cas le plus fréquent : cérémonie dans le parc du domaine, réception dans la salle). Si votre configuration est différente, parlons-en : nous étudierons une solution adaptée sur devis.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sonorisation de cérémonie laïque pour mariage en Bretagne',
  serviceType: 'Sonorisation cérémonie laïque — mariage',
  description:
    "Sonorisation complète de cérémonie laïque sur batterie : enceinte JBL, micros sans fil et cravate, table de mixage, 2 techniciens dédiés. 180€ TTC sur le lieu de réception.",
  provider: {
    '@type': 'LocalBusiness',
    name: 'MG Events Animation',
    telephone: '+33648106166',
    url: BASE,
    areaServed: 'Bretagne, Grand Ouest',
  },
  offers: {
    '@type': 'Offer',
    price: '180',
    priceCurrency: 'EUR',
    description: 'Sonorisation complète de la cérémonie laïque sur le même lieu que la réception. Officiant non compris.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Sonorisation cérémonie laïque', item: `${BASE}/${SLUG}` },
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

export default function SonorisationCeremonieLaiquePage() {
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
                Sonorisation de <span className="text-[#c9a227]">cérémonie laïque</span>
              </h1>
              <h2 className="text-xl text-[#aaa] mb-6">
                Chaque mot s&apos;entend, chaque musique tombe juste — même en plein air, sans électricité
              </h2>
              <div className="text-[#888] leading-relaxed mb-8 space-y-4">
                <p>
                  Une cérémonie laïque repose sur des voix et des musiques. Notre installation entièrement
                  sur batterie et nos deux techniciens dédiés font que vos vœux, vos lectures et vos
                  morceaux choisis portent jusqu&apos;au dernier rang — à 180€ TTC.
                </p>
              </div>
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
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20 bg-[#141414]">
                <Image
                  src="/images/ceremonie-laique.jpg"
                  alt="Sonorisation de cérémonie laïque en extérieur - mariage en Bretagne - MG Events"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi sonoriser */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Pourquoi la sonorisation fait la <span className="text-[#c9a227]">réussite</span> d&apos;une cérémonie laïque
        </SectionTitle>
        <Prose>
          <p>
            On a tous assisté à une cérémonie en extérieur où le vent emportait la moitié des discours, où
            la musique d&apos;entrée est partie trop tôt depuis un téléphone, où les invités du fond
            n&apos;ont rien entendu de l&apos;échange des vœux. C&apos;est précisément ce que la{' '}
            <strong className="text-white">sonorisation de cérémonie laïque</strong> évite : une écoute
            claire pour tous, sans jamais écraser l&apos;intimité du moment.
          </p>
          <p>
            Notre installation est pensée pour l&apos;extérieur :{' '}
            <strong className="text-white">enceinte JBL EON ONE MK2 sur batterie</strong>, aucun câble à
            tirer, aucun besoin d&apos;électricité. Vous choisissez le cadre — le parc du domaine, un arbre
            centenaire, une vue sur la mer — et nous nous adaptons. Les{' '}
            <strong className="text-white">micros sans fil et micros cravate</strong> permettent à
            l&apos;officiant, aux témoins et à vous-mêmes de parler naturellement, sans forcer la voix.
          </p>
          <p>
            Et surtout : <span className="text-[#c9a227]">deux techniciens sont dédiés à votre cérémonie</span>.
            L&apos;un veille aux niveaux des micros, l&apos;autre lance chaque musique au signal convenu
            avec l&apos;officiant. Les transitions se font en douceur, les silences sont respectés, et
            personne dans votre entourage n&apos;a besoin de gérer quoi que ce soit.
          </p>
        </Prose>
      </Section>

      {/* Déroulé musical */}
      <Section bg="#141414">
        <SectionTitle>Chaque moment clé, <span className="text-[#c9a227]">accompagné musicalement</span></SectionTitle>
        <Steps
          steps={[
            {
              title: "L'entrée et l'accueil",
              text: "Une ambiance douce accueille les invités, puis l'entrée des mariés est portée par la mélodie que vous avez choisie, lancée au bon pas, au bon moment.",
            },
            {
              title: 'Lectures, vœux et rituels',
              text: "Micros gérés en direct pour chaque intervenant, fonds sonores discrets pendant les rituels (sable, bougie, ruban…) : les mots restent au premier plan.",
            },
            {
              title: 'La sortie des mariés',
              text: "Un morceau joyeux et lumineux célèbre la sortie, en fondu parfait avec les applaudissements — et enchaîne naturellement vers le vin d'honneur.",
            },
          ]}
        />
      </Section>

      {/* Formule */}
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          La formule cérémonie laïque à <span className="text-[#c9a227]">180€ TTC</span>
        </SectionTitle>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Matériel et équipe inclus</h3>
          <CheckList
            items={[
              '1 enceinte JBL EON ONE MK2 sur batterie',
              '2 micros sans fil et/ou 2 micros cravate',
              '1 table de mixage avec connexion ordinateur/tablette',
              '2 techniciens dédiés le temps de la cérémonie',
              'Déroulé musical préparé avec vous en amont',
              "Coordination avec votre officiant(e) de cérémonie",
            ]}
          />
          <p className="text-sm text-[#c9a227] font-medium mt-6">
            La cérémonie doit être sur le même lieu que la réception. Officiant non compris.
          </p>
        </div>
        <div className="mt-6 card-dark p-6 border-[#c9a227]/30">
          <p className="text-[#aaa] leading-relaxed text-sm">
            <Check size={16} className="text-[#c9a227] inline mr-2" />
            La cérémonie laïque s&apos;ajoute à n&apos;importe laquelle de nos{' '}
            <Link href="/tarifs-dj-mariage" className="text-[#c9a227] hover:underline">formules mariage</Link> :
            le même prestataire gère votre cérémonie, votre vin d&apos;honneur et votre soirée — une seule
            installation, une seule équipe, zéro couture entre les moments.
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
          Pour préparer votre <span className="text-[#c9a227]">journée</span>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/blog/musique-vin-honneur', title: "Musique du vin d'honneur", desc: "L'ambiance juste après la cérémonie" },
            { href: '/tarifs-dj-mariage', title: 'Tarifs DJ mariage', desc: 'Formules et options en toute transparence' },
            { href: '/dj-mariage-bretagne', title: 'DJ mariage Bretagne', desc: 'La prestation complète, de la cérémonie à la piste' },
            { href: '/feu-artifice-jour', title: "Feu d'Artifice de Jour", desc: 'La poudre Holi pour la sortie de cérémonie' },
            { href: '/blog/planning-soiree-mariage', title: 'Planning de soirée', desc: 'Le bon timing du jour J' },
            { href: '/lieux-reception-bretagne', title: 'Lieux de réception en Bretagne', desc: 'Domaines et châteaux propices aux cérémonies' },
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
            Une cérémonie où chaque mot <span className="text-[#c9a227]">compte</span>
          </h2>
          <p className="text-[#888] mb-8">
            Racontez-nous votre projet de cérémonie laïque : lieu, nombre d&apos;invités, envies musicales.
            Devis gratuit et personnalisé sous 24h.
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
