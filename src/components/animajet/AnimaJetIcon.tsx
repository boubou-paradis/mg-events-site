import {
  Brain,
  Music,
  Dices,
  Sparkles,
  ListOrdered,
  Timer,
  Share2,
  Images,
  Smartphone,
  QrCode,
  Monitor,
  PartyPopper,
  Trophy,
  Camera,
  Wand2,
  type LucideProps,
} from 'lucide-react';
import type { LucideIconName } from '@/data/animajet';

const iconMap: Record<LucideIconName, React.ComponentType<LucideProps>> = {
  Brain,
  Music,
  Dices,
  Sparkles,
  ListOrdered,
  Timer,
  Share2,
  Images,
  Smartphone,
  QrCode,
  Monitor,
  PartyPopper,
  Trophy,
  Camera,
  Wand2,
};

// Rend une icône lucide à partir de son nom (stocké dans les données AnimaJet).
export default function AnimaJetIcon({ name, ...props }: { name: LucideIconName } & LucideProps) {
  const Icon = iconMap[name];
  return <Icon {...props} />;
}
