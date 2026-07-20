import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Check } from 'lucide-react';

const ARTICLE_URL = 'https://www.mg-events35.com/blog/comment-choisir-dj-mariage-bretagne';

export const metadata: Metadata = {
  // Intention INFORMATIVE assumée : pas de "Bretagne" dans le title ni le H1.
  // La page commerciale /dj-mariage-bretagne reste seule cible sur les requêtes régionales.
  title: 'Comment choisir son DJ de mariage ? 10 critères',
  description:
    'Découvrez les critères essentiels pour choisir un DJ de mariage fiable : expérience, matériel, ambiance, contrat, tarifs, avis et questions à poser.',
  keywords:
    'comment choisir son DJ de mariage, choisir un DJ mariage, critères DJ mariage, questions à poser à un DJ, trouver un bon DJ mariage, contrat DJ mariage, matériel DJ mariage',
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    type: 'article',
    title: 'Comment choisir son DJ de mariage ? Les 10 critères essentiels',
    description:
      "Expérience, matériel de secours, contrat, préparation musicale, avis vérifiables : le guide complet pour choisir un DJ de mariage sans mauvaise surprise.",
    url: ARTICLE_URL,
    images: [{ url: 'https://www.mg-events35.com/images/gallery-1.jpg' }],
    publishedTime: '2026-01-15',
    modifiedTime: '2026-07-20',
    authors: ['Guillaume — MG Events Animation'],
  },
};

// Ordre identique à celui des sections de l'article.
const criteres = [
  'Une véritable expérience du mariage, pas seulement de la soirée',
  'Le matériel principal… et surtout le matériel de secours',
  "La qualité de l'échange humain dès le premier contact",
  'Des avis et des références réellement vérifiables',
  'La transparence des prestations et des tarifs',
  'La capacité à animer sans être envahissant',
  'La préparation musicale en amont du jour J',
  'La gestion des demandes des invités pendant la soirée',
  'La coordination avec vos autres prestataires',
  'Un contrat écrit et une assurance responsabilité civile',
];

const faqs = [
  {
    question: 'Quelles questions poser à un DJ de mariage avant de signer ?',
    answer:
      "Demandez combien de mariages il a animés, s'il dispose de matériel de secours, ce que couvre exactement son assurance, comment se déroule la préparation musicale, qui sera physiquement présent le jour J, et ce qui est inclus ou non dans le tarif annoncé. Un professionnel sérieux répond à ces questions sans détour et vous remet un contrat écrit.",
  },
  {
    question: 'Faut-il obligatoirement un contrat avec son DJ de mariage ?',
    answer:
      "Oui. Le contrat protège les deux parties : il fixe la date, les horaires, le montant, les conditions d'annulation et le contenu précis de la prestation. Vérifiez également que le DJ possède une assurance responsabilité civile professionnelle — de nombreux lieux de réception l'exigent avant d'autoriser une installation.",
  },
  {
    question: 'Combien de temps à l’avance réserver son DJ de mariage ?',
    answer:
      "Pour un samedi entre mai et septembre, comptez 12 à 18 mois d'avance : ce sont les dates qui partent le plus vite. En basse saison ou en semaine, 6 mois suffisent généralement. Dès que votre lieu de réception est réservé, contactez les DJ qui vous intéressent pour vérifier leur disponibilité.",
  },
  {
    question: 'Pourquoi le matériel de secours est-il un critère important ?',
    answer:
      "Une table de mixage, un ampli ou un micro peuvent tomber en panne — c'est rare, mais cela arrive. Un DJ professionnel transporte systématiquement un second jeu d'équipement pour pouvoir reprendre en quelques minutes. Sans matériel de secours, une panne signifie la fin de la soirée : posez toujours la question.",
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Comment choisir le bon DJ pour son mariage ?',
  description:
    'Les critères essentiels pour choisir un DJ de mariage fiable : expérience, matériel, ambiance, contrat, tarifs, avis et questions à poser.',
  image: 'https://www.mg-events35.com/images/gallery-1.jpg',
  datePublished: '2026-01-15',
  dateModified: '2026-07-20',
  author: {
    '@type': 'Person',
    name: 'Guillaume',
    worksFor: { '@type': 'Organization', name: 'MG Events Animation' },
  },
  publisher: {
    '@type': 'Organization',
    name: 'MG Events Animation',
    logo: { '@type': 'ImageObject', url: 'https://www.mg-events35.com/images/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': ARTICLE_URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.mg-events35.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mg-events35.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Comment choisir son DJ de mariage', item: ARTICLE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="MG Events Animation"
                width={200}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Accueil</Link>
              <Link href="/#formules" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Nos formules</Link>
              <Link href="/blog" className="text-sm text-[#c9a227]">Blog</Link>
              <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24">
        <div className="relative h-[400px]">
          <Image
            src="/images/gallery-1.jpg"
            alt="Ambiance de dancefloor lors d'une soirée de mariage animée par un DJ professionnel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <article className="relative -mt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          {/* Article Header */}
          <div className="card-dark p-8 mb-8">
            <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                15 janvier 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                8 min de lecture
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Comment choisir le <span className="text-[#c9a227]">bon DJ</span> pour son mariage ?
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={20} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume</p>
                <p className="text-[#888] text-sm">MG Events Animation</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-[#aaa] leading-relaxed space-y-6">
              <p className="text-lg">
                Choisir son DJ de mariage, c&apos;est choisir la personne qui tiendra le micro et le tempo pendant
                l&apos;un des jours les plus importants de votre vie. Le bon critère n&apos;est pas le prix, ni la
                taille de la sono : c&apos;est la <strong className="text-white">capacité à lire une salle</strong> et
                à s&apos;adapter en temps réel. Voici les <strong className="text-white">10 critères</strong> qui
                séparent un vrai professionnel d&apos;un prestataire d&apos;occasion — et les questions à poser avant
                de signer quoi que ce soit.
              </p>

              {/* Résumé rapide — répond immédiatement à l'intention informative */}
              <div className="card-dark p-6 my-8">
                <p className="text-white font-medium mb-4">Les 10 critères en un coup d&apos;œil</p>
                <ol className="space-y-2">
                  {criteres.map((c, i) => (
                    <li key={c} className="flex items-start gap-3 text-[#aaa] text-sm">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#c9a227]/15 text-[#c9a227] text-xs font-semibold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {c}
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA commercial — unique usage fort de l'ancre régionale */}
              <div className="card-dark p-6 my-8 border-[#c9a227]/30">
                <h2 className="font-[family-name:var(--font-display)] text-xl text-white mb-2">
                  Vous recherchez directement un DJ pour votre mariage en Bretagne ?
                </h2>
                <p className="text-[#888] text-sm mb-5">
                  Découvrez les formules MG Events Animation, les prestations incluses, les tarifs et vérifiez la
                  disponibilité de votre date.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/dj-mariage-bretagne" className="btn-gold text-sm">
                    Découvrir notre prestation DJ mariage Bretagne
                  </Link>
                  <Link href="/#contact" className="btn-outline text-sm">
                    Vérifier la disponibilité de ma date
                  </Link>
                </div>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                1. L&apos;expérience : le critère numéro un
              </h2>
              <p>
                Un DJ expérimenté saura <strong className="text-white">lire l&apos;ambiance</strong> de votre soirée et s&apos;adapter
                en temps réel. Il connaît les moments clés d&apos;un mariage, sait quand monter en puissance et quand laisser
                respirer la piste de danse.
              </p>
              <p>
                Posez les bonnes questions : combien de mariages a-t-il animés ? Depuis combien d&apos;années exerce-t-il ?
                Un DJ avec <span className="text-[#c9a227]">plus de 100 mariages</span> à son actif aura forcément développé
                un savoir-faire que vous ne retrouverez pas chez un débutant.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                2. Le matériel principal — et surtout le matériel de secours
              </h2>
              <p>
                Un bon DJ investit dans du matériel de qualité. La sonorisation doit être adaptée à la taille de votre salle,
                les lumières doivent créer une vraie ambiance, et tout doit être aux normes de sécurité.
              </p>
              <div className="card-dark p-6 my-6">
                <p className="text-white font-medium mb-3">Checklist matériel à vérifier :</p>
                <ul className="space-y-2">
                  {[
                    'Sonorisation professionnelle adaptée',
                    'Éclairages robotisés et LED',
                    'Micros sans fil de qualité',
                    'Matériel de secours en cas de panne',
                    'Assurance responsabilité civile',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#aaa]">
                      <Check size={16} className="text-[#c9a227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                3. La qualité de l&apos;échange humain
              </h2>
              <p>
                Votre DJ sera présent pendant l&apos;un des plus beaux jours de votre vie. Il est essentiel que le courant passe !
                Lors de votre premier échange, évaluez :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Est-il à l&apos;écoute de vos envies ?</li>
                <li>Pose-t-il des questions sur votre univers musical ?</li>
                <li>Vous sentez-vous en confiance ?</li>
                <li>Est-il réactif dans ses réponses ?</li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                4. Des avis et références réellement vérifiables
              </h2>
              <p>
                Consultez les avis en ligne sur <strong className="text-white">Mariages.net</strong>, Google ou Facebook.
                Demandez des vidéos de prestations précédentes. Un DJ qui n&apos;a rien à cacher sera fier de vous montrer son travail.
              </p>
              <p>
                Attention aux avis trop parfaits ou trop nombreux en peu de temps : privilégiez les témoignages détaillés
                qui parlent de moments précis de la soirée.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                5. La transparence des prestations et des tarifs
              </h2>
              <p>
                Le prix d&apos;un DJ mariage en Bretagne varie généralement entre <span className="text-[#c9a227]">800€ et 2000€</span> selon
                les prestations incluses. Méfiez-vous des tarifs trop bas : ils cachent souvent du matériel bas de gamme
                ou un manque d&apos;expérience.
              </p>
              <p>
                Comparez les devis en détail : qu&apos;est-ce qui est inclus ? Sonorisation cocktail ? Éclairages ? Animations ?
                Un devis transparent est le signe d&apos;un professionnel sérieux. Chez MG Events, nos{' '}
                <Link href="/tarifs-dj-mariage" className="text-[#c9a227] hover:underline">tarifs DJ mariage</Link>{' '}
                sont affichés publiquement : de 1200€ à 1690€ TTC, tout inclus, sans surprise.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                6. La capacité à animer sans être envahissant
              </h2>
              <p>
                C&apos;est le critère le plus difficile à évaluer avant le jour J, et pourtant celui que les mariés
                regrettent le plus souvent. Un DJ trop présent au micro, qui commente chaque moment ou impose ses
                animations, peut dénaturer complètement une réception. À l&apos;inverse, un DJ totalement effacé ne
                lancera jamais une piste hésitante.
              </p>
              <p>
                Demandez-lui <strong className="text-white">comment il conçoit son rôle au micro</strong> et à quelle
                fréquence il intervient. La bonne réponse tient en une phrase : il prend la parole quand c&apos;est
                utile — annonces, transitions, moments forts — et se fait oublier le reste du temps. Méfiez-vous de
                celui qui vend un « show » sans jamais vous demander ce que vous, vous souhaitez.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                7. La préparation musicale en amont
              </h2>
              <p>
                Un mariage réussi se prépare bien avant le jour J. Un professionnel vous propose un
                <strong className="text-white"> rendez-vous de préparation</strong> pour construire ensemble le fil
                musical : entrée des mariés, repas, ouverture de bal, montée en puissance, fin de soirée.
              </p>
              <p>
                Vérifiez qu&apos;il accepte vos <strong className="text-white">titres imposés</strong> comme vos
                <strong className="text-white"> titres interdits</strong> — cette seconde liste est souvent plus
                importante que la première. Un DJ qui refuse toute contrainte musicale, ou qui au contraire se
                contente de jouer votre playlist sans rien apporter, passe à côté de son métier.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                8. La gestion des demandes des invités
              </h2>
              <p>
                Le soir même, vos invités viendront demander des titres. Certains seront de bonnes idées, d&apos;autres
                casseront net la dynamique de la piste. Demandez au DJ comment il gère ces sollicitations : accepte-t-il
                tout ? Filtre-t-il selon l&apos;ambiance du moment ? Vous a-t-il demandé votre position sur le sujet ?
              </p>
              <p>
                La réponse en dit long sur son expérience. Un DJ aguerri sait accueillir une demande avec le sourire,
                la placer au bon moment… ou l&apos;écarter avec tact quand elle viderait le dancefloor.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                9. La coordination avec vos autres prestataires
              </h2>
              <p>
                Le DJ ne travaille jamais seul : il doit se caler avec le traiteur pour le service, le photographe
                pour les moments clés, le lieu de réception pour les contraintes techniques, et le cas échéant avec
                votre wedding planner.
              </p>
              <p>
                Posez la question directement : <em>prend-il contact avec les autres prestataires avant le jour J ?</em>
                Un DJ qui arrive sans avoir échangé avec personne découvrira les contraintes en direct — heure limite
                de sonorisation, puissance électrique disponible, timing du service. C&apos;est exactement ce qui
                produit les fins de soirée écourtées.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                10. Le contrat et l&apos;assurance
              </h2>
              <p>
                Aucune prestation sérieuse ne se conclut sans <strong className="text-white">contrat écrit</strong>.
                Il doit mentionner la date, les horaires précis, le montant et l&apos;échéancier, le détail de ce qui
                est inclus, et les conditions d&apos;annulation des deux côtés.
              </p>
              <p>
                Vérifiez également l&apos;<strong className="text-white">assurance responsabilité civile
                professionnelle</strong> : de nombreux châteaux et domaines l&apos;exigent avant d&apos;autoriser une
                installation. Un prestataire qui ne peut pas produire son attestation vous expose, vous, en cas
                d&apos;incident.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                Les services complémentaires qui font la différence
              </h2>
              <p>
                Certains DJ proposent des services qui font la différence :{' '}
                <Link href="/photobooth-mariage" className="text-[#c9a227] hover:underline">photobooth</Link>,{' '}
                <Link href="/animations-interactives-mariage" className="text-[#c9a227] hover:underline">animations interactives</Link>,
                effets spéciaux (<Link href="/fumee-lourde-mariage" className="text-[#c9a227] hover:underline">fumée lourde</Link>,{' '}
                <Link href="/etincelles-froides-mariage" className="text-[#c9a227] hover:underline">étincelles froides</Link>).
                Ces extras peuvent transformer une bonne soirée
                en un moment <span className="text-[#c9a227]">vraiment inoubliable</span>.
              </p>

              {/* FAQ visible — support du schema FAQPage déclaré en tête de page */}
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                Questions fréquentes sur le choix d&apos;un DJ
              </h2>
              <div className="space-y-4 not-prose">
                {faqs.map((f) => (
                  <div key={f.question} className="card-dark p-6">
                    <h3 className="text-white font-medium mb-3">{f.question}</h3>
                    <p className="text-[#888] text-sm leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Ces critères, nous les cochons tous
                </h3>
                <p className="text-[#888] mb-6">
                  25 ans d&apos;expérience, matériel de secours systématique, rendez-vous de préparation, contrat
                  détaillé et tarifs affichés publiquement.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/dj-mariage-bretagne" className="btn-outline">
                    Voir les formules MG Events
                  </Link>
                  <Link href="/#contact" className="btn-gold">
                    Vérifier votre date
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="card-dark p-6 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c9a227] flex items-center justify-center">
                <User size={32} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white font-medium">Guillaume - MG Events Animation</p>
                <p className="text-[#888] text-sm">
                  DJ animateur depuis 25 ans, passionné par les mariages et les belles fêtes en Bretagne.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-6">
              Articles similaires
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/ouverture-de-bal-conseils" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Ouverture de bal : nos conseils</p>
                <p className="text-[#888] text-sm">Réussir ce moment magique...</p>
              </Link>
              <Link href="/blog/animations-mariage-originales-2026" className="card-dark p-4 hover:border-[#c9a227]/30 transition-colors">
                <p className="text-white font-medium mb-1">Animations mariage 2026</p>
                <p className="text-[#888] text-sm">Les tendances qui font la différence...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-[#c9a227] hover:underline">
              ← Retour à l&apos;accueil MG Events Animation
            </Link>
            <div className="flex items-center gap-4 text-sm text-[#666]">
              <Link href="/mentions-legales" className="hover:text-[#c9a227] transition-colors">Mentions légales</Link>
              <span>|</span>
              <Link href="/cgv" className="hover:text-[#c9a227] transition-colors">CGV</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
