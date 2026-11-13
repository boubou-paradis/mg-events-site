import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';
import YouTubeLite from '@/components/YouTubeLite';
import { animajetVideos, ANIMAJET_YOUTUBE_CHANNEL } from '@/data/animajetVideos';

const SLUG = 'animation-repas-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  // Nov. 2026 : "animation repas mariage" pos 13,6 ; "animation repas assis" 364 impr. pos 33 ;
  // "jeux mariage pendant le repas" pos 17,5. Ajout section repas assis + déroulé type.
  title: 'Animation repas mariage : 12 idées et jeux pour un repas assis',
  description:
    "Animer un repas de mariage assis sans casser l'ambiance : 12 jeux à faire depuis la table (quiz, blind test, Le Bon Ordre…), déroulé type et coordination avec le traiteur.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    images: ['https://www.mg-events35.com/images/og-default.jpg'],
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
    question: 'Quels jeux faire pendant un repas assis ?',
    answer:
      "Ceux qui se jouent depuis la table : quiz des mariés sur smartphone, manche de blind test, jeu « elle ou lui », jeu des serviettes, chanson des témoins avec paroles à l'écran. Personne n'a besoin de se lever et le service du traiteur n'est pas perturbé.",
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
      readTime="12 min"
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

      <H2>Animation repas assis : 12 idées qui se jouent depuis la table</H2>
      <p>
        Un repas assis impose une contrainte simple : les invités ne bougent pas. Les meilleures
        animations sont donc celles qui se jouent <strong className="text-white">sans quitter sa
        chaise</strong>. Celles qu&apos;on utilise le plus souvent en Bretagne, du plus calme au plus
        festif :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-white">Le quiz des mariés par table</strong> : chaque table répond
          sur smartphone, classement en direct à l&apos;écran (voir notre{' '}
          <Link href="/quiz-mariage-interactif" className="text-[#c9a227] hover:underline">quiz mariage
          interactif</Link>).
        </li>
        <li>
          <strong className="text-white">Le blind test générations</strong> : une manche de 10 titres, des
          années 60 à aujourd&apos;hui. Les tables chantent, personne n&apos;est mis en avant seul (détails
          sur le <Link href="/blind-test-mariage" className="text-[#c9a227] hover:underline">blind test
          mariage</Link>).
        </li>
        <li>
          <strong className="text-white">Le Bon Ordre</strong> : l&apos;équipe de la mariée contre celle
          du marié, chaque camp remet des souvenirs du couple dans l&apos;ordre depuis son téléphone.
        </li>
        <li>
          <strong className="text-white">Matching</strong> : le jeu des points communs entre invités.
          Parfait entre l&apos;entrée et le plat pour que les deux familles fassent connaissance.
        </li>
        <li>
          <strong className="text-white">La Roue de la Destinée et le jeu des 12 mois</strong> : une roue
          géante à l&apos;écran tire défis et gages, et chaque mois de naissance a sa mission.
        </li>
        <li>
          <strong className="text-white">Photo Mystère</strong> : une photo des mariés se dévoile peu à peu
          sur grand écran, toute la salle tente de deviner où et quand elle a été prise.
        </li>
        <li>
          <strong className="text-white">Le jeu « elle ou lui »</strong> : les mariés dos à dos, une
          chaussure de chacun en main, la salle réagit à chaque réponse.
        </li>
        <li>
          <strong className="text-white">Le diaporama en direct</strong> : les photos prises par les invités
          depuis le matin défilent sur écran pendant le repas.
        </li>
        <li>
          <strong className="text-white">Le téléphone livre d&apos;or</strong> : il circule ou reste à un coin
          de la salle, les invités laissent un message vocal aux mariés entre deux plats (notre{' '}
          <Link href="/livre-dor-audio" className="text-[#c9a227] hover:underline">livre d&apos;or
          audio</Link>).
        </li>
        <li>
          <strong className="text-white">Le jeu des serviettes</strong> : tout le monde fait tourner sa
          serviette sur un refrain, à l&apos;entrée des mariés ou au dessert. Trente secondes, effet garanti.
        </li>
        <li>
          <strong className="text-white">La chanson détournée des témoins</strong> : paroles projetées à
          l&apos;écran, toute la salle chante le refrain.
        </li>
        <li>
          <strong className="text-white">L&apos;entrée du dessert</strong> : lumière baissée, musique choisie
          par les mariés, étincelles froides sur la pièce montée.
        </li>
      </ul>
      <p>
        Le quiz, Le Bon Ordre, Matching, la Roue et Photo Mystère font partie d&apos;
        <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">AnimaJet</Link>,
        la plateforme de jeux interactifs que nous avons conçue et développée. Les invités jouent en
        scannant un QR code, sans application à installer. Deux exemples en vidéo :
      </p>
      <YouTubeLite
        video={animajetVideos.quizIA}
        caption="Le quiz interactif AnimaJet : préparé en quelques secondes, joué par toutes les tables."
      />
      <YouTubeLite
        video={animajetVideos.bonOrdre}
        caption="Le Bon Ordre : l'équipe de la mariée contre celle du marié, depuis les téléphones."
      />
      <p>
        Toutes les démonstrations sont sur la{' '}
        <a href={ANIMAJET_YOUTUBE_CHANNEL} target="_blank" rel="noopener" className="text-[#c9a227] hover:underline">
          chaîne YouTube AnimaJet</a>.
      </p>
      <p>
        Ces idées valent aussi pour un repas assis d&apos;anniversaire ou d&apos;entreprise : on adapte
        simplement les questions du quiz et la playlist du blind test. On le fait régulièrement en{' '}
        <Link href="/dj-anniversaire-bretagne" className="text-[#c9a227] hover:underline">soirée
        anniversaire</Link> et en{' '}
        <Link href="/dj-soiree-entreprise" className="text-[#c9a227] hover:underline">soirée
        d&apos;entreprise</Link>.
      </p>

      <H2>Exemple de déroulé : un repas de mariage animé sans temps mort</H2>
      <p>Le déroulé type que l&apos;on cale avec le traiteur pour un repas de 120 invités :</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-white">Entrée des mariés</strong> (5 min) : musique choisie, jeu des serviettes.</li>
        <li><strong className="text-white">Entrée</strong> : musique d&apos;ambiance à volume de conversation.</li>
        <li><strong className="text-white">Entre l&apos;entrée et le plat</strong> (10-15 min) : quiz des mariés par table.</li>
        <li><strong className="text-white">Plat</strong> : pas d&apos;animation, le service passe en priorité.</li>
        <li><strong className="text-white">Avant le fromage</strong> (10 min) : discours ou surprise des témoins.</li>
        <li><strong className="text-white">Avant le dessert</strong> (10 min) : manche de blind test, annonce des gagnants.</li>
        <li><strong className="text-white">Dessert</strong> : entrée de la pièce montée, puis enchaînement vers l&apos;ouverture de bal.</li>
      </ul>
      <p>
        Au total, environ 45 minutes d&apos;animation réparties sur trois à quatre heures de repas. Pour la
        suite de la soirée, voir notre{' '}
        <Link href="/blog/planning-soiree-mariage" className="text-[#c9a227] hover:underline">planning de
        soirée mariage</Link>.
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
