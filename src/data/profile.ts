export interface Profile {
  name: string;
  titles: string[];
  headline: string;
  statement: string;
  supporting: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: {
    institution: string;
    degree: string;
    graduationYear: string;
    cgpa: string;
  };
  focusAreas: string[];
}

export const profileData: Profile = {
  name: "Abhishek Choudhary",
  titles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI / LLM Builder",
  ],
  headline: "Software Engineer · Full-Stack Developer · AI / LLM Builder",
  statement:
    "Computer Science Engineering student building full-stack applications and practical AI systems.",
  supporting:
    "I enjoy turning ideas into reliable products across frontend, backend, data, and AI with strong engineering fundamentals.",
  location: "Sikar, Rajasthan, India",
  email: "Choudharyabhishek656@gmail.com",
  phone: "9511521808",
  linkedin: "https://www.linkedin.com/in/abhishek-choudhary-b73a28261",
  github: "https://github.com/Abhishekchoudhary9622",
  education: {
    institution: "Vellore Institute of Technology – AP",
    degree: "B.Tech in Computer Science Engineering",
    graduationYear: "2027",
    cgpa: "7.68 / 10",
  },
  focusAreas: [
    "Software Engineering",
    "Full-Stack Systems",
    "Applied AI & LangGraph",
    "Deterministic Business Logic",
  ],
};
