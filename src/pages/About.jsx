import React from "react";
import BackgroundLayer from "@/components/site/BackgroundLayer";
import NavBar from "@/components/site/NavBar";
import SiteFooter from "@/components/site/SiteFooter";

export default function About() {
  return (
    <>
      <BackgroundLayer />
      <NavBar />
      <main className="relative min-h-screen selection:bg-steel-navy selection:text-obsidian">
        <section className="pt-[22vh] pb-[15vh] px-6 md:px-12 lg:px-20">
          <div className="max-w-[900px] w-full mx-auto">
            <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">
              About
            </p>

            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-parchment tracking-[-0.02em] leading-[1.05] mb-16 font-bold">
              Strategic growth for
              <br />
              <span className="text-steel-navy">healthcare AI companies.</span>
            </h1>

            <div className="space-y-6">
              <p className="font-body text-lg md:text-xl text-slate-mist leading-relaxed">
                I&rsquo;m a healthcare AI marketing leader and strategic growth partner for founders
                building at the intersection of artificial intelligence and healthcare.
              </p>

              <p className="font-body text-lg text-parchment leading-relaxed">
                This consulting practice exists for a specific moment: when a healthcare AI company
                has built something real &mdash; a clinical model that works, a platform that delivers,
                a tool that could change how care is delivered &mdash; but the market doesn&rsquo;t
                understand it yet. The technology is ready. The trust isn&rsquo;t. That gap is where
                I operate.
              </p>

              <p className="font-body text-lg text-parchment leading-relaxed">
                My work spans positioning and messaging strategy, go-to-market planning, thought
                leadership, executive visibility, demand generation, and AI-enabled marketing
                operations. I help founders translate complex clinical technology into language that
                health systems, payers, employers, and brokers can understand and trust. I bring
                senior marketing thinking to companies that need strategic leadership before
                they&rsquo;re ready to build a full in-house team.
              </p>

              <p className="font-body text-lg text-parchment leading-relaxed">
                My approach is builder-first. I don&rsquo;t just advise &mdash; I build the systems,
                narratives, and campaigns that turn technology into adoption. Whether a company is
                launching, scaling, or entering a new segment of healthcare, the goal is the same:
                make people care.
              </p>

              <p className="font-heading text-xl text-steel-navy italic pt-4">
                Available now for fractional and consulting work.
              </p>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
}