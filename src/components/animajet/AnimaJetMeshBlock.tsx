import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getCityMeshFeatures } from '@/data/animajet';
import AnimaJetIcon from './AnimaJetIcon';

// Bloc de maillage interne "Animations interactives avec AnimaJet"
// à insérer sur les pages villes/départements. Le contenu varie selon le lieu (anti-duplication).
// placeLabel permet de gérer la préposition correcte (ex: "à Rennes", "en Ille-et-Vilaine").
export default function AnimaJetMeshBlock({
  cityName,
  placeLabel,
}: {
  cityName: string;
  placeLabel?: string;
}) {
  const location = placeLabel ?? `à ${cityName}`;
  const features = getCityMeshFeatures(cityName);
  const featured = features[0];
  const others = features.slice(1);

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="card-dark p-8 border-[#c9a227]/30">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={20} className="text-[#c9a227]" />
            <span className="text-[#c9a227] text-sm uppercase tracking-widest">Conçu &amp; développé par MG Events</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-white text-center mb-4">
            Animations interactives avec <span className="text-[#c9a227]">AnimaJet</span>
          </h2>
          <p className="text-[#888] text-center mb-8 max-w-2xl mx-auto">
            Pour votre mariage {location}, AnimaJet transforme vos invités en acteurs de la fête.
            Notre coup de cœur ici : <strong className="text-white">{featured.name}</strong> — {featured.tagline.toLowerCase()}.
            Participation depuis le smartphone, sans application, affichage sur écran géant.
          </p>

          {/* Animation vedette */}
          {featured.clusterSlug ? (
            <Link
              href={`/${featured.clusterSlug}`}
              className="block bg-[#1a1a1a] rounded-lg p-6 mb-4 border border-[#c9a227]/20 hover:border-[#c9a227]/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center shrink-0">
                  <AnimaJetIcon name={featured.icon} size={24} className="text-[#c9a227]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1 group-hover:text-[#c9a227] transition-colors">
                    {featured.name}
                  </h3>
                  <p className="text-[#888] text-sm">{featured.description}</p>
                  <span className="text-[#c9a227] text-sm mt-2 inline-flex items-center gap-1">
                    En savoir plus <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="bg-[#1a1a1a] rounded-lg p-6 mb-4 border border-[#c9a227]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#c9a227]/10 flex items-center justify-center shrink-0">
                  <AnimaJetIcon name={featured.icon} size={24} className="text-[#c9a227]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1">{featured.name}</h3>
                  <p className="text-[#888] text-sm">{featured.description}</p>
                </div>
              </div>
            </div>
          )}

          {/* Autres animations (liens vers les pages dédiées) */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {others.map((feature) =>
              feature.clusterSlug ? (
                <Link
                  key={feature.id}
                  href={`/${feature.clusterSlug}`}
                  className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors text-sm inline-flex items-center gap-2"
                >
                  <AnimaJetIcon name={feature.icon} size={14} className="text-[#c9a227]" />
                  {feature.name}
                </Link>
              ) : null,
            )}
            <Link
              href="/animations-interactives-mariage"
              className="px-4 py-2 bg-[#c9a227]/10 border border-[#c9a227]/40 rounded-full text-[#c9a227] hover:bg-[#c9a227]/20 transition-colors text-sm inline-flex items-center gap-2"
            >
              Toutes nos animations interactives <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
