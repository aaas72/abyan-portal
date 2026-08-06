"use client";

import React from "react";
import { Navbar, Footer } from "@/components/layout";
import { Hero, CulturalHighlights, DistrictsSection, TimelineSection } from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* 150px Transparent Navbar with ONLY "أَبيَن" */}
      <Navbar />

      {/* Main Page Layout with Optimized Logical Narrative Flow */}
      <main>
        {/* 1. Full-Viewport Framed Hero */}
        <Hero />

        {/* 2. Landing Pillars & Cultural Treasures Showcase */}
        <CulturalHighlights />

        {/* 3. Interactive Vector Map & Districts Section */}
        <DistrictsSection />

        {/* 4. Dynamic Horizontal Timeline Section */}
        <TimelineSection />
      </main>

      {/* Pure Text Footer */}
      <Footer />
    </div>
  );
}
