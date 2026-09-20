"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { howWeBuildSteps } from "@/data/how-we-build";
import { Layout, Server, Sparkles, ShieldCheck, Check, ArrowRight } from "lucide-react";

const STEP_ICONS = [Layout, Server, Sparkles, ShieldCheck];

export function HowIBuild() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="how-i-build" className="py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            03 / Methodology
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            How I Build Systems
          </h2>
          <p className="text-sm text-foreground-muted max-w-2xl">
            A cohesive engineering lifecycle: from typed interfaces and resilient backends to guarded AI agents and production deployment.
          </p>
        </div>

        {/* 4-Step Interactive Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howWeBuildSteps.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Layout;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isCurrent
                    ? "bg-background-elevated border-accent shadow-glow"
                    : "bg-background-subtle/70 border-border hover:border-accent-blue/40 hover:bg-background-hover/50"
                }`}
              >
                <div>
                  {/* Step Header Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-4">
                    <span className="font-mono text-xl font-extrabold text-accent">
                      {step.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
                        isCurrent
                          ? "bg-accent text-background border-accent"
                          : "bg-background-card text-foreground-muted border-border"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="text-base font-bold text-foreground tracking-tight">
                    {step.title}
                  </h3>
                  <div className="font-mono text-[11px] text-accent-blue mt-1 mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Principles Checklist */}
                <div className="space-y-2 pt-4 border-t border-border/30">
                  {step.principles.map((principle, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-foreground-subtle">
                      <Check className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Pipeline Summary Bar */}
        <div className="mt-8 p-4 rounded-xl bg-background-elevated/80 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-foreground-muted">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-foreground font-medium">Pipeline Principle:</span>
            <span className="text-foreground-subtle">
              Separation of concerns between UI state, transactional datastores, and probabilistic AI models.
            </span>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-accent hover:underline text-xs font-semibold shrink-0"
          >
            <span>See practical implementations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
