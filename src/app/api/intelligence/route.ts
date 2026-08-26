import { NextResponse } from 'next/server';
import { DEFAULT_PROFESSIONS } from '@/lib/knowledgeBase/professions';
import { generateSalesIntelligenceMulti } from '@/lib/services/intelligenceEngine';
import { ExperienceLevel } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { professionId, professionIds, experienceId, forceLiveResearch } = body;

    const ids: string[] = professionIds && Array.isArray(professionIds) && professionIds.length > 0
      ? professionIds
      : professionId
      ? [professionId]
      : [];

    if (ids.length === 0 || !experienceId) {
      return NextResponse.json(
        { error: 'Missing required parameters: professionId/professionIds and experienceId' },
        { status: 400 }
      );
    }

    const matchedProfessions = DEFAULT_PROFESSIONS.filter((p) => ids.includes(p.id));
    if (matchedProfessions.length === 0) {
      return NextResponse.json(
        { error: `No matching professions found for ids: ${ids.join(', ')}` },
        { status: 404 }
      );
    }

    const validLevels: ExperienceLevel[] = ['1-3', '3-5', '5-10', '10+'];
    if (!validLevels.includes(experienceId)) {
      return NextResponse.json(
        { error: `Invalid experience level: ${experienceId}` },
        { status: 400 }
      );
    }

    const intelligence = await generateSalesIntelligenceMulti(
      matchedProfessions,
      experienceId as ExperienceLevel,
      Boolean(forceLiveResearch)
    );

    return NextResponse.json(intelligence);
  } catch (error: any) {
    console.error('Error generating intelligence:', error);
    return NextResponse.json(
      { error: 'Unable to generate intelligence. Try again.' },
      { status: 500 }
    );
  }
}
