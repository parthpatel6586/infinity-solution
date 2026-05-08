import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowBadgeProps {
  children: ReactNode;
  className?: string;
}

export function GlowBadge({ children, className }: GlowBadgeProps) {
  return (
    <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-emerald/10 text-brand-cyan border border-brand-emerald/30 shadow-[0_0_10px_rgba(0,107,79,0.3)]", className)}>
      {children}
    </div>
  );
}
