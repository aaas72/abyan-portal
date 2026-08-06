import React, { Suspense } from "react";
import LandmarksDataWrapper from "./LandmarksDataWrapper";
import { PageSkeleton } from "@/components/ui/Skeletons";
import { Navbar, Footer } from "@/components/layout";

export default function LandmarksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Real Navbar ALWAYS visible & persistent */}
      <Navbar activeSection="landmarks" />

      {/* Main Content Area wrapped in Suspense */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        <Suspense fallback={<PageSkeleton gridType="cards" count={6} />}>
          <LandmarksDataWrapper />
        </Suspense>
      </main>

      {/* Real Footer ALWAYS visible & persistent */}
      <Footer />
    </div>
  );
}
