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
  headline: "Software Engineer · Full-Stack Developer · AI & Cloud Explorer",
  statement:
    "Computer Science Engineering student with strong skills in Python, Java, and SQL, plus hands-on experience in cloud computing (AWS, Oracle Cloud Infrastructure), AI and GenAI (LLM fine-tuning, OpenAI API), and full-stack web development.",
  supporting:
    "Seeking a Software Engineer role where I can apply these skills to real-world, data-driven projects.",
  location: "Sikar, Rajasthan, India",
  email: "choudharyabhishek656@gmail.com",
  phone: "+91 95115 21808",
  linkedin: "https://www.linkedin.com/in/abhishek-choudhary2005",
  github: "https://github.com/Abhishekchoudhary9622",
  education: {
    institution: "VIT-AP University",
    degree: "B.Tech in Computer Science and Engineering",
    graduationYear: "2027",
    cgpa: "7.68 / 10",
  },
  focusAreas: [
    "Full-Stack Web Development",
    "AI & GenAI (LLM Fine-Tuning)",
    "Cloud Computing (AWS & OCI)",
    "Python · Java · SQL",
  ],
};

