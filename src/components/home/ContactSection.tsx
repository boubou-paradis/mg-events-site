'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

// Section contact avec formulaire de devis (îlot client)
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    date: '',
    location: '',
    eventType: 'mariage',
    formule: '',
    message: '',
    website: '', // honeypot anti-spam : doit rester vide
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          postalCode: '',
          city: '',
          date: '',
          location: '',
          eventType: 'mariage',
          formule: '',
          message: '',
          website: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div>
            <div className="gold-line mb-6" />
            <h2 className="section-title text-white mb-6">
              Parlons de votre <span className="text-gradient-gold">projet</span>
            </h2>
            <p className="text-[#888] mb-8 leading-relaxed">
              Chaque événement est unique. Contactez-nous pour discuter de vos envies
              et recevoir un devis personnalisé sous 24h.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="tel:+33648106166"
                className="flex items-center gap-4 text-[#aaa] hover:text-[#c9a227] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#c9a227]/20 flex items-center justify-center">
                  <Phone size={20} className="text-[#c9a227]" />
                </div>
                <div>
                  <div className="text-xs text-[#8a8a8a] uppercase tracking-wider">Téléphone</div>
                  <div className="text-white">06 48 10 61 66</div>
                </div>
              </a>

              <a
                href="mailto:mg.events35@gmail.com"
                className="flex items-center gap-4 text-[#aaa] hover:text-[#c9a227] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#c9a227]/20 flex items-center justify-center">
                  <Mail size={20} className="text-[#c9a227]" />
                </div>
                <div>
                  <div className="text-xs text-[#8a8a8a] uppercase tracking-wider">Email</div>
                  <div className="text-white">mg.events35@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#aaa]">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#c9a227]/20 flex items-center justify-center">
                  <MapPin size={20} className="text-[#c9a227]" />
                </div>
                <div>
                  <div className="text-xs text-[#8a8a8a] uppercase tracking-wider">Zone d&apos;intervention</div>
                  <div className="text-white">Bretagne & Grand Ouest</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-dark p-8 hover:border-[#c9a227]/40 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot anti-spam : invisible pour les humains, rempli par les bots */}
              <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                <label>
                  Ne pas remplir ce champ
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </label>
              </div>
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-[#888] mb-2">Nom complet *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-[#888] mb-2">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Phone & Date */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm text-[#888] mb-2">Téléphone *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="contact-date" className="block text-sm text-[#888] mb-2">Date de l&apos;événement</label>
                  <input
                    id="contact-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="contact-location" className="block text-sm text-[#888] mb-2">Lieu de réception</label>
                <input
                    id="contact-location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                  placeholder="Nom de la salle ou adresse"
                />
              </div>

              {/* Adresse postale (pour l'envoi du devis) */}
              <div>
                <label htmlFor="contact-address" className="block text-sm text-[#888] mb-2">Adresse postale (pour l&apos;envoi du devis)</label>
                <input
                    id="contact-address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                  placeholder="Numéro et rue"
                />
              </div>

              {/* Code postal & Ville */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-postal" className="block text-sm text-[#888] mb-2">Code postal *</label>
                  <input
                    id="contact-postal"
                    type="text"
                    inputMode="numeric"
                    required
                    pattern="[0-9]{5}"
                    maxLength={5}
                    title="Le code postal doit contenir 5 chiffres"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value.replace(/\D/g, '').slice(0, 5) })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="35600"
                  />
                </div>
                <div>
                  <label htmlFor="contact-city" className="block text-sm text-[#888] mb-2">Ville *</label>
                  <input
                    id="contact-city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="Bains-sur-Oust"
                  />
                </div>
              </div>

              {/* Event type & Formule */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-event-type" className="block text-sm text-[#888] mb-2">Type d&apos;événement</label>
                  <select
                    id="contact-event-type"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                  >
                    <option value="mariage">Mariage</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="entreprise">Événement d&apos;entreprise</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-formule" className="block text-sm text-[#888] mb-2">Formule souhaitée</label>
                  <select
                    id="contact-formule"
                    value={formData.formule}
                    onChange={(e) => setFormData({ ...formData, formule: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                  >
                    <option value="">Je ne sais pas encore</option>
                    <option value="eclat">Éclat d&apos;Amour (1200€)</option>
                    <option value="reve">Rêve en Blanc (1490€)</option>
                    <option value="conte">Conte de Fées (1690€)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm text-[#888] mb-2">Votre message</label>
                <textarea
                    id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors resize-none"
                  placeholder="Parlez-nous de votre projet, vos envies, vos questions..."
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-500/30 rounded text-green-400 text-sm text-center">
                  Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 24h.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded text-red-400 text-sm text-center">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                </div>
              )}

              <p className="text-xs text-[#8a8a8a] text-center">
                Réponse garantie sous 24h • Devis gratuit et sans engagement
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
