import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'questions-a-poser-dj-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Questions à poser à son DJ mariage avant de signer',
  description:
    "La checklist complète des questions à poser à votre DJ de mariage : expérience, matériel, assurance, horaires, playlist, animations, contrat. Ne signez rien avant de l'avoir lue.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: 'Les questions essentielles à poser à votre DJ de mariage',
    description: 'La checklist complète avant de signer : expérience, matériel, contrat, playlist, coordination.',
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Quelle est la question la plus importante à poser à un DJ mariage ?',
    answer:
      "« Est-ce bien vous qui serez présent le jour J ? » Certaines structures sous-traitent à des DJ différents selon les dates. Vous devez rencontrer — au moins en visio — la personne qui animera réellement votre soirée, car le feeling avec elle est déterminant.",
  },
  {
    question: 'Faut-il demander une assurance à son DJ ?',
    answer:
      "Oui : demandez l'attestation de responsabilité civile professionnelle. C'est un document standard que tout professionnel fournit sans difficulté, et beaucoup de salles de réception l'exigent. Un prestataire qui élude la question est un signal d'alerte.",
  },
  {
    question: 'Peut-on imposer ou interdire des musiques à son DJ ?',
    answer:
      "Chez un bon DJ mariage, oui, et c'est même prévu dans la préparation : vos incontournables, vos interdits absolus (la liste noire est aussi importante que la liste blanche) et la couleur musicale générale. Le DJ garde ensuite la main sur l'enchaînement pour faire vivre la piste.",
  },
  {
    question: 'Quand rencontrer son DJ avant le mariage ?',
    answer:
      "Un premier échange avant la signature pour valider le feeling et le devis, puis un vrai rendez-vous de préparation dans les semaines qui précèdent le mariage pour caler le déroulé minute par minute : temps forts, surprises, ouverture de bal, coordination avec les autres prestataires.",
  },
  {
    question: 'Que doit contenir le contrat du DJ mariage ?',
    answer:
      "La date, le lieu, les horaires précis de début et de fin, le détail de la prestation et du matériel, les options retenues, le prix TTC ferme, les modalités d'acompte et les conditions d'annulation de chaque partie. Un contrat clair protège les deux côtés.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<>Les <span className="text-[#c9a227]">questions essentielles</span> à poser à votre DJ de mariage</>}
      plainTitle="Les questions essentielles à poser à votre DJ de mariage"
      description="La checklist complète des questions à poser avant de signer avec un DJ mariage."
      heroImage="/images/gallery-3.jpg"
      heroAlt="Rencontre de préparation entre des mariés et leur DJ animateur"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="10 min"
      faqs={faqs}
      related={[
        { href: '/blog/comment-choisir-dj-mariage-bretagne', title: 'Comment choisir son DJ', desc: 'Les critères qui comptent vraiment.' },
        { href: '/blog/prix-dj-mariage-bretagne', title: 'Prix d\'un DJ mariage', desc: 'Comprendre les tarifs en Bretagne.' },
        { href: '/tarifs-dj-mariage', title: 'Nos tarifs', desc: 'Formules MG Events en toute transparence.' },
      ]}
    >
      <p className="text-lg">
        Vous avez repéré un DJ pour votre mariage, le courant passe bien, le devis semble correct. Avant de
        signer, prenez trente minutes pour poser les bonnes questions. Après 25 ans de mariages, on connaît
        celles qui séparent les prestataires sérieux des mauvaises surprises — les voici, organisées par
        thème, avec ce qu&apos;une bonne réponse doit contenir.
      </p>

      <H2>Sur l&apos;expérience et l&apos;identité du DJ</H2>
      <p>
        <strong className="text-white">« Est-ce bien vous qui serez là le jour J ? »</strong> La question
        numéro un. Certaines enseignes commercialisent des prestations réalisées par des DJ différents
        selon les disponibilités. Vous choisissez une personne, pas une marque : exigez de rencontrer celle
        qui animera votre soirée.
      </p>
      <p>
        <strong className="text-white">« Combien de mariages animez-vous par an, et depuis combien de
        temps ? »</strong> Un mariage ne s&apos;anime pas comme une soirée étudiante : gestion des
        générations, coordination avec le traiteur, discours, ouverture de bal… L&apos;expérience
        spécifiquement <em>mariage</em> compte plus que le nombre d&apos;années de mix.
      </p>
      <p>
        <strong className="text-white">« Que se passe-t-il si vous êtes malade le jour J ? »</strong> Un
        professionnel a une réponse préparée : réseau de confrères de confiance, matériel de secours,
        procédure claire. « Ça n&apos;arrive jamais » n&apos;est pas une réponse.
      </p>

      <H2>Sur le matériel et la technique</H2>
      <p>
        <strong className="text-white">« Quel matériel apportez-vous, précisément ? »</strong> La réponse
        doit être concrète : puissance et marque de la sonorisation, nombre de projecteurs, micros sans fil
        pour les discours, solution de secours en cas de panne. Demandez si le matériel est adapté à la
        taille de votre salle — une sono sous-dimensionnée dans une grande longère bretonne, ça
        s&apos;entend toute la soirée.
      </p>
      <p>
        <strong className="text-white">« Avez-vous une assurance professionnelle ? »</strong> Demandez
        l&apos;attestation de responsabilité civile professionnelle : votre salle de réception peut
        l&apos;exiger, et elle vous protège en cas d&apos;incident.
      </p>
      <p>
        <strong className="text-white">« Gérez-vous aussi la cérémonie laïque et le vin
        d&apos;honneur ? »</strong> Si votre cérémonie a lieu sur le lieu de réception, un seul prestataire
        pour la <Link href="/sonorisation-ceremonie-laique" className="text-[#c9a227] hover:underline">sonorisation
        de cérémonie</Link>, le cocktail et la soirée évite les trous de couverture entre les moments.
      </p>

      <H2>Sur la musique et les animations</H2>
      <p>
        <strong className="text-white">« Comment construisez-vous la playlist ? »</strong> La bonne réponse
        décrit un échange : vos incontournables, vos interdits, la couleur générale — puis la liberté
        laissée au DJ pour lire la piste et adapter en direct. Méfiez-vous des deux extrêmes : le DJ qui
        impose son programme, et celui qui vous demande de fournir la playlist complète (dans ce cas,
        qu&apos;apporte-t-il ?).
      </p>
      <p>
        <strong className="text-white">« Quelles animations proposez-vous, et comment évitez-vous le
        too much ? »</strong> Les animations doivent servir la soirée, pas la découper. Demandez des
        exemples concrets : chez nous, ce sont des <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">quiz
        et blind test interactifs</Link> auxquels les invités participent depuis leur téléphone — courts,
        rythmés, jamais imposés à ceux qui préfèrent discuter.
      </p>
      <p>
        <strong className="text-white">« Travaillez-vous avec les témoins pour les surprises ? »</strong>{' '}
        Les surprises des témoins font les meilleurs moments — à condition d&apos;être coordonnées. Un bon
        DJ met en place un canal discret avec eux (chez MG Events, un groupe WhatsApp dédié) pour caler
        vidéos, chansons et interventions sans que vous soyez au courant.
      </p>

      <H2>Sur le déroulé et le contrat</H2>
      <p>
        <strong className="text-white">« Quels sont les horaires exacts inclus, et que se passe-t-il si la
        soirée se prolonge ? »</strong> Heure d&apos;installation, heure de début, heure de fin, tarif des
        heures supplémentaires : tout doit être écrit avant, pas négocié à 3h du matin.
      </p>
      <p>
        <strong className="text-white">« Que contient précisément le contrat ? »</strong> Date, lieu,
        horaires, prestation détaillée, prix TTC ferme, acompte, conditions d&apos;annulation des deux
        parties. Et une évidence qui n&apos;en est pas une : exigez un vrai contrat écrit. Pour comprendre
        comment lire les chiffres, consultez notre guide des{' '}
        <Link href="/blog/prix-dj-mariage-bretagne" className="text-[#c9a227] hover:underline">prix d&apos;un DJ
        de mariage</Link>.
      </p>
      <p>
        <strong className="text-white">« Faut-il prévoir un repas pour vous ? »</strong> Question pratique
        souvent oubliée : le DJ est sur place plus de dix heures. La plupart des traiteurs prévoient un
        repas prestataire — pensez simplement à le commander.
      </p>

      <H2>Le critère final : le feeling</H2>
      <p>
        Toutes ces questions vérifient le professionnalisme. Mais le dernier critère ne se vérifie pas, il
        se ressent : cette personne sera au micro devant votre famille et vos amis toute une soirée.
        Est-ce que sa manière de parler, son humour, son énergie vous ressemblent ? Si vous hésitez entre
        deux prestataires aux réponses équivalentes, choisissez celui avec qui le courant passe — vos
        invités le sentiront aussi.
      </p>
    </BlogArticleShell>
  );
}
