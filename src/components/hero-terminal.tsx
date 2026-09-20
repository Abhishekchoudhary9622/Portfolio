"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  CornerDownLeft,
  Sparkles,
  Layers,
  ArrowRight,
  ExternalLink,
  Code2,
  FolderGit2,
} from "lucide-react";
import { profileData } from "@/data/profile";

interface CommandOutput {
  id: string;
  command: string;
  type: "text" | "badges" | "projects" | "contact";
  data?: any;
  text?: string;
}

const DEFAULT_COMMANDS: CommandOutput[] = [
  {
    id: "init",
    command: "whoami",
    type: "text",
    text: "Abhishek Choudhary — Software Engineer · Full-Stack & Practical AI Builder",
  },
];

export function HeroTerminal() {
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>(DEFAULT_COMMANDS);
  const [inputVal, setInputVal] = useState("");
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const copyProfileSnippet = () => {
    const snippet = `const engineer = {
  name: "${profileData.name}",
  role: "${profileData.titles.join(" · ")}",
  education: "${profileData.education.institution}",
  cgpa: "${profileData.education.cgpa}",
  status: "Open for SWE Internships & Full-Time Roles"
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    setActiveChip(cmd);

    if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let outputItem: CommandOutput;

    if (cmd === "skills" || cmd === "stack") {
      outputItem = {
        id: Date.now().toString(),
        command: rawCmd,
        type: "badges",
        data: [
          "React 19",
          "Next.js",
          "TypeScript",
          "Python 3.12",
          "FastAPI",
          "LangGraph",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "AWS",
          "OCI 98%",
        ],
      };
    } else if (cmd === "projects" || cmd === "work") {
      outputItem = {
        id: Date.now().toString(),
        command: rawCmd,
        type: "projects",
        data: [
          { name: "ParcelPilot AI", tag: "Featured Support Copilot", link: "#projects" },
          { name: "HealthSync", tag: "Healthcare & Calendar Sync", link: "#projects" },
          { name: "Vitty LLM", tag: "Llama GGUF Quantization", link: "#projects" },
          { name: "Eventallify", tag: "Campus Hub & QR Passes", link: "#projects" },
        ],
      };
    } else if (cmd === "contact" || cmd === "email") {
      outputItem = {
        id: Date.now().toString(),
        command: rawCmd,
        type: "contact",
        data: {
          email: profileData.email,
          phone: `+91 ${profileData.phone}`,
          location: profileData.location,
        },
      };
    } else if (cmd === "whoami" || cmd === "about") {
      outputItem = {
        id: Date.now().toString(),
        command: rawCmd,
        type: "text",
        text: "Computer Science student @ VIT-AP building full-stack products and deterministic AI workflows.",
      };
    } else if (cmd === "help") {
      outputItem = {
        id: Date.now().toString(),
        command: rawCmd,
        type: "text",
        text: "Supported commands: whoami, skills, projects, contact, clear",
      };
    } else if (cmd === "") {
      return;
    } else {
      outputItem = {
        id: Date.now().toString(),
        command: rawCmd,
        type: "text",
        text: `Command not found: '${rawCmd}'. Try clicking the quick command buttons below.`,
      };
    }

    setHistory((prev) => [...prev.slice(-3), outputItem]);
    setInputVal("");
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-background-card/95 border border-border/80 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-accent-blue/50 transition-all duration-300">
      
      {/* Sleek macOS Titlebar — No overflowing tabs, perfectly responsive */}
      <div className="px-4 sm:px-5 py-3.5 bg-background-elevated/95 border-b border-border/70 flex items-center justify-between gap-3">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 font-mono text-[11px] text-foreground-subtle hidden sm:inline-block">
            abhishek@developer-workbench:~
          </span>
        </div>

        {/* Status indicator badge & Copy */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 font-mono text-[10px] text-accent font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Interactive CLI</span>
          </span>

          <button
            onClick={copyProfileSnippet}
            className="p-1.5 rounded-lg bg-background border border-border text-foreground-muted hover:text-accent hover:border-accent/40 transition-colors"
            title="Copy Profile Snippet"
            aria-label="Copy Profile Snippet"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-6 space-y-4 font-mono text-xs text-foreground-muted">
        
        {/* Core Profile Object — Wrapped cleanly for mobile & desktop */}
        <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-background-elevated/70 border border-border/60 text-foreground leading-relaxed overflow-hidden">
          <div className="text-foreground-subtle text-[11px] mb-1">
            // Abhishek Choudhary · Core Profile Contract
          </div>
          <div className="space-y-0.5 text-xs sm:text-[13px]">
            <div>
              <span className="text-accent font-bold">const</span>{" "}
              <span className="text-foreground font-semibold">engineer</span> = &#123;
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-accent-blue">name</span>:{" "}
              <span className="text-emerald-300 font-medium">&quot;{profileData.name}&quot;</span>,
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-accent-blue">roles</span>:{" "}
              <span className="text-emerald-300 font-medium">
                [&quot;Full-Stack&quot;, &quot;AI Systems&quot;, &quot;LangGraph&quot;]
              </span>,
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-accent-blue">education</span>:{" "}
              <span className="text-foreground-muted">&quot;VIT-AP CSE &apos;27 (CGPA 7.68)&quot;</span>,
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-accent-blue">status</span>:{" "}
              <span className="text-accent font-semibold">&quot;Open for SWE Internships &amp; Roles&quot;</span>
            </div>
            <div>&#125;;</div>
          </div>
        </div>

        {/* Live Command Stream History */}
        <div className="space-y-3 pt-1">
          <AnimatePresence initial={false}>
            {history.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-1.5"
              >
                {/* Command Prompt Line */}
                <div className="flex items-center gap-2 text-accent font-semibold text-xs">
                  <span className="text-foreground-subtle">$</span>
                  <span className="text-foreground">{item.command}</span>
                </div>

                {/* Output Rendering by Type */}
                {item.type === "text" && (
                  <div className="text-foreground-muted pl-3 text-xs leading-relaxed border-l border-border/80">
                    {item.text}
                  </div>
                )}

                {item.type === "badges" && (
                  <div className="pl-3 border-l border-border/80 flex flex-wrap gap-1.5 py-1">
                    {item.data.map((b: string) => (
                      <span
                        key={b}
                        className="px-2 py-0.5 rounded-md bg-background-elevated border border-accent/30 text-accent text-[11px] font-semibold"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                {item.type === "projects" && (
                  <div className="pl-3 border-l border-border/80 grid grid-cols-1 sm:grid-cols-2 gap-2 py-1">
                    {item.data.map((p: any) => (
                      <a
                        key={p.name}
                        href={p.link}
                        className="p-2 rounded-xl bg-background-elevated hover:bg-background border border-border text-xs flex items-center justify-between group/p"
                      >
                        <div>
                          <div className="font-bold text-foreground group-hover/p:text-accent">
                            {p.name}
                          </div>
                          <div className="text-[10px] text-foreground-subtle">
                            {p.tag}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-foreground-subtle group-hover/p:text-accent group-hover/p:translate-x-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}

                {item.type === "contact" && (
                  <div className="pl-3 border-l border-border/80 space-y-1 text-xs text-foreground-muted py-1">
                    <div>
                      <span className="text-accent-blue font-semibold">Email:</span>{" "}
                      <span className="text-foreground select-all">{item.data.email}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-semibold">Phone:</span>{" "}
                      <span className="text-foreground">{item.data.phone}</span>
                    </div>
                    <div>
                      <span className="text-accent font-semibold">Location:</span>{" "}
                      <span className="text-foreground">{item.data.location}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quick Clickable Suggestions — Custom Touch Friendly */}
        <div className="pt-2 border-t border-border/50 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-foreground-subtle uppercase tracking-wider">
            <span>Quick Commands:</span>
            <span>Tap to execute</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { label: "skills", cmd: "skills" },
              { label: "projects", cmd: "projects" },
              { label: "contact", cmd: "contact" },
              { label: "whoami", cmd: "whoami" },
              { label: "clear", cmd: "clear" },
            ].map((btn) => (
              <button
                key={btn.cmd}
                onClick={() => executeCommand(btn.cmd)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeChip === btn.cmd
                    ? "bg-accent text-background font-bold shadow-sm"
                    : "bg-background-elevated hover:bg-background border border-border text-foreground-muted hover:text-foreground hover:border-accent-blue/40"
                }`}
              >
                ${btn.label}
              </button>
            ))}
          </div>

          {/* Interactive Keyboard Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              executeCommand(inputVal);
            }}
            className="flex items-center gap-2 bg-background-elevated px-3 py-2 rounded-xl border border-border focus-within:border-accent transition-colors"
          >
            <span className="text-accent font-bold text-xs">$&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'projects', 'skills')..."
              className="bg-transparent text-xs text-foreground placeholder-foreground-subtle focus:outline-none flex-1 font-mono"
            />
            <button
              type="submit"
              className="p-1 rounded-md bg-background text-foreground-muted hover:text-accent border border-border"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Telemetry Bar */}
      <div className="px-5 py-2.5 bg-background-elevated/70 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-foreground-subtle">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active &amp; Deterministic Engine</span>
        </span>
        <span className="text-accent font-medium">
          FastAPI · Next.js · LangGraph
        </span>
      </div>
    </div>
  );
}
