'use client';

import React, { useState } from 'react';
import { ArrowLeft, Award, CheckCircle2, Copy, Check, ShieldCheck, Sparkles, Layers, Zap, Wrench } from 'lucide-react';
import { SalesIntelligence } from '@/lib/types';
import { VERIFIED_TOOL_STACK } from '@/lib/knowledgeBase/programs';
import { CaseStudyCard } from './CaseStudyCard';
import { OutskillConnectionCard } from './OutskillConnectionCard';

interface CurationScreenProps {
  intelligence: SalesIntelligence;
  onBack: () => void;
  onCopyFullBrief: () => void;
}

export function CurationScreen({ intelligence, onBack, onCopyFullBrief }: CurationScreenProps) {
  const [copied, setCopied] = useState(false);
  const p = intelligence.prospect;
  const roleName = p.selected_professions?.map((x) => x.name).join(' & ') || p.profession.name;

  const handleCopy = () => {
    onCopyFullBrief();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Top Navigation & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-surface-card border border-border p-4 rounded-2xl shadow-card-glow">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-surface border border-border hover:border-brand-cyan transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-brand-cyan" />
            <span>Back to Prospect &amp; Startups</span>
          </button>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>STEP 3: OUTSKILL CURATION &amp; AI TOOLS</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-mint/15 text-brand-mint border border-brand-mint/30 font-bold">
                100% PDF Grounded
              </span>
            </div>
            <p className="text-xs text-brand-coral font-semibold">
              Tailored for: {roleName} · {p.experience.label} ({p.experience.seniority_description})
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            copied
              ? 'bg-brand-mint text-slate-900 shadow-neon-mint'
              : 'bg-gradient-to-r from-brand-coral to-brand-cyan text-white shadow-neon-coral'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>COPIED FULL BRIEF</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>COPY FULL SALES BRIEF</span>
            </>
          )}
        </button>
      </div>

      {/* Grid: Case Study & Why Outskill */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Left Column: Verified Case Study (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          <CaseStudyCard testimonial={intelligence.matched_case_study} />
        </div>

        {/* Right Column: Why Outskill (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          <OutskillConnectionCard
            whyOutskill={intelligence.why_outskill_relevant}
            program={intelligence.matched_program}
          />
        </div>
      </div>

      {/* What AI Tools We Are Offering & How They Help */}
      <div className="p-6 rounded-2xl bg-surface-card border border-border mb-6 shadow-card-glow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-border pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-coral/15 text-brand-coral flex items-center justify-center border border-brand-coral/30">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                What AI Tools We Are Offering &amp; How They Help {roleName}
              </h3>
              <p className="text-xs text-slate-400">
                Official 1-year bonus licenses included with cohort enrollment (valued at over ₹1.5L+ / $3,000+)
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/30">
            Source: Pages 47–60 of Official Outskill PDFs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {VERIFIED_TOOL_STACK.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-surface border border-border/80 hover:border-brand-coral/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-brand-coral transition-colors">
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

                <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                  <strong className="text-slate-200">What it does: </strong>
                  {tool.what_it_does}
                </p>

                <div className="p-2.5 rounded-lg bg-surface-card border border-border/60 text-xs text-slate-300">
                  <strong className="text-brand-cyan">Why it helps the prospect: </strong>
                  {tool.how_it_helps_prospect}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Sprints Breakdown */}
      <div className="p-6 rounded-2xl bg-surface-card border border-border mb-6 shadow-card-glow">
        <div className="flex items-center justify-between gap-2 mb-3 border-b border-border pb-2.5">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-cyan" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Curriculum Sprints ({intelligence.matched_program.name})
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            {intelligence.matched_program.citation.source_document} (Page {intelligence.matched_program.citation.source_page})
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {intelligence.matched_program.sprints.map((s, i) => (
            <div key={i} className="p-3 rounded-xl bg-surface border border-border text-xs text-slate-200">
              <span className="text-brand-cyan font-bold block mb-1">Sprint 0{i + 1}</span>
              <span className="leading-snug">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-surface border border-border">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>&larr; Back to Prospect Intelligence &amp; Startups</span>
        </button>

        <button
          onClick={handleCopy}
          className="px-8 py-3 rounded-xl font-black text-xs uppercase tracking-wider text-slate-900 bg-brand-mint hover:bg-emerald-300 shadow-neon-mint transition-all flex items-center gap-2 cursor-pointer"
        >
          <Copy className="w-4 h-4" />
          <span>Copy Full Sales Brief for CRM / Slack</span>
        </button>
      </div>
    </div>
  );
}
