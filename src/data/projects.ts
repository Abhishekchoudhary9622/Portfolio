export interface ProjectArchitectureStep {
  label: string;
  sublabel: string;
  type: "input" | "ai" | "tool" | "deterministic" | "retrieval" | "router" | "human" | "action";
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  featured: boolean;
  tagline: string;
  principle?: string;
  githubUrl: string | null;
  liveUrl: string | null;
  collaborative?: boolean;
  statusText: string;
  tags: string[];
  keyCapabilities: string[];
  shortDescription: string;
  architectureSteps?: ProjectArchitectureStep[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    architectureDescription: string;
    keyFeatures: {
      title: string;
      description: string;
      items: string[];
    }[];
    engineeringDecisions: {
      decision: string;
      rationale: string;
      tradeoff: string;
    }[];
    techStack: {
      category: string;
      technologies: string[];
    }[];
  };
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "parcelpilot-ai",
    title: "ParcelPilot AI",
    subtitle: "Evidence-first Support & Operations Copilot",
    featured: true,
    tagline: "Evidence-first support operations with deterministic business logic and human-approved actions.",
    principle: "AI assists. Deterministic logic decides. Humans approve actions.",
    githubUrl: "https://github.com/Abhishekchoudhary9622/pilotparcel",
    liveUrl: "https://pilotparcel.vercel.app/",
    statusText: "Production Ready · Open Source",
    tags: [
      "Python 3.12",
      "FastAPI",
      "LangGraph",
      "PyMongo Async",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "BM25 + Dense Embeddings",
      "Docker",
    ],
    keyCapabilities: [
      "Deterministic policy engines for fee calculations, SLAs & due dates",
      "Hybrid document retrieval (BM25 + FastEmbed ONNX + Reciprocal Rank Fusion)",
      "Guarded multi-model router with confidence checks & fallback",
      "Action Center with human confirmation before any critical state mutation",
      "Complete cryptographic audit trails with tool execution traces",
    ],
    shortDescription:
      "A mission-critical support and operations copilot built to eliminate generative hallucinations in logistics workflows by strictly separating deterministic business rule calculations from conversational language synthesis.",
    architectureSteps: [
      { label: "User Request", sublabel: "Natural Language Input", type: "input" },
      { label: "Support AI", sublabel: "LangGraph Orchestration", type: "ai" },
      { label: "Scoped Tools", sublabel: "Parameter Validation", type: "tool" },
      { label: "Deterministic Engines", sublabel: "Fees, SLAs & Due Dates", type: "deterministic" },
      { label: "Hybrid Retrieval", sublabel: "BM25 + Dense Vectors (RRF)", type: "retrieval" },
      { label: "Model Router", sublabel: "Tier & Confidence Guard", type: "router" },
      { label: "Evidence Trust Panel", sublabel: "Traces & Source Citations", type: "ai" },
      { label: "Human Approval", sublabel: "Action Center Confirmation", type: "human" },
      { label: "Final Execution", sublabel: "Audit Trail & DB Mutation", type: "action" },
    ],
    caseStudy: {
      overview:
        "In customer support and logistics operations, deploying standard LLM chatbots often leads to catastrophic hallucinations regarding fee waivers, cancellation penalties, refund eligibilities, and SLA guarantees. ParcelPilot AI was designed to solve this by instituting an architectural boundary: generative AI handles language understanding and evidence presentation, but pure deterministic engines compute business truth, while human operators explicitly confirm critical actions.",
      problem:
        "LLMs alone cannot be trusted with financial calculations, contractual SLA deadlines, or irreversible database mutations. Standard RAG implementations often provide unranked snippets without verifiable authority tiers or auditability.",
      solution:
        "Engineered an evidence-first system where every calculation (cancellation fees, credits, SLA status, ticket severity) runs through deterministic Python algorithms. Combined this with a hybrid retrieval pipeline (BM25 + FastEmbed ONNX embeddings fused via Reciprocal Rank Fusion) and an Action Center requiring explicit human confirmation before executing any state mutation.",
      architectureDescription:
        "The architecture is organized around three layers: (1) Orchestration Layer powered by LangGraph to decompose multi-step queries; (2) Deterministic Engine Layer that executes business formulas without LLM intervention; and (3) Human-in-the-Loop Action Center that displays transparent tool traces, authority tiers, and diffs before final commit.",
      keyFeatures: [
        {
          title: "Support Copilot & Multi-Step Decomposition",
          description: "Natural language query breakdown into granular, verifiable tool requests.",
          items: [
            "Decomposes complex requests into parallel sub-tasks",
            "Automatic SLA status and ticket severity classification",
            "Known issue pattern matching and proactive ticket correlation",
            "Context-preserving dialogue state checkpointed in PyMongo Async",
          ],
        },
        {
          title: "Deterministic Business Logic Engines",
          description: "Calculations run via dedicated algorithmic code instead of stochastic models.",
          items: [
            "Exact cancellation fee formula evaluation based on tier and timestamp",
            "Service credit eligibility matrices evaluated deterministically",
            "Hard SLA deadline countdowns based on customer contract tier",
            "Strict Pydantic schemas validating all inputs before processing",
          ],
        },
        {
          title: "Hybrid Retrieval Pipeline (RRF)",
          description: "Multi-modal document indexing combining lexical precision with semantic depth.",
          items: [
            "BM25 lexical scoring for exact serial numbers, tracking IDs, and error codes",
            "FastEmbed ONNX dense embeddings with NumPy vector similarity for semantic queries",
            "Reciprocal Rank Fusion (RRF) combining sparse and dense result sets",
            "Explicit document authority tiers preventing out-of-date guideline citations",
          ],
        },
        {
          title: "Evidence, Trust Panel & Action Center",
          description: "Complete visibility into AI reasoning and required human sign-offs.",
          items: [
            "Live tool trace visualization displaying latency, model route, and raw payload",
            "Two-step mutation workflow: Prepare -> Review & Acknowledge Conflicts -> Confirm -> Execute",
            "Customer PII redaction and role-based operational permissions",
            "Immutable audit logs capturing user ID, model route, sources, and execution timestamp",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "Separation of AI synthesis and business logic calculation",
          rationale: "Eliminates financial and compliance risks caused by LLM hallucination on fees and dates.",
          tradeoff: "Requires writing and maintaining dedicated deterministic Python service modules.",
        },
        {
          decision: "FastEmbed ONNX & NumPy exact vector search over hosted vector DB",
          rationale: "Zero cloud API network latency for embeddings, low memory footprint, and complete local testing capability.",
          tradeoff: "Exact search scales to tens of thousands of documents; would require ANN index for millions.",
        },
        {
          decision: "Human-in-the-loop Action Center for all state mutations",
          rationale: "Ensures automated assistants never trigger irreversible balance deductions or cancellations without human operator sign-off.",
          tradeoff: "Adds a verification step to operator workflow, trading pure automation for safety.",
        },
      ],
      techStack: [
        {
          category: "Backend & Orchestration",
          technologies: ["Python 3.12", "FastAPI", "LangGraph", "Pydantic", "PyMongo Async"],
        },
        {
          category: "Frontend & UI",
          technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
        },
        {
          category: "Information Retrieval & ML",
          technologies: ["BM25", "FastEmbed ONNX", "NumPy Vector Search", "Reciprocal Rank Fusion (RRF)", "TF-IDF", "Logistic Regression"],
        },
        {
          category: "Security & Infrastructure",
          technologies: ["JWT / HS256", "Argon2 Password Hashing", "Role-Based Access Control", "Docker", "Render", "MongoDB Atlas", "Vercel"],
        },
      ],
    },
  },
  {
    slug: "healthsync",
    title: "HealthSync",
    subtitle: "Healthcare Appointment & Follow-up Manager",
    featured: false,
    tagline: "Role-based healthcare platform with automated appointment scheduling, Google Calendar sync, and AI-assisted visit summaries.",
    principle: "Structured patient workflows backed by scheduled automation and secure doctor-patient portals.",
    githubUrl: "https://github.com/Abhishekchoudhary9622/Healthcare",
    liveUrl: "https://healthcare-frontend-swart.vercel.app/",
    statusText: "Production Ready · Open Source",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "OpenAI API",
      "Google Calendar API",
      "node-cron",
    ],
    keyCapabilities: [
      "Dedicated portals for Patients, Doctors, and System Administrators",
      "Interactive doctor discovery, slot booking, and reschedule workflows",
      "AI symptom assessment and patient-friendly post-visit summaries (GPT-3.5)",
      "2-Way Google Calendar synchronization with automated email notifications",
      "Scheduled medication reminders and retryable background alert jobs via node-cron",
    ],
    shortDescription:
      "A healthcare operations platform facilitating appointment bookings, doctor schedule management, automated Google Calendar sync, and AI-powered post-visit clinical summary translations.",
    architectureSteps: [
      { label: "Patient", sublabel: "Discovery & Slot Selection", type: "input" },
      { label: "Booking Engine", sublabel: "Prisma & PostgreSQL", type: "deterministic" },
      { label: "Sync Service", sublabel: "Google Calendar API", type: "action" },
      { label: "Doctor Portal", sublabel: "Consultation & Clinical Notes", type: "human" },
      { label: "AI Summary", sublabel: "OpenAI GPT-3.5 Translation", type: "ai" },
      { label: "Background Jobs", sublabel: "node-cron Reminders & Retries", type: "action" },
    ],
    caseStudy: {
      overview:
        "HealthSync bridges the communication gap between healthcare providers and patients. It streamlines appointment scheduling with real-time conflict checking, syncs calendar events, and translates complex medical notes into accessible, patient-friendly summaries using AI.",
      problem:
        "Patients struggle with fragmented booking systems, missed appointments, and deciphering complex medical jargon after visits. Doctors need reliable scheduling with minimal administrative overhead.",
      solution:
        "Engineered a full-stack platform featuring distinct role-based portals (Patient, Doctor, Admin), a real-time calendar synchronization engine using Google Calendar API, automated cron-based reminder dispatch with retry queues, and an AI summarizer translating clinical notes into clear home-care instructions.",
      architectureDescription:
        "Built on Node.js/Express with PostgreSQL and Prisma ORM for relational integrity. The frontend uses React with Zustand for client state and React Query for asynchronous server caching. Background jobs run via node-cron to manage email notifications and calendar synchronizations.",
      keyFeatures: [
        {
          title: "Multi-Role Architecture",
          description: "Isolated interfaces and authorization scopes for patients, doctors, and clinic admins.",
          items: [
            "Patient Portal: Doctor search by specialty, slot selection, and visit history",
            "Doctor Portal: Availability management, patient queue, and clinical note authoring",
            "Admin Portal: Clinic overview, doctor onboarding, and system metrics",
          ],
        },
        {
          title: "AI Post-Visit Translation",
          description: "Translates doctor notes into structured, comprehensible patient summaries.",
          items: [
            "Extracts key diagnosis points and simplifies technical medical terminology",
            "Formats clear, bulleted medication timetables and dosage instructions",
            "Highlights follow-up dates and warning signs requiring immediate attention",
          ],
        },
        {
          title: "Automated Calendar & Notification Engine",
          description: "Reliable background scheduling and third-party calendar integration.",
          items: [
            "Two-way event creation via Google Calendar API upon booking confirmation",
            "Automated email confirmations and 24-hour reminder alerts via Nodemailer",
            "node-cron background job runner with exponential retry handling for failed deliveries",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "Prisma ORM with PostgreSQL relational schemas",
          rationale: "Ensures strict relational consistency between doctors, appointment slots, patient histories, and prescriptions.",
          tradeoff: "Requires structured schema migrations for data model updates compared to schema-less document stores.",
        },
        {
          decision: "Dual JWT auth strategy (short-lived access + secure refresh tokens)",
          rationale: "Maintains high security for healthcare data without requiring frequent re-logins.",
          tradeoff: "Requires managing token refresh lifecycles and token revocation logic in backend.",
        },
      ],
      techStack: [
        {
          category: "Frontend",
          technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Recharts"],
        },
        {
          category: "Backend & Database",
          technologies: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "node-cron"],
        },
        {
          category: "Integrations & AI",
          technologies: ["OpenAI GPT-3.5", "Google Calendar API", "Nodemailer", "JWT Auth", "bcrypt"],
        },
      ],
    },
  },
  {
    slug: "vitty-llm",
    title: "Vitty LLM",
    subtitle: "LLM Fine-Tuning and Deployment",
    featured: false,
    tagline: "End-to-end dataset preparation, instruction tuning, GGUF quantization, and low-latency edge deployment for open-weights models.",
    principle: "Optimizing open-weights models for resource-constrained hardware without external API reliance.",
    githubUrl: null,
    liveUrl: "https://ollama.com/vrishankraina/vittyquantized",
    statusText: "Oct – Dec 2025 · Ollama",
    tags: [
      "Llama",
      "GGUF Quantization",
      "Ollama",
      "Python",
      "PyTorch",
      "Hugging Face",
      "Instruction Tuning",
    ],
    keyCapabilities: [
      "Built a fine-tuning and deployment pipeline for a Llama-based LLM",
      "Custom data ingestion workflow and dataset preparation",
      "Quantization (GGUF 4-bit / 8-bit) for deployment on resource-constrained devices",
      "Local inference serving via Ollama for zero-cloud latency execution",
    ],
    shortDescription:
      "Built a fine-tuning and deployment pipeline for a Llama-based LLM, including a custom data ingestion workflow and quantization for deployment on resource-constrained devices.",

    architectureSteps: [
      { label: "Raw Data", sublabel: "Ingestion & Formatting", type: "input" },
      { label: "Dataset Curation", sublabel: "Instruction-Response Pairs", type: "deterministic" },
      { label: "Model Tuning", sublabel: "Llama Base + LoRA", type: "ai" },
      { label: "Quantization", sublabel: "GGUF 4-bit / 8-bit Matrix", type: "deterministic" },
      { label: "Local Runtime", sublabel: "Ollama Serving Engine", type: "action" },
    ],
    caseStudy: {
      overview:
        "Vitty LLM explores the pipeline of taking open-weights foundation models and adapting them for specialized tasks on edge and local hardware. By utilizing structured data preprocessing and post-training quantization, the model runs efficiently on resource-constrained consumer GPUs and CPUs.",
      problem:
        "Cloud-hosted LLM APIs introduce recurring operational costs, network latency, and data privacy concerns. Running full-precision 16-bit foundation models locally requires high-end server VRAM that is unavailable on edge machines.",
      solution:
        "Built a modular pipeline that ingests domain text, structures instruction-following datasets, executes parameter-efficient fine-tuning, and quantizes model tensors into 4-bit/8-bit GGUF binaries for execution via Ollama.",
      architectureDescription:
        "The pipeline is divided into three distinct phases: (1) Data curation and synthetic validation; (2) Fine-tuning using PyTorch and Hugging Face; and (3) Quantization using llama.cpp to produce optimized GGUF format binaries for edge serving.",
      keyFeatures: [
        {
          title: "Dataset Ingestion & Structuring",
          description: "Automated parsing and tokenization of domain text into high-quality instruction formats.",
          items: [
            "Cleanses unstructured documents and generates prompt-response pairs",
            "Applies formatting templates matching the model's tokenizer specifications",
            "Filters out duplicate and low-entropy training samples",
          ],
        },
        {
          title: "Quantization & Memory Optimization",
          description: "Reduces memory footprint while preserving task performance.",
          items: [
            "Converts PyTorch checkpoints into quantized GGUF format (q4_k_m and q8_0)",
            "Enables inference execution within 4GB–8GB RAM environments",
            "Optimizes CPU/GPU tensor offloading for consistent token generation rates",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "GGUF quantization format over raw FP16 weights",
          rationale: "Enables fast local inference on standard developer hardware without dedicated server clusters.",
          tradeoff: "Slight loss in perplexity compared to full unquantized precision.",
        },
        {
          decision: "Ollama as local execution runtime",
          rationale: "Provides clean REST endpoints and easy model version swapping on local machines.",
          tradeoff: "Tied to Ollama/llama.cpp runtime support for newer layer architectures.",
        },
      ],
      techStack: [
        {
          category: "Frameworks & Tooling",
          technologies: ["Llama", "Python", "PyTorch", "Hugging Face Transformers", "GGUF", "Ollama"],
        },
      ],
    },
  },
  {
    slug: "eventallify",
    title: "Eventallify",
    subtitle: "Campus Event Management Platform",
    featured: false,
    collaborative: true,
    tagline: "Collaborative campus event hub with dynamic QR ticketing, organizer management tools, and Groq-powered AI assistance.",
    principle: "Unified campus engagement with instant ticket validation and modular UI components.",
    githubUrl: "https://github.com/Abhishekchoudhary9622/Eventallify",
    liveUrl: "https://eventallify-neon.vercel.app/",
    statusText: "Live App · Collaborative",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Groq API",
      "QR Ticketing",
    ],
    keyCapabilities: [
      "Collaborative campus platform for event discovery, RSVP, and attendee tracking",
      "Dynamic cryptographic QR-code ticket generation for venue check-ins",
      "Comprehensive organizer dashboard for event capacity and schedule management",
      "Groq-powered conversational AI assistant for instant event Q&A and schedules",
      "Library of 60+ modular, accessible, and reusable UI components",
    ],
    shortDescription:
      "A collaborative university event management platform designed to streamline campus activities with instant QR check-ins, organizer analytics, and a Groq-accelerated conversational assistant.",
    architectureSteps: [
      { label: "Student User", sublabel: "Event Discovery & RSVP", type: "input" },
      { label: "Platform Core", sublabel: "Next.js & Drizzle ORM", type: "deterministic" },
      { label: "QR Engine", sublabel: "Dynamic Pass Generation", type: "action" },
      { label: "AI Assistant", sublabel: "Groq High-Speed Query", type: "ai" },
      { label: "Organizer Admin", sublabel: "Live Venue Verification", type: "human" },
    ],
    caseStudy: {
      overview:
        "Eventallify was built as a collaborative campus platform to solve the fragmented event discovery and ticketing problem across university student clubs. It enables organizers to publish events, track capacities, and verify attendees via instant QR scanning, supported by a rapid Groq-powered AI concierge.",
      problem:
        "Campus clubs relied on scattered spreadsheets and manual physical sign-in sheets, leading to check-in delays, lost tickets, and poor attendance visibility.",
      solution:
        "Built a unified Next.js web application with typed Drizzle ORM database schemas, digital QR-code pass generation, organizer verification dashboards, and over 60 reusable UI components built for consistency.",
      architectureDescription:
        "Powered by Next.js App Router with TypeScript for end-to-end type safety. Database interactions are managed with Drizzle ORM connected to PostgreSQL. The Groq API powers low-latency conversational queries for campus attendees.",
      keyFeatures: [
        {
          title: "Event Discovery & Dynamic QR Tickets",
          description: "Real-time registration with instantly generated unique verification passes.",
          items: [
            "Category-based event discovery and timeline filtering",
            "Instant dynamic QR code generation embedded with verification tokens",
            "Mobile-friendly ticket wallet for fast gate entry",
          ],
        },
        {
          title: "Organizer Tools & Groq AI Concierge",
          description: "Administrative oversight and ultra-fast chatbot assistance.",
          items: [
            "Live attendee tracking and ticket check-in scanner interface",
            "Groq-powered fast AI assistant answering questions about timings, venues, and rules",
            "Design system containing 60+ reusable React UI components",
          ],
        },
      ],
      engineeringDecisions: [
        {
          decision: "Drizzle ORM for database layer",
          rationale: "Lightweight, zero-overhead TypeScript SQL query builder with predictable migrations.",
          tradeoff: "Requires closer understanding of raw SQL syntax compared to heavier ORMs.",
        },
        {
          decision: "Groq API for event assistant",
          rationale: "Ultra-fast inference latency providing instant conversational answers to students on mobile networks.",
          tradeoff: "Requires managed cloud API connectivity.",
        },
      ],
      techStack: [
        {
          category: "Frontend & Full Stack",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "60+ Custom UI Components"],
        },
        {
          category: "Database & Backend",
          technologies: ["PostgreSQL", "Drizzle ORM", "QR Code Generation", "Server Actions"],
        },
        {
          category: "AI & APIs",
          technologies: ["Groq API", "High-speed Inference"],
        },
      ],
    },
  },
];
