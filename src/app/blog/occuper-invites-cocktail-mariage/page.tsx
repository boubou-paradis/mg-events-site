import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'occuper-invites-cocktail-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Comment occuper les invités pendant le cocktail de mariage',
  description:
    "Le cocktail de mariage est souvent un moment creux pendant les photos de couple. Découvrez comment occuper et amuser vos invités avec des animations interactives sur smartphone.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: 'Comment occuper les invités pendant le cocktail de mariage',
    description: "Quiz, blind test, partage photo : nos idées pour un vin d'honneur sans temps mort.",
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Combien de temps dure le cocktail de mariage ?',
    answer:
      "Le cocktail dure généralement entre 1h30 et 2h, le temps que les mariés réalisent leurs photos de couple. C'est souvent le moment où les invités s'ennuient le plus s'il n'est pas animé.",
  },
  {
    question: 'Quelles animations pour le vin d\'honneur ?',
    answer:
      "Le quiz interactif et le partage photo en direct sont idéaux : légers, ils n'interrompent pas les discussions et créent une dynamique conviviale. Le blind test fonctionne aussi très bien pour réchauffer l'ambiance.",
  },
  {
    question: 'Faut-il un animateur dédié pour le cocktail ?',
    answer:
      "Pas nécessairement. Avec une plateforme comme AnimaJet, le DJ lance les animations à distance et le partage photo tourne en autonomie sur l'écran. Les invités s'animent d'eux-mêmes.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<>Comment occuper les invités pendant le <span className="text-[#c9a227]">cocktail de mariage</span></>}
      plainTitle="Comment occuper les invités pendant le cocktail de mariage"
      description="Le cocktail de mariage est souvent un moment creux pendant les photos de couple. Découvrez comment occuper vos invités."
      heroImage="/images/gallery-8.jpg"
      heroAlt="Invités animés pendant le cocktail et le vin d'honneur d'un mariage"
      date="4 juin 2026"
      isoDate="2026-06-04"
      readTime="8 min"
      faqs={faqs}
      related={[
        { href: '/animation-cocktail-mariage', title: 'Animation cocktail de mariage', desc: 'Notre page dédiée à l\'animation du vin d\'honneur.' },
        { href: '/blog/idees-animation-mariage-originale-2026', title: '10 idées d\'animations originales', desc: 'Pour rythmer toute votre journée.' },
      ]}
    >
      <p className="text-lg">
        Il y a un moment du mariage que personne ne prépare vraiment, et qui pourtant peut faire toute la différence : le <strong className="text-white">cocktail</strong>.
        Pendant que vous enchaînez les photos de couple, vos invités patientent — parfois près de deux heures. Sans animation, c&apos;est le risque du temps mort.
        Voici comment transformer ce creux en vrai moment de fête.
      </p>

      <H2>Pourquoi le cocktail est un moment à risque</H2>
      <p>
        Le vin d&apos;honneur arrive juste après la cérémonie, dans l&apos;euphorie. Mais une fois le premier verre servi et les premières félicitations échangées,
        un flottement s&apos;installe souvent. Les mariés sont absents (séance photo oblige), les invités ne se connaissent pas tous, et l&apos;attente peut sembler longue.
      </p>
      <p>
        C&apos;est précisément là qu&apos;une animation bien pensée fait des merveilles : elle occupe sans forcer, brise la glace entre les tablées, et installe
        une énergie positive qui se prolongera toute la soirée.
      </p>

      <H2>La règle d&apos;or : animer sans interrompre</H2>
      <p>
        Au cocktail, on ne veut pas d&apos;une animation qui oblige tout le monde à s&apos;arrêter de discuter. L&apos;idéal, ce sont des animations
        <strong className="text-white"> légères et facultatives</strong>, auxquelles on participe entre deux conversations. Les animations interactives sur
        smartphone sont parfaites pour ça.
      </p>
      <div className="card-dark p-6 my-6 space-y-4">
        <div>
          <p className="text-white font-medium mb-1">Le quiz interactif</p>
          <p className="text-sm">Une session courte de 10-15 minutes sur les mariés : convivial, drôle, et ça lance les discussions entre invités.</p>
        </div>
        <div>
          <p className="text-white font-medium mb-1">Le partage photo en direct</p>
          <p className="text-sm">Il tourne en arrière-plan sur l&apos;écran sans interrompre personne. Les invités envoient leurs premières photos, l&apos;ambiance se réchauffe.</p>
        </div>
        <div>
          <p className="text-white font-medium mb-1">Le blind test</p>
          <p className="text-sm">Pour les cocktails plus festifs : quelques extraits à reconnaître, et la salle s&apos;électrise avant même le repas.</p>
        </div>
      </div>

      <H2>L&apos;avantage du partage photo pendant vos photos de couple</H2>
      <p>
        Pendant que vous immortalisez votre amour devant l&apos;objectif, vos invités immortalisent l&apos;ambiance avec leur smartphone. Avec le
        <Link href="/partage-photo-mariage" className="text-[#c9a227] hover:underline"> partage photo en direct</Link>, ces clichés s&apos;affichent en
        continu sur l&apos;écran. Résultat : à votre retour, vous découvrez une salle déjà animée et un <Link href="/mur-photo-mariage" className="text-[#c9a227] hover:underline">mur photo</Link> qui
        a commencé à se remplir.
      </p>

      <H2>Anticiper le matériel et le lieu</H2>
      <p>
        Animer le cocktail suppose un minimum d&apos;installation : un écran ou un mur de projection, une sonorisation d&apos;appoint. Que votre vin d&apos;honneur
        se tienne en intérieur ou dans un jardin de château breton, un prestataire expérimenté adapte le dispositif au lieu. C&apos;est un point que nous calons
        toujours lors du rendez-vous de préparation.
      </p>

      <H2>En résumé : un cocktail animé donne le ton</H2>
      <p>
        Un cocktail sans temps mort, c&apos;est une soirée qui démarre sur les chapeaux de roue. Les invités sont déjà dans l&apos;ambiance, les générations se sont
        mélangées, et la transition vers le repas puis la piste de danse se fait naturellement. Avec <Link href="/animation-cocktail-mariage" className="text-[#c9a227] hover:underline">les bonnes animations de cocktail</Link>,
        ce moment souvent négligé devient l&apos;un des plus réussis de votre journée.
      </p>
    </BlogArticleShell>
  );
}
