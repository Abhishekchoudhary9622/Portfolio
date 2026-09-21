"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Github, Linkedin, ArrowUpRight, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/socials";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "How I Build", id: "how-i-build" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Handle hash scrolling when navigating across pages
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [pathname]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border py-3 shadow-lg"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-background-elevated border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
            <Terminal className="w-4 h-4 text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-foreground group-hover:text-accent transition-colors">
              {profileData.name}
            </span>
            <span className="font-mono text-[10px] text-foreground-subtle">
              SWE · Full-Stack · AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-background-subtle/70 px-3 py-1.5 rounded-full border border-border/80 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = isHome && activeSection === item.id;
            return (
              <Link
                key={item.label}
                href={`/#${item.id}`}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-foreground/10 text-accent font-semibold shadow-sm"
                    : "text-foreground-muted hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons (Right) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Abhishekchoudhary9622"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-elevated border border-border/60 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-choudhary-b73a28261"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-elevated border border-border/60 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background font-medium text-xs hover:bg-accent hover:text-background transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-foreground text-background text-xs font-medium flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-background-elevated border border-border text-foreground-muted hover:text-foreground focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-elevated/95 border-b border-border backdrop-blur-xl px-6 py-5 mt-3 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={`/#${item.id}`}
                onClick={closeMobileMenu}
                className="px-3 py-2 text-sm text-foreground-muted hover:text-foreground hover:bg-background-hover rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-border flex items-center justify-around">
            <a
              href="https://github.com/Abhishekchoudhary9622"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-foreground-muted hover:text-accent py-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-choudhary-b73a28261"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-foreground-muted hover:text-accent py-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
