'use client';

import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, ArrowLeft, Check, Plus, X, Trash2 } from 'lucide-react';
import { Profession } from '@/lib/types';

interface ProfessionStepScreenProps {
  professions: Profession[];
  selectedProfessionIds: string[];
  onToggleProfession: (id: string) => void;
  onSelectSingleProfession: (id: string) => void;
  onClearAllProfessions: () => void;
  onNext: () => void;
  onBack: () => void;
  onOpenAddModal: () => void;
}

export function ProfessionStepScreen({
  professions,
  selectedProfessionIds,
  onToggleProfession,
  onSelectSingleProfession,
  onClearAllProfessions,
  onNext,
  onBack,
  onOpenAddModal,
}: ProfessionStepScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');

  const selectedProfessions = useMemo(
    () => professions.filter((p) => selectedProfessionIds.includes(p.id)),
    [professions, selectedProfessionIds]
  );

  // All distinct categories
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    professions.forEach((p) => set.add(p.category));
    return ['ALL', ...Array.from(set)];
  }, [professions]);

  const filteredProfessions = useMemo(() => {
    return professions.filter((p) => {
      const matchesCat = selectedCategoryFilter === 'ALL' || p.category === selectedCategoryFilter;
      if (!matchesCat) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [professions, selectedCategoryFilter, searchQuery]);

  // Group by category
  const groupedCategories = useMemo(() => {
    const map = new Map<string, Profession[]>();
    for (const p of filteredProfessions) {
      const cat = p.category;
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(p);
    }
    return Array.from(map.entries());
  }, [filteredProfessions]);

  return (
    <div className="max-w-5xl mx-auto py-6 sm:py-10 px-4 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-surface border border-border hover:border-slate-600 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="text-xs font-mono font-bold text-brand-coral bg-brand-coral/10 px-3.5 py-1 rounded-full border border-brand-coral/30">
          STEP 1 OF 2: PROSPECT PROFESSION
        </span>
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 font-sans">
          What is the prospect's profession?
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Filter by category or search to select one or multiple roles (e.g. Marketing + Sales).
        </p>
      </div>

      {/* Search & Clean Category Dropdown Filters */}
      <div className="bg-surface-card border border-border p-5 rounded-3xl mb-6 shadow-card-glow">
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all fields (e.g. Influencer Marketing, Developer, Architect)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-surface border border-border text-white placeholder-slate-500 focus:outline-none focus:border-brand-coral transition-colors"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Clean Category Dropdown Select (No file icons) */}
          <div className="w-full sm:w-64">
            <select
              value={selectedCategoryFilter}
              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-surface border border-border text-slate-200 font-semibold focus:outline-none focus:border-brand-coral cursor-pointer"
            >
              {allCategories.map((cat) => (
                <option key={cat} value={cat} className="bg-surface-card text-white">
                  {cat === 'ALL' ? 'All Categories (45+ Roles)' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {selectedProfessionIds.length > 0 && (
              <button
                type="button"
                onClick={onClearAllProfessions}
                className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-brand-rose bg-brand-rose/10 border border-brand-rose/30 hover:bg-brand-rose/20 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Un-choose all selected roles"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear ({selectedProfessionIds.length})</span>
              </button>
            )}

            <button
              type="button"
              onClick={onOpenAddModal}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-brand-coral bg-brand-coral/10 border border-brand-coral/30 hover:bg-brand-coral/20 transition-all flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Custom Role</span>
            </button>
          </div>
        </div>

        {/* Selected Roles Chips */}
        {selectedProfessions.length > 0 ? (
          <div className="pt-3 border-t border-border/80 flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Selected ({selectedProfessions.length}):
            </span>
            {selectedProfessions.map((p) => (
              <button
                key={p.id}
                onClick={() => onToggleProfession(p.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-coral/20 text-brand-coral border border-brand-coral/40 text-xs font-bold hover:bg-brand-rose/20 hover:text-brand-rose hover:border-brand-rose/40 transition-all cursor-pointer group"
                title="Click to unselect"
              >
                <span>{p.name}</span>
                <X className="w-3 h-3 text-brand-coral group-hover:text-brand-rose" />
              </button>
            ))}
          </div>
        ) : (
          <div className="pt-3 border-t border-border/80 text-xs text-slate-500 italic">
            No profession selected yet. Choose one or multiple roles from the category lists below.
          </div>
        )}
      </div>

      {/* Categorized Fields Grid (Clean headers without file icons) */}
      <div className="space-y-4 mb-8 max-h-[460px] overflow-y-auto pr-1">
        {groupedCategories.length === 0 ? (
          <div className="py-12 text-center text-sm text-slate-400 bg-surface-card rounded-2xl border border-border">
            No professions found matching "{searchQuery}" in {selectedCategoryFilter}.
          </div>
        ) : (
          groupedCategories.map(([category, items]) => (
            <div key={category} className="bg-surface-card/60 p-4 rounded-2xl border border-border">
              <div className="flex items-center justify-between gap-2 mb-3 border-b border-border/60 pb-2">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  {category}
                </h3>
                <span className="text-[10px] font-mono text-slate-500">
                  {items.length} Roles
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {items.map((p) => {
                  const isSelected = selectedProfessionIds.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onToggleProfession(p.id)}
                      className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between text-xs font-medium cursor-pointer ${
                        isSelected
                          ? 'bg-brand-coral/20 border-brand-coral text-brand-coral font-bold shadow-sm'
                          : 'bg-surface border-border/80 text-slate-300 hover:border-brand-coral/40 hover:text-white'
                      }`}
                    >
                      <span className="truncate pr-1 font-semibold">{p.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-brand-coral flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Continue Action Button */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-slate-400">
          {selectedProfessionIds.length === 0
            ? 'Please select at least 1 profession to proceed'
            : `${selectedProfessionIds.length} profession(s) selected`}
        </span>

        <button
          onClick={onNext}
          disabled={selectedProfessionIds.length === 0}
          className="px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-coral via-brand-coral-light to-brand-cyan hover:from-brand-coral-light hover:to-cyan-400 shadow-neon-coral transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer disabled:opacity-40"
        >
          <span>Continue to Experience</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
