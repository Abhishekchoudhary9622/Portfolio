"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cpu,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  ChevronRight,
  Info,
} from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  category: string;
  role: string;
  tech: string[];
  metrics: string;
  details: string;
  input: string;
  output: string;
  color: string;
}

const SYSTEM_NODES: NodeData[] = [
  {
    id: "ui",
    name: "Client Interface",
    category: "01 / FRONTEND",
    role: "Type-Safe Reactive Views",
    tech: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"],
    metrics: "Sub-100ms INP · 100% Type Coverage",
    details:
      "Deterministic state management with optimistic updates, accessible keyboard landmarks, and strict component contracts.",
    input: "User interactions & form events",
    output: "Validated JSON payloads & action triggers",
    color: "#38bdf8",
  },
  {
    id: "api",
    name: "API & Business Logic",
    category: "02 / BACKEND CORE",
    role: "Deterministic Engine Layer",
    tech: ["FastAPI", "Python 3.12", "Node.js", "Pydantic"],
    metrics: "Zero-Hallucination Fee & SLA Calculations",
    details:
      "Pure algorithmic decision engines evaluate contract rules, cancellation fees, and SLAs without generative model interference.",
    input: "Scoped REST / RPC API requests",
    output: "Verified mathematical results & tool traces",
    color: "#00e5ff",
  },
  {
    id: "data",
    name: "Data & Storage",
    category: "03 / DATASTORES",
    role: "Relational & Document State",
    tech: ["PostgreSQL", "MongoDB Async", "Prisma", "Redis"],
    metrics: "ACID Consistency & Sub-millisecond Cache",
    details:
      "Normalized relational models for transactional entities alongside async document stores for agent checkpointing and traces.",
    input: "Prisma queries & PyMongo async cursors",
    output: "Immutable audit rows & customer state",
    color: "#38bdf8",
  },
  {
    id: "ai",
    name: "Intelligence & Agents",
    category: "04 / AGENTIC GRAPH",
    role: "LangGraph & Hybrid RAG",
    tech: ["LangGraph", "BM25 + FastEmbed", "Llama", "Ollama"],
    metrics: "Reciprocal Rank Fusion · Guarded Router",
    details:
      "LangGraph agentic state machines decompose multi-step queries while hybrid search retrieves authoritative documentation.",
    input: "Natural language query context",
    output: "Evidence citations & proposed human actions",
    color: "#00e5ff",
  },
];

export function SystemMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("api");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeStep, setActiveStep] = useState(0);
  const [isStreaming, setIsStreaming] = useState(true);

  const selectedNode =
    SYSTEM_NODES.find((n) => n.id === selectedNodeId) || SYSTEM_NODES[1];

  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SYSTEM_NODES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isStreaming]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 12, y: y * 12 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full rounded-2xl sm:rounded-3xl bg-background-subtle border border-border/80 shadow-card overflow-hidden transition-all duration-300 group hover:border-accent-blue/40"
    >
      {/* Background Tech Grid & Glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none opacity-25 blur-3xl transition-all duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, #00e5ff 0%, transparent 70%)",
          left: `calc(50% + ${mousePos.x * 3}px - 160px)`,
          top: `calc(40% + ${mousePos.y * 3}px - 160px)`,
        }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 px-5 sm:px-6 py-3.5 border-b border-border/50 bg-background-elevated/80 backdrop-blur-md flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
            Interactive System Map
          </span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-accent/10 border border-accent/20 text-accent">
            Live Architecture
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-foreground-subtle">
          <button
            onClick={() => setIsStreaming(!isStreaming)}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-background border border-border hover:border-accent/40 text-foreground-muted hover:text-foreground transition-colors"
          >
            <Activity className="w-3 h-3 text-accent" />
            <span className="hidden sm:inline">Stream:</span>
            <span className={isStreaming ? "text-emerald-400" : "text-amber-400"}>
              {isStreaming ? "Active" : "Paused"}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop & Tablet: Graph System Flow (Horizontal Strip) */}
      <div className="relative z-10 p-5 sm:p-6 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SYSTEM_NODES.map((node, idx) => {
            const isSelected = selectedNodeId === node.id;
            const isStepActive = activeStep === idx && isStreaming;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? "bg-background-elevated border-accent shadow-glow ring-1 ring-accent/50"
                    : isStepActive
                    ? "bg-background-elevated/70 border-accent-blue/50 shadow-sm"
                    : "bg-background-card/80 border-border/70 hover:border-accent-blue/40 hover:bg-background-elevated/50"
                }`}
              >
                {/* Active stream indicator */}
                {isStepActive && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-border/40">
                    <span className="font-mono text-[10px] text-foreground-subtle uppercase tracking-wider">
                      {node.category}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-accent" : "bg-border"
                      }`}
                    />
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-foreground tracking-tight line-clamp-1">
                    {node.name}
                  </h3>
                  <div className="font-mono text-[11px] text-accent-blue mt-0.5 line-clamp-1">
                    {node.role}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-border/30 flex items-center justify-between text-[10px] font-mono text-foreground-subtle">
                  <span className="text-foreground-muted truncate mr-1">
                    {node.tech[0]}
                  </span>
                  <span className="text-accent flex items-center gap-0.5 shrink-0">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Detailed Inspector Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 px-5 sm:px-6 pb-6 pt-2"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-background-elevated/90 border border-border space-y-4">
            
            {/* Inspector Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/40">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-accent-muted border border-accent/40 flex items-center justify-center text-accent">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span>{selectedNode.name}</span>
                    <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-background border border-border text-foreground-muted">
                      {selectedNode.metrics}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="font-mono text-[11px] text-accent-blue">
                {selectedNode.category}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-foreground-muted leading-relaxed">
              {selectedNode.details}
            </p>

            {/* Input & Output Contracts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-xl bg-background-subtle border border-border/60">
                <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-subtle block mb-1">
                  Incoming Contract / Input:
                </span>
                <span className="font-mono text-xs text-foreground font-medium">
                  {selectedNode.input}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-background-subtle border border-border/60">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block mb-1">
                  Outgoing Contract / Output:
                </span>
                <span className="font-mono text-xs text-foreground font-medium">
                  {selectedNode.output}
                </span>
              </div>
            </div>

            {/* Technologies Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="font-mono text-[11px] text-foreground-subtle mr-1">
                Verified Tools:
              </span>
              {selectedNode.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md bg-background font-mono text-[11px] text-foreground font-medium border border-border"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer System Guarantee */}
      <div className="relative z-10 px-5 sm:px-6 py-2.5 bg-background-subtle border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-foreground-subtle gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>System Rule: Deterministic logic decides. AI synthesizes. Humans approve.</span>
        </span>
        <span className="hidden sm:inline text-accent">Click any node to inspect telemetry</span>
      </div>
    </div>
  );
}
