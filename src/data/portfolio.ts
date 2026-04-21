export const profile = {
  name: 'Yunusemre Sevinc',
  title: 'AI / Software Engineer',
  location: 'Istanbul, Turkey',
  email: 'yunusemree.sevinc@gmail.com',
  github: 'https://github.com/yunussvnc',
  linkedin: 'https://linkedin.com/in/sevinç-yunusemre-23a926257/',
  resumePath: '/resume.html',
  photoPath: '/profile-photo.jpg',
  summary:
    'I build AI-enabled and full-stack products with React, TypeScript, Python, and modern data tooling. My recent work focuses on semantic search, recommendation systems, dashboards, and backend integrations that can be explained with measurable outcomes.',
  intro:
    'Final-year Software Engineering student turning technical ideas into usable products across AI, full-stack web development, and health-tech oriented software.',
} as const

export const stats = [
  { value: '5/5', label: 'location-aware chatbot tests passed', detail: 'validated in the documented AI service test suite' },
  { value: '198', label: 'real Istanbul venues indexed', detail: 'used in the active semantic search flow' },
  { value: '7', label: 'Supabase Edge Functions', detail: 'covering analysis, reporting, support, and admin operations' },
  { value: '11', label: 'typed app resources', detail: 'modeled in the SEO dashboard frontend client' },
] as const

export const experience = [
  {
    role: 'R&D Engineer Intern',
    company: 'Istanbul Health and Technology University',
    period: 'Jul 2025 - Aug 2025',
    summary:
      'Supported AI-focused research and prototype implementation in a university R&D environment with an emphasis on experimentation and applied engineering.',
  },
  {
    role: 'AI Intern',
    company: 'Arvis Teknoloji',
    period: 'Jul 2024 - Aug 2024',
    summary:
      'Contributed to practical machine learning and AI implementation tasks, building hands-on experience in model-oriented workflows and technical delivery.',
  },
] as const

export const projects = [
  {
    name: 'AI-LLM Place Discovery Service',
    category: 'LLM / Semantic Search',
    hero: 'Semantic venue retrieval with location-aware ranking, vector search, and optional LLM explanations.',
    description:
      'Built as part of a graduation project to let users search for venues with natural language rather than brittle keyword matching. The service combines vector search, retrieval logic, and an optional reasoning layer for more useful results.',
    results: [
      '5 out of 5 location-aware search tests passed in the documented test suite',
      '2.086 s average response time with 75 ms warm responses',
      '10.033 s cold-start response on the first request',
    ],
    highlights: [
      'Uses sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2 with a 0.4 similarity threshold and top-5 ranking',
      'Stores 198 real Istanbul venues in Qdrant for semantic retrieval',
      'Supports interactive CLI search, distance calculation, and layered Groq/local Gemma analysis',
    ],
    stack: ['Python', 'FastAPI', 'Qdrant', 'Redis', 'Sentence Transformers', 'Groq', 'Gemma 2'],
    github: 'https://github.com/yunussvnc/Bitirmeprojesi/tree/main/ai-llm',
    demo: '',
    visualClass: 'bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-600',
  },
  {
    name: 'SEO Analytics Dashboard',
    category: 'Full Stack Web App',
    hero: 'Authenticated SEO workspace with audits, keyword tracking, reporting, and admin content operations.',
    description:
      'A React and Supabase dashboard that centralizes SEO analysis flows into one interface. It includes auth, persisted project history, keyword snapshots, report generation, support handling, and CMS-oriented admin resources.',
    results: [
      '7 Supabase Edge Functions implemented for key product workflows',
      '11 typed database-backed resources modeled in the frontend client',
      '4 SEO score dimensions and 3 page-speed metrics exposed in the UI',
    ],
    highlights: [
      'Combines authentication, Row Level Security, reporting, keyword tracking, and admin operations',
      'Persists project history and reports through PostgreSQL-backed Supabase tables',
      'Ready for live provider integrations even though current analysis responses are simulated',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/yunussvnc/seoanaliz',
    demo: '',
    visualClass: 'bg-gradient-to-br from-blue-700 via-sky-600 to-teal-500',
  },
  {
    name: 'IdentiPlant',
    category: 'Computer Vision',
    hero: 'Plant identification project centered on visual recognition and practical classification workflows.',
    description:
      'Added as a third portfolio project to strengthen the computer vision side of the portfolio. This project is presented as a plant identification case study and linked directly to its GitHub repository.',
    results: [
      'Expands the portfolio with a dedicated computer vision and classification project',
      'Creates a stronger balance between AI search systems, dashboards, and vision-based work',
      'Included as a portfolio-ready GitHub project link for future deeper documentation',
    ],
    highlights: [
      'Useful as a visual AI project alongside semantic search and full-stack product work',
      'Can later be upgraded with dataset, model, and accuracy details when full project notes are available',
      'Now part of the visible project lineup on the live portfolio',
    ],
    stack: ['Computer Vision', 'Python', 'Machine Learning'],
    github: 'https://github.com/devmehmetakifv/IdentiPlant',
    demo: '',
    visualClass: 'bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500',
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
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'AI / Data',
    items: ['TensorFlow', 'Keras', 'Scikit-learn', 'Sentence Transformers', 'Qdrant', 'Pandas', 'NumPy'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'Cursor', 'GitHub Copilot'],
  },
] as const
