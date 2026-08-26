'use client';

import React from 'react';
import { Award, CheckCircle, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';
import { Testimonial } from '@/lib/types';

interface CaseStudyCardProps {
  testimonial: Testimonial;
}

export function CaseStudyCard({ testimonial }: CaseStudyCardProps) {
  return (
    <div className="bg-gradient-to-br from-surface-card to-brand-blue/5 border border-border rounded-2xl p-5 shadow-card-glow hover:border-brand-cyan/40 transition-all flex flex-col h-full">
      {/* Header with Auditable Citation Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center border border-brand-cyan/40">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              RELEVANT OUTSKILL CASE STUDY
            </h3>
            <p className="text-[11px] text-slate-400">
              Verified outcome from official cohort records
            </p>
          </div>
        </div>

        {/* Source citation */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface border border-border text-[10px] font-mono text-slate-400">
          <FileCheck className="w-3 h-3 text-brand-cyan" />
          <span>
            {testimonial.citation.source_document}, P.{testimonial.citation.source_page}
          </span>
        </div>
      </div>

      {/* Person details */}
      <div className="flex items-center justify-between gap-3 mb-3 bg-surface/60 p-2.5 rounded-xl border border-border/60">
        <div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <span>{testimonial.person}</span>
            {testimonial.company && (
              <span className="text-[11px] font-normal text-slate-400">· {testimonial.company}</span>
            )}
          </div>
          <div className="text-[11px] text-brand-cyan font-medium">
            {testimonial.role} ({testimonial.experience_years} exp)
          </div>
        </div>
        {testimonial.quantifiable_metrics.length > 0 && (
          <div className="text-right">
            <span className="inline-block px-2 py-0.5 rounded-md bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30 text-[10px] font-bold">
              {testimonial.quantifiable_metrics[0]}
            </span>
          </div>
        )}
      </div>

      {/* Before & After comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-3 flex-1">
        {/* Before */}
        <div className="p-2.5 rounded-xl bg-surface/40 border border-border/60">
          <div className="text-[10px] font-bold uppercase tracking-wider text-brand-rose mb-1.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
            BEFORE OUTSKILL
          </div>
          <ul className="space-y-1">
            {testimonial.before_state.map((b, idx) => (
              <li key={idx} className="text-[11px] text-slate-400 leading-snug">
                • {b}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="p-2.5 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
          <div className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan mb-1.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            AFTER OUTSKILL
          </div>
          <ul className="space-y-1">
            {testimonial.after_state.map((a, idx) => (
              <li key={idx} className="text-[11px] text-slate-200 font-medium leading-snug">
                • {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Career Result Quote */}
      <div className="text-[11px] text-slate-300 bg-surface/80 p-2 rounded-lg border border-border/80 italic">
        "{testimonial.business_career_result}"
      </div>
    </div>
  );
}
