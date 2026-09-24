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
    location: "Noida, India",
    period: "May 2025 – July 2025",
    type: "Internship",
    description:
      "Contributed to frontend web application development and responsive UI engineering while gaining practical exposure to production workflows and LLM concepts.",
    highlights: [
      "Developed the company's website using React, prioritizing a clean UI and mobile-friendly, responsive layouts.",
      "Gained hands-on experience with industry workflows: debugging, Git-based collaboration, and foundational concepts of LLM-based AI chatbots.",
      "Translated design mockups into interactive screens and ensured consistent performance across multiple devices.",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Git", "GitHub", "Responsive Design", "LLM Concepts"],
  },
];

