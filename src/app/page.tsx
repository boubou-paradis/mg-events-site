import Image from 'next/image';
import Link from 'next/link';
import HomeHeader from '@/components/home/HomeHeader';
import ContactSection from '@/components/home/ContactSection';
import LightboxTrigger from '@/components/home/LightboxTrigger';

import {
  Mic2,
  PartyPopper,
  Lightbulb,
  Monitor,
  Star,
  Mail,
  MapPin,
  ChevronDown,
  Check,
  Quote,
  Cake,
  Music,
  Building2,
  GlassWater,
  Share2,
  HelpCircle,
  Sparkles,
  Zap,
  ShieldCheck,
  Flame,
  Home as HomeIcon,
  Award,
  Headphones,
  Volume2,
  Disc3,
  Printer,
  ListMusic,
  Info,
  Phone,
  Heart,
} from 'lucide-react';

// ============ HERO ============
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Ouverture de bal avec étincelles froides"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-28">
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
        <p className="animate-fade-up delay-300 text-sm text-[#8a8a8a] mb-10 tracking-widest uppercase">
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
        <div className="animate-fade-up delay-500 mt-16 grid grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">20+</div>
            <div className="text-xs text-[#8a8a8a] uppercase tracking-wider mt-1">Années</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">100+</div>
            <div className="text-xs text-[#8a8a8a] uppercase tracking-wider mt-1">Mariages</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">
              45<Star size={18} fill="#c9a227" className="ml-1" />
            </div>
            <div className="text-xs text-[#8a8a8a] uppercase tracking-wider mt-1">Avis 5★</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] text-[#c9a227]">100%</div>
            <div className="text-xs text-[#8a8a8a] uppercase tracking-wider mt-1">Recommandé</div>
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

// ============ QUICK NAV ============
function QuickNav() {
  const links = [
    { href: '#about', label: 'Notre histoire' },
    { href: '#formules', label: 'Formules & Tarifs' },
    { href: '#photobooth', label: 'Photobooth Vintage' },
    { href: '#livre-dor-audio', label: 'Livre d\'Or Audio' },
    { href: '#animajet', label: 'AnimaJet' },
    { href: '#testimonials', label: 'Avis clients' },
    { href: '#contact', label: 'Nous contacter' },
  ];

  return (
    <nav className="py-3 bg-[#141414] border-b border-[#c9a227]/10" aria-label="Navigation rapide">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#888] hover:text-[#c9a227] transition-colors py-1">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ============ ABOUT ============
function About() {
  return (
    <section id="about" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <LightboxTrigger
              src="/images/gallery-2.jpg"
              alt="Setup DJ professionnel sonorisation mariage - MG Events Animation"
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/10 cursor-zoom-in"
            >
              <Image
                src="/images/gallery-2.jpg"
                alt="Setup DJ professionnel sonorisation mariage - MG Events Animation"
                fill
                className="object-cover"
              />
            </LightboxTrigger>
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

            {/* CTA vers philosophie */}
            <div className="mt-8">
              <Link href="/philosophie" className="btn-outline inline-block">
                Découvrir notre approche
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ EXPERIENCE MUSICALE ============
function ExperienceMusicale() {
  const stats = [
    {
      icon: Headphones,
      value: '+25 ans',
      label: "d'expérience DJ",
      description: 'Des discothèques bretonnes aux plus beaux mariages de la région',
    },
    {
      icon: Disc3,
      value: 'Répertoire',
      label: 'musical complet',
      description: "80's, rock, variété française, hits actuels, électro, slow... toutes les générations sur la piste",
    },
    {
      icon: Volume2,
      value: 'Matériel',
      label: 'professionnel',
      description: 'Son et lumière haut de gamme adaptés à chaque salle de réception',
    },
  ];

  const faqs = [
    {
      question: 'Quel style de musique passez-vous en mariage ?',
      answer: "Notre répertoire couvre tous les styles : années 80, rock, new wave, variété française, hits actuels, électro, musiques du monde. Nous adaptons la programmation à vos goûts et à l'ambiance de la soirée, avec une ouverture aux demandes de vos invités.",
    },
    {
      question: 'Peut-on vous transmettre une playlist personnalisée ?',
      answer: "Absolument ! Nous créons ensemble votre playlist idéale en amont, tout en gardant la flexibilité de nous adapter en direct aux réactions de la piste de danse.",
    },
    {
      question: "L'ambiance est-elle adaptée à toutes les générations ?",
      answer: "C'est notre spécialité. Avec 25 ans d'expérience en discothèque, nous savons fédérer grands-parents, parents et jeunes sur la même piste de danse.",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title text-white mb-4">
            DJ Professionnel Depuis 1999 — <span className="text-gradient-gold">Une Expertise Forgée en Discothèque</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 text-[#aaa] leading-relaxed">
            <p className="text-lg">
              Avant de devenir <strong className="text-white">DJ animateur de mariage en Bretagne</strong>, j&apos;ai passé plus de 25 ans à faire vibrer les dancefloors des plus grandes discothèques du <strong className="text-white">Finistère</strong> et du <strong className="text-white">Morbihan</strong> : Le Kalicut, La Guinguette, Le Ten Club, Le 29...
            </p>
            <p>
              Ces milliers de nuits aux platines m&apos;ont transmis un savoir-faire unique : <span className="text-[#c9a227]">lire une piste de danse</span> et adapter la musique en temps réel.
            </p>
            <p>
              Ma philosophie ? Une <strong className="text-white">programmation musicale riche et variée</strong> qui rassemble toutes les générations. Des années 80 au rock, de la new wave aux tubes actuels — toujours en accord avec vos envies et l&apos;énergie de vos invités. Pas de playlist figée. Chaque soirée de mariage est unique.
            </p>
            <p className="text-[#c9a227] font-medium text-lg">
              Notre règle d&apos;or : de tout, pour tout le monde.
            </p>
            <p>
              Côté technique, chaque détail compte. <strong className="text-white">Sonorisation professionnelle</strong> calibrée pour chaque moment : ambiance feutrée pendant le repas, son puissant et maîtrisé pour enflammer le dancefloor. Une animation élégante et moderne, à l&apos;image de votre événement.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <LightboxTrigger
              src="/images/console-dj-pro.jpg"
              alt="Console DJ professionnelle - MG Events Animation"
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#c9a227]/20 cursor-zoom-in"
            >
              <Image
                src="/images/console-dj-pro.jpg"
                alt="Console DJ professionnelle - MG Events Animation"
                fill
                className="object-cover"
              />
            </LightboxTrigger>
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-[#c9a227]/20 rounded-lg -z-10" />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card-dark p-6 text-center hover:border-[#c9a227]/40 transition-all duration-300">
              <stat.icon size={40} className="text-[#c9a227] mx-auto mb-4" />
              <div className="text-2xl font-[family-name:var(--font-display)] text-white mb-1">
                <strong>{stat.value}</strong> {stat.label}
              </div>
              <p className="text-[#888] text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="card-dark p-8 hover:border-[#c9a227]/40 transition-all duration-300">
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-white mb-8 text-center">
            Questions fréquentes sur notre <span className="text-[#c9a227]">animation musicale</span>
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#c9a227]/10 pb-6 last:border-0 last:pb-0">
                <h4 className="text-white font-medium mb-3 flex items-start gap-3">
                  <HelpCircle size={20} className="text-[#c9a227] shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-[#aaa] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
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
        'Livre d\'Or Audio (téléphone rétro à messages)',
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
      ],
      popular: false,
    },
  ];

  return (
    <section id="formules" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="section-title text-white mb-2">
            Nos <span className="text-gradient-gold">Formules</span>
          </h2>
          <p className="text-[#888]">
            Prestations sur-mesure pour s&apos;adapter à vos envies et votre budget
          </p>
        </div>

        {/* Cérémonie Laïque */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="font-[family-name:var(--font-display)] text-3xl text-white mb-2">
              Cérémonie de mariage en plein air
            </h3>
            <p className="text-[#888]">Formule cérémonie laïque</p>
          </div>

          <div className="card-dark overflow-hidden hover:border-[#c9a227]/40 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <LightboxTrigger
                src="/images/ceremonie-laique.jpg"
                alt="Cérémonie laïque en extérieur"
                className="relative h-72 lg:h-auto min-h-[300px] cursor-zoom-in"
              >
                <Image
                  src="/images/ceremonie-laique.jpg"
                  alt="Cérémonie laïque en extérieur"
                  fill
                  className="object-cover"
                />
              </LightboxTrigger>
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
                <p className="text-sm text-[#c9a227] font-medium">
                  La cérémonie doit être sur le même lieu de réception. Officiant non compris.
                </p>
              </div>
            </div>
          </div>

          {/* Description détaillée */}
          <div className="mt-8 card-dark p-8 hover:border-[#c9a227]/40 transition-all duration-300">
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

        {/* Cards Formules */}
        <div className="grid md:grid-cols-3 gap-6">
          {formules.map((formule) => (
            <div
              key={formule.name}
              className={`relative card-dark p-8 hover:border-[#c9a227]/40 transition-all duration-300 ${
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

        {/* Encart informations pratiques */}
        <div className="mt-12 card-dark p-8 border-[#c9a227]/30 hover:border-[#c9a227]/50 transition-all duration-300">
          <h3 className="font-[family-name:var(--font-display)] text-xl text-white mb-6 flex items-center gap-3">
            <Sparkles size={24} className="text-[#c9a227]" />
            Informations pratiques
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check size={18} className="text-[#c9a227] mt-0.5 shrink-0" />
                <p className="text-[#aaa] text-sm leading-relaxed">
                  <span className="text-white font-medium">Toutes nos formules</span> incluent la prestation du vin d&apos;honneur jusqu&apos;à 4h du matin.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} className="text-[#c9a227] mt-0.5 shrink-0" />
                <p className="text-[#aaa] text-sm leading-relaxed">
                  <span className="text-white font-medium">Mariage de journée ?</span> Formule adaptée sur demande — <a href="#contact" className="text-[#c9a227] hover:underline">contactez-nous</a>.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check size={18} className="text-[#c9a227] mt-0.5 shrink-0" />
                <p className="text-[#aaa] text-sm leading-relaxed">
                  <span className="text-white font-medium">Temps d&apos;installation :</span> environ 1h30. Montage la veille de préférence, ou le matin selon l&apos;accès à la salle.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#c9a227] mt-0.5 shrink-0" />
                <p className="text-[#aaa] text-sm leading-relaxed">
                  <span className="text-white font-medium">Plus d&apos;infos ?</span> N&apos;hésitez pas à nous contacter via le <a href="#contact" className="text-[#c9a227] hover:underline">formulaire de contact</a>.
                </p>
              </div>
            </div>
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
      name: 'Sam & Flo',
      text: 'Guillaume et Laurence, nous vous remercions infiniment pour votre gentillesse, professionnalisme et écoute. Tout y était, c\'était parfait ! Nos invités se sont éclatés. On vous recommande à 200% !',
      platform: 'Mariages.net',
    },
    {
      name: 'Michael S.',
      text: 'Superbe ambiance, son et lumières de très bonnes qualités. Vous cherchez un DJ à la hauteur de votre événement, ne cherchez plus ! Rien à redire, tout a été fait avec beaucoup de professionnalisme.',
      platform: 'Facebook',
    },
    {
      name: 'Morane & Kevin',
      text: 'Superbe prestation ! Les invités ont été conquis et ont enflammé le dancefloor, toutes générations confondues, jusqu\'au bout de la nuit !',
      platform: 'Mariages.net',
    },
    {
      name: 'Cindy D.',
      text: 'Un grand merci à Guillaume pour son professionnalisme, son écoute, sa disponibilité et sa gentillesse ! Nous sommes ravis de l\'avoir choisi pour notre mariage.',
      platform: 'Facebook',
    },
    {
      name: 'Pauline & Nicolas',
      text: 'Si vous cherchez un DJ, prenez-le les yeux fermés. Nous n\'avons eu que des super retours des invités.',
      platform: 'Mariages.net',
    },
    {
      name: 'Jennifer B.',
      text: 'Je recommande fortement ! Personnes très agréables et ambiance assurée ! MERCI pour cette magnifique soirée !',
      platform: 'Facebook',
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="section-title text-white mb-4">
            Ils nous ont fait <span className="text-gradient-gold">confiance</span>
          </h2>

          {/* Stats summary */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-[#aaa]">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <span className="text-white font-semibold">45 avis</span>
              <span className="text-sm">5 étoiles</span>
            </div>
            <span className="hidden sm:inline text-[#c9a227]">•</span>
            <span className="text-sm"><strong className="text-white">100%</strong> recommandé</span>
          </div>

          {/* Platform Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.mariages.net/musique-mariage/mg-events-animation--e233666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/30 rounded-full hover:border-[#c9a227]/60 transition-colors text-sm"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <span className="text-white font-medium">5/5 Mariages.net</span>
              <span className="text-[#888]">(18 avis)</span>
            </a>
            <a
              href="https://www.facebook.com/MGevents35/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#3b5998]/30 rounded-full hover:border-[#3b5998]/60 transition-colors text-sm"
            >
              <svg className="w-4 h-4 text-[#3b5998]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-white font-medium">100% recommandé</span>
              <span className="text-[#888]">(27 avis)</span>
            </a>
          </div>
        </div>

        {/* Testimonial grid - 3 columns on large screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-dark p-5 relative hover:border-[#c9a227]/40 transition-all duration-300">
              <Quote size={24} className="absolute top-4 right-4 text-[#c9a227]/10" />
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#c9a227" className="text-[#c9a227]" />
                ))}
              </div>
              <p className="text-[#aaa] text-sm leading-relaxed mb-4 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a227] to-[#9a7b1a] flex items-center justify-center">
                    <span className="text-[#0a0a0a] text-xs font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-white text-sm font-medium">{testimonial.name}</span>
                </div>
                <span className="text-[#8a8a8a] text-xs">— {testimonial.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ GALLERY ============
function Gallery() {
  const images = [
    { src: '/images/gallery-1.jpg', alt: 'Couple dansant dans la fumée avec jeux de lumières' },
    { src: '/images/gallery-2.jpg', alt: 'Première danse avec fontaine étincelles' },
    { src: '/images/gallery-3.jpg', alt: 'Vue DJ avec invités et guirlandes' },
    { src: '/images/gallery-4.jpg', alt: 'Setup scène complet avec logo MG' },
    { src: '/images/scene-anniversaire-1.jpg', alt: 'Scène anniversaire avec jeux de lumières et écran géant' },
    { src: '/images/scene-anniversaire-2.jpg', alt: 'Ambiance soirée avec photobooth et lumières' },
    { src: '/images/scene-anniversaire-3.jpg', alt: 'Vue d\'ensemble salle de réception avec décoration lumineuse' },
    { src: '/images/console-dj-pro.jpg', alt: 'Console DJ professionnelle avec platines Pioneer' },
    { src: '/images/gallery-5.jpg', alt: 'Piste de danse grange avec lumières' },
    { src: '/images/gallery-6.jpg', alt: 'Table champagne avec LOVE lumineux' },
    { src: '/images/gallery-7.jpg', alt: 'Jeux de lumière avec lustre' },
    { src: '/images/gallery-8.jpg', alt: 'Setup DJ complet' },
  ];

  return (
    <section id="gallery" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="section-title text-white mb-2">
            Nos <span className="text-gradient-gold">prestations</span> en images
          </h2>
          <p className="text-[#888]">
            Des ambiances uniques pour des moments inoubliables
          </p>
        </div>

        {/* Gallery Grid - Balanced 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <LightboxTrigger
              key={index}
              src={image.src}
              alt={image.alt}
              className="relative overflow-hidden rounded-lg border border-[#c9a227]/10 group cursor-zoom-in"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </LightboxTrigger>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PHOTOBOOTH ============
function Photobooth() {
  return (
    <section id="photobooth" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header compact */}
        <div className="text-center mb-10">
          <h2 className="section-title text-white mb-2">
            Notre <span className="text-gradient-gold">Photobooth</span> Vintage
          </h2>
          <p className="text-[#888]">Capturez l&apos;instant avec notre poste TSF des années 60</p>
        </div>

        {/* Layout principal */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Photos à gauche */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {/* Main photo */}
            <LightboxTrigger
              src="/images/photobooth-2.jpg"
              alt="Photobooth en action"
              className="col-span-2 relative rounded-lg overflow-hidden border border-[#c9a227]/10 group cursor-zoom-in"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/photobooth-2.jpg"
                  alt="Photobooth en action"
                  fill
                  className="object-cover"
                />
              </div>
            </LightboxTrigger>
            {/* Thumbnails */}
            <LightboxTrigger
              src="/images/photobooth-1.jpg"
              alt="Photobooth vintage TSF années 60 - mariage Bretagne MG Events"
              className="relative rounded-lg overflow-hidden border border-[#c9a227]/10 cursor-zoom-in"
            >
              <div className="relative aspect-[4/3]">
                <Image src="/images/photobooth-1.jpg" alt="Photobooth vintage TSF années 60 - mariage Bretagne MG Events" fill className="object-cover" />
              </div>
            </LightboxTrigger>
            <LightboxTrigger
              src="/images/photobooth-3.jpg"
              alt="Photobooth vintage TSF - impressions photos instantanées mariage"
              className="relative rounded-lg overflow-hidden border border-[#c9a227]/10 cursor-zoom-in"
            >
              <div className="relative aspect-[4/3]">
                <Image src="/images/photobooth-3.jpg" alt="Photobooth vintage TSF - impressions photos instantanées mariage" fill className="object-cover" />
              </div>
            </LightboxTrigger>
          </div>

          {/* Infos à droite */}
          <div className="space-y-4">
            {/* Description */}
            <div className="card-dark p-6 hover:border-[#c9a227]/40 transition-all duration-300">
              <p className="text-[#aaa] text-sm leading-relaxed mb-4">
                Appareil reflex professionnel, écran tactile 15&quot; et imprimante instantanée.
                Vos invités repartent avec leurs souvenirs imprimés sur place.
              </p>
              <ul className="space-y-2">
                {['150 impressions incluses', 'Personnalisation avec vos prénoms'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#aaa]">
                    <Check size={14} className="text-[#c9a227]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclus Conte de Fées */}
            <div className="card-dark p-4 hover:border-[#c9a227]/40 transition-all duration-300">
              <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-1">Inclus dans</p>
              <p className="text-white font-[family-name:var(--font-display)]">Conte de Fées</p>
            </div>

            {/* Location seule */}
            <div className="card-dark p-4 border-[#c9a227]/30 hover:border-[#c9a227]/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-1">Location seule</p>
                  <p className="text-[#888] text-xs">150 tirages inclus</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-[family-name:var(--font-display)] text-[#c9a227]">240</span>
                  <span className="text-[#888] text-sm">€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ LIVRE D'OR AUDIO ============
function LivreOrAudio() {
  return (
    <section id="livre-dor-audio" className="py-16 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header compact */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs text-[#c9a227] uppercase tracking-wider mb-3">
            <Sparkles size={14} /> Nouveauté
          </span>
          <h2 className="section-title text-white mb-2">
            Le <span className="text-gradient-gold">Livre d&apos;Or Audio</span>
          </h2>
          <p className="text-[#888]">Un téléphone rétro où vos invités laissent un message vocal pour la vie</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <LightboxTrigger
            src="/images/livre-dor-audio-mariage.png"
            alt="Livre d'or audio - téléphone rétro vintage pour messages vocaux des invités au mariage - MG Events"
            className="relative h-80 lg:h-[420px] rounded-lg overflow-hidden border border-[#c9a227]/10 cursor-zoom-in"
          >
            <Image
              src="/images/livre-dor-audio-mariage.png"
              alt="Livre d'or audio - téléphone rétro vintage pour messages vocaux des invités au mariage - MG Events"
              fill
              className="object-contain"
            />
            {/* Ruban promo "Nouveau" */}
            <div className="absolute top-0 right-0 z-20 h-28 w-28 overflow-hidden pointer-events-none">
              <span className="absolute top-6 -right-8 w-40 rotate-45 bg-[#c9a227] py-1 text-center text-xs font-semibold uppercase tracking-widest text-[#0a0a0a] shadow-lg">
                Nouveau
              </span>
            </div>
          </LightboxTrigger>

          {/* Contenu */}
          <div>
            <div className="card-dark p-8 hover:border-[#c9a227]/40 transition-all duration-300">
              <p className="text-[#aaa] leading-relaxed mb-4">
                Imaginez : posé sur une jolie table, un <strong className="text-white">téléphone rétro</strong> attend
                vos invités. Il suffit de décrocher le combiné pour laisser, en toute intimité, un
                <strong className="text-white"> message vocal</strong> aux mariés. Une déclaration émue, une anecdote
                qui fait rire, les rires d&apos;enfants, une chanson improvisée… autant de
                <span className="text-[#c9a227]"> souvenirs audio authentiques</span> que vous réécouterez avec émotion
                des années après votre mariage.
              </p>
              <p className="text-[#aaa] leading-relaxed mb-4">
                Bien plus vivant qu&apos;un livre d&apos;or papier, le Livre d&apos;Or Audio capture les voix, les
                intonations et la spontanéité de ceux que vous aimez. Son look <strong className="text-white">vintage</strong>
                {' '}s&apos;intègre naturellement à tous les décors, du mariage champêtre à la réception la plus élégante.
                À la fin de la soirée, nous vous remettons l&apos;intégralité des messages : un trésor sonore à conserver
                pour toujours.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  'Téléphone rétro fourni, prêt à l\'emploi',
                  'Messages vocaux remis après le mariage',
                  'Aucune manipulation pour vos invités : on décroche, on parle',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#aaa]">
                    <Heart size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Disponibilité */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="card-dark p-4">
                  <p className="text-xs text-[#c9a227] uppercase tracking-wider mb-1">Inclus dans</p>
                  <p className="text-white font-[family-name:var(--font-display)] text-sm">Rêve en Blanc &amp; Conte de Fées</p>
                </div>
                <div className="card-dark p-4 border-[#c9a227]/30">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#c9a227] uppercase tracking-wider">Location seule</p>
                    <div className="text-right">
                      <span className="text-2xl font-[family-name:var(--font-display)] text-[#c9a227]">40</span>
                      <span className="text-[#888] text-sm">€</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/livre-dor-audio" className="btn-outline inline-flex items-center gap-2">
                <Phone size={16} /> En savoir plus sur le Livre d&apos;Or Audio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ ANIMAJET ============
function AnimaJet() {
  const features = [
    {
      icon: Share2,
      title: 'Partage de photos en temps réel',
      description: 'Vos invités partagent leurs plus beaux moments instantanément sur grand écran. Toute la soirée capturée, tous ensemble.',
    },
    {
      icon: Monitor,
      title: 'Diaporama sur grand écran',
      description: 'Les photos de vos invités défilent en direct sur grand écran, créant une ambiance unique et participative tout au long de la soirée.',
    },
    {
      icon: HelpCircle,
      title: 'Jeux interactifs',
      description: 'Quizz, Photo Mystère, Roue de la fortune… Des animations originales qui fera deviner vos invités et créera des moments de complicité inoubliables.',
    },
    {
      icon: Printer,
      title: 'Impression photo instantanée',
      description: 'Vos invités impriment leurs photos directement depuis leur téléphone ! Mode auto ou validation manuelle, vous gardez le contrôle.',
      isNew: true,
      note: 'Disponible avec la formule Conte de Fées ou Photobooth en option',
    },
    {
      icon: ListMusic,
      title: 'Blind Test intégré',
      description: 'Créez des quizz musicaux en 2 clics ! Ajoutez un extrait audio à vos questions, la musique se lance automatiquement quand la bonne réponse s\'affiche.',
      isNew: true,
    },
  ];

  return (
    <section id="animajet" className="py-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header avec logo */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Logo côté */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#c9a227]/10 rounded-full blur-3xl" />
              <Image
                src="/images/animajet-logo.png"
                alt="AnimaJet - plateforme d'animations interactives conçue et développée par MG Events pour mariages en Bretagne"
                width={350}
                height={175}
                className="relative"
              />
            </div>
          </div>

          {/* Texte côté */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border border-[#c9a227]/30 rounded-full mb-6">
              <Zap size={16} className="text-[#c9a227]" />
              <span className="text-[#c9a227] text-sm font-medium">Conçu &amp; développé par MG Events</span>
            </div>

            <h2 className="section-title text-white mb-4">
              Animations <span className="text-gradient-gold">Interactives</span>
            </h2>

            <p className="text-[#888] mb-6">
              Notre plateforme maison, qui évolue sans cesse
            </p>

            <p className="text-[#aaa] text-lg leading-relaxed">
              Offrez à vos invités une expérience inédite grâce à <span className="text-[#c9a227] font-medium">AnimaJet</span>,
              notre plateforme d&apos;animation interactive. Partage de photos, diaporama, jeux interactifs, impression photo et maintenant <span className="text-[#c9a227] font-medium">Blind Test</span> — tout pour une soirée inoubliable.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="card-dark p-8 h-full hover:border-[#c9a227]/40 transition-all duration-300 relative overflow-hidden">
                {/* Badge Nouveau */}
                {'isNew' in feature && feature.isNew && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-gradient-to-r from-[#c9a227] to-[#d4af37] rounded-full">
                    <span className="text-[#0a0a0a] text-xs font-bold uppercase tracking-wider">Nouveau</span>
                  </div>
                )}

                {/* Icon with glow effect */}
                <div className="relative mb-6 flex justify-center md:justify-start">
                  <div className="absolute inset-0 bg-[#c9a227]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl flex items-center justify-center border border-[#c9a227]/20">
                    <feature.icon size={28} className="text-[#c9a227]" />
                  </div>
                </div>

                <h3 className="text-white font-[family-name:var(--font-display)] text-xl mb-3 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-[#888] leading-relaxed text-center md:text-left">
                  {feature.description}
                </p>
                {'note' in feature && feature.note && (
                  <p className="text-[#c9a227] text-xs mt-3 flex items-center gap-1 justify-center md:justify-start">
                    <Info size={12} />
                    {feature.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video promo AnimaJet */}
        <div className="mb-12">
          <div className="card-dark p-6 hover:border-[#c9a227]/40 transition-all duration-300">
            <h3 className="text-white font-[family-name:var(--font-display)] text-xl mb-4 text-center">
              <span className="text-[#c9a227]">AnimaJet</span> en action
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-black/50">
              <video
                className="w-full max-w-4xl mx-auto rounded-xl"
                controls
                preload="metadata"
                poster="/images/animajet-thumbnail.jpg"
              >
                <source src="/promo-animajet.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>

        {/* Included notice */}
        <div className="card-dark p-6 border-[#c9a227]/30 text-center hover:border-[#c9a227]/50 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <Check size={24} className="text-[#c9a227]" />
              <p className="text-white text-lg font-[family-name:var(--font-display)]">
                AnimaJet <span className="text-[#c9a227]">inclus dans toutes nos formules</span>
              </p>
            </div>
            <span className="hidden sm:inline text-[#8a8a8a]">—</span>
            <p className="text-[#888]">
              Notre plateforme, conçue et développée par MG Events
            </p>
          </div>
        </div>

        {/* Lien vers le cluster AnimaJet */}
        <div className="text-center mt-10">
          <Link href="/animations-interactives-mariage" className="btn-gold inline-block">
            Découvrir toutes nos animations interactives →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ ETINCELLES FROIDES ============
function EtincellesFroides() {
  const securite = [
    {
      icon: Award,
      title: 'Matériel certifié CE',
      description: 'Nous utilisons exclusivement des machines professionnelles Mac Mah MAC SPARK 300, conformes aux normes européennes de sécurité.',
    },
    {
      icon: Flame,
      title: 'Étincelles froides',
      description: 'Contrairement aux feux d\'artifice traditionnels, nos étincelles ne produisent pas de chaleur et ne présentent aucun risque d\'incendie.',
    },
    {
      icon: HomeIcon,
      title: 'Utilisable en intérieur',
      description: 'Sans fumée, sans odeur, sans danger pour vos invités ni pour la salle de réception.',
    },
  ];

  return (
    <section className="py-16 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header compact */}
        <div className="text-center mb-10">
          <h2 className="section-title text-white mb-2">
            Étincelles <span className="text-gradient-gold">Froides</span>
          </h2>
          <p className="text-[#888]">
            Sublimez votre ouverture de bal avec nos fontaines d&apos;étincelles froides • Effet spectaculaire et féérique, sans aucun risque
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Image */}
          <div className="relative">
            <LightboxTrigger
              src="/images/etincelles-ouverture-bal.jpg"
              alt="Étincelles froides lors d'une ouverture de bal"
              className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[#c9a227]/20 cursor-zoom-in"
            >
              <Image
                src="/images/etincelles-ouverture-bal.jpg"
                alt="Étincelles froides lors d'une ouverture de bal"
                fill
                className="object-cover"
              />
            </LightboxTrigger>
            {/* Badge CE */}
            <div className="absolute bottom-4 right-4 bg-[#0a0a0a] border-2 border-[#c9a227] rounded-full p-3">
              <ShieldCheck size={20} className="text-[#c9a227]" />
            </div>
          </div>

          {/* Sécurité */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck size={28} className="text-[#c9a227]" />
              <h3 className="text-white font-[family-name:var(--font-display)] text-xl">
                Votre sécurité, notre priorité
              </h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {securite.map((item, index) => (
                <div key={index} className="card-dark p-4 text-center hover:border-[#c9a227]/40 transition-all duration-300">
                  <item.icon size={28} className="text-[#c9a227] mx-auto mb-2" />
                  <h4 className="text-white font-medium text-sm mb-1 flex items-center justify-center gap-1">
                    <Check size={14} className="text-green-500" />
                    {item.title}
                  </h4>
                  <p className="text-[#888] text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="card-dark p-6 border-[#c9a227]/20 hover:border-[#c9a227]/40 transition-all duration-300">
          <div className="flex items-start gap-4">
            <ShieldCheck size={24} className="text-[#c9a227] shrink-0 mt-1" />
            <p className="text-[#888] text-sm leading-relaxed">
              <span className="text-white font-medium">Note importante :</span> Suite aux récents incidents survenus lors d&apos;événements,
              nous tenons à vous garantir un matériel aux normes et une utilisation maîtrisée par des professionnels expérimentés.
              Votre sécurité et celle de vos invités sont notre priorité absolue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ AUTRES EVENEMENTS ============
function AutresEvenements() {
  const events = [
    { icon: Cake, title: 'Anniversaire', description: 'Ambiance sur-mesure', href: '/animation-anniversaire/rennes' },
    { icon: Mic2, title: 'Karaoké', description: 'Soirées inoubliables', href: '#contact' },
    { icon: Building2, title: 'CE / Entreprise', description: 'Séminaires, galas', href: '/dj-soiree-entreprise/rennes' },
    { icon: GlassWater, title: 'Soirée privée', description: 'Bar, discothèque', href: '#contact' },
  ];

  const villesEntreprise = [
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Saint-Malo', slug: 'saint-malo' },
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Brest', slug: 'brest' },
  ];

  const villesAnniversaire = [
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Brest', slug: 'brest' },
    { name: 'Laval', slug: 'laval' },
  ];

  return (
    <section id="autres-evenements" className="py-16 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + Events Grid inline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Header */}
          <div>
            <h2 className="section-title text-white mb-2">
              Autres <span className="text-gradient-gold">événements</span>
            </h2>
            <p className="text-[#888] text-sm">
              Notre expertise au service de toutes vos célébrations
            </p>
          </div>

          {/* Events Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {events.map((event, index) => (
              <Link key={index} href={event.href} className="card-dark p-4 text-center hover:border-[#c9a227]/40 transition-all duration-300">
                <event.icon size={28} className="text-[#c9a227] mx-auto mb-2" />
                <h3 className="text-white text-sm font-medium mb-1">{event.title}</h3>
                <p className="text-[#888] text-xs">{event.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Forfait Anniversaire */}
        <div className="card-dark p-6 border-[#c9a227]/30 hover:border-[#c9a227]/50 transition-all duration-300 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Cake size={32} className="text-[#c9a227] shrink-0" />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-[family-name:var(--font-display)] text-lg">Forfait Anniversaire</h3>
                  <span className="px-2 py-0.5 bg-[#c9a227]/20 border border-[#c9a227]/30 rounded-full text-[#c9a227] text-xs">
                    Oct-Avril
                  </span>
                </div>
                <p className="text-[#888] text-sm">Animation complète + vidéo projecteur • <span className="text-[#8a8a8a] italic">Détails sur demande</span></p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <p className="text-[#888] text-xs">À partir de</p>
                <span className="text-3xl font-[family-name:var(--font-display)] text-[#c9a227]">600</span>
                <span className="text-[#888] text-sm">€</span>
              </div>
              <a href="#contact" className="btn-gold whitespace-nowrap">Devis</a>
            </div>
          </div>
        </div>

        {/* Liens vers les pages par ville */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Entreprise */}
          <div className="card-dark p-5">
            <h3 className="text-white font-medium mb-3 flex items-center gap-2">
              <Building2 size={18} className="text-[#c9a227]" />
              DJ Soirée Entreprise par ville
            </h3>
            <div className="flex flex-wrap gap-2">
              {villesEntreprise.map((ville) => (
                <Link
                  key={ville.slug}
                  href={`/dj-soiree-entreprise/${ville.slug}`}
                  className="text-xs px-3 py-1 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
                >
                  {ville.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Anniversaire */}
          <div className="card-dark p-5">
            <h3 className="text-white font-medium mb-3 flex items-center gap-2">
              <Cake size={18} className="text-[#c9a227]" />
              Animation Anniversaire par ville
            </h3>
            <div className="flex flex-wrap gap-2">
              {villesAnniversaire.map((ville) => (
                <Link
                  key={ville.slug}
                  href={`/animation-anniversaire/${ville.slug}`}
                  className="text-xs px-3 py-1 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-colors"
                >
                  {ville.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ ZONES DJ MARIAGE BRETAGNE (SEO) ============
function ZonesMariage() {
  // Départements
  const departements = [
    { label: 'Ille-et-Vilaine (35)', href: '/dj-mariage-ille-et-vilaine' },
    { label: 'Morbihan (56)', href: '/dj-mariage-morbihan' },
    { label: 'Finistère (29)', href: '/dj-mariage-finistere' },
    { label: 'Loire-Atlantique (44)', href: '/dj-mariage-loire-atlantique' },
    { label: 'Mayenne (53)', href: '/dj-mariage-mayenne' },
  ];

  // Toutes les villes DJ Mariage
  const villesMariage = [
    // Ille-et-Vilaine
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Saint-Malo', slug: 'saint-malo' },
    { name: 'Vitré', slug: 'vitre' },
    { name: 'Fougères', slug: 'fougeres' },
    { name: 'Redon', slug: 'redon' },
    // Morbihan
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Lorient', slug: 'lorient' },
    { name: 'Pontivy', slug: 'pontivy' },
    { name: 'Auray', slug: 'auray' },
    { name: 'Ploërmel', slug: 'ploermel' },
    // Finistère
    { name: 'Brest', slug: 'brest' },
    { name: 'Quimper', slug: 'quimper' },
    { name: 'Morlaix', slug: 'morlaix' },
    { name: 'Concarneau', slug: 'concarneau' },
    // Loire-Atlantique
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Saint-Nazaire', slug: 'saint-nazaire' },
    { name: 'Guérande', slug: 'guerande' },
    { name: 'La Baule', slug: 'la-baule' },
    // Mayenne
    { name: 'Laval', slug: 'laval' },
    { name: 'Château-Gontier', slug: 'chateau-gontier' },
    { name: 'Mayenne', slug: 'mayenne-ville' },
  ];

  // Animation Anniversaire
  const villesAnniversaire = [
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Brest', slug: 'brest' },
    { name: 'Laval', slug: 'laval' },
  ];

  // DJ Soirée Entreprise
  const villesEntreprise = [
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Saint-Malo', slug: 'saint-malo' },
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Brest', slug: 'brest' },
  ];

  return (
    <section id="zones" className="py-16 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-6"></div>
          <h2 className="section-title text-white mb-4">
            Votre DJ Mariage <span className="text-gradient-gold">partout en Bretagne</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            Nous intervenons dans toute la Bretagne et le Grand Ouest pour vos mariages, anniversaires et événements d&apos;entreprise
          </p>
        </div>

        {/* Par département */}
        <div className="mb-10">
          <h3 className="text-white font-medium mb-5 flex items-center gap-2">
            <MapPin size={20} className="text-[#c9a227]" />
            DJ Mariage par département
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {departements.map((dept) => (
              <Link
                key={dept.href}
                href={dept.href}
                className="card-dark p-4 text-center hover:border-[#c9a227]/40 transition-all duration-300"
              >
                <span className="text-[#aaa] hover:text-[#c9a227] text-sm">{dept.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Par ville - DJ Mariage */}
        <div className="mb-10">
          <h3 className="text-white font-medium mb-5 flex items-center gap-2">
            <Music size={20} className="text-[#c9a227]" />
            DJ Mariage par ville
          </h3>
          <div className="flex flex-wrap gap-2">
            {villesMariage.map((ville) => (
              <Link
                key={ville.slug}
                href={`/dj-mariage/${ville.slug}`}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-all duration-300 text-sm"
              >
                {ville.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Animation Anniversaire */}
        <div className="mb-10">
          <h3 className="text-white font-medium mb-5 flex items-center gap-2">
            <Cake size={20} className="text-[#c9a227]" />
            Animation Anniversaire
          </h3>
          <div className="flex flex-wrap gap-2">
            {villesAnniversaire.map((ville) => (
              <Link
                key={ville.slug}
                href={`/animation-anniversaire/${ville.slug}`}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-all duration-300 text-sm"
              >
                {ville.name}
              </Link>
            ))}
          </div>
        </div>

        {/* DJ Soirée Entreprise */}
        <div className="mb-10">
          <h3 className="text-white font-medium mb-5 flex items-center gap-2">
            <Building2 size={20} className="text-[#c9a227]" />
            DJ Soirée Entreprise
          </h3>
          <div className="flex flex-wrap gap-2">
            {villesEntreprise.map((ville) => (
              <Link
                key={ville.slug}
                href={`/dj-soiree-entreprise/${ville.slug}`}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#c9a227]/20 rounded-full text-[#aaa] hover:text-[#c9a227] hover:border-[#c9a227]/40 transition-all duration-300 text-sm"
              >
                {ville.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA vers page complète */}
        <div className="text-center mt-8">
          <Link
            href="/zones-intervention"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a227]/40 rounded-lg text-[#c9a227] hover:bg-[#c9a227]/10 hover:border-[#c9a227] transition-all duration-300"
          >
            Voir toutes nos zones d&apos;intervention
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  const zones = [
    { label: 'Ille-et-Vilaine', href: '/dj-mariage-ille-et-vilaine' },
    { label: 'Morbihan', href: '/dj-mariage-morbihan' },
    { label: 'Finistère', href: '/dj-mariage-finistere' },
    { label: 'Loire-Atlantique', href: '/dj-mariage-loire-atlantique' },
    { label: 'Mayenne', href: '/dj-mariage-mayenne' },
  ];

  const villesMariage = [
    { name: 'Rennes', slug: 'rennes' },
    { name: 'Saint-Malo', slug: 'saint-malo' },
    { name: 'Nantes', slug: 'nantes' },
    { name: 'Vannes', slug: 'vannes' },
    { name: 'Brest', slug: 'brest' },
    { name: 'Lorient', slug: 'lorient' },
    { name: 'Quimper', slug: 'quimper' },
    { name: 'Laval', slug: 'laval' },
  ];

  return (
    <footer className="py-16 bg-[#0a0a0a] border-t border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="MG Events Animation DJ Mariage Bretagne"
              width={120}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-[#888] text-sm mb-4">DJ animateur mariage en Bretagne depuis plus de 20 ans.</p>
            <p className="text-[#888] text-sm">
              <a href="tel:+33648106166" className="inline-block py-1 text-[#c9a227] hover:underline">06 48 10 61 66</a><br />
              <a href="mailto:mg.events35@gmail.com" className="inline-block py-1 text-[#c9a227] hover:underline">mg.events35@gmail.com</a>
            </p>
          </div>

          {/* Zones départements */}
          <div>
            <h4 className="text-white font-medium mb-4">Par département</h4>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li key={zone.href}>
                  <Link href={zone.href} className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                    DJ Mariage {zone.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/dj-mariage-rennes" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                  DJ Mariage Rennes
                </Link>
              </li>
              <li>
                <Link href="/dj-mariage-laval" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                  DJ Mariage Laval
                </Link>
              </li>
              <li>
                <Link href="/dj-morlaix" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                  DJ Mariage Morlaix
                </Link>
              </li>
              <li>
                <Link href="/dj-mariage-quimper" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                  DJ Mariage Quimper
                </Link>
              </li>
              <li>
                <Link href="/dj-mariage-bretagne" className="text-[#c9a227] text-sm hover:underline">
                  DJ Mariage Bretagne →
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones villes */}
          <div>
            <h4 className="text-white font-medium mb-4">Par ville</h4>
            <ul className="space-y-2">
              {villesMariage.map((ville) => (
                <li key={ville.slug}>
                  <Link href={`/dj-mariage/${ville.slug}`} className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                    DJ Mariage {ville.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/zones-intervention" className="text-[#c9a227] text-sm hover:underline">Toutes nos zones →</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-white font-medium mb-4">Blog</h4>
            <ul className="space-y-2">
              <li><Link href="/blog/comment-choisir-dj-mariage-bretagne" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Choisir son DJ mariage</Link></li>
              <li><Link href="/blog/ouverture-de-bal-conseils" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Ouverture de bal</Link></li>
              <li><Link href="/blog/etincelles-froides-mariage-securite" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Étincelles froides</Link></li>
              <li><Link href="/blog" className="text-[#c9a227] text-sm hover:underline">Tous les articles →</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><Link href="/livre-dor-audio" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Livre d&apos;Or Audio</Link></li>
              <li><Link href="/animations-interactives-mariage" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Animations interactives</Link></li>
              <li><Link href="/philosophie" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Notre philosophie</Link></li>
              <li><Link href="/partenaires" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Nos partenaires</Link></li>
              <li><Link href="/mentions-legales" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgv" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">CGV</Link></li>
              <li><Link href="/confidentialite" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">Confidentialité</Link></li>
              <li>
                <a href="https://www.facebook.com/MGevents35/" target="_blank" rel="noopener noreferrer" className="text-[#888] text-sm hover:text-[#c9a227] transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#c9a227]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8a8a8a]">
            © {new Date().getFullYear()} MG Events Animation - DJ Mariage Bretagne - Tous droits réservés
          </p>
          <p className="text-xs text-[#8a8a8a]">
            Rennes • Vannes • Nantes • Quimper • Brest • Laval
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
      <HomeHeader />
      <main>
        <Hero />
        <QuickNav />
        <About />
        <ExperienceMusicale />
        <Gallery />
        <Photobooth />
        <LivreOrAudio />
        <AnimaJet />
        <EtincellesFroides />
        <Testimonials />
        <Formules />
        <AutresEvenements />
        <ContactSection />
        <ZonesMariage />
      </main>
      <Footer />
    </>
  );
}
