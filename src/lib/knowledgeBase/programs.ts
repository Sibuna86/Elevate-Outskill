import { ProgramInfo } from '../types';

export interface ToolBonusDetail {
  name: string;
  value?: string;
  duration: string;
  what_it_does: string;
  how_it_helps_prospect: string;
}

export const VERIFIED_TOOL_STACK: ToolBonusDetail[] = [
  {
    name: 'Supergrow',
    value: '$360 / ₹29,207 billed annually',
    duration: '1 Year Full Access Included',
    what_it_does: 'AI-assisted LinkedIn growth platform for post ideation, carousel generation, AI comments, and analytics.',
    how_it_helps_prospect: 'Builds an authoritative personal brand on LinkedIn to attract inbound client leads, job promotions, and enterprise trust on autopilot.'
  },
  {
    name: 'Numerous AI',
    value: '$120 billed annually',
    duration: '1 Year Full Access Included',
    what_it_does: 'Embeds AI formulas directly into Google Sheets and Microsoft Excel.',
    how_it_helps_prospect: 'Automates spreadsheet data cleaning, categorization, sentiment extraction, and bulk drafting without manual copying and pasting.'
  },
  {
    name: 'Lyzr AI',
    value: 'Enterprise Agent Suite',
    duration: '1 Year Full Access Included',
    what_it_does: 'Enterprise framework for building private AI agents and autonomous RAG systems.',
    how_it_helps_prospect: 'Enables professionals to build and deploy custom AI agents that run securely without exposing sensitive corporate data to public clouds.'
  },
  {
    name: 'Fireflies AI',
    value: 'Pro Tier License',
    duration: '6 Months Access Included',
    what_it_does: 'Automated meeting transcription, voice note-taking, and action item extraction across Zoom and Google Meet.',
    how_it_helps_prospect: 'Eliminates manual meeting notes, allowing you to focus on the conversation while AI captures decisions and tasks automatically.'
  },
  {
    name: 'Wispr Flow',
    value: 'Productivity Pro',
    duration: '1 Year Full Access Included',
    what_it_does: 'Ultra-fast speech-to-text dictation across every desktop application at 3x typing speed.',
    how_it_helps_prospect: 'Write emails, PRDs, code comments, and documentation 3x faster using natural voice commands.'
  },
  {
    name: 'Superjoin',
    value: 'Data Connector Suite',
    duration: '1 Year Full Access Included',
    what_it_does: 'Live two-way data connector between Postgres, Snowflake, Salesforce, HubSpot, and Google Sheets.',
    how_it_helps_prospect: 'Connects internal company databases into live spreadsheets without waiting for engineering to build custom ETL pipelines.'
  },
  {
    name: 'Phot.AI',
    value: 'Multimodal Creative Suite',
    duration: '1 Year Full Access Included',
    what_it_does: 'Generative AI image editing, background removal, object replacement, and visual marketing creation.',
    how_it_helps_prospect: 'Generates studio-quality visual assets and product mockups in seconds without needing a graphic designer.'
  },
  {
    name: 'Emily AI',
    value: 'Workflow Assistant',
    duration: '1 Year Full Access Included',
    what_it_does: 'AI-first executive assistant for task delegation and inbox management.',
    how_it_helps_prospect: 'Frees up 5+ hours weekly from calendar coordination and routine administrative task delegation.'
  },
  {
    name: 'GetMulti',
    value: 'Multi-LLM Workspace',
    duration: 'Lifetime Access with BYOK',
    what_it_does: 'Unified interface to query Claude 3.5 Sonnet, GPT-4o, and Gemini 1.5 Pro side-by-side.',
    how_it_helps_prospect: 'Compares model outputs simultaneously to pick the best reasoning, code, or copy for any specific task.'
  },
  {
    name: 'Superprompts',
    value: 'Curated Prompt Repository',
    duration: '1 Year Full Access Included',
    what_it_does: 'Battle-tested prompt engineering library across coding, marketing, sales, and operations.',
    how_it_helps_prospect: 'Provides instant high-performing prompt templates tailored for every business function.'
  }
];

export const OUTSKILL_PROGRAMS: Record<string, ProgramInfo> = {
  engineering: {
    id: 'engineering',
    name: 'AI Engineering Accelerator',
    nsdc_name: 'Program in Generative AI (Tech Professionals)',
    region: 'Global (Engineering)',
    target_audience: 'Software Engineers, Developers, Engineering Managers, Technical Leaders, Solutions Architects, Tech Founders (0 to 20+ years)',
    positioning: 'Transform into an AI Generalist / AI Native Engineer — someone who does not just code manually, but orchestrates AI agents, automations, and RAG systems.',
    sprints: [
      'Sprint 1: Advanced Prompt Engineering & AI Automations',
      'Sprint 2: Full Stack Open Source AI Applications',
      'Sprint 3: Customising AI & RAG (Retrieval-Augmented Generation)',
      'Sprint 4: AI Coding Agents - Code Generation & Evaluation',
      'Sprint 5: AI Agents - Observability & Agent Building',
      'Sprint 6: Building AI Coding Agent',
      'Sprint 7: 48-Hour Capstone Hackathon'
    ],
    key_projects: [
      'Project 1: Deep Research Agent',
      'Project 2: Browser Automation Agent',
      'Project 3: Customer Support Agent',
      'Project 4: AI Ops Incident Response Agent',
      'Project 5: Cybersecurity Threat Detection Agent'
    ],
    tools_included: [
      'Cursor / Claude Dev workflows',
      'Lyzr AI (1 Year Full Access)',
      'Humanic AI (1 Year Access)',
      'Superjoin (1 Year Access)',
      'GetMulti (Lifetime Access with BYOK)',
      'Wispr Flow (1 Year Access)',
      'Emily AI (1 Year Access)',
      'Superprompts (1 Year Access)'
    ],
    certifications: [
      'NSDC Certified: Program in Generative AI (Tech Professionals)',
      'Skill India Recognized'
    ],
    verified_benefits: [
      'Portfolio of 5 production-grade AI agents that companies pay lakhs to solve for',
      'Kairos Business Fellowship partnership module',
      'Monetization Mastery 101 module',
      '54+ Live AI Update Sessions per year'
    ],
    mentors: [
      { name: 'Dileep Karri', title: 'Head of AI Initiatives', company: 'Outskill' },
      { name: 'Paras Madan', title: 'AI Engineer', company: 'Athena AI' },
      { name: 'Divij Bajaj', title: 'Data & Applied Scientist II', company: 'Microsoft' },
      { name: 'Ishan Dutta', title: 'ML Engineer II', company: 'Adobe (Ex-NVIDIA)' },
      { name: 'Srishti Gureja', title: 'Machine Learning Researcher' },
      { name: 'Antaripa Saha', title: 'Machine Learning Engineer II' }
    ],
    citation: {
      source_document: 'Engineering Accelerator',
      source_page: 11,
      topic: 'program',
      verified_claim: 'NSDC Certified Program Name: Program in Generative AI (Tech Professionals). Positions engineers as AI Native Engineers orchestrating agents and systems.'
    }
  },

  generalist_india: {
    id: 'generalist_india',
    name: 'AI Generalist Accelerator (India)',
    nsdc_name: 'Artificial Intelligence Applications For Business Leaders (Previously AI For Founders and Business)',
    region: 'India',
    target_audience: 'Business Leaders, Founders, Marketers, Product Managers, Analysts, Consultants, Operations, HR & Finance Professionals',
    positioning: 'Become an AI-First Problem Solver who builds workflows, automations, agents, and custom apps without heavy engineering bottlenecks.',
    sprints: [
      'Days 1-7: Local AI Models, Image & Video AI, Workflow Automations, Agentic AI, Voice Agents',
      'Days 8-9: 48-Hour Build-a-thon & Live Product Deployment',
      'Days 10-14: Monetization Mastery, Client Acquisition & Operational Rollout',
      'Monthly Sprints: A New AI Sprint Every Month + 54+ Live AI Update Sessions'
    ],
    key_projects: [
      'Local AI Data Processing & Secure Desktop Automations',
      'AI Growth & Inbound Pipeline Engine',
      'Voice & Autonomous Customer Operations Agents',
      'Zero-Cloud Browser & System Extensions'
    ],
    tools_included: [
      'Supergrow (1 Year Access - valued at $360 / ₹29,207)',
      'Emily AI (1 Year Access)',
      'Humanic AI (1 Year Access)',
      'Fireflies AI (6 Months Access)',
      'Phot.AI (1 Year Access)',
      'Happenstance AI (1 Year Access)',
      'GetMulti (Lifetime Access with BYOK)',
      'Lyzr AI (1 Year Access)',
      'Wispr Flow (1 Year Access)',
      'Numerous AI (1 Year Access - $120 value)',
      'Superjoin (1 Year Access)',
      'Getowl AI (1 Year Access)',
      'Superprompts (1 Year Access)'
    ],
    certifications: [
      'NSDC Certified: Artificial Intelligence Applications For Business Leaders',
      'Skill India Recognized'
    ],
    verified_benefits: [
      'Monetization Mastery 101 (The art of making money with AI skills & organic sales)',
      'Kairos School of Business Business Fellowship partnership',
      'Over ₹1.5L worth of premium AI software licenses included for 1 year',
      'Dedicated Build-a-thon with live feedback from mentors'
    ],
    citation: {
      source_document: 'AI Accelerator Program - India',
      source_page: 2,
      topic: 'program',
      verified_claim: 'NSDC Certified Program Name: Artificial Intelligence Applications For Business Leaders. Includes 14-day sprint, Build-a-thon, monetization, and Engineer Track option.'
    }
  },

  generalist_international: {
    id: 'generalist_international',
    name: 'AI Generalist Accelerator (International)',
    nsdc_name: 'AI Generalist Accelerator Global Program',
    region: 'International',
    target_audience: 'Global Leaders, Solopreneurs, Executives, Product Leads, Growth Specialists & Enterprise Professionals',
    positioning: 'Build high-leverage AI automations, deploy autonomous agents, and lead AI transformation globally.',
    sprints: [
      'Days 1-7: Local AI Models, Multimodal AI, Workflows & Autonomous Agents',
      'Days 8-9: 48-Hour Global Build-a-thon',
      'Days 10-14: Monetization, Enterprise Scaling & Production Deployment',
      'Annual Track: 54+ Live AI Updates & Monthly Sprints'
    ],
    key_projects: [
      'Full-Stack Autonomous Business Solutions',
      'Voice AI Agents with Vapi / Retell',
      'Multimodal Content Pipelines with HeyGen & Phot.AI',
      'Enterprise Document & Workflow Intelligence'
    ],
    tools_included: [
      'HeyGen (1 Year Access)',
      'Vapi AI (Free Voice Credits Included)',
      'Supergrow (1 Year Access - $360 value)',
      'Emily AI (1 Year Access)',
      'Humanic AI (1 Year Access)',
      'Fireflies AI (6 Months Access)',
      'Phot.AI (1 Year Access)',
      'Happenstance AI (1 Year Access)',
      'GetMulti (Lifetime Access with BYOK)',
      'Lyzr AI (1 Year Access)',
      'Wispr Flow (1 Year Access)',
      'Numerous AI (1 Year Access)',
      'Superjoin (1 Year Access)',
      'Getowl AI (1 Year Access)',
      'Superprompts (1 Year Access)'
    ],
    certifications: [
      'Outskill Global AI Generalist Certification',
      'International Cohort Fellowship Credential'
    ],
    verified_benefits: [
      'Global cohort collaboration across US, Europe, Middle East & APAC',
      'Monetization Mastery: Global freelancing, AI agency launch, and enterprise consulting',
      'Over $3,000+ worth of annual AI tooling stack licenses'
    ],
    citation: {
      source_document: 'AI Accelerator Program - International',
      source_page: 1,
      topic: 'program',
      verified_claim: 'Official International AI Generalist Accelerator featuring 14-day sprint, global build-a-thon, monetization, and international tool stack including HeyGen and Vapi credits.'
    }
  }
};
