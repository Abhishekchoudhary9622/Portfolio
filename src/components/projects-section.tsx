"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Github, ExternalLink, ShieldAlert, CheckCircle2, Sparkles, BookOpen, Layers } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ArchitectureStrip } from "./architecture-strip";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const router = useRouter();
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const supportingProjects = projectsData.filter((p) => !p.featured);

  const handleFeaturedClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    router.push(`/projects/${featuredProject.slug}`);
  };

  return (
    <section id="projects" className="py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              05 / Selected Work
            </span>
            <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 font-mono text-[10px] text-accent">
              Real Architectures
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Engineering Projects
          </h2>
          <p className="text-sm text-foreground-muted max-w-2xl">
            Real codebases, working systems, and concrete architectures. Built with deterministic business logic and full-stack rigor.
          </p>
        </div>

        {/* 1. FEATURED PROJECT: PARCELPILOT AI (Large Case Study Layout) */}
        <div
          onClick={handleFeaturedClick}
          className="mb-14 rounded-3xl bg-background-subtle border border-border hover:border-accent-blue/40 transition-all p-6 sm:p-10 relative overflow-hidden group cursor-pointer"
        >
          {/* Subtle glow in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-glow/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top Bar: Badges & Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/50">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-md bg-accent text-background font-mono text-xs font-bold uppercase tracking-wider">
                  Featured Case Study
                </span>
                <span className="font-mono text-xs text-foreground-muted px-3 py-1 rounded-md bg-background-elevated border border-border">
                  {featuredProject.statusText}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 relative z-10">
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-background-elevated hover:bg-background-hover border border-border text-foreground font-medium text-xs transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-foreground text-background hover:bg-accent hover:text-background font-semibold text-xs transition-all shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Title & Core Philosophy Statement */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground group-hover:text-accent transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="font-mono text-sm sm:text-base text-accent-blue font-medium">
                  {featuredProject.subtitle}
                </p>
              </div>

              {/* Core Principle Callout Banner */}
              <div className="p-4 rounded-xl bg-background-elevated border-l-4 border-accent border-y border-r border-border/80 flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-accent shrink-0" />
                <div className="font-mono text-xs sm:text-sm text-foreground">
                  <span className="font-semibold text-accent">Core Architectural Principle: </span>
                  &ldquo;{featuredProject.principle}&rdquo;
                </div>
              </div>

              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed max-w-4xl">
                {featuredProject.caseStudy.overview}
              </p>
            </div>

            {/* Illustrated Architecture Strip */}
            {featuredProject.architectureSteps && (
              <ArchitectureStrip steps={featuredProject.architectureSteps} />
            )}

            {/* Key Engineering Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-background-card border border-border/70 space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Deterministic Business Logic
                </h4>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  The LLM does not perform financial calculations or SLA evaluation. Pure deterministic Python modules evaluate exact cancellation fees, service credits, and contract due dates.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-background-card border border-border/70 space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-accent-blue font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-blue" />
                  Hybrid Document Retrieval (RRF)
                </h4>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Combines BM25 lexical keyword scoring with FastEmbed ONNX dense embeddings via Reciprocal Rank Fusion, ensuring exact tracking number lookup alongside semantic query matching.
                </p>
              </div>
            </div>

            {/* Tech Tags & Deep Dive Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/50">
              <div className="flex flex-wrap gap-1.5">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-background-elevated font-mono text-[11px] text-foreground-muted border border-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${featuredProject.slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline shrink-0"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* 2. SUPPORTING PROJECTS GRID */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2">
            <Layers className="w-4 h-4 text-accent" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              Additional Selected Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
