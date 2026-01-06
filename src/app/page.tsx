'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Mic2,
  PartyPopper,
  Camera,
  Lightbulb,
  Monitor,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Check,
  Quote,
} from 'lucide-react';

// ============ HEADER ============
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Formules', href: '#formules' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Photobooth', href: '#photobooth' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="MG Events Animation"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold">
              Devis gratuit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pt-6 pb-4 border-t border-[#c9a227]/10 mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#aaa] hover:text-[#c9a227] transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-gold text-center mt-2">
                Devis gratuit
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-4.jpg"
        alt="Couple dansant"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse" />
          <span className="text-sm text-[#aaa]">Disponible pour la saison 2026-2027</span>
        </div>

        {/* Title */}
        <p className="animate-fade-up delay-100 text-xl sm:text-2xl text-[#c9a227] tracking-[0.3em] uppercase mb-4">
          MG Events Animation
        </p>
        <h1 className="animate-fade-up delay-150 font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-6">
          <span className="text-white">DJ Mariage</span>
          <br />
          <span className="text-gradient-gold">Bretagne</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-200 text-lg sm:text-xl text-[#888] max-w-2xl mx-auto mb-4">
          Plus de 20 ans d&apos;expérience au service de vos plus belles soirées
        </p>
        
        {/* Zone */}
        <p className="animate-fade-up delay-300 text-sm text-[#666] mb-10 tracking-widest uppercase">
          Finistère • Morbihan • Ille-et-Vilaine • Loire-Atlantique • Mayenne
        </p>

        {/* CTA */}
        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-gold inline-flex items-center justify-center gap-2">
            <Mail size={18} />
            Demander un devis
          </a>
          <a href="#formules" className="btn-outline inline-flex items-center justify-center gap-2">
            Découvrir nos formules
            <ChevronDown size={18} />
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up delay-500 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">20+</div>
            <div className="text-xs text-[#666] uppercase tracking-wider mt-1">Années</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">100+</div>
            <div className="text-xs text-[#666] uppercase tracking-wider mt-1">Mariages</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">
              5<Star size={20} fill="#c9a227" />
            </div>
            <div className="text-xs text-[#666] uppercase tracking-wider mt-1">Avis</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#c9a227]/50" size={32} />
      </div>
    </section>
  );
}

// ============ ABOUT ============
function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[#c9a227]/10">
              <Image
                src="/images/gallery-2.jpg"
                alt="Setup DJ MG Events"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a227]/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="gold-line mb-6" />
            <h2 className="section-title text-white mb-6">
              Une passion,<br />
              <span className="text-gradient-gold">votre soirée</span>
            </h2>
            
            <div className="space-y-4 text-[#aaa] leading-relaxed">
              <p>
                <strong className="text-white">Guillaume et Laurence</strong>, un duo passionné et complémentaire, 
                mettent leur expertise au service de vos événements depuis plus de 20 ans.
              </p>
              <p>
                Fort d&apos;une expérience de plus de 20 ans dans le monde de la nuit et de l&apos;animation, 
                Guillaume a su développer un savoir-faire unique pour créer des ambiances mémorables.
              </p>
              <p>
                Notre philosophie ? <span className="text-[#c9a227]">Écouter vos envies</span>, comprendre votre univers, 
                et transformer votre soirée en un moment inoubliable où chaque invité, 
                de 7 à 77 ans, trouvera son bonheur sur la piste de danse.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Mic2, label: 'Animation personnalisée' },
                { icon: Lightbulb, label: 'Mise en lumière' },
                { icon: Monitor, label: 'Vidéoprojection' },
                { icon: PartyPopper, label: 'Jeux interactifs' },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-3 text-sm text-[#888]">
                  <feature.icon size={18} className="text-[#c9a227]" />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FORMULES ============
function Formules() {
  const formules = [
    {
      name: 'Éclat d\'Amour',
      price: '1200',
      description: 'L\'essentiel pour une soirée réussie',
      features: [
        'Sonorisation cocktail (enceinte batterie)',
        'Sonorisation complète repas & dancefloor',
        'Animation interactive (quiz, photo-live)',
        '2 micros sans fil',
        '4 éclairages robotisés',
        '4 totems LED vintage',
        'Vidéoprojecteur + écran',
        'Accompagnement témoins/convives',
        'Groupe WhatsApp dédié',
      ],
      popular: false,
    },
    {
      name: 'Rêve en Blanc',
      price: '1490',
      description: 'Notre formule la plus demandée',
      features: [
        'Tout de la formule Éclat d\'Amour',
        'Ambiance salle RGBW (6 projecteurs)',
        'Boule à facettes 50cm',
        'Machine à fumée lourde',
        '2 lanceurs étincelles froides',
      ],
      popular: true,
    },
    {
      name: 'Conte de Fées',
      price: '1690',
      description: 'L\'expérience complète et magique',
      features: [
        'Tout de la formule Rêve en Blanc',
        'Photo-booth vintage',
        'Appareil reflex + écran tactile 15"',
        '150 impressions incluses',
        'Accessoires et décors',
      ],
      popular: false,
    },
  ];

  return (
    <section id="formules" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title text-white mb-4">
            Nos <span className="text-gradient-gold">Formules</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto">
            Des prestations sur-mesure pour s&apos;adapter à vos envies et votre budget
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {formules.map((formule) => (
            <div
              key={formule.name}
              className={`relative card-dark p-8 ${
                formule.popular ? 'border-[#c9a227]/40 scale-105 md:scale-110' : ''
              }`}
            >
              {formule.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c9a227] text-[#0a0a0a] text-xs font-semibold uppercase tracking-wider rounded-full">
                  Populaire
                </div>
              )}

              <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-2">
                {formule.name}
              </h3>
              <p className="text-sm text-[#888] mb-6">{formule.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">
                  {formule.price}
                </span>
                <span className="text-[#888] ml-2">€ TTC</span>
              </div>

              <ul className="space-y-3 mb-8">
                {formule.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#aaa]">
                    <Check size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={formule.popular ? 'btn-gold w-full text-center block' : 'btn-outline w-full text-center block'}
              >
                Choisir cette formule
              </a>
            </div>
          ))}
        </div>

        {/* Cérémonie Laïque */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-white mb-2">
              Cérémonie de mariage en plein air
            </h3>
            <p className="text-[#888]">Formule cérémonie laïque</p>
          </div>

          <div className="card-dark overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-72 lg:h-auto min-h-[300px]">
                <Image
                  src="/images/ceremonie-laique.jpg"
                  alt="Cérémonie laïque en extérieur"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-[#c9a227] uppercase tracking-wider">Matériel inclus</p>
                  <div className="text-right">
                    <span className="text-3xl font-[family-name:var(--font-display)] text-[#c9a227]">180</span>
                    <span className="text-[#888] ml-2">€ TTC</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {[
                    '1 enceinte JBL EON ONE MK2 sur batterie',
                    '2 micros sans fil et/ou 2 micros cravate',
                    '1 table de mixage avec connexion ordinateur/tablette',
                    '2 techniciens dédiés le temps de la cérémonie',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#aaa]">
                      <Check size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-[#888] leading-relaxed mb-4">
                  Le tout intégralement sur batterie pour vous offrir le cadre de votre choix.
                </p>
                <p className="text-xs text-[#666] italic">
                  La cérémonie doit être sur le même lieu de réception. Officiant non compris.
                </p>
              </div>
            </div>
          </div>

          {/* Description détaillée */}
          <div className="mt-8 card-dark p-8">
            <p className="text-[#aaa] leading-relaxed mb-6">
              Afin de faire de cette cérémonie un moment unique, rempli d&apos;émotion et de douceur,
              une attention particulière a été portée à l&apos;univers musical qui l&apos;accompagne.
              La musique, véritable fil conducteur de cette célébration, a été choisie pour refléter
              l&apos;histoire, les valeurs et l&apos;amour qui unissent aujourd&apos;hui nos marié(e)s.
            </p>

            <p className="text-[#aaa] leading-relaxed mb-6">
              Dès l&apos;arrivée des invités, une ambiance chaleureuse et harmonieuse vous accueillera,
              grâce à une sélection de morceaux doux et instrumentaux, soigneusement diffusés en fond sonore.
              Le système de sonorisation a été installé de manière à garantir une écoute claire et agréable
              pour tous, tout en préservant l&apos;intimité des lieux.
            </p>

            <p className="text-sm text-[#c9a227] uppercase tracking-wider mb-4">
              Chaque moment clé accompagné musicalement
            </p>

            <ul className="space-y-4 mb-6">
              {[
                { moment: 'L\'entrée des marié(e)s', desc: 'portée par une mélodie choisie spécialement pour symboliser leur engagement.' },
                { moment: 'Les lectures et discours', desc: 'soutenus par une ambiance musicale légère, afin de laisser les mots résonner pleinement.' },
                { moment: 'L\'échange des vœux et des alliances', desc: 'moment intime sublimé par une musique douce, comme un murmure au cœur.' },
                { moment: 'La sortie des marié(e)s', desc: 'célébrée par un morceau joyeux et lumineux, pour inviter à la fête.' },
              ].map((item) => (
                <li key={item.moment} className="text-sm text-[#aaa]">
                  <span className="text-white font-medium">{item.moment}</span> — {item.desc}
                </li>
              ))}
            </ul>

            <p className="text-[#888] text-sm italic border-l-2 border-[#c9a227]/30 pl-4">
              Tout au long de la cérémonie, la musique et la sonorisation seront gérées avec discrétion
              et professionnalisme. Notre souhait est que chaque note accompagne votre cœur, sans jamais le précéder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const testimonials = [
    {
      name: 'Morane & Kevin',
      text: 'Merci à Guillaume et Laurence pour leur superbe prestation à notre mariage ! Les invités ont été conquis et ont enflammé le dancefloor, toutes générations confondues, jusqu\'au bout de la nuit !',
    },
    {
      name: 'Pauline & Nicolas',
      text: 'Si vous cherchez un DJ pour n\'importe quelle occasion prenez le les yeux fermés. Nous n\'avons eu que des super retour des invités, tout le monde était ravi.',
    },
    {
      name: 'Océane & Francky',
      text: 'Merci à vous deux pour votre investissement, votre gentillesse et votre professionnalisme. Vous le faites tellement par passion et avec le cœur. Ne changez surtout pas !',
    },
    {
      name: 'Marie & Julien',
      text: 'Un grand merci pour votre professionnalisme, votre écoute, votre dynamisme ! Vous avez su donner à notre mariage l\'ambiance que nous espérions.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title text-white mb-4">
            Ils nous ont fait <span className="text-gradient-gold">confiance</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#888]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#c9a227" className="text-[#c9a227]" />
              ))}
            </div>
            <span>5.0 sur Mariages.net</span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card-dark p-8 relative">
              <Quote size={40} className="absolute top-6 right-6 text-[#c9a227]/10" />
              <p className="text-[#aaa] leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a227] to-[#9a7b1a] flex items-center justify-center">
                  <span className="text-[#0a0a0a] text-sm font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT ============
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    eventType: 'mariage',
    formule: '',
    message: '',
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
          date: '',
          location: '',
          eventType: 'mariage',
          formule: '',
          message: '',
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
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
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
                  <div className="text-xs text-[#666] uppercase tracking-wider">Téléphone</div>
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
                  <div className="text-xs text-[#666] uppercase tracking-wider">Email</div>
                  <div className="text-white">mg.events35@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#aaa]">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#c9a227]/20 flex items-center justify-center">
                  <MapPin size={20} className="text-[#c9a227]" />
                </div>
                <div>
                  <div className="text-xs text-[#666] uppercase tracking-wider">Zone d&apos;intervention</div>
                  <div className="text-white">Bretagne & Grand Ouest</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-dark p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#888] mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#888] mb-2">Email *</label>
                  <input
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
                  <label className="block text-sm text-[#888] mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#888] mb-2">Date de l&apos;événement</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm text-[#888] mb-2">Lieu de réception</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#c9a227]/20 rounded text-white placeholder-[#666] focus:border-[#c9a227] focus:outline-none transition-colors"
                  placeholder="Nom de la salle ou adresse"
                />
              </div>

              {/* Event type & Formule */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#888] mb-2">Type d&apos;événement</label>
                  <select
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
                  <label className="block text-sm text-[#888] mb-2">Formule souhaitée</label>
                  <select
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
                <label className="block text-sm text-[#888] mb-2">Votre message</label>
                <textarea
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

              <p className="text-xs text-[#666] text-center">
                Réponse garantie sous 24h • Devis gratuit et sans engagement
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ GALLERY ============
function Gallery() {
  const images = [
    { src: '/images/hero-1.jpg', alt: 'Table de mixage DJ' },
    { src: '/images/hero-2.jpg', alt: 'Couple de maries dansant' },
    { src: '/images/hero-3.jpg', alt: 'Invites sur le dancefloor' },
    { src: '/images/gallery-1.webp', alt: 'Installation lumiere MG Events' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title text-white mb-4">
            Nos <span className="text-gradient-gold">prestations</span> en images
          </h2>
          <p className="text-[#888] max-w-xl mx-auto">
            Des ambiances uniques pour des moments inoubliables
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg border border-[#c9a227]/10 group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PHOTOBOOTH ============
function Photobooth() {
  const photos = [
    { src: '/images/photobooth-1.jpg', alt: 'Photobooth vue de face avec écran Kodak' },
    { src: '/images/photobooth-3.jpg', alt: 'Photobooth vue de côté avec imprimante' },
    { src: '/images/photobooth-4.jpg', alt: 'Photobooth vue complète avec pied' },
  ];

  return (
    <section id="photobooth" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title text-white mb-4">
            Notre <span className="text-gradient-gold">Photobooth</span> Vintage
          </h2>
          <p className="text-[#c9a227] text-lg mb-4">Capturez l&apos;instant</p>
          <p className="text-[#888] max-w-2xl mx-auto">
            Un incontournable des soirées réussies ! Notre photobooth au look unique et authentique
            a été conçu à partir d&apos;un véritable poste TSF des années 60, pour une touche chic
            et vintage qui fera sensation auprès de vos invités.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {/* Main photo - en action */}
          <div className="lg:col-span-2 lg:row-span-2 relative rounded-lg overflow-hidden border border-[#c9a227]/10 group">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <Image
                src="/images/photobooth-2.jpg"
                alt="Photobooth en action avec des invités"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-medium">Le photobooth en action</p>
                <p className="text-[#888] text-sm">Des souvenirs inoubliables</p>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          {photos.map((photo, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden border border-[#c9a227]/10 group">
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="card-dark p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#aaa] leading-relaxed mb-6">
                Équipé d&apos;un appareil reflex professionnel, d&apos;un écran tactile 15&quot; et d&apos;une
                imprimante instantanée, il permet à vos convives de repartir avec leurs souvenirs
                imprimés sur place.
              </p>
              <ul className="space-y-2">
                {[
                  '150 impressions incluses',
                  'Props et accessoires',
                  'Personnalisation des tirages avec vos prénoms et la date',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#aaa]">
                    <Check size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Camera size={48} className="text-[#c9a227] mx-auto mb-4" />
                <p className="text-white font-[family-name:var(--font-display)] text-xl mb-2">
                  Poste TSF années 60
                </p>
                <p className="text-[#888] text-sm">
                  Un look authentique et unique
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Inclus dans Conte de Fées */}
          <div className="card-dark p-6">
            <p className="text-sm text-[#c9a227] uppercase tracking-wider mb-2">
              Inclus dans la formule
            </p>
            <p className="text-white font-[family-name:var(--font-display)] text-xl mb-4">
              Conte de Fées
            </p>
            <p className="text-[#888] text-sm">
              Le photobooth est inclus dans notre formule premium à 1690€
            </p>
          </div>

          {/* Location seule */}
          <div className="card-dark p-6 border-[#c9a227]/30">
            <p className="text-sm text-[#c9a227] uppercase tracking-wider mb-2">
              Location seule
            </p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-[family-name:var(--font-display)] text-[#c9a227]">240</span>
              <span className="text-[#888]">€ TTC</span>
            </div>
            <p className="text-[#888] text-sm">
              150 tirages inclus • Disponible en complément de toutes nos formules
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-[#c9a227]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="MG Events Animation"
              className="h-12 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#666]">
            <a href="#" className="hover:text-[#c9a227] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#c9a227] transition-colors">CGV</a>
            <a 
              href="https://www.facebook.com/MGevents35/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#c9a227] transition-colors"
            >
              Facebook
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#666]">
            © {new Date().getFullYear()} MG Events Animation
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Formules />
        <Gallery />
        <Photobooth />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
