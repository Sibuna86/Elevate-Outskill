export type ExperienceLevel = '1-3' | '3-5' | '5-10' | '10+';

export type ProfessionCategory = 
  | 'Engineering & Technology'
  | 'Data & Analytics'
  | 'Product & Project Management'
  | 'Marketing & Growth'
  | 'Sales & Business Development'
  | 'HR & Recruitment'
  | 'Finance & Banking'
  | 'Consulting & Strategy'
  | 'Leadership & Entrepreneurship'
  | 'Operations & Support'
  | 'Core Engineering & Architecture'
  | 'Specialized Fields';

export interface Profession {
  id: string;
  name: string;
  category: ProfessionCategory;
  ai_use_cases: string[];
  potential_pain_points: string[];
  industry_trend: string;
  recommended_track: 'engineering' | 'generalist_india' | 'generalist_international';
  keywords: string[];
}

export interface ExperienceGuidance {
  id: ExperienceLevel;
  label: string;
  seniority_description: string;
  sales_psychology_focus: string;
  tone_guidance: string;
  key_value_propositions: string[];
}

export interface AuditableCitation {
  source_document: 'Engineering Accelerator' | 'AI Accelerator Program - India' | 'AI Accelerator Program - International';
  source_page: number;
  topic: 'program' | 'curriculum' | 'testimonial' | 'certification' | 'bonus_tools' | 'mentorship' | 'positioning';
  verified_claim: string;
}

export interface ProgramInfo {
  id: string;
  name: string;
  nsdc_name: string;
  region: 'India' | 'International' | 'Global (Engineering)';
  target_audience: string;
  positioning: string;
  sprints: string[];
  key_projects?: string[];
  tools_included: string[];
  certifications: string[];
  verified_benefits: string[];
  mentors?: { name: string; title: string; company?: string }[];
  citation: AuditableCitation;
}

export interface Testimonial {
  id: string;
  person: string;
  role: string;
  company?: string;
  experience_years: string;
  experience_tier: ExperienceLevel[];
  profession_categories: ProfessionCategory[];
  matched_professions: string[];
  before_state: string[];
  after_state: string[];
  quantifiable_metrics: string[];
  business_career_result: string;
  quote?: string;
  program_id: string;
  citation: AuditableCitation;
}

export interface Startup {
  id: string;
  company_name: string;
  website: string;
  profession_ids: string[];
  industry: string;
  ai_use_case: string;
  short_description: string;
  why_relevant: string;
  recent_activity?: string;
  source: string;
  research_date: string;
  is_live_result?: boolean;
}

export interface SalesIntelligence {
  prospect: {
    profession: Profession;
    selected_professions: Profession[];
    experience: ExperienceGuidance;
  };
  ai_opportunities: string[]; // 3-4 bullets
  potential_areas_to_explore: string[]; // 2-4 bullets (pain points)
  pitch_talking_points: string[]; // 3-4 conversational talking points
  industry_ai_trend: string; // 1-3 sentences
  relevant_startups: Startup[]; // 3-4 companies
  matched_case_study: Testimonial; // 1 resonant verified testimonial
  why_outskill_relevant: string[]; // 2-3 bullets connecting role + exp + program
  matched_program: ProgramInfo;
  research_metadata: {
    generated_at: string;
    startup_research_date: string;
    is_live_research: boolean;
    research_status_note?: string;
  };
}
