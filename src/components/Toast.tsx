'use client';

import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error';
  onClose?: () => void;
}

export function Toast({ message, type = 'success' }: ToastProps) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-surface-card border border-brand-cyan/40 text-slate-100 rounded-xl shadow-neon-cyan animate-bounce-short">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-brand-rose flex-shrink-0" />
      )}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
