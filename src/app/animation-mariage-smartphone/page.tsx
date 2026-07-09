import { Metadata } from 'next';
import ClusterPageShell from '@/components/animajet/ClusterPageShell';
import { Section, SectionTitle, Prose, CheckList, Steps } from '@/components/animajet/ClusterSections';
import { buildClusterServiceSchema } from '@/data/animajet';

const SLUG = 'animation-mariage-smartphone';
const BASE = 'https://www.mg-events35.com';

export const metadata: Metadata = {
  title: 'Animation mariage smartphone | Jeu sur téléphone sans appli — AnimaJet',
  description:
    "Animation de mariage sur smartphone : vos invités jouent via un simple QR Code, sans application. Quiz, blind test, partage photo sur écran géant.",
  keywords:
    'animation mariage smartphone, jeu mariage téléphone, animation mariage sans application, jeu mariage smartphone, animation mariage QR code, animation mariage téléphone',
  alternates: { canonical: `${BASE}/${SLUG}` },
  openGraph: {
    title: 'Animation mariage sur smartphone — AnimaJet par MG Events',
    description:
      "Vos invités jouent depuis leur téléphone, sans application, via un QR Code unique. Simple, fluide, fédérateur.",
    url: `${BASE}/${SLUG}`,
  },
};

const faqs = [
  {
    question: 'Faut-il télécharger une application pour les animations sur smartphone ?',
    answer:
      "Non, et c'est tout l'intérêt d'AnimaJet. Tout fonctionne dans le navigateur du téléphone (Safari, Chrome...). Les invités scannent un QR Code et accèdent directement aux animations. Pas d'application, pas de création de compte, pas de mise à jour : zéro friction.",
  },
  {
    question: 'Comment les invités se connectent-ils ?',
    answer:
      "Un QR Code unique à votre événement est affiché sur les tables et l'écran géant. Chaque invité l'ouvre avec l'appareil photo de son téléphone, entre son prénom, et rejoint le jeu. La connexion prend moins de 5 secondes.",
  },
  {
    question: 'Et les invités qui ne sont pas à l\'aise avec la technologie ?',
    answer:
      "C'est justement pour eux qu'AnimaJet a été pensé. Il n'y a rien à installer ni à paramétrer : on scanne, on joue. En pratique, les grands-parents participent aussi facilement que les plus jeunes, souvent avec un coup de main bienveillant de leur voisin de table.",
  },
  {
    question: 'Faut-il une bonne connexion internet dans la salle ?',
    answer:
      "Une connexion mobile classique (4G/5G) suffit dans la grande majorité des salles. Pour les lieux isolés ou les châteaux mal couverts, nous anticipons la question lors de la préparation et prévoyons une solution adaptée.",
  },
  {
    question: 'Que peut-on faire depuis le smartphone ?',
    answer:
      "Tout AnimaJet : répondre au quiz, buzzer au blind test, faire tourner la roue de la destinée, deviner la photo mystère, et surtout envoyer ses photos pour le partage en direct et le mur photo. Le téléphone devient la télécommande de la soirée.",
  },
  {
    question: 'Le jeu sur smartphone consomme-t-il beaucoup de batterie ?',
    answer:
      "Non, l'usage reste léger et ponctuel. Les invités jouent par sessions, pas en continu. Et comme il n'y a pas d'application gourmande en arrière-plan, l'impact sur la batterie est minime.",
  },
];

export default function AnimationMariageSmartphone() {
  return (
    <ClusterPageShell
      slug={SLUG}
      breadcrumbName="Animation mariage smartphone"
      h1={<>Animation mariage sur <span className="text-[#c9a227]">smartphone</span></>}
      subtitle="Vos invités jouent depuis leur téléphone — sans application, via un simple QR Code"
      heroImage="/images/gallery-3.jpg"
      heroAlt="Invités jouant à une animation de mariage depuis leur smartphone via QR Code, sans application"
      faqs={faqs}
      extraSchemas={[
        buildClusterServiceSchema({
          slug: SLUG,
          name: 'Animation mariage sur smartphone AnimaJet',
          description:
            "Animations de mariage jouables depuis le smartphone des invités via QR Code, sans application à télécharger : quiz, blind test, partage photo, mur photo affichés sur écran géant.",
        }),
      ]}
    >
      <Section bg="#0a0a0a" narrow>
        <SectionTitle center={false}>
          Le smartphone, <span className="text-[#c9a227]">allié de la fête</span> plutôt qu&apos;ennemi
        </SectionTitle>
        <Prose>
          <p>
            On a tous vu ça : en pleine soirée, des invités scotchés à leur téléphone, déconnectés de la fête. Plutôt que de lutter contre les smartphones,
            <strong className="text-white"> AnimaJet en fait l&apos;outil central de l&apos;animation</strong>. Le téléphone que chacun a déjà en poche devient
            la manette d&apos;une expérience collective.
          </p>
          <p>
            Le fonctionnement est volontairement minimaliste : un <strong className="text-white">QR Code unique</strong> à votre mariage, affiché sur les tables et l&apos;écran géant.
            On le scanne, on entre son prénom, et on rejoint instantanément les animations. <span className="text-[#c9a227]">Aucune application à télécharger</span>,
            aucun compte à créer. Cette absence totale de friction est ce qui garantit une participation massive — y compris des invités les moins technophiles.
          </p>
          <p>
            Depuis leur écran, vos convives répondent aux quiz, buzzent au blind test, font tourner la roue de la destinée et, surtout, envoient leurs photos
            qui s&apos;affichent en direct sur grand écran. Le smartphone n&apos;isole plus : il <strong className="text-white">relie</strong>.
          </p>
        </Prose>
      </Section>

      <Section bg="#141414">
        <SectionTitle>Se connecter en <span className="text-[#c9a227]">moins de 5 secondes</span></SectionTitle>
        <Steps
          steps={[
            { title: 'On ouvre l\'appareil photo', text: 'Le QR Code est partout : sur les tables, l\'écran géant, parfois le menu. On pointe simplement son téléphone dessus.' },
            { title: 'On entre son prénom', text: "Une page s'ouvre dans le navigateur. On tape son prénom — et c'est tout. Pas de mot de passe, pas d'inscription." },
            { title: 'On joue, tous ensemble', text: "On rejoint instantanément l'animation en cours et on participe en direct, sur le même écran que toute la salle." },
          ]}
        />
      </Section>

      <Section bg="#0a0a0a" narrow>
        <div className="card-dark p-6">
          <h3 className="text-[#c9a227] font-medium mb-4">Les atouts d&apos;une animation 100% smartphone</h3>
          <CheckList
            items={[
              'Aucune application à installer : tout dans le navigateur',
              'Connexion par QR Code en quelques secondes',
              'Accessible même aux invités peu à l\'aise avec la tech',
              'Un seul outil pour toutes les animations AnimaJet',
              'Le téléphone fédère au lieu d\'isoler',
              'Compatible avec tous les smartphones, iPhone comme Android',
            ]}
          />
        </div>
      </Section>
    </ClusterPageShell>
  );
}
