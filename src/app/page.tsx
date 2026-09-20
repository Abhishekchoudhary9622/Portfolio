import React from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SkillsSection } from "@/components/skills-section";
import { HowIBuild } from "@/components/how-i-build";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-accent-blue/20">
      <Hero />
      <About />
      <SkillsSection />
      <HowIBuild />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
