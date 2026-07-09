import React from "react";

export default function EdgeSection() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">My Edge</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <h2 className="font-heading text-3xl md:text-5xl text-parchment tracking-[-0.02em] leading-[1.1] font-bold">
              I&rsquo;m a builder first.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-6 border-l-2 border-steel-navy/30 pl-8">
            <p className="font-body text-lg text-slate-mist leading-relaxed">
              I&rsquo;m usually brought in at the messy stage.
            </p>
            <div className="space-y-1">
              <p className="font-body text-lg text-parchment leading-relaxed">The idea is big.</p>
              <p className="font-body text-lg text-parchment leading-relaxed">The product works.</p>
              <p className="font-body text-lg text-parchment leading-relaxed">The opportunity is real.</p>
            </div>
            <p className="font-body text-lg text-slate-mist leading-relaxed">
              But the story, strategy, and systems haven&rsquo;t caught up yet.
            </p>
            <p className="font-body text-lg text-parchment leading-relaxed pt-2">That&rsquo;s where I thrive.</p>
            <p className="font-body text-lg text-parchment leading-relaxed">
              I connect:
              <br />
              <span className="text-steel-navy">Vision &rarr; Market &rarr; Growth</span>
            </p>
            <p className="font-heading text-2xl text-steel-navy pt-4 font-bold">
              Then I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}