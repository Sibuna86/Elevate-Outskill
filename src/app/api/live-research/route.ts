import { NextResponse } from 'next/server';
import { DEFAULT_PROFESSIONS } from '@/lib/knowledgeBase/professions';
import { fetchStartupsForProfession } from '@/lib/services/startupResearchService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { professionId } = body;

    const profession = DEFAULT_PROFESSIONS.find((p) => p.id === professionId);
    if (!profession) {
      return NextResponse.json(
        { error: `Profession not found: ${professionId}` },
        { status: 404 }
      );
    }

    const result = await fetchStartupsForProfession(profession, true);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error conducting live startup research:', error);
    return NextResponse.json(
      { error: 'Live research unavailable. Showing results from the stored knowledge base.' },
      { status: 500 }
    );
  }
}
