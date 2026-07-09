import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'photos-invites-mariage';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Photos des invités mariage | Récupérez tous les clichés — AnimaJet',
  description:
    "Centralisez les photos de vos invités le jour du mariage via QR Code, sans application. Récupérez des centaines de souvenirs après la soirée.",
  keywords:
    'photos invités mariage, récupérer photos invités mariage, album photo invités mariage, collecte photos mariage, photos mariage QR code, photos partagées mariage',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Photos des invités de mariage — AnimaJet par MG Events',
    description:
      "Centralisez tous les clichés de vos invités et récupérez des centaines de photos après la soirée.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Comment récupérer les photos prises par les invités ?',
    answer:
      "Avec AnimaJet, chaque invité partage ses photos via un QR Code unique pendant la soirée. Toutes les images sont centralisées au même endroit, et l'ensemble vous est remis après le mariage. Fini les photos perdues dans des dizaines de téléphones ou les albums partagés que personne n'alimente.",
  },
  {
    question: 'Combien de photos peut-on espérer récupérer ?',
    answer:
      "Cela dépend du nombre d'invités et de la durée de la soirée, mais il n'est pas rare de récupérer plusieurs centaines de clichés. Comme les invités voient leurs photos s'afficher sur l'écran géant, ils sont motivés à en partager davantage.",
  },
  {
    question: 'Les invités doivent-ils installer une application ?',
    answer:
      "Non. Ils scannent simplement le QR Code et partagent depuis le navigateur de leur smartphone. Aucune application, aucun compte : c'est ce qui garantit que tout le monde participe, même les moins technophiles.",
  },
  {
    question: 'Ces photos remplacent-elles celles du photographe ?',
    answer:
      "Non, elles les complètent. Le photographe professionnel capture les moments clés avec maîtrise ; les photos des invités apportent la spontanéité, les coulisses et les angles que personne d'autre n'a vus. Ensemble, elles forment un souvenir bien plus riche.",
  },
  {
    question: 'Peut-on filtrer les photos avant de les afficher ?',
    answer:
      "Oui, une modération est possible : le DJ peut valider les clichés avant qu'ils n'apparaissent sur l'écran géant. Vous gardez ainsi la maîtrise de ce qui est projeté devant tous vos invités.",
  },
  {
    question: 'Ce service est-il inclus dans la prestation MG Events ?',
    answer:
      "Oui, la collecte et le partage des photos des invités font partie d'AnimaJet, inclus dès la formule Éclat d'Amour (1200€ TTC).",
  },
];

export default function PhotosInvitesMariage() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Photos des invités mariage"
      h1={<>Photos des invités de <span className="text-[#c9a227]">mariage</span></>}
      subtitle="Centralisez tous les clichés de vos invités — et récupérez-les après la soirée"
      heroImage="/images/gallery-6.jpg"
      heroAlt="Photos prises par les invités d'un mariage centralisées et partagées via AnimaJet"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Collecte des photos des invités de mariage AnimaJet',
          description:
            "Centralisation des photos prises par les invités pendant un mariage via QR Code, affichage sur écran géant et remise de l'ensemble des clichés après l'événement.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Ne perdez plus jamais <span className="text-[#c9a227]">les photos de vos invités</span>
        </SectionTitle>
        <Prose>
          <p>
            Combien de fois a-t-on entendu, après un mariage : «&nbsp;On n&apos;a jamais récupéré les photos des copains&nbsp;»&nbsp;? Vos invités immortalisent
            des moments uniques — le fou rire d&apos;une tablée, la mamie qui danse, le clin d&apos;œil des témoins — mais ces images finissent presque toujours
            <strong className="text-white"> oubliées dans leurs téléphones</strong>.
          </p>
          <p>
            AnimaJet règle le problème en centralisant tout. Chaque invité partage ses clichés via le <strong className="text-white">QR Code</strong> de votre mariage,
            sans application. Les photos sont rassemblées au même endroit, affichées en direct sur l&apos;écran géant pour encourager la participation, puis
            <span className="text-[#c9a227]"> l&apos;ensemble vous est remis après la soirée</span>.
          </p>
          <p>
            Vous obtenez ainsi un album collaboratif spontané, des centaines de regards différents sur votre journée. C&apos;est le complément idéal du reportage
            de votre photographe : là où lui capte l&apos;essentiel avec son œil d&apos;expert, vos invités captent l&apos;ambiance de l&apos;intérieur.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Collecter les photos, <span className="text-[#c9a227]">sans effort</span></SectionTitle>
        <Steps
          steps={[
            { title: 'Chaque invité partage', text: 'Un QR Code unique, un geste : l\'invité envoie ses photos depuis son téléphone, tout au long de la soirée.' },
            { title: 'Tout est centralisé', text: "Les clichés se rassemblent automatiquement au même endroit, et s'affichent sur l'écran géant pour donner envie à chacun d'en partager plus." },
            { title: 'Vous recevez l\'album', text: "Après le mariage, l'ensemble des photos vous est remis : des centaines de souvenirs que vous auriez perdus autrement." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Ce que vous y gagnez</h3>
          <CheckList
            items={[
              'Des centaines de photos de vos invités, centralisées',
              'Aucune image perdue dans les téléphones',
              'Un album collaboratif complémentaire du photographe',
              'Modération possible avant affichage',
              'Participation maximale grâce au QR Code sans application',
              'Inclus dans toutes les formules MG Events',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
