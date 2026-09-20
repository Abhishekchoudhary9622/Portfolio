"use client";

import React, { useState } from "react";
import { ArrowRight, Cpu, Shield, Search, CheckCircle, UserCheck, Play, Terminal } from "lucide-react";
import { ProjectArchitectureStep } from "@/data/projects";

interface ArchitectureStripProps {
  steps: ProjectArchitectureStep[];
}

const STEP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  input: Terminal,
  ai: Cpu,
  tool: Terminal,
  deterministic: Shield,
  retrieval: Search,
  router: Cpu,
  human: UserCheck,
  action: Play,
};

export function ArchitectureStrip({ steps }: ArchitectureStripProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full bg-background-elevated/90 border border-border/80 rounded-2xl p-5 overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-border/40 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
            ParcelPilot AI System Architecture
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent hidden sm:inline-block">
          Evidence-First & Human-in-the-Loop
        </span>
      </div>

      {/* Horizontal Flow Container */}
      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max py-2">
          {steps.map((step, idx) => {
            const Icon = STEP_ICONS[step.type] || Terminal;
            const isDeterministic = step.type === "deterministic";
            const isHuman = step.type === "human";
            const isHovered = activeStep === idx;

            return (
              <React.Fragment key={idx}>
                {/* Node Box */}
                <div
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`p-3 rounded-xl border transition-all duration-200 cursor-default flex flex-col items-center text-center w-36 ${
                    isDeterministic
                      ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-300"
                      : isHuman
                      ? "bg-amber-950/20 border-amber-500/40 text-amber-300"
                      : isHovered
                      ? "bg-accent-muted border-accent text-accent shadow-sm"
                      : "bg-background-card/90 border-border text-foreground-muted"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1.5 border ${
                      isDeterministic
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : isHuman
                        ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                        : "bg-background-elevated border-border/80 text-accent"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-semibold text-xs tracking-tight text-foreground line-clamp-1">
                    {step.label}
                  </div>
                  <div className="font-mono text-[10px] text-foreground-subtle line-clamp-1 mt-0.5">
                    {step.sublabel}
                  </div>
                </div>

                {/* Arrow connector */}
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-foreground-faint shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Principle Banner */}
      <div className="mt-4 pt-3 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-2 text-foreground-subtle">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Green = Pure Deterministic Math & Rules</span>
          <span className="text-border">•</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Amber = Explicit Human Sign-Off</span>
        </div>
        <div className="text-[11px] text-foreground-muted">
          No unverified LLM actions allowed to mutate state.
        </div>
      </div>
    </div>
  );
}
