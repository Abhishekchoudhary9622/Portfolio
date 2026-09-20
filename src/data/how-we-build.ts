export interface BuildStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  principles: string[];
}

export const howWeBuildSteps: BuildStep[] = [
  {
    step: "01",
    title: "Build the Interface",
    subtitle: "React / Next.js / TypeScript",
    description:
      "Craft accessible, responsive, and predictable frontends with strict TypeScript types, deterministic state machines, and restrained micro-interactions.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    principles: [
      "Type-safe component contracts",
      "Accessible semantics and keyboard nav",
      "Subtle micro-animations that enhance clarity",
      "Fast layout shifts and responsive density",
    ],
  },
  {
    step: "02",
    title: "Design the System",
    subtitle: "Node.js / FastAPI / Express / Databases",
    description:
      "Architect clean backend APIs, schema migrations, scoped tool execution layers, and relational or document datastores that maintain strict data integrity.",
    technologies: ["FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Drizzle"],
    principles: [
      "Separation of concerns & service layers",
      "Strict schema validation (Pydantic / Zod)",
      "Connection pooling & indexed queries",
      "Stateless auth & role-based access control",
    ],
  },
  {
    step: "03",
    title: "Add Intelligence",
    subtitle: "LLMs / LangGraph / Machine Learning / Retrieval",
    description:
      "Integrate agentic graphs, hybrid search (BM25 + Dense embeddings), and model routers. Ensure the LLM assists synthesis while deterministic logic owns business truth.",
    technologies: ["LangGraph", "OpenAI", "Llama", "FastEmbed", "BM25", "Ollama"],
    principles: [
      "AI synthesizes; deterministic engines calculate",
      "Multi-step graph routing & state checkpoints",
      "Hybrid retrieval with Reciprocal Rank Fusion",
      "Tool sandboxing & verified inputs",
    ],
  },
  {
    step: "04",
    title: "Ship Responsibly",
    subtitle: "Auth / Validation / Deployment / Human Approval",
    description:
      "Deploy containerized microservices with robust audit trails, cryptographic password hashing (Argon2 / bcrypt), and human-in-the-loop action confirmation centers.",
    technologies: ["Docker", "Render", "Vercel", "Argon2", "JWT", "GitHub Actions"],
    principles: [
      "Human confirmation on critical state mutations",
      "Transparent tool execution & evidence traces",
      "Automated health checks & scheduled retries",
      "Zero exposed secrets & scoped permissions",
    ],
  },
];
