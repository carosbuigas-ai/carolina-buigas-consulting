import React from "react";
import { Link } from "react-router-dom";

export default function FinalCtaSection() {
  return (
    <footer className="py-[20vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="text-center relative">
          <div
            className="absolute inset-0 -z-10 opacity-40 blur-3xl"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(67,116,184,0.25), transparent 70%)" }}
          />
          <h2 className="font-heading text-4xl md:text-7xl text-parchment tracking-[-0.02em] leading-[1.05] mb-2 font-bold">
            You have the technology.
          </h2>
          <h2 className="font-heading text-4xl md:text-7xl text-steel-navy tracking-[-0.02em] leading-[1.05] mb-8 font-bold">
            Let&rsquo;s build the trust.
          </h2>

          <p className="font-body text-lg md:text-xl text-slate-mist max-w-2xl mx-auto mb-16 leading-relaxed">
            Whether you&rsquo;re launching, scaling, or entering a new market &mdash; I help healthcare AI companies turn technology into trust.
          </p>

          <a
            href="mailto:carolina@carolinabuigas.com"
            className="inline-flex items-center justify-center px-10 py-4 border border-steel-navy text-steel-navy font-body text-sm tracking-[0.15em] uppercase transition-all duration-[400ms] ease-out hover:bg-steel-navy hover:text-obsidian"
          >
            Build With Me
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-steel-navy/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-slate-mist">
            &copy; {new Date().getFullYear()} Carolina Buigas Arguelles
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="font-mono text-xs text-slate-mist hover:text-steel-navy transition-colors tracking-[0.1em] uppercase">
              About
            </Link>
            <Link to="/perspectives" className="font-mono text-xs text-slate-mist hover:text-steel-navy transition-colors tracking-[0.1em] uppercase">
              Perspectives
            </Link>
            <Link to="/contact" className="font-mono text-xs text-slate-mist hover:text-steel-navy transition-colors tracking-[0.1em] uppercase">
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/carolina-buigas-arguelles-66512835"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-slate-mist hover:text-steel-navy transition-colors"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}