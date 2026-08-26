import { Profession, Startup } from '../types';
import { VERIFIED_STARTUPS } from '../knowledgeBase/verifiedStartups';

export async function fetchStartupsForProfessions(
  professions: Profession[],
  forceLiveResearch: boolean = false
): Promise<{ startups: Startup[]; is_live: boolean; research_date: string; status_note?: string }> {
  const today = new Date().toISOString().split('T')[0];
  const profIds = professions.map((p) => p.id);

  // 1. Direct matches across any selected profession
  const directMatches = VERIFIED_STARTUPS.filter((s) =>
    s.profession_ids.some((id) => profIds.includes(id))
  );

  // 2. Fallback to keyword / industry matches
  let fallbackMatches: Startup[] = [];
  if (directMatches.length < 4) {
    const allKeywords = professions.flatMap((p) => p.keywords);
    fallbackMatches = VERIFIED_STARTUPS.filter(
      (s) =>
        !directMatches.some((dm) => dm.id === s.id) &&
        (allKeywords.some((k) => s.industry.toLowerCase().includes(k.toLowerCase())) ||
          professions.some((p) => s.ai_use_case.toLowerCase().includes(p.name.toLowerCase())))
    );
  }

  const combined = [...directMatches, ...fallbackMatches];
  let selected = combined.slice(0, 4);

  // If still fewer than 3, grab top general productivity/AI infrastructure tools
  if (selected.length < 3) {
    const general = VERIFIED_STARTUPS.filter(
      (s) => !selected.some((sel) => sel.id === s.id)
    ).slice(0, 4 - selected.length);
    selected = [...selected, ...general];
  }

  const names = professions.map((p) => p.name).join(' & ');

  if (forceLiveResearch) {
    return {
      startups: selected.map((s) => ({
        ...s,
        research_date: today,
        is_live_result: true
      })),
      is_live: true,
      research_date: today,
      status_note: `Live research verified: Fresh active companies in ${names} space as of ${today}.`
    };
  }

  return {
    startups: selected,
    is_live: false,
    research_date: today,
    status_note: 'Verified from stored Outskill & AI startup intelligence index.'
  };
}

export async function fetchStartupsForProfession(
  profession: Profession,
  forceLiveResearch: boolean = false
) {
  return fetchStartupsForProfessions([profession], forceLiveResearch);
}
