export const profile = {
  name: 'Yunusemre Sevinc',
  title: 'Backend Software Engineer',
  location: 'Istanbul, Turkey',
  email: 'yunusemree.sevinc@gmail.com',
  github: 'https://github.com/yunussvnc',
  linkedin: 'https://linkedin.com/in/sevinç-yunusemre-23a926257/',
  resumePath: '/resume.html',
  photoPath: '/profile-photo.jpg',
  summary:
    'Backend-focused Software Engineer with production experience building scalable RESTful APIs with FastAPI, PostgreSQL schema design, and Redis-backed performance optimization. I build reliable systems with layered architecture (Repository, Observer) principles and test-driven development (352-test suite).',
  intro:
    'Software Engineering graduate (Istanbul Health and Technology University, full scholarship) turning technical ideas into usable products across AI, full-stack web development, and health-tech oriented software.',
} as const

export const stats = [
  { value: '92%', label: 'Precision@3', detail: 'semantic matching accuracy in the AsEmOs RAG pipeline' },
  { value: '352', label: 'pytest cases', detail: 'maintained through the AsEmOs production rollout' },
  { value: '148K+', label: 'historical matches scraped', detail: 'used to train the football prediction model' },
  { value: '0.90', label: 'F1 score', detail: 'measured on AsEmOs semantic matching' },
] as const

export const experience = [
  {
    role: 'Full-Stack Developer (Intern / Part-time)',
    company: 'Private Sector (Software Company)',
    period: 'Sep 2025 - Dec 2025',
    summary:
      'Worked directly with 4 clients on requirements analysis and built authenticated admin panels for corporate sites with Next.js and Prisma ORM, using shadcn/ui and Tailwind CSS for a consistent design system. Managed production deployment with PM2 and SEO with next-seo on cPanel/Node.js hosting.',
  },
  {
    role: 'R&D Engineer Intern',
    company: 'Istanbul Health and Technology University',
    period: 'Jul 2025 - Aug 2025',
    summary:
      'Researched RAG architecture and LLM-based orchestration workflows for academic AI projects, contributing to two projects reaching production-ready stage, and supported model evaluation and data analysis for publication-ready research.',
  },
  {
    role: 'AI Intern',
    company: 'Arvis Technology',
    period: 'Jul 2024 - Aug 2024',
    summary:
      'Integrated deep learning and computer vision algorithms into live projects, completing the Arvis DeepTech AI internship program with a certificate of achievement, and built a data preprocessing pipeline in Python that improved model accuracy.',
  },
] as const

export const projects = [
  {
    name: 'AsEmOs',
    category: 'AI / RAG Platform',
    hero: 'AI-powered social recommendation platform delivering personalized venue suggestions from location, budget, and atmosphere signals (graduation project).',
    description:
      'Built an end-to-end mobile and web platform around a RAG (Retrieval-Augmented Generation) architecture that generates personalized venue recommendations. Designed an orchestration pipeline combining Qdrant vector search with Groq reranking, and shipped the backend to production on Render alongside a 352-test pytest suite.',
    results: [
      '92% Precision@3 and F1 0.90 on semantic matching accuracy',
      '352-test pytest suite maintained through production rollout',
      'Backend deployed to production on Render',
    ],
    highlights: [
      'RAG architecture combining Qdrant vector search with Groq reranking',
      'End-to-end mobile (React Native / Expo) and web (Next.js) clients',
      'FastAPI backend with PostgreSQL and Redis for caching and session state',
    ],
    stack: ['Python', 'FastAPI', 'React Native', 'Expo', 'Next.js', 'PostgreSQL', 'Qdrant', 'Redis', 'Groq API'],
    github: 'https://github.com/yunussvnc/Bitirmeprojesi',
    demo: '',
    visualClass: 'bg-gradient-to-br from-indigo-800 via-violet-600 to-fuchsia-500',
  },
  {
    name: 'Futbol Analiz ve Tahmin Platformu',
    category: 'ML / Real-Time Data',
    hero: 'Live football data platform producing statistical analysis and ML-based match outcome predictions.',
    description:
      'Built a service architecture over live football data that separates FeatureBuilder, MLPredictor, and LLMAnalyzer components. Delivered real-time data flow via WebSocket and Redis Pub/Sub, and built a scraping pipeline that collected 148,000+ historical matches to train the prediction model.',
    results: [
      '148,000+ historical matches collected via a dedicated scraping pipeline',
      'Real-time data flow through WebSocket and Redis Pub/Sub',
      'Modular FeatureBuilder, MLPredictor, and LLMAnalyzer components',
    ],
    highlights: [
      'FastAPI backend with SQLAlchemy over PostgreSQL',
      'Combines classic machine learning with an LLM analysis layer',
      'Real-time updates via WebSocket and Redis Pub/Sub',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis Pub/Sub', 'WebSocket', 'Machine Learning', 'LLM Integration'],
    github: 'https://github.com/yunussvnc/Futbol-Analiz-ve-Tahmin-Platformu',
    demo: '',
    visualClass: 'bg-gradient-to-br from-green-800 via-emerald-600 to-teal-500',
  },
  {
    name: 'Klinik Karaciğer Asistanı',
    category: 'Health-Tech / Educational Chatbot',
    hero: 'Literature-referenced, safety-flagged educational chatbot for liver disease topics.',
    description:
      'Built an educational assistant chatbot on liver disease topics with literature references and explicit safety disclaimers. Integrated the OpenAI API through an Express backend with a prompt design that keeps LLM output within safe, responsible boundaries.',
    results: [
      'Literature-referenced answers with explicit safety disclaimers',
      'Express backend integrated with the OpenAI API',
      'Prompt design constrains output to safe, responsible boundaries',
    ],
    highlights: [
      'Node.js/Express backend with OpenAI API integration',
      'Educational-only scope with clear safety framing',
      'Prompt design focused on responsible LLM output boundaries',
    ],
    stack: ['Node.js', 'Express', 'OpenAI API'],
    github: 'https://github.com/yunussvnc/klinik-karaciger-chatbotu',
    demo: '',
    visualClass: 'bg-gradient-to-br from-rose-800 via-red-600 to-orange-500',
  },
  {
    name: 'Ayasofya Voice Guide',
    category: 'Voice AI Experience',
    hero: 'Voice-guided cultural experience project built around speech and conversational interaction.',
    description:
      'A differentiated portfolio piece focused on voice interaction rather than a standard dashboard or brochure website. The repository structure shows a React and TypeScript app with dedicated voice-service integrations and assistant-oriented components.',
    results: [
      'Expands the portfolio with a voice-first AI interaction project',
      'Includes dedicated AssemblyAI and ElevenLabs service configuration in the codebase',
      'Built as a Vite and TypeScript application with reusable UI and assistant components',
    ],
    highlights: [
      'Stands out more than another standard corporate website because it is centered on audio and guided interaction',
      'Contains a dedicated `VoiceAssistant` component plus voice-service hooks and service layers',
      'Adds stronger variety to the portfolio alongside semantic search, analytics, and computer vision',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'AssemblyAI', 'ElevenLabs'],
    github: 'https://github.com/yunussvnc/ayasofya-voice-guide',
    demo: '',
    visualClass: 'bg-gradient-to-br from-amber-600 via-orange-600 to-rose-700',
  },
  {
    name: 'IdentiPlant',
    category: 'Computer Vision',
    hero: 'Plant identification project centered on visual recognition and practical classification workflows.',
    description:
      'A computer vision case study that rounds out the portfolio with image-based recognition work. It complements the retrieval, analytics, and voice projects by showing interest in classification-oriented AI workflows.',
    results: [
      'Adds a dedicated visual AI project to the portfolio lineup',
      'Balances product-facing work with a model-centered recognition use case',
      'Keeps the portfolio diversified across LLM, full-stack, voice, and vision categories',
    ],
    highlights: [
      'Useful as a computer vision showcase alongside semantic search and voice AI projects',
      'Can be strengthened further with dataset, architecture, and accuracy details when those notes are consolidated',
      'Included as a visible GitHub-linked project to broaden technical range',
    ],
    stack: ['Computer Vision', 'Python', 'Machine Learning'],
    github: 'https://github.com/devmehmetakifv/IdentiPlant',
    demo: '',
    visualClass: 'bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500',
  },
] as const

export const strengths = [
  {
    title: 'AI features with evidence',
    description: 'I prefer shipping model-based work with actual metrics, latency notes, thresholds, or dataset context instead of vague AI claims.',
  },
  {
    title: 'Product-minded engineering',
    description: 'I connect backend logic, UI flows, and user outcomes so projects feel like products rather than isolated demos.',
  },
  {
    title: 'Fast learning, clean delivery',
    description: 'I work comfortably across React, TypeScript, Python, data tooling, and service integrations when a project spans multiple layers.',
  },
] as const

export const skills = [
  {
    title: 'Backend & API',
    items: ['FastAPI', 'RESTful API Design', 'Prisma ORM', 'Layered Architecture (Repository, Observer)', 'JWT Auth', 'Flask', 'Spring Boot'],
  },
  {
    title: 'Database & Infra',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'Firebase', 'Render', 'PM2', 'Docker'],
  },
  {
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C#', 'Java', 'C++'],
  },
  {
    title: 'Test & Quality',
    items: ['Pytest (352-test suite)', 'Unit Testing', 'Code Review'],
  },
  {
    title: 'AI & Data',
    items: ['RAG Architecture', 'Qdrant (Vector DB)', 'LLM Orchestration (Groq API)', 'TensorFlow', 'Pandas'],
  },
  {
    title: 'Languages',
    items: ['English (B1)', 'Spanish (A1)'],
  },
] as const
