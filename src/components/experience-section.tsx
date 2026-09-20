"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { experiences } from "@/data/experience";
import { educationData } from "@/data/education";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            04 / Trajectory
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Experience & Education
          </h2>
          <p className="text-sm text-foreground-muted max-w-2xl">
            Professional industry internship experience combined with rigorous academic foundations in computer science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Experience Timeline (Left - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <Briefcase className="w-4 h-4 text-accent" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                Industry Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-background-subtle border border-border hover:border-accent-blue/40 transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-border/40">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h4>
                      <div className="text-sm font-medium text-accent-blue mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-foreground-subtle">
                      <span className="flex items-center gap-1.5 bg-background-elevated px-2.5 py-1 rounded-md border border-border">
                        <Calendar className="w-3 h-3 text-accent" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-foreground-faint">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-foreground-muted leading-relaxed my-4">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-5">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-foreground-muted leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-background-elevated font-mono text-[11px] text-foreground-subtle border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Snapshot (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                Academic Background
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-background-subtle border border-border hover:border-accent-blue/40 transition-all space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    {educationData.institution}
                  </h4>
                  <div className="text-xs text-accent-blue font-mono mt-1">
                    {educationData.degree}
                  </div>
                  <div className="text-xs text-foreground-muted">
                    {educationData.field}
                  </div>
                </div>
                <div className="font-mono text-xs bg-background-elevated border border-border px-2.5 py-1 rounded-md text-foreground-muted">
                  {educationData.period}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="p-3.5 rounded-xl bg-background-elevated border border-border/80 flex items-center justify-between font-mono text-xs">
                <span className="text-foreground-subtle">Current Cumulative GPA</span>
                <span className="font-bold text-foreground text-sm bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20">
                  {educationData.cgpa}
                </span>
              </div>

              {/* Key Courses */}
              <div className="space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-foreground-subtle">
                  Core Foundations:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {educationData.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md bg-background-card text-[11px] font-mono text-foreground-muted border border-border/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border/30 flex items-center justify-between text-[11px] font-mono text-foreground-subtle">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent-blue" /> {educationData.location}
                </span>
                <span className="text-emerald-400 font-medium">Graduation: 2027</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
