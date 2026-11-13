import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'prix-dj-soiree';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Prix DJ soirée : combien coûte un DJ ? Anniversaire, entreprise',
  description:
    "Combien coûte un DJ pour une soirée ? Anniversaire dès 600€, entreprise dès 800€, mariage dès 1300€ TTC : ce qui fait varier le prix et comment lire un devis.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    images: ['https://www.mg-events35.com/images/og-default.jpg'],
    title: 'Combien coûte un DJ pour une soirée ? Prix anniversaire, entreprise, mariage',
    description: 'Les vrais tarifs d’un DJ professionnel en Bretagne et ce qui les fait varier.',
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Combien coûte un DJ pour une soirée anniversaire ?',
    answer:
      "Chez MG Events, une soirée anniversaire coûte de 600€ TTC (4h d'animation) à 1200€ TTC (formule VIP avec photobooth), déplacement inclus jusqu'à 100 km aller-retour depuis Redon. Le prix dépend surtout de la durée, de la taille de la salle et des animations choisies.",
  },
  {
    question: "Quel budget pour un DJ de soirée d'entreprise ?",
    answer:
      "Nos trois formules entreprise : Cocktail à 800€ (ambiance musicale, 4h), Corporate à 1200€ (soirée complète avec jeux interactifs) et Premium à 1600€ (avec photobooth personnalisé au logo). Le devis est ensuite ajusté au lieu, aux horaires et au nombre de collaborateurs.",
  },
  {
    question: 'Pourquoi un DJ de mariage coûte-t-il plus cher qu’un DJ de soirée ?',
    answer:
      "Un mariage, c'est souvent 10 à 12 heures de présence (cérémonie, cocktail, repas, soirée), plusieurs rendez-vous de préparation, la coordination avec le traiteur et le lieu, et davantage de matériel. Nos formules mariage vont de 1300€ à 1790€ TTC.",
  },
  {
    question: 'Les frais de déplacement sont-ils inclus ?',
    answer:
      "Oui jusqu'à 100 km aller-retour au départ de Redon. Au-delà, 0,66 €/km, toujours indiqué noir sur blanc dans le devis.",
  },
  {
    question: 'Un DJ très bon marché, est-ce une bonne idée ?',
    answer:
      "Méfiez-vous des tarifs qui n'incluent ni matériel de secours, ni assurance, ni préparation. Avant de comparer deux prix, comparez ce qu'ils contiennent : durée, sonorisation adaptée à la salle, éclairage, animations, déplacement et heures supplémentaires.",
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
      h1={<><span className="text-[#c9a227]">Combien coûte un DJ</span> pour une soirée ? Anniversaire, entreprise, mariage</>}
      plainTitle="Combien coûte un DJ pour une soirée ? Anniversaire, entreprise, mariage"
      description="Les vrais tarifs d'un DJ professionnel en Bretagne, ce qui les fait varier et comment lire un devis."
      heroImage="/images/gallery-3.jpg"
      heroAlt="DJ en animation de soirée avec éclairage"
      date="13 novembre 2026"
      isoDate="2026-11-13"
      readTime="7 min"
      faqs={faqs}
      related={[
        { href: '/dj-anniversaire-bretagne', title: 'DJ anniversaire', desc: 'Formules de 600€ à 1200€ TTC.' },
        { href: '/dj-soiree-entreprise', title: "DJ soirée d'entreprise", desc: 'Formules de 800€ à 1600€.' },
        { href: '/blog/prix-dj-mariage-bretagne', title: 'Prix d’un DJ de mariage', desc: 'Le détail pour un mariage en Bretagne.' },
      ]}
    >
      <p className="text-lg">
        « Combien coûte un DJ ? » est souvent la première question qu&apos;on nous pose, et la réponse
        honnête est : ça dépend de la soirée. Plutôt qu&apos;une fourchette vague, voici nos tarifs réels
        par type d&apos;événement, ce qui fait monter ou baisser la facture, et les pièges à éviter quand
        on compare des devis.
      </p>

      <H2>Les prix d&apos;un DJ par type de soirée</H2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left text-sm border border-[#c9a227]/20">
          <thead className="bg-[#141414] text-white">
            <tr>
              <th className="p-3">Type de soirée</th>
              <th className="p-3">Tarif MG Events (TTC)</th>
              <th className="p-3">Ce qui est inclus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#c9a227]/10">
              <td className="p-3">Anniversaire, soirée privée</td>
              <td className="p-3 text-white">600€ à 1200€</td>
              <td className="p-3">De 4h d&apos;animation à la formule VIP avec photobooth</td>
            </tr>
            <tr className="border-t border-[#c9a227]/10">
              <td className="p-3">Soirée d&apos;entreprise, CSE, gala</td>
              <td className="p-3 text-white">800€ à 1600€</td>
              <td className="p-3">Cocktail 4h, Corporate avec jeux interactifs, Premium avec photobooth au logo</td>
            </tr>
            <tr className="border-t border-[#c9a227]/10">
              <td className="p-3">Mariage</td>
              <td className="p-3 text-white">1300€ à 1790€</td>
              <td className="p-3">Du vin d&apos;honneur à la fin de soirée, préparation complète</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Dans les trois cas, le déplacement est inclus jusqu&apos;à 100 km aller-retour au départ de Redon
        (Rennes, Vannes, Nantes, Ploërmel…), puis 0,66 €/km. Le détail de chaque formule est sur nos
        pages <Link href="/dj-anniversaire-bretagne" className={link}>DJ anniversaire</Link>,{' '}
        <Link href="/dj-soiree-entreprise" className={link}>DJ soirée d&apos;entreprise</Link> et{' '}
        <Link href="/tarifs-dj-mariage" className={link}>tarifs DJ mariage</Link>.
      </p>

      <H2>Les 5 éléments qui font varier le prix</H2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong className="text-white">La durée.</strong> Juste la partie dansante, ou de l&apos;apéritif
          à la fin de soirée ? Les heures de présence sont le premier poste d&apos;un devis.
        </li>
        <li>
          <strong className="text-white">La salle et le nombre d&apos;invités.</strong> Une longère avec
          40 personnes et une salle des fêtes avec 150 invités ne demandent ni la même sonorisation ni le
          même éclairage. Une salle équipée d&apos;un limiteur de son se prépare aussi différemment.
        </li>
        <li>
          <strong className="text-white">Les animations.</strong> Quiz personnalisé, blind test, photo
          live sur écran : nos jeux interactifs <Link href="/animations-interactives-mariage" className={link}>AnimaJet</Link>{' '}
          se jouent depuis le téléphone des invités et transforment une soirée « musique de fond » en vrai
          moment partagé.
        </li>
        <li>
          <strong className="text-white">Les options.</strong> <Link href="/photobooth-mariage" className={link}>Photobooth</Link>,{' '}
          <Link href="/livre-dor-audio" className={link}>livre d&apos;or audio</Link>, étincelles froides pour
          le gâteau.
        </li>
        <li>
          <strong className="text-white">La distance.</strong> Au-delà des 100 km aller-retour inclus, les
          kilomètres sont facturés et doivent apparaître clairement.
        </li>
      </ul>

      <H2>Comment lire (et comparer) un devis de DJ</H2>
      <p>
        Deux devis à 700€ peuvent cacher deux prestations très différentes. Avant de comparer les prix,
        vérifiez ligne par ligne :
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>l&apos;heure de début et de fin, et le tarif des heures supplémentaires ;</li>
        <li>le matériel prévu (sono, éclairage, micro sans fil) et le matériel de secours ;</li>
        <li>le temps de préparation : rendez-vous, playlist, déroulé de la soirée ;</li>
        <li>les frais de déplacement et d&apos;installation ;</li>
        <li>l&apos;assurance responsabilité civile professionnelle ;</li>
        <li>les conditions d&apos;acompte et d&apos;annulation.</li>
      </ul>
      <p>
        Un tarif très bas s&apos;explique souvent par ce qui manque : pas de matériel de secours, pas de
        préparation, ou un DJ qui découvre la personne fêtée en arrivant. Pour aller plus loin, notre
        article <Link href="/blog/questions-a-poser-dj-mariage" className={link}>questions à poser à son DJ</Link>{' '}
        vaut aussi pour un anniversaire ou une soirée d&apos;entreprise.
      </p>

      <H2>Pourquoi un mariage coûte plus cher qu&apos;une soirée</H2>
      <p>
        On nous demande souvent pourquoi un DJ de mariage dépasse le prix d&apos;un anniversaire. La
        différence ne vient pas du mot « mariage » mais du temps passé : présence de la cérémonie à la fin
        de soirée, plusieurs échanges en amont, coordination avec le traiteur et le lieu, sonorisation du
        cocktail en extérieur, déroulé minuté. Le détail est expliqué dans notre article{' '}
        <Link href="/blog/prix-dj-mariage-bretagne" className={link}>prix d&apos;un DJ de mariage en Bretagne</Link>.
      </p>

      <H2>Obtenir un prix exact pour votre soirée</H2>
      <p>
        Le plus simple : décrivez-nous la date, le lieu, le nombre d&apos;invités et le type de soirée.
        Vous recevez un devis détaillé et gratuit sous 24h, avec tout ce qui est inclus et rien de caché.
      </p>
    </BlogArticleShell>
  );
}
