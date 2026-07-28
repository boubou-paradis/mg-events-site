import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowLeft, Phone, Mail, Building2, Cake } from 'lucide-react';
import {
  getCitiesForEnterprise,
  getCitiesForBirthday,
  getPriorityCities,
  getExtendedCities,
} from '@/data/cities';

export const metadata: Metadata = {
  // Intention "zone d'intervention / déplacement" — volontairement PAS "DJ mariage Bretagne",
  // qui reste réservé à /dj-mariage-bretagne.
  title: 'Zones d\'intervention : où nous nous déplaçons',
  description: 'Basés à Redon (35) : secteurs de l\'Ille-et-Vilaine, de la Loire-Atlantique et du Morbihan dans un rayon approximatif de 100 km. Forfaits incluant 100 km aller-retour, puis 0,66 €/km.',
  alternates: {
    canonical: 'https://www.mg-events35.com/zones-intervention',
  },
  openGraph: {
    title: 'Nos zones d\'intervention et nos frais de déplacement',
    description: 'Basés à Redon (35) : secteurs de l\'Ille-et-Vilaine, de la Loire-Atlantique et du Morbihan dans un rayon approximatif de 100 km. Au-delà : sur étude et sur devis.',
    url: 'https://www.mg-events35.com/zones-intervention',
  },
};

// Départements ordonnés par proximité réelle avec Redon (35).
// `priority` = le département compte des SECTEURS dans le rayon approximatif de
// 100 km autour de Redon. Jamais le département entier.
const departments = [
  { name: 'Morbihan', code: '56', slug: 'morbihan', priority: true },
  { name: 'Loire-Atlantique', code: '44', slug: 'loire-atlantique', priority: true },
  { name: 'Ille-et-Vilaine', code: '35', slug: 'ille-et-vilaine', priority: true },
  { name: 'Mayenne', code: '53', slug: 'mayenne', priority: false },
  { name: 'Finistère', code: '29', slug: 'finistere', priority: false },
];

export default function ZonesIntervention() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
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
              <Link href="/blog" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Blog</Link>
              <Link href="/#contact" className="btn-gold">Devis gratuit</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link href="/" className="inline-flex items-center gap-2 text-[#888] hover:text-[#c9a227] transition-colors mb-8">
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-6">
            Nos zones <span className="text-[#c9a227]">d&apos;intervention</span>
          </h1>
          <p className="text-xl text-[#aaa] max-w-3xl mb-4">
            MG Events Animation est basé à <strong className="text-white">Redon (35)</strong> et intervient
            prioritairement dans les <strong className="text-white">secteurs de l&apos;Ille-et-Vilaine, de la
            Loire-Atlantique et du Morbihan situés dans un rayon approximatif de 100 km autour de Redon</strong>.
            Aucun de ces départements n&apos;est couvert dans sa totalité.
          </p>
          <p className="text-[#888] max-w-3xl mb-6">
            <strong className="text-white">Le déplacement est inclus dans nos formules jusqu&apos;à 100 km
            aller-retour</strong>, au départ de Redon (35). Au-delà, les kilomètres supplémentaires sont facturés
            <strong className="text-white"> 0,66 € du kilomètre</strong> — le montant exact figure toujours sur
            votre devis, sans surprise le jour J.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dj-mariage-bretagne" className="btn-gold text-sm">
              Notre prestation DJ pour votre mariage
            </Link>
            <Link href="/tarifs-dj-mariage" className="btn-outline text-sm">
              Consulter les prestations et tarifs
            </Link>
            <Link href="/#contact" className="btn-outline text-sm">
              Vérifier votre date
            </Link>
          </div>
        </div>
      </section>

      {/* 1 — Zone d'intervention prioritaire */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-dark p-8 border-[#c9a227]/30">
            <span className="inline-block px-3 py-1 bg-[#c9a227] text-[#0a0a0a] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              1 — Zone prioritaire
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-4">
              Notre secteur d&apos;intervention <span className="text-[#c9a227]">habituel</span>
            </h2>
            <p className="text-[#aaa] max-w-3xl mb-8">
              MG Events intervient principalement dans les <strong className="text-white">secteurs de
              l&apos;Ille-et-Vilaine, de la Loire-Atlantique et du Morbihan situés dans un rayon approximatif de 100 km
              autour de Redon (35)</strong> — et non dans ces départements en totalité. C&apos;est là que nous animons
              le plus grand nombre de mariages, que nous connaissons le mieux les salles et les prestataires, et que
              nous sommes le plus réactifs. Les distances ci-dessous sont des distances routières approximatives
              depuis Redon, données à titre indicatif : la distance retenue au devis est toujours celle de
              l&apos;adresse exacte du lieu de réception.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getPriorityCities().map((city) => (
                <Link
                  key={city.slug}
                  href={`/dj-mariage/${city.slug}`}
                  className="flex items-center justify-between gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-colors group"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin size={16} className="text-[#c9a227] shrink-0" />
                    <span className="text-[#aaa] group-hover:text-[#c9a227] transition-colors text-sm font-medium truncate">
                      {city.name}
                    </span>
                  </span>
                  <span className="text-[#666] text-xs shrink-0">
                    {city.distanceFromRedonKm === 0 ? 'notre base' : `~${city.distanceFromRedonKm} km`}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#c9a227]/10">
              <p className="text-[#666] text-sm">
                <span className="text-[#888]">Communes également desservies dans ce secteur :</span>{' '}
                {getPriorityCities()
                  .flatMap((c) => c.nearbyCommunes)
                  .filter((v, i, a) => a.indexOf(v) === i)
                  .slice(0, 20)
                  .join(', ')}
                ...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Déplacements inclus dans les forfaits */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-dark p-8 border-[#c9a227]/40 bg-[#1a1a2e]">
            <span className="inline-block px-3 py-1 bg-[#c9a227] text-[#0a0a0a] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              2 — Déplacements inclus
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-4">
              Ce que les forfaits <span className="text-[#c9a227]">incluent exactement</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-lg bg-[#0a0a0a]/50 border border-[#c9a227]/20 p-5">
                <p className="text-[#c9a227] text-sm uppercase tracking-wider mb-2">Inclus dans le prix</p>
                <p className="text-white text-2xl font-[family-name:var(--font-display)] mb-2">
                  100 km aller-retour
                </p>
                <p className="text-[#aaa] text-sm leading-relaxed">
                  Au départ de Redon (35), soit environ 50 km à l&apos;aller et 50 km au retour. Ce n&apos;est pas un
                  rayon de 100 km : c&apos;est bien le trajet total aller-retour. La distance exacte est calculée
                  selon l&apos;adresse du lieu de réception — aucune ville n&apos;est comprise d&apos;office.
                </p>
              </div>
              <div className="rounded-lg bg-[#0a0a0a]/50 border border-[#c9a227]/20 p-5">
                <p className="text-[#c9a227] text-sm uppercase tracking-wider mb-2">Au-delà</p>
                <p className="text-white text-2xl font-[family-name:var(--font-display)] mb-2">0,66 €/km</p>
                <p className="text-[#aaa] text-sm leading-relaxed">
                  Chaque kilomètre supplémentaire est facturé 0,66 € et le montant total figure clairement sur votre
                  devis, avant toute réservation. Aucune surprise le jour J.
                </p>
              </div>
            </div>
            <p className="text-[#888] text-sm mt-6">
              Aucun département n&apos;est couvert en totalité, ni comme zone habituelle, ni au forfait de base : le
              calcul se fait toujours sur la distance réelle entre Redon et l&apos;adresse de votre lieu de réception.
            </p>
          </div>
        </div>
      </section>

      {/* 3 — Prestations plus éloignées */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-dark p-8">
            <span className="inline-block px-3 py-1 bg-[#1a1a1a] border border-[#c9a227]/40 text-[#c9a227] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              3 — Prestations plus éloignées
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-4">
              En dehors de notre <span className="text-[#c9a227]">zone habituelle</span>
            </h2>
            <p className="text-[#aaa] max-w-3xl mb-6">
              Pour les lieux situés en dehors de notre zone habituelle, les prestations sont étudiées au cas par cas
              selon la date, la formule choisie et les contraintes logistiques. Des frais de déplacement et, si
              nécessaire, d&apos;hébergement sont précisés sur le devis. Nous ne sommes pas un prestataire local de ces
              secteurs, mais un déplacement reste possible quand le projet s&apos;y prête.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[#888] text-sm mb-8 max-w-3xl">
              {['la date et la disponibilité', 'la formule retenue', 'la distance réelle depuis Redon', 'les horaires de début et de fin', 'les contraintes logistiques et l\'accès à la salle', 'l\'éventuel besoin d\'hébergement de l\'équipe'].map((critere) => (
                <li key={critere} className="flex items-start gap-2">
                  <span className="text-[#c9a227] mt-0.5">•</span>
                  {critere}
                </li>
              ))}
            </ul>

            <p className="text-[#888] text-sm mb-4">Secteurs concernés (distance routière approximative depuis Redon) :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getExtendedCities().map((city) => (
                <Link
                  key={city.slug}
                  href={`/dj-mariage/${city.slug}`}
                  className="flex items-center justify-between gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-colors group"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin size={16} className="text-[#666] shrink-0" />
                    <span className="text-[#888] group-hover:text-[#c9a227] transition-colors text-sm font-medium truncate">
                      {city.name}
                    </span>
                  </span>
                  <span className="text-[#666] text-xs shrink-0">~{city.distanceFromRedonKm} km</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pages départementales */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-4">
            Nos pages <span className="text-[#c9a227]">par département</span>
          </h2>
          <p className="text-[#888] text-center mb-10 max-w-2xl mx-auto text-sm">
            Les départements sont classés par proximité réelle avec Redon. « Secteurs proches » signifie qu&apos;une
            partie seulement du département se situe dans le rayon approximatif de 100 km — jamais le département
            entier. Ceux marqués « sur étude » sont intégralement en dehors du secteur habituel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {departments.map((dept) => (
              <Link
                key={dept.code}
                href={`/dj-mariage-${dept.slug}`}
                className="card-dark p-5 text-center hover:border-[#c9a227]/40 transition-colors"
              >
                <p className="text-white font-medium">{dept.name}</p>
                <p className="text-[#888] text-sm mb-2">({dept.code})</p>
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider ${
                    dept.priority
                      ? 'bg-[#c9a227]/15 text-[#c9a227]'
                      : 'bg-[#1a1a1a] border border-[#666]/40 text-[#888]'
                  }`}
                >
                  {dept.priority ? 'Secteurs proches' : 'Sur étude'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Soirées entreprise */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-dark p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 size={28} className="text-[#c9a227]" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
                DJ <span className="text-[#c9a227]">soirée entreprise</span>
              </h2>
            </div>
            <p className="text-[#aaa] mb-8">
              Animation de soirées d&apos;entreprise, séminaires, team building, galas et événements professionnels dans les principales villes de Bretagne.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {getCitiesForEnterprise()
                .slice()
                .sort((a, b) => a.distanceFromRedonKm - b.distanceFromRedonKm)
                .map((city) => (
                <Link
                  key={city.slug}
                  href={`/dj-soiree-entreprise/${city.slug}`}
                  className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-colors group"
                >
                  <Building2 size={16} className="text-[#c9a227] shrink-0" />
                  <span className="text-[#aaa] group-hover:text-[#c9a227] transition-colors text-sm font-medium truncate">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animation anniversaire */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-dark p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cake size={28} className="text-[#c9a227]" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
                Animation <span className="text-[#c9a227]">anniversaire</span>
              </h2>
            </div>
            <p className="text-[#aaa] mb-8">
              DJ et animation pour vos anniversaires marquants : 18 ans, 30 ans, 40 ans, 50 ans... Une fête mémorable dans les grandes villes bretonnes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {getCitiesForBirthday()
                .slice()
                .sort((a, b) => a.distanceFromRedonKm - b.distanceFromRedonKm)
                .map((city) => (
                <Link
                  key={city.slug}
                  href={`/animation-anniversaire/${city.slug}`}
                  className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-colors group"
                >
                  <Cake size={16} className="text-[#c9a227] shrink-0" />
                  <span className="text-[#aaa] group-hover:text-[#c9a227] transition-colors text-sm font-medium truncate">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pages locales dédiées */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-4">
            Nos <span className="text-[#c9a227]">pages locales dédiées</span>
          </h2>
          <p className="text-[#888] text-center mb-8 max-w-2xl mx-auto">
            Des pages approfondies avec contenu local, salles et FAQ spécifiques — en priorité les villes de notre
            rayon approximatif de 100 km autour de Redon.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {getPriorityCities()
              .slice(0, 6)
              .map((city) => (
                <Link
                  key={city.slug}
                  href={`/dj-mariage/${city.slug}`}
                  className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-lg text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
                >
                  <MapPin size={16} className="text-[#c9a227]" />
                  DJ Mariage {city.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-6">
            Votre ville n&apos;est pas listée ?
          </h2>
          <p className="text-[#888] mb-8">
            Indiquez-nous votre lieu de réception, votre ville et votre code postal : nous vérifions notre
            disponibilité et vous chiffrons précisément les éventuels frais de déplacement sur le devis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-gold inline-flex items-center gap-2">
              <Mail size={18} />
              Demander un devis gratuit
            </Link>
            <a href="tel:+33648106166" className="btn-outline inline-flex items-center gap-2">
              <Phone size={18} />
              06 48 10 61 66
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-[#c9a227] hover:underline">
              ← Retour à l&apos;accueil MG Events - DJ Mariage Bretagne
            </Link>
            <div className="flex items-center gap-4 text-sm text-[#666]">
              <Link href="/mentions-legales" className="hover:text-[#c9a227] transition-colors">Mentions légales</Link>
              <span>|</span>
              <Link href="/cgv" className="hover:text-[#c9a227] transition-colors">CGV</Link>
              <span>|</span>
              <Link href="/confidentialite" className="hover:text-[#c9a227] transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
