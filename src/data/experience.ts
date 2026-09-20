export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "Yarsi Corporation",
    location: "Noida, Uttar Pradesh, India",
    period: "May 2025 – July 2025",
    type: "Internship",
    description:
      "Contributed to frontend application engineering and cross-platform UI development while gaining direct exposure to production engineering workflows.",
    highlights: [
      "Developed the company's website using React Native with clean UI structures and responsive screen layouts.",
      "Collaborated in a Git-based version-controlled workflow, executing debugging, feature branching, and code reviews.",
      "Gained practical exposure to LLM-based AI chatbot integration patterns and prompt orchestration concepts.",
      "Translated high-fidelity Figma mockups into interactive, accessible, and performant screen components.",
      "Focused on cross-device consistency and layout stabilization across multiple device viewports.",
    ],
    technologies: ["React Native", "JavaScript", "Git", "GitHub", "UI/UX Translation", "LLM Concepts"],
  },
];
