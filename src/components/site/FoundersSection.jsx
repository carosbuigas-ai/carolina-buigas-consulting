import React from "react";

const QUALIFIERS = [
  "Your technology is stronger than your story",
  "You need to build trust with clinicians, payers, or health systems",
  "You need senior marketing thinking before hiring a full team",
  "You\u2019re entering a new segment of healthcare",
  "You need strategy and hands-on execution, not just advice",
];

export default function FoundersSection() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">Who I Help</p>

        <h2 className="font-heading text-3xl md:text-5xl text-parchment tracking-[-0.02em] mb-16 max-w-3xl font-bold">
          You might be here because&hellip;
        </h2>

        <div className="space-y-5 max-w-3xl">
          {QUALIFIERS.map((item) => (
            <div
              key={item}
              className="flex items-baseline gap-4 py-2 px-4 -mx-4 rounded-sm transition-colors duration-300 hover:bg-steel-navy/[0.06]"
            >
              <span className="text-steel-navy text-lg shrink-0">&#10003;</span>
              <span className="font-body text-lg md:text-xl text-parchment">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}