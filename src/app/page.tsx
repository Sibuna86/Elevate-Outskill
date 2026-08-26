'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '@/components/Header';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ProfessionStepScreen } from '@/components/ProfessionStepScreen';
import { ExperienceStepScreen } from '@/components/ExperienceStepScreen';
import { IntelligenceDashboardScreen } from '@/components/IntelligenceDashboardScreen';
import { LiveCallCheatSheet } from '@/components/LiveCallCheatSheet';
import { AddProfessionModal } from '@/components/AddProfessionModal';
import { Toast } from '@/components/Toast';
import { DEFAULT_PROFESSIONS } from '@/lib/knowledgeBase/professions';
import { ExperienceLevel, Profession, SalesIntelligence } from '@/lib/types';
import { generateSalesIntelligenceMulti } from '@/lib/services/intelligenceEngine';

export type AppStep = 'welcome' | 'profession' | 'experience' | 'intelligence';

export default function ElevateApp() {
  const [currentStep, setCurrentStep] = useState<AppStep>('welcome');
  const [professions, setProfessions] = useState<Profession[]>(DEFAULT_PROFESSIONS);
  const [selectedProfessionIds, setSelectedProfessionIds] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceLevel | null>(null);
  const [intelligence, setIntelligence] = useState<SalesIntelligence | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingResearch, setIsLoadingResearch] = useState<boolean>(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Synchronize Step with Browser History (Google / Browser Back Button)
  const navigateToStep = useCallback((step: AppStep, replace = false) => {
    setCurrentStep(step);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('step', step);
      if (replace) {
        window.history.replaceState({ step }, '', url.toString());
      } else {
        window.history.pushState({ step }, '', url.toString());
      }
    }
  }, []);

  // Listen to Browser Back / Forward buttons
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const initialStep = (params.get('step') as AppStep) || 'welcome';
    setCurrentStep(initialStep);
    window.history.replaceState({ step: initialStep }, '', window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      const step = event.state?.step || (new URLSearchParams(window.location.search).get('step') as AppStep) || 'welcome';
      setCurrentStep(step);

      // When returning to welcome page via back button, clear previous selections for a fresh search
      if (step === 'welcome') {
        setSelectedProfessionIds([]);
        setSelectedExperience(null);
        setIntelligence(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Toggle multi-select profession
  const handleToggleProfession = (id: string) => {
    setSelectedProfessionIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelectSingleProfession = (id: string) => {
    setSelectedProfessionIds([id]);
  };

  const handleClearAllProfessions = () => {
    setSelectedProfessionIds([]);
    showToast('Cleared all selected roles');
  };

  // Generate Intelligence
  const handleGenerate = useCallback(
    async (forceLiveResearch = false) => {
      const selected = professions.filter((p) => selectedProfessionIds.includes(p.id));
      if (selected.length === 0 || !selectedExperience) return;

      setIsLoading(true);
      try {
        const result = await generateSalesIntelligenceMulti(selected, selectedExperience, forceLiveResearch);
        setIntelligence(result);
      } catch (err: any) {
        console.error(err);
        showToast('Unable to generate intelligence. Try again.', 'error');
      } finally {
        setIsLoading(false);
      }
    },
    [professions, selectedProfessionIds, selectedExperience]
  );

  // Handle live research refresh
  const handleRefreshLiveResearch = async () => {
    if (!intelligence) return;
    setIsLoadingResearch(true);
    try {
      const primaryId = selectedProfessionIds[0] || 'software_engineer';
      const res = await fetch('/api/live-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ professionId: primaryId })
      });
      const data = await res.json();
      if (data.startups) {
        setIntelligence((prev) =>
          prev
            ? {
                ...prev,
                relevant_startups: data.startups,
                research_metadata: {
                  ...prev.research_metadata,
                  startup_research_date: data.research_date,
                  is_live_research: true,
                  research_status_note: data.status_note
                }
              }
            : null
        );
        showToast(`Startups updated via live research (${data.research_date})`);
      }
    } catch (err) {
      showToast('Live research unavailable. Showing knowledge base results.', 'error');
    } finally {
      setIsLoadingResearch(false);
    }
  };

  // Add custom profession
  const handleAddProfession = async (newProf: Profession) => {
    setProfessions((prev) => [newProf, ...prev]);
    setSelectedProfessionIds([newProf.id]);
    showToast(`Added custom profession: ${newProf.name}`);
  };

  const selectedProfessions = professions.filter((p) => selectedProfessionIds.includes(p.id));

  // Reset flow to welcome & clear state
  const handleResetFlow = () => {
    setSelectedProfessionIds([]);
    setSelectedExperience(null);
    setIntelligence(null);
    navigateToStep('welcome');
    showToast('Reset to new search');
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col selection:bg-brand-coral/30 selection:text-white">
      {/* Toast Notification */}
      <Toast message={toastMessage} type={toastType} />

      {/* Header with Official Outskill Logo & Extreme Left Positioning */}
      <Header
        onReset={handleResetFlow}
        isCheatSheetOpen={isCheatSheetOpen}
        onToggleCheatSheet={() => setIsCheatSheetOpen(!isCheatSheetOpen)}
        hasIntelligence={Boolean(intelligence) && currentStep === 'intelligence'}
        currentStepName={currentStep}
      />

      {/* Main Multi-Step Views */}
      <main className="flex-1 w-full">
        {/* STEP 1: WELCOME SCREEN */}
        {currentStep === 'welcome' && (
          <WelcomeScreen
            onStart={() => {
              setSelectedProfessionIds([]);
              setSelectedExperience(null);
              navigateToStep('profession');
            }}
          />
        )}

        {/* STEP 2: CHOOSE PROFESSION (Categorized Dropdown & Search) */}
        {currentStep === 'profession' && (
          <ProfessionStepScreen
            professions={professions}
            selectedProfessionIds={selectedProfessionIds}
            onToggleProfession={handleToggleProfession}
            onSelectSingleProfession={handleSelectSingleProfession}
            onClearAllProfessions={handleClearAllProfessions}
            onNext={() => navigateToStep('experience')}
            onBack={() => handleResetFlow()}
            onOpenAddModal={() => setIsAddModalOpen(true)}
          />
        )}

        {/* STEP 3: CHOOSE YEARS OF EXPERIENCE */}
        {currentStep === 'experience' && (
          <ExperienceStepScreen
            selectedProfessions={selectedProfessions}
            selectedExperience={selectedExperience}
            onSelectExperience={(exp) => setSelectedExperience(exp)}
            onGenerate={async () => {
              await handleGenerate(false);
              navigateToStep('intelligence');
            }}
            onBack={() => navigateToStep('profession')}
            isLoading={isLoading}
          />
        )}

        {/* STEP 4: SALES INTELLIGENCE DASHBOARD */}
        {currentStep === 'intelligence' && intelligence && (
          <IntelligenceDashboardScreen
            intelligence={intelligence}
            onEditProspect={() => navigateToStep('profession')}
            onRefreshLiveResearch={handleRefreshLiveResearch}
            isLoadingResearch={isLoadingResearch}
          />
        )}
      </main>

      {/* Live Call Cheat-Sheet Drawer */}
      <LiveCallCheatSheet
        intelligence={intelligence}
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
        onCopyPitch={() => {}}
      />

      {/* Add Custom Profession Modal */}
      <AddProfessionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProfession={handleAddProfession}
      />
    </div>
  );
}
