'use client';

import React from 'react';
import { Wrench, CheckCircle2, Zap } from 'lucide-react';
import { Profession } from '@/lib/types';
import { getRelevantToolsForProfessions } from '@/lib/services/toolFilterService';

interface RelevantAiToolsCardProps {
  professions: Profession[];
}

export function RelevantAiToolsCard({ professions }: RelevantAiToolsCardProps) {
  const relevantTools = getRelevantToolsForProfessions(professions);
  const roleName = professions.map((p) => p.name).join(' & ');

  return (
    <div className="bg-surface-card border border-border rounded-3xl p-6 sm:p-7 shadow-card-glow mb-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#A3E635]/15 text-[#A3E635] flex items-center justify-center border border-[#A3E635]/30">
            <Wrench className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              RELEVANT AI TOOLS OFFERED FOR {roleName}
            </h3>
            <p className="text-xs text-slate-400">
              Selected from Outskill's 1-year bonus tool stack to specifically solve {roleName} workflows
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-[#A3E635] bg-[#A3E635]/10 px-2.5 py-1 rounded-full border border-[#A3E635]/30">
          {relevantTools.length} Tailored Tools Included
        </span>
      </div>

      {/* Grid of Relevant Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relevantTools.map((tool, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-surface border border-border/80 hover:border-[#A3E635]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-mint/15 text-brand-mint border border-brand-mint/30">
                    {tool.duration}
                  </span>
                </div>

                {tool.value && (
                  <span className="text-[10px] font-mono text-slate-400 bg-surface-card px-2 py-0.5 rounded border border-border">
                    {tool.value}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 mb-2.5 leading-relaxed">
                <strong className="text-slate-200">What it does: </strong>
                {tool.what_it_does}
              </p>

              <div className="p-2.5 rounded-xl bg-surface-card border border-border/60 text-xs text-slate-300">
                <strong className="text-[#A3E635]">How it helps the prospect: </strong>
                {tool.how_it_helps_prospect}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
