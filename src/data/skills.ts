export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
    icon?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming Languages",
    description: "Core languages used for systems, data structures, and algorithmic logic.",
    skills: [
      { name: "Java", featured: true },
      { name: "Python", featured: true },
      { name: "C" },
      { name: "SQL", featured: true },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "fullstack",
    name: "Full-Stack Development",
    description: "Modern frameworks, typed APIs, state management, and database architectures.",
    skills: [
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Node.js", featured: true },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "PostgreSQL", featured: true },
      { name: "Prisma" },
      { name: "Drizzle ORM" },
      { name: "Redis" },
      { name: "Vite" },
    ],
  },
  {
    id: "aiml",
    name: "AI & Machine Learning",
    description: "Applied LLMs, fine-tuning workflows, graph-based agents, and vector retrieval.",
    skills: [
      { name: "LangGraph", featured: true },
      { name: "OpenAI API", featured: true },
      { name: "Llama", featured: true },
      { name: "GGUF Quantization", featured: true },
      { name: "Ollama" },
      { name: "LLM Fine-Tuning" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Deep Learning" },
    ],
  },
  {
    id: "cs-fundamentals",
    name: "Computer Science",
    description: "Theoretical grounding and foundational software engineering principles.",
    skills: [
      { name: "Data Structures & Algorithms", featured: true },
      { name: "Object-Oriented Programming (OOP)", featured: true },
      { name: "Database Management Systems (DBMS)", featured: true },
      { name: "Full-Stack Web Engineering" },
    ],
  },
  {
    id: "cloud-tools",
    name: "Cloud & DevOps",
    description: "Deployment pipelines, containerization, cloud infrastructure, and version control.",
    skills: [
      { name: "AWS", featured: true },
      { name: "Oracle Cloud Infrastructure (OCI)", featured: true },
      { name: "Docker", featured: true },
      { name: "Git", featured: true },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
];
