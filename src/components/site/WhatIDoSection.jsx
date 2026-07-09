import React from "react";

const CARDS = [
  {
    title: "Positioning & Go-to-Market",
    desc: "Turn complex clinical technology into a story the market trusts.",
    items: ["Positioning", "Messaging strategy", "Buyer insights across payers, employers & brokers", "Go-to-market strategy"],
  },
  {
    title: "Thought Leadership & Visibility",
    desc: "Build credibility with the audiences that matter most.",
    items: ["Executive visibility", "PR & media relations", "Content strategy", "Industry events"],
  },
  {
    title: "Growth & Marketing Ops",
    desc: "Create more leverage before adding more people.",
    items: ["Campaign strategy", "Demand generation", "AI-enabled marketing workflows", "Sales enablement"],
  },
];

export default function WhatIDoSection() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">What I Do</p>

        <h2 className="font-heading text-3xl md:text-5xl text-parchment tracking-[-0.02em] mb-6 font-bold">
          From vision <span className="text-steel-navy">&rarr;</span> clarity <span className="text-steel-navy">&rarr;</span> growth.
        </h2>

        <p className="font-body text-base text-slate-mist mb-16 max-w-2xl leading-relaxed">
          Available for strategy sprints, fractional leadership, and select build partnerships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="border-t-2 border-steel-navy/40 pt-8 px-6 pb-8 bg-steel-navy/[0.05] rounded-sm transition-colors duration-300 hover:bg-steel-navy/[0.09]"
            >
              <h3 className="font-heading text-xl md:text-2xl text-steel-navy mb-3 font-bold uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="font-body text-base text-slate-mist mb-8 leading-relaxed">{card.desc}</p>
              <ul className="space-y-2.5">
                {card.items.map((item) => (
                  <li key={item} className="font-body text-sm text-parchment/75 flex items-baseline gap-2.5">
                    <span className="text-steel-navy">&rarr;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}