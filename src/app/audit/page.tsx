'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, FileText, CheckCircle2, Award, BookOpen, Layers, Users, Wrench } from 'lucide-react';
import { AUDITABLE_OUTSKILL_FACTS } from '@/lib/knowledgeBase/auditableFacts';
import { OUTSKILL_TESTIMONIALS } from '@/lib/knowledgeBase/testimonials';
import { OUTSKILL_PROGRAMS } from '@/lib/knowledgeBase/programs';

export default function AuditPage() {
  const [activeTab, setActiveTab] = useState<'facts' | 'testimonials' | 'programs' | 'tools'>('facts');

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-surface border border-border hover:border-brand-cyan/40 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Sales Copilot</span>
            </Link>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" />
              <h1 className="text-sm font-bold text-white uppercase tracking-wider">
                Official Outskill Source Knowledge Base Audit
              </h1>
            </div>
          </div>
          <span className="text-[11px] font-mono text-brand-emerald bg-brand-emerald/10 px-2.5 py-1 rounded-full border border-brand-emerald/30">
            100% PDF Grounded
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Audit Disclaimer */}
        <div className="mb-6 p-4 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-cyan" />
              Primary Source Documents (Audited & Verified)
            </h2>
            <p className="text-xs text-slate-400">
              Extracted from 179 total pages across: <strong>1. AI Accelerator Program - India</strong> (70p), <strong>2. AI Accelerator Program - International</strong> (70p), <strong>3. Engineering Accelerator Brochure</strong> (39p).
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Zero Hallucinations Guarantee</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-border pb-3 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('facts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'facts'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-neon-cyan/20'
                : 'text-slate-400 hover:text-white bg-surface-card border border-border'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Audited Facts ({AUDITABLE_OUTSKILL_FACTS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'testimonials'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-neon-cyan/20'
                : 'text-slate-400 hover:text-white bg-surface-card border border-border'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Case Studies ({OUTSKILL_TESTIMONIALS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('programs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'programs'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-neon-cyan/20'
                : 'text-slate-400 hover:text-white bg-surface-card border border-border'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Program Tracks (3)</span>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'tools'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-neon-cyan/20'
                : 'text-slate-400 hover:text-white bg-surface-card border border-border'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Bonus Tool Stack (14+)</span>
          </button>
        </div>

        {/* TAB 1: AUDITED FACTS */}
        {activeTab === 'facts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AUDITABLE_OUTSKILL_FACTS.map((fact) => (
              <div
                key={fact.id}
                className="p-4 rounded-2xl bg-surface-card border border-border hover:border-brand-cyan/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface border border-border text-brand-cyan">
                      {fact.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-surface px-2 py-0.5 rounded border border-border">
                      {fact.source_document}, P.{fact.source_page}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-white mb-2 leading-relaxed">
                    {fact.claim}
                  </h3>

                  <div className="p-2.5 rounded-xl bg-surface/70 border border-border/60 text-[11px] text-slate-300 italic">
                    "{fact.exact_source_text}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: TESTIMONIALS */}
        {activeTab === 'testimonials' && (
          <div className="space-y-4">
            {OUTSKILL_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-5 rounded-2xl bg-surface-card border border-border hover:border-brand-cyan/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 border-b border-border pb-2.5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{t.person}</span>
                      {t.company && <span className="text-xs text-slate-400">· {t.company}</span>}
                    </div>
                    <div className="text-xs text-brand-cyan font-semibold">
                      {t.role} ({t.experience_years})
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-surface px-2.5 py-1 rounded border border-border">
                      {t.citation.source_document}, Page {t.citation.source_page}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-surface/60 border border-border/60">
                    <div className="text-[10px] font-bold text-brand-rose uppercase mb-1.5">
                      Before State
                    </div>
                    <ul className="space-y-1">
                      {t.before_state.map((b, i) => (
                        <li key={i} className="text-xs text-slate-400">• {b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
                    <div className="text-[10px] font-bold text-brand-cyan uppercase mb-1.5">
                      After State & Quantifiable Metric
                    </div>
                    <ul className="space-y-1">
                      {t.after_state.map((a, i) => (
                        <li key={i} className="text-xs text-slate-200 font-medium">• {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-surface text-xs text-slate-300 italic border border-border">
                  Outcome: "{t.business_career_result}"
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: PROGRAMS */}
        {activeTab === 'programs' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.values(OUTSKILL_PROGRAMS).map((prog) => (
              <div
                key={prog.id}
                className="p-5 rounded-2xl bg-surface-card border border-border flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-slate-400 bg-surface px-2 py-0.5 rounded border border-border mb-2 inline-block">
                    {prog.citation.source_document}, P.{prog.citation.source_page}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{prog.name}</h3>
                  <div className="text-xs font-semibold text-brand-cyan mb-3">
                    NSDC: {prog.nsdc_name}
                  </div>

                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    {prog.positioning}
                  </p>

                  <div className="mb-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Curriculum Sprints:
                    </div>
                    <div className="space-y-1">
                      {prog.sprints.map((s, i) => (
                        <div key={i} className="text-[11px] text-slate-300 leading-snug">
                          • {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border text-[11px] text-slate-400">
                  Target: {prog.target_audience}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: BONUS TOOLS */}
        {activeTab === 'tools' && (
          <div className="p-5 rounded-2xl bg-surface-card border border-border">
            <h3 className="text-sm font-bold text-white mb-2">
              Verified 1-Year AI Tool Access Included as Bonus (From Source PDFs)
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Directly verified from Page 47–60 of India & International PDFs and Page 34 of Engineering Brochure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: 'Supergrow', detail: '1 Year Access (Valued at $360 / ₹29,207)' },
                { name: 'Emily AI', detail: '1 Year Access included' },
                { name: 'Humanic AI', detail: '1 Year Access included' },
                { name: 'Fireflies AI', detail: '6 Months Access included' },
                { name: 'Phot.AI', detail: '1 Year Access included' },
                { name: 'Happenstance AI', detail: '1 Year Access included' },
                { name: 'GetMulti', detail: 'Lifetime Access with BYOK' },
                { name: 'Lyzr AI', detail: '1 Year Access included' },
                { name: 'Wispr Flow', detail: '1 Year Access included' },
                { name: 'Numerous AI', detail: '1 Year Access (Valued at $120/yr)' },
                { name: 'Superjoin', detail: '1 Year Access included' },
                { name: 'Getowl AI', detail: '1 Year Access included' },
                { name: 'Superprompts', detail: '1 Year Access included' },
                { name: 'HeyGen', detail: '1 Year Access (International Track)' },
                { name: 'Vapi AI', detail: 'Free Voice Credits (International Track)' }
              ].map((tool, i) => (
                <div key={i} className="p-3 rounded-xl bg-surface border border-border">
                  <div className="text-xs font-bold text-white">{tool.name}</div>
                  <div className="text-[11px] text-brand-cyan">{tool.detail}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
