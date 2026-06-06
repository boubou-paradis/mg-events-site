import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'quiz-mariage-interactif';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Quiz mariage interactif | Animation jeu sur smartphone — AnimaJet',
  description:
    "Un quiz de mariage interactif et personnalisé : vos invités jouent depuis leur smartphone, le classement s'affiche en direct sur écran géant. Sans application. Conçu et développé par MG Events.",
  keywords:
    'quiz mariage interactif, quiz mariage, jeu interactif mariage, animation quiz mariage, quiz personnalisé mariage, quiz invités mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Quiz mariage interactif — AnimaJet par MG Events',
    description:
      "Le quiz interactif qui fait jouer tous vos invités en même temps, depuis leur téléphone, sur écran géant.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Comment fonctionne un quiz de mariage interactif ?',
    answer:
      "Le DJ lance le quiz depuis sa console. Un QR Code s'affiche sur l'écran géant et sur les tables : les invités le scannent et rejoignent le jeu en quelques secondes, sans application. Les questions apparaissent à l'écran, chacun répond sur son smartphone, et le classement se met à jour en direct. Rapidité et bonnes réponses font grimper le score.",
  },
  {
    question: 'Peut-on personnaliser les questions du quiz ?',
    answer:
      "Absolument, c'est même ce qui rend le quiz mémorable. On crée ensemble des questions sur votre histoire : où vous êtes-vous rencontrés ? Qui a dit 'je t'aime' en premier ? Quel est le plat préféré de la mariée ? On peut aussi mélanger avec de la culture générale ou de la musique pour fédérer toutes les générations.",
  },
  {
    question: 'À quel moment du mariage organiser le quiz ?',
    answer:
      "Le quiz fonctionne très bien pendant le vin d'honneur (pour lancer l'ambiance), entre deux plats du repas (pour relancer l'énergie) ou en transition avant la soirée dansante. Une session dure généralement 10 à 15 minutes — assez pour créer de l'émulation sans casser le rythme.",
  },
  {
    question: 'Combien d\'invités peuvent participer au quiz en même temps ?',
    answer:
      "Tous. Que vous soyez 30 ou 200 convives, chacun joue sur son propre téléphone simultanément. Les invités peuvent aussi jouer en équipe par table, ce qui crée une dynamique de groupe très appréciée.",
  },
  {
    question: 'Faut-il télécharger une application pour le quiz ?',
    answer:
      "Non. Le quiz AnimaJet fonctionne entièrement dans le navigateur du smartphone. On scanne le QR Code, on entre son prénom, et c'est parti. Aucune application, aucun compte : même les grands-parents jouent sans difficulté.",
  },
  {
    question: 'Le quiz interactif est-il inclus dans vos formules ?',
    answer:
      "Oui, le quiz fait partie d'AnimaJet, inclus dès la formule Éclat d'Amour à 1200€ TTC. Vous bénéficiez du quiz et de toutes les autres animations interactives sans supplément.",
  },
];

export default function QuizMariageInteractif() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Quiz mariage interactif"
      h1={<>Quiz mariage <span className="text-[#c9a227]">interactif</span></>}
      subtitle="Le jeu qui fait participer tous vos invités, en direct, sur écran géant"
      heroImage="/images/animajet-jeux-interactifs-mariage.png"
      heroAlt="Quiz mariage interactif AnimaJet affiché sur écran géant, invités jouant sur smartphone"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Quiz mariage interactif AnimaJet',
          description:
            "Quiz de mariage interactif et personnalisé : participation des invités depuis leur smartphone via QR Code, classement en direct sur écran géant. Inclus dans les formules DJ mariage MG Events.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le <span className="text-[#c9a227]">quiz interactif</span> : l&apos;animation qui réveille toute la salle
        </SectionTitle>
        <Prose>
          <p>
            Il y a un moment, à chaque mariage, où l&apos;énergie retombe : la fin du repas approche, certains invités regardent leur téléphone,
            l&apos;ambiance s&apos;essouffle avant la soirée dansante. Le <strong className="text-white">quiz mariage interactif</strong> est précisément
            l&apos;outil qui transforme ce creux en temps fort.
          </p>
          <p>
            Le principe est simple : le DJ lance un quiz, vos invités le rejoignent en scannant un QR Code avec leur smartphone, et les questions
            défilent sur l&apos;<strong className="text-white">écran géant</strong>. Chacun répond depuis son téléphone, le plus rapide marque le plus de points,
            et le <span className="text-[#c9a227]">classement s&apos;actualise en direct</span>. En quelques secondes, toute la salle est happée par le jeu.
          </p>
          <p>
            Ce qui fait la magie d&apos;un quiz réussi, c&apos;est la <strong className="text-white">personnalisation</strong>. Un quiz sur l&apos;histoire des mariés,
            leurs manies, leurs anecdotes de couple, déclenche bien plus de rires qu&apos;un quiz générique. C&apos;est l&apos;occasion pour vos proches d&apos;en
            apprendre sur vous — et pour vous de découvrir qui vous connaît vraiment.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Comment se déroule un <span className="text-[#c9a227]">quiz interactif</span></SectionTitle>
        <Steps
          steps={[
            { title: 'On prépare vos questions', text: 'Avant le jour J, on construit ensemble un quiz sur mesure : votre histoire, vos invités, un peu de culture générale et de musique pour mélanger les générations.' },
            { title: 'Les invités rejoignent le jeu', text: "Le QR Code s'affiche, chacun le scanne et entre son prénom. Aucune application, connexion en moins de 5 secondes." },
            { title: 'Le classement monte en direct', text: "Les questions défilent à l'écran, les scores s'actualisent, le suspense monte jusqu'à la révélation du grand gagnant." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Pourquoi le quiz fonctionne <span className="text-[#c9a227]">à tous les coups</span>
        </SectionTitle>
        <Prose>
          <p>
            Le quiz interactif coche toutes les cases d&apos;une bonne animation de mariage. Il est <strong className="text-white">inclusif</strong> :
            personne n&apos;a besoin de se lever ou de se mettre en avant, on joue assis, depuis sa place. Il est <strong className="text-white">intergénérationnel</strong> :
            une grand-mère peut très bien battre un neveu de 20 ans sur une question d&apos;histoire familiale. Et il est <strong className="text-white">fédérateur</strong> :
            tout le monde regarde le même écran, vit les mêmes rebondissements, applaudit le même gagnant.
          </p>
          <p>
            Surtout, il crée des souvenirs. Les invités repartent en se rappelant qui a triché, qui a fini dernier, qui connaissait étonnamment bien
            la vie de la mariée. Ces anecdotes nourrissent les conversations bien après le mariage.
          </p>
        </Prose>
        <div className="mt-8 card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce que le quiz interactif apporte à votre mariage</h3>
          <CheckList
            items={[
              'Une animation à laquelle 100% de vos invités participent',
              'Un moment fort pour relancer l\'ambiance entre deux temps',
              'Des questions personnalisées à votre histoire de couple',
              'Un jeu qui fédère toutes les générations',
              'Zéro contrainte : on joue depuis sa place, sur son téléphone',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
