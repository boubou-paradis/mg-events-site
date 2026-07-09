import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowLeft, Phone, Mail, Building2, Cake } from 'lucide-react';
import { cities, getCitiesByDepartment, getCitiesForEnterprise, getCitiesForBirthday } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Zones d\'intervention DJ Mariage Bretagne',
  description: 'DJ mariage en Bretagne : Ille-et-Vilaine, Morbihan, Finistère, Loire-Atlantique, Mayenne. Découvrez toutes nos zones d\'intervention. Devis gratuit ✓',
  alternates: {
    canonical: 'https://www.mg-events35.com/zones-intervention',
  },
  openGraph: {
    title: 'Zones d\'intervention | MG Events - DJ Mariage Bretagne',
    description: 'Toutes nos zones d\'intervention pour votre mariage en Bretagne et départements limitrophes.',
    url: 'https://www.mg-events35.com/zones-intervention',
  },
};

const departments = [
  { name: 'Ille-et-Vilaine', code: '35', slug: 'ille-et-vilaine' },
  { name: 'Morbihan', code: '56', slug: 'morbihan' },
  { name: 'Finistère', code: '29', slug: 'finistere' },
  { name: 'Loire-Atlantique', code: '44', slug: 'loire-atlantique' },
  { name: 'Mayenne', code: '53', slug: 'mayenne' },
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
                alt="MG Events Animation DJ Mariage Bretagne"
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
          <p className="text-xl text-[#aaa] max-w-3xl">
            MG Events Animation se déplace dans toute la Bretagne et les départements limitrophes pour animer votre mariage, anniversaire ou événement d&apos;entreprise.
          </p>
        </div>
      </section>

      {/* Départements et villes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {departments.map((dept) => {
              const deptCities = getCitiesByDepartment(dept.code);
              return (
                <div key={dept.code} className="card-dark p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-2">
                        <span className="text-[#c9a227]">{dept.name}</span> ({dept.code})
                      </h2>
                      <p className="text-[#888]">{deptCities.length} villes couvertes</p>
                    </div>
                    <Link
                      href={`/dj-mariage-${dept.slug}`}
                      className="btn-gold mt-4 md:mt-0 inline-flex items-center gap-2 w-fit"
                    >
                      Voir le département
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {deptCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/dj-mariage/${city.slug}`}
                        className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-colors group"
                      >
                        <MapPin size={16} className="text-[#c9a227] shrink-0" />
                        <span className="text-[#aaa] group-hover:text-[#c9a227] transition-colors text-sm font-medium truncate">
                          {city.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Communes desservies */}
                  <div className="mt-6 pt-6 border-t border-[#c9a227]/10">
                    <p className="text-[#666] text-sm">
                      <span className="text-[#888]">Communes également desservies :</span>{' '}
                      {deptCities.flatMap(c => c.nearbyCommunes).filter((v, i, a) => a.indexOf(v) === i).slice(0, 15).join(', ')}...
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Récapitulatif */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-white text-center mb-12">
            En résumé : <span className="text-[#c9a227]">{cities.length} villes</span> dans 5 départements
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {departments.map((dept) => {
              const count = getCitiesByDepartment(dept.code).length;
              return (
                <div key={dept.code} className="card-dark p-6">
                  <p className="text-3xl font-bold text-[#c9a227] mb-2">{count}</p>
                  <p className="text-white font-medium">{dept.name}</p>
                  <p className="text-[#888] text-sm">({dept.code})</p>
                </div>
              );
            })}
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
              {getCitiesForEnterprise().map((city) => (
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
              {getCitiesForBirthday().map((city) => (
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
            Des pages approfondies pour les villes à fort potentiel, avec contenu local, salles et FAQ spécifiques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dj-mariage/laval"
              className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-lg text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
            >
              <MapPin size={16} className="text-[#c9a227]" />
              DJ Mariage Laval (Mayenne)
            </Link>
            <Link
              href="/dj-morlaix"
              className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-lg text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
            >
              <MapPin size={16} className="text-[#c9a227]" />
              DJ Mariage Morlaix (Finistère)
            </Link>
            <Link
              href="/dj-mariage/rennes"
              className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-lg text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
            >
              <MapPin size={16} className="text-[#c9a227]" />
              DJ Mariage Rennes
            </Link>
            <Link
              href="/dj-mariage-quimper"
              className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-lg text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
            >
              <MapPin size={16} className="text-[#c9a227]" />
              DJ Mariage Quimper (Finistère)
            </Link>
            <Link
              href="/dj-mariage/nantes"
              className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
            >
              <MapPin size={16} className="text-[#c9a227]" />
              DJ Mariage Nantes
            </Link>
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
            Pas de problème ! Nous nous déplaçons dans toute la région. Contactez-nous pour vérifier notre disponibilité.
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
