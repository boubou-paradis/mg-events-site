import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'dj-ou-playlist-spotify-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'DJ ou playlist Spotify pour un mariage ? Avantages et limites',
  description:
    "Playlist Spotify ou DJ professionnel pour votre mariage ? Comparatif honnête : budget, matériel, transitions, imprévus, animation. Ce qui marche pour un petit comité, ce qui coince à 120 invités.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: 'DJ ou playlist Spotify : que choisir pour un mariage ?',
    description: 'Le comparatif honnête, sans mépriser la playlist — mais sans ignorer ce qui se passe à 23h quand la piste ne démarre pas.',
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Une playlist Spotify peut-elle suffire pour un mariage ?',
    answer:
      "Pour un petit comité — un dîner de 20 à 30 personnes sans vraie soirée dansante — une playlist bien préparée sur une bonne enceinte peut tout à fait convenir. À partir du moment où vous voulez une piste de danse qui vit plusieurs heures avec des invités de tous âges, les limites apparaissent vite.",
  },
  {
    question: 'Que fait un DJ qu\'une playlist ne peut pas faire ?',
    answer:
      "Lire la salle et s'adapter en direct : changer de style quand la piste se vide, prolonger une vague qui fonctionne, gérer les demandes, caler les temps forts avec le traiteur et le photographe, animer au micro, réagir aux imprévus techniques. Une playlist déroule un plan ; un DJ ajuste le plan à la réalité.",
  },
  {
    question: 'Et côté matériel, ne peut-on pas louer une sono ?',
    answer:
      "Si, mais le poste est souvent sous-estimé : une enceinte Bluetooth ne couvre pas une salle de 100 personnes, et une sono louée sans technicien signifie que c'est vous (ou un invité) qui gérez les branchements, les micros pour les discours et les pannes éventuelles — le soir de votre mariage.",
  },
  {
    question: 'La solution hybride existe-t-elle ?',
    answer:
      "Oui : certains couples sonorisent eux-mêmes le vin d'honneur avec une playlist, et confient la soirée à un DJ. C'est cohérent budgétairement, même si un prestataire unique évite les trous de couverture — le moment où on cherche qui a le câble jack pendant que la salle attend.",
  },
  {
    question: 'Un DJ ne va-t-il pas imposer ses goûts musicaux ?',
    answer:
      "Un bon DJ mariage travaille à partir de VOS choix : vos incontournables, vos interdits, votre couleur musicale, définis lors du rendez-vous de préparation. Son rôle n'est pas d'imposer un style, mais de faire vivre le vôtre sur la piste toute la soirée.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<><span className="text-[#c9a227]">DJ ou playlist Spotify</span> : que choisir pour un mariage ?</>}
      plainTitle="DJ ou playlist Spotify : que choisir pour un mariage ?"
      description="Le comparatif honnête entre playlist et DJ professionnel pour un mariage : budget, matériel, transitions, imprévus."
      heroImage="/images/gallery-4.jpg"
      heroAlt="Piste de danse de mariage animée par un DJ professionnel"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="8 min"
      faqs={faqs}
      related={[
        { href: '/blog/prix-dj-mariage-bretagne', title: 'Prix d\'un DJ mariage', desc: 'Comprendre les tarifs en Bretagne.' },
        { href: '/blog/playlist-mariage-toutes-generations', title: 'Playlist toutes générations', desc: 'La logique DJ derrière une soirée réussie.' },
        { href: '/tarifs-dj-mariage', title: 'Nos tarifs', desc: 'Formules MG Events affichées en toute transparence.' },
      ]}
    >
      <p className="text-lg">
        Soyons honnêtes d&apos;entrée : oui, une playlist Spotify bien préparée peut convenir à certains
        événements. Non, ce n&apos;est pas un sacrilège d&apos;y penser — le budget d&apos;un mariage
        impose des choix. Mais avant de trancher, il faut savoir précisément ce que chaque option couvre…
        et ce qui se passe à 23h quand la piste ne démarre pas.
      </p>

      <H2>Quand la playlist est une option raisonnable</H2>
      <p>
        Un dîner de mariage en petit comité — 20 à 30 personnes, pas de vraie soirée dansante, une belle
        table qui se prolonge : dans ce cadre, une playlist soignée sur une enceinte de qualité fait le
        travail. Prévoyez plusieurs ambiances (arrivée, repas, fin de soirée), une personne qui garde un
        œil sur le volume, et un téléphone en mode avion dédié à la musique — la notification WhatsApp qui
        coupe la chanson de l&apos;ouverture de bal est un grand classique.
      </p>
      <p>
        De même, sonoriser soi-même un brunch du lendemain ou un vin d&apos;honneur détendu se défend tout
        à fait. La playlist n&apos;est pas l&apos;ennemie : elle a son terrain de jeu.
      </p>

      <H2>Ce qui change à partir de 60, 80, 120 invités</H2>
      <p>
        <strong className="text-white">Le matériel, d&apos;abord.</strong> Une enceinte Bluetooth ne couvre
        pas une salle de réception : il faut une sonorisation dimensionnée, des micros sans fil pour les
        discours, un éclairage de piste — et quelqu&apos;un qui sache brancher, régler et dépanner tout ça.
        Louer le matériel sans technicien revient à confier la régie de votre mariage à un cousin
        volontaire, qui aurait sûrement préféré profiter de la fête.
      </p>
      <p>
        <strong className="text-white">Les transitions et la lecture de piste, ensuite.</strong> Une
        playlist enchaîne les titres dans l&apos;ordre prévu, quoi qu&apos;il se passe dans la salle. Elle
        ne voit pas que les grands-parents viennent d&apos;arriver sur la piste, que le morceau électro
        vide la salle, ou qu&apos;au contraire une vague années 90 mérite d&apos;être prolongée. Le DJ
        ajuste en permanence — c&apos;est le cœur du métier, et c&apos;est invisible quand c&apos;est bien
        fait. On détaille cette mécanique dans notre article sur la{' '}
        <Link href="/blog/playlist-mariage-toutes-generations" className="text-[#c9a227] hover:underline">playlist
        toutes générations</Link>.
      </p>
      <p>
        <strong className="text-white">Les temps forts, enfin.</strong> Entrée en salle, discours,
        surprises des témoins, ouverture de bal, gâteau : chacun de ces moments demande un micro géré, une
        musique lancée à la seconde juste, une coordination avec le traiteur et le photographe. C&apos;est
        une régie, pas une lecture audio.
      </p>

      <H2>L&apos;imprévu : le vrai juge de paix</H2>
      <p>
        Tout mariage a son imprévu : le vidéoprojecteur des témoins qui ne se connecte pas, le discours qui
        s&apos;improvise, l&apos;orage qui rapatrie le vin d&apos;honneur en intérieur, le timing du
        traiteur qui glisse d&apos;une heure. Avec une playlist, chaque imprévu devient votre problème —
        le soir de votre mariage. Avec un professionnel, c&apos;est son problème, et vous n&apos;en
        entendez jamais parler.
      </p>

      <H2>Et l&apos;animation, dans tout ça ?</H2>
      <p>
        C&apos;est la dimension qu&apos;on oublie dans le débat « musique » : un mariage ne se résume pas à
        de la diffusion sonore. Faire participer les invités, rythmer le repas sans le hacher, coordonner
        les surprises, lancer un <Link href="/quiz-mariage-interactif" className="text-[#c9a227] hover:underline">quiz</Link> ou
        un blind test qui mélange les générations : c&apos;est le rôle du DJ <em>animateur</em>, et aucune
        application ne le remplace.
      </p>

      <H2>Notre conseil honnête</H2>
      <p>
        Posez-vous une seule question : voulez-vous une soirée dansante ? Si la réponse est oui, le poste
        DJ est l&apos;un des investissements les plus rentables de votre budget mariage — c&apos;est lui
        qui détermine le souvenir que vos invités garderont des huit dernières heures de votre journée. Si
        la réponse est non (petit comité, dîner intime), une playlist préparée avec soin est un choix
        parfaitement assumable. Et si vous hésitez sur le budget, nos{' '}
        <Link href="/tarifs-dj-mariage" className="text-[#c9a227] hover:underline">tarifs sont affichés
        publiquement</Link> — de quoi comparer sereinement.
      </p>
    </BlogArticleShell>
  );
}
