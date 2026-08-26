'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, Check, Zap } from 'lucide-react';
import { ExperienceLevel, Profession } from '@/lib/types';

interface ExperienceStepScreenProps {
  selectedProfessions: Profession[];
  selectedExperience: ExperienceLevel | null;
  onSelectExperience: (exp: ExperienceLevel) => void;
  onGenerate: () => void;
  onBack: () => void;
  isLoading: boolean;
}

const CLEAN_EXPERIENCE_OPTIONS: { id: ExperienceLevel; label: string }[] = [
  { id: '1-3', label: '1–3 years' },
  { id: '3-5', label: '3–5 years' },
  { id: '5-10', label: '5–10 years' },
  { id: '10+', label: 'More than 10 years' },
];

export function ExperienceStepScreen({
  selectedProfessions,
  selectedExperience,
  onSelectExperience,
  onGenerate,
  onBack,
  isLoading
}: ExperienceStepScreenProps) {
  const roleName = selectedProfessions.map((p) => p.name).join(' & ') || 'Selected Role';

  return (
    <div className="max-w-3xl mx-auto py-8 sm:py-14 px-4 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-3 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-surface border border-border hover:border-slate-600 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Change Role ({roleName})</span>
        </button>

        <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/30">
          STEP 2 OF 2: YEARS OF EXPERIENCE
        </span>
      </div>

      {/* Clean Minimal Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 font-sans">
          Years of Experience
        </h1>
        <p className="text-sm text-slate-400">
          Select the seniority level for <strong className="text-white">{roleName}</strong>
        </p>
      </div>

      {/* 4 Clean, Spacious, Clickable Cards (No auto-redirect) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {CLEAN_EXPERIENCE_OPTIONS.map((opt) => {
          const isSelected = selectedExperience === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectExperience(opt.id)}
              className={`p-6 sm:p-8 rounded-3xl text-center border-2 transition-all cursor-pointer flex items-center justify-between group ${
                isSelected
                  ? 'bg-surface-card border-brand-coral shadow-neon-coral scale-[1.02]'
                  : 'bg-surface-card/60 border-border hover:border-slate-600 hover:bg-surface-card'
              }`}
            >
              <span className={`text-xl sm:text-2xl font-black tracking-tight transition-colors ${
                isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
              }`}>
                {opt.label}
              </span>

              <div className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all ${
                isSelected
                  ? 'bg-brand-coral text-white border-brand-coral shadow-neon-coral'
                  : 'border-border text-transparent group-hover:border-slate-500'
              }`}>
                <Check className="w-5 h-5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
        >
          &larr; Back to Role Selection
        </button>

        <button
          onClick={onGenerate}
          disabled={isLoading || !selectedExperience}
          className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-coral via-brand-coral-light to-brand-cyan hover:from-brand-coral-light hover:to-cyan-400 shadow-neon-coral transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer disabled:opacity-40"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Zap className="w-4 h-4 fill-current" />
              <span>Generate Sales Intelligence</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
