import { Metadata } from 'next';
import Link from 'next/link';
import BlogArticleShell from '@/components/BlogArticleShell';

const SLUG = 'prix-dj-mariage-bretagne';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Prix DJ mariage : comprendre les tarifs en Bretagne',
  description:
    "Combien coûte un DJ de mariage en Bretagne ? Ce qui fait varier les prix (durée, matériel, animations, déplacement), comment lire un devis et éviter les mauvaises surprises.",
  alternates: { canonical: `${BASE}/blog/${SLUG}` },
  openGraph: {
    title: 'Combien coûte un DJ de mariage en Bretagne ?',
    description: 'Les vraies variables qui font le prix d\'un DJ mariage, et comment comparer les devis sereinement.',
    url: `${BASE}/blog/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Quel budget prévoir pour un DJ de mariage ?',
    answer:
      "Tout dépend de ce qui est inclus : durée de présence, matériel son et lumière, animations, effets d'ouverture de bal, photobooth. Chez MG Events, nos formules mariage vont de 1200€ à 1690€ TTC, tarifs affichés publiquement. Comparez toujours ce que recouvre le prix, pas seulement le chiffre.",
  },
  {
    question: 'Pourquoi certains DJ sont-ils beaucoup moins chers ?',
    answer:
      "Un tarif très bas cache souvent une réalité : matériel limité ou vieillissant, pas de rendez-vous de préparation, pas d'assurance professionnelle, présence réduite le jour J. Un DJ mariage professionnel passe des heures à préparer votre soirée avant même d'arriver — ce travail invisible se retrouve dans le prix.",
  },
  {
    question: 'Le prix inclut-il le matériel son et lumière ?',
    answer:
      "Chez un professionnel, oui : sonorisation, éclairage de piste, micros sans fil doivent être compris et détaillés dans le devis. Méfiez-vous des devis où le matériel apparaît en supplément flou. Chez MG Events, chaque formule liste précisément le matériel inclus.",
  },
  {
    question: 'Les options (photobooth, cérémonie laïque, effets) coûtent-elles cher ?',
    answer:
      "À titre d'exemple chez MG Events : sonorisation de cérémonie laïque à 180€, photobooth vintage à 240€ (inclus dans la formule Conte de Fées), Livre d'Or Audio à 40€. Des options claires, affichées, sans surprise sur la facture finale.",
  },
  {
    question: 'Faut-il verser un acompte pour réserver son DJ ?',
    answer:
      "C'est la pratique courante : un acompte à la signature du contrat bloque définitivement votre date. Vérifiez que le contrat précise la prestation détaillée, les horaires, le prix TTC ferme et les conditions d'annulation avant de verser quoi que ce soit.",
  },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">{children}</h2>
);

export default function Article() {
  return (
    <BlogArticleShell
      slug={SLUG}
      h1={<>Combien coûte un <span className="text-[#c9a227]">DJ de mariage</span> en Bretagne ?</>}
      plainTitle="Combien coûte un DJ de mariage en Bretagne ?"
      description="Les vraies variables qui font le prix d'un DJ mariage en Bretagne, et comment comparer les devis."
      heroImage="/images/console-dj-pro.jpg"
      heroAlt="Console DJ professionnelle installée pour un mariage en Bretagne"
      date="1 juillet 2026"
      isoDate="2026-07-01"
      readTime="9 min"
      faqs={faqs}
      related={[
        { href: '/tarifs-dj-mariage', title: 'Nos tarifs DJ mariage', desc: 'Formules et options MG Events, en toute transparence.' },
        { href: '/blog/questions-a-poser-dj-mariage', title: 'Questions à poser à son DJ', desc: 'La checklist avant de signer.' },
        { href: '/blog/comment-choisir-dj-mariage-bretagne', title: 'Comment choisir son DJ', desc: 'Les critères qui comptent vraiment.' },
      ]}
    >
      <p className="text-lg">
        C&apos;est l&apos;une des premières questions que se posent les couples en organisant leur mariage :
        quel budget prévoir pour le DJ ? La réponse honnête : ça dépend — mais ça dépend de choses très
        concrètes, qu&apos;on va détailler ici pour que vous puissiez comparer les devis en connaissance de
        cause, sans mauvaise surprise.
      </p>

      <H2>Ce que vous payez vraiment quand vous réservez un DJ mariage</H2>
      <p>
        Le tarif d&apos;un DJ de mariage ne rémunère pas « quelques heures de musique ». Le jour J, un DJ
        professionnel arrive plusieurs heures avant vos invités pour installer et tester la sonorisation et
        les éclairages, reste jusqu&apos;au bout de la nuit, puis démonte. Ajoutez le rendez-vous de
        préparation, les échanges sur la playlist, la coordination avec le traiteur, le photographe et les
        témoins, l&apos;entretien et le renouvellement du matériel, l&apos;assurance professionnelle… La
        prestation du jour J est la partie émergée d&apos;un travail qui commence des mois avant.
      </p>

      <H2>Les cinq variables qui font varier le prix</H2>
      <p>
        <strong className="text-white">1. La durée de présence.</strong> Un DJ présent du vin
        d&apos;honneur à la fin de soirée, c&apos;est souvent plus de dix heures sur place. Certains devis
        affichent un prix attractif… pour une présence qui commence après le repas. Vérifiez toujours les
        horaires inclus.
      </p>
      <p>
        <strong className="text-white">2. Le matériel.</strong> Sonorisation adaptée à la taille de la
        salle, éclairage de piste, ambiance de salle, micros sans fil pour les discours, vidéoprojecteur
        pour les rétrospectives… La qualité et la quantité du matériel expliquent une grande partie des
        écarts de prix entre prestataires.
      </p>
      <p>
        <strong className="text-white">3. Les animations incluses.</strong> Un DJ qui se contente
        d&apos;enchaîner les morceaux et un DJ animateur qui gère les temps forts, accompagne les surprises
        des témoins et propose des animations interactives, ce n&apos;est pas la même prestation. Chez MG
        Events, les <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">animations
        interactives AnimaJet</Link> (quiz, photo live) sont incluses dans toutes les formules.
      </p>
      <p>
        <strong className="text-white">4. Les effets et options.</strong> Fumée lourde pour
        l&apos;ouverture de bal, étincelles froides, photobooth, sonorisation de cérémonie laïque : ces
        postes s&apos;ajoutent au socle, soit dans une formule supérieure, soit en option. L&apos;important
        est que chaque option ait un prix clair.
      </p>
      <p>
        <strong className="text-white">5. Le déplacement.</strong> Un DJ basé loin de votre lieu de
        réception facturera des frais de route, voire une nuit d&apos;hôtel. Privilégier un prestataire
        local, c&apos;est aussi un devis plus simple.
      </p>

      <H2>Des exemples concrets et publics : nos formules</H2>
      <p>
        Pour vous donner un ordre d&apos;idée réel — pas une fourchette théorique — voici nos tarifs,
        affichés publiquement sur notre <Link href="/tarifs-dj-mariage" className="text-[#c9a227] hover:underline">page
        tarifs</Link> : la formule Éclat d&apos;Amour à 1200€ TTC (sonorisation complète du cocktail au
        dancefloor, éclairages, animations interactives, deux micros sans fil), Rêve en Blanc à 1490€ TTC
        (ajoute l&apos;ambiance de salle, la fumée lourde, les étincelles froides et le Livre d&apos;Or
        Audio) et Conte de Fées à 1690€ TTC (ajoute le photobooth vintage avec 150 impressions). La
        sonorisation de cérémonie laïque est à 180€.
      </p>
      <p>
        Chaque prestataire a sa propre grille — l&apos;essentiel est de comparer à périmètre égal : mêmes
        horaires, même matériel, mêmes animations.
      </p>

      <H2>Comment repérer un devis sérieux</H2>
      <p>
        Un devis de DJ mariage professionnel détaille noir sur blanc : la date et le lieu, les horaires de
        début et de fin, le matériel apporté poste par poste, les animations et options retenues, le prix
        TTC ferme, les conditions d&apos;annulation et l&apos;assurance responsabilité civile
        professionnelle. Si l&apos;un de ces éléments manque, demandez-le avant de signer — un prestataire
        sérieux vous le fournira sans difficulté.
      </p>
      <p>
        Méfiez-vous aussi des prix anormalement bas : le DJ à 400€ « tout compris » existe, mais posez-vous
        la question de ce qui est réellement compris. Matériel de location récupéré la veille ? Aucune
        préparation ? Pas d&apos;assurance ? Votre mariage n&apos;a lieu qu&apos;une fois : le poste
        animation détermine en grande partie le souvenir que vos invités en garderont.
      </p>

      <H2>Le bon réflexe : demander un devis personnalisé</H2>
      <p>
        Plutôt que d&apos;additionner des fourchettes trouvées en ligne, décrivez votre projet à un ou deux
        prestataires : date, lieu de réception, nombre d&apos;invités, envies particulières (cérémonie
        laïque, photobooth, effets…). Vous obtiendrez un chiffre réel, engageant, et vous pourrez juger la
        réactivité et le sérieux de la réponse — premier indice de ce que sera la collaboration.{' '}
        <Link href="/#contact" className="text-[#c9a227] hover:underline">Chez MG Events, le devis est gratuit
        et envoyé sous 24h</Link>.
      </p>
    </BlogArticleShell>
  );
}
