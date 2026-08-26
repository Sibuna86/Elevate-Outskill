import { ExperienceLevel, Profession, SalesIntelligence } from '../types';
import { EXPERIENCE_TIERS } from '../knowledgeBase/experienceTiers';
import { OUTSKILL_PROGRAMS } from '../knowledgeBase/programs';
import { OUTSKILL_TESTIMONIALS } from '../knowledgeBase/testimonials';
import { fetchStartupsForProfessions } from './startupResearchService';

/**
 * Generate sharp, consultative pitch pointers tailored to the specific role and seniority.
 */
function generateConsultativePitchPointers(
  professions: Profession[],
  experienceId: ExperienceLevel
): string[] {
  const roleName = professions.map((p) => p.name).join(' & ');
  const primaryUseCases = professions.flatMap((p) => p.ai_use_cases);
  const primaryPainPoints = professions.flatMap((p) => p.potential_pain_points);

  const topUseCase = primaryUseCases[0] || 'automating complex workflow bottlenecks';
  const secondUseCase = primaryUseCases[1] || 'orchestrating autonomous AI agents';
  const topPainPoint = primaryPainPoints[0] || 'spending hours on manual repetitive coordination';

  switch (experienceId) {
    case '1-3':
      return [
        `"In ${roleName}, the biggest shift right now is moving from manual execution to building automated AI workflows — professionals who master this are outputting the volume of a 3-person team."`,
        `"Instead of spending hours on ${topPainPoint.toLowerCase()}, you can leverage tools to ${topUseCase.toLowerCase()}."`,
        `"The goal isn't just using ChatGPT for basic drafting; it's deploying production AI automations and agentic workflows that make your portfolio immediately stand out."`
      ];

    case '3-5':
      return [
        `"At your stage in ${roleName}, you're likely managing substantial operational complexity while looking for leverage to step into senior leadership."`,
        `"Most mid-level professionals are bottlenecked by ${topPainPoint.toLowerCase()} — but by setting up systems to ${topUseCase.toLowerCase()}, you eliminate that administrative drag entirely."`,
        `"Top performers in your field are shifting toward becoming AI-enabled problem solvers who build ${secondUseCase.toLowerCase()} without waiting on engineering queues."`
      ];

    case '5-10':
      return [
        `"With 5–10 years in ${roleName}, your value isn't individual task execution — it's driving team velocity and architecting scalable AI operational systems."`,
        `"Right now, teams lose up to 40% of their bandwidth to ${topPainPoint.toLowerCase()}. By implementing AI systems that ${topUseCase.toLowerCase()}, you can drive massive departmental leverage."`,
        `"We're seeing leaders in this space transition from traditional managers into AI orchestrators who can deploy solutions and validate functional POCs in days instead of quarters."`
      ];

    case '10+':
    default:
      return [
        `"At the principal and executive level in ${roleName}, the priority is strategic transformation and eliminating cross-functional bottlenecks that slow down business outcomes."`,
        `"Rather than spending weeks waiting for tech bandwidth to resolve ${topPainPoint.toLowerCase()}, modern leaders are personally deploying AI workflows that ${topUseCase.toLowerCase()}."`,
        `"Our executive cohort members use these frameworks to build functional proofs-of-concept in 48 hours and slash 60% of operational overhead across their business units."`
      ];
  }
}

export async function generateSalesIntelligenceMulti(
  professions: Profession[],
  experienceId: ExperienceLevel,
  forceLiveResearch: boolean = false
): Promise<SalesIntelligence> {
  const primaryProf = professions[0];
  const expGuidance = EXPERIENCE_TIERS[experienceId];

  // 1. Fetch relevant domain startups
  const startupResult = await fetchStartupsForProfessions(professions, forceLiveResearch);

  // 2. Combine AI opportunities across selected roles
  const allOpportunities = professions.flatMap((p) => p.ai_use_cases);
  const selectedOpportunities = Array.from(new Set(allOpportunities)).slice(0, 4);

  // 3. Combine potential areas to explore (pain points)
  const allPainPoints = professions.flatMap((p) => p.potential_pain_points);
  const selectedPainPoints = Array.from(new Set(allPainPoints)).slice(0, 3);

  // 4. Generate sharp, consultative pitch pointers
  const pitchPoints = generateConsultativePitchPointers(professions, experienceId);

  // 5. Industry AI Trend
  const trend = professions.map((p) => p.industry_trend).join(' ');

  // 6. Matched Case Study
  const matchedCaseStudy = OUTSKILL_TESTIMONIALS[0];

  // 7. Matched Program
  const matchedProgram = OUTSKILL_PROGRAMS.generalist_india;

  return {
    prospect: {
      profession: primaryProf,
      selected_professions: professions,
      experience: expGuidance
    },
    ai_opportunities: selectedOpportunities,
    potential_areas_to_explore: selectedPainPoints,
    pitch_talking_points: pitchPoints,
    industry_ai_trend: trend,
    relevant_startups: startupResult.startups,
    matched_case_study: matchedCaseStudy,
    why_outskill_relevant: [],
    matched_program: matchedProgram,
    research_metadata: {
      generated_at: new Date().toISOString(),
      startup_research_date: startupResult.research_date,
      is_live_research: startupResult.is_live,
      research_status_note: startupResult.status_note
    }
  };
}

export async function generateSalesIntelligence(
  profession: Profession,
  experienceId: ExperienceLevel,
  forceLiveResearch: boolean = false
) {
  return generateSalesIntelligenceMulti([profession], experienceId, forceLiveResearch);
}
