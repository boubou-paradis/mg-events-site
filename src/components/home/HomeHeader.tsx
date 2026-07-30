'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

// Header de la home avec menu mobile et dropdown zones (îlot client)
export default function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [zonesOpen, setZonesOpen] = useState(false);

  const zones = [
    { label: 'Ille-et-Vilaine (35)', href: '/dj-mariage-ille-et-vilaine' },
    { label: 'Morbihan (56)', href: '/dj-mariage-morbihan' },
    { label: 'Loire-Atlantique (44)', href: '/dj-mariage-loire-atlantique' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="MG Events Animation DJ Mariage Bretagne"
              width={240}
              height={96}
              sizes="(max-width: 768px) 200px, 240px"
              className="h-20 md:h-24 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">À propos</a>
            <a href="#formules" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Formules</a>

            {/* Zones Dropdown */}
            <div className="relative" onMouseEnter={() => setZonesOpen(true)} onMouseLeave={() => setZonesOpen(false)}>
              <button className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors flex items-center gap-1 py-2">
                Zones
                <ChevronDown size={14} className={`transition-transform ${zonesOpen ? 'rotate-180' : ''}`} />
              </button>
              {zonesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-[#1a1a1a] border border-[#c9a227]/20 rounded-lg shadow-xl py-2">
                    {zones.map((zone) => (
                      <a
                        key={zone.href}
                        href={zone.href}
                        className="block px-4 py-2 text-sm text-[#aaa] hover:text-[#c9a227] hover:bg-[#c9a227]/5 transition-colors"
                      >
                        {zone.label}
                      </a>
                    ))}
                    <div className="border-t border-[#c9a227]/10 mt-2 pt-2">
                      <a
                        href="/zones-intervention"
                        className="block px-4 py-2 text-sm text-[#c9a227] hover:bg-[#c9a227]/5 transition-colors"
                      >
                        Toutes les zones →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/blog" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Blog</a>
            <a href="#contact" className="text-sm text-[#aaa] hover:text-[#c9a227] transition-colors">Contact</a>
            <a href="/partenaires" className="btn-gold">
              Partenaires
            </a>
            <a href="#contact" className="btn-gold">
              Devis gratuit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pt-6 pb-4 border-t border-[#c9a227]/10 mt-4">
            <div className="flex flex-col gap-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-[#aaa] hover:text-[#c9a227] transition-colors py-2">À propos</a>
              <a href="#formules" onClick={() => setIsOpen(false)} className="text-[#aaa] hover:text-[#c9a227] transition-colors py-2">Formules</a>

              {/* Mobile Zones */}
              <div className="border-t border-[#c9a227]/10 pt-4">
                <p className="text-xs text-[#8a8a8a] uppercase tracking-wider mb-2">Zones d&apos;intervention</p>
                {zones.map((zone) => (
                  <a key={zone.href} href={zone.href} className="block text-[#aaa] hover:text-[#c9a227] transition-colors py-1.5 text-sm">
                    {zone.label}
                  </a>
                ))}
              </div>

              <a href="/blog" onClick={() => setIsOpen(false)} className="text-[#aaa] hover:text-[#c9a227] transition-colors py-2 border-t border-[#c9a227]/10 pt-4">Blog</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#aaa] hover:text-[#c9a227] transition-colors py-2">Contact</a>
              <a href="/partenaires" onClick={() => setIsOpen(false)} className="btn-gold text-center mt-2">
                Partenaires
              </a>
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
