"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  FileText,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Terminal,
  MessageSquare,
  Building2,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { profileData } from "@/data/profile";

const INQUIRY_TOPICS = [
  {
    id: "internship",
    label: "SWE Internship / Full-Time Role",
    subject: "Software Engineering Opportunity — Abhishek Choudhary",
    placeholder:
      "Hi Abhishek, I reviewed your portfolio and would like to discuss an engineering role...",
  },
  {
    id: "architecture",
    label: "ParcelPilot AI / Systems Discussion",
    subject: "Discussion regarding ParcelPilot AI & Agent Architecture",
    placeholder:
      "Hi Abhishek, I found your deterministic policy engine and LangGraph setup fascinating...",
  },
  {
    id: "collaboration",
    label: "Full-Stack Project Collaboration",
    subject: "Project Collaboration — Next.js / FastAPI / AI",
    placeholder:
      "Hi Abhishek, I'm working on a project and would love to collaborate on the backend/AI pipeline...",
  },
  {
    id: "general",
    label: "General Technical Inquiry",
    subject: "Connecting with Abhishek Choudhary",
    placeholder:
      "Hi Abhishek, just wanted to connect and discuss software development...",
  },
];

export function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState(INQUIRY_TOPICS[0]);
  const [customMessage, setCustomMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedNote, setCopiedNote] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const finalBody =
    customMessage.trim().length > 0
      ? customMessage
      : `Hi Abhishek,\n\nI came across your software engineering portfolio and would like to discuss: ${selectedTopic.label}.\n\nLooking forward to hearing from you!`;

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    selectedTopic.subject
  )}&body=${encodeURIComponent(finalBody)}`;

  const copyFormattedMessage = () => {
    const textToCopy = `To: ${profileData.email}\nSubject: ${selectedTopic.subject}\n\n${finalBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-32 border-t border-border/80 relative overflow-hidden bg-background selection:bg-accent-blue/20"
    >
      {/* Large Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-accent-glow blur-[180px] rounded-full pointer-events-none opacity-25" />
      <div className="absolute inset-0 tech-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Big Editorial Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-background-elevated border border-accent/40 text-xs font-mono text-accent shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">Open for SWE Roles &amp; Internships · 2025/2026</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
            Let&apos;s build something <span className="text-accent">exceptional</span>.
          </h2>

          <p className="text-base sm:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Whether you have an engineering role opening, a project in mind, or want to discuss full-stack &amp; deterministic AI architectures — my inbox is always open.
          </p>
        </div>

        {/* 2-Column Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 cols): Direct Channels & Verification Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Direct Communication Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-background-subtle border border-border hover:border-accent-blue/40 transition-all shadow-card space-y-6">
              
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  Direct Channels
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Get in Touch Directly
                </h3>
              </div>

              {/* Email item */}
              <div className="p-5 rounded-2xl bg-background-elevated border border-border/80 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-foreground-subtle">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-accent-muted border border-accent/40 flex items-center justify-center text-accent">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-foreground">Email Address</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">• Active Inbox</span>
                </div>
                <div className="font-mono text-sm sm:text-base font-bold text-foreground select-all break-all pl-1">
                  {profileData.email}
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={copyEmail}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-background hover:bg-background-hover border border-border text-xs font-semibold text-foreground transition-all"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-mono font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-accent" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-foreground text-background hover:bg-accent hover:text-background font-bold text-xs transition-all shadow-sm"
                  >
                    <span>Launch Mail</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone item */}
              <div className="p-5 rounded-2xl bg-background-elevated border border-border/80 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-foreground-subtle">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-foreground">Phone &amp; WhatsApp</span>
                  </div>
                  <span className="text-foreground-faint">Direct Voice/Text</span>
                </div>
                <div className="font-mono text-sm sm:text-base font-bold text-foreground pl-1">
                  +91 {profileData.phone}
                </div>
                <button
                  onClick={copyPhone}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-background hover:bg-background-hover border border-border text-xs font-semibold text-foreground transition-all"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-mono font-bold">Phone Number Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-accent-blue" />
                      <span>Copy Phone Number</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Timezone Details */}
              <div className="space-y-2.5 pt-2 border-t border-border/40 font-mono text-xs text-foreground-subtle">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-blue" /> Location
                  </span>
                  <span className="text-foreground font-medium">{profileData.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent" /> Timezone
                  </span>
                  <span className="text-foreground font-medium">IST (UTC +5:30)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Response SLA
                  </span>
                  <span className="text-emerald-400 font-medium">Within 24 Hours</span>
                </div>
              </div>

            </div>

            {/* Extra Large Social Connection Cards */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-background-subtle border border-border hover:border-accent hover:shadow-glow hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center group"
                aria-label="LinkedIn Profile"
              >
                <div className="w-12 h-12 rounded-2xl bg-background-elevated border border-border flex items-center justify-center text-accent mb-2.5 group-hover:scale-110 group-hover:border-accent/50 transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-foreground">LinkedIn</span>
                <span className="text-[11px] font-mono text-foreground-subtle mt-0.5">Profile &rarr;</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-background-subtle border border-border hover:border-accent hover:shadow-glow hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center group"
                aria-label="GitHub Profile"
              >
                <div className="w-12 h-12 rounded-2xl bg-background-elevated border border-border flex items-center justify-center text-accent mb-2.5 group-hover:scale-110 group-hover:border-accent/50 transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-foreground">GitHub</span>
                <span className="text-[11px] font-mono text-foreground-subtle mt-0.5">Codebases &rarr;</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-background-subtle border border-border hover:border-accent hover:shadow-glow hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center group"
                aria-label="Download Resume"
              >
                <div className="w-12 h-12 rounded-2xl bg-background-elevated border border-border flex items-center justify-center text-accent-blue mb-2.5 group-hover:scale-110 group-hover:border-accent/50 transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-foreground">Resume</span>
                <span className="text-[11px] font-mono text-foreground-subtle mt-0.5">PDF File &rarr;</span>
              </a>
            </div>

          </div>

          {/* Right Column (7 cols): Interactive Message Composer & Topic Launcher */}
          <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-background-subtle border border-border hover:border-accent-blue/40 transition-all shadow-card space-y-6">
            
            <div className="space-y-2 pb-4 border-b border-border/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  Interactive Message Composer
                </span>
                <span className="font-mono text-[11px] text-foreground-subtle hidden sm:inline">
                  Direct Mailto Protocol
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Prepare Your Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted">
                Select a conversation topic to automatically format your message and subject line.
              </p>
            </div>

            {/* Topic Chips */}
            <div className="space-y-2.5">
              <label className="font-mono text-xs uppercase tracking-wider text-foreground-subtle block">
                1. Select Conversation Topic:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INQUIRY_TOPICS.map((topic) => {
                  const isSelected = selectedTopic.id === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className={`p-3.5 rounded-xl text-left text-xs font-mono transition-all flex items-center justify-between border ${
                        isSelected
                          ? "bg-accent/15 border-accent text-accent font-bold shadow-sm"
                          : "bg-background-elevated hover:bg-background-hover border-border text-foreground-muted hover:text-foreground"
                      }`}
                    >
                      <span className="truncate mr-2">{topic.label}</span>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Message Area */}
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-wider text-foreground-subtle block">
                2. Customize Message (Optional):
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder={selectedTopic.placeholder}
                rows={4}
                className="w-full p-4 rounded-2xl bg-background-elevated border border-border text-xs sm:text-sm text-foreground placeholder-foreground-subtle focus:outline-none focus:border-accent transition-colors font-mono resize-none leading-relaxed"
              />
            </div>

            {/* Prepared Message Preview Box */}
            <div className="p-3.5 rounded-xl bg-background border border-border/70 space-y-1 font-mono text-xs">
              <div className="flex items-center justify-between text-foreground-subtle text-[11px]">
                <span>Configured Subject Line:</span>
                <span className="text-accent">{selectedTopic.subject}</span>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={mailtoUrl}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-foreground text-background hover:bg-accent hover:text-background font-bold text-xs sm:text-sm transition-all shadow-md group"
              >
                <span>Send via Default Email App</span>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={copyFormattedMessage}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-background-elevated hover:bg-background-hover border border-border text-xs sm:text-sm font-semibold text-foreground transition-all"
              >
                {copiedNote ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono font-bold">Draft Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-accent" />
                    <span>Copy Full Draft</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
