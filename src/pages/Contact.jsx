import React from "react";
import BackgroundLayer from "@/components/site/BackgroundLayer";
import NavBar from "@/components/site/NavBar";
import SiteFooter from "@/components/site/SiteFooter";

export default function Contact() {
  return (
    <>
      <BackgroundLayer />
      <NavBar />
      <main className="relative min-h-screen selection:bg-steel-navy selection:text-obsidian">
        <section className="pt-[22vh] pb-[15vh] px-6 md:px-12 lg:px-20">
          <div className="max-w-[900px] w-full mx-auto">
            <p className="font-mono text-xs text-steel-navy tracking-[0.25em] uppercase mb-12">
              Contact
            </p>

            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-parchment tracking-[-0.02em] leading-[1.05] mb-16 font-bold">
              Let&rsquo;s build
              <br />
              <span className="text-steel-navy">something real.</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-slate-mist leading-relaxed mb-16 max-w-2xl">
              Whether you&rsquo;re launching, scaling, or entering a new market &mdash; I&rsquo;d love
              to hear what you&rsquo;re building. Reach out and we&rsquo;ll find the right way to work
              together.
            </p>

            <div className="space-y-8">
              <div className="border-t-2 border-steel-navy/40 pt-6">
                <p className="font-mono text-xs text-slate-mist tracking-[0.2em] uppercase mb-3">
                  Email
                </p>
                <a
                  href="mailto:carolina@carolinabuigas.com"
                  className="font-heading text-2xl md:text-3xl text-parchment hover:text-steel-navy transition-colors font-bold"
                >
                  carolina@carolinabuigas.com
                </a>
              </div>

              <div className="border-t-2 border-steel-navy/40 pt-6">
                <p className="font-mono text-xs text-slate-mist tracking-[0.2em] uppercase mb-3">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/carolina-buigas-arguelles-66512835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-2xl md:text-3xl text-parchment hover:text-steel-navy transition-colors font-bold"
                >
                  Carolina Buigas Arguelles &rarr;
                </a>
              </div>

              <div className="border-t-2 border-steel-navy/40 pt-6">
                <p className="font-mono text-xs text-slate-mist tracking-[0.2em] uppercase mb-3">
                  Availability
                </p>
                <p className="font-body text-lg text-parchment leading-relaxed">
                  Available now for fractional leadership, strategy sprints, and select build
                  partnerships.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <a
                href="mailto:carolina@carolinabuigas.com"
                className="inline-flex items-center justify-center px-10 py-4 border border-steel-navy text-steel-navy font-body text-sm tracking-[0.15em] uppercase transition-all duration-[400ms] ease-out hover:bg-steel-navy hover:text-obsidian"
              >
                Build With Me
              </a>
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
}