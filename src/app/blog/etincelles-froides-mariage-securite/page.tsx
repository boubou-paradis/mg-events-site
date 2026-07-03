import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Clock, Check, ShieldCheck, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Étincelles froides mariage : effet spectaculaire en toute sécurité',
  description: 'Les étincelles froides font rêver mais soulèvent des questions de sécurité. Tout ce que vous devez savoir sur cet effet tendance pour votre mariage.',
  alternates: {
    canonical: 'https://www.mg-events35.com/blog/etincelles-froides-mariage-securite',
  },
};

export default function Article() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="MG Events Animation DJ Mariage Bretagne"
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
            src="/images/hero-bg.jpg"
            alt="Étincelles froides lors d'une ouverture de bal de mariage"
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
                5 janvier 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                6 min de lecture
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
              Étincelles froides : tout savoir sur cet effet <span className="text-[#c9a227]">tendance</span>
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
                Les étincelles froides sont devenues incontournables dans les mariages modernes.
                Cet effet spectaculaire permet de sublimer votre ouverture de bal ou votre entrée
                dans la salle. Mais après certains incidents médiatisés, beaucoup se posent des questions
                sur la sécurité. Faisons le point.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                Qu&apos;est-ce que les étincelles froides ?
              </h2>
              <p>
                Les étincelles froides (ou &quot;cold sparks&quot; en anglais) sont produites par des machines
                spéciales qui projettent des particules de titane chauffées. Contrairement aux feux d&apos;artifice
                traditionnels, ces étincelles sont <strong className="text-white">&quot;froides&quot;</strong> car elles ne dépassent
                pas 60°C et ne présentent pas de risque de brûlure.
              </p>
              <p>
                L&apos;effet visuel est similaire à un feu d&apos;artifice, mais sans les dangers associés :
                pas de flamme, pas de projection de matière incandescente, pas de fumée toxique.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                La différence avec les vrais feux d&apos;artifice
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="card-dark p-4 border-red-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={20} className="text-red-500" />
                    <p className="text-white font-medium">Feux d&apos;artifice traditionnels</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Température : jusqu&apos;à 1500°C</li>
                    <li>• Risque d&apos;incendie élevé</li>
                    <li>• Interdits en intérieur</li>
                    <li>• Fumée et odeur</li>
                    <li>• Nécessite autorisation préfectorale</li>
                  </ul>
                </div>
                <div className="card-dark p-4 border-green-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck size={20} className="text-green-500" />
                    <p className="text-white font-medium">Étincelles froides</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Température : 50-60°C max</li>
                    <li>• Aucun risque d&apos;incendie</li>
                    <li>• Utilisables en intérieur</li>
                    <li>• Sans fumée ni odeur</li>
                    <li>• Pas d&apos;autorisation requise</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                La question de la sécurité
              </h2>
              <p>
                Suite à l&apos;incident tragique de Crans-Montana en Suisse, beaucoup s&apos;interrogent légitimement
                sur la sécurité des effets pyrotechniques lors des événements. Il est important de distinguer
                les différentes situations.
              </p>
              <p>
                L&apos;accident en question impliquait des <strong className="text-white">feux de Bengale</strong> tenus à la main,
                qui sont très différents des machines à étincelles froides professionnelles. Les machines que nous utilisons
                sont spécifiquement conçues pour l&apos;événementiel et respectent des normes de sécurité strictes.
              </p>

              <div className="card-dark p-6 my-8 border-[#c9a227]/30">
                <div className="flex items-start gap-4">
                  <ShieldCheck size={32} className="text-[#c9a227] shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-2">Notre engagement sécurité</p>
                    <p className="text-sm">
                      Chez MG Events, nous utilisons exclusivement des machines <strong>Mac Mah MAC SPARK 300</strong>,
                      certifiées CE et conformes aux normes européennes. Ces machines sont conçues pour une utilisation
                      professionnelle en intérieur et ne présentent aucun risque lorsqu&apos;elles sont manipulées correctement.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                Les précautions que nous prenons
              </h2>
              <ul className="space-y-3">
                {[
                  'Inspection de la salle avant installation',
                  'Distance de sécurité respectée (minimum 2 mètres)',
                  'Détecteurs de fumée signalés au responsable de salle',
                  'Matériel vérifié et entretenu régulièrement',
                  'Formation du personnel à l\'utilisation',
                  'Assurance responsabilité civile professionnelle',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check size={18} className="text-[#c9a227] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mt-12 mb-6">
                Faut-il avoir peur ?
              </h2>
              <p>
                Non, à condition de faire appel à des <strong className="text-white">professionnels équipés</strong>.
                Les étincelles froides sont utilisées quotidiennement dans des milliers d&apos;événements à travers le monde,
                dans des concerts, émissions TV, et bien sûr des mariages.
              </p>
              <p>
                Ce qui fait la différence, c&apos;est la qualité du matériel et le professionnalisme de l&apos;opérateur.
                Méfiez-vous des offres low-cost ou du matériel acheté sur internet : privilégiez toujours des
                prestataires expérimentés avec du matériel <span className="text-[#c9a227]">certifié CE</span>.
              </p>

              <div className="card-dark p-8 my-12 border-[#c9a227]/30 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
                  Des étincelles froides <span className="text-[#c9a227]">en toute sérénité</span>
                </h3>
                <p className="text-[#888] mb-6">
                  Nos lanceurs d&apos;étincelles froides sont inclus dans notre formule &quot;Rêve en Blanc&quot;.
                  Un effet spectaculaire pour votre ouverture de bal, en toute sécurité.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/#formules" className="btn-outline">
                    Voir nos formules
                  </Link>
                  <Link href="/#contact" className="btn-gold">
                    Demander un devis
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
              ← MG Events - DJ Mariage Bretagne
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
