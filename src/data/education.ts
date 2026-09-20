export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  expectedGraduation: string;
  cgpa: string;
  location: string;
  courses: string[];
}

export const educationData: Education = {
  institution: "Vellore Institute of Technology – AP",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Engineering",
  period: "2023 – 2027",
  expectedGraduation: "2027",
  cgpa: "7.68 / 10",
  location: "Amaravati, Andhra Pradesh, India",
  courses: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (Java/C++)",
    "Computer Networks & Protocols",
    "Operating Systems",
    "Web Application Engineering",
  ],
};
