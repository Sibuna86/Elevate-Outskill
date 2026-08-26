'use client';

import React from 'react';
import { TrendingUp, Globe2 } from 'lucide-react';

interface IndustryTrendCardProps {
  trend: string;
  professionName: string;
}

export function IndustryTrendCard({ trend, professionName }: IndustryTrendCardProps) {
  return (
    <div className="bg-surface-card border border-border rounded-2xl p-5 shadow-card-glow hover:border-brand-indigo/40 transition-all">
      <div className="flex items-center gap-2.5 mb-2.5 border-b border-border pb-2">
        <div className="w-6 h-6 rounded-md bg-brand-indigo/20 text-brand-indigo flex items-center justify-center border border-brand-indigo/30">
          <TrendingUp className="w-3.5 h-3.5" />
        </div>
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          AI IN THIS FIELD
        </h3>
      </div>
      <p className="text-xs text-slate-300 font-medium leading-relaxed">
        {trend}
      </p>
    </div>
  );
}
