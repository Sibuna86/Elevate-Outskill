import { Profession } from '../types';
import { VERIFIED_TOOL_STACK, ToolBonusDetail } from '../knowledgeBase/programs';

// Map professions to specific relevant tools
const TOOL_RELEVANCE_MAP: Record<string, string[]> = {
  // AI Generalist & Automation
  ai_generalist: ['Lyzr AI', 'Supergrow', 'GetMulti', 'Wispr Flow', 'Numerous AI'],
  ai_automation_specialist: ['Lyzr AI', 'Superjoin', 'Numerous AI', 'Wispr Flow'],
  prompt_engineer_llmops: ['GetMulti', 'Lyzr AI', 'Superprompts', 'Wispr Flow'],

  // Marketing, Growth & Creator
  influencer_marketer: ['Supergrow', 'Phot.AI', 'Numerous AI', 'Fireflies AI'],
  growth_hacker: ['Supergrow', 'Numerous AI', 'Superjoin', 'GetMulti'],
  marketing_professional: ['Supergrow', 'Phot.AI', 'Numerous AI', 'Superprompts'],
  digital_marketer: ['Supergrow', 'Numerous AI', 'Phot.AI', 'Superjoin'],
  social_media_manager: ['Supergrow', 'Phot.AI', 'Wispr Flow', 'Superprompts'],

  // Sales & BizDev
  sales_professional: ['Supergrow', 'Fireflies AI', 'Emily AI', 'Wispr Flow'],
  business_development: ['Supergrow', 'Fireflies AI', 'Superjoin', 'Emily AI'],

  // Engineering & Tech
  software_engineer: ['Lyzr AI', 'GetMulti', 'Superjoin', 'Wispr Flow', 'Superprompts'],
  software_developer: ['Lyzr AI', 'GetMulti', 'Wispr Flow', 'Superprompts'],
  cybersecurity_analyst: ['Lyzr AI', 'GetMulti', 'Wispr Flow', 'Superjoin'],
  devops_sre: ['Lyzr AI', 'Superjoin', 'Wispr Flow', 'GetMulti'],
  electrical_engineer: ['Lyzr AI', 'Wispr Flow', 'GetMulti'],
  mechanical_engineer: ['Phot.AI', 'Wispr Flow', 'Numerous AI'],
  civil_engineer: ['Numerous AI', 'Superjoin', 'Wispr Flow'],
  architect: ['Phot.AI', 'Numerous AI', 'Wispr Flow'],

  // Data & Analytics
  data_analyst: ['Numerous AI', 'Superjoin', 'GetMulti', 'Wispr Flow'],
  data_scientist: ['GetMulti', 'Lyzr AI', 'Superjoin', 'Numerous AI'],
  business_analyst: ['Numerous AI', 'Superjoin', 'Fireflies AI', 'Wispr Flow'],

  // Product & Design
  product_manager: ['Fireflies AI', 'Wispr Flow', 'Superjoin', 'GetMulti'],
  project_manager: ['Fireflies AI', 'Emily AI', 'Numerous AI', 'Wispr Flow'],
  ui_ux_designer: ['Phot.AI', 'Wispr Flow', 'GetMulti', 'Superprompts'],

  // Leadership & Ops
  founder: ['Supergrow', 'Fireflies AI', 'Lyzr AI', 'Superjoin', 'Emily AI'],
  entrepreneur: ['Supergrow', 'Emily AI', 'Phot.AI', 'Numerous AI'],
  chief_of_staff: ['Emily AI', 'Fireflies AI', 'Superjoin', 'Wispr Flow'],
  operations_professional: ['Superjoin', 'Numerous AI', 'Emily AI', 'Fireflies AI'],
  customer_support: ['Fireflies AI', 'Emily AI', 'Wispr Flow', 'Superprompts'],
  customer_success_manager: ['Fireflies AI', 'Superjoin', 'Wispr Flow', 'Emily AI'],
  ecommerce_d2c: ['Phot.AI', 'Supergrow', 'Numerous AI', 'Superjoin'],

  // HR & Finance
  hr_professional: ['Humanic AI', 'Fireflies AI', 'Emily AI', 'Supergrow'],
  recruiter: ['Humanic AI', 'Supergrow', 'Fireflies AI', 'Emily AI'],
  finance_professional: ['Numerous AI', 'Superjoin', 'Fireflies AI'],
  accountant: ['Numerous AI', 'Superjoin', 'Fireflies AI'],
  banker: ['Numerous AI', 'Fireflies AI', 'Superjoin'],
  trader_investment: ['Numerous AI', 'GetMulti', 'Fireflies AI'],

  // Specialized
  consultant: ['Fireflies AI', 'Superjoin', 'Numerous AI', 'Wispr Flow'],
  healthcare_professional: ['Wispr Flow', 'Fireflies AI', 'Emily AI'],
  teacher_educator: ['Wispr Flow', 'Phot.AI', 'Superprompts'],
  lawyer_legal: ['Wispr Flow', 'Fireflies AI', 'GetMulti'],
  student: ['GetMulti', 'Supergrow', 'Wispr Flow', 'Superprompts']
};

export function getRelevantToolsForProfessions(professions: Profession[]): ToolBonusDetail[] {
  const toolNameSet = new Set<string>();

  for (const prof of professions) {
    const matchedNames = TOOL_RELEVANCE_MAP[prof.id] || ['Supergrow', 'Numerous AI', 'Lyzr AI', 'Fireflies AI'];
    matchedNames.forEach((n) => toolNameSet.add(n));
  }

  // Filter from verified tool stack
  const matchedTools = VERIFIED_TOOL_STACK.filter((tool) => toolNameSet.has(tool.name));

  // If fewer than 3, fallback to top productivity tools
  if (matchedTools.length < 3) {
    return VERIFIED_TOOL_STACK.slice(0, 4);
  }

  // Limit to at most 4-5 highly targeted tools
  return matchedTools.slice(0, 4);
}
