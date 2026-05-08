import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel p-6 shadow-xl transition-all duration-300 hover:shadow-neon-emerald/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
