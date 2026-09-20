import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { profileData } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abhishek Choudhary",
  description:
    "Portfolio of Abhishek Choudhary, a Computer Science Engineering student building full-stack applications, AI/ML systems and LLM-powered products.",
  keywords: [
    "Abhishek Choudhary",
    "Software Engineer",
    "Full-Stack Developer",
    "AI / LLM Builder",
    "LangGraph",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "ParcelPilot AI",
    "HealthSync",
    "VIT-AP",
  ],
  authors: [{ name: "Abhishek Choudhary", url: "https://github.com/Abhishekchoudhary9622" }],
  creator: "Abhishek Choudhary",
  metadataBase: new URL("https://abhishekchoudhary.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekchoudhary.dev",
    title: "Abhishek Choudhary",
    description:
      "Computer Science Engineering student building full-stack applications and practical AI systems.",
    siteName: "Abhishek Choudhary Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Choudhary",
    description:
      "Computer Science Engineering student building full-stack applications and practical AI systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileData.name,
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profileData.education.institution,
  },
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Web Development",
    "Artificial Intelligence",
    "Large Language Models",
    "LangGraph",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Cloud Computing",
  ],
  url: "https://github.com/Abhishekchoudhary9622",
  sameAs: [
    profileData.github,
    profileData.linkedin,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark font-sans">
      <head>
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-accent-blue/30 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
