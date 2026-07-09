import React from "react";

const ENGAGEMENTS = [
  {
    title: "Strategy Sprint",
    subtitle: "For founders who need clarity fast.",
    desc: "A focused engagement designed to define your positioning, audience, story, and next growth moves.",
    deliverables: ["Brand clarity", "Messaging framework", "GTM roadmap", "Growth opportunities"],
    isList: false,
  },
  {
    title: "Fractional Growth Partner",
    subtitle: "For healthcare AI companies needing senior marketing leadership before building a full team.",
    desc: "Ongoing partnership across:",
    deliverables: ["Marketing strategy", "Growth planning", "Campaign direction", "Team/vendor leadership", "Business priorities"],
    isList: false,
  },
  {
    title: "Build Mode",
    subtitle: "For teams who need the strategy AND someone to make it happen.",
    desc: "Hands-on execution across:",
    deliverables: ["Websites", "Campaigns", "Content engines", "Sales materials", "AI workflows"],
    isList: false,
  },
];

export default function WaysToBuildSection() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">Engagements</p>

        <h2 className="font-heading text-3xl md:text-5xl text-parchment tracking-[-0.02em] mb-16 max-w-3xl font-bold">
          Ways We Can Build Together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ENGAGEMENTS.map((eng) => (
            <div
              key={eng.title}
              className="border-t-2 border-steel-navy/40 pt-8 px-6 pb-8 bg-steel-navy/[0.05] rounded-sm transition-colors duration-300 hover:bg-steel-navy/[0.09] flex flex-col"
            >
              <h3 className="font-heading text-xl md:text-2xl text-steel-navy mb-2 font-bold">
                {eng.title}
              </h3>
              <p className="font-body text-sm text-parchment/80 mb-6 leading-relaxed italic">
                {eng.subtitle}
              </p>
              <p className="font-body text-base text-slate-mist mb-6 leading-relaxed">
                {eng.desc}
              </p>
              <p className="font-mono text-xs text-steel-navy tracking-widest uppercase mb-3">
                Deliverables
              </p>
              <ul className="space-y-2.5">
                {eng.deliverables.map((item) => (
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