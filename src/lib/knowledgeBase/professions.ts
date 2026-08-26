import { Profession } from '../types';

export const DEFAULT_PROFESSIONS: Profession[] = [
  // --- MODERN AI & AUTOMATION ROLES ---
  {
    id: 'ai_generalist',
    name: 'AI Generalist / AI-First Problem Solver',
    category: 'Engineering & Technology',
    ai_use_cases: [
      'Orchestrate autonomous agent fleets across customer operations, research, and sales pipelines',
      'Build end-to-end full-stack applications in 48 hours using multimodal foundation models',
      'Deploy zero-cloud local desktop automations and private RAG knowledge assistants',
      'Monetize practical AI capabilities by launching bespoke client solutions and AI agencies'
    ],
    potential_pain_points: [
      'Knowing theoretical AI concepts but struggling to ship end-to-end commercial solutions at speed',
      'Getting stuck in tutorial loops without a structured production deployment framework',
      'Transitioning from an operational specialist into a recognized AI-first leader'
    ],
    industry_trend: 'The AI Generalist is the defining role of the AI era — professionals who orchestrate agents, automate complex workflows, and solve business problems 10x faster without engineering bottlenecks.',
    recommended_track: 'generalist_india',
    keywords: ['ai generalist', 'ai builder', 'problem solver', 'automation', 'agentic ai', 'orchestration']
  },
  {
    id: 'influencer_marketer',
    name: 'Influencer Marketing / Creator Economy Lead',
    category: 'Marketing & Growth',
    ai_use_cases: [
      'Automate creator discovery, audience authenticity scoring, and niche engagement audits',
      'Generate personalized creator outreach sequences and automated collaboration contract drafts',
      'Predict campaign ROI and sales attribution across hundreds of influencer promo codes and affiliate links',
      'Repurpose creator content into high-converting paid ad variations with AI video re-formatting'
    ],
    potential_pain_points: [
      'Hundreds of manual hours spent DMing creators and tracking deliverables in messy spreadsheets',
      'Risk of influencer fraud and fake engagement eating campaign budgets',
      'Difficulty measuring real sales attribution and calculating accurate creator ROAS'
    ],
    industry_trend: 'Influencer marketing is being transformed by AI talent intelligence platforms that audit audience credibility, automate rate negotiations, and generate programmatic creator campaigns.',
    recommended_track: 'generalist_india',
    keywords: ['influencer', 'creator economy', 'creator marketing', 'brand partnerships', 'ugc', 'social media', 'tiktok', 'instagram']
  },
  {
    id: 'ai_automation_specialist',
    name: 'AI Automation Specialist / Workflow Builder',
    category: 'Engineering & Technology',
    ai_use_cases: [
      'Build multi-agent autonomous workflows connecting CRMs, databases, and communication channels',
      'Eliminate 80% of manual repetitive tasks with no-code/low-code AI pipelines',
      'Deploy custom internal webhook agents for instant data ingestion and notification routing',
      'Package and monetize reusable business workflow templates for enterprise clients'
    ],
    potential_pain_points: [
      'Fragile legacy automations breaking whenever external API schemas or UI layouts update',
      'Client hesitation around data privacy and enterprise cloud security',
      'Pricing and packaging custom automation services for maximum recurring revenue'
    ],
    industry_trend: 'Workflow builders are moving from simple linear Zapier triggers to autonomous agentic loops that reason, retry errors, and execute complex multi-system operations.',
    recommended_track: 'generalist_india',
    keywords: ['automation', 'workflow', 'n8n', 'make', 'zapier', 'agentic', 'no-code']
  },
  {
    id: 'prompt_engineer_llmops',
    name: 'Prompt Engineer / LLM Ops',
    category: 'Engineering & Technology',
    ai_use_cases: [
      'Design, evaluate, and benchmark complex system prompts across Claude, GPT-4o, and open-source models',
      'Implement defensive prompt architectures against jailbreaks and prompt injections',
      'Build few-shot evaluation datasets and automated LLM regression test pipelines',
      'Optimize prompt token latency and inference cost in production RAG systems'
    ],
    potential_pain_points: [
      'Prompt brittleness and unexpected regressions when foundation models update in production',
      'Balancing output accuracy with token generation costs and API latency budgets',
      'Lack of standardized automated testing suites for non-deterministic model responses'
    ],
    industry_trend: 'Prompt engineering has matured into LLM Ops, focusing on rigorous prompt evaluation harnesses, structured output schemas, and synthetic data generation.',
    recommended_track: 'engineering',
    keywords: ['prompt engineer', 'llm ops', 'system prompt', 'evals', 'benchmarking', 'few-shot']
  },
  {
    id: 'growth_hacker',
    name: 'Growth Hacker / Programmatic Growth Lead',
    category: 'Marketing & Growth',
    ai_use_cases: [
      'Deploy programmatic SEO engines that generate 1,000+ high-ranking long-tail landing pages',
      'Automate B2B lead scraping, account enrichment, and personalized omnichannel outbound',
      'Build viral referral loops, automated LinkedIn lead magnets, and interactive calculators',
      'Run autonomous CRO multivariate headline and landing page copywriting experiments'
    ],
    potential_pain_points: [
      'Diminishing returns on traditional paid advertising due to skyrocketing customer acquisition costs',
      'Engineering delays when trying to launch quick growth experiments or landing page tests',
      'Managing massive data scraping and enrichment pipelines without getting rate-limited'
    ],
    industry_trend: 'Growth marketing is driven by AI agents that continuously test acquisition loops, personalize landing pages in real time, and programmatically scale organic reach.',
    recommended_track: 'generalist_india',
    keywords: ['growth hacker', 'growth', 'programmatic seo', 'viral loops', 'cac', 'conversion rate', 'funnel']
  },
  {
    id: 'social_media_manager',
    name: 'Social Media Manager / Content Strategist',
    category: 'Marketing & Growth',
    ai_use_cases: [
      'Repurpose single podcast or long-form video into 20+ platform-optimized threads, clips, and carousels',
      'Generate viral hook variations, caption copy, and trending hashtag clusters with AI assistants',
      'Automate community engagement, comment replies, and inbound DM lead triage',
      'Track brand sentiment and competitor viral content trends across TikTok, X, and LinkedIn'
    ],
    potential_pain_points: [
      'Burnout from the constant daily treadmill of multi-platform content creation and scheduling',
      'Low organic reach and difficulty turning vanity followers into paying customers',
      'Time-consuming manual video editing and graphic formatting for different aspect ratios'
    ],
    industry_trend: 'Social media management is transitioning into multimodal content engine orchestration, where one manager uses AI to output the volume and quality of an entire creative agency.',
    recommended_track: 'generalist_india',
    keywords: ['social media', 'content strategist', 'copywriter', 'tiktok', 'instagram', 'linkedin', 'threads', 'x']
  },
  {
    id: 'ui_ux_designer',
    name: 'UI/UX Designer / Product Designer',
    category: 'Product & Project Management',
    ai_use_cases: [
      'Generate interactive design wireframes and production-ready React components from text prompts',
      'Synthesize user usability testing recordings into prioritized UX friction heatmaps',
      'Automate design system component variants, responsive layouts, and WCAG accessibility audits',
      'Generate photorealistic user personas, journey maps, and high-fidelity product mockups'
    ],
    potential_pain_points: [
      'Endless iterative layout adjustments and manual responsive resizing across screen sizes',
      'Friction between design intent and engineering handoff execution',
      'Pressure to rapidly produce dozens of conceptual variations during client design sprints'
    ],
    industry_trend: 'UI/UX design is converging with generative frontends, where designers use AI tools to generate functional, code-ready interfaces directly from conceptual sketches.',
    recommended_track: 'generalist_india',
    keywords: ['ui', 'ux', 'designer', 'product designer', 'figma', 'wireframe', 'prototype', 'design system']
  },
  {
    id: 'cybersecurity_analyst',
    name: 'Cybersecurity Analyst / SecOps',
    category: 'Engineering & Technology',
    ai_use_cases: [
      'Deploy autonomous threat detection agents for real-time log anomaly and intrusion analysis',
      'Automate phishing campaign simulation, triage, and email header threat extraction',
      'Generate automated compliance audit reports for SOC2, ISO27001, and HIPAA frameworks',
      'Analyze zero-day exploit disclosures and generate proactive firewall mitigation rules'
    ],
    potential_pain_points: [
      'Alert fatigue: drowning in thousands of daily security alerts across disconnected dashboards',
      'Shortage of security engineering bandwidth to remediate vulnerabilities quickly',
      'Keeping up with sophisticated AI-driven cyber threats and social engineering attacks'
    ],
    industry_trend: 'Cybersecurity is pivoting to autonomous SecOps agents that triage 90% of low-level alerts, investigate IOCs in seconds, and execute incident response runbooks automatically.',
    recommended_track: 'engineering',
    keywords: ['cybersecurity', 'security', 'secops', 'soc', 'threat intelligence', 'compliance', 'penetration testing']
  },
  {
    id: 'devops_sre',
    name: 'DevOps / Site Reliability Engineer (SRE)',
    category: 'Engineering & Technology',
    ai_use_cases: [
      'Deploy autonomous incident response agents that diagnose production stack traces in seconds',
      'Generate verified Kubernetes manifests, Terraform IaC scripts, and CI/CD pipeline configs',
      'Automate cloud infrastructure cost anomaly detection and idle resource scaling',
      'Execute automated canary deployments and post-mortem incident summary drafts'
    ],
    potential_pain_points: [
      'Woken up at 3 AM for complex multi-service production outages with obscure logs',
      'Managing massive, sprawling Terraform and Kubernetes configurations without errors',
      'Pressure to slash enterprise AWS/GCP cloud bills without impacting service reliability'
    ],
    industry_trend: 'DevOps is becoming AIOps, where intelligent agentic monitors debug distributed systems, predict service failures, and self-heal infrastructure before user impact.',
    recommended_track: 'engineering',
    keywords: ['devops', 'sre', 'cloud', 'kubernetes', 'terraform', 'aws', 'infrastructure', 'ci/cd', 'docker']
  },
  {
    id: 'ecommerce_d2c',
    name: 'E-Commerce Specialist / D2C Founder',
    category: 'Leadership & Entrepreneurship',
    ai_use_cases: [
      'Generate hundreds of optimized SEO product descriptions and catalog tags automatically',
      'Deploy 24/7 AI shopping assistants that recommend products and recover abandoned carts',
      'Create studio-quality product photoshoots and promotional video ads with multimodal AI',
      'Automate inventory demand forecasting and supplier purchase order calculations'
    ],
    potential_pain_points: [
      'High product photography and videography costs for seasonal catalog launches',
      'Customer cart abandonment and rising Meta ad costs eroding profit margins',
      'Manual customer support inquiries regarding order tracking and return policies'
    ],
    industry_trend: 'E-commerce brands are scaling with AI-native visual studios and autonomous conversational shopping agents that increase on-site conversion by 30%.',
    recommended_track: 'generalist_india',
    keywords: ['ecommerce', 'd2c', 'shopify', 'amazon', 'dropshipping', 'online retail', 'merchandising']
  },
  {
    id: 'customer_success_manager',
    name: 'Customer Success Manager (CSM)',
    category: 'Operations & Support',
    ai_use_cases: [
      'Analyze customer telemetry and support ticket sentiment to predict churn 60 days in advance',
      'Automate Quarterly Business Review (QBR) deck generation and ROI calculation reports',
      'Generate personalized customer onboarding emails, milestone check-ins, and feature nudges',
      'Synthesize product feedback across all customer accounts for the product roadmap team'
    ],
    potential_pain_points: [
      'Managing too many accounts simultaneously, leading to reactive firefighting instead of proactive strategy',
      'Hours spent manually gathering usage metrics across multiple tools for client review decks',
      'Surprise customer churn due to missed early health score decline signals'
    ],
    industry_trend: 'Customer Success is leveraging AI health-monitoring agents to surface account risks, draft tailored expansion proposals, and automate 80% of routine client communications.',
    recommended_track: 'generalist_india',
    keywords: ['customer success', 'csm', 'churn', 'qbr', 'retention', 'onboarding', 'account management']
  },
  {
    id: 'chief_of_staff',
    name: 'Chief of Staff / Strategy Lead',
    category: 'Leadership & Entrepreneurship',
    ai_use_cases: [
      'Synthesize cross-departmental OKR progress, budget variances, and executive blockers into weekly briefs',
      'Draft board presentations, investor quarterly letters, and strategic company memos in minutes',
      'Evaluate new market opportunities and competitive threats using autonomous research agents',
      'Lead AI transformation initiatives and deploy operational workflow bots across departments'
    ],
    potential_pain_points: [
      'Chasing department heads for status updates and reconciling conflicting operational metrics',
      'Overwhelming volume of strategic priorities with limited bandwidth for deep execution',
      'Translating CEO high-level vision into actionable departmental operating plans'
    ],
    industry_trend: 'Chiefs of Staff are becoming the internal AI transformation champions, orchestrating AI agents to run executive briefings, market analysis, and cross-functional operating rhythms.',
    recommended_track: 'generalist_india',
    keywords: ['chief of staff', 'strategy', 'executive', 'ceo office', 'operations', 'board of directors', 'okr']
  },

  // --- CORE TECHNICAL & ENGINEERING ROLES ---
  {
    id: 'software_engineer',
    name: 'Software Engineer',
    category: 'Engineering & Technology',
    ai_use_cases: [
      'Automate boilerplate code, test suites, and repetitive refactoring',
      'Orchestrate autonomous coding agents for end-to-end feature implementations',
      'Deploy production-ready Retrieval-Augmented Generation (RAG) pipelines',
      'Build internal AI microservices and incident response workflows'
    ],
    potential_pain_points: [
      'Stuck writing repetitive boilerplate instead of designing high-level architecture',
      'Slow prototyping cycles when testing new frameworks or building POCs',
      'Uncertainty around deploying and managing autonomous AI agents in production',
      'Difficulty bridging the gap between basic Copilot usage and building AI systems'
    ],
    industry_trend: 'Software engineering is shifting from manual line-by-line coding to agentic orchestration, where AI Native Engineers direct autonomous coding agents, manage context windows, and build custom AI pipelines.',
    recommended_track: 'engineering',
    keywords: ['software', 'engineer', 'backend', 'frontend', 'fullstack', 'coding', 'developer', 'tech']
  },
  {
    id: 'software_developer',
    name: 'Software Developer',
    category: 'Engineering & Technology',
    ai_use_cases: [
      'Accelerate feature shipping with AI-assisted IDEs and agents',
      'Automate API integration scaffolding and mock data generation',
      'Build custom AI plugins, CLI tools, and automation scripts',
      'Integrate LLM endpoints and vector databases into existing web/mobile apps'
    ],
    potential_pain_points: [
      'Spending too many hours on syntax troubleshooting and dependency debugging',
      'Backlogged Jira tickets with slow turnaround times for routine features',
      'Fear of being commoditized by basic AI coding tools without deeper system skills'
    ],
    industry_trend: 'Developers who leverage AI tools and agent workflows are delivering 3x–5x faster, moving from task-level implementation to architectural problem solvers.',
    recommended_track: 'engineering',
    keywords: ['developer', 'programmer', 'web dev', 'app dev', 'coding', 'software']
  },
  {
    id: 'data_analyst',
    name: 'Data Analyst',
    category: 'Data & Analytics',
    ai_use_cases: [
      'Automate repetitive SQL generation, data cleaning, and schema mapping',
      'Build automated natural-language query interfaces over internal databases',
      'Generate initial draft insight reports and anomaly detection summaries in seconds',
      'Create repeatable AI-driven data preparation and pipeline automations'
    ],
    potential_pain_points: [
      'Manual, repetitive data cleaning and field mapping eating up to 40% of daily time',
      'Constant ad-hoc report requests from business stakeholders blocking deep exploratory work',
      'Complex SQL query troubleshooting and dashboard maintenance overhead'
    ],
    industry_trend: 'Data analytics is evolving from static dashboard maintenance to autonomous data pipelines and conversational querying agents that surface actionable business intelligence instantly.',
    recommended_track: 'generalist_india',
    keywords: ['data', 'analyst', 'sql', 'tableau', 'powerbi', 'reporting', 'analytics', 'etl']
  },
  {
    id: 'data_scientist',
    name: 'Data Scientist',
    category: 'Data & Analytics',
    ai_use_cases: [
      'Accelerate exploratory data analysis and feature engineering with LLM assistants',
      'Fine-tune open-source models and build hybrid RAG + semantic search architectures',
      'Automate model performance evaluation, benchmarking, and synthetic data generation',
      'Deploy autonomous analytics agents that detect patterns across multi-modal datasets'
    ],
    potential_pain_points: [
      'Lengthy time-to-production for experimental ML models due to engineering bottlenecks',
      'Managing cost, latency, and context limitations in production GenAI deployments',
      'Balancing traditional statistical modeling with rapid foundation model adoption'
    ],
    industry_trend: 'Data science is pivoting rapidly toward foundation model engineering, composite RAG pipelines, and agentic evaluation frameworks that replace fragile custom training runs.',
    recommended_track: 'engineering',
    keywords: ['data scientist', 'ml', 'machine learning', 'python', 'deep learning', 'statistics']
  },
  {
    id: 'business_analyst',
    name: 'Business Analyst',
    category: 'Data & Analytics',
    ai_use_cases: [
      'Convert ambiguous business requirements into structured technical specs and user stories',
      'Automate process mapping, gap analysis, and KPI tracking workflows',
      'Synthesize customer interviews and market data into actionable executive summaries',
      'Build no-code/low-code AI prototypes to validate business solutions with stakeholders'
    ],
    potential_pain_points: [
      'Bottlenecks waiting on engineering teams to build simple stakeholder validation prototypes',
      'Hours spent manually synthesizing disparate spreadsheets and stakeholder notes',
      'Difficulty keeping requirements and documentation synchronized across fast-moving sprints'
    ],
    industry_trend: 'Business analysts are becoming AI problem solvers who prototype working workflow automations directly, cutting requirements-to-validation cycles from weeks to hours.',
    recommended_track: 'generalist_india',
    keywords: ['business analyst', 'ba', 'requirements', 'process', 'scrum', 'agile', 'kpi']
  },
  {
    id: 'product_manager',
    name: 'Product Manager',
    category: 'Product & Project Management',
    ai_use_cases: [
      'Draft PRDs, user stories, and acceptance criteria in minutes with custom AI templates',
      'Synthesize thousands of user feedback tickets, churn surveys, and app reviews instantly',
      'Build interactive functional prototypes without waiting for developer sprint allocations',
      'Run AI-assisted competitive benchmarking and feature matrix evaluations'
    ],
    potential_pain_points: [
      'Engineering bandwidth constraints delaying validation of high-potential feature ideas',
      'Drowning in feedback synthesis and documentation at the expense of strategic roadmap thinking',
      'Balancing customer demand for AI features with practical technical feasibility'
    ],
    industry_trend: 'Product management is transitioning into an AI-augmented discipline where PMs use AI to ship working prototypes, analyze telemetry in real time, and build AI-native user experiences.',
    recommended_track: 'generalist_india',
    keywords: ['product', 'pm', 'product manager', 'prd', 'roadmap', 'features', 'user feedback']
  },
  {
    id: 'project_manager',
    name: 'Project Manager',
    category: 'Product & Project Management',
    ai_use_cases: [
      'Automate meeting transcription, action-item extraction, and task delegation tracking',
      'Predict project risks, timeline slips, and resource constraints using predictive AI models',
      'Generate real-time executive progress dashboards and stakeholder status updates',
      'Streamline sprint planning, dependency tracking, and cross-functional communications'
    ],
    potential_pain_points: [
      'Chasing cross-functional team members manually for routine task updates and status checks',
      'Time-consuming status report creation that becomes obsolete within 24 hours',
      'Managing scope creep and unexpected dependencies without real-time risk visibility'
    ],
    industry_trend: 'Project management is shifting toward automated governance where AI agents manage routine follow-ups, detect schedule risks proactively, and maintain living project documentation.',
    recommended_track: 'generalist_india',
    keywords: ['project manager', 'pmp', 'scrum master', 'agile', 'delivery', 'operations', 'timeline']
  },
  {
    id: 'marketing_professional',
    name: 'Marketing Professional',
    category: 'Marketing & Growth',
    ai_use_cases: [
      'Generate multi-channel campaign copy, personalized email sequences, and ad variations at scale',
      'Automate content repurposing from long-form webinars into videos, threads, and carousels',
      'Build autonomous research agents for audience segmentation and competitive messaging analysis',
      'Deploy AI lead qualification and personalized landing page messaging engines'
    ],
    potential_pain_points: [
      'Pressure to produce 10x more multi-channel content without additional headcount or budget',
      'Slow creative feedback loops and ad fatigue across paid acquisition channels',
      'Difficulty proving clear ROI on complex multi-touch marketing campaigns'
    ],
    industry_trend: 'Marketing is moving from manual creative production to algorithmic growth orchestration, where marketers build automated content engines and agentic lead qualification systems.',
    recommended_track: 'generalist_india',
    keywords: ['marketing', 'brand', 'content', 'campaigns', 'growth', 'creative', 'copywriting']
  },
  {
    id: 'digital_marketer',
    name: 'Digital Marketer',
    category: 'Marketing & Growth',
    ai_use_cases: [
      'Automate PPC ad copy generation, keyword clustering, and bid optimization analysis',
      'Execute programmatic SEO and high-volume search intent landing page workflows',
      'Build automated conversion rate optimization (CRO) testing and copywriting loops',
      'Deploy autonomous analytics scrapers to monitor competitor ad spend and creative shifts'
    ],
    potential_pain_points: [
      'Rising customer acquisition costs (CAC) and declining ad performance across legacy platforms',
      'Manual keyword research and spreadsheet maintenance taking up valuable testing bandwidth',
      'Struggling to keep up with rapid search engine algorithm updates and AI overview shifts'
    ],
    industry_trend: 'Digital marketing is being transformed by generative search engines and autonomous ad creative systems that continuously iterate on copy, creative, and bidding based on real-time ROAS.',
    recommended_track: 'generalist_india',
    keywords: ['digital marketing', 'seo', 'sem', 'ppc', 'google ads', 'meta ads', 'performance marketing']
  },
  {
    id: 'sales_professional',
    name: 'Sales Professional',
    category: 'Sales & Business Development',
    ai_use_cases: [
      'Conduct 60-second deep prospect research and company intelligence prior to sales calls',
      'Generate highly personalized cold outreach emails and LinkedIn connection sequences',
      'Automate CRM data entry, call notes transcription, and follow-up email drafts',
      'Use real-time objection handling prompts and competitive intelligence during live calls'
    ],
    potential_pain_points: [
      'Spending up to 60% of daily selling time on administrative CRM updates and manual prospect research',
      'Low response rates on generic email templates and outbound outreach campaigns',
      'Inconsistent follow-ups and missed buying signals across extensive pipeline stages'
    ],
    industry_trend: 'B2B sales is shifting to AI-driven consultative selling, where autonomous agents handle prospecting research, draft contextual follow-ups, and surface buying signals in real time.',
    recommended_track: 'generalist_india',
    keywords: ['sales', 'account executive', 'ae', 'bdr', 'sdr', 'closing', 'pipeline', 'outreach']
  },
  {
    id: 'business_development',
    name: 'Business Development',
    category: 'Sales & Business Development',
    ai_use_cases: [
      'Automate target account mapping, partner identification, and ecosystem research',
      'Generate tailored partnership proposals and value proposition decks with AI tools',
      'Monitor market signals, executive hirings, and funding rounds for timely outreach',
      'Deploy multi-channel outbound outreach workflows with personalized AI messaging'
    ],
    potential_pain_points: [
      'Long sales/partnership cycles with slow initial discovery and qualification',
      'Difficulty finding the exact decision-makers and organizational champions at enterprise accounts',
      'Manual synthesis of market intelligence leading to missed strategic partnership windows'
    ],
    industry_trend: 'Business development is leveraging AI intelligence agents to map ecosystem networks, predict partnership synergy, and automate hyper-personalized outbound engagements.',
    recommended_track: 'generalist_india',
    keywords: ['business development', 'bizdev', 'bd', 'partnerships', 'alliances', 'enterprise']
  },
  {
    id: 'hr_professional',
    name: 'HR Professional',
    category: 'HR & Recruitment',
    ai_use_cases: [
      'Automate employee onboarding workflows, document collection, and FAQ assistance',
      'Draft standardized job descriptions, performance review rubrics, and internal policies',
      'Analyze employee sentiment and engagement surveys with semantic AI categorization',
      'Build internal knowledge-base chatbots for instant employee benefits and policy queries'
    ],
    potential_pain_points: [
      'Drowning in repetitive administrative inquiries regarding leave policies, benefits, and payroll',
      'Subjective or inconsistent performance review documentation across departments',
      'Balancing transactional HR admin with strategic culture and talent development initiatives'
    ],
    industry_trend: 'Human Resources is evolving from manual HR operations to AI-enabled employee experience platforms where intelligent conversational agents handle 80% of routine inquiries.',
    recommended_track: 'generalist_india',
    keywords: ['hr', 'human resources', 'people ops', 'talent', 'onboarding', 'culture', 'employee']
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    category: 'HR & Recruitment',
    ai_use_cases: [
      'Automate candidate sourcing, boolean search generation, and LinkedIn talent intelligence',
      'Score and match resumes against complex job requirements with contextual AI criteria',
      'Generate personalized candidate outreach messages that yield 2x-3x higher response rates',
      'Conduct automated preliminary screening interviews and summarize structured candidate notes'
    ],
    potential_pain_points: [
      'Hours spent manually parsing through hundreds of unqualified resumes per job opening',
      'Low candidate response rates to outbound sourcing messages on LinkedIn and email',
      'High scheduling overhead and delayed interview feedback loops slowing time-to-hire'
    ],
    industry_trend: 'Talent acquisition is being redefined by AI sourcing agents, automated interview intelligence tools, and contextual matching platforms that reduce time-to-hire by 50%.',
    recommended_track: 'generalist_india',
    keywords: ['recruiter', 'talent acquisition', 'sourcing', 'hiring', 'headhunter', 'interviews']
  },
  {
    id: 'finance_professional',
    name: 'Finance Professional',
    category: 'Finance & Banking',
    ai_use_cases: [
      'Automate financial statement variance analysis, ledger reconciliations, and audit trails',
      'Build dynamic forecasting models and scenario simulation workflows with AI formula engines',
      'Extract data from multi-format invoices, receipts, and vendor agreements automatically',
      'Generate first-draft executive board commentary and financial summary presentations'
    ],
    potential_pain_points: [
      'Manual, error-prone data extraction across disconnected ERPs and legacy spreadsheets',
      'High-stress month-end and quarter-end close cycles with tight reporting deadlines',
      'Limited bandwidth for strategic financial modeling due to repetitive transaction processing'
    ],
    industry_trend: 'Corporate finance is adopting autonomous financial agents for real-time ledger auditing, automated FP&A forecasting, and touchless invoice-to-pay workflows.',
    recommended_track: 'generalist_india',
    keywords: ['finance', 'fpa', 'financial analyst', 'forecasting', 'budgeting', 'cfo', 'variance']
  },
  {
    id: 'accountant',
    name: 'Accountant',
    category: 'Finance & Banking',
    ai_use_cases: [
      'Automate document classification, transaction categorization, and invoice ledger mapping',
      'Speed up tax compliance preparation, deductions analysis, and regulatory checks',
      'Generate automated reconciliations between bank statements and general ledger entries',
      'Deploy conversational AI assistants to query accounting standards and tax codes'
    ],
    potential_pain_points: [
      'Tedious manual entry of receipts, bills, and line-item categorization',
      'Peak season burnout during tax filing periods and quarterly closes',
      'Risk of human oversight and data mismatches across complex client accounts'
    ],
    industry_trend: 'Accounting is shifting from historical record-keeping to proactive financial advisory, powered by zero-cloud OCR extraction and autonomous reconciliation tools.',
    recommended_track: 'generalist_india',
    keywords: ['accountant', 'cpa', 'ca', 'bookkeeping', 'tax', 'audit', 'general ledger', 'reconciliation']
  },
  {
    id: 'banker',
    name: 'Banker',
    category: 'Finance & Banking',
    ai_use_cases: [
      'Automate credit appraisal, loan document verification, and debt service calculations',
      'Screen KYC and anti-money laundering (AML) regulatory compliance docs in seconds',
      'Generate customized wealth management insights and portfolio briefing notes for clients',
      'Synthesize economic research reports and market updates into client communication briefs'
    ],
    potential_pain_points: [
      'Lengthy compliance verification cycles delaying credit approval and loan disbursements',
      'Heavy regulatory documentation burden taking time away from client relationship management',
      'Risk of compliance penalties due to subtle regulatory oversights in complex filings'
    ],
    industry_trend: 'Banking is utilizing AI credit intelligence and automated compliance agents to accelerate commercial underwriting from weeks to hours while ensuring strict regulatory auditability.',
    recommended_track: 'generalist_india',
    keywords: ['banker', 'commercial banking', 'retail banking', 'loans', 'underwriting', 'kyc', 'aml']
  },
  {
    id: 'trader_investment',
    name: 'Trader / Investment Professional',
    category: 'Finance & Banking',
    ai_use_cases: [
      'Analyze earnings call transcripts, 10-K filings, and news feeds for immediate alpha signals',
      'Automate quantitative backtesting of trading strategies with natural language prompt scripts',
      'Synthesize macroeconomic data, commodity flows, and market sentiment into executive briefs',
      'Build custom algorithmic monitoring agents that alert on unusual volatility or order flow'
    ],
    potential_pain_points: [
      'Information overload across dozens of news feeds, SEC filings, and research reports daily',
      'Latency in extracting actionable trade insights before market prices adjust',
      'Complexity of translating nuanced market hypotheses into executable algorithms'
    ],
    industry_trend: 'Investment management is leveraging multimodal LLMs to parse unstructured filings, satellite imagery, and news feeds in real time, democratizing quantitative-level market intelligence.',
    recommended_track: 'generalist_india',
    keywords: ['trader', 'investment', 'hedge fund', 'portfolio manager', 'equities', 'crypto', 'asset management']
  },
  {
    id: 'consultant',
    name: 'Consultant',
    category: 'Consulting & Strategy',
    ai_use_cases: [
      'Synthesize industry market research, competitive landscape, and benchmark data at 10x speed',
      'Generate structured slide decks, executive summaries, and strategy frameworks rapidly',
      'Build custom AI diagnostic tools and workflow prototypes for client deliverables',
      'Conduct rapid data cleanup, survey analysis, and financial modeling for client engagements'
    ],
    potential_pain_points: [
      'Exhausting slide creation and manual desktop research consuming 70% of project hours',
      'Tight client engagement deadlines requiring rapid onboarding into unfamiliar industries',
      'Need to demonstrate tangible, tech-enabled innovation to justify advisory bill rates'
    ],
    industry_trend: 'Management consulting is being disrupted by AI research synthesis and automated deliverable generation, shifting the consultant’s value from slides to high-impact strategic advisory.',
    recommended_track: 'generalist_india',
    keywords: ['consultant', 'strategy', 'advisory', 'mbb', 'big4', 'frameworks', 'market research']
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur',
    category: 'Leadership & Entrepreneurship',
    ai_use_cases: [
      'Validate new business ideas and build functional software MVPs in days without full dev teams',
      'Automate customer acquisition, inbound funnels, and initial sales outreach',
      'Deploy autonomous customer support and operational agents to run lean operations',
      'Monetize AI capabilities by launching new AI-native service offerings or niche products'
    ],
    potential_pain_points: [
      'Severe budget and headcount constraints limiting growth and development velocity',
      'Wasting capital on expensive external agencies or dev shops for simple product iterations',
      'Balancing high-level business vision with overwhelming day-to-day operational execution'
    ],
    industry_trend: 'Entrepreneurs are building "one-person unicorns" by orchestrating fleets of AI agents for coding, marketing, customer support, and sales, achieving massive operational leverage.',
    recommended_track: 'generalist_india',
    keywords: ['entrepreneur', 'business owner', 'bootstrapped', 'smb', 'solopreneur', 'creator']
  },
  {
    id: 'founder',
    name: 'Founder',
    category: 'Leadership & Entrepreneurship',
    ai_use_cases: [
      'Rapidly build and test functional product POCs in 48 hours to secure investor and customer buy-in',
      'Automate board updates, pitch deck financial models, and market intelligence synthesis',
      'Implement AI-first workflows across engineering, marketing, and sales to keep headcount lean',
      'Create proprietary AI moats and monetization strategies for business growth'
    ],
    potential_pain_points: [
      'Burn rate anxiety and pressure to demonstrate fast traction before the next funding milestone',
      'Engineering bottlenecks slowing down customer-driven feature validation',
      'Difficulty determining where to invest AI resources for genuine ROI vs hype'
    ],
    industry_trend: 'Modern startup founders are establishing AI-first operating models from Day 1, allowing 3-person teams to achieve the output and revenue of 30-person traditional companies.',
    recommended_track: 'generalist_india',
    keywords: ['founder', 'co-founder', 'ceo', 'startup', 'venture', 'fundraising', 'scaleup']
  },
  {
    id: 'operations_professional',
    name: 'Operations Professional',
    category: 'Operations & Support',
    ai_use_cases: [
      'Automate repetitive cross-system data entry, ticket routing, and vendor communication',
      'Build zero-cloud local desktop automations for secure, confidential document ingestion',
      'Create automated SLA tracking and proactive operational bottleneck alerts',
      'Deploy intelligent knowledge bots that assist team members with internal SOPs'
    ],
    potential_pain_points: [
      'Manual, multi-step data entry across siloed, legacy internal tools and spreadsheets',
      'Constantly putting out operational fires and managing human errors in repetitive workflows',
      'Lack of engineering support to automate internal departmental processes'
    ],
    industry_trend: 'Operations is transforming from manual coordination into automated workflow engineering, where operations leaders build autonomous agents to execute complex standard operating procedures.',
    recommended_track: 'generalist_india',
    keywords: ['operations', 'ops', 'process', 'coo', 'workflow', 'automation', 'sop']
  },
  {
    id: 'customer_support',
    name: 'Customer Support',
    category: 'Operations & Support',
    ai_use_cases: [
      'Deploy autonomous tier-1 customer support agents that resolve 60%+ of common tickets',
      'Generate suggested, context-aware reply drafts for support agents in real time',
      'Automatically categorize, tag, and route complex escalated support tickets',
      'Synthesize recurring customer bug reports and feature requests for engineering teams'
    ],
    potential_pain_points: [
      'High ticket volume leading to agent burnout, repetitive strain, and long queue wait times',
      'Inconsistent resolution quality and slow escalation pathways for technical inquiries',
      'Pressure to reduce cost-per-ticket while improving customer satisfaction (CSAT) scores'
    ],
    industry_trend: 'Customer service is shifting from reactive human ticket queues to autonomous AI agent resolution, where AI handles standard requests and equips human agents with real-time solutions.',
    recommended_track: 'generalist_india',
    keywords: ['support', 'customer service', 'csat', 'helpdesk', 'zendesk', 'intercom', 'tickets']
  },
  {
    id: 'architect',
    name: 'Architect',
    category: 'Core Engineering & Architecture',
    ai_use_cases: [
      'Generate conceptual floor plans, massing studies, and generative spatial layouts in minutes',
      'Automate building code compliance checks, zoning validation, and daylight optimization',
      'Produce photo-realistic 3D design renderings directly from 2D CAD sketches and text prompts',
      'Automate Building Information Modeling (BIM) data schedules and cost estimation takeoffs'
    ],
    potential_pain_points: [
      'Hundreds of hours spent on manual drafting and iterative zoning compliance adjustments',
      'High rendering turnaround times and expensive 3D visualization outsourcing costs',
      'Difficulty exploring multiple spatial iterations rapidly during early conceptual design'
    ],
    industry_trend: 'Architecture and spatial design are being revolutionized by generative design algorithms and AI-powered BIM tools that evaluate zoning, structural feasibility, and environmental impact in real time.',
    recommended_track: 'generalist_india',
    keywords: ['architect', 'architecture', 'cad', 'bim', 'revit', 'autocad', 'design', 'rendering']
  },
  {
    id: 'civil_engineer',
    name: 'Civil Engineer',
    category: 'Core Engineering & Architecture',
    ai_use_cases: [
      'Automate structural load calculations, terrain analysis, and grading evaluations',
      'Extract data from engineering drawings, site surveys, and municipal code requirements',
      'Deploy AI agents for construction site progress tracking and safety hazard detection',
      'Optimize material quantity estimation, structural concrete scheduling, and cost forecasting'
    ],
    potential_pain_points: [
      'Heavy manual review of multi-hundred page regulatory guidelines and structural codes',
      'Costly project delays caused by site coordination mismatches and material estimation errors',
      'Reliance on fragmented, legacy desktop software with limited automated data exchange'
    ],
    industry_trend: 'Civil engineering is embracing digital twins, generative structural optimization, and computer vision site monitoring to prevent cost overruns and accelerate infrastructure delivery.',
    recommended_track: 'generalist_india',
    keywords: ['civil engineer', 'structural', 'construction', 'infrastructure', 'survey', 'site']
  },
  {
    id: 'electrical_engineer',
    name: 'Electrical Engineer',
    category: 'Core Engineering & Architecture',
    ai_use_cases: [
      'Automate schematic design review, PCB routing optimization, and thermal simulations',
      'Generate code for embedded microcontrollers, firmware tests, and IoT device drivers',
      'Analyze power distribution grids, signal integrity, and harmonic distortion with AI models',
      'Automate component obsolescence tracking and bill-of-materials (BOM) cross-referencing'
    ],
    potential_pain_points: [
      'Labor-intensive manual PCB routing iterations and multi-week prototype spin cycles',
      'Sudden supply chain disruptions and component obsolescence causing complete board redesigns',
      'Complex debugging of intermittent hardware-firmware timing issues'
    ],
    industry_trend: 'Electrical hardware design is shifting to AI-driven schematic synthesis and automated layout engines that generate verified PCB designs and firmware scaffolding in hours.',
    recommended_track: 'engineering',
    keywords: ['electrical engineer', 'pcb', 'hardware', 'circuit', 'embedded', 'firmware', 'vlsi']
  },
  {
    id: 'mechanical_engineer',
    name: 'Mechanical Engineer',
    category: 'Core Engineering & Architecture',
    ai_use_cases: [
      'Apply generative design algorithms to minimize part weight while maintaining structural strength',
      'Automate Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD) setup workflows',
      'Extract dimensions and manufacturing tolerances directly from 3D CAD models into 2D shop drawings',
      'Predict machine component wear, fatigue life, and predictive maintenance schedules'
    ],
    potential_pain_points: [
      'Time-consuming setup and computation times for complex structural and fluid simulations',
      'Manual creation of 2D manufacturing drawings and geometric dimensioning & tolerancing (GD&T)',
      'Expensive physical prototyping rounds due to unoptimized initial CAD designs'
    ],
    industry_trend: 'Mechanical engineering is transitioning to generative physics and AI-accelerated simulation solvers that reduce design-to-manufacture cycles by 70%.',
    recommended_track: 'generalist_india',
    keywords: ['mechanical engineer', 'cad', 'solidworks', 'fea', 'cfd', 'manufacturing', 'robotics']
  },
  {
    id: 'healthcare_professional',
    name: 'Healthcare Professional',
    category: 'Specialized Fields',
    ai_use_cases: [
      'Automate clinical documentation, patient history summaries, and EHR charting with voice AI',
      'Synthesize medical literature, drug interaction data, and clinical trial matching in real time',
      'Build patient intake and triage automation workflows that maintain strict data privacy',
      'Accelerate administrative prior-authorization and medical billing coding workflows'
    ],
    potential_pain_points: [
      'Severe administrative burnout: spending 2 hours on EHR data entry for every hour of patient care',
      'Delayed prior authorizations and insurance documentation stalling patient treatments',
      'Keeping up with thousands of new clinical research papers and treatment guidelines annually'
    ],
    industry_trend: 'Healthcare is being modernized by ambient clinical intelligence scribes and medical LLMs that reduce physician documentation burden and streamline clinical operations.',
    recommended_track: 'generalist_india',
    keywords: ['healthcare', 'doctor', 'physician', 'nurse', 'clinical', 'medical', 'hospital', 'ehr']
  },
  {
    id: 'teacher_educator',
    name: 'Teacher / Educator',
    category: 'Specialized Fields',
    ai_use_cases: [
      'Generate customized lesson plans, rubrics, and interactive quiz modules in minutes',
      'Automate preliminary grading and personalized feedback for student assignments',
      'Differentiate curriculum content dynamically for students with varying learning paces',
      'Create interactive multimedia teaching assets and AI-guided tutoring workflows'
    ],
    potential_pain_points: [
      'Overwhelming hours spent on administrative grading and lesson prep outside classroom hours',
      'Difficulty providing 1-on-1 personalized feedback to large classes of diverse students',
      'Struggling to incorporate modern AI literacy into student curriculum safely'
    ],
    industry_trend: 'Education is evolving toward personalized adaptive learning systems and AI teaching assistants that handle routine administrative grading and tailor exercises to each student.',
    recommended_track: 'generalist_india',
    keywords: ['teacher', 'educator', 'professor', 'instructor', 'academic', 'curriculum', 'school']
  },
  {
    id: 'lawyer_legal',
    name: 'Lawyer / Legal Professional',
    category: 'Specialized Fields',
    ai_use_cases: [
      'Conduct rapid legal research and precedent discovery across thousands of court opinions',
      'Automate contract redlining, clause comparison, and risk obligation extraction',
      'Draft initial contracts, demand letters, and litigation briefs from fact patterns in minutes',
      'Build zero-cloud confidential document review and e-discovery workflows'
    ],
    potential_pain_points: [
      'Exhausting, unbillable hours spent manually reviewing hundreds of contract clauses',
      'Risk of missing critical adverse precedent or subtle liability triggers in discovery files',
      'Strict client confidentiality concerns preventing the use of public cloud AI tools'
    ],
    industry_trend: 'The legal industry is rapidly adopting specialized legal AI models for automated contract drafting, litigation intelligence, and secure, private document synthesis.',
    recommended_track: 'generalist_india',
    keywords: ['lawyer', 'legal', 'attorney', 'counsel', 'contract', 'litigation', 'law firm']
  },
  {
    id: 'student',
    name: 'Student',
    category: 'Specialized Fields',
    ai_use_cases: [
      'Build a standout portfolio of live, deployed AI applications and agentic automations',
      'Accelerate academic research, technical comprehension, and complex concept mastery',
      'Automate job hunting, tailored resume positioning, and cold networking outreach',
      'Monetize practical AI skills through freelancing and client project delivery'
    ],
    potential_pain_points: [
      'Graduating into a competitive job market where basic academic theory is insufficient',
      'Lack of real-world portfolio projects demonstrating hands-on AI implementation',
      'Uncertainty about which technical skills will remain high-value in an AI-first world'
    ],
    industry_trend: 'Students who build practical AI workflows, publish live apps, and understand AI problem-solving are leapfrogging traditional entry-level competition.',
    recommended_track: 'generalist_india',
    keywords: ['student', 'graduate', 'college', 'university', 'entry level', 'intern']
  }
];
