"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Phone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { HeroTerminal } from "./hero-terminal";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent-glow blur-[130px] rounded-full pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Hero Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background-elevated/90 border border-border text-xs font-mono text-foreground-muted backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-foreground-muted">Computer Science Engineering · VIT-AP &apos;27</span>
            </div>

            {/* Name & Primary Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground">
                Abhishek <span className="text-accent">Choudhary</span>
              </h1>
              <p className="font-mono text-sm sm:text-lg text-accent-blue font-semibold tracking-wide">
                Software Engineer · Full-Stack Developer · AI / LLM Builder
              </p>
            </div>

            {/* Concise Memorable Statement */}
            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-xl">
              I build full-stack products and practical AI systems that turn complex ideas into usable, reliable software with strong architectural fundamentals.
            </p>

            {/* Personal Location & Academic Snippet */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground-subtle pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                {profileData.location}
              </span>
              <span className="hidden sm:inline-block text-border">•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                Deterministic AI &amp; Full-Stack Systems
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-foreground text-background font-bold text-sm hover:bg-accent hover:text-background transition-all shadow-md group"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-background-elevated hover:bg-background-hover border border-border text-foreground font-semibold text-sm transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-accent-blue" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Prominent Large Social & Connect Buttons Strip */}
            <div className="pt-3 border-t border-border/50 w-full space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-foreground-subtle block">
                Connect Directly:
              </span>
              
              <div className="flex flex-wrap items-center gap-3">
                {/* Large GitHub Button */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-background-elevated hover:bg-background-hover border border-border hover:border-accent text-foreground hover:text-accent transition-all group shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <div className="w-8 h-8 rounded-xl bg-background flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-foreground">GitHub</div>
                    <div className="font-mono text-[10px] text-foreground-subtle">@Abhishek</div>
                  </div>
                </a>

                {/* Large LinkedIn Button */}
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-background-elevated hover:bg-background-hover border border-border hover:border-accent text-foreground hover:text-accent transition-all group shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <div className="w-8 h-8 rounded-xl bg-background flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-foreground">LinkedIn</div>
                    <div className="font-mono text-[10px] text-foreground-subtle">Network</div>
                  </div>
                </a>

                {/* Large Direct Mail Button */}
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-background-elevated hover:bg-background-hover border border-border hover:border-accent text-foreground hover:text-accent transition-all group shadow-sm"
                  aria-label="Email Abhishek"
                >
                  <div className="w-8 h-8 rounded-xl bg-background flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-foreground">Email</div>
                    <div className="font-mono text-[10px] text-foreground-subtle">Active Inbox</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Terminal & Workbench */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 w-full"
          >
            <HeroTerminal />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
