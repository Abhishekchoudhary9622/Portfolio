# Abhishek Choudhary — Software Engineering Portfolio

> **Software Engineer · Full-Stack Developer · AI / LLM Builder**  
> Computer Science Engineering student at Vellore Institute of Technology – AP ('27) building full-stack applications, deterministic business systems, and practical AI workflows.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=flat&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Overview & Design Philosophy

This repository contains the source code for my personal developer portfolio website. Built with a focus on **editorial minimalism, technical depth, and clean UI engineering**, the site presents real-world production architectures, deterministic vs. stochastic LLM trade-offs, and verified engineering capabilities without generic templates or hyperbole.

### ✨ Key Features

- **Interactive Developer Workbench & CLI**: In-browser interactive console supporting real-time commands (`whoami`, `projects`, `skills`, `contact`, `clear`) alongside type-safe contract snippets.
- **Dedicated Technical Case Studies**: Dynamic route generation (`/projects/[slug]`) diving deep into problem spaces, system architecture diagrams, engineering decisions, trade-offs, and tech stacks.
- **Architectural Storytelling**: Highlighting the core philosophy: *"AI assists. Deterministic logic decides. Humans approve actions."*
- **Connect Command Center**: 2-column interactive communication lounge featuring pre-filled topic launchers, 1-click email/phone copy utilities, and direct channels.
- **Verified Credentials Grid**: Categorized certifications covering AWS, Oracle Cloud (98% Score), Java, MySQL, LeetCode, and NPTEL.
- **Mobile-First & Accessible**: Fully responsive layout tuned for all viewports (390px, 430px, 768px, 1440px) with semantic HTML and keyboard navigation.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [Next.js 14](https://nextjs.org/) (App Router, Server-Side Static Generation) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling & Design Tokens** | [Tailwind CSS](https://tailwindcss.com/) (Custom Dark-First Charcoal/Cyan Theme) |
| **Animations & Transitions** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Inter & JetBrains Mono |
| **SEO & Standards** | Automated XML Sitemap, Robots.txt, OpenGraph, JSON-LD Schema |

---

## 📁 Project Structure

```
├── public/
│   └── resume.pdf                 # Resume PDF download asset
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with fonts, metadata & Person JSON-LD
│   │   ├── page.tsx               # Main single-page portfolio view
│   │   ├── globals.css            # Dark-first design tokens & tech-grid patterns
│   │   ├── sitemap.ts             # Dynamic XML sitemap generator
│   │   ├── robots.ts              # Search engine directives
│   │   └── projects/[slug]/
│   │       └── page.tsx           # Technical Case Study deep-dive pages
│   ├── components/
│   │   ├── navbar.tsx             # Sticky navigation with scrollspy active highlighting
│   │   ├── hero.tsx               # Hero header with positioning & direct CTAs
│   │   ├── hero-terminal.tsx      # Interactive Developer Terminal & CLI
│   │   ├── about.tsx              # Editorial background narrative & core pillars
│   │   ├── skills-section.tsx     # Categorized capability chips (0% bars)
│   │   ├── how-i-build.tsx        # 4-stage engineering lifecycle
│   │   ├── experience-section.tsx # Internship timeline & academic education
│   │   ├── projects-section.tsx   # Featured ParcelPilot & supporting project grid
│   │   ├── project-card.tsx       # Reusable project card with illuminated hover glow
│   │   ├── architecture-strip.tsx # Visual pipeline with deterministic vs human tags
│   │   ├── certifications-section.tsx # Verified credential badges & score banners
│   │   ├── achievements-section.tsx   # Honors, hackathons & campus leadership
│   │   ├── contact-section.tsx    # 2-column Connect Command Center & message composer
│   │   └── footer.tsx             # Live operational status beacon & back-to-top
│   ├── data/
│   │   ├── profile.ts             # Verified personal data & bio statements
│   │   ├── projects.ts            # Detailed project case studies & architecture data
│   │   ├── skills.ts              # Grouped technical skill categories
│   │   ├── experience.ts          # Industry internship records
│   │   ├── education.ts           # University degree & academic metrics
│   │   ├── certifications.ts      # Cloud, Java, and Database credentials
│   │   ├── achievements.ts        # Hackathons & leadership entries
│   │   ├── how-we-build.ts        # 4-stage methodology principles
│   │   └── socials.ts             # Verified external links
│   └── lib/
│       └── utils.ts               # Class merging utilities (clsx + tailwind-merge)
├── tailwind.config.ts             # Custom color palette & keyframes
├── tsconfig.json                  # Path aliases (@/*) & compiler settings
└── package.json                   # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhishekchoudhary9622/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 💼 Featured Engineering Projects

- **[ParcelPilot AI](https://github.com/Abhishekchoudhary9622/pilotparcel)** — Evidence-first Support & Operations Copilot combining deterministic policy engines (FastAPI/Python) with LangGraph orchestration and hybrid document retrieval (BM25 + FastEmbed ONNX RRF).
- **[HealthSync](https://github.com/Abhishekchoudhary9622/Healthcare)** — Healthcare Appointment & Follow-up Manager featuring multi-portal access (Patient/Doctor/Admin), Google Calendar synchronization, and automated cron background alert jobs.
- **[Vitty LLM](https://ollama.com/vrishankraina/vittyquantized)** — End-to-end dataset curation, LoRA fine-tuning, and GGUF quantization pipeline for low-memory edge inference via Ollama.
- **[Eventallify](https://github.com/Abhishekchoudhary9622/Eventallify)** ([Live Demo](https://eventallify-neon.vercel.app/)) — Collaborative university event discovery and management platform with cryptographic QR ticketing and Groq AI concierge.

---

## 📬 Contact & Professional Links

- **Name**: Abhishek Choudhary
- **Email**: [Choudharyabhishek656@gmail.com](mailto:Choudharyabhishek656@gmail.com)
- **LinkedIn**: [linkedin.com/in/abhishek-choudhary-b73a28261](https://www.linkedin.com/in/abhishek-choudhary-b73a28261)
- **GitHub**: [github.com/Abhishekchoudhary9622](https://github.com/Abhishekchoudhary9622)
- **Location**: Sikar, Rajasthan, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
