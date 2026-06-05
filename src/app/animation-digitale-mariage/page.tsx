import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'animation-digitale-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Animation digitale mariage | Quiz, photo & écran géant — AnimaJet',
  description:
    "L'animation digitale de mariage AnimaJet : smartphone, QR Code, écran géant. Quiz, blind test, partage photo en direct et mur photo connectés, sans application. MG Events Bretagne & Grand Ouest.",
  keywords:
    'animation digitale mariage, animation connectée mariage, animation numérique mariage, animation high-tech mariage, animation interactive digitale mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Animation digitale de mariage — AnimaJet par MG Events',
    description:
      "Smartphone, QR Code, écran géant : l'animation digitale qui connecte tous vos invités, sans application.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: "Qu'est-ce qu'une animation digitale de mariage ?",
    answer:
      "C'est une animation qui s'appuie sur les outils numériques — smartphone, QR Code, écran géant — pour faire participer les invités en temps réel. AnimaJet en est l'exemple complet : quiz, blind test, partage photo en direct et mur photo, tous connectés et affichés sur grand écran, sans aucune application à installer.",
  },
  {
    question: "L'animation digitale est-elle compliquée à utiliser ?",
    answer:
      "Non, c'est même l'inverse. Toute la technologie est gérée par le DJ ; pour les invités, il suffit de scanner un QR Code. Aucune application, aucun compte. La technologie est invisible : seule l'expérience compte.",
  },
  {
    question: 'Une animation digitale a-t-elle besoin de beaucoup de matériel ?',
    answer:
      "Nous apportons tout le nécessaire : vidéoprojecteur ou écran, sonorisation et le système AnimaJet. Côté invités, leur smartphone suffit. L'installation s'adapte à votre salle, que ce soit un château, un domaine ou une salle de réception.",
  },
  {
    question: "L'aspect digital ne risque-t-il pas de refroidir l'ambiance ?",
    answer:
      "Au contraire, bien utilisé, le digital réchauffe l'ambiance. Le numérique n'est qu'un moyen : ce qui compte, c'est le jeu collectif, les rires, les photos partagées. Le DJ veille toujours à garder l'humain au centre, le digital au service de l'émotion.",
  },
  {
    question: "Faut-il une connexion internet pour l'animation digitale ?",
    answer:
      "Une connexion mobile classique (4G/5G) suffit dans la plupart des salles. Pour les lieux mal couverts, nous anticipons une solution lors de la préparation afin que tout fonctionne sans accroc le jour J.",
  },
  {
    question: "L'animation digitale est-elle incluse dans vos formules ?",
    answer:
      "Oui. AnimaJet, notre solution d'animation digitale complète, est inclus dès la formule Éclat d'Amour (1200€ TTC), avec l'ensemble de ses animations connectées.",
  },
];

export default function AnimationDigitaleMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Animation digitale mariage"
      h1={<>Animation <span className="text-[#c9a227]">digitale</span> de mariage</>}
      subtitle="Smartphone, QR Code, écran géant : la technologie au service de l'émotion"
      heroImage="/images/animajet-animations-interactives-mariage.jpg"
      heroAlt="Animation digitale de mariage AnimaJet : smartphone, QR Code et écran géant connectés"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Animation digitale de mariage AnimaJet',
          description:
            "Animation digitale complète pour mariage : quiz, blind test, partage photo en direct et mur photo connectés, pilotés sur smartphone via QR Code et affichés sur écran géant, sans application.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le <span className="text-[#c9a227]">digital</span> au service de votre soirée, pas l&apos;inverse
        </SectionTitle>
        <Prose>
          <p>
            «&nbsp;Digital&nbsp;», en matière de mariage, fait parfois peur : on imagine de la technologie froide, des écrans qui isolent. AnimaJet prend
            le contre-pied total de cette idée. Ici, le <strong className="text-white">digital n&apos;est qu&apos;un moyen</strong> — la fin, c&apos;est l&apos;émotion partagée,
            les rires, les souvenirs collectifs.
          </p>
          <p>
            Concrètement, une <strong className="text-white">animation digitale de mariage</strong> repose sur trois outils que tout le monde maîtrise déjà :
            le <span className="text-[#c9a227]">smartphone</span> (que chacun a en poche), le <span className="text-[#c9a227]">QR Code</span> (qu&apos;on scanne en une seconde)
            et l&apos;<span className="text-[#c9a227]">écran géant</span> (qui rassemble la salle). Sur cette base simple, on déploie quiz, blind test, partage photo
            en direct et mur photo — toute la richesse d&apos;AnimaJet.
          </p>
          <p>
            La technologie est entièrement gérée par le DJ : pour vos invités, elle est <strong className="text-white">invisible</strong>. Ils ne voient que le jeu,
            l&apos;ambiance, leurs photos qui s&apos;affichent. C&apos;est ça, une animation digitale réussie : on oublie la technique, on ne retient que l&apos;expérience.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Le digital, en <span className="text-[#c9a227]">toute simplicité</span></SectionTitle>
        <Steps
          steps={[
            { title: 'Trois outils connus de tous', text: 'Smartphone, QR Code, écran géant : aucune nouveauté à apprendre, on s\'appuie sur des usages déjà familiers.' },
            { title: 'Une technologie invisible', text: "Le DJ gère toute la technique. Pour les invités, il n'y a qu'à scanner et jouer : zéro complexité." },
            { title: 'L\'humain au centre', text: "Le digital sert l'émotion collective : jeux, photos partagées, rires. La technologie s'efface derrière l'expérience." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Une animation digitale bien pensée</h3>
          <CheckList
            items={[
              'Trois outils simples : smartphone, QR Code, écran géant',
              'Aucune application, participation immédiate',
              'La technologie gérée par le DJ, invisible pour les invités',
              'Le digital au service de l\'émotion, jamais l\'inverse',
              'Quiz, blind test, partage photo et mur photo réunis',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
