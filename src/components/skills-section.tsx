"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Code, Layers, Cpu, BookOpen, Cloud, CheckCircle2 } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  programming: Code,
  fullstack: Layers,
  aiml: Cpu,
  "cs-fundamentals": BookOpen,
  "cloud-tools": Cloud,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              02 / Capabilities
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Technical Skills & Tooling
            </h2>
            <p className="text-sm text-foreground-muted max-w-xl">
              Categorized technologies backed by production codebases, verified projects, and rigorous university coursework.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-background-elevated rounded-xl border border-border/70 self-start">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-foreground text-background font-semibold shadow-sm"
                  : "text-foreground-muted hover:text-foreground hover:bg-background-hover"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] || Code;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-foreground text-background font-semibold shadow-sm"
                      : "text-foreground-muted hover:text-foreground hover:bg-background-hover"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{cat.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Code;

            return (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-background-subtle/70 border border-border hover:border-accent-blue/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-border/40 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-background-elevated border border-border/80 flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground">{cat.name}</h3>
                    </div>
                    <span className="font-mono text-[11px] text-foreground-subtle">
                      {cat.skills.length} tools
                    </span>
                  </div>

                  <p className="text-xs text-foreground-subtle mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                          skill.featured
                            ? "bg-background-elevated border border-accent/30 text-foreground font-medium hover:border-accent hover:shadow-sm"
                            : "bg-background-elevated/60 border border-border text-foreground-muted hover:border-foreground-subtle hover:text-foreground"
                        }`}
                      >
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="pt-5 mt-5 border-t border-border/30 flex items-center justify-between text-[11px] font-mono text-foreground-subtle">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified in Code
                  </span>
                  <span className="text-foreground-faint">Production & Labs</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
