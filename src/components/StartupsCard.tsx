'use client';

import React, { useState } from 'react';
import { Building2, ExternalLink, RefreshCw, Sparkles } from 'lucide-react';
import { Startup } from '@/lib/types';

interface StartupsCardProps {
  startups: Startup[];
  professionName: string;
  researchDate: string;
  isLiveResearch: boolean;
  onRefreshLiveResearch: () => Promise<void>;
  isLoadingResearch?: boolean;
}

export function StartupsCard({
  startups,
  professionName,
  researchDate,
  isLiveResearch,
  onRefreshLiveResearch,
  isLoadingResearch
}: StartupsCardProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefreshLiveResearch();
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="bg-surface-card border border-border rounded-2xl p-5 shadow-card-glow hover:border-brand-cyan/40 transition-all flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-border pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-brand-cyan/15 text-brand-cyan flex items-center justify-center border border-brand-cyan/30">
            <Building2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                RELEVANT REAL STARTUPS
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface border border-border text-brand-cyan font-mono">
                {startups.length} Verified Companies
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Active companies building AI solutions in {professionName} space
            </p>
          </div>
        </div>

        {/* Live Research Button */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-slate-400 bg-surface px-2 py-1 rounded border border-border">
            Updated: {researchDate}
          </span>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing || isLoadingResearch}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold bg-surface border border-border hover:border-brand-cyan text-slate-200 hover:text-white transition-all disabled:opacity-50 cursor-pointer"
            title="Search live web data for latest startup activity"
          >
            <RefreshCw className={`w-3 h-3 text-brand-cyan ${isRefreshing || isLoadingResearch ? 'animate-spin' : ''}`} />
            <span>{isRefreshing || isLoadingResearch ? 'Searching...' : 'Research Latest'}</span>
          </button>
        </div>
      </div>

      {/* Startup Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
        {startups.map((startup) => (
          <div
            key={startup.id}
            className="p-3.5 rounded-xl bg-surface border border-border/80 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors truncate">
                    {startup.company_name}
                  </span>
                  {startup.source.includes('Official') && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-coral/15 text-brand-coral border border-brand-coral/30 font-medium">
                      Bonus Tool
                    </span>
                  )}
                </div>
                <a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-cyan flex items-center gap-0.5 text-[11px] font-semibold"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-[11px] text-slate-300 mb-1 leading-snug">
                <span className="font-semibold text-slate-200">What they do: </span>
                {startup.short_description}
              </p>

              <p className="text-[11px] text-slate-400 leading-snug">
                <span className="font-semibold text-slate-300">Why it matters: </span>
                {startup.why_relevant}
              </p>

              {startup.recent_activity && (
                <div className="mt-2 pt-1.5 border-t border-border/50 text-[10px] text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-brand-cyan flex-shrink-0" />
                  <span className="truncate">{startup.recent_activity}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
