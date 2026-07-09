import React from "react";

const STATS = [
  "15+ years building growth",
  "$2M+ marketing investment managed",
  "Complex industries made simple",
  "Zero \u2192 Scale operator",
];

export default function ProofStrip() {
  return (
    <section className="border-y border-steel-navy/20 bg-steel-navy/[0.04]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat}>
              <span className="font-mono text-xs md:text-sm text-steel-navy tracking-wide text-center">
                {stat}
              </span>
              {i < STATS.length - 1 && (
                <span className="hidden sm:inline text-steel-navy/30">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}