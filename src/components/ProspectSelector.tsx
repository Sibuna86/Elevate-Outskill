'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown, Plus, Check, Briefcase, X, Zap, Layers } from 'lucide-react';
import { ExperienceLevel, Profession } from '@/lib/types';

interface ProspectSelectorProps {
  professions: Profession[];
  selectedProfessionIds: string[];
  selectedExperience: ExperienceLevel;
  onToggleProfession: (id: string) => void;
  onSelectSingleProfession: (id: string) => void;
  onSelectExperience: (exp: ExperienceLevel) => void;
  onGenerate: () => void;
  onOpenAddModal: () => void;
  isLoading: boolean;
}

const EXPERIENCE_OPTIONS: { id: ExperienceLevel; label: string; sub: string }[] = [
  { id: '1-3', label: '1–3 years', sub: 'Early Career' },
  { id: '3-5', label: '3–5 years', sub: 'Mid-Level' },
  { id: '5-10', label: '5–10 years', sub: 'Lead / Senior' },
  { id: '10+', label: '10+ years', sub: 'Principal / Exec' },
];

const PRESETS: { label: string; professionIds: string[]; experienceId: ExperienceLevel }[] = [
  { label: 'Sr. Software Engineer (10+y)', professionIds: ['software_engineer'], experienceId: '10+' },
  { label: 'Growth Marketer & Sales (3–5y)', professionIds: ['marketing_professional', 'sales_professional'], experienceId: '3-5' },
  { label: 'Data & Business Analyst (5–10y)', professionIds: ['data_analyst', 'business_analyst'], experienceId: '5-10' },
  { label: 'Architect (5–10y)', professionIds: ['architect'], experienceId: '5-10' },
  { label: 'Lawyer / Legal (10+y)', professionIds: ['lawyer_legal'], experienceId: '10+' },
  { label: 'Founder & Tech Lead (10+y)', professionIds: ['founder', 'software_engineer'], experienceId: '10+' },
  { label: 'Junior Dev (1–3y)', professionIds: ['software_developer'], experienceId: '1-3' },
];

export function ProspectSelector({
  professions,
  selectedProfessionIds,
  selectedExperience,
  onToggleProfession,
  onSelectSingleProfession,
  onSelectExperience,
  onGenerate,
  onOpenAddModal,
  isLoading
}: ProspectSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(selectedProfessionIds.length > 1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedProfessions = useMemo(
    () => professions.filter((p) => selectedProfessionIds.includes(p.id)),
    [professions, selectedProfessionIds]
  );

  const filteredProfessions = useMemo(() => {
    if (!searchQuery.trim()) return professions;
    const q = searchQuery.toLowerCase();
    return professions.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [professions, searchQuery]);

  // Group by category
  const groupedProfessions = useMemo(() => {
    const map = new Map<string, Profession[]>();
    for (const p of filteredProfessions) {
      const cat = p.category;
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(p);
    }
    return Array.from(map.entries());
  }, [filteredProfessions]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-surface-card border border-border rounded-2xl p-5 sm:p-6 shadow-card-glow mb-6">
      {/* Top row: Section title + presets */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-coral/15 text-brand-coral flex items-center justify-center border border-brand-coral/30">
            <Briefcase className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">
              PROSPECT PROFILE & EXPERIENCE
            </h2>
            <p className="text-[11px] text-slate-400">
              Configure role and seniority to generate tailored live call intelligence
            </p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap mr-1">Presets:</span>
          {PRESETS.map((preset) => {
            const isMatch =
              preset.professionIds.length === selectedProfessionIds.length &&
              preset.professionIds.every((id) => selectedProfessionIds.includes(id)) &&
              preset.experienceId === selectedExperience;
            return (
              <button
                key={preset.label}
                onClick={() => {
                  if (preset.professionIds.length === 1) {
                    onSelectSingleProfession(preset.professionIds[0]);
                  } else {
                    preset.professionIds.forEach((id) => {
                      if (!selectedProfessionIds.includes(id)) onToggleProfession(id);
                    });
                  }
                  onSelectExperience(preset.experienceId);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                  isMatch
                    ? 'bg-brand-coral/20 text-brand-coral border border-brand-coral/40 font-semibold'
                    : 'bg-surface text-slate-400 hover:text-slate-200 border border-border hover:border-slate-600'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
        {/* STEP 1: Profession Selector */}
        <div className="lg:col-span-6 relative" ref={dropdownRef}>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-brand-coral/20 text-brand-coral text-[10px] flex items-center justify-center font-bold">1</span>
              CHOOSE PROFESSION ({selectedProfessions.length} selected)
            </label>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMultiSelectMode(!isMultiSelectMode)}
                className={`text-[11px] px-2 py-0.5 rounded border transition-all ${
                  isMultiSelectMode
                    ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/40 font-semibold'
                    : 'bg-surface text-slate-400 border-border hover:text-white'
                }`}
                title="Toggle combining multiple professions (e.g. Marketing + Sales)"
              >
                {isMultiSelectMode ? '✓ Multi-Select Enabled' : '+ Multi-Select'}
              </button>
              <button
                onClick={onOpenAddModal}
                className="text-[11px] text-brand-coral hover:underline flex items-center gap-0.5"
              >
                <Plus className="w-3 h-3" /> Custom
              </button>
            </div>
          </div>

          {/* Main Dropdown Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2 rounded-xl bg-surface border border-border hover:border-brand-coral/40 text-left transition-all group focus:outline-none focus:ring-1 focus:ring-brand-coral"
          >
            <div className="flex items-center gap-1.5 flex-wrap flex-1 pr-2">
              {selectedProfessions.length === 0 ? (
                <span className="text-xs text-slate-500">Select one or more professions...</span>
              ) : (
                selectedProfessions.map((p) => (
                  <span
                    key={p.id}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-coral/15 text-brand-coral border border-brand-coral/30 text-xs font-semibold"
                  >
                    <span>{p.name}</span>
                    {selectedProfessions.length > 1 && (
                      <X
                        className="w-3 h-3 hover:text-white cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleProfession(p.id);
                        }}
                      />
                    )}
                  </span>
                ))
              )}
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-surface-card border border-border-light rounded-xl shadow-2xl overflow-hidden max-h-96 flex flex-col">
              {/* Search input inside dropdown */}
              <div className="p-2.5 border-b border-border bg-surface">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 30+ professions (e.g. Marketing, Developer, Architect)..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-surface-card border border-border text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-coral"
                    autoFocus
                  />
                </div>
              </div>

              {/* Grouped list */}
              <div className="overflow-y-auto p-2 space-y-3 max-h-80">
                {groupedProfessions.length === 0 ? (
                  <div className="py-6 text-center text-xs text-slate-400">
                    No profession found matching "{searchQuery}"
                  </div>
                ) : (
                  groupedProfessions.map(([category, items]) => (
                    <div key={category}>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                        {category}
                      </div>
                      <div className="space-y-0.5">
                        {items.map((p) => {
                          const isSelected = selectedProfessionIds.includes(p.id);
                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                if (isMultiSelectMode) {
                                  onToggleProfession(p.id);
                                } else {
                                  onSelectSingleProfession(p.id);
                                  setIsOpen(false);
                                  setSearchQuery('');
                                }
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                                isSelected
                                  ? 'bg-brand-coral/20 text-brand-coral font-bold'
                                  : 'text-slate-300 hover:bg-surface hover:text-white'
                              }`}
                            >
                              <span>{p.name}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-brand-coral" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {isMultiSelectMode && (
                <div className="p-2 border-t border-border bg-surface flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-1 bg-brand-coral text-white rounded-lg text-xs font-bold"
                  >
                    Done Selecting ({selectedProfessions.length})
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* STEP 2: Experience Selector */}
        <div className="lg:col-span-4">
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-brand-cyan/20 text-brand-cyan text-[10px] flex items-center justify-center font-bold">2</span>
            EXPERIENCE LEVEL
          </label>

          <div className="grid grid-cols-4 gap-1.5">
            {EXPERIENCE_OPTIONS.map((opt) => {
              const isSelected = opt.id === selectedExperience;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onSelectExperience(opt.id)}
                  className={`py-2 px-1 rounded-xl text-center border transition-all flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-gradient-to-b from-brand-cyan/20 to-brand-cyan/10 border-brand-cyan text-white shadow-neon-cyan/40 font-bold'
                      : 'bg-surface border-border text-slate-400 hover:text-slate-200 hover:border-slate-600'
                  }`}
                >
                  <span className="text-xs font-bold leading-tight">{opt.id}</span>
                  <span className="text-[9px] text-slate-400 truncate max-w-full">{opt.sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 3: Generate Button */}
        <div className="lg:col-span-2">
          <button
            type="button"
            onClick={onGenerate}
            disabled={isLoading || selectedProfessionIds.length === 0}
            className="w-full h-[44px] px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-coral to-brand-coral-light hover:from-brand-coral-light hover:to-orange-400 shadow-neon-coral transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Zap className="w-4 h-4 fill-current" />
                <span>GENERATE</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
