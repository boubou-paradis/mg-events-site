import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'mur-photo-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Mur photo mariage | Mosaïque de photos sur écran géant — AnimaJet',
  description:
    "Le mur photo de mariage AnimaJet : toutes les photos partagées par vos invités composent une mosaïque vivante sur écran géant, en temps réel. Sans application. MG Events Bretagne.",
  keywords:
    'mur photo mariage, mur photo événementiel, mosaïque photo mariage, mur photo numérique mariage, mur photo écran géant, mur d\'images mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Mur photo de mariage — AnimaJet par MG Events',
    description:
      "Une mosaïque vivante composée en temps réel par les photos de vos invités, sur écran géant.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: "Qu'est-ce qu'un mur photo de mariage ?",
    answer:
      "C'est un affichage sur écran géant où toutes les photos partagées par vos invités s'assemblent en une mosaïque qui se remplit en temps réel. Au fil de la soirée, le mur photo se compose sous les yeux de tous, devenant une véritable œuvre collective et l'un des temps forts visuels de la réception.",
  },
  {
    question: 'Quelle différence avec le partage photo en direct ?',
    answer:
      "Les deux utilisent les photos des invités, mais l'affichage diffère. Le partage photo en direct fait défiler les clichés un à un, en diaporama. Le mur photo les assemble en mosaïque qui se densifie progressivement. On peut combiner les deux modes au cours de la soirée pour varier l'effet visuel.",
  },
  {
    question: 'Faut-il un mur ou un support physique ?',
    answer:
      "Non, le mur photo AnimaJet est numérique : il s'affiche sur l'écran géant via vidéoprojection professionnelle. Pas de structure à monter ni d'impression. L'effet « mur » vient de la mosaïque d'images qui se compose à l'écran.",
  },
  {
    question: 'Les invités doivent-ils installer une application ?',
    answer:
      "Non. Ils scannent un QR Code et envoient leurs photos depuis le navigateur de leur smartphone. Aucune application, aucun compte à créer.",
  },
  {
    question: 'Récupère-t-on les photos du mur après le mariage ?',
    answer:
      "Oui, toutes les photos qui composent le mur vous sont remises après l'événement. Vous gardez ainsi la mosaïque complète des souvenirs partagés par vos invités.",
  },
  {
    question: 'Le mur photo est-il inclus dans vos formules ?',
    answer:
      "Oui, le mur photo événementiel fait partie d'AnimaJet, inclus dès la formule Éclat d'Amour (1200€ TTC), avec l'ensemble des autres animations interactives.",
  },
];

export default function MurPhotoMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Mur photo mariage"
      h1={<>Mur photo de <span className="text-[#c9a227]">mariage</span></>}
      subtitle="Une mosaïque vivante composée en direct par les photos de vos invités"
      heroImage="/images/gallery-5.jpg"
      heroAlt="Mur photo événementiel de mariage composé des clichés des invités sur écran géant"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Mur photo événementiel de mariage AnimaJet',
          description:
            "Mur photo numérique de mariage : les clichés partagés par les invités composent en temps réel une mosaïque affichée sur écran géant, récupérable après l'événement.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le <span className="text-[#c9a227]">mur photo</span> : votre soirée qui se dessine en direct
        </SectionTitle>
        <Prose>
          <p>
            Imaginez un grand écran au centre de votre salle de réception. Au début de la soirée, il est presque vide. Puis, photo après photo, il
            <strong className="text-white"> se remplit</strong> : un sourire de la mariée, un toast des témoins, une tablée hilare, les enfants sur la piste.
            Une mosaïque qui grandit sous les yeux de tous. C&apos;est ça, le <strong className="text-white">mur photo de mariage</strong>.
          </p>
          <p>
            Chaque cliché partagé par un invité — toujours via un simple <span className="text-[#c9a227]">QR Code, sans application</span> — vient s&apos;ajouter
            au mur en temps réel. Plus la soirée avance, plus la mosaïque se densifie, jusqu&apos;à former un tableau collectif unique, impossible à reproduire :
            c&apos;est <em>votre</em> mariage, vu par tous ceux qui l&apos;ont vécu.
          </p>
          <p>
            Le mur photo a un double pouvoir : il <strong className="text-white">anime visuellement</strong> la salle et il <strong className="text-white">incite au partage</strong>.
            En voyant leurs photos s&apos;afficher, les invités jouent le jeu et contribuent encore davantage. Et à la fin, toute cette mosaïque de souvenirs vous revient.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Le mur photo, <span className="text-[#c9a227]">étape par étape</span></SectionTitle>
        <Steps
          steps={[
            { title: 'Les invités envoient leurs photos', text: 'Via le QR Code, chacun partage ses clichés tout au long de la soirée, depuis son smartphone.' },
            { title: 'La mosaïque se compose', text: "Chaque photo rejoint le mur sur l'écran géant. La mosaïque se densifie heure après heure, sous les yeux de tous." },
            { title: 'Vous gardez l\'œuvre collective', text: "Après le mariage, l'ensemble des photos du mur vous est remis : un souvenir collectif unique de votre journée." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Pourquoi le mur photo marque les esprits</h3>
          <CheckList
            items={[
              'Un temps fort visuel au centre de la réception',
              'Une mosaïque unique, composée par vos invités',
              'Un effet qui incite chacun à partager davantage',
              'Aucune structure physique : tout est numérique',
              'Toutes les photos récupérées après la soirée',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
