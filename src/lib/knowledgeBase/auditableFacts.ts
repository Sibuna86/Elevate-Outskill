import { AuditableCitation } from '../types';

export const AUDITABLE_OUTSKILL_FACTS: {
  id: string;
  category: string;
  source_document: string;
  source_page: number;
  claim: string;
  exact_source_text: string;
}[] = [
  {
    id: 'eap-positioning-p4',
    category: 'Program Positioning',
    source_document: 'Engineering Accelerator',
    source_page: 4,
    claim: 'Outskill positions the AI Generalist as an AI-first Problem Solver and AI Native Engineer who orchestrates agents rather than coding manually.',
    exact_source_text: 'The way to stay ahead in the AI first world is be an AI Generalist! An AI first Problem Solver! AI Native Engineer. Someone Who Doesn\'t Just Code, But Orchestrates.'
  },
  {
    id: 'eap-agentic-work-p3',
    category: 'Industry Data',
    source_document: 'Engineering Accelerator',
    source_page: 3,
    claim: '80% of work will be taken up by AI Agents by 2030, enabling one engineer empowered by AI agents to do the work of 5 engineers.',
    exact_source_text: '80% of work will be taken up by AI Agents by 2030. At AI-First Companies, What Used To Take A Team Of Five Engineers Can Now Be Done By One Engineer Empowered By AI Agents.'
  },
  {
    id: 'eap-nsdc-name-p11',
    category: 'Certification',
    source_document: 'Engineering Accelerator',
    source_page: 11,
    claim: 'Official NSDC Certified Program Name: Program in Generative AI (Tech Professionals).',
    exact_source_text: 'NSDC Certified Program Name : Program in Generative AI (Tech Professionals) under Skill India.'
  },
  {
    id: 'aiap-in-nsdc-name-p2',
    category: 'Certification',
    source_document: 'AI Accelerator Program - India',
    source_page: 2,
    claim: 'Official NSDC Certified Program Name: Artificial Intelligence Applications For Business Leaders (Previously AI For Founders and Business).',
    exact_source_text: 'NSDC Certified Program Name : Artificial Intelligence Applications For Business Leaders (Previously AI For Founders and Business).'
  },
  {
    id: 'aiap-in-engineers-track-p20',
    category: 'Curriculum Option',
    source_document: 'AI Accelerator Program - India',
    source_page: 20,
    claim: 'An explicit "Engineers Specific" Track is available for technical professionals.',
    exact_source_text: 'We also have an "Engineers Specific" Track.'
  },
  {
    id: 'aiap-monetization-p34',
    category: 'Program Content',
    source_document: 'AI Accelerator Program - India',
    source_page: 34,
    claim: 'Dedicated Monetization module focusing on the art of making money with AI skills and generating organic sales.',
    exact_source_text: 'Monetization! The art of making money with all these skills! How do you do that? Generating organic sales.'
  },
  {
    id: 'eap-girish-hiremath-p6',
    category: 'Case Study',
    source_document: 'Engineering Accelerator',
    source_page: 6,
    claim: 'Girish Hiremath, Principal Software Engineer (15 yrs exp), reduced automation build time from 2 weeks to 2 days and cut bandwidth overhead by 60%.',
    exact_source_text: 'Girish Hiremath | Principal Software Engineer | Overall Experience: 15 Years Exp. Before: Struggling with building POCs, Wasting too much time on manual systems, Had knowledge lacked implementation. After: Built Automations in 2 days instead of 2 weeks, Bandwidth was reduced by 60%, Automated his work & gained back time to focus on strategy.'
  },
  {
    id: 'eap-ravi-prabhakar-p7',
    category: 'Case Study',
    source_document: 'Engineering Accelerator',
    source_page: 7,
    claim: 'Ravi Prabhakar, Associate Director at IQVIA (18 yrs exp), restarted building after 12-13 years and built 3 AI POCs for his healthcare/clinical enterprise.',
    exact_source_text: 'Ravi Prabhakar | Associate Director, IQVIA | Overall Experience : 18 years. Before: Had stopped coding since 2013, Had AI ideas but didn\'t know how to execute them. After: Restarted coding after 12–13 years, Built and proposed 3 AI POCs in the organization.'
  },
  {
    id: 'eap-farhad-wahid-p8',
    category: 'Case Study',
    source_document: 'Engineering Accelerator',
    source_page: 8,
    claim: 'Farhad Wahid, Delivery Director (26 yrs exp), built 3 working prototypes in 1 week and accelerated startup launch into contract talks within 14 days.',
    exact_source_text: 'Farhad Wahid | Delivery Director, Convergent-IS | Overall Experience : 26 years. Before: PhD learning was mostly theory-heavy with limited practical output. After: Gained intense practical exposure in just 14 days, Built 3 working prototypes within a week, Engaged customers, entered contract talks.'
  },
  {
    id: 'aiap-akshay-hiremath-p66',
    category: 'Case Study',
    source_document: 'AI Accelerator Program - India',
    source_page: 66,
    claim: 'Akshay Hiremath transitioned from SEO Specialist to Growth Specialist with AI role on Day 7 of 14, unlocking partnership discussions with his startup founder.',
    exact_source_text: 'Seen at his startup as "just the SEO specialist". At Day 7 of 14 - didn\'t wait to finish - pitched the founder practical AI plays for growth, efficiency, and long-term impact. Stepped into a Growth Specialist with an AI role, with talk of long-term trust and even future partnership.'
  },
  {
    id: 'aiap-venture-lead-p67',
    category: 'Case Study',
    source_document: 'AI Accelerator Program - India',
    source_page: 67,
    claim: 'Cohort member was promoted within 1 week of the bootcamp for driving AI problem solving and appointed by CEO to lead the buildout of a venture fund from scratch.',
    exact_source_text: 'A specialist terrified of becoming irrelevant as AI moved in. Promoted within a week of the bootcamp for driving AI problem-solving at her company. Her CEO put her at the front of building a venture fund from scratch.'
  },
  {
    id: 'aiap-ganesh-alla-molvex-p68',
    category: 'Case Study',
    source_document: 'AI Accelerator Program - India',
    source_page: 68,
    claim: 'Ganesh Alla landed his first client the day after the cohort ended and officially launched Molvex — a full-stack AI solutions company.',
    exact_source_text: 'Knew the concepts but hadn\'t crossed from learning to actually delivering. Landed his first client the day after the cohort ended; two more projects lined up since. Officially launched Molvex — a full-stack AI solutions company.'
  },
  {
    id: 'aiap-data-automation-p69',
    category: 'Case Study',
    source_document: 'AI Accelerator Program - India',
    source_page: 69,
    claim: 'Operations analyst with no developer title built a zero-cloud desktop app + Chrome extension cutting 50-field data ingestion from 30 minutes to 10 seconds.',
    exact_source_text: 'No developer title, and a workflow that hurt: 50+ fields mapped by hand on every data ingestion. 30 minutes of click by click work each time. Built a zero-cloud solution: native desktop app + Chrome extension. 30 minutes to 10 seconds.'
  },
  {
    id: 'aiap-coffee-perks-p70',
    category: 'Case Study',
    source_document: 'AI Accelerator Program - India',
    source_page: 70,
    claim: 'Local Coffee Perks mobile app launched live on App Store and Google Play by cohort member.',
    exact_source_text: 'Local Coffee Perks was just a demo shown to the community for feedback. Officially LIVE on both the App Store and Google Play.'
  }
];
