import React, { Suspense } from "react";
import LandmarksDataWrapper from "./LandmarksDataWrapper";

/**
 * Purple Geometric Skeleton Component
 * Mandatory diagonal rounding:
 * - Cards: rounded-tl-none rounded-br-none rounded-tr-[40px] rounded-bl-[40px]
 * - Lines/Tabs: rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl
 */
function LandmarksSkeleton() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo">
      {/* Top Navbar Placeholder Line */}
      <div className="h-24 w-full bg-slate-50 border-b border-slate-100 flex items-center justify-between px-8">
        <div className="h-8 w-24 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl" />
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-16 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl"
            />
          ))}
        </div>
      </div>

      {/* Hero Header Skeleton */}
      <div className="pt-32 pb-12 text-center max-w-3xl mx-auto space-y-4 px-4">
        <div className="h-6 w-36 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse mx-auto rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl" />
        <div className="h-10 w-2/3 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse mx-auto rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl" />
        <div className="h-4 w-full bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse mx-auto rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl" />
      </div>

      {/* Category Tabs Skeleton */}
      <div className="flex justify-center gap-3 pb-8 px-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-28 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl"
          />
        ))}
      </div>

      {/* Main Content Showcase Skeleton Cards (Diagonal Rounding: rounded-tr-[40px] rounded-bl-[40px]) */}
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse p-4 flex flex-col justify-between rounded-tl-none rounded-br-none rounded-tr-[40px] rounded-bl-[40px]"
          >
            <div className="h-32 bg-purple-200/40 rounded-tl-none rounded-br-none rounded-tr-[30px] rounded-bl-[30px]" />
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-purple-200/60 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl mr-0" />
              <div className="h-3 w-1/2 bg-purple-200/40 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl mr-0" />
            </div>
            <div className="h-4 w-16 bg-purple-300/60 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl self-end" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LandmarksPage() {
  return (
    <Suspense fallback={<LandmarksSkeleton />}>
      <LandmarksDataWrapper />
    </Suspense>
  );
}
