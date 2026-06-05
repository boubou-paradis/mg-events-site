import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'partage-photo-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Partage photo mariage en direct | Photos sur écran géant — AnimaJet',
  description:
    "Partage de photos en direct pendant votre mariage : vos invités envoient leurs clichés depuis leur smartphone, ils s'affichent instantanément sur écran géant. Récupérez des centaines de photos. MG Events Bretagne.",
  keywords:
    'partage photo mariage, partage photo direct mariage, photos mariage écran géant, diaporama live mariage, partage photo invités mariage, photo live mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Partage photo de mariage en direct — AnimaJet par MG Events',
    description:
      "Les photos de vos invités s'affichent en direct sur grand écran. Récupérez des centaines de souvenirs.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Comment fonctionne le partage de photos en direct ?',
    answer:
      "Vos invités scannent le QR Code de votre mariage, prennent ou sélectionnent une photo sur leur smartphone, et l'envoient. Elle s'affiche en quelques secondes sur l'écran géant, dans un diaporama qui tourne tout au long de la soirée. Aucune application n'est nécessaire.",
  },
  {
    question: 'Récupère-t-on toutes les photos après le mariage ?',
    answer:
      "Oui. Toutes les photos partagées par vos invités sont rassemblées et vous sont remises après l'événement. C'est l'un des grands avantages : vous récupérez des centaines de clichés pris sous tous les angles, complémentaires de ceux de votre photographe professionnel.",
  },
  {
    question: 'Les photos sont-elles modérées avant affichage ?',
    answer:
      "Oui, une modération est possible pour éviter tout débordement. Le DJ peut valider les photos avant qu'elles n'apparaissent à l'écran, ce qui garantit que seuls de jolis moments sont diffusés devant tous les invités.",
  },
  {
    question: 'Le partage photo remplace-t-il le photographe ?',
    answer:
      "Non, il le complète. Le photographe capture les moments clés avec un œil professionnel ; le partage photo en direct capture la spontanéité, les coulisses, les fous rires entre invités. Les deux ensemble racontent votre mariage de façon bien plus complète.",
  },
  {
    question: 'À quel moment activer le partage de photos ?',
    answer:
      "Idéalement dès le vin d'honneur et jusqu'à la fin de la soirée. Le diaporama tourne en continu en arrière-plan sur l'écran géant, et se remplit au fil des heures. C'est un fil rouge visuel qui accompagne toute la réception.",
  },
  {
    question: 'Le partage photo est-il inclus dans vos formules ?',
    answer:
      "Oui, il fait partie d'AnimaJet, inclus dès la formule Éclat d'Amour (1200€ TTC), au même titre que le quiz, le blind test et le mur photo.",
  },
];

export default function PartagePhotoMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Partage photo mariage"
      h1={<>Partage photo de mariage <span className="text-[#c9a227]">en direct</span></>}
      subtitle="Les photos de vos invités s'affichent en temps réel sur l'écran géant"
      heroImage="/images/gallery-7.jpg"
      heroAlt="Partage de photos en direct des invités sur écran géant pendant une réception de mariage"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Partage photo de mariage en direct AnimaJet',
          description:
            "Partage de photos en direct pendant un mariage : les invités envoient leurs clichés depuis leur smartphone, affichage instantané sur écran géant et récupération de toutes les photos après l'événement.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Toutes les photos de vos invités, <span className="text-[#c9a227]">en direct sur grand écran</span>
        </SectionTitle>
        <Prose>
          <p>
            Le jour de votre mariage, vos invités prennent des dizaines, des centaines de photos. Le problème ? La plupart restent enfermées dans leurs
            téléphones, et vous ne les verrez jamais. Le <strong className="text-white">partage photo en direct</strong> résout ce gâchis.
          </p>
          <p>
            Chaque invité envoie ses clichés depuis son smartphone — sans application — et ils s&apos;affichent <span className="text-[#c9a227]">instantanément
            sur l&apos;écran géant</span>, dans un diaporama vivant qui tourne toute la soirée. Voir sa photo projetée crée une vraie émulation : les invités
            cherchent à capturer les meilleurs moments, les angles inattendus, les coulisses que ni vous ni le photographe ne pouvez voir.
          </p>
          <p>
            Résultat : vous <strong className="text-white">récupérez des centaines de photos</strong> après le mariage, prises de tous les points de vue,
            qui racontent votre journée de l&apos;intérieur. C&apos;est le complément parfait du travail de votre photographe professionnel — la spontanéité en plus.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Le partage photo en <span className="text-[#c9a227]">pratique</span></SectionTitle>
        <Steps
          steps={[
            { title: 'On scanne et on prend une photo', text: 'L\'invité scanne le QR Code, prend une photo ou en choisit une dans sa galerie, et l\'envoie en un geste.' },
            { title: 'Elle s\'affiche en direct', text: "En quelques secondes, la photo rejoint le diaporama sur l'écran géant. Modération possible pour ne diffuser que de jolis moments." },
            { title: 'On récupère tout après', text: "Après la soirée, l'ensemble des photos partagées vous est remis : des centaines de souvenirs spontanés à conserver." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Pourquoi adopter le partage photo en direct</h3>
          <CheckList
            items={[
              'Des centaines de photos récupérées après le mariage',
              'Des angles et moments que le photographe ne peut pas capter',
              'Un diaporama vivant qui anime la salle toute la soirée',
              'Modération possible avant affichage à l\'écran',
              'Aucune application : on partage depuis son navigateur',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
