'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

// ============ ANIMATED SECTION ============
export function AnimatedSection({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </section>
  );
}

// ============ SCROLL INDICATOR ============
export function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-8 flex flex-col items-center animate-fade-up delay-500"
      aria-hidden="true"
    >
      <span className="text-xs tracking-[0.2em] uppercase text-[#9a7b1a] mb-3">
        Lire la suite
      </span>
      <ChevronDown className="w-5 h-5 text-[#9a7b1a] animate-bounce" />
    </div>
  );
}
