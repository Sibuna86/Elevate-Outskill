'use client';

import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { Profession, ProfessionCategory } from '@/lib/types';

interface AddProfessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProfession: (profession: Profession) => Promise<void>;
}

const CATEGORIES: ProfessionCategory[] = [
  'Engineering & Technology',
  'Data & Analytics',
  'Product & Project Management',
  'Marketing & Growth',
  'Sales & Business Development',
  'HR & Recruitment',
  'Finance & Banking',
  'Consulting & Strategy',
  'Leadership & Entrepreneurship',
  'Operations & Support',
  'Core Engineering & Architecture',
  'Specialized Fields'
];

export function AddProfessionModal({ isOpen, onClose, onAddProfession }: AddProfessionModalProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<ProfessionCategory>('Engineering & Technology');
  const [track, setTrack] = useState<'engineering' | 'generalist_india' | 'generalist_international'>('generalist_india');
  const [aiUseCase1, setAiUseCase1] = useState('');
  const [aiUseCase2, setAiUseCase2] = useState('');
  const [aiUseCase3, setAiUseCase3] = useState('');
  const [painPoint1, setPainPoint1] = useState('');
  const [painPoint2, setPainPoint2] = useState('');
  const [industryTrend, setIndustryTrend] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    const newProf: Profession = {
      id,
      name: name.trim(),
      category,
      recommended_track: track,
      ai_use_cases: [
        aiUseCase1.trim() || `Automate repetitive workflows and task execution in ${name}.`,
        aiUseCase2.trim() || `Build domain-specific AI agents and assistants for ${name} projects.`,
        aiUseCase3.trim() || `Leverage multimodal AI tools to speed up research and deliverables.`
      ],
      potential_pain_points: [
        painPoint1.trim() || `Time-consuming manual tasks consuming bandwidth in ${name}.`,
        painPoint2.trim() || `Difficulty transitioning from generic AI tools to custom workflows.`
      ],
      industry_trend:
        industryTrend.trim() ||
        `${name} is experiencing rapid AI integration, moving from ad-hoc prompting into automated agentic workflows.`,
      keywords: [name.toLowerCase(), category.toLowerCase(), 'ai', 'automation']
    };

    setIsSubmitting(true);
    try {
      await onAddProfession(newProf);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-surface-card border border-border rounded-2xl shadow-2xl p-6 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-brand-cyan" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Add New Profession
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white bg-surface border border-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Profession Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Cybersecurity Analyst, Supply Chain Director"
              className="w-full px-3 py-2 text-xs rounded-xl bg-surface border border-border text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProfessionCategory)}
                className="w-full px-2.5 py-2 text-xs rounded-xl bg-surface border border-border text-white focus:outline-none focus:border-brand-cyan"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Recommended Track
              </label>
              <select
                value={track}
                onChange={(e) => setTrack(e.target.value as any)}
                className="w-full px-2.5 py-2 text-xs rounded-xl bg-surface border border-border text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="engineering">AI Engineering Accelerator</option>
                <option value="generalist_india">AI Generalist (India)</option>
                <option value="generalist_international">AI Generalist (International)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              AI Use Cases (Optional, will auto-fill if empty)
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={aiUseCase1}
                onChange={(e) => setAiUseCase1(e.target.value)}
                placeholder="Use case 1"
                className="w-full px-3 py-1.5 text-xs rounded-lg bg-surface border border-border text-slate-200 placeholder-slate-500"
              />
              <input
                type="text"
                value={aiUseCase2}
                onChange={(e) => setAiUseCase2(e.target.value)}
                placeholder="Use case 2"
                className="w-full px-3 py-1.5 text-xs rounded-lg bg-surface border border-border text-slate-200 placeholder-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Industry AI Trend
            </label>
            <textarea
              rows={2}
              value={industryTrend}
              onChange={(e) => setIndustryTrend(e.target.value)}
              placeholder="What is happening with AI in this field?"
              className="w-full px-3 py-1.5 text-xs rounded-lg bg-surface border border-border text-slate-200 placeholder-slate-500"
            />
          </div>

          <div className="pt-3 border-t border-border flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-xl text-xs font-bold text-background bg-gradient-to-r from-brand-cyan to-brand-blue shadow-neon-cyan hover:shadow-neon-blue transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Saving...' : 'Save & Select Profession'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
