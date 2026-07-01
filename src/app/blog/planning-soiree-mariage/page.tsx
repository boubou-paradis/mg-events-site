import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'planning-soiree-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Planning soirée mariage : le bon timing pour l\'ambiance',
  description:
    "Le planning d'une soirée de mariage réussie, heure par heure : vin d'honneur, repas, discours, ouverture de bal, soirée dansante. Les pièges de timing et comment les éviter.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: "Planning d'une soirée de mariage : le bon timing pour garder l'ambiance",
    description: "Heure par heure, comment se construit une soirée qui ne retombe jamais — par un DJ de terrain.",
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'À quelle heure faire l\'ouverture de bal ?',
    answer:
      "Idéalement juste après le dessert, vers 23h-23h30 : les invités sont encore tous présents et l'énergie du repas porte le moment. Trop tard (1h du matin), les aînés sont partis et la magie s'évente ; trop tôt, la coupure du dessert casse l'élan de la piste juste lancée.",
  },
  {
    question: 'Combien de temps prévoir pour le vin d\'honneur ?',
    answer:
      "Deux heures est un bon standard : assez pour les photos de couple, les retrouvailles et les toasts, pas assez pour que les invités aient faim et fatiguent. Au-delà de 2h30, l'attente se sent — surtout pour les enfants et les aînés.",
  },
  {
    question: 'Où placer les discours et les surprises des témoins ?',
    answer:
      "Répartis entre les plats plutôt que concentrés en bloc : un discours à l'entrée, une surprise entre plat et fromage, une vidéo au dessert. Chaque intervention doit être calée avec le traiteur pour ne jamais retarder un service — c'est le rôle du DJ de tenir ce fil.",
  },
  {
    question: 'Que faire si le repas prend du retard ?',
    answer:
      "C'est le cas le plus fréquent — un repas de mariage glisse facilement de 30 à 60 minutes. Un bon déroulé prévoit cette élasticité : des animations qu'on peut déplacer ou raccourcir, une ouverture de bal qui peut glisser sans stress, et un DJ qui recale tout en direct avec le traiteur sans que les invités ne remarquent rien.",
  },
  {
    question: 'Jusqu\'à quelle heure faire durer la soirée dansante ?',
    answer:
      "L'heure de fin est définie avec votre DJ et votre salle avant le mariage (certains lieux imposent une limite sonore ou horaire). Le vrai secret d'une belle fin de soirée n'est pas l'heure, c'est de terminer sur une piste pleine — mieux vaut finir à 3h dans l'euphorie qu'à 5h devant dix personnes.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<><span className="text-[#c9a227]">Planning d&apos;une soirée de mariage</span> : le bon timing pour garder l&apos;ambiance</>}
      plainTitle="Planning d'une soirée de mariage : le bon timing pour garder l'ambiance"
      description="Heure par heure, comment se construit une soirée de mariage qui ne retombe jamais."
      heroImage="/images/gallery-1.jpg"
      heroAlt="Salle de réception de mariage prête pour la soirée, mise en lumière élégante"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="10 min"
      faqs={faqs}
      related={[
        { href: '/blog/animation-repas-mariage', title: 'Animer le repas de mariage', desc: 'Les animations courtes qui fonctionnent.' },
        { href: '/blog/ouverture-de-bal-conseils', title: 'Réussir son ouverture de bal', desc: 'Musique, effets et chorégraphie.' },
        { href: '/blog/musique-vin-honneur', title: "Musique du vin d'honneur", desc: "L'ambiance juste dès le cocktail." },
      ]}
    >
      <p className="text-lg">
        Une soirée de mariage réussie ne doit rien au hasard : c&apos;est une question de timing. Après 25
        ans de mariages, on sait exactement où se cachent les pièges — le vin d&apos;honneur qui
        s&apos;éternise, le repas qui glisse, l&apos;ouverture de bal trop tardive. Voici le déroulé type
        d&apos;une soirée qui garde son énergie du premier toast au dernier morceau, et surtout la logique
        derrière chaque horaire.
      </p>

      <H2>17h – 19h : le vin d&apos;honneur, l&apos;ouverture du film</H2>
      <p>
        Le cocktail donne le ton de toute la journée. Deux heures est la bonne durée : le temps des photos
        de couple, des retrouvailles et des bulles, sans que l&apos;attente ne pèse. Côté musique, une
        ambiance présente mais discrète — on en parle en détail dans notre article sur la{' '}
        <Link href="/blog/musique-vin-honneur" className="text-[#c9a227] hover:underline">musique du vin
        d&apos;honneur</Link>. C&apos;est aussi le moment où une animation douce trouve sa place : le
        photobooth qui démarre, le <Link href="/livre-dor-audio" className="text-[#c9a227] hover:underline">Livre
        d&apos;Or Audio</Link> qu&apos;on découvre, les premières photos partagées sur le mur photo.
      </p>
      <p>
        Le piège classique : les photos de couple qui débordent et un cocktail qui passe à 2h45. Les
        invités arrivent à table fatigués et affamés — le repas part avec un handicap.
      </p>

      <H2>19h30 – 20h : l&apos;entrée en salle</H2>
      <p>
        Premier temps fort géré par le DJ : l&apos;entrée des mariés dans la salle. Musique choisie
        ensemble, montée sonore, éventuellement un effet — c&apos;est trente secondes qui lancent le repas
        sur une vague d&apos;applaudissements. Un moment simple, mais qui doit être calé à la seconde avec
        le maître d&apos;hôtel.
      </p>

      <H2>20h – 23h : le repas, la partie la plus technique</H2>
      <p>
        Trois heures en moyenne, et le plus grand défi de coordination de la journée. La règle : les
        interventions (discours, surprises des témoins, animations) se placent <em>entre</em> les
        services, jamais pendant. Concrètement, on répartit : un discours des parents à l&apos;entrée, une
        surprise des témoins entre le plat et le fromage, la rétrospective vidéo au dessert. Chaque créneau
        est validé avec le traiteur — un plat chaud n&apos;attend pas.
      </p>
      <p>
        Côté animation, une à deux respirations courtes suffisent : un quiz sur les mariés, une manche de
        blind test. Le détail complet est dans notre guide de{' '}
        <Link href="/blog/animation-repas-mariage" className="text-[#c9a227] hover:underline">l&apos;animation du
        repas de mariage</Link>. Et surtout : le repas glisse <em>toujours</em>. Un bon déroulé prévoit 30
        à 60 minutes d&apos;élasticité, avec des animations déplaçables et un DJ qui recale tout en direct.
      </p>

      <H2>23h – 23h30 : l&apos;ouverture de bal, le pivot de la soirée</H2>
      <p>
        Le moment le plus photographié de la soirée mérite son créneau idéal : juste après le dessert,
        quand tous les invités sont encore là — les grands-parents comme les amis de la fac. C&apos;est là
        que la <Link href="/fumee-lourde-mariage" className="text-[#c9a227] hover:underline">fumée lourde</Link> et
        les <Link href="/etincelles-froides-mariage" className="text-[#c9a227] hover:underline">étincelles
        froides</Link> prennent tout leur sens : le nuage au sol, les gerbes lumineuses, et vous au centre.
        Puis les invités rejoignent la piste sur le nuage encore présent — la soirée dansante est lancée
        sans couture.
      </p>
      <p>
        L&apos;erreur fréquente : repousser l&apos;ouverture de bal après le café, « quand tout le monde
        sera prêt ». À 0h30, la moitié des aînés est partie et l&apos;élan du dessert est retombé.
        L&apos;ouverture de bal n&apos;attend pas que la salle soit prête : c&apos;est elle qui rend la
        salle prête.
      </p>

      <H2>23h30 – fin : la soirée dansante, par vagues</H2>
      <p>
        La piste se construit par vagues : d&apos;abord les titres fédérateurs qui gardent toutes les
        générations ensemble, puis une montée progressive en énergie à mesure que la soirée avance. Le
        gâteau ou le lancer de bouquet, s&apos;ils arrivent en cours de nuit, sont placés comme des
        respirations — annoncés, courts, et suivis d&apos;une relance immédiate de la piste. La mécanique
        complète est dans notre article{' '}
        <Link href="/blog/playlist-mariage-toutes-generations" className="text-[#c9a227] hover:underline">playlist
        toutes générations</Link>.
      </p>

      <H2>Le déroulé se prépare, à deux</H2>
      <p>
        Ce planning n&apos;est pas un moule : chaque mariage a son rythme, sa salle, ses contraintes de
        traiteur et ses envies. C&apos;est exactement l&apos;objet du rendez-vous de préparation avec votre
        DJ : poser le déroulé minute par minute, identifier les points de flottement possibles, et décider
        ensemble où placer les temps forts. Le jour J, vous n&apos;avez plus à penser à rien — c&apos;est
        notre travail de tenir l&apos;horloge sans que personne ne la voie.
      </p>
    </BlogArticleShell>
  );
}
