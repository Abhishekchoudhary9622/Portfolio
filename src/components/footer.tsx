"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-background py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & System Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Terminal className="w-4 h-4 text-accent" />
              <span>{profileData.name}</span>
            </div>

            <div className="hidden sm:inline-block text-border">•</div>

            <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-foreground-subtle">
              © {new Date().getFullYear()} · Built with Next.js & TypeScript
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-background-elevated hover:bg-background-hover border border-border text-foreground-muted hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
