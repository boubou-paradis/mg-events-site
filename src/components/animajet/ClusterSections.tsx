import { Check } from 'lucide-react';

// Conteneur de section au style du site.
export function Section({
  bg = '#0a0a0a',
  narrow = false,
  children,
}: {
  bg?: string;
  narrow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16" style={{ backgroundColor: bg }}>
      <div className={`${narrow ? 'max-w-4xl' : 'max-w-7xl'} mx-auto px-6`}>{children}</div>
    </section>
  );
}

// Titre de section avec mot accentué.
export function SectionTitle({
  children,
  center = true,
  className = '',
}: {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-[family-name:var(--font-display)] text-3xl text-white ${center ? 'text-center' : ''} mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}

// Bloc de prose au style éditorial du site.
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-invert max-w-none text-[#aaa] leading-relaxed space-y-6">{children}</div>
  );
}

// Liste à puces "check" en grille.
export function CheckList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <div className={`grid ${columns === 2 ? 'sm:grid-cols-2' : ''} gap-3`}>
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <Check size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
          <p className="text-[#888] text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
}

// Grille d'étapes numérotées.
export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, i) => (
        <div key={i} className="card-dark p-6 relative">
          <span className="absolute top-3 right-5 text-5xl font-[family-name:var(--font-display)] text-[#c9a227]/15">
            {i + 1}
          </span>
          <h3 className="text-white font-medium mb-3">{step.title}</h3>
          <p className="text-[#888] text-sm leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>
  );
}
