'use client';

import React from 'react';
import { ArrowRight, Target, Building2, Award } from 'lucide-react';
import { VantaTopologyBackground } from './VantaTopologyBackground';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 px-4 overflow-hidden">
      {/* Vanta.js Topology Background Animation (p5.js + vanta.topology) */}
      <VantaTopologyBackground color={0x4e9678} backgroundColor={0x080a0f} />

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-in fade-in zoom-in-95 duration-300">
        {/* Prominent Outskill Elevate in Center */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-neon-coral border-2 border-border flex-shrink-0 bg-black">
            <img
              src="/outskill-logo.png"
              alt="Outskill Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-sm sm:text-base font-black tracking-[0.25em] text-[#A3E635] font-mono">
              OUTSKILL
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
              ELEVATE
            </div>
          </div>
        </div>

        {/* Clean Original Title & Briefing */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4 font-sans">
          Hi, welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral via-brand-coral-light to-[#A3E635]">Elevate</span>.
        </h1>

        <p className="text-base sm:text-lg text-slate-200 font-semibold leading-relaxed mb-3">
          The sales intelligence tool that helps you improve your pitch in between and during live sales calls.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
          Surrounds you with exact AI opportunities, potential pain points, and active startups in the prospect's field so your pitch is instant, credible, and consultative.
        </p>

        {/* 3 Ultra-Short, Crisp Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
          <div className="p-5 rounded-2xl bg-surface-card/80 backdrop-blur-md border border-border hover:border-brand-coral/50 transition-all shadow-card-glow group">
            <div className="w-8 h-8 rounded-xl bg-brand-coral/15 text-brand-coral flex items-center justify-center border border-brand-coral/30 mb-3 group-hover:scale-110 transition-transform">
              <Target className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              1. Know the Prospect
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Tailor by role &amp; seniority across 45+ professions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-card/80 backdrop-blur-md border border-border hover:border-brand-cyan/50 transition-all shadow-card-glow group">
            <div className="w-8 h-8 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center border border-brand-cyan/30 mb-3 group-hover:scale-110 transition-transform">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              2. Real Startups &amp; Pitch
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Instant conversational pitch points and active domain startups.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-card/80 backdrop-blur-md border border-border hover:border-[#A3E635]/50 transition-all shadow-card-glow group">
            <div className="w-8 h-8 rounded-xl bg-[#A3E635]/15 text-[#A3E635] flex items-center justify-center border border-[#A3E635]/30 mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              3. Outskill AI Tool Stack
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Curated track, verified case study, and 1-year AI tool bonus stack.
            </p>
          </div>
        </div>

        {/* Interactive CTA Button with Motion */}
        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="px-10 py-4 sm:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-coral via-brand-coral-light to-brand-cyan hover:from-brand-coral-light hover:to-cyan-400 shadow-neon-coral hover:shadow-neon-cyan transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Get Started &amp; Choose Profession</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
