'use client';

import React from 'react';
import { X, Copy, Check, Zap, MessageSquareQuote, Target, Award, Building2 } from 'lucide-react';
import { SalesIntelligence } from '@/lib/types';

interface LiveCallCheatSheetProps {
  intelligence: SalesIntelligence | null;
  isOpen: boolean;
  onClose: () => void;
  onCopyPitch: () => void;
}

export function LiveCallCheatSheet({
  intelligence,
  isOpen,
  onClose,
  onCopyPitch
}: LiveCallCheatSheetProps) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !intelligence) return null;

  const handleCopy = () => {
    onCopyPitch();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-surface-card border-l-2 border-brand-cyan/40 shadow-2xl flex flex-col p-5 overflow-y-auto backdrop-blur-xl animate-in slide-in-from-right duration-200">
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              LIVE CALL CHEAT-SHEET
            </h2>
          </div>
          <p className="text-xs text-brand-cyan font-semibold">
            {intelligence.prospect.profession.name} · {intelligence.prospect.experience.label}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-surface border border-border hover:border-brand-cyan text-brand-cyan"
            title="Copy Pitch"
          >
            {copied ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface border border-border hover:border-slate-500 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 1. SAY THIS DIRECTLY (PITCH) */}
      <div className="mb-4 bg-surface p-3.5 rounded-xl border border-brand-cyan/30">
        <div className="text-[11px] font-bold text-brand-cyan uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          SAY THIS ON THE CALL (PITCH)
        </div>
        <div className="space-y-2">
          {intelligence.pitch_talking_points.map((pt, i) => (
            <p key={i} className="text-xs text-slate-100 font-medium leading-snug">
              • {pt}
            </p>
          ))}
        </div>
      </div>

      {/* 2. ASK & EXPLORE (PAIN POINTS) */}
      <div className="mb-4 bg-surface p-3 rounded-xl border border-border">
        <div className="text-[11px] font-bold text-brand-amber uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <Target className="w-3.5 h-3.5" />
          AREAS TO EXPLORE / QUESTIONS TO ASK
        </div>
        <div className="space-y-1.5">
          {intelligence.potential_areas_to_explore.map((pp, i) => (
            <p key={i} className="text-[11px] text-slate-300">
              ? {pp}
            </p>
          ))}
        </div>
      </div>

      {/* 3. CASE STUDY DROP */}
      <div className="mb-4 bg-surface p-3 rounded-xl border border-border">
        <div className="text-[11px] font-bold text-brand-emerald uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5" />
          PROOF POINT / CASE STUDY
        </div>
        <div className="text-xs text-slate-200">
          <span className="font-bold text-white">{intelligence.matched_case_study.person}</span> ({intelligence.matched_case_study.role}, {intelligence.matched_case_study.experience_years})
        </div>
        <div className="text-[11px] text-brand-emerald font-semibold mt-0.5">
          &rarr; {intelligence.matched_case_study.quantifiable_metrics[0] || intelligence.matched_case_study.business_career_result}
        </div>
        <div className="text-[10px] text-slate-400 mt-1 italic">
          Citation: {intelligence.matched_case_study.citation.source_document} (P.{intelligence.matched_case_study.citation.source_page})
        </div>
      </div>

      {/* 4. REAL STARTUPS TO MENTION */}
      <div className="bg-surface p-3 rounded-xl border border-border mb-4">
        <div className="text-[11px] font-bold text-brand-indigo uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5" />
          STARTUPS BUILDING IN THEIR SPACE
        </div>
        <div className="space-y-1">
          {intelligence.relevant_startups.slice(0, 3).map((st) => (
            <div key={st.id} className="text-[11px] text-slate-300">
              <span className="font-semibold text-white">{st.company_name}</span>: {st.short_description}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="w-full py-2 rounded-xl text-xs font-bold text-background bg-gradient-to-r from-brand-cyan to-brand-blue shadow-neon-cyan flex items-center justify-center gap-1.5"
      >
        <Copy className="w-3.5 h-3.5" />
        <span>{copied ? 'PITCH COPIED' : 'COPY PITCH TO CLIPBOARD'}</span>
      </button>
    </div>
  );
}
