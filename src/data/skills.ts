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
    name: "Programming Languages & Web",
    description: "Core programming languages, backend frameworks, stateful stores, and web standards.",
    skills: [
      { name: "Python", featured: true },
      { name: "Java", featured: true },
      { name: "C", featured: false },
      { name: "SQL", featured: true },
      { name: "HTML/CSS", featured: true },
      { name: "React", featured: true },
      { name: "Node.js", featured: true },
      { name: "Express", featured: false },
      { name: "MongoDB", featured: true },
      { name: "Redis", featured: false },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    description: "Enterprise cloud platforms, architecture design, and managed infrastructure.",
    skills: [
      { name: "AWS Academy (Cloud Architecting)", featured: true },
      { name: "AWS Academy (Cloud Foundations)", featured: true },
      { name: "Oracle Cloud Infrastructure (OCI)", featured: true },
    ],
  },
  {
    id: "aiml",
    name: "AI & GenAI",
    description: "Deep learning models, open-weights quantization, LLM fine-tuning, and agent tooling.",
    skills: [
      { name: "LLM Fine-Tuning (Llama, GGUF, Ollama)", featured: true },
      { name: "OpenAI API", featured: true },
      { name: "Groq", featured: true },
      { name: "LangGraph", featured: true },
      { name: "TensorFlow", featured: false },
      { name: "Keras", featured: false },
      { name: "Deep Learning", featured: false },
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    description: "Statistical data processing, numerical computation, exploratory analysis, and visualization.",
    skills: [
      { name: "Exploratory Data Analysis", featured: true },
      { name: "Data Visualization", featured: true },
      { name: "Pandas", featured: true },
      { name: "NumPy", featured: true },
    ],
  },
  {
    id: "cs-fundamentals",
    name: "Core CS",
    description: "Algorithmic thinking, object-oriented paradigms, database design, and systems engineering.",
    skills: [
      { name: "Data Structures & Algorithms", featured: true },
      { name: "OOP (Object-Oriented Programming)", featured: true },
      { name: "DBMS (Database Management Systems)", featured: true },
      { name: "Full-Stack Web Development", featured: true },
    ],
  },
  {
    id: "other",
    name: "Leadership & Collaboration",
    description: "Effective communication, team leadership, technical mentorship, and entrepreneurial mindset.",
    skills: [
      { name: "Communication", featured: true },
      { name: "Team Management", featured: true },
      { name: "Mentorship", featured: true },
      { name: "Entrepreneurship", featured: true },
    ],
  },
];

