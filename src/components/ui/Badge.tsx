import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'new' | 'contacted' | 'in_progress' | 'converted' | 'closed' | 'default';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-orange-100 text-orange-800',
    converted: 'bg-green-100 text-green-800',
    closed: 'bg-slate-100 text-slate-800',
    default: 'bg-slate-100 text-slate-800',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
