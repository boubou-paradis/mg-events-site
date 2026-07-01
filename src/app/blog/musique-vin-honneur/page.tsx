import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'musique-vin-honneur';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: "Musique vin d'honneur : ambiance, volume et conseils DJ",
  description:
    "Quelle musique pour le vin d'honneur de votre mariage ? Styles, volume, sonorisation en extérieur, transition vers le repas : les conseils d'un DJ pour un cocktail réussi.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: "Musique de vin d'honneur : créer l'ambiance sans gêner les invités",
    description: "Styles, volume et sonorisation d'extérieur : les conseils DJ pour un cocktail de mariage réussi.",
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: "Quel style de musique pour un vin d'honneur de mariage ?",
    answer:
      "Des ambiances chaleureuses et mélodiques qui accompagnent sans s'imposer : jazz, soul, acoustique, lounge, bossa, reprises douces de titres connus. L'idée n'est pas de faire danser mais de créer un fond élégant qui facilite les conversations et donne le ton de la journée.",
  },
  {
    question: "Quel volume sonore pendant le cocktail ?",
    answer:
      "La règle simple : deux personnes à un mètre l'une de l'autre doivent pouvoir converser sans élever la voix. La musique du vin d'honneur habille les silences et couvre le brouhaha, elle ne domine jamais. Un volume trop élevé dès le cocktail fatigue les invités pour le reste de la journée.",
  },
  {
    question: "Comment sonoriser un vin d'honneur en extérieur, sans électricité ?",
    answer:
      "Avec du matériel sur batterie : chez MG Events, une enceinte autonome professionnelle couvre le cocktail dans le parc, au bord de l'étang ou dans la cour du domaine, sans un seul câble à tirer. Le micro sans fil reste disponible pour un toast ou une annonce.",
  },
  {
    question: "Faut-il prévoir des animations pendant le vin d'honneur ?",
    answer:
      "Le cocktail s'anime en douceur, surtout pendant l'absence des mariés partis faire les photos : photobooth en libre accès, mur photo alimenté par les invités, Livre d'Or Audio à découvrir. Des animations « en libre-service » plutôt qu'un programme imposé.",
  },
  {
    question: "Qui gère la musique du vin d'honneur si le DJ installe la salle ?",
    answer:
      "Question très pertinente à poser à votre prestataire : le cocktail et la salle de réception se déroulent souvent en parallèle. Chez MG Events, la sonorisation du cocktail sur batterie est incluse dans toutes les formules et fonctionne en autonomie pendant que l'installation de la salle se termine.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<><span className="text-[#c9a227]">Musique de vin d&apos;honneur</span> : créer l&apos;ambiance sans gêner les invités</>}
      plainTitle="Musique de vin d'honneur : créer l'ambiance sans gêner les invités"
      description="Styles, volume et sonorisation d'extérieur : les conseils DJ pour un cocktail de mariage réussi."
      heroImage="/images/gallery-7.jpg"
      heroAlt="Vin d'honneur de mariage en extérieur avec ambiance musicale"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="8 min"
      faqs={faqs}
      related={[
        { href: '/blog/occuper-invites-cocktail-mariage', title: 'Occuper les invités au cocktail', desc: 'Des idées pour un vin d\'honneur sans temps mort.' },
        { href: '/blog/planning-soiree-mariage', title: 'Planning de soirée mariage', desc: 'Le bon timing du jour J.' },
        { href: '/sonorisation-ceremonie-laique', title: 'Cérémonie laïque', desc: 'La sonorisation juste avant le cocktail.' },
      ]}
    >
      <p className="text-lg">
        Le vin d&apos;honneur est le premier moment de fête de votre mariage — et paradoxalement celui où
        la musique doit se faire la plus discrète. Trop forte, elle empêche les retrouvailles ; absente,
        le cocktail sonne creux. Voici comment on dose l&apos;ambiance musicale d&apos;un cocktail, après
        des centaines de vins d&apos;honneur dans les parcs, cours et jardins de Bretagne.
      </p>

      <H2>Le rôle exact de la musique au cocktail</H2>
      <p>
        Pendant le vin d&apos;honneur, la vedette n&apos;est pas la musique : ce sont les conversations.
        Des invités qui ne se sont pas vus depuis des années se retrouvent, les familles font connaissance,
        les premiers toasts se lèvent. La musique a un rôle de <strong className="text-white">décor
        sonore</strong> : elle habille les silences, couvre le brouhaha, installe l&apos;élégance de la
        journée — sans jamais obliger qui que ce soit à hausser la voix.
      </p>
      <p>
        Le test infaillible : deux personnes à un mètre l&apos;une de l&apos;autre doivent converser
        confortablement. Si elles se penchent l&apos;une vers l&apos;autre pour s&apos;entendre, le volume
        est trop haut — et la fatigue auditive accumulée au cocktail se paiera au moment de la soirée
        dansante.
      </p>

      <H2>Quels styles fonctionnent (et pourquoi)</H2>
      <p>
        Les valeurs sûres du cocktail : le jazz et la soul (élégants, intemporels, appréciés de toutes les
        générations), les reprises acoustiques de titres connus (le sourire de reconnaissance sans
        l&apos;envie de danser), la bossa et le lounge (parfaits en extérieur l&apos;été), la variété douce
        française. L&apos;idée directrice : des mélodies que l&apos;oreille reconnaît sans que le corps ne
        réclame la piste — la piste, c&apos;est pour plus tard.
      </p>
      <p>
        Évitez en revanche les hits de dancefloor dès le cocktail : ils créent une fausse promesse
        d&apos;ambiance et « grillent » des cartouches précieuses pour la soirée. Chaque chose en son
        temps — c&apos;est toute la logique du{' '}
        <Link href="/blog/planning-soiree-mariage" className="text-[#c9a227] hover:underline">planning de
        soirée</Link>.
      </p>

      <H2>La technique : sonoriser dehors, sans électricité</H2>
      <p>
        Le vin d&apos;honneur breton se vit dehors — dans le parc du domaine, la cour du manoir, face à
        l&apos;étang. Or les prises électriques, elles, sont restées dans la salle. La solution
        professionnelle : une <strong className="text-white">enceinte autonome sur batterie</strong>,
        positionnée pour couvrir l&apos;espace du cocktail sans « point de douleur » sonore près des
        tables hautes. Chez MG Events, la sonorisation du cocktail sur enceinte batterie est incluse dans
        toutes les formules, avec un micro sans fil disponible pour un toast, une annonce ou une surprise.
      </p>
      <p>
        Même logique que pour la <Link href="/sonorisation-ceremonie-laique" className="text-[#c9a227] hover:underline">cérémonie
        laïque</Link> qui précède souvent le cocktail : l&apos;autonomie électrique vous libère du choix du
        lieu.
      </p>

      <H2>Pendant les photos des mariés : le moment à ne pas rater</H2>
      <p>
        Il y a un moment délicat dans tout vin d&apos;honneur : celui où vous partez faire les photos de
        couple. Trente à soixante minutes où vos invités sont entre eux. C&apos;est là que les animations
        « en libre-service » prennent le relais : le{' '}
        <Link href="/photobooth-mariage" className="text-[#c9a227] hover:underline">photobooth vintage</Link> qui
        tourne, le <Link href="/livre-dor-audio" className="text-[#c9a227] hover:underline">Livre d&apos;Or
        Audio</Link> qu&apos;on se passe le combiné, le{' '}
        <Link href="/mur-photo-mariage" className="text-[#c9a227] hover:underline">mur photo</Link> qui
        s&apos;alimente en direct. À votre retour, la sensation d&apos;un cocktail qui a vécu sans vous
        attendre — d&apos;autres idées dans notre article{' '}
        <Link href="/blog/occuper-invites-cocktail-mariage" className="text-[#c9a227] hover:underline">occuper les
        invités pendant le cocktail</Link>.
      </p>

      <H2>La transition vers le repas</H2>
      <p>
        Dernière subtilité : la fin du cocktail. L&apos;annonce du passage à table se fait au micro, en
        douceur, avec la complicité du maître d&apos;hôtel — et la musique accompagne la migration vers la
        salle plutôt que de s&apos;interrompre brutalement. Idéalement, l&apos;ambiance musicale de la
        salle prend le relais sans couture : c&apos;est l&apos;avantage d&apos;un prestataire unique qui
        gère cérémonie, cocktail et soirée, sans trou de couverture entre les moments.
      </p>
    </BlogArticleShell>
  );
}
