'use client';

import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { ProgramInfo } from '@/lib/types';

interface OutskillConnectionCardProps {
  whyOutskill: string[];
  program: ProgramInfo;
}

export function OutskillConnectionCard({ whyOutskill, program }: OutskillConnectionCardProps) {
  return (
    <div className="bg-surface-card border border-border rounded-2xl p-5 shadow-card-glow hover:border-brand-cyan/40 transition-all flex flex-col h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-indigo/20 text-brand-indigo flex items-center justify-center border border-brand-indigo/30">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              WHY OUTSKILL MAY BE RELEVANT
            </h3>
            <p className="text-[11px] text-slate-400">
              Grounded connection to {program.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 text-[10px] font-semibold">
          <Award className="w-3 h-3" />
          <span>{program.nsdc_name}</span>
        </div>
      </div>

      <div className="space-y-2.5 flex-1">
        {whyOutskill.map((point, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan mt-0.5 flex-shrink-0" />
            <span
              className="leading-relaxed font-medium"
              dangerouslySetInnerHTML={{
                __html: point.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-brand-cyan font-semibold">$1</strong>'
                )
              }}
            />
          </div>
        ))}
      </div>

      {/* Program Sprints Tag */}
      <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between text-[10px] text-slate-400">
        <span>Verified Outskill Track: {program.region}</span>
        <span className="font-mono text-brand-cyan">{program.citation.source_document} (P.{program.citation.source_page})</span>
      </div>
    </div>
  );
}
