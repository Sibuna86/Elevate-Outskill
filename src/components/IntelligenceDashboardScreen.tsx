'use client';

import React from 'react';
import { Edit3 } from 'lucide-react';
import { SalesIntelligence } from '@/lib/types';
import { PitchSection } from './PitchSection';
import { OpportunitiesCard } from './OpportunitiesCard';
import { PainPointsCard } from './PainPointsCard';
import { StartupsCard } from './StartupsCard';
import { RelevantAiToolsCard } from './RelevantAiToolsCard';

interface IntelligenceDashboardScreenProps {
  intelligence: SalesIntelligence;
  onEditProspect: () => void;
  onRefreshLiveResearch: () => Promise<void>;
  isLoadingResearch: boolean;
}

export function IntelligenceDashboardScreen({
  intelligence,
  onEditProspect,
  onRefreshLiveResearch,
  isLoadingResearch,
}: IntelligenceDashboardScreenProps) {
  const p = intelligence.prospect;
  const selectedProfs = p.selected_professions || [p.profession];
  const roleName = selectedProfs.map((x) => x.name).join(' & ');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Active Prospect Profile Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 bg-surface-card border border-border rounded-2xl mb-6 shadow-card-glow">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="w-2.5 h-2.5 rounded-full bg-[#A3E635] animate-pulse" />
          <span className="text-xs font-mono font-bold text-slate-400">PROSPECT:</span>
          <span className="text-sm sm:text-base font-extrabold text-white font-sans">
            {roleName}
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-xs font-bold text-[#A3E635] bg-[#A3E635]/15 px-2.5 py-0.5 rounded-md border border-[#A3E635]/30 font-mono">
            {p.experience.label}
          </span>
        </div>

        <button
          onClick={onEditProspect}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-surface border border-border hover:border-brand-coral transition-all cursor-pointer w-fit"
        >
          <Edit3 className="w-3.5 h-3.5 text-brand-coral" />
          <span>Edit Role / Experience</span>
        </button>
      </div>

      {/* Main Intelligence Grid */}
      <div className="space-y-6">
        {/* 1. YOUR PITCH (Sharp, consultative talk-track pointers without copy buttons) */}
        <PitchSection
          talkingPoints={intelligence.pitch_talking_points}
          prospectRole={roleName}
          experienceLabel={p.experience.label}
        />

        {/* 2. AI OPPORTUNITIES & 3. POTENTIAL AREAS TO EXPLORE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <OpportunitiesCard
            opportunities={intelligence.ai_opportunities}
            prospectRole={roleName}
          />
          <PainPointsCard
            painPoints={intelligence.potential_areas_to_explore}
            experienceLabel={p.experience.label}
          />
        </div>

        {/* 4. RELEVANT REAL STARTUPS */}
        <StartupsCard
          startups={intelligence.relevant_startups}
          professionName={roleName}
          researchDate={intelligence.research_metadata.startup_research_date}
          isLiveResearch={intelligence.research_metadata.is_live_research}
          onRefreshLiveResearch={onRefreshLiveResearch}
          isLoadingResearch={isLoadingResearch}
        />

        {/* 5. RELEVANT AI TOOLS OFFERED (Filtered to only role-relevant tools) */}
        <RelevantAiToolsCard professions={selectedProfs} />
      </div>
    </div>
  );
}
