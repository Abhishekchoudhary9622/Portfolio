"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Brain, Sparkles, MapPin, GraduationCap, ShieldCheck } from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Section Tag & Overview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                01 / Background
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Engineering with clarity & purpose.
              </h2>
            </div>

            <p className="text-sm text-foreground-muted leading-relaxed">
              Bridging robust software engineering with applied machine learning to build deterministic, reliable software solutions.
            </p>

            {/* Quick Metadata Card */}
            <div className="p-5 rounded-xl bg-background-elevated/70 border border-border space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-foreground-subtle flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                  Location
                </span>
                <span className="text-foreground font-medium">{profileData.location}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-foreground-subtle flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-accent" />
                  Education
                </span>
                <span className="text-foreground font-medium">B.Tech CSE &apos;27 (VIT-AP)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-foreground-subtle flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Focus
                </span>
                <span className="text-accent font-medium">Full Stack · Agents · Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Editorial Paragraphs & Core Pillars */}
          <div className="lg:col-span-8 space-y-8">
            <div className="prose prose-invert max-w-none space-y-5 text-foreground-muted text-base leading-relaxed">
              <p>
                I am a <span className="text-foreground font-semibold">Computer Science Engineering</span> student at Vellore Institute of Technology – AP. Rather than confining myself to classroom toy prototypes, I focus on building <span className="text-foreground font-semibold">end-to-end applications</span> with real relational backends, structured state management, and production-minded ergonomics.
              </p>

              <p>
                My engineering approach is rooted in strong core fundamentals: data structures, object-oriented design, database normalization, and distributed cloud primitives. In my projects, I integrate <span className="text-accent font-semibold">applied LLMs and agentic graphs (LangGraph)</span> not as black-box gimmicks, but as scoped tools governed by deterministic policy calculations and human confirmation checkpoints.
              </p>

              <p>
                Whether crafting responsive user interfaces with <span className="text-foreground font-semibold">Next.js and TypeScript</span>, architecting typed REST services with <span className="text-foreground font-semibold">FastAPI and Node.js</span>, or fine-tuning open-weights models with <span className="text-foreground font-semibold">GGUF quantization</span> for local execution, I care deeply about clean code, honest architecture, and high software quality.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-background-subtle border border-border/60 hover:border-accent-blue/30 transition-colors">
                <Code2 className="w-5 h-5 text-accent mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Typed Systems</h3>
                <p className="text-xs text-foreground-subtle mt-1">
                  Predictable React/Next frontends, strict TypeScript contracts, and robust state stores.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background-subtle border border-border/60 hover:border-accent-blue/30 transition-colors">
                <Database className="w-5 h-5 text-accent-blue mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Robust Backends</h3>
                <p className="text-xs text-foreground-subtle mt-1">
                  Relational PostgreSQL, async MongoDB, schema migrations, and RESTful APIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background-subtle border border-border/60 hover:border-accent-blue/30 transition-colors">
                <Brain className="w-5 h-5 text-accent mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Guarded AI</h3>
                <p className="text-xs text-foreground-subtle mt-1">
                  LangGraph orchestration, hybrid RRF search, and deterministic logic boundaries.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
