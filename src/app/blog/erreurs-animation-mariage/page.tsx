import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'erreurs-animation-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: "Animation mariage : les erreurs qui cassent l'ambiance",
  description:
    "Trop de jeux, mauvais timing, micro mal géré, playlist imposée, zéro coordination avec le traiteur : les erreurs d'animation qui plombent un mariage, et comment les éviter.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: "Les erreurs à éviter pour l'animation de votre mariage",
    description: "25 ans de mariages, et toujours les mêmes erreurs qui cassent l'ambiance. La liste, pour les éviter.",
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: "Quelle est l'erreur d'animation la plus fréquente en mariage ?",
    answer:
      "Le trop-plein : trop de jeux, trop d'interruptions, trop de micro. Les invités viennent partager un moment avec vous, pas enchaîner les activités. Une ou deux animations bien placées marquent plus que six jeux qui hachent la soirée.",
  },
  {
    question: 'Comment éviter que la piste de danse reste vide ?',
    answer:
      "Trois leviers : lancer la piste au bon moment (juste après l'ouverture de bal, pas une heure plus tard), commencer par des titres fédérateurs que toutes les générations connaissent, et lire la salle en continu pour ajuster. Une piste se gagne dans les 20 premières minutes.",
  },
  {
    question: 'Les jeux avec des invités volontaires sont-ils une bonne idée ?',
    answer:
      "Avec de VRAIS volontaires, oui. L'erreur est de désigner ou de forcer : l'invité timide traîné sur scène passe un mauvais moment et la salle est mal à l'aise pour lui. Les animations interactives sur téléphone résolvent élégamment le problème : chacun participe depuis sa table, à son niveau.",
  },
  {
    question: "Pourquoi la coordination avec le traiteur est-elle si importante ?",
    answer:
      "Parce que les deux plannings s'imbriquent : une animation lancée au moment du service, c'est un plat froid et un service désorganisé. Le DJ et le maître d'hôtel doivent se parler avant et pendant toute la soirée. Un prestataire qui n'évoque pas ce sujet en préparation est un signal d'alerte.",
  },
  {
    question: 'Comment gérer le volume sonore pour ne gêner personne ?',
    answer:
      "Le volume se dose par moment : discret au cocktail et pendant le repas (on doit pouvoir converser sans forcer la voix), progressif à l'ouverture de la piste, plus généreux en cœur de soirée dansante. Un son agressif dès 20h fatigue la salle et fait fuir les aînés bien avant l'ouverture de bal.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<>Les <span className="text-[#c9a227]">erreurs à éviter</span> pour l&apos;animation de votre mariage</>}
      plainTitle="Les erreurs à éviter pour l'animation de votre mariage"
      description="Trop de jeux, mauvais timing, micro mal géré : les erreurs d'animation qui plombent un mariage."
      heroImage="/images/gallery-8.jpg"
      heroAlt="Invités de mariage sur la piste de danse dans une ambiance réussie"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="9 min"
      faqs={faqs}
      related={[
        { href: '/blog/animation-repas-mariage', title: 'Animer le repas de mariage', desc: 'Le bon dosage entre les plats.' },
        { href: '/blog/planning-soiree-mariage', title: 'Planning de soirée mariage', desc: 'Le bon timing du jour J.' },
        { href: '/blog/comment-choisir-dj-mariage-bretagne', title: 'Choisir son DJ mariage', desc: 'Les critères qui comptent vraiment.' },
      ]}
    >
      <p className="text-lg">
        En 25 ans de mariages, on a vu des soirées somptueuses… et quelques naufrages — heureusement
        jamais les nôtres, mais souvent racontés par des couples échaudés lors d&apos;un premier
        rendez-vous. Le point commun de tous ces récits : les mêmes erreurs d&apos;animation, qui
        reviennent inlassablement. Les voici, pour que votre soirée ne figure jamais dans cette liste.
      </p>

      <H2>Erreur n°1 : le trop-plein de jeux</H2>
      <p>
        La plus répandue. Par peur du vide, on programme six animations : jeu des chaises, quiz, jeu de la
        jarretière, diaporama, chansons à gestes, tombola… Résultat : un repas haché, des invités qui
        n&apos;ont jamais dix minutes pour se parler, et une fatigue générale avant même
        l&apos;ouverture de bal. Un mariage n&apos;est pas une colonie de vacances :{' '}
        <strong className="text-white">une ou deux animations bien choisies et bien placées</strong>{' '}
        marquent infiniment plus. Notre règle de terrain : si une animation ne manque à personne, elle
        était de trop.
      </p>

      <H2>Erreur n°2 : forcer les invités</H2>
      <p>
        Désigner « au hasard » l&apos;oncle réservé pour un jeu devant 120 personnes, faire lever les
        célibataires, imposer le micro qui tourne de table en table : ces moments mettent mal à
        l&apos;aise la personne visée <em>et</em> toute la salle qui compatit. La participation doit
        toujours être une porte ouverte, jamais une obligation. C&apos;est d&apos;ailleurs ce qui rend les{' '}
        <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">animations
        interactives sur téléphone</Link> si efficaces : chacun participe depuis sa table, les timides
        comme les extravertis — et ce sont souvent les timides qui gagnent le quiz.
      </p>

      <H2>Erreur n°3 : ignorer le traiteur</H2>
      <p>
        L&apos;erreur invisible qui fait les catastrophes visibles. Le service d&apos;un repas de mariage
        est une mécanique de précision ; une surprise des témoins lancée au moment où les assiettes
        chaudes partent en cuisine, et c&apos;est un plat froid pour toute la salle. Le DJ doit se
        présenter au maître d&apos;hôtel dès l&apos;installation, caler chaque intervention entre les
        services et rester en contact toute la soirée. Si votre prestataire ne mentionne jamais le
        traiteur en préparation, posez la question — les détails sont dans notre{' '}
        <Link href="/blog/questions-a-poser-dj-mariage" className="text-[#c9a227] hover:underline">checklist des
        questions à poser</Link>.
      </p>

      <H2>Erreur n°4 : le micro mal géré</H2>
      <p>
        Le Larsen strident pendant le discours du papa, le témoin inaudible, la sono qui couvre les voix :
        techniquement évitable à 100 %, et pourtant si fréquent. Les discours sont des moments
        d&apos;émotion pure — ils méritent des micros sans fil testés, un niveau réglé en direct et un DJ
        attentif qui monte ou baisse la musique au bon moment. C&apos;est aussi pour cela qu&apos;une{' '}
        <Link href="/sonorisation-ceremonie-laique" className="text-[#c9a227] hover:underline">cérémonie
        laïque sonorisée</Link> se confie à des techniciens, pas à une enceinte posée sur une chaise.
      </p>

      <H2>Erreur n°5 : la playlist imposée — dans un sens ou dans l&apos;autre</H2>
      <p>
        Deux versions de la même erreur. Le DJ qui déroule <em>son</em> programme sans écouter les mariés :
        vos incontournables passent à la trappe, et la soirée ne vous ressemble pas. Ou l&apos;inverse :
        300 titres imposés dans un ordre figé, et le DJ ne peut plus s&apos;adapter à la piste réelle. Le
        bon équilibre — vos choix, sa lecture de salle — est détaillé dans notre article{' '}
        <Link href="/blog/playlist-mariage-toutes-generations" className="text-[#c9a227] hover:underline">playlist
        toutes générations</Link>.
      </p>

      <H2>Erreur n°6 : le mauvais timing des temps forts</H2>
      <p>
        L&apos;ouverture de bal à 0h45 quand les grands-parents sont partis. Le gâteau qui coupe une piste
        en pleine euphorie. Le bouquet lancé pendant que la moitié des invités fume dehors. Chaque temps
        fort a son créneau optimal, et les enchaîner au bon moment est un métier — on a consacré un{' '}
        <Link href="/blog/planning-soiree-mariage" className="text-[#c9a227] hover:underline">article entier au
        planning de la soirée</Link>.
      </p>

      <H2>Erreur n°7 : le volume qui fatigue</H2>
      <p>
        Un son de discothèque dès l&apos;apéritif use la salle en deux heures : les conversations
        deviennent des efforts, les aînés se réfugient dehors, et paradoxalement… la piste démarre moins
        bien. Le volume est un outil dramatique : discret au repas pour que la parole circule, il monte
        avec la soirée et donne à la piste son caractère d&apos;événement. Si les invités doivent crier
        pour se parler à 20h30, quelque chose ne va pas.
      </p>

      <H2>Le fil rouge : l&apos;animation au service de la soirée</H2>
      <p>
        Toutes ces erreurs ont la même racine : une animation qui se met en avant au lieu de servir la
        fête. Le bon DJ animateur se juge à une chose — à la fin de la soirée, les invités disent
        « quelle soirée ! », pas « quel DJ ! ». Les deux font parfois la différence entre un souvenir
        magique et une déception, et c&apos;est précisément ce qui doit guider votre choix de prestataire.
      </p>
    </BlogArticleShell>
  );
}
