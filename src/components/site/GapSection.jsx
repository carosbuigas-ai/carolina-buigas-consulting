import React from "react";

export default function GapSection() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">The Gap</p>

        <div className="max-w-4xl">
          <h2 className="font-heading text-3xl md:text-5xl text-parchment tracking-[-0.02em] leading-[1.1] mb-2 font-bold">
            The hardest part isn&rsquo;t building the product.
          </h2>
          <h2 className="font-heading text-3xl md:text-5xl text-steel-navy tracking-[-0.02em] leading-[1.1] font-bold">
            It&rsquo;s making people care.
          </h2>
        </div>

        <div className="mt-16 md:mt-20 md:ml-auto md:max-w-sm space-y-3">
          <p className="font-body text-lg text-slate-mist">You know why it matters.</p>
          <p className="font-body text-lg text-slate-mist">Clinicians don&rsquo;t yet.</p>
          <p className="font-body text-lg text-slate-mist">Health systems don&rsquo;t yet.</p>
          <p className="font-body text-lg text-slate-mist">Payers don&rsquo;t yet.</p>
          <p className="font-body text-lg text-steel-navy pt-6">That&rsquo;s the gap I close.</p>
        </div>
      </div>
    </section>
  );
}