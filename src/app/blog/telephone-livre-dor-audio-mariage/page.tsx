import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'telephone-livre-dor-audio-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: "Téléphone livre d'or audio mariage : fonctionnement et idées",
  description:
    "Le téléphone à messages du mariage : comment ça marche, où le placer, quoi dire au combiné (idées de messages) et comment récupérer les enregistrements.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    images: ['https://www.mg-events35.com/images/og-default.jpg'],
    title: "Téléphone livre d'or audio au mariage : mode d'emploi et idées de messages",
    description: 'Fonctionnement, emplacement, idées de messages : tout sur le téléphone rétro à messages vocaux.',
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: "Comment fonctionne le téléphone livre d'or audio ?",
    answer:
      "Vos invités décrochent le combiné d'un téléphone rétro, écoutent un message d'accueil personnalisé, puis parlent après le bip. En raccrochant, le message est enregistré automatiquement. Aucune application ni aucun bouton : même les grands-parents l'utilisent sans aide.",
  },
  {
    question: 'Quand récupère-t-on les messages ?',
    answer:
      "Chez MG Events, l'intégralité des messages audio vous est remise après le mariage, à réécouter quand vous le souhaitez.",
  },
  {
    question: "Combien coûte un téléphone livre d'or audio ?",
    answer:
      "Il est inclus dans nos formules Rêve en Blanc (1590€) et Conte de Fées (1790€), et disponible en location seule à 40€.",
  },
  {
    question: 'Où placer le téléphone pendant le mariage ?',
    answer:
      "Dans un endroit visible mais un peu à l'écart du son : près du vin d'honneur, à côté du plan de table ou dans un coin calme de la salle. Une petite pancarte « Décrochez et laissez-nous un message » suffit à lancer le mouvement.",
  },
  {
    question: 'Que dire dans le message d’accueil ?',
    answer:
      "Quelques secondes suffisent : vos prénoms, un merci, et l'invitation à parler après le bip. Par exemple : « Bonjour, ici Léa et Tom ! Merci d'être là aujourd'hui. Laissez-nous un mot, une anecdote ou une chanson après le bip ! »",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

const link = 'text-[#c9a227] hover:underline';

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<><span className="text-[#c9a227]">Téléphone livre d&apos;or audio</span> au mariage : mode d&apos;emploi et idées de messages</>}
      plainTitle="Téléphone livre d'or audio au mariage : mode d'emploi et idées de messages"
      description="Fonctionnement, emplacement, message d'accueil et idées de messages : tout sur le téléphone rétro à messages vocaux."
      heroImage="/images/livre-dor-audio-mariage.png"
      heroAlt="Téléphone rétro de livre d'or audio pour mariage"
      date="13 novembre 2026"
      isoDate="2026-11-13"
      readTime="6 min"
      faqs={faqs}
      related={[
        { href: '/livre-dor-audio', title: "Livre d'or audio", desc: 'Inclus dès Rêve en Blanc ou en location à 40€.' },
        { href: '/blog/occuper-invites-cocktail-mariage', title: 'Occuper les invités au cocktail', desc: 'Des animations en libre-service.' },
        { href: '/blog/idees-animation-mariage-originale-2026', title: "Idées d'animation originales", desc: '10 idées pour marquer vos invités.' },
      ]}
    >
      <p className="text-lg">
        Le téléphone livre d&apos;or audio (on dit aussi « téléphone à messages » ou « audio guestbook »)
        remplace le traditionnel livre d&apos;or papier par des messages vocaux. Vos invités décrochent un
        téléphone rétro et vous laissent un mot, une anecdote, un fou rire ou une chanson. Voici comment ça
        marche, où l&apos;installer, et quelles idées de messages souffler à vos proches.
      </p>

      <H2>Comment ça marche, concrètement</H2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>L&apos;invité <strong className="text-white">décroche le combiné</strong>.</li>
        <li>Il entend <strong className="text-white">votre message d&apos;accueil</strong> personnalisé.</li>
        <li>Après le bip, il <strong className="text-white">parle librement</strong>.</li>
        <li>Il <strong className="text-white">raccroche</strong> : le message est enregistré automatiquement.</li>
      </ol>
      <p>
        Pas d&apos;application, pas d&apos;écran, pas de bouton : c&apos;est ce qui fait son succès auprès
        de toutes les générations. Après le mariage, vous récupérez l&apos;ensemble des enregistrements, à
        réécouter le soir même, au premier anniversaire de mariage ou dans vingt ans.
      </p>

      <H2>Pourquoi les mariés l&apos;adorent</H2>
      <p>
        Un livre d&apos;or papier recueille quelques lignes souvent écrites à la hâte. Le téléphone, lui,
        capture des <strong className="text-white">voix</strong> : l&apos;intonation d&apos;un grand-parent,
        le rire d&apos;un témoin, les enfants qui chantent. C&apos;est un souvenir qui prend de la valeur
        avec le temps. Et pendant la journée, c&apos;est une animation en libre-service qui occupe les
        invités sans rien imposer, idéale pendant les photos de couple (voir{' '}
        <Link href="/blog/occuper-invites-cocktail-mariage" className={link}>occuper les invités au cocktail</Link>).
      </p>

      <H2>Où placer le téléphone</H2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-white">Visible</strong> : près du vin d&apos;honneur, du plan de table ou du bar.</li>
        <li><strong className="text-white">Un peu à l&apos;écart du son</strong> : loin des enceintes, pour que les messages soient audibles.</li>
        <li><strong className="text-white">Bien signalé</strong> : une pancarte « Décrochez, laissez-nous un message » et éventuellement quelques idées de messages à côté.</li>
      </ul>
      <p>
        Le téléphone a un look vintage qui s&apos;accorde aussi bien avec un mariage champêtre qu&apos;avec
        une réception plus chic : il devient un objet de décoration autant qu&apos;une animation.
      </p>

      <H2>Le message d&apos;accueil : court et chaleureux</H2>
      <p>
        Dix secondes suffisent. Vos prénoms, un merci, une invitation à parler après le bip. Quelques
        formulations qui marchent bien :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>« Bonjour, ici Léa et Tom ! Merci d&apos;être là. Après le bip, laissez-nous un mot, une anecdote ou une chanson ! »</li>
        <li>« Vous êtes bien sur le répondeur des jeunes mariés. Nous sommes sur la piste de danse : laissez-nous un message ! »</li>
        <li>« Merci de partager ce jour avec nous. Racontez-nous un souvenir, ou donnez-nous votre meilleur conseil de couple. »</li>
      </ul>

      <H2>20 idées de messages à souffler aux invités</H2>
      <p>
        Beaucoup d&apos;invités décrochent… puis ne savent pas quoi dire. Une petite carte posée à côté du
        téléphone règle le problème :
      </p>
      <ul className="list-disc pl-6 space-y-1 columns-1 sm:columns-2">
        <li>Comment vous avez rencontré les mariés</li>
        <li>Votre premier souvenir avec eux</li>
        <li>Un conseil pour une vie de couple réussie</li>
        <li>Votre vœu pour leurs 10 ans de mariage</li>
        <li>L&apos;anecdote la plus drôle à leur sujet</li>
        <li>Une chanson (même faux !)</li>
        <li>Ce que vous avez pensé en les voyant arriver</li>
        <li>Le moment préféré de votre journée</li>
        <li>Une prédiction pour leur avenir</li>
        <li>Un message en dialecte ou en langue étrangère</li>
        <li>Un « je t&apos;aime » de la part des enfants</li>
        <li>Le meilleur plat du repas, selon vous</li>
        <li>Une question à laquelle ils répondront dans 5 ans</li>
        <li>Un souvenir de vacances ensemble</li>
        <li>Ce qui vous a fait rire pendant le discours</li>
        <li>La chanson qui doit absolument passer ce soir</li>
        <li>Un message pour leur futur bébé</li>
        <li>Un mot des grands-parents</li>
        <li>Un toast, comme au micro</li>
        <li>Simplement : « Merci, on vous aime »</li>
      </ul>

      <H2>Quand le mettre en place pendant la journée</H2>
      <p>
        Le meilleur moment est le <strong className="text-white">vin d&apos;honneur</strong> : les invités
        circulent, ont du temps, et les mariés sont souvent partis faire les photos. Le téléphone peut
        ensuite rester disponible dans la salle pendant le repas et la soirée : les messages de fin de
        soirée sont souvent les plus drôles. Une annonce au micro par le DJ, une fois dans l&apos;après-midi
        et une fois en soirée, suffit à relancer l&apos;intérêt.
      </p>

      <H2>Prix et réservation</H2>
      <p>
        Chez MG Events, le <Link href="/livre-dor-audio" className={link}>livre d&apos;or audio</Link> est
        inclus dans les formules Rêve en Blanc (1590€) et Conte de Fées (1790€), ou disponible en location
        seule à 40€. Tous les détails des formules sont sur notre page{' '}
        <Link href="/tarifs-dj-mariage" className={link}>tarifs DJ mariage</Link>.
      </p>
    </BlogArticleShell>
  );
}
