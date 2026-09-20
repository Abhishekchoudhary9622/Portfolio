"use client";

import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  ExternalLink,
  Cloud,
  Code2,
  Database,
  Terminal,
  Trophy,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { certifications } from "@/data/certifications";

const CATEGORY_TABS = [
  { id: "all", label: "All Credentials" },
  { id: "cloud", label: "Cloud (AWS & Oracle)" },
  { id: "programming", label: "Java & Systems" },
  { id: "database", label: "Databases & SQL" },
  { id: "algorithms", label: "Algorithms & NPTEL" },
];

const ISSUER_BADGES: Record<
  string,
  { label: string; bg: string; border: string; text: string }
> = {
  Oracle: {
    label: "Oracle Official",
    bg: "bg-red-950/30",
    border: "border-red-500/30",
    text: "text-red-400",
  },
  "Amazon Web Services (AWS)": {
    label: "AWS Academy",
    bg: "bg-amber-950/30",
    border: "border-amber-500/30",
    text: "text-amber-400",
  },
  LeetCode: {
    label: "LeetCode Verified",
    bg: "bg-orange-950/30",
    border: "border-orange-500/30",
    text: "text-orange-400",
  },
  "NPTEL (IIT/IISc)": {
    label: "NPTEL / MoE",
    bg: "bg-blue-950/30",
    border: "border-blue-500/30",
    text: "text-blue-400",
  },
  Udemy: {
    label: "Mastery Course",
    bg: "bg-purple-950/30",
    border: "border-purple-500/30",
    text: "text-purple-400",
  },
};

export function CertificationsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCerts =
    activeTab === "all"
      ? certifications
      : certifications.filter((c) => c.category === activeTab);

  return (
    <section id="certifications" className="py-24 border-t border-border/80 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                06 / Formal Credentials
              </span>
              <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 font-mono text-[10px] text-accent">
                Verified Industry Badges
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Certifications & Accreditations
            </h2>
            <p className="text-sm text-foreground-muted max-w-xl leading-relaxed">
              Official industry certifications in Cloud Architecting, Enterprise Java, Database Implementations, and Advanced Data Structures.
            </p>
          </div>

          {/* Tab Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-background-elevated rounded-2xl border border-border self-start">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-foreground text-background font-bold shadow-sm"
                    : "text-foreground-muted hover:text-foreground hover:bg-background-hover"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlightable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCerts.map((cert) => {
            const issuerStyle = ISSUER_BADGES[cert.issuer] || {
              label: cert.issuer,
              bg: "bg-background-elevated",
              border: "border-border",
              text: "text-foreground",
            };

            return (
              <div
                key={cert.id}
                className={`p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 flex flex-col justify-between group border relative ${
                  cert.highlight
                    ? "bg-background-subtle border-accent/40 hover:border-accent hover:shadow-glow hover:-translate-y-1.5"
                    : "bg-background-subtle/80 border-border hover:border-accent-blue/50 hover:shadow-card hover:-translate-y-1"
                }`}
              >
                {/* Score or Highlight Badge Banner */}
                {cert.score && (
                  <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-extrabold flex items-center gap-1.5 shadow-sm">
                    <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cert.score}</span>
                  </div>
                )}

                <div>
                  {/* Top Issuer Badge & Category */}
                  <div className="flex items-center justify-between pb-3 border-b border-border/40 mb-4">
                    <span
                      className={`px-2.5 py-1 rounded-lg font-mono text-[11px] font-semibold border ${issuerStyle.bg} ${issuerStyle.border} ${issuerStyle.text}`}
                    >
                      {issuerStyle.label}
                    </span>
                    <span className="font-mono text-[10px] text-foreground-subtle capitalize">
                      {cert.category}
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors mb-3">
                    {cert.title}
                  </h3>

                  {/* Skills Covered Pills */}
                  <div className="space-y-1.5 mb-5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle">
                      Competencies:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-background-elevated font-mono text-[10px] text-foreground-muted border border-border/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Credential Verification Details */}
                <div className="pt-4 border-t border-border/30 flex items-center justify-between font-mono text-[11px] text-foreground-subtle">
                  <span className="flex items-center gap-1 text-accent font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                  <span className="text-[10px] text-foreground-faint truncate max-w-[120px]">
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
