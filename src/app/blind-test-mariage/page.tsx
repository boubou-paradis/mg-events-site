import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'blind-test-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Blind test mariage | Animation musicale interactive — AnimaJet',
  description:
    "Le blind test de mariage interactif : vos invités reconnaissent les titres et buzzent depuis leur smartphone, score en direct sur écran géant. Toutes générations. Exclusivité MG Events en Bretagne.",
  keywords:
    'blind test mariage, blind test interactif mariage, animation musicale mariage, jeu musical mariage, quiz musical mariage, blind test soirée',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Blind test mariage interactif — AnimaJet par MG Events',
    description:
      "La bataille musicale qui mélange toutes les générations, en direct sur écran géant, sans application.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Comment se déroule un blind test de mariage ?',
    answer:
      "Le DJ diffuse les premières secondes d'un titre, et les invités tentent de le reconnaître depuis leur smartphone. Plus on répond vite et juste, plus on marque de points. Le classement s'affiche en direct sur l'écran géant. C'est exactement le format des grands jeux télévisés, transposé à votre soirée.",
  },
  {
    question: 'Peut-on choisir les musiques du blind test ?',
    answer:
      "Oui. On construit la playlist du blind test avec vous : vos coups de cœur, les classiques que tout le monde connaît, les hits de votre génération et de celle de vos parents. On peut même glisser 'votre chanson' ou des titres clins d'œil à votre histoire.",
  },
  {
    question: 'Le blind test convient-il aux personnes âgées ?',
    answer:
      "C'est l'un de ses grands atouts. En mixant variété française des années 60-80, classiques internationaux et hits récents, le blind test donne à chaque génération l'occasion de briller. Les grands-parents reconnaissent souvent les titres avant les jeunes — et adorent ça.",
  },
  {
    question: 'Quelle est la différence entre un blind test et un quiz ?',
    answer:
      "Le quiz porte sur des questions (votre histoire, culture générale), le blind test porte uniquement sur la reconnaissance de musiques. Les deux sont inclus dans AnimaJet et se complètent parfaitement : on peut enchaîner un quiz pendant le repas et un blind test avant d'ouvrir la piste de danse.",
  },
  {
    question: 'Faut-il une application pour jouer au blind test ?',
    answer:
      "Non, le blind test AnimaJet fonctionne dans le navigateur du téléphone. On scanne un QR Code, on entre son prénom et on joue. Aucune application à installer.",
  },
  {
    question: 'Le blind test est-il inclus dans la prestation DJ ?',
    answer:
      "Oui, il fait partie d'AnimaJet, inclus dès la formule Éclat d'Amour (1200€ TTC). Et comme c'est le DJ qui le pilote, la transition entre blind test et soirée dansante est parfaitement fluide.",
  },
];

export default function BlindTestMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Blind test mariage"
      h1={<>Blind test <span className="text-[#c9a227]">mariage</span></>}
      subtitle="La bataille musicale qui réunit toutes les générations sur la même piste"
      heroImage="/images/gallery-2.jpg"
      heroAlt="Blind test musical interactif lors d'une soirée de mariage animée par MG Events"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Blind test mariage interactif AnimaJet',
          description:
            "Blind test musical interactif pour mariage : les invités reconnaissent les titres et buzzent depuis leur smartphone, classement en direct sur écran géant. Inclus dans les formules DJ MG Events.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le <span className="text-[#c9a227]">blind test</span>, l&apos;animation musicale qui met le feu
        </SectionTitle>
        <Prose>
          <p>
            La musique est le cœur d&apos;un mariage. Alors quoi de plus naturel que d&apos;en faire un jeu ? Le <strong className="text-white">blind test
            de mariage</strong> reprend le format culte des émissions télé : on diffuse les premières notes d&apos;un titre, et c&apos;est la course pour le reconnaître.
          </p>
          <p>
            Avec AnimaJet, chaque invité buzze depuis son <strong className="text-white">smartphone</strong>. Le système enregistre qui répond le plus vite
            et le plus juste, et le <span className="text-[#c9a227]">classement s&apos;affiche en direct sur l&apos;écran géant</span>. Les cris, les
            «&nbsp;je l&apos;avais&nbsp;!&nbsp;» et les éclats de rire font le reste. C&apos;est l&apos;animation idéale juste avant d&apos;ouvrir la piste de danse :
            elle chauffe la salle en douceur et installe l&apos;ambiance musicale de la soirée.
          </p>
          <p>
            Et parce que le DJ pilote tout en direct, il adapte la difficulté et les styles en temps réel selon les réactions. Trop facile ? Il corse.
            Une génération décroche ? Il rééquilibre la playlist. Cette <strong className="text-white">réactivité</strong> fait toute la différence entre un blind test qui ronronne et un blind test inoubliable.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Un blind test en <span className="text-[#c9a227]">3 temps</span></SectionTitle>
        <Steps
          steps={[
            { title: 'On compose votre playlist', text: 'Classiques intemporels, hits de votre génération et de celle de vos parents, clins d\'œil à votre histoire : on prépare une sélection qui parle à tout le monde.' },
            { title: 'Les invités buzzent en direct', text: "Premières notes, tout le monde cherche, les plus rapides marquent. Le score grimpe en temps réel sur l'écran géant." },
            { title: 'On enchaîne sur la piste', text: "Le DJ glisse naturellement du blind test à la soirée dansante : la salle est déjà chaude, l'ouverture de bal n'en est que plus réussie." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Pourquoi le blind test cartonne en mariage</h3>
          <CheckList
            items={[
              'Un format universel que tout le monde connaît et adore',
              'Le mélange parfait des générations sur un même jeu',
              'Une montée d\'énergie idéale avant la soirée dansante',
              'Une playlist 100% personnalisée à votre histoire',
              'Piloté en direct par un vrai DJ pour s\'adapter à la salle',
              'Inclus dans toutes les formules MG Events, sans supplément',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
