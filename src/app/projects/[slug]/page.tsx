import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Github, ExternalLink, ShieldCheck, CheckCircle2, Cpu, AlertTriangle, Layers, Code2, Server } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ArchitectureStrip } from "@/components/architecture-strip";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Technical Case Study | Abhishek Choudhary`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-foreground-muted hover:text-accent transition-colors bg-background-elevated px-3 py-1.5 rounded-lg border border-border"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4 pb-8 border-b border-border/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-accent font-semibold">
              Technical Case Study
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-background-elevated border border-border text-foreground-muted">
              {project.statusText}
            </span>
            {project.collaborative && (
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                Collaborative Project
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            {project.title}
          </h1>

          <p className="font-mono text-sm sm:text-base text-accent-blue font-medium">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background-elevated hover:bg-background-hover border border-border text-xs font-semibold text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background hover:bg-accent hover:text-background text-xs font-bold transition-all"
              >
                <span>Open Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Core Principle Banner if applicable */}
        {project.principle && (
          <div className="p-5 rounded-2xl bg-background-elevated border border-accent/30 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                Guiding Architectural Principle
              </div>
              <div className="text-sm sm:text-base font-semibold text-foreground mt-0.5">
                &ldquo;{project.principle}&rdquo;
              </div>
            </div>
          </div>
        )}

        {/* Architecture Strip (if steps provided) */}
        {project.architectureSteps && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              End-to-End System Pipeline
            </h2>
            <ArchitectureStrip steps={project.architectureSteps} />
          </div>
        )}

        {/* Problem vs Solution 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-background-subtle border border-border space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>The Problem Space</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-background-subtle border border-border space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineering Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Subsystem Deep Dive */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">
            System Design & Implementation
          </h2>
          <p className="text-sm text-foreground-muted leading-relaxed">
            {caseStudy.architectureDescription}
          </p>
        </div>

        {/* Key Features Breakdown */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-foreground">
            Key Architectural Subsystems
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-background-subtle border border-border/80 space-y-3"
              >
                <h3 className="text-base font-bold text-foreground">
                  {feat.title}
                </h3>
                <p className="text-xs text-foreground-subtle leading-relaxed">
                  {feat.description}
                </p>
                <div className="space-y-2 pt-2 border-t border-border/40">
                  {feat.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs text-foreground-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions & Trade-Offs */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-foreground">
              Engineering Decisions & Trade-Offs
            </h2>
            <p className="text-xs text-foreground-subtle font-mono">
              Honest architectural evaluations and why specific technical paths were chosen.
            </p>
          </div>

          <div className="space-y-4">
            {caseStudy.engineeringDecisions.map((decision, dIdx) => (
              <div
                key={dIdx}
                className="p-5 rounded-2xl bg-background-card border border-border space-y-3"
              >
                <div className="font-semibold text-sm text-foreground">
                  {decision.decision}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border/30 text-xs">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                      Rationale:
                    </span>
                    <span className="text-foreground-muted">{decision.rationale}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      Trade-Off Considered:
                    </span>
                    <span className="text-foreground-muted">{decision.tradeoff}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-foreground">
            Technology Stack Breakdown
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.techStack.map((stack, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-background-subtle border border-border space-y-3"
              >
                <div className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                  {stack.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stack.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded bg-background-elevated font-mono text-[11px] text-foreground-muted border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-foreground-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Main Page</span>
          </Link>

          <a
            href="mailto:Choudharyabhishek656@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background font-semibold text-xs hover:bg-accent hover:text-background transition-all"
          >
            <span>Discuss this project</span>
          </a>
        </div>

      </div>
    </main>
  );
}
