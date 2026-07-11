import React from "react";
import BackgroundLayer from "@/components/site/BackgroundLayer";
import HeroSection from "@/components/site/HeroSection";
import ProofStrip from "@/components/site/ProofStrip";
import GapSection from "@/components/site/GapSection";
import WhatIDoSection from "@/components/site/WhatIDoSection";
import EdgeSection from "@/components/site/EdgeSection";
import FounderNoteSection from "@/components/site/FounderNoteSection";
import BuiltWithSection from "@/components/site/BuiltWithSection";
import WaysToBuildSection from "@/components/site/WaysToBuildSection";
import FoundersSection from "@/components/site/FoundersSection";
import NavBar from "@/components/site/NavBar";
import FinalCtaSection from "@/components/site/FinalCtaSection";

export default function Home() {
  return (
    <>
      <BackgroundLayer />
      <NavBar />
      <main className="relative min-h-screen selection:bg-steel-navy selection:text-obsidian">
        <HeroSection />
        <ProofStrip />
        <GapSection />
        <WhatIDoSection />
        <EdgeSection />
        <FounderNoteSection />
        <BuiltWithSection />
        <WaysToBuildSection />
        <FoundersSection />
        <FinalCtaSection />
      </main>
    </>
  );
}