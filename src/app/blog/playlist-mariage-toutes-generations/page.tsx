import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'playlist-mariage-toutes-generations';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Playlist mariage : faire danser toutes les générations',
  description:
    "Comment construire une playlist de mariage qui fait danser de 7 à 77 ans : la logique DJ derrière l'enchaînement, les erreurs à éviter et la place à laisser à vos incontournables.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: 'Playlist mariage : comment faire danser toutes les générations',
    description: "La logique DJ derrière une soirée qui ne retombe jamais : montée en énergie, alternance et lecture de piste.",
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Peut-on choisir soi-même la playlist de son mariage ?',
    answer:
      "Oui, et vous devez le faire — en partie. Vos incontournables et vos interdits sont la matière première du DJ. Mais l'ordre d'enchaînement, les transitions et les changements de style en fonction de la piste relèvent du métier : une même liste de titres peut faire une soirée mémorable ou un enchaînement plat selon la façon dont elle est jouée.",
  },
  {
    question: 'Comment faire danser les grands-parents ET les amis de 25 ans ?',
    answer:
      "Par l'alternance et le bon timing : les classiques fédérateurs (années 60-80, variété française) en début de soirée dansante quand tout le monde est sur la piste, les sons plus actuels quand la soirée avance. Un bon DJ crée des ponts — un remix moderne d'un classique fait danser les deux publics en même temps.",
  },
  {
    question: 'Faut-il éviter certains styles de musique à un mariage ?',
    answer:
      "Aucun style n'est interdit en soi — tout dépend de vos invités et du moment. La vraie règle est ailleurs : établissez votre « liste noire » (les titres que vous ne voulez absolument pas entendre) et confiez-la au DJ. C'est aussi important que la liste de vos incontournables.",
  },
  {
    question: 'Combien de titres faut-il donner à son DJ ?',
    answer:
      "Une vingtaine d'incontournables et une liste d'interdits suffisent largement, avec la couleur générale souhaitée (plutôt généraliste, plutôt années 90, plutôt électro…). Fournir 300 titres imposés revient à transformer le DJ en jukebox — et à perdre sa capacité d'adaptation en direct.",
  },
  {
    question: "Le DJ prend-il les demandes des invités pendant la soirée ?",
    answer:
      "Oui, avec discernement : une demande qui sert l'énergie de la piste est jouée, une demande qui casserait l'ambiance est reportée ou déclinée avec le sourire. Et si un titre demandé figure sur votre liste noire, il ne passera pas — vos consignes priment toujours.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<><span className="text-[#c9a227]">Playlist mariage</span> : comment faire danser toutes les générations</>}
      plainTitle="Playlist mariage : comment faire danser toutes les générations"
      description="La logique DJ derrière une playlist de mariage qui fait danser de 7 à 77 ans."
      heroImage="/images/gallery-5.jpg"
      heroAlt="Piste de danse de mariage remplie, toutes générations confondues"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="9 min"
      faqs={faqs}
      related={[
        { href: '/blog/planning-soiree-mariage', title: 'Planning de soirée mariage', desc: 'Le bon timing pour garder l\'ambiance.' },
        { href: '/blog/dj-ou-playlist-spotify-mariage', title: 'DJ ou playlist Spotify ?', desc: 'Ce qu\'une playlist ne peut pas faire.' },
        { href: '/blind-test-mariage', title: 'Blind test mariage', desc: 'L\'animation musicale qui fédère.' },
      ]}
    >
      <p className="text-lg">
        On nous demande souvent « la » playlist parfaite pour un mariage. La vérité qu&apos;on peut vous
        dire après 25 ans derrière les platines : elle n&apos;existe pas. Une playlist de mariage
        n&apos;est pas une liste de bons titres, c&apos;est une <strong className="text-white">trajectoire</strong> —
        et cette trajectoire dépend de vos invités, de votre salle et de ce qui se passe en direct sur la
        piste. Voici la logique derrière une soirée qui ne retombe pas.
      </p>

      <H2>Pourquoi une bonne playlist ne suffit pas</H2>
      <p>
        Prenez cent excellents titres et enchaînez-les dans le désordre : vous obtenez une soirée en dents
        de scie, où la piste se remplit et se vide toutes les dix minutes. Le même répertoire, ordonné et
        joué en fonction de la salle, tient une piste pleine pendant des heures. Ce qui change tout,
        c&apos;est l&apos;<strong className="text-white">enchaînement</strong> : la montée progressive en
        énergie, les transitions qui ne cassent pas l&apos;élan, et la capacité à changer de direction
        quand un choix ne prend pas.
      </p>
      <p>
        C&apos;est la différence fondamentale entre une playlist et un DJ : la playlist déroule, le DJ{' '}
        <strong className="text-white">lit la piste</strong>. Trois titres pour sentir qu&apos;un public
        répond mieux à la variété française qu&apos;à l&apos;électro, et le programme s&apos;ajuste en
        temps réel.
      </p>

      <H2>La mécanique d&apos;une soirée toutes générations</H2>
      <p>
        Un mariage réunit ce qu&apos;aucune boîte de nuit ne connaît : quatre générations dans la même
        salle, des grands-parents aux enfants. La mécanique qui fonctionne :
      </p>
      <p>
        <strong className="text-white">L&apos;ouverture fédératrice.</strong> Juste après l&apos;ouverture
        de bal, les titres que tout le monde connaît — variété française, disco, classiques des années
        70-80. C&apos;est le moment où les grands-parents dansent : ne le ratez pas, il ne reviendra pas à
        1h du matin.
      </p>
      <p>
        <strong className="text-white">L&apos;alternance par vagues.</strong> Plutôt que de segmenter
        (« l&apos;heure des vieux, puis l&apos;heure des jeunes »), on alterne par vagues courtes en
        gardant des ponts entre les styles : un remix actuel d&apos;un classique, une reprise, un medley.
        Les deux publics restent sur la piste en même temps — c&apos;est ça, la photo que vous voulez.
      </p>
      <p>
        <strong className="text-white">La montée de fin de soirée.</strong> Quand les aînés se retirent, la
        piste peut monter en énergie : sons actuels, électro, hits qui font sauter. La soirée se termine en
        apothéose pour ceux qui restent, sans avoir sacrifié le début.
      </p>

      <H2>Votre rôle : les incontournables et la liste noire</H2>
      <p>
        Lors du rendez-vous de préparation, deux listes valent de l&apos;or. La première : vos{' '}
        <strong className="text-white">incontournables</strong> — la chanson de votre rencontre, les titres
        de vos soirées entre amis, le tube préféré de votre grand-mère. Une vingtaine suffit : ils seront
        placés aux bons moments, pas empilés.
      </p>
      <p>
        La seconde, tout aussi importante : la <strong className="text-white">liste noire</strong>. Les
        titres que vous ne voulez pas entendre, même demandés par un invité insistant à minuit. Chez MG
        Events, cette liste est sacrée : elle prime sur toutes les demandes de la soirée.
      </p>

      <H2>Les erreurs qu&apos;on voit (trop) souvent</H2>
      <p>
        Imposer 300 titres dans un ordre figé — le DJ devient jukebox et ne peut plus s&apos;adapter.
        Vouloir « que du récent » quand la moitié des invités a plus de 50 ans — la piste sera vide
        jusqu&apos;à 23h. Oublier le volume du repas — la musique de dîner doit permettre les
        conversations, on y revient dans notre article sur{' '}
        <Link href="/blog/animation-repas-mariage" className="text-[#c9a227] hover:underline">l&apos;animation du
        repas</Link>. Et la pire : ne pas en parler du tout avec son DJ, en espérant que « ça ira ».
        Une soirée réussie se prépare — c&apos;est exactement le rôle du{' '}
        <Link href="/blog/questions-a-poser-dj-mariage" className="text-[#c9a227] hover:underline">rendez-vous de
        préparation</Link>.
      </p>

      <H2>Et le blind test dans tout ça ?</H2>
      <p>
        Une astuce qu&apos;on utilise souvent pour réchauffer une salle avant la piste : le{' '}
        <Link href="/blind-test-mariage" className="text-[#c9a227] hover:underline">blind test musical</Link> en
        début de soirée. Chaque génération brille sur ses années, tout le monde chante, et quand la piste
        ouvre juste après, elle est déjà gagnée. C&apos;est l&apos;un des outils de notre plateforme
        AnimaJet — les invités jouent depuis leur téléphone, sans rien installer.
      </p>
    </BlogArticleShell>
  );
}
