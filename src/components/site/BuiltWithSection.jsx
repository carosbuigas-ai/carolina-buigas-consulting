import React from "react";

const COMPANIES = [
  { name: "DeLorean AI", desc: "Built the marketing foundation from zero for a healthcare AI company \u2014 transforming complex technology into a commercial story, sales assets, and market presence." },
  { name: "eMed", desc: "Helped bring digital healthcare innovation to market through growth strategy, positioning, and customer engagement." },
  { name: "Devoted Health", desc: "Supported one of healthcare\u2019s fastest-growing companies through multi-market growth strategies, partner programs, and scalable marketing systems." },
  { name: "CarePlus", desc: "Built trusted healthcare marketing programs connecting brands, customers, and communities." },
];

export default function BuiltWithSection() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">Experience</p>

        <h2 className="font-heading text-3xl md:text-5xl text-parchment tracking-[-0.02em] mb-16 max-w-3xl font-bold">
          Built inside companies changing industries.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-navy/15">
          {COMPANIES.map((company) => (
            <div key={company.name} className="bg-surface p-8 md:p-12 transition-colors duration-300 hover:bg-steel-navy/[0.08]">
              <h3 className="font-heading text-2xl md:text-3xl text-steel-navy mb-4 font-bold">{company.name}</h3>
              <p className="font-body text-base text-slate-mist leading-relaxed">{company.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}