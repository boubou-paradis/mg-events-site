import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#c9a227]/10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#e0b82d] transition-colors">
            <ArrowLeft size={20} />
            Retour au site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-white mb-2">
          Politique de <span className="text-[#c9a227]">Confidentialité</span>
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a227] mb-4" />
        <p className="text-[#888] mb-8">Protection des données personnelles - RGPD</p>

        <div className="space-y-8 text-[#aaa]">
          {/* Introduction */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Introduction
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                MG Events Animation s&apos;engage à protéger la vie privée des utilisateurs de son site internet
                et à respecter le Règlement Général sur la Protection des Données (RGPD) entré en vigueur
                le 25 mai 2018.
              </p>
            </div>
          </section>

          {/* Responsable */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Responsable du traitement
            </h2>
            <div className="card-dark p-6 space-y-2">
              <p className="text-white font-medium">MG Events Animation</p>
              <p>Guillaume Morel</p>
              <p>10 Lan Lande des Couëdies, 35600 Bains-sur-Oust</p>
              <p>Email : <a href="mailto:mg.events35@gmail.com" className="text-[#c9a227] hover:underline">mg.events35@gmail.com</a></p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Données collectées
            </h2>
            <div className="card-dark p-6">
              <p className="mb-4">Nous collectons les données suivantes via notre formulaire de contact :</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span><span className="text-white">Nom et prénom</span> - pour vous identifier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span><span className="text-white">Adresse email</span> - pour vous répondre</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span><span className="text-white">Numéro de téléphone</span> - pour vous contacter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span><span className="text-white">Date et lieu de l&apos;événement</span> - pour établir votre devis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span><span className="text-white">Message</span> - pour comprendre votre projet</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Finalité */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Finalité du traitement
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed mb-4">Vos données personnelles sont utilisées pour :</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Répondre à vos demandes de devis et d&apos;information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Établir et suivre les contrats de prestation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Vous recontacter dans le cadre de votre projet événementiel</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Conservation */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Durée de conservation
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                Vos données sont conservées pendant une durée de <span className="text-[#c9a227] font-medium">3 ans</span> à
                compter de votre dernière interaction avec MG Events Animation. Au-delà, elles sont
                supprimées ou anonymisées.
              </p>
            </div>
          </section>

          {/* Partage */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Partage des données
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                <span className="text-white font-medium">Vos données ne sont jamais vendues ni transmises à des tiers</span> à
                des fins commerciales. Elles peuvent être partagées uniquement avec nos sous-traitants
                techniques (hébergeur, service email) dans le strict respect du RGPD.
              </p>
            </div>
          </section>

          {/* Droits */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Vos droits
            </h2>
            <div className="card-dark p-6">
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#c9a227]/5 border border-[#c9a227]/10 rounded-lg">
                  <p className="text-white font-medium mb-1">Droit d&apos;accès</p>
                  <p className="text-sm">Obtenir une copie de vos données</p>
                </div>
                <div className="p-4 bg-[#c9a227]/5 border border-[#c9a227]/10 rounded-lg">
                  <p className="text-white font-medium mb-1">Droit de rectification</p>
                  <p className="text-sm">Corriger vos données inexactes</p>
                </div>
                <div className="p-4 bg-[#c9a227]/5 border border-[#c9a227]/10 rounded-lg">
                  <p className="text-white font-medium mb-1">Droit à l&apos;effacement</p>
                  <p className="text-sm">Demander la suppression de vos données</p>
                </div>
                <div className="p-4 bg-[#c9a227]/5 border border-[#c9a227]/10 rounded-lg">
                  <p className="text-white font-medium mb-1">Droit à la portabilité</p>
                  <p className="text-sm">Recevoir vos données dans un format lisible</p>
                </div>
              </div>
              <p className="mt-6 text-sm">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:mg.events35@gmail.com" className="text-[#c9a227] hover:underline">mg.events35@gmail.com</a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Cookies
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement.
                Aucun cookie publicitaire ou de tracking n&apos;est utilisé.
              </p>
            </div>
          </section>

          {/* CNIL */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4">
              Réclamation
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                Si vous estimez que le traitement de vos données personnelles constitue une violation
                du RGPD, vous pouvez introduire une réclamation auprès de la CNIL :
              </p>
              <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg">
                <p className="text-white font-medium">Commission Nationale de l&apos;Informatique et des Libertés</p>
                <p className="text-sm mt-2">3 Place de Fontenoy, TSA 80715</p>
                <p className="text-sm">75334 Paris Cedex 07</p>
                <p className="text-sm mt-2">
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#c9a227] hover:underline">
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Date de mise à jour */}
        <p className="mt-8 text-sm text-[#666]">
          Dernière mise à jour : Janvier 2025
        </p>

        {/* Links */}
        <div className="mt-8 pt-8 border-t border-[#c9a227]/10 flex flex-wrap gap-6 text-sm">
          <Link href="/mentions-legales" className="text-[#888] hover:text-[#c9a227] transition-colors">
            Mentions Légales
          </Link>
          <Link href="/cgv" className="text-[#888] hover:text-[#c9a227] transition-colors">
            Conditions Générales de Vente
          </Link>
          <a href="https://www.facebook.com/MGevents35" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#c9a227] transition-colors">
            Facebook
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#c9a227]/10 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-[#666]">
          © {new Date().getFullYear()} MG Events Animation - Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
