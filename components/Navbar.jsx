"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { nav, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium">
          <span className="text-accent">~/</span>
          {profile.name.split(" ")[0].toLowerCase()}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="container-page flex flex-col pb-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-t border-line py-3 text-sm text-muted hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
