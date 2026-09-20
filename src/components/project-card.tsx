"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Check, Sparkles, Layers } from "lucide-react";
import { ProjectDetail } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectDetail;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-background-subtle border border-border/80 hover:border-accent hover:shadow-glow transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden">
      
      {/* Top Hairline Glowing Gradient on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Header Badges & Links */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-border/40 mb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-background-elevated border border-border text-foreground-muted font-medium">
              {project.statusText}
            </span>
            {project.collaborative && (
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-accent font-semibold">
                Collaborative
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-foreground-muted hover:text-foreground hover:bg-background-elevated border border-border/70 transition-colors"
                aria-label={`${project.title} GitHub Repository`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-foreground-muted hover:text-accent hover:bg-background-elevated border border-border/70 transition-colors"
                aria-label={`${project.title} Live Application`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors flex items-center justify-between gap-2">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-accent shrink-0" />
          </h3>
          <p className="font-mono text-xs sm:text-sm text-accent-blue font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Key Capabilities */}
        <div className="space-y-2.5 mb-6">
          <div className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
            Architectural Highlights:
          </div>
          {project.keyCapabilities.slice(0, 3).map((cap, cIdx) => (
            <div key={cIdx} className="flex items-start gap-2.5 text-xs text-foreground-muted">
              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="leading-snug">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30 mb-6">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-background-elevated font-mono text-[11px] text-foreground-subtle border border-border/60 group-hover:border-accent-blue/30 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 6 && (
            <span className="px-2.5 py-1 rounded-md bg-background-elevated font-mono text-[11px] text-foreground-faint">
              +{project.tags.length - 6}
            </span>
          )}
        </div>

        {/* Dedicated Case Study Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-background-elevated hover:bg-foreground hover:text-background border border-border text-foreground text-xs font-bold hover:border-foreground transition-all group/btn shadow-sm"
        >
          <span>Read Technical Case Study</span>
          <ArrowUpRight className="w-4 h-4 text-accent group-hover/btn:text-background group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
        </Link>
      </div>
    </div>
  );
}
