"use client";

import { useEffect, useState } from "react";

const roles = ["Cloud Engineer", "AWS AI/ML Specialist"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!deleting && charIndex < current.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex > 0) {
      const timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="section-container">
        <p className="text-text-muted text-sm font-mono mb-4 tracking-wide">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] shimmer-text">
          Jay Yoon.
        </h1>
        <div className="mt-4 text-lg sm:text-xl text-text-secondary font-light">
          <span className="text-accent">
            {roles[roleIndex].substring(0, charIndex)}
          </span>
          <span className="cursor" />
        </div>
        <p className="mt-6 text-text-muted text-sm leading-relaxed max-w-md">
          Cloud Support Engineer at AWS, Sydney. I build AI-integrated
          applications and help enterprise customers run ML workloads at scale.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        style={{ animation: "gentle-bounce 2.5s ease-in-out infinite" }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
