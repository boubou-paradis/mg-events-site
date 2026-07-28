import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'animation-moderne-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Animation moderne mariage | Idées originales 2026 — AnimaJet',
  description:
    "Une animation de mariage moderne et originale : jeux interactifs sur smartphone, partage photo en direct, quiz et blind test sur écran géant.",
  keywords:
    'animation moderne mariage, animation originale mariage, animation mariage tendance, animation mariage 2026, idée animation mariage moderne, animation soirée mariage originale',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Animation moderne de mariage — AnimaJet par MG Events',
    description:
      "Des animations interactives loin des classiques ringards : smartphone, écran géant, partage photo en direct.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: "Qu'est-ce qu'une animation de mariage moderne ?",
    answer:
      "Une animation moderne implique activement les invités et s'appuie sur les usages d'aujourd'hui — notamment le smartphone. Loin des jeux gênants ou des animations imposées, elle laisse chacun participer à son rythme : quiz, blind test, partage photo en direct, mur photo sur écran géant. C'est l'esprit d'AnimaJet.",
  },
  {
    question: 'Quelles animations de mariage éviter aujourd\'hui ?',
    answer:
      "Beaucoup de couples souhaitent éviter les animations « forcées » qui mettent mal à l'aise (jeux où l'on désigne quelqu'un publiquement, défis embarrassants). Les animations modernes privilégient la participation volontaire et collective, où l'on s'amuse sans se sentir exposé.",
  },
  {
    question: "En quoi AnimaJet est-il plus moderne qu'un DJ classique ?",
    answer:
      "Un DJ classique fait danser ; AnimaJet ajoute une couche interactive. Vos invités ne sont plus seulement spectateurs : ils jouent, votent, partagent, et tout s'affiche sur écran géant. C'est cette dimension participative qui fait la modernité.",
  },
  {
    question: 'Une animation moderne plaît-elle aussi aux invités plus âgés ?',
    answer:
      "Oui. L'erreur serait de croire que « moderne » exclut les seniors. Au contraire : le blind test sur les classiques, le quiz sur la famille ou la photo mystère séduisent particulièrement les générations plus âgées, qui se prennent vite au jeu.",
  },
  {
    question: 'Faut-il être connecté pour profiter des animations modernes ?',
    answer:
      "Les invités jouent depuis leur smartphone via un QR Code, sans application. Une connexion mobile classique suffit, et nous anticipons les éventuels problèmes de réseau lors de la préparation, notamment pour les lieux isolés.",
  },
  {
    question: 'Ces animations modernes sont-elles incluses dans vos formules ?',
    answer:
      "Oui, AnimaJet et l'ensemble de ses animations sont inclus dès la formule Éclat d'Amour (1200€ TTC). MG Events est basé à Redon (35) : les forfaits incluent jusqu'à 100 km aller-retour, au-delà 0,66 €/km précisés sur le devis.",
  },
];

export default function AnimationModerneMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Animation moderne mariage"
      h1={<>Animation <span className="text-[#c9a227]">moderne</span> de mariage</>}
      subtitle="Des animations interactives à l'opposé des classiques ringards — pensées pour 2026"
      heroImage="/images/gallery-4.jpg"
      heroAlt="Animation de mariage moderne et interactive : invités connectés sur écran géant"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Animation moderne de mariage AnimaJet',
          description:
            "Animations de mariage modernes et interactives : participation des invités sur smartphone, partage photo en direct, mur photo, quiz et blind test sur écran géant, loin des animations imposées.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          En finir avec les <span className="text-[#c9a227]">animations qui datent</span>
        </SectionTitle>
        <Prose>
          <p>
            On connaît tous ces animations de mariage qui mettent mal à l&apos;aise : le jeu où l&apos;on désigne quelqu&apos;un devant tout le monde, le défi
            embarrassant, l&apos;animation imposée qui tombe à plat. De plus en plus de couples veulent <strong className="text-white">autre chose</strong> :
            une animation qui amuse sans forcer, qui implique sans exposer.
          </p>
          <p>
            C&apos;est toute la philosophie d&apos;une <strong className="text-white">animation moderne</strong>. Avec AnimaJet, chacun participe
            <span className="text-[#c9a227]"> à son rythme, depuis son smartphone</span>, sans avoir à se lever ou à se donner en spectacle. Le quiz, le blind test,
            le partage photo et le mur photo créent une dynamique collective spontanée, où l&apos;on s&apos;amuse parce qu&apos;on en a envie, pas parce qu&apos;on y est obligé.
          </p>
          <p>
            Moderne ne veut pas dire réservé aux jeunes. Au contraire : ces animations s&apos;appuient sur des ressorts universels — la musique, la mémoire,
            la photo, le jeu — qui fédèrent toutes les générations. La modernité, ici, c&apos;est la <strong className="text-white">justesse</strong> :
            la bonne animation, au bon moment, sans malaise.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Ce qui rend une animation <span className="text-[#c9a227]">vraiment moderne</span></SectionTitle>
        <Steps
          steps={[
            { title: 'La participation volontaire', text: 'On joue parce qu\'on en a envie, depuis sa place, sans être désigné ni exposé devant la salle.' },
            { title: 'Le smartphone comme outil', text: "L'objet que chacun a déjà en poche devient la manette de la fête, via un simple QR Code, sans application." },
            { title: 'L\'écran géant fédérateur', text: "Quiz, photos et scores s'affichent au centre de la salle : tout le monde vit la même expérience, en même temps." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Une animation moderne, c&apos;est :</h3>
          <CheckList
            items={[
              'Des invités acteurs, jamais forcés ni exposés',
              'Le smartphone qui relie au lieu d\'isoler',
              'Des animations qui fédèrent toutes les générations',
              'Une expérience collective sur écran géant',
              'Zéro application, participation immédiate par QR Code',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
