import React from "react";

export default function HeroSection() {
  return (
    <header className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-10">
          Carolina Buigas Arguelles
        </p>

        <h1 className="font-heading text-[clamp(2.5rem,7vw,6rem)] text-parchment tracking-[-0.02em] leading-[0.95] mb-10 font-bold">
          Healthcare AI marketing
          <br />
          that drives real adoption.
        </h1>

        <p className="font-body text-lg md:text-xl text-slate-mist max-w-2xl leading-relaxed mb-5">
          I help healthcare AI and health tech companies turn complex clinical technology into positioning, go-to-market strategy, and thought leadership that health systems, payers, employers, and brokers actually trust.
        </p>

        <p className="font-body text-base text-slate-mist max-w-2xl leading-relaxed mb-12">
          For the moment when the technology is ready &mdash; but the story, strategy, and systems need to catch up.
        </p>

        <p className="font-heading text-xl md:text-2xl text-parchment italic mb-10 font-normal">
          Available now for fractional and consulting work.
        </p>

        <a
          href="mailto:carolina@carolinabuigas.com"
          className="inline-flex items-center justify-center px-8 py-3.5 border border-steel-navy text-steel-navy font-body text-sm tracking-[0.15em] uppercase transition-all duration-[400ms] ease-out hover:bg-steel-navy hover:text-obsidian w-fit"
        >
          Build With Me
        </a>
      </div>
    </header>
  );
}