import { ExperienceLevel, Profession, Testimonial } from '../types';
import { OUTSKILL_TESTIMONIALS } from '../knowledgeBase/testimonials';

export function matchCaseStudy(profession: Profession, experience: ExperienceLevel): Testimonial {
  const scored = OUTSKILL_TESTIMONIALS.map((t) => {
    let score = 0;

    // 1. Direct profession ID match
    if (t.matched_professions.includes(profession.id)) {
      score += 12;
    }

    // 2. Category match
    if (t.profession_categories.includes(profession.category)) {
      score += 6;
    }

    // 3. Experience tier match
    if (t.experience_tier.includes(experience)) {
      score += 5;
    }

    // 4. Seniority rules: Senior engineering roles prioritize Girish, Farhad, Ravi
    if (experience === '10+' && profession.category === 'Engineering & Technology') {
      if (t.id === 'girish-hiremath') score += 10;
      if (t.id === 'ravi-prabhakar' && profession.id.includes('health')) score += 15;
    }

    // 5. Growth / Marketing / Sales roles prioritize Akshay Hiremath
    if (['Marketing & Growth', 'Sales & Business Development'].includes(profession.category)) {
      if (t.id === 'akshay-hiremath') score += 15;
    }

    // 6. Data / Operations / Systems prioritize Operations Data Ingestion Lead
    if (['Data & Analytics', 'Operations & Support'].includes(profession.category)) {
      if (t.id === 'operations-data-automation') score += 15;
    }

    // 7. Founders / Entrepreneurs prioritize Ganesh Alla (Molvex) or Farhad Wahid
    if (['Leadership & Entrepreneurship', 'Consulting & Strategy'].includes(profession.category)) {
      if (experience === '10+' && t.id === 'farhad-wahid') score += 8;
      if (t.id === 'ganesh-alla-molvex') score += 12;
      if (t.id === 'venture-fund-lead') score += 9;
    }

    return { testimonial: t, score };
  });

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  return scored[0]?.testimonial || OUTSKILL_TESTIMONIALS[0];
}
