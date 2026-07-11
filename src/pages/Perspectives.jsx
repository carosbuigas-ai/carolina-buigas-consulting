import React from "react";
import BackgroundLayer from "@/components/site/BackgroundLayer";
import NavBar from "@/components/site/NavBar";
import SiteFooter from "@/components/site/SiteFooter";

export default function Perspectives() {
  return (
    <>
      <BackgroundLayer />
      <NavBar />
      <main className="relative min-h-screen selection:bg-steel-navy selection:text-obsidian">
        <article className="pt-[22vh] pb-[15vh] px-6 md:px-12 lg:px-20">
          <div className="max-w-[900px] w-full mx-auto">
            <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">
              Perspectives
            </p>

            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-parchment tracking-[-0.02em] leading-[1.05] mb-6 font-bold">
              Healthcare AI Marketing: Building Trust Where Technology Meets Care
            </h1>

            <p className="font-mono text-xs text-slate-mist tracking-[0.15em] uppercase mb-16">
              By Carolina Buigas Arguelles
            </p>

            <div className="space-y-6">
              <p className="font-body text-lg text-slate-mist leading-relaxed">
                Healthcare AI is at an inflection point. The technology has matured &mdash; clinical
                models can now detect disease earlier, automate administrative burden, and surface
                insights that were previously buried in unstructured data. Yet adoption lags. Not
                because the technology doesn&rsquo;t work, but because the people who need to trust
                it &mdash; clinicians, health system administrators, payers, and patients &mdash;
                don&rsquo;t yet understand why they should.
              </p>

              <p className="font-body text-lg text-parchment leading-relaxed">
                This is fundamentally a marketing problem, not a technical one. And it&rsquo;s the
                problem that defines the next decade of healthcare AI.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-steel-navy pt-8 font-bold">
                The Trust Gap
              </h2>

              <p className="font-body text-lg text-parchment leading-relaxed">
                Every healthcare AI company faces the same paradox: the more sophisticated the
                technology, the harder it is to explain. Clinical AI models involve nuance,
                probability, and trade-offs that don&rsquo;t fit neatly into a pitch deck. When
                founders lead with technical capability &mdash; accuracy scores, model architecture,
                parameter counts &mdash; they speak to other engineers, not to the buyers and users
                who determine adoption.
              </p>

              <p className="font-body text-lg text-parchment leading-relaxed">
                The companies that win don&rsquo;t simplify their science. They translate it. They
                connect capability to outcome: what changes for the clinician, for the patient, for
                the health system. They build credibility through evidence, thought leadership, and a
                consistent narrative that meets each audience where they are.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-steel-navy pt-8 font-bold">
                What Healthcare AI Founders Get Wrong
              </h2>

              <p className="font-body text-lg text-parchment leading-relaxed">
                Most healthcare AI founders come from technical or clinical backgrounds. They
                understand the problem deeply and the solution rigorously. But they often
                underestimate how much work goes into building market trust &mdash; the positioning,
                the messaging, the content strategy, the executive visibility, the analyst relations,
                the payer and employer education.
              </p>

              <p className="font-body text-lg text-parchment leading-relaxed">
                Marketing in healthcare AI isn&rsquo;t about demand generation in the traditional
                sense. It&rsquo;s about trust generation. It&rsquo;s about proving that your
                technology is safe, validated, and worth the operational disruption of adopting it.
                That requires a different playbook &mdash; one that blends clinical credibility with
                commercial storytelling.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl text-steel-navy pt-8 font-bold">
                The Path Forward
              </h2>

              <p className="font-body text-lg text-parchment leading-relaxed">
                The healthcare AI companies that will define the next decade are those that invest in
                strategic marketing early &mdash; before the product is &ldquo;ready&rdquo; by
                engineering standards, because in healthcare, market readiness and product readiness
                are different things. Positioning, narrative, and thought leadership are not
                launch-day activities. They are foundational infrastructure that compounds over time.
              </p>

              <p className="font-body text-lg text-slate-mist leading-relaxed pt-4">
                The technology will keep getting better. The question is whether the market will trust
                it enough to use it. That&rsquo;s the work. That&rsquo;s the gap. And that&rsquo;s
                where strategic marketing becomes the most important investment a healthcare AI
                founder can make.
              </p>
            </div>
          </div>
        </article>
        <SiteFooter />
      </main>
    </>
  );
}