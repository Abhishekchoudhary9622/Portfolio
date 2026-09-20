import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#07080b",
          subtle: "#0d0f15",
          elevated: "#121620",
          card: "#161b26",
          hover: "#1b2230",
        },
        foreground: {
          DEFAULT: "#f1f5f9",
          muted: "#94a3b8",
          subtle: "#64748b",
          faint: "#475569",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
          strong: "rgba(255, 255, 255, 0.15)",
          accent: "rgba(56, 189, 248, 0.3)",
        },
        accent: {
          DEFAULT: "#00e5ff",
          blue: "#38bdf8",
          hover: "#0284c7",
          muted: "rgba(56, 189, 248, 0.12)",
          glow: "rgba(0, 229, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(0, 229, 255, 0.15)",
        "glow-lg": "0 0 60px -10px rgba(0, 229, 255, 0.2)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
