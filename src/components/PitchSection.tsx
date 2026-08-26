'use client';

import React from 'react';
import { MessageSquareQuote } from 'lucide-react';

interface PitchSectionProps {
  talkingPoints: string[];
  prospectRole: string;
  experienceLabel: string;
}

export function PitchSection({
  talkingPoints,
  prospectRole,
  experienceLabel
}: PitchSectionProps) {
  return (
    <div className="w-full bg-surface-card border-2 border-brand-coral/40 rounded-3xl p-6 sm:p-7 shadow-card-glow mb-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 border-b border-border pb-4">
        <div className="w-9 h-9 rounded-xl bg-brand-coral/15 text-brand-coral flex items-center justify-center border border-brand-coral/30">
          <MessageSquareQuote className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-sm sm:text-base font-black text-white uppercase tracking-wider font-sans">
            YOUR PITCH
          </h2>
          <p className="text-xs text-slate-300 font-medium mt-0.5">
            Consultative talking points for <strong className="text-white">{prospectRole}</strong> ({experienceLabel})
          </p>
        </div>
      </div>

      {/* Structured Pitch Pointers (Clean and readable without copy buttons) */}
      <div className="space-y-3.5">
        {talkingPoints.map((point, index) => (
          <div
            key={index}
            className="p-4 sm:p-4.5 rounded-2xl bg-surface border border-border/80 hover:border-brand-coral/40 transition-all flex items-start gap-3.5"
          >
            <span className="w-6 h-6 rounded-lg font-mono text-xs font-black bg-brand-coral/15 text-brand-coral border border-brand-coral/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              0{index + 1}
            </span>

            <p className="text-sm sm:text-[14.5px] text-slate-100 font-medium leading-relaxed">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
