import { Startup } from '../types';

export const VERIFIED_STARTUPS: Startup[] = [
  // --- AI GENERALIST & AGENTS ---
  {
    id: 'lyzr_ai',
    company_name: 'Lyzr AI',
    website: 'https://lyzr.ai',
    profession_ids: ['ai_generalist', 'ai_automation_specialist', 'software_engineer'],
    industry: 'Enterprise AI Agents & Multi-Agent Frameworks',
    ai_use_case: 'Build private enterprise multi-agent architectures and local RAG systems',
    short_description: 'Enterprise framework for building autonomous multi-agent systems and private RAG assistants.',
    why_relevant: 'Included as a full 1-year bonus tool in Outskill; allows AI generalists to deploy private agent fleets in minutes.',
    source: 'Official Program Bonus & AI Agent Suite',
    research_date: '2026-08-26',
    recent_activity: 'Launched enterprise agent mesh orchestrator for autonomous business workflows.'
  },
  {
    id: 'relevance_ai',
    company_name: 'Relevance AI',
    website: 'https://relevanceai.com',
    profession_ids: ['ai_generalist', 'ai_automation_specialist', 'operations_professional'],
    industry: 'B2B Autonomous AI Workforce',
    ai_use_case: 'Build, hire, and manage autonomous AI team members for business tasks',
    short_description: 'B2B platform for building autonomous AI workforces across sales, research, and data operations.',
    why_relevant: 'Leading platform enabling AI generalists to hire and orchestrate AI team members for routine company functions.',
    source: 'Verified AI Workforce Platform',
    research_date: '2026-08-26',
    recent_activity: 'Scaled autonomous agent executions to over 50M tasks monthly for enterprise clients.'
  },

  // --- INFLUENCER & CREATOR MARKETING ---
  {
    id: 'grin_co',
    company_name: 'GRIN',
    website: 'https://grin.co',
    profession_ids: ['influencer_marketer', 'marketing_professional', 'growth_hacker'],
    industry: 'Creator Management & Influencer Marketing',
    ai_use_case: 'Automate creator discovery, relationship management, and sales attribution',
    short_description: 'AI-first creator management and influencer relationship automation platform for top D2C brands.',
    why_relevant: 'Automates creator discovery, communication, contract drafting, and product seeding at enterprise scale.',
    source: 'Verified Creator Tech Platform',
    research_date: '2026-08-26',
    recent_activity: 'Integrated predictive creator ROI algorithms and automated content rights tracking.'
  },
  {
    id: 'modash_io',
    company_name: 'Modash',
    website: 'https://modash.io',
    profession_ids: ['influencer_marketer', 'digital_marketer'],
    industry: 'Audience Credibility & Creator Discovery',
    ai_use_case: 'Audit fake followers and verify creator engagement across Instagram and TikTok',
    short_description: 'Audience credibility analysis, fake follower detection, and multi-platform creator discovery engine.',
    why_relevant: 'Allows influencer managers to audit 250M+ creator profiles across Instagram, TikTok, and YouTube in seconds.',
    source: 'Verified Creator Discovery Engine',
    research_date: '2026-08-26',
    recent_activity: 'Launched automated campaign performance monitoring and real-time promo code tracking.'
  },
  {
    id: 'aspire_iq',
    company_name: 'Aspire',
    website: 'https://aspire.io',
    profession_ids: ['influencer_marketer', 'social_media_manager'],
    industry: 'Influencer Marketing & Creator Whitelisting',
    ai_use_case: 'Automate creator gifting, affiliate payouts, and paid ad whitelisting',
    short_description: 'End-to-end influencer marketing platform with automated creator gifting, whitelisting, and attribution.',
    why_relevant: 'Helps creator marketing teams scale influencer programs without proportional increases in headcount.',
    source: 'Verified Influencer Platform',
    research_date: '2026-08-26',
    recent_activity: 'Introduced automated paid ad creator whitelisting and sales conversion attribution.'
  },

  // --- AI AUTOMATION & PROMPT ENGINEERING ---
  {
    id: 'n8n_io',
    company_name: 'n8n',
    website: 'https://n8n.io',
    profession_ids: ['ai_automation_specialist', 'operations_professional', 'software_developer'],
    industry: 'Workflow Hyperautomation & Agentic Pipelines',
    ai_use_case: 'Connect APIs, databases, and AI agents into self-hosted automations',
    short_description: 'Fair-code workflow automation tool with native AI agent nodes and self-hosted privacy.',
    why_relevant: 'The premier platform for building secure, autonomous AI workflow automations with zero-cloud exposure.',
    source: 'Verified Workflow Automation Platform',
    research_date: '2026-08-26',
    recent_activity: 'Added LangChain agent nodes, vector store integrations, and human-in-the-loop triggers.'
  },
  {
    id: 'vellum_ai',
    company_name: 'Vellum AI',
    website: 'https://vellum.ai',
    profession_ids: ['prompt_engineer_llmops', 'data_scientist', 'software_engineer'],
    industry: 'LLMOps & Prompt Engineering Platform',
    ai_use_case: 'Benchmark prompts, evaluate model outputs, and deploy guardrails',
    short_description: 'Enterprise platform for prompt engineering, model benchmarking, and LLM evaluation pipelines.',
    why_relevant: 'Empowers prompt engineers to test prompts across 50+ models, track latency/costs, and deploy versioned endpoints.',
    source: 'Verified LLMOps Platform',
    research_date: '2026-08-26',
    recent_activity: 'Raised $7M and launched automated prompt regression testing and output guardrails.'
  },

  // --- GROWTH & SOCIAL MEDIA ---
  {
    id: 'supergrow',
    company_name: 'Supergrow',
    website: 'https://supergrow.ai',
    profession_ids: ['marketing_professional', 'digital_marketer', 'growth_hacker', 'social_media_manager', 'ai_generalist', 'founder'],
    industry: 'LinkedIn Organic Growth & Inbound Pipeline',
    ai_use_case: 'AI LinkedIn post ideation, viral carousel generation, and engagement automations',
    short_description: 'AI personal branding and LinkedIn organic inbound pipeline engine for founders and leaders.',
    why_relevant: 'Included as a $360/year bonus in Outskill; enables leaders to build an authoritative inbound client pipeline.',
    source: 'Official Program Partner (1 Year Access)',
    research_date: '2026-08-26',
    recent_activity: 'Used by 15,000+ creators and leaders to drive organic client acquisition on LinkedIn.'
  },
  {
    id: 'clay',
    company_name: 'Clay',
    website: 'https://clay.com',
    profession_ids: ['sales_professional', 'business_development', 'growth_hacker', 'founder'],
    industry: 'AI Outbound Prospecting & Data Enrichment',
    ai_use_case: 'Enrich leads across 50+ databases and write hyper-personalized 1-to-1 outreach',
    short_description: 'AI-powered data enrichment and automated outbound prospecting platform combining 50+ data providers.',
    why_relevant: 'Enables 1 sales rep or founder to execute the outbound volume of a 20-person BDR team.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26',
    recent_activity: 'Valued at $1.3B; launched autonomous AI research agents for enterprise B2B sales outbound.'
  },
  {
    id: 'phot_ai',
    company_name: 'Phot.AI',
    website: 'https://phot.ai',
    profession_ids: ['social_media_manager', 'marketing_professional', 'ecommerce_d2c', 'ui_ux_designer'],
    industry: 'Generative AI Visual Studio & Multimodal Editing',
    ai_use_case: 'Generate product photoshoots, graphic mockups, and AI background replacements',
    short_description: 'Multimodal AI photo studio for instant product mockups, background replacement, and creative design.',
    why_relevant: 'Included as an official 1-year bonus in Outskill; cuts graphic production time by 80% for social teams.',
    source: 'Official Program Bonus Suite',
    research_date: '2026-08-26',
    recent_activity: 'Launched 1-click batch image background replacement and AI marketing template generator.'
  },
  {
    id: 'opus_clip',
    company_name: 'Opus Clip',
    website: 'https://opus.pro',
    profession_ids: ['social_media_manager', 'influencer_marketer'],
    industry: 'Generative Video AI & Content Repurposing',
    ai_use_case: 'Repurpose long videos into 10 viral short clips with auto-captions and hook scores',
    short_description: 'Generative AI video repurposing tool that turns 1 long video into 10 viral short clips with auto-captions.',
    why_relevant: 'Enables social media managers to scale video output 10x from existing podcasts, webinars, and keynotes.',
    source: 'Verified Video AI Platform',
    research_date: '2026-08-26',
    recent_activity: 'Added AI B-roll generation and viral hook score prediction.'
  },

  // --- DESIGN & PRODUCT ---
  {
    id: 'figma_ai',
    company_name: 'Figma (AI Design Features)',
    website: 'https://figma.com',
    profession_ids: ['ui_ux_designer', 'product_manager'],
    industry: 'Collaborative UI/UX & Generative Interface Design',
    ai_use_case: 'Generate wireframe variations, auto-name layers, and automate design system scaling',
    short_description: 'Industry-standard design tool with integrated generative UI layouts, auto-naming, and prototype generation.',
    why_relevant: 'Transforms UI/UX workflows from manual vector drawing to generative concept iteration.',
    source: 'Verified Design Platform',
    research_date: '2026-08-26',
    recent_activity: 'Rolled out generative visual search, automated text translations, and design system autolayout.'
  },
  {
    id: 'framer_ai',
    company_name: 'Framer',
    website: 'https://framer.com',
    profession_ids: ['ui_ux_designer', 'growth_hacker', 'founder'],
    industry: 'Design-to-Code Website Generation',
    ai_use_case: 'Generate responsive websites and interactive prototypes from text prompts and Figma imports',
    short_description: 'AI-powered website builder that turns text prompts and Figma designs into production-ready responsive sites.',
    why_relevant: 'Empowers product designers to ship live interactive prototypes without developer handoff delays.',
    source: 'Verified Design-to-Code Platform',
    research_date: '2026-08-26',
    recent_activity: 'Launched generative layout variations and integrated localization engines.'
  },

  // --- SECURITY & DEVOPS ---
  {
    id: 'torq_io',
    company_name: 'Torq',
    website: 'https://torq.io',
    profession_ids: ['cybersecurity_analyst', 'devops_sre'],
    industry: 'Autonomous SecOps Hyperautomation',
    ai_use_case: 'Automate tier-1 alert investigations and orchestrate incident remediation runbooks',
    short_description: 'Autonomous hyperautomation platform for SecOps teams to investigate and remediate threats automatically.',
    why_relevant: 'Automates 90% of routine security tier-1 alert investigations, relieving SOC analyst fatigue.',
    source: 'Verified SecOps Platform',
    research_date: '2026-08-26',
    recent_activity: 'Raised $42M Series C; launched generative AI autonomous investigation bots.'
  },
  {
    id: 'kubiya_ai',
    company_name: 'Kubiya',
    website: 'https://kubiya.ai',
    profession_ids: ['devops_sre', 'software_engineer'],
    industry: 'AIOps & Conversational DevOps Agents',
    ai_use_case: 'Execute Kubernetes operations and developer infrastructure provisioning via natural language',
    short_description: 'Conversational AI agents for DevOps that execute cloud operations and Kubernetes tasks from Slack.',
    why_relevant: 'Enables SREs to automate self-service developer infrastructure provisioning and log debugging.',
    source: 'Verified AIOps Platform',
    research_date: '2026-08-26',
    recent_activity: 'Integrated autonomous role-based access control and generative post-mortem report generation.'
  },

  // --- CORE SOFTWARE ENGINEERING ---
  {
    id: 'cursor',
    company_name: 'Cursor (Anysphere)',
    website: 'https://cursor.com',
    profession_ids: ['software_engineer', 'software_developer', 'founder', 'student'],
    industry: 'Developer Tools & AI IDEs',
    ai_use_case: 'AI-assisted code editing, codebase indexing, and multi-file agentic refactoring',
    short_description: 'AI-first code editor built on VS Code with codebase indexing, intelligent multi-file editing, and agentic workflows.',
    why_relevant: 'Directly addresses engineer productivity; trained in Outskill curriculum for building AI Native workflows.',
    source: 'Engineering Accelerator Curriculum',
    research_date: '2026-08-26',
    recent_activity: 'Raised $60M Series A led by Benchmark, Andreessen Horowitz; widely adopted across tech teams.'
  },
  {
    id: 'v0_dev',
    company_name: 'v0 by Vercel',
    website: 'https://v0.dev',
    profession_ids: ['software_engineer', 'software_developer', 'ui_ux_designer', 'founder'],
    industry: 'Generative UI & Frontend Systems',
    ai_use_case: 'Generate production-ready React / Tailwind components from natural language descriptions',
    short_description: 'Generative UI system that creates accessible, production-ready React components from natural language prompts.',
    why_relevant: 'Demonstrates rapid UI prototyping without manual CSS scaffolding; relevant for full-stack acceleration.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26',
    recent_activity: 'Launched support for full Next.js App Router projects with dynamic API route generation.'
  },
  {
    id: 'cognition_devin',
    company_name: 'Cognition (Devin)',
    website: 'https://cognition.ai',
    profession_ids: ['software_engineer', 'software_developer', 'founder'],
    industry: 'Autonomous Software Agents',
    ai_use_case: 'Autonomous planning, coding, debugging, and deploying of entire software applications',
    short_description: 'Autonomous software engineering agent capable of planning, coding, debugging, and deploying entire web applications.',
    why_relevant: 'Demonstrates why senior engineers must shift from writing manual syntax to orchestrating AI coding agents.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26',
    recent_activity: 'Raised $175M at $2B valuation led by Founders Fund; deployed across enterprise engineering teams.'
  },

  // --- DATA & ANALYTICS ---
  {
    id: 'akkio',
    company_name: 'Akkio',
    website: 'https://akkio.com',
    profession_ids: ['data_analyst', 'business_analyst', 'marketing_professional'],
    industry: 'Generative Business Intelligence & Predictive Analytics',
    ai_use_case: 'Automate data preparation, predictive forecasting, and conversational dashboard querying',
    short_description: 'Generative AI analytics and machine learning platform built for business data analysts.',
    why_relevant: 'Automates data preparation, predictive forecasting, and conversational dashboard querying.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26'
  },
  {
    id: 'numerous_ai',
    company_name: 'Numerous AI',
    website: 'https://numerous.ai',
    profession_ids: ['data_analyst', 'business_analyst', 'finance_professional', 'accountant', 'banker'],
    industry: 'AI Formula Automation in Spreadsheets',
    ai_use_case: 'Run ChatGPT formulas directly inside Google Sheets and Microsoft Excel',
    short_description: 'AI formulas inside Google Sheets and Microsoft Excel for text parsing, categorization, and calculations.',
    why_relevant: 'Included as an official 1-year bonus license in Outskill program ($120/yr value).',
    source: 'Official Program Partner (1 Year Access)',
    research_date: '2026-08-26'
  },
  {
    id: 'langchain',
    company_name: 'LangChain / LangSmith',
    website: 'https://langchain.com',
    profession_ids: ['data_scientist', 'software_engineer', 'prompt_engineer_llmops'],
    industry: 'LLM Frameworks & Observability',
    ai_use_case: 'Framework for building context-aware reasoning applications and evaluation test harnesses',
    short_description: 'Framework and developer platform for building, debugging, testing, and monitoring context-aware LLM applications.',
    why_relevant: 'Taught extensively across Outskill Engineering Accelerator for building enterprise RAG and agents.',
    source: 'Engineering Accelerator Curriculum',
    research_date: '2026-08-26'
  },
  {
    id: 'weaviate',
    company_name: 'Weaviate',
    website: 'https://weaviate.io',
    profession_ids: ['data_scientist', 'software_engineer'],
    industry: 'Vector Databases & Semantic Search',
    ai_use_case: 'Store vector embeddings and data objects for hybrid keyword + vector retrieval',
    short_description: 'Open-source vector database allowing developers to store data objects and vector embeddings for semantic search.',
    why_relevant: 'Core component in Outskill RAG architecture modules (Page 21 of Engineering PDF).',
    source: 'Engineering Accelerator Curriculum',
    research_date: '2026-08-26'
  },

  // --- PRODUCT, OPERATIONS & SPECIALIZED ---
  {
    id: 'kraftful',
    company_name: 'Kraftful',
    website: 'https://kraftful.com',
    profession_ids: ['product_manager', 'business_analyst'],
    industry: 'User Feedback Synthesis & PRD Generation',
    ai_use_case: 'Synthesize thousands of user reviews and support tickets into prioritized product specs',
    short_description: 'AI that synthesizes thousands of user reviews, support tickets, and call transcripts into actionable product insights.',
    why_relevant: 'Saves product managers dozens of hours per sprint on feedback analysis and PRD drafting.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26'
  },
  {
    id: 'fireflies_ai',
    company_name: 'Fireflies AI',
    website: 'https://fireflies.ai',
    profession_ids: ['project_manager', 'customer_success_manager', 'operations_professional', 'consultant'],
    industry: 'Automated Meeting Transcription & Voice Intelligence',
    ai_use_case: 'Record, transcribe, search, and extract action items from client meetings',
    short_description: 'AI meeting assistant that automatically transcribes, summarizes, and extracts action items across web conferences.',
    why_relevant: 'Included as an official 6-month bonus in Outskill program.',
    source: 'Official Program Partner (6 Months Access)',
    research_date: '2026-08-26'
  },
  {
    id: 'superjoin',
    company_name: 'Superjoin',
    website: 'https://superjoin.ai',
    profession_ids: ['operations_professional', 'consultant', 'chief_of_staff', 'finance_professional', 'ai_automation_specialist'],
    industry: 'Bidirectional Database-to-Spreadsheet Connectors',
    ai_use_case: 'Connect Postgres, Snowflake, and Salesforce directly to Google Sheets with 2-way sync',
    short_description: 'Two-way data connector between Postgres, Snowflake, Salesforce, and Google Sheets without code.',
    why_relevant: 'Included as an official 1-year bonus license in Outskill program.',
    source: 'Official Program Partner (1 Year Access)',
    research_date: '2026-08-26'
  },
  {
    id: 'emily_ai',
    company_name: 'Emily AI',
    website: 'https://emily.ai',
    profession_ids: ['entrepreneur', 'founder', 'chief_of_staff', 'operations_professional'],
    industry: 'AI Executive Assistant & Workflow Delegation',
    ai_use_case: 'Automate calendar scheduling, inbox triage, and task delegation',
    short_description: 'AI-powered executive assistant that handles calendar scheduling, task delegation, and inbox triage.',
    why_relevant: 'Included as an official 1-year bonus license in Outskill program.',
    source: 'Official Program Partner (1 Year Access)',
    research_date: '2026-08-26'
  },
  {
    id: 'humanic_ai',
    company_name: 'Humanic AI',
    website: 'https://humanic.ai',
    profession_ids: ['hr_professional', 'recruiter'],
    industry: 'Talent Intelligence & AI Candidate Screening',
    ai_use_case: 'Autonomous candidate matching and resume evaluation based on contextual criteria',
    short_description: 'AI-powered candidate evaluation, talent intelligence, and predictive hiring platform.',
    why_relevant: 'Included as an official 1-year bonus license in Outskill program.',
    source: 'Official Program Partner (1 Year Access)',
    research_date: '2026-08-26'
  },
  {
    id: 'finch_3d',
    company_name: 'Finch 3D',
    website: 'https://finch3d.com',
    profession_ids: ['architect', 'civil_engineer'],
    industry: 'Generative Architecture & Spatial Layout',
    ai_use_case: 'Generate building massing studies and validate spatial zoning in real time 3D',
    short_description: 'Generative architecture tool for spatial layout optimization and instant building rule validation in 3D.',
    why_relevant: 'Accelerates schematic design and spatial planning by evaluating zoning constraints in real time.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26'
  },
  {
    id: 'abridge',
    company_name: 'Abridge',
    website: 'https://abridge.com',
    profession_ids: ['healthcare_professional'],
    industry: 'Clinical Ambient AI Scribe',
    ai_use_case: 'Convert medical dialogues into structured clinical documentation in EHRs',
    short_description: 'Generative AI medical conversation scribe that converts patient-doctor discussions into structured clinical notes in EHRs.',
    why_relevant: 'Saves physicians over 2 hours of daily clinical documentation time; audited in healthcare AI trends.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26'
  },
  {
    id: 'harvey_ai',
    company_name: 'Harvey AI',
    website: 'https://harvey.ai',
    profession_ids: ['lawyer_legal'],
    industry: 'Enterprise Legal AI & Contract Intelligence',
    ai_use_case: 'Contract redlining, legal precedent discovery, and regulatory compliance analysis',
    short_description: 'Generative AI platform built on OpenAI foundation models specifically for major law firms and enterprise legal teams.',
    why_relevant: 'Audited across top law firms (e.g. Allen & Overy, PwC) for automated contract review and litigation research.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26'
  },
  {
    id: 'magicschool_ai',
    company_name: 'MagicSchool AI',
    website: 'https://magicschool.ai',
    profession_ids: ['teacher_educator'],
    industry: 'AI Teaching Assistants & Lesson Planning',
    ai_use_case: 'Generate customized lesson plans, rubrics, and automated student feedback',
    short_description: 'AI platform for educators with 60+ tools for lesson planning, rubric generation, IEP drafting, and student feedback.',
    why_relevant: 'Adopted by over 2 million educators worldwide to reduce administrative prep time.',
    source: 'Industry Verified Startups',
    research_date: '2026-08-26'
  }
];

export const FALLBACK_VERIFIED_STARTUPS = VERIFIED_STARTUPS.slice(0, 4);
