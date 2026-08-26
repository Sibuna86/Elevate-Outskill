import { NextResponse } from 'next/server';
import { DEFAULT_PROFESSIONS } from '@/lib/knowledgeBase/professions';
import { Profession } from '@/lib/types';

let professionsList = [...DEFAULT_PROFESSIONS];

export async function GET() {
  return NextResponse.json(professionsList);
}

export async function POST(req: Request) {
  try {
    const newProf: Profession = await req.json();
    if (!newProf.id || !newProf.name || !newProf.category) {
      return NextResponse.json({ error: 'Invalid profession payload' }, { status: 400 });
    }

    const existingIdx = professionsList.findIndex((p) => p.id === newProf.id);
    if (existingIdx >= 0) {
      professionsList[existingIdx] = newProf;
    } else {
      professionsList.push(newProf);
    }

    return NextResponse.json({ success: true, count: professionsList.length, profession: newProf });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to save profession' }, { status: 500 });
  }
}
