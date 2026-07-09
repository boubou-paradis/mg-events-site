import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'jeu-interactif-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Jeu interactif mariage | Animations sur écran géant — AnimaJet',
  description:
    "Les jeux interactifs de mariage AnimaJet : quiz, blind test, roue de la destinée, photo mystère. Vos invités jouent sur smartphone, sur écran géant.",
  keywords:
    'jeu interactif mariage, jeux mariage, animation jeu mariage, jeux soirée mariage, jeux invités mariage, roue de la destinée mariage, photo mystère mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Jeux interactifs de mariage — AnimaJet par MG Events',
    description:
      "Quiz, blind test, roue de la destinée, photo mystère... Une palette de jeux pour faire vibrer vos invités.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Quels jeux interactifs propose AnimaJet pour un mariage ?',
    answer:
      "AnimaJet réunit une palette complète : quiz personnalisé, blind test musical, roue de la destinée (gages et défis), photo mystère (image qui se révèle), bon ordre (deux équipes s'affrontent pour reconstituer un code à l'écran) et jeux de rapidité. On combine ceux qui correspondent à l'ambiance que vous souhaitez.",
  },
  {
    question: 'Comment choisir les jeux pour notre mariage ?',
    answer:
      "On en discute lors du rendez-vous de préparation. Selon votre style — convivial, festif, plein d'émotion — et le profil de vos invités, on sélectionne et on dose les jeux. Un mariage très familial appréciera la photo mystère et le quiz ; une soirée jeune et festive adorera les jeux de rapidité et la roue de la destinée.",
  },
  {
    question: 'Les jeux conviennent-ils à tous les âges ?',
    answer:
      "Oui, c'est leur force. Les jeux AnimaJet sont pensés pour fédérer de 7 à 77 ans. On joue assis depuis sa place, sur son smartphone, sans avoir à se mettre en avant. Personne ne reste sur la touche.",
  },
  {
    question: 'Faut-il installer une application pour jouer ?',
    answer:
      "Non. Tous les jeux fonctionnent dans le navigateur du smartphone via un QR Code. Aucune application, aucun compte : la participation est immédiate.",
  },
  {
    question: 'Qui anime les jeux pendant la soirée ?',
    answer:
      "C'est le DJ qui pilote tout en direct, en alternant musique et jeux selon l'énergie de la salle. Vous gardez un vrai DJ professionnel, avec en plus la dimension interactive des jeux.",
  },
  {
    question: 'Les jeux interactifs sont-ils inclus dans vos formules ?',
    answer:
      "Oui, l'ensemble des jeux AnimaJet est inclus dès la formule Éclat d'Amour (1200€ TTC), sans supplément.",
  },
];

export default function JeuInteractifMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Jeu interactif mariage"
      h1={<>Jeux interactifs de <span className="text-[#c9a227]">mariage</span></>}
      subtitle="Quiz, blind test, roue de la destinée, photo mystère — une palette de jeux pour tous vos invités"
      heroImage="/images/animajet-jeux-interactifs-mariage.png"
      heroAlt="Jeux interactifs de mariage AnimaJet : quiz, photo mystère, roue de la destinée, bon ordre sur écran géant"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Jeux interactifs de mariage AnimaJet',
          description:
            "Palette de jeux interactifs pour mariage : quiz, blind test, roue de la destinée, photo mystère, bon ordre et jeux de rapidité, joués sur smartphone et affichés sur écran géant.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Toute une <span className="text-[#c9a227]">palette de jeux</span> pour rythmer votre soirée
        </SectionTitle>
        <Prose>
          <p>
            Un bon jeu de mariage, c&apos;est celui qui fait participer tout le monde au bon moment. Plutôt qu&apos;une animation unique qui finit par lasser,
            AnimaJet propose une <strong className="text-white">palette de jeux interactifs</strong> que le DJ pioche et enchaîne selon l&apos;énergie de la salle.
          </p>
          <p>
            Le <strong className="text-white">quiz</strong> teste qui connaît le mieux les mariés. Le <strong className="text-white">blind test</strong> fait rugir
            la salle sur les premières notes. La <strong className="text-white">roue de la destinée</strong> distribue gages et défis pour des fous rires garantis.
            La <strong className="text-white">photo mystère</strong> dévoile peu à peu une image à deviner. Le <strong className="text-white">bon ordre</strong> oppose
            deux équipes de cinq invités qui doivent reconstituer un code affiché à l&apos;écran, la plus rapide l&apos;emporte. Et les <strong className="text-white">jeux de rapidité</strong> récompensent les réflexes les plus vifs.
          </p>
          <p>
            Tous se jouent <span className="text-[#c9a227]">depuis le smartphone, sans application</span>, et s&apos;affichent sur l&apos;écran géant. En les combinant,
            on construit une soirée qui ne retombe jamais : à chaque baisse de régime, un jeu relance l&apos;énergie collective.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Des jeux qui s&apos;<span className="text-[#c9a227]">adaptent à votre soirée</span></SectionTitle>
        <Steps
          steps={[
            { title: 'On sélectionne vos jeux', text: 'Selon votre style et vos invités, on choisit ensemble les jeux et leur dosage lors de la préparation.' },
            { title: 'Le DJ pilote en direct', text: "Pendant la soirée, le DJ lance chaque jeu au bon moment, en alternance avec la musique, pour maintenir l'énergie." },
            { title: 'La salle joue ensemble', text: "Tout le monde participe sur son smartphone, l'écran géant fait vivre le jeu à toute la réception en même temps." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce que les jeux interactifs changent</h3>
          <CheckList
            items={[
              'Une palette de jeux variés, jamais le même temps mort',
              'Le DJ qui dose et enchaîne selon l\'ambiance',
              'Des jeux pour toutes les générations, de 7 à 77 ans',
              'Une participation depuis sa place, sans se mettre en avant',
              'Aucune application : tout sur smartphone via QR Code',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
