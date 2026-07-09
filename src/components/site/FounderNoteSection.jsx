import React from "react";

export default function FounderNoteSection() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">A Note From Carolina</p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Photo */}
          <div className="md:col-span-5 md:col-start-1">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 opacity-30 blur-2xl"
                style={{ background: "radial-gradient(ellipse 70% 60% at 40% 40%, rgba(67,116,184,0.3), transparent 70%)" }}
              />
              <div className="overflow-hidden rounded-sm border border-steel-navy/20">
                <img
                  src="https://media.base44.com/images/public/6a4fa16e1f7009abf862e1a9/35bb22ff9_IMG_6514.png"
                  alt="Carolina Buigas Arguelles — Fractional Growth & Marketing Partner"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="md:col-span-6 md:col-start-7 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl text-parchment tracking-[-0.02em] leading-[1.15] font-bold">
              The person behind the work.
            </h2>

            <div className="space-y-5 font-body text-lg text-slate-mist leading-relaxed">
              <p>
                I&rsquo;ve never been the person who needed the perfect playbook.
              </p>
              <p>
                I&rsquo;ve always loved the messy middle &mdash; when the idea is big, the path isn&rsquo;t obvious, and someone needs to connect the dots.
              </p>
              <p>
                My career has been built sitting between visionaries, technical teams, customers, and the market &mdash; turning complexity into something people understand and believe in.
              </p>
              <p>
                I don&rsquo;t just tell companies what to do.
              </p>
              <p className="text-parchment">
                I help build.
              </p>
            </div>

            <div className="pt-4">
              <p className="font-heading text-xl text-steel-navy italic">
                &mdash; Carolina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}