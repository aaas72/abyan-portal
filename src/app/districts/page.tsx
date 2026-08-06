import React, { Suspense } from "react";
import DistrictsDataWrapper from "./DistrictsDataWrapper";

function DistrictsSkeleton() {
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

      {/* Region Category Tabs Skeleton */}
      <div className="flex justify-center gap-3 pb-8 px-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-28 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl"
          />
        ))}
      </div>

      {/* 2-Column Districts Split Showcase Skeleton */}
      <div className="max-w-6xl mx-auto px-4 flex gap-8 py-6">
        {/* Right Sidebar List Skeleton (270px) */}
        <div className="w-[270px] shrink-0 space-y-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-14 w-full bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl"
            />
          ))}
        </div>

        {/* Left Detail Panel Skeleton (Diagonal Rounding: rounded-tr-[40px] rounded-bl-[40px]) */}
        <div className="flex-1 min-w-0 bg-[#f0ebfe] border border-[#10b981]/10 animate-pulse p-8 space-y-6 rounded-tl-none rounded-br-none rounded-tr-[40px] rounded-bl-[40px]">
          <div className="h-6 w-1/3 bg-purple-200/60 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl mr-0" />
          <div className="h-10 w-2/3 bg-purple-200/60 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl mr-0" />
          <div className="h-4 w-1/2 bg-purple-200/40 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl mr-0" />

          <div className="flex gap-2 pt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 bg-purple-200/50 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl"
              />
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-purple-200/30">
            <div className="h-4 w-full bg-purple-200/40 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl" />
            <div className="h-4 w-5/6 bg-purple-200/40 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl" />
            <div className="h-4 w-4/5 bg-purple-200/40 rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DistrictsPage() {
  return (
    <Suspense fallback={<DistrictsSkeleton />}>
      <DistrictsDataWrapper />
    </Suspense>
  );
}
