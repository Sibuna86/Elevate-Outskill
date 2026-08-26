'use client';

import React from 'react';
import { Compass } from 'lucide-react';

interface PainPointsCardProps {
  painPoints: string[];
  experienceLabel: string;
}

export function PainPointsCard({ painPoints, experienceLabel }: PainPointsCardProps) {
  return (
    <div className="bg-surface-card border border-border rounded-2xl p-5 shadow-card-glow hover:border-brand-amber/40 transition-all flex flex-col h-full">
      <div className="flex items-center gap-2.5 mb-3 border-b border-border pb-2.5">
        <div className="w-7 h-7 rounded-lg bg-brand-amber/15 text-brand-amber flex items-center justify-center border border-brand-amber/30">
          <Compass className="w-3.5 h-3.5" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            POTENTIAL AREAS TO EXPLORE
          </h3>
          <p className="text-[11px] text-slate-400">
            Likely challenges to discover ({experienceLabel})
          </p>
        </div>
      </div>

      <div className="space-y-2.5 flex-1">
        {painPoints.map((point, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber mt-1.5 flex-shrink-0" />
            <span className="leading-relaxed font-medium">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
