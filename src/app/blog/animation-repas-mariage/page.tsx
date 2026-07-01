import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'animation-repas-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Animation repas mariage : idées élégantes entre les plats',
  description:
    "Comment animer un repas de mariage sans casser l'ambiance : animations courtes entre les plats, coordination avec le traiteur, quiz et blind test bien dosés. Conseils de DJ de terrain.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: "Comment animer un repas de mariage sans casser l'ambiance",
    description: 'Animations courtes, timing avec le traiteur et juste dose : les conseils d\'un DJ animateur de terrain.',
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Faut-il des animations pendant le repas de mariage ?',
    answer:
      "Oui, mais dosées : un repas de mariage dure souvent trois à quatre heures, et sans respiration, l'énergie retombe. Une ou deux animations courtes entre les plats suffisent à relancer l'attention — l'erreur inverse (enchaîner les jeux) fatigue les invités et gêne le service du traiteur.",
  },
  {
    question: 'Quelles animations fonctionnent le mieux pendant le repas ?',
    answer:
      "Les formats courts et inclusifs : un quiz sur les mariés (10-15 minutes), une manche de blind test, le jeu « elle et lui », une rétrospective photo. Les invités participent depuis leur table — personne n'est forcé de monter sur scène entre le plat et le fromage.",
  },
  {
    question: 'Comment coordonner les animations avec le traiteur ?',
    answer:
      "C'est LE point clé, souvent oublié : une animation lancée au moment où le traiteur envoie le plat chaud, c'est un plat froid pour 100 personnes. Le DJ doit caler le déroulé avec le maître d'hôtel avant le service et communiquer avec lui toute la soirée. Chez MG Events, ce dialogue fait partie de la prestation.",
  },
  {
    question: 'Combien de temps doit durer une animation de repas ?',
    answer:
      "10 à 15 minutes maximum par animation. Au-delà, les conversations s'interrompent trop longtemps, le service prend du retard et l'animation devient une contrainte. Mieux vaut deux moments courts et rythmés qu'un long tunnel de jeux.",
  },
  {
    question: 'Et les surprises des témoins pendant le repas ?',
    answer:
      "Ce sont souvent les meilleurs moments — vidéos, chansons détournées, diaporamas. Le rôle du DJ : les coordonner en amont (via un groupe dédié avec les témoins), les placer au bon moment entre les plats, gérer micro et diffusion pour que la surprise soit parfaite techniquement.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<>Comment animer un <span className="text-[#c9a227]">repas de mariage</span> sans casser l&apos;ambiance</>}
      plainTitle="Comment animer un repas de mariage sans casser l'ambiance"
      description="Animations courtes, coordination traiteur et juste dose : les conseils d'un DJ animateur de terrain."
      heroImage="/images/gallery-6.jpg"
      heroAlt="Salle de réception de mariage pendant le repas, ambiance chaleureuse"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="9 min"
      faqs={faqs}
      related={[
        { href: '/blog/planning-soiree-mariage', title: 'Planning de soirée mariage', desc: 'Le bon timing du jour J.' },
        { href: '/blog/quiz-ou-blind-test-mariage', title: 'Quiz ou blind test ?', desc: 'Choisir la bonne animation.' },
        { href: '/blog/erreurs-animation-mariage', title: 'Les erreurs d\'animation', desc: 'Ce qui casse l\'ambiance d\'un mariage.' },
      ]}
    >
      <p className="text-lg">
        Pendant le repas, l&apos;objectif n&apos;est pas d&apos;enchaîner les jeux. Il faut garder une
        ambiance vivante sans fatiguer les invités ni gêner le service du traiteur. C&apos;est probablement
        la partie la plus subtile du métier de DJ animateur de mariage — et celle où l&apos;on voit le plus
        d&apos;erreurs. Voici comment on construit un repas qui reste un plaisir, du début à la fin.
      </p>

      <H2>Le repas de mariage, un moment plus fragile qu&apos;il n&apos;y paraît</H2>
      <p>
        Trois à quatre heures à table, des invités qui ne se connaissent pas tous, des enfants qui
        fatiguent, un service qui impose son rythme : le repas est le moment où l&apos;énergie de la
        journée peut s&apos;éroder sans qu&apos;on s&apos;en aperçoive. Trop d&apos;animation et vous
        épuisez la salle avant même l&apos;ouverture de bal ; pas assez et les conversations
        s&apos;essoufflent vers le plat principal.
      </p>
      <p>
        La bonne approche tient en une phrase : <strong className="text-white">le repas appartient aux
        invités, l&apos;animation vient le ponctuer</strong> — jamais l&apos;inverse.
      </p>

      <H2>La règle d&apos;or : la coordination avec le traiteur</H2>
      <p>
        Avant toute considération artistique, une réalité de terrain : le traiteur a un timing, et ce
        timing est prioritaire. Un quiz lancé au moment où les assiettes chaudes partent en salle, c&apos;est
        un plat servi froid à cent personnes et une équipe de service en surchauffe. Un bon DJ animateur se
        présente au maître d&apos;hôtel dès son arrivée, cale les fenêtres d&apos;animation entre les
        services, et garde le contact toute la soirée : « le plat part dans dix minutes » est
        l&apos;information la plus précieuse de la soirée.
      </p>
      <p>
        C&apos;est aussi valable pour les discours et les surprises des témoins : mieux vaut décaler une
        vidéo de cinq minutes que d&apos;interrompre le service. Cette coordination invisible fait partie
        intégrante de la prestation — c&apos;est l&apos;une des{' '}
        <Link href="/blog/questions-a-poser-dj-mariage" className="text-[#c9a227] hover:underline">questions à
        poser à votre DJ</Link> avant de signer.
      </p>

      <H2>Les animations qui fonctionnent entre les plats</H2>
      <p>
        <strong className="text-white">Le quiz sur les mariés.</strong> Le grand classique, et pour cause :
        tout le monde a un avis sur « qui des deux est le plus têtu ». En version interactive — chaque
        table répond depuis un téléphone via QR code, les scores s&apos;affichent sur écran — il crée une
        compétition bon enfant entre les tables sans forcer personne à se lever. Quinze minutes, pas plus.
      </p>
      <p>
        <strong className="text-white">Une manche de blind test.</strong> Entre le plat et le fromage, une
        manche courte sur les années qui parlent à toutes les générations. Les tables chantent, les
        grands-parents battent les petits-enfants sur les années 60, et l&apos;énergie remonte d&apos;un
        cran juste quand il le faut.
      </p>
      <p>
        <strong className="text-white">La rétrospective photo.</strong> Un diaporama d&apos;enfance des
        mariés, ou mieux : les photos prises par les invités depuis le début de la journée, projetées en
        direct. Avec le <Link href="/partage-photo-mariage" className="text-[#c9a227] hover:underline">partage
        photo en direct</Link>, les clichés du vin d&apos;honneur défilent pendant le repas — émotion
        garantie, zéro logistique.
      </p>
      <p>
        <strong className="text-white">Les surprises des témoins.</strong> Vidéos, chansons réécrites,
        sketchs : ce sont souvent les moments les plus forts du repas. Notre rôle : les coordonner en amont
        via un groupe dédié, vérifier les fichiers avant le jour J (la vidéo qui ne se lance pas est un
        classique du mariage), et les placer aux bons créneaux.
      </p>

      <H2>Ce qu&apos;il faut éviter absolument</H2>
      <p>
        Les jeux qui désignent des volontaires forcés — l&apos;oncle timide traîné sur scène passe un
        mauvais moment, et la salle le sent. Les animations à rallonge qui retardent le service. Le micro
        qui circule de table en table pour « un petit mot de chacun » : à la cinquième table, plus personne
        n&apos;écoute. Et le volume de musique trop élevé pendant le repas — si les invités doivent crier
        pour se parler, l&apos;ambiance retombe paradoxalement. On détaille tout cela dans{' '}
        <Link href="/blog/erreurs-animation-mariage" className="text-[#c9a227] hover:underline">les erreurs qui
        cassent l&apos;ambiance d&apos;un mariage</Link>.
      </p>

      <H2>Garder de l&apos;essence pour la suite</H2>
      <p>
        Rappelez-vous que le repas n&apos;est pas la destination : c&apos;est le chemin vers
        l&apos;ouverture de bal et la soirée dansante. Un repas bien animé laisse les invités{' '}
        <em>en appétit</em> d&apos;ambiance — détendus, connectés entre eux, prêts à envahir la piste. Si
        tout a été donné entre l&apos;entrée et le dessert, il ne reste rien pour la nuit. Le dosage,
        c&apos;est le métier.
      </p>
    </BlogArticleShell>
  );
}
