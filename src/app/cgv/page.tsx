import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CGV() {
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
          Conditions Générales de <span className="text-[#c9a227]">Vente</span>
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a227] mb-4" />
        <p className="text-[#888] mb-8">Prestations DJ et Animation - MG Events Animation</p>

        <div className="space-y-8 text-[#aaa]">
          {/* Article 1 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 1</span> - Objet
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                Les présentes conditions générales de vente régissent les relations contractuelles entre
                MG Events Animation (ci-après &quot;le Prestataire&quot;) et ses clients (ci-après &quot;le Client&quot;)
                dans le cadre de prestations d&apos;animation DJ pour mariages, anniversaires et événements privés.
              </p>
            </div>
          </section>

          {/* Article 2 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 2</span> - Réservation
            </h2>
            <div className="card-dark p-6 space-y-4">
              <p className="leading-relaxed">
                <span className="text-white font-medium">Devis :</span> Tout devis établi par MG Events Animation
                est gratuit et sans engagement. Il reste valable 30 jours à compter de sa date d&apos;émission.
              </p>
              <p className="leading-relaxed">
                <span className="text-white font-medium">Confirmation :</span> La réservation est définitivement
                confirmée après :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Signature du contrat de prestation par les deux parties</li>
                <li>Versement d&apos;un acompte de <span className="text-[#c9a227] font-medium">30% du montant total</span></li>
              </ul>
              <p className="leading-relaxed">
                <span className="text-white font-medium">Solde :</span> Le solde de la prestation est dû au plus tard
                <span className="text-[#c9a227] font-medium"> 15 jours avant la date de l&apos;événement</span>,
                par virement bancaire ou chèque.
              </p>
            </div>
          </section>

          {/* Article 3 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 3</span> - Tarifs
            </h2>
            <div className="card-dark p-6">
              <p className="mb-4">Les tarifs en vigueur sont les suivants :</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-[#c9a227]/10">
                  <span>Formule Éclat d&apos;Amour</span>
                  <span className="text-[#c9a227] font-medium">1 200 € TTC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c9a227]/10">
                  <span>Formule Rêve en Blanc</span>
                  <span className="text-[#c9a227] font-medium">1 490 € TTC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c9a227]/10">
                  <span>Formule Conte de Fées</span>
                  <span className="text-[#c9a227] font-medium">1 690 € TTC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c9a227]/10">
                  <span>Option Cérémonie Laïque</span>
                  <span className="text-[#c9a227] font-medium">180 € TTC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#c9a227]/10">
                  <span>Location Photobooth</span>
                  <span className="text-[#c9a227] font-medium">240 € TTC</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Forfait Anniversaire (oct-avril)</span>
                  <span className="text-[#c9a227] font-medium">à partir de 600 € TTC</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-[#888] italic">
                TVA non applicable, article 293 B du Code Général des Impôts.
              </p>
            </div>
          </section>

          {/* Article 4 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 4</span> - Annulation
            </h2>
            <div className="card-dark p-6 space-y-4">
              <p className="leading-relaxed">En cas d&apos;annulation par le Client :</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#c9a227] font-medium whitespace-nowrap">+ de 90 jours :</span>
                  <span>Acompte remboursé à 50%</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c9a227] font-medium whitespace-nowrap">90 à 30 jours :</span>
                  <span>Acompte non remboursable</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#c9a227] font-medium whitespace-nowrap">- de 30 jours :</span>
                  <span>Totalité de la prestation due</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[#c9a227]/10 border border-[#c9a227]/20 rounded-lg">
                <p className="text-white font-medium mb-2">Cas de force majeure</p>
                <p className="text-sm">
                  En cas de force majeure dûment justifiée (décès d&apos;un proche, hospitalisation),
                  un remboursement intégral sera effectué sur présentation des justificatifs appropriés.
                </p>
              </div>
            </div>
          </section>

          {/* Article 5 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 5</span> - Report
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                Le report de la prestation est possible <span className="text-white font-medium">sans frais</span> jusqu&apos;à
                <span className="text-[#c9a227] font-medium"> 60 jours avant la date initiale</span>, sous réserve
                de disponibilité du Prestataire à la nouvelle date souhaitée.
              </p>
            </div>
          </section>

          {/* Article 6 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 6</span> - Obligations du prestataire
            </h2>
            <div className="card-dark p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Fournir un matériel professionnel conforme aux normes de sécurité en vigueur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Arriver sur le lieu de réception au minimum 2 heures avant le début de la soirée</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Assurer une prestation conforme au contrat signé</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Disposer d&apos;une assurance responsabilité civile professionnelle</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Article 7 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 7</span> - Obligations du client
            </h2>
            <div className="card-dark p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Garantir l&apos;accès à la salle et une alimentation électrique suffisante (2 prises 16A minimum)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Informer le Prestataire de toute particularité du lieu (accès, escaliers, contraintes techniques)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Respecter les horaires de fin de soirée convenus avec la salle de réception</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a227]">•</span>
                  <span>Prévoir un espace de montage suffisant pour l&apos;installation du matériel</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Article 8 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 8</span> - Droit à l&apos;image
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                Sauf opposition écrite formulée avant l&apos;événement, le Client autorise MG Events Animation à
                utiliser les photographies et vidéos réalisées lors de la prestation à des fins promotionnelles
                (site internet, réseaux sociaux, supports commerciaux).
              </p>
              <p className="mt-4 text-sm text-[#888]">
                Sur simple demande, les visages pourront être floutés. Cette autorisation peut être retirée
                à tout moment par courrier ou email.
              </p>
            </div>
          </section>

          {/* Article 9 */}
          <section>
            <h2 className="text-xl text-white font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
              <span className="text-[#c9a227]">Article 9</span> - Litiges
            </h2>
            <div className="card-dark p-6">
              <p className="leading-relaxed">
                Les présentes conditions générales de vente sont soumises au droit français. En cas de litige,
                les parties s&apos;engagent à rechercher une solution amiable. À défaut d&apos;accord, les tribunaux
                de <span className="text-white font-medium">Rennes</span> seront seuls compétents.
              </p>
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
          <Link href="/confidentialite" className="text-[#888] hover:text-[#c9a227] transition-colors">
            Politique de Confidentialité
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
