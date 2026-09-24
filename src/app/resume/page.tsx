"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { achievementsData } from "@/data/achievements";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `ABHISHEK CHOUDHARY
Sikar, Rajasthan, India | +91 95115 21808 | choudharyabhishek656@gmail.com
https://www.linkedin.com/in/abhishek-choudhary2005 | https://github.com/Abhishekchoudhary9622

PROFILE & OBJECTIVE
Computer Science Engineering student with strong skills in Python, Java, and SQL, plus hands-on experience in cloud computing (AWS, Oracle Cloud Infrastructure), AI and GenAI (LLM fine-tuning, OpenAI API), and full-stack web development. Seeking a Software Engineer role where I can apply these skills to real-world, data-driven projects.

SKILLS
Programming: Python, Java, C, SQL, HTML/CSS, React, Node.js, Express, MongoDB, Redis
Cloud: AWS Academy (Cloud Architecting, Cloud Foundations), Oracle Cloud Infrastructure (OCI)
AI / GenAI: TensorFlow, Keras, Deep Learning, LLM Fine-Tuning (Llama, GGUF Quantization, Ollama), OpenAI API, Groq
Data Analytics: Exploratory Data Analysis, Data Visualization, Pandas, NumPy
Core CS: Data Structures & Algorithms, OOP, DBMS, Full-Stack Web Development
Other: Communication, Team Management, Mentorship, Entrepreneurship

EXPERIENCE
Software Developer Intern | May 2025 – July 2025
Yarsi Corporation, Noida
• Developed the company's website using React, prioritizing a clean UI and mobile-friendly, responsive layouts.
• Gained hands-on experience with industry workflows: debugging, Git-based collaboration, and foundational concepts of LLM-based AI chatbots.
• Translated design mockups into interactive screens and ensured consistent performance across multiple devices.

PROJECTS
Vitty LLM: LLM Fine-Tuning and Deployment | Llama, GGUF Quantization, Ollama | Oct – Dec 2025 | Ollama
• Built a fine-tuning and deployment pipeline for a Llama-based LLM, including a custom data ingestion workflow and quantization for deployment on resource-constrained devices.

HealthSync: Healthcare Appointment and Follow-up Manager | React, Node.js, Express, PostgreSQL, Prisma | GitHub | Live Demo
• Built a full-stack healthcare platform with separate portals for patients, doctors, and admins, covering appointment booking, scheduling, and profile management, using React on the frontend and Node.js, Express, and PostgreSQL (with Prisma ORM) on the backend, across a schema of 10+ database tables.
• Added AI-based symptom summaries using the OpenAI API, along with email notifications, Google Calendar sync, and automated medication reminders using scheduled background jobs.

Eventallify: Campus Event Management Platform | Next.js, TypeScript, PostgreSQL, Drizzle ORM | GitHub | Live Demo
• Collaborated with a fellow student on a campus event management platform using Next.js, TypeScript, and PostgreSQL (Drizzle ORM), letting students discover, register for, and track campus events.
• Contributed to platform features including event registration with QR code tickets, an admin dashboard for managing events and announcements, and a Groq-powered AI chatbot widget, with a responsive UI built from 60+ reusable components.

ParcelPilot AI: Support and Operations Copilot | Python, FastAPI, React, TypeScript, LangGraph, MongoDB | GitHub | Live Demo
• Built a full-stack support and operations tool using Python, FastAPI, and React, where decisions like cancellations, fees, credits, and SLA status are calculated by rule-based code instead of AI, keeping answers accurate and explainable.
• Combined document search with multiple AI models with automatic fallback to answer support questions, and required human review before any AI-suggested action, such as a ticket update or refund, could go through.

CERTIFICATIONS
• AWS Academy Graduate: Cloud Architecting (Credly) and Cloud Foundations (Credly)
• Oracle Cloud Infrastructure 2025 Certified Foundations Associate – Score: 98% (ID: 102993796OCI25FNDCFA)
• Oracle: Java Certified Foundations Associate and MySQL HeatWave Implementation Certified Associate Rel 1
• Learn Java Programming: Beginner to Master, Udemy (Certificate)
• LeetCode SQL 50 Study Plan (Completed) and NPTEL: Algorithmic Graph Theory and Data Structures (Completed)

ACHIEVEMENTS & ACTIVITIES
Shortlisted among the top 47 teams in ECS, VIT-AP University. Android Club: Events Team Member. Co-curricular: Debate & Discussion, Listening Skills. Extracurricular: Cricket, Volleyball. Hobbies: Reading, Gaming, Coding.
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12 text-foreground print:bg-white print:text-black print:p-0">
      {/* Action Toolbar (Hidden in print) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-background-elevated border border-border shadow-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-foreground-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-background hover:bg-background-hover border border-border text-xs font-mono text-foreground-muted hover:text-foreground transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-background hover:bg-background-hover border border-border text-xs font-mono text-foreground-muted hover:text-foreground transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-accent-blue" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href="/resume.pdf"
              download="Abhishek_Choudhary_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-background font-bold text-xs font-mono hover:bg-accent/90 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Resume Document Paper Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 print:max-w-none print:px-0">
        <div className="bg-white text-[#111827] shadow-2xl rounded-xl sm:rounded-2xl p-6 sm:p-12 print:shadow-none print:rounded-none print:p-8 font-sans leading-snug border border-border/30 print:border-none">
          
          {/* Header */}
          <header className="text-center border-b border-gray-300 pb-3 mb-4">
            <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-gray-900 uppercase mb-1.5">
              ABHISHEK CHOUDHARY
            </h1>
            <div className="text-xs sm:text-[13px] text-gray-700 font-medium flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Sikar, Rajasthan, India</span>
              <span>|</span>
              <a href="tel:+919511521808" className="hover:text-blue-700">
                +91 95115 21808
              </a>
              <span>|</span>
              <a
                href="mailto:choudharyabhishek656@gmail.com"
                className="text-blue-600 hover:underline"
              >
                choudharyabhishek656@gmail.com
              </a>
            </div>
            <div className="text-xs sm:text-[13px] text-gray-700 font-medium flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-1">
              <a
                href="https://www.linkedin.com/in/abhishek-choudhary2005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/abhishek-choudhary2005
              </a>
              <span>|</span>
              <a
                href="https://github.com/Abhishekchoudhary9622"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <span>|</span>
              <Link href="/" className="text-blue-600 hover:underline">
                Portfolio
              </Link>
            </div>
          </header>

          {/* Profile & Objective */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5">
              Profile &amp; Objective
            </h2>
            <p className="text-xs sm:text-[12.5px] text-gray-800 leading-relaxed text-justify">
              Computer Science Engineering student with strong skills in Python, Java, and SQL, plus hands-on experience in cloud computing (AWS, Oracle Cloud Infrastructure), AI and GenAI (LLM fine-tuning, OpenAI API), and full-stack web development. Seeking a Software Engineer role where I can apply these skills to real-world, data-driven projects.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5">
              Skills
            </h2>
            <div className="text-xs sm:text-[12.5px] text-gray-800 space-y-1 leading-relaxed">
              <div>
                <span className="font-bold text-gray-900">Programming:</span>{" "}
                Python, Java, C, SQL, HTML/CSS, React, Node.js, Express, MongoDB, Redis
              </div>
              <div>
                <span className="font-bold text-gray-900">Cloud:</span>{" "}
                AWS Academy (Cloud Architecting, Cloud Foundations), Oracle Cloud Infrastructure (OCI)
              </div>
              <div>
                <span className="font-bold text-gray-900">AI / GenAI:</span>{" "}
                TensorFlow, Keras, Deep Learning, LLM Fine-Tuning (Llama, GGUF Quantization, Ollama), OpenAI API, Groq
              </div>
              <div>
                <span className="font-bold text-gray-900">Data Analytics:</span>{" "}
                Exploratory Data Analysis, Data Visualization, Pandas, NumPy
              </div>
              <div>
                <span className="font-bold text-gray-900">Core CS:</span>{" "}
                Data Structures &amp; Algorithms, OOP, DBMS, Full-Stack Web Development
              </div>
              <div>
                <span className="font-bold text-gray-900">Other:</span>{" "}
                Communication, Team Management, Mentorship, Entrepreneurship
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5">
              Experience
            </h2>
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <span className="font-bold text-gray-900 text-xs sm:text-[13px]">
                    Software Developer Intern
                  </span>
                  <div className="text-xs sm:text-[12px] italic text-gray-700">
                    Yarsi Corporation, Noida
                  </div>
                </div>
                <div className="text-xs sm:text-[12px] text-gray-700 font-medium sm:text-right">
                  May 2025 – July 2025
                </div>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-[12.5px] text-gray-800 space-y-1 leading-relaxed">
                <li>
                  Developed the company&apos;s website using React, prioritizing a clean UI and mobile-friendly, responsive layouts.
                </li>
                <li>
                  Gained hands-on experience with industry workflows: debugging, Git-based collaboration, and foundational concepts of LLM-based AI chatbots.
                </li>
                <li>
                  Translated design mockups into interactive screens and ensured consistent performance across multiple devices.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-0.5 mb-2">
              Projects
            </h2>
            <div className="space-y-3">
              
              {/* Vitty LLM */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-xs sm:text-[13px]">
                    <span className="font-bold text-gray-900">Vitty LLM: LLM Fine-Tuning and Deployment</span>
                    <span className="text-gray-700 font-medium"> | Llama, GGUF Quantization, Ollama</span>
                  </div>
                  <div className="text-xs sm:text-[12px] text-gray-700 sm:text-right shrink-0">
                    <span>Oct – Dec 2025 | </span>
                    <a
                      href="https://ollama.com/vrishankraina/vittyquantized"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Ollama
                    </a>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-[12.5px] text-gray-800 space-y-0.5 leading-relaxed mt-0.5">
                  <li>
                    Built a fine-tuning and deployment pipeline for a Llama-based LLM, including a custom data ingestion workflow and quantization for deployment on resource-constrained devices.
                  </li>
                </ul>
              </div>

              {/* HealthSync */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-xs sm:text-[13px]">
                    <span className="font-bold text-gray-900">HealthSync: Healthcare Appointment and Follow-up Manager</span>
                    <span className="text-gray-700 font-medium"> | React, Node.js, Express, PostgreSQL, Prisma</span>
                  </div>
                  <div className="text-xs sm:text-[12px] text-gray-700 sm:text-right shrink-0">
                    <a
                      href="https://github.com/Abhishekchoudhary9622/Healthcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                    <span> | </span>
                    <a
                      href="https://healthcare-frontend-swart.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-[12.5px] text-gray-800 space-y-0.5 leading-relaxed mt-0.5">
                  <li>
                    Built a full-stack healthcare platform with separate portals for patients, doctors, and admins, covering appointment booking, scheduling, and profile management, using React on the frontend and Node.js, Express, and PostgreSQL (with Prisma ORM) on the backend, across a schema of 10+ database tables.
                  </li>
                  <li>
                    Added AI-based symptom summaries using the OpenAI API, along with email notifications, Google Calendar sync, and automated medication reminders using scheduled background jobs.
                  </li>
                </ul>
              </div>

              {/* Eventallify */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-xs sm:text-[13px]">
                    <span className="font-bold text-gray-900">Eventallify: Campus Event Management Platform</span>
                    <span className="text-gray-700 font-medium"> | Next.js, TypeScript, PostgreSQL, Drizzle ORM</span>
                  </div>
                  <div className="text-xs sm:text-[12px] text-gray-700 sm:text-right shrink-0">
                    <a
                      href="https://github.com/Abhishekchoudhary9622/Eventallify"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                    <span> | </span>
                    <a
                      href="https://eventallify-neon.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-[12.5px] text-gray-800 space-y-0.5 leading-relaxed mt-0.5">
                  <li>
                    Collaborated with a fellow student on a campus event management platform using Next.js, TypeScript, and PostgreSQL (Drizzle ORM), letting students discover, register for, and track campus events.
                  </li>
                  <li>
                    Contributed to platform features including event registration with QR code tickets, an admin dashboard for managing events and announcements, and a Groq-powered AI chatbot widget, with a responsive UI built from 60+ reusable components.
                  </li>
                </ul>
              </div>

              {/* ParcelPilot AI */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="text-xs sm:text-[13px]">
                    <span className="font-bold text-gray-900">ParcelPilot AI: Support and Operations Copilot</span>
                    <span className="text-gray-700 font-medium"> | Python, FastAPI, React, TypeScript, LangGraph, MongoDB</span>
                  </div>
                  <div className="text-xs sm:text-[12px] text-gray-700 sm:text-right shrink-0">
                    <a
                      href="https://github.com/Abhishekchoudhary9622/pilotparcel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                    <span> | </span>
                    <a
                      href="https://pilotparcel.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-[12.5px] text-gray-800 space-y-0.5 leading-relaxed mt-0.5">
                  <li>
                    Built a full-stack support and operations tool using Python, FastAPI, and React, where decisions like cancellations, fees, credits, and SLA status are calculated by rule-based code instead of AI, keeping answers accurate and explainable.
                  </li>
                  <li>
                    Combined document search with multiple AI models with automatic fallback to answer support questions, and required human review before any AI-suggested action, such as a ticket update or refund, could go through.
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Certifications */}
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5">
              Certifications
            </h2>
            <ul className="list-disc pl-5 text-xs sm:text-[12.5px] text-gray-800 space-y-1 leading-relaxed">
              <li>
                <span className="font-bold text-gray-900">AWS Academy Graduate:</span> Cloud Architecting (
                <span className="text-blue-600 font-medium">Credly</span>) and Cloud Foundations (
                <span className="text-blue-600 font-medium">Credly</span>)
              </li>
              <li>
                <span className="font-bold text-gray-900">Oracle Cloud Infrastructure 2025 Certified Foundations Associate</span> – Score: 98% (ID: 102993796OCI25FNDCFA)
              </li>
              <li>
                <span className="font-bold text-gray-900">Oracle:</span> Java Certified Foundations Associate and MySQL HeatWave Implementation Certified Associate Rel 1
              </li>
              <li>
                <span className="font-bold text-gray-900">Learn Java Programming: Beginner to Master</span>, Udemy (
                <span className="text-blue-600 font-medium">Certificate</span>)
              </li>
              <li>
                <span className="font-bold text-gray-900">LeetCode SQL 50 Study Plan</span> (Completed) and <span className="font-bold text-gray-900">NPTEL: Algorithmic Graph Theory and Data Structures</span> (Completed)
              </li>
            </ul>
          </section>

          {/* Achievements & Activities */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5">
              Achievements &amp; Activities
            </h2>
            <p className="text-xs sm:text-[12.5px] text-gray-800 leading-relaxed">
              Shortlisted among the top 47 teams in ECS, VIT-AP University. Android Club: Events Team Member. Co-curricular: Debate &amp; Discussion, Listening Skills. Extracurricular: Cricket, Volleyball. Hobbies: Reading, Gaming, Coding.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
