import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'album-photo-collaboratif-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Comment créer un album photo collaboratif pendant un mariage',
  description:
    "Créez un album photo collaboratif le jour de votre mariage : vos invités partagent leurs clichés via QR Code, affichage en direct sur écran géant et récupération de centaines de photos après la soirée.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: 'Comment créer un album photo collaboratif pendant un mariage',
    description: "Le guide pour centraliser et récupérer toutes les photos de vos invités.",
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: "Comment récupérer les photos prises par les invités d'un mariage ?",
    answer:
      "Le plus simple est d'utiliser une plateforme de partage par QR Code comme AnimaJet : chaque invité envoie ses photos depuis son smartphone, elles sont centralisées au même endroit et l'ensemble vous est remis après le mariage.",
  },
  {
    question: 'Un album photo collaboratif remplace-t-il le photographe ?',
    answer:
      "Non, il le complète. Le photographe capture les moments clés avec son œil professionnel ; l'album collaboratif apporte la spontanéité et les angles que personne d'autre n'a vus. Les deux ensemble racontent votre mariage de façon bien plus complète.",
  },
  {
    question: 'Faut-il une application pour l\'album collaboratif ?',
    answer:
      "Non. Avec AnimaJet, les invités scannent un QR Code et partagent depuis le navigateur de leur téléphone, sans application ni création de compte.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<>Comment créer un <span className="text-[#c9a227]">album photo collaboratif</span> pendant un mariage</>}
      plainTitle="Comment créer un album photo collaboratif pendant un mariage"
      description="Créez un album photo collaboratif le jour de votre mariage : vos invités partagent leurs clichés via QR Code."
      heroImage="/images/gallery-7.jpg"
      heroAlt="Album photo collaboratif de mariage : photos des invités centralisées et partagées"
      date="5 juin 2026"
      isoDate="2026-06-05"
      readTime="9 min"
      faqs={faqs}
      related={[
        { href: '/photos-invites-mariage', title: 'Photos des invités de mariage', desc: 'Centralisez tous les clichés de vos invités.' },
        { href: '/partage-photo-mariage', title: 'Partage photo en direct', desc: 'Les photos sur écran géant, en live.' },
      ]}
    >
      <p className="text-lg">
        Combien de photos de votre mariage finiront oubliées dans le téléphone de vos invités ? Sans dispositif pour les centraliser, la réponse est : la
        plupart. Pourtant, ces clichés spontanés — un fou rire à table, la mamie qui danse, le clin d&apos;œil des témoins — racontent votre journée de
        l&apos;intérieur. Voici comment créer un <strong className="text-white">album photo collaboratif</strong> pour ne plus rien perdre.
      </p>

      <H2>Pourquoi un album collaboratif change tout</H2>
      <p>
        Votre photographe professionnel fait un travail irremplaçable : il capte les moments clés avec maîtrise, lumière et cadrage. Mais il ne peut pas être
        partout. Il ne voit pas la blague chuchotée au bout de la table, ni la photo de groupe improvisée près du bar. Vos invités, eux, sont
        <strong className="text-white"> à l&apos;intérieur de la fête</strong>.
      </p>
      <p>
        L&apos;album collaboratif rassemble ces centaines de regards différents. C&apos;est le complément parfait du reportage officiel : la spontanéité en plus,
        et des souvenirs que vous auriez sinon perdus à jamais.
      </p>

      <H2>La méthode simple : le partage par QR Code</H2>
      <p>
        Oubliez les groupes de messagerie où personne ne dépose ses photos et les clés USB qui se perdent. La méthode moderne, c&apos;est le partage par
        <strong className="text-white"> QR Code</strong>. Le principe :
      </p>
      <div className="card-dark p-6 my-6 space-y-4">
        <div>
          <p className="text-white font-medium mb-1">1. Un QR Code unique</p>
          <p className="text-sm">Affiché sur les tables et l&apos;écran géant, il est propre à votre mariage. Les invités le scannent avec leur appareil photo.</p>
        </div>
        <div>
          <p className="text-white font-medium mb-1">2. Le partage en un geste</p>
          <p className="text-sm">Ils prennent une photo ou en choisissent une dans leur galerie, et l&apos;envoient — sans application à télécharger.</p>
        </div>
        <div>
          <p className="text-white font-medium mb-1">3. La centralisation automatique</p>
          <p className="text-sm">Toutes les photos se rassemblent au même endroit. Après la soirée, l&apos;album complet vous est remis.</p>
        </div>
      </div>

      <H2>L&apos;affichage en direct, moteur de la participation</H2>
      <p>
        Le secret d&apos;un album collaboratif bien rempli, c&apos;est l&apos;<strong className="text-white">affichage en direct</strong>. Quand les invités voient
        leurs photos s&apos;afficher sur grand écran — en diaporama avec le <Link href="/partage-photo-mariage" className="text-[#c9a227] hover:underline">partage photo</Link> ou
        en mosaïque avec le <Link href="/mur-photo-mariage" className="text-[#c9a227] hover:underline">mur photo</Link> — ils jouent le jeu et partagent
        davantage. La dynamique s&apos;auto-entretient.
      </p>

      <H2>Garder la maîtrise : la modération</H2>
      <p>
        Une crainte légitime : et si une photo gênante s&apos;affichait devant tout le monde ? Rassurez-vous, une <strong className="text-white">modération</strong> est
        possible. Le DJ peut valider les clichés avant qu&apos;ils n&apos;apparaissent à l&apos;écran. Vous gardez ainsi la main sur ce qui est projeté, tout en
        conservant l&apos;ensemble des photos dans votre album.
      </p>

      <H2>Le résultat : des centaines de souvenirs, pour de bon</H2>
      <p>
        À la fin de la soirée, vous repartez non seulement avec le reportage de votre photographe, mais aussi avec un album collaboratif riche de centaines de
        clichés pris par ceux qui vous aiment. Avec <Link href="/photos-invites-mariage" className="text-[#c9a227] hover:underline">la collecte des photos des invités</Link> d&apos;AnimaJet,
        ce souvenir collectif est inclus dans la prestation — et il deviendra sans doute l&apos;un des plus précieux de votre mariage.
      </p>
    </BlogArticleShell>
  );
}
