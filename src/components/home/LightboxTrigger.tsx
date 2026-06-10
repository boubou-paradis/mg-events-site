'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Wrapper cliquable qui ouvre l'image en grand dans une modale plein écran.
// Permet de garder les sections de la home en composants serveur :
// seul ce petit îlot est hydraté côté client.
export default function LightboxTrigger({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className={className} onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh] animate-fade-up">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="object-contain max-h-[90vh] w-auto h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white/70 text-center mt-4 text-sm">{alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
