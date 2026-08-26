'use client';

import React from 'react';
import { Layers, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  isCheatSheetOpen?: boolean;
  onToggleCheatSheet?: () => void;
  hasIntelligence?: boolean;
  currentStepName?: string;
}

export function Header({
  onReset,
  isCheatSheetOpen,
  onToggleCheatSheet,
  hasIntelligence,
  currentStepName
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Extreme Left: Outskill Logo + OUTSKILL ELEVATE */}
        <div className="flex items-center">
          <button
            onClick={onReset}
            className="flex items-center gap-3 text-left group cursor-pointer"
            title="Return to Welcome Home"
          >
            {/* Official Outskill 3x3 Matrix Logo */}
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-card-glow border border-border group-hover:scale-105 transition-transform flex-shrink-0 bg-black">
              <img
                src="/outskill-logo.png"
                alt="Outskill Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-wider text-[#A3E635] font-mono">
                OUTSKILL
              </span>
              <span className="text-base font-extrabold tracking-tight text-white font-sans">
                ELEVATE
              </span>
            </div>
          </button>
        </div>

        {/* Action Controls (Clean without Copy buttons) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {hasIntelligence && (
            <button
              onClick={onToggleCheatSheet}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isCheatSheetOpen
                  ? 'bg-brand-coral text-white border-brand-coral shadow-neon-coral'
                  : 'bg-surface text-slate-300 border-border hover:border-brand-coral'
              }`}
              title="Toggle Ultra-Compact Live Call View"
            >
              <Layers className="w-3.5 h-3.5 text-brand-coral" />
              <span className="hidden sm:inline">Call Cheat-Sheet</span>
            </button>
          )}

          <button
            onClick={onReset}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-surface border border-border hover:border-slate-500 transition-all cursor-pointer"
            title="Restart Sales Flow"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
