"use client";

import React from "react";
import { Trophy, Users, MessageSquare, Heart, CheckCircle2 } from "lucide-react";
import { achievementsData } from "@/data/achievements";

const ICONS = {
  award: Trophy,
  leadership: Users,
  "co-curricular": MessageSquare,
  interest: Heart,
};

export function AchievementsSection() {
  return (
    <section className="py-20 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            07 / Honors & Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Achievements & Campus Activities
          </h2>
          <p className="text-xs sm:text-sm text-foreground-muted max-w-xl">
            Technical hackathons, student club leadership, and collaborative community engagement.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievementsData.map((item, idx) => {
            const Icon = ICONS[item.type] || Trophy;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-background-subtle border border-border hover:border-accent-blue/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border/40 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-background-elevated border border-border flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded bg-background-elevated border border-border text-[10px] font-mono text-accent">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm text-foreground mb-1">
                    {item.title}
                  </h3>
                  <div className="font-mono text-[11px] text-accent-blue mb-2.5">
                    {item.context}
                  </div>

                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
