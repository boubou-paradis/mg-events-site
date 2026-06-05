import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'animation-cocktail-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Animation cocktail mariage | Occuper les invités au vin d\'honneur — AnimaJet',
  description:
    "Animez le cocktail et le vin d'honneur de votre mariage : quiz, blind test et partage photo interactifs pour occuper vos invités pendant les photos de couple. Sans application. MG Events Bretagne.",
  keywords:
    'animation cocktail mariage, animation vin d\'honneur, occuper invités cocktail mariage, animation apéritif mariage, animation pendant photos mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Animation cocktail de mariage — AnimaJet par MG Events',
    description:
      "Occupez et amusez vos invités pendant le vin d'honneur avec des animations interactives sur smartphone.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Comment occuper les invités pendant le cocktail de mariage ?',
    answer:
      "Le cocktail est souvent le moment où les mariés s'éclipsent pour les photos de couple : les invités peuvent vite s'ennuyer. Les animations interactives AnimaJet (quiz, blind test, partage photo) les occupent intelligemment. Chacun joue depuis son smartphone, et l'ambiance monte sans temps mort.",
  },
  {
    question: 'Quelle animation choisir pour le vin d\'honneur ?',
    answer:
      "Le quiz et le partage photo sont parfaits pour le vin d'honneur : ils sont légers, n'exigent pas que tout le monde s'arrête de discuter, et créent une dynamique conviviale. Le blind test fonctionne aussi très bien pour réchauffer l'ambiance avant le repas.",
  },
  {
    question: 'Les animations dérangent-elles les conversations du cocktail ?',
    answer:
      "Non, au contraire. Elles sont conçues pour s'intégrer en douceur : on peut jouer entre deux discussions, sans pression. Le partage photo, par exemple, tourne en arrière-plan sur l'écran sans interrompre qui que ce soit.",
  },
  {
    question: 'Faut-il une salle équipée pour animer le cocktail ?',
    answer:
      "Un écran ou un mur de projection suffit, et nous apportons le matériel nécessaire. Que le cocktail se tienne en intérieur ou dans un jardin, nous adaptons l'installation au lieu lors de la préparation.",
  },
  {
    question: 'Combien de temps dure l\'animation du cocktail ?',
    answer:
      "Le cocktail dure généralement 1 à 2 heures. On peut y glisser une ou deux sessions de jeu de 10-15 minutes, tout en laissant le partage photo actif en continu. L'idée est d'occuper sans saturer.",
  },
  {
    question: 'L\'animation du cocktail est-elle incluse dans vos formules ?',
    answer:
      "Oui. AnimaJet est inclus dès la formule Éclat d'Amour (1200€ TTC) et couvre tous les temps de votre mariage, du vin d'honneur à la soirée dansante.",
  },
];

export default function AnimationCocktailMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Animation cocktail mariage"
      h1={<>Animation cocktail de <span className="text-[#c9a227]">mariage</span></>}
      subtitle="Occupez et amusez vos invités pendant le vin d'honneur et les photos de couple"
      heroImage="/images/gallery-8.jpg"
      heroAlt="Animation interactive pendant le cocktail et le vin d'honneur d'un mariage"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Animation de cocktail de mariage AnimaJet',
          description:
            "Animations interactives pour le cocktail et le vin d'honneur de mariage : quiz, blind test et partage photo sur smartphone pour occuper les invités pendant les photos de couple.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le <span className="text-[#c9a227]">vin d&apos;honneur</span>, ce moment qu&apos;on oublie d&apos;animer
        </SectionTitle>
        <Prose>
          <p>
            Le cocktail est l&apos;un des moments les plus délicats d&apos;un mariage. Pendant que les mariés s&apos;éclipsent pour leurs photos de couple,
            les invités patientent, parfois <strong className="text-white">une heure ou plus</strong>. Sans animation, l&apos;énergie retombe, et certains
            commencent à regarder leur montre.
          </p>
          <p>
            C&apos;est exactement là qu&apos;une <strong className="text-white">animation de cocktail interactive</strong> fait des merveilles. Avec AnimaJet,
            vos invités lancent un quiz, partagent leurs premières photos, s&apos;essaient à un blind test — le tout depuis leur smartphone, sans rien installer,
            <span className="text-[#c9a227]"> entre deux verres et deux discussions</span>. L&apos;ambiance monte naturellement, et le temps passe sans qu&apos;on le voie.
          </p>
          <p>
            Mieux encore : quand vous revenez de votre séance photo, vous retrouvez une salle déjà chaude, des invités qui rient ensemble et un mur photo
            qui a déjà commencé à se remplir. L&apos;animation du cocktail donne le ton de toute la soirée.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Animer le cocktail <span className="text-[#c9a227]">sans temps mort</span></SectionTitle>
        <Steps
          steps={[
            { title: 'On lance une première session', text: 'Dès que le vin d\'honneur commence, un quiz léger ou un partage photo invite les convives à entrer dans le jeu.' },
            { title: 'Le partage photo tourne en fond', text: "Pendant que vous faites vos photos de couple, l'écran affiche en continu les clichés des invités : la salle s'anime d'elle-même." },
            { title: 'On enchaîne vers le repas', text: "Quand vous revenez, l'ambiance est lancée. La transition vers le dîner se fait naturellement, sur une dynamique positive." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Pourquoi animer votre cocktail avec AnimaJet</h3>
          <CheckList
            items={[
              'Fini les invités qui s\'ennuient pendant vos photos de couple',
              'Une ambiance lancée dès le vin d\'honneur',
              'Des animations légères qui n\'interrompent pas les discussions',
              'Le mur photo qui commence déjà à se remplir',
              'Aucune installation pour les invités : tout sur smartphone',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
