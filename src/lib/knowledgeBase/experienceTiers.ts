import { ExperienceGuidance, ExperienceLevel } from '../types';

export const EXPERIENCE_TIERS: Record<ExperienceLevel, ExperienceGuidance> = {
  '1-3': {
    id: '1-3',
    label: '1–3 years',
    seniority_description: 'Early Career / Associate Level',
    sales_psychology_focus: 'Focus on rapid execution speed, career acceleration, AI-assisted building, and standing out from peer competition by becoming 3x-5x faster.',
    tone_guidance: 'Encouraging, empowering, career-building, focused on tactical superpower and portfolio creation.',
    key_value_propositions: [
      'Accelerate day-to-day execution speed by 3x–5x using AI tooling',
      'Build real, demonstrable AI projects and automations for your portfolio',
      'Move from basic prompt user to an AI-native practitioner early in your career'
    ]
  },
  '3-5': {
    id: '3-5',
    label: '3–5 years',
    seniority_description: 'Mid-Level / Senior Specialist',
    sales_psychology_focus: 'Focus on workflow automation, eliminating repetitive operational grind, taking on high-leverage responsibilities, and positioning for promotion/leadership.',
    tone_guidance: 'Consultative, strategic, focused on expanding leverage and moving into high-impact AI problem solving.',
    key_value_propositions: [
      'Automate repetitive workflows to reclaim 40-50% of your operational bandwidth',
      'Transition from an operational execution specialist to an AI-enabled problem solver',
      'Ship custom AI solutions and internal tools that get executive visibility'
    ]
  },
  '5-10': {
    id: '5-10',
    label: '5–10 years',
    seniority_description: 'Lead / Manager / Senior Practitioner',
    sales_psychology_focus: 'Focus on team efficiency, scalable AI systems, cross-functional impact, leading AI adoption within the team, and staying ahead of technological disruption.',
    tone_guidance: 'Peer-to-peer, consultative, efficiency & leadership-driven, focused on system design and team bandwidth.',
    key_value_propositions: [
      'Drive AI adoption and automated pipelines across your functional team',
      'Eliminate manual dependencies and bottlenecks between departments',
      'Position yourself as the strategic AI lead inside your organization'
    ]
  },
  '10+': {
    id: '10+',
    label: 'More than 10 years',
    seniority_description: 'Principal / Director / VP / Founder / Executive',
    sales_psychology_focus: 'Focus on strategic transformation, rapid POC prototyping without engineering dependency, business ROI, high-level architecture, and 60%+ bandwidth liberation.',
    tone_guidance: 'High-level executive peer, business-outcome focused, respectful of deep domain expertise, focused on leverage and speed to prototype.',
    key_value_propositions: [
      'Build and validate working AI POCs in 2 days instead of waiting 2-4 weeks on dev queues',
      'Liberate 60%+ bandwidth from routine execution to focus purely on strategy and architecture',
      'Lead AI-first organizational transformation and monetize AI capabilities with high ROI'
    ]
  }
};
