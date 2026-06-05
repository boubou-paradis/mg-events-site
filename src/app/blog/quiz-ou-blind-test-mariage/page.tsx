import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'quiz-ou-blind-test-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Quiz ou blind test : quelle animation choisir pour son mariage ?',
  description:
    "Quiz interactif ou blind test musical pour votre mariage ? On compare les deux animations stars : déroulé, ambiance, public, moment idéal. Et pourquoi ne pas choisir les deux ?",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: 'Quiz ou blind test : quelle animation choisir pour son mariage ?',
    description: "Le comparatif des deux animations interactives stars du mariage.",
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Quelle est la différence entre un quiz et un blind test de mariage ?',
    answer:
      "Le quiz porte sur des questions (l'histoire des mariés, culture générale), tandis que le blind test consiste à reconnaître des musiques. Les deux se jouent sur smartphone avec affichage sur écran géant, et sont complémentaires.",
  },
  {
    question: 'Quelle animation choisir pour un public âgé ?',
    answer:
      "Le blind test fonctionne particulièrement bien avec un public mêlant les générations, car les classiques des années 60-80 permettent aux plus âgés de briller. Le quiz personnalisé sur la famille les séduit aussi beaucoup.",
  },
  {
    question: 'Peut-on faire un quiz ET un blind test au même mariage ?',
    answer:
      "Absolument, c'est même idéal. On peut programmer un quiz pendant le repas et un blind test avant la piste de danse. Les deux sont inclus dans AnimaJet, sans supplément.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<><span className="text-[#c9a227]">Quiz ou blind test</span> : quelle animation choisir pour son mariage ?</>}
      plainTitle="Quiz ou blind test : quelle animation choisir pour son mariage ?"
      description="Quiz interactif ou blind test musical pour votre mariage ? On compare les deux animations stars."
      heroImage="/images/gallery-2.jpg"
      heroAlt="Quiz et blind test interactifs lors d'une soirée de mariage"
      date="4 juin 2026"
      isoDate="2026-06-04"
      readTime="8 min"
      faqs={faqs}
      related={[
        { href: '/quiz-mariage-interactif', title: 'Quiz mariage interactif', desc: 'Tout savoir sur le quiz personnalisé.' },
        { href: '/blind-test-mariage', title: 'Blind test mariage', desc: 'La bataille musicale en direct.' },
      ]}
    >
      <p className="text-lg">
        Ce sont les deux stars des animations interactives de mariage : le <Link href="/quiz-mariage-interactif" className="text-[#c9a227] hover:underline">quiz</Link> et
        le <Link href="/blind-test-mariage" className="text-[#c9a227] hover:underline">blind test</Link>. Toutes deux se jouent sur smartphone, s&apos;affichent
        sur écran géant et fédèrent les invités. Mais elles n&apos;ont ni le même rythme, ni le même effet. Alors, laquelle choisir ? Spoiler : vous n&apos;êtes
        peut-être pas obligé de trancher.
      </p>

      <H2>Le quiz : l&apos;émotion et la complicité</H2>
      <p>
        Le quiz interactif repose sur des <strong className="text-white">questions</strong>. Le plus souvent, on le personnalise autour des mariés : où vous
        êtes-vous rencontrés ? Qui a dit «&nbsp;je t&apos;aime&nbsp;» en premier ? Quelle est la plus grande peur du marié ? On peut aussi y glisser de la culture
        générale pour équilibrer.
      </p>
      <p>
        Son atout, c&apos;est l&apos;<strong className="text-white">émotion</strong>. Le quiz crée des moments de complicité et de découverte : vos proches
        apprennent des anecdotes sur vous, et vous découvrez qui vous connaît vraiment. C&apos;est une animation plutôt posée, idéale pendant le repas, qui
        touche autant qu&apos;elle amuse.
      </p>

      <H2>Le blind test : l&apos;énergie et la compétition</H2>
      <p>
        Le blind test, lui, repose sur la <strong className="text-white">musique</strong>. On diffuse les premières notes d&apos;un titre, et c&apos;est la course
        pour le reconnaître. Le rythme est nerveux, la compétition bon enfant, l&apos;ambiance électrique.
      </p>
      <p>
        Son atout, c&apos;est l&apos;<strong className="text-white">énergie</strong>. Le blind test réveille la salle et la prépare idéalement à la piste de danse.
        C&apos;est aussi un formidable mélangeur de générations : les grands-parents reconnaissent souvent les classiques avant les jeunes, pour leur plus grand plaisir.
      </p>

      <H2>Le match en un coup d&apos;œil</H2>
      <div className="card-dark p-6 my-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-[#c9a227] font-medium mb-3">Le quiz</p>
            <ul className="text-sm space-y-2">
              <li>• Ambiance : émotion, complicité</li>
              <li>• Rythme : posé</li>
              <li>• Moment idéal : pendant le repas</li>
              <li>• Atout : personnalisable à votre histoire</li>
            </ul>
          </div>
          <div>
            <p className="text-[#c9a227] font-medium mb-3">Le blind test</p>
            <ul className="text-sm space-y-2">
              <li>• Ambiance : énergie, compétition</li>
              <li>• Rythme : nerveux</li>
              <li>• Moment idéal : avant la piste de danse</li>
              <li>• Atout : mélange les générations</li>
            </ul>
          </div>
        </div>
      </div>

      <H2>Notre conseil : pourquoi choisir ?</H2>
      <p>
        Dans les faits, les deux animations ne s&apos;opposent pas : elles se complètent. Le scénario idéal d&apos;une soirée réussie ressemble souvent à ça : un
        <strong className="text-white"> quiz pendant le repas</strong>, pour l&apos;émotion et les rires entre deux plats, puis un
        <strong className="text-white"> blind test juste avant d&apos;ouvrir la piste</strong>, pour faire monter l&apos;énergie. La transition vers la danse se fait alors toute seule.
      </p>
      <p>
        Bonne nouvelle : avec <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">AnimaJet</Link>, le quiz et le blind test
        sont tous les deux inclus, sans supplément. Vous n&apos;avez donc pas à choisir : il suffit de décider, avec votre DJ, à quel moment lancer chacun pour un
        effet maximal.
      </p>
    </BlogArticleShell>
  );
}
