"use client";

import React from "react";

/**
 * 🌿 Abyan Portal Design System - Shimmer Base Utility
 * Soft Emerald & Sky Blue shimmer tuned specifically for Abyan Light Theme
 */
export function SkeletonBase({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-r from-slate-100 via-emerald-50/70 to-slate-100 animate-pulse ${className}`}
    />
  );
}

/**
 * 1. Subpage Hero Skeleton Header
 */
export function SubpageHeroSkeleton() {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 px-4 pb-8">
      {/* Category Tag Pill */}
      <SkeletonBase className="h-6 w-44 mx-auto rounded-full bg-emerald-100/60" />
      {/* Main Title Line */}
      <SkeletonBase className="h-10 sm:h-12 w-3/4 mx-auto rounded-2xl" />
      {/* Subtitle Description */}
      <SkeletonBase className="h-4 w-5/6 mx-auto rounded-xl" />
      <SkeletonBase className="h-4 w-2/3 mx-auto rounded-xl" />
    </div>
  );
}

/**
 * 2. Category Tab Selector Skeleton
 */
export function CategoryTabSelectorSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="flex justify-center gap-3 py-6 px-4 no-scrollbar overflow-x-auto">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonBase
          key={i}
          className="h-10 w-28 sm:w-32 rounded-full shrink-0 border border-slate-100"
        />
      ))}
    </div>
  );
}

/**
 * 3. Universal Content / Landmark / Economy Photo Card Skeleton
 */
export function ContentCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-emerald-50/40 via-white to-sky-50/40 border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 space-y-4 shadow-sm text-right flex flex-col justify-between">
      {/* Image Box */}
      <div className="w-full aspect-square sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100/80 relative">
        <SkeletonBase className="w-full h-full" />
      </div>

      {/* Title & Category Tag */}
      <div className="space-y-2 pt-1 text-right">
        <SkeletonBase className="h-3.5 w-24 mr-0 rounded-md bg-emerald-100/80" />
        <SkeletonBase className="h-6 w-4/5 mr-0 rounded-lg" />
        <SkeletonBase className="h-3.5 w-3/5 mr-0 rounded-md" />
      </div>

      {/* Description lines */}
      <div className="space-y-2 pt-1">
        <SkeletonBase className="h-3 w-full rounded-sm" />
        <SkeletonBase className="h-3 w-4/5 rounded-sm" />
      </div>

      {/* Card Footer Prompt Link */}
      <div className="pt-3 flex justify-between items-center border-t border-slate-100/80">
        <SkeletonBase className="h-3.5 w-16 rounded-md" />
        <SkeletonBase className="h-4 w-14 rounded-full bg-emerald-100/80" />
      </div>
    </div>
  );
}

/**
 * 4. Pioneer Figure Card Skeleton
 */
export function PioneerCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-emerald-50/30 via-white to-sky-50/30 border border-slate-100 rounded-2xl p-5 space-y-4 text-right shadow-sm">
      <div className="flex items-center gap-4 flex-row-reverse">
        {/* Square Avatar Box */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-emerald-100">
          <SkeletonBase className="w-full h-full" />
        </div>
        <div className="space-y-2 flex-1 text-right">
          <SkeletonBase className="h-3.5 w-20 mr-0 rounded bg-emerald-100/80" />
          <SkeletonBase className="h-5 w-3/4 mr-0 rounded-lg" />
          <SkeletonBase className="h-3.5 w-1/2 mr-0 rounded" />
        </div>
      </div>
      <div className="space-y-2 pt-3 border-t border-slate-100">
        <SkeletonBase className="h-3 w-full rounded-sm" />
        <SkeletonBase className="h-3 w-5/6 rounded-sm" />
      </div>
      <div className="pt-1 flex justify-start">
        <SkeletonBase className="h-4 w-14 rounded-md" />
      </div>
    </div>
  );
}

/**
 * 5. District Showcase Profile Skeleton (For 2-Column Split Layout)
 */
export function DistrictDetailSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
      {/* Right Column List (270px) */}
      <div className="w-full lg:w-[270px] shrink-0 space-y-3">
        <SkeletonBase className="h-4 w-40 mr-0 rounded mb-4" />
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 space-y-2 text-right"
          >
            <SkeletonBase className="h-4 w-3/4 mr-0 rounded" />
            <SkeletonBase className="h-3 w-1/2 mr-0 rounded" />
          </div>
        ))}
      </div>

      {/* Left Column Profile Panel */}
      <div className="flex-1 min-w-0 w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-6 text-right shadow-sm">
        <div className="space-y-2">
          <SkeletonBase className="h-4 w-36 mr-0 rounded bg-emerald-100/80" />
          <SkeletonBase className="h-8 sm:h-10 w-2/3 mr-0 rounded-xl" />
          <SkeletonBase className="h-4 w-1/2 mr-0 rounded" />
        </div>

        {/* Subtab Pills */}
        <div className="flex gap-2 py-2 no-scrollbar overflow-x-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBase key={i} className="h-8 w-24 rounded-full shrink-0" />
          ))}
        </div>

        {/* Profile Content */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <SkeletonBase className="h-4 w-full rounded" />
          <SkeletonBase className="h-4 w-5/6 rounded" />
          <SkeletonBase className="h-4 w-4/5 rounded" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <SkeletonBase className="h-32 rounded-2xl" />
            <SkeletonBase className="h-32 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. Unified Media Viewer Modal Skeleton
 */
export function MediaViewerModalSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl w-full text-right shadow-2xl border border-slate-100">
      <div className="flex flex-row-reverse gap-4 sm:gap-6 items-start">
        <SkeletonBase className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl shrink-0 border border-emerald-100" />
        <div className="space-y-3 flex-1">
          <SkeletonBase className="h-4 w-24 mr-0 rounded bg-emerald-100" />
          <SkeletonBase className="h-7 w-3/4 mr-0 rounded-lg" />
          <SkeletonBase className="h-4 w-1/2 mr-0 rounded" />
        </div>
      </div>
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <SkeletonBase className="h-5 w-44 mr-0 rounded" />
        <SkeletonBase className="h-3.5 w-full rounded" />
        <SkeletonBase className="h-3.5 w-full rounded" />
        <SkeletonBase className="h-3.5 w-4/5 rounded" />
      </div>
    </div>
  );
}

/**
 * 7. Full Page Skeleton Template
 */
export function PageSkeleton({
  gridType = "cards",
  count = 6,
}: {
  gridType?: "cards" | "pioneers" | "districts";
  count?: number;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo">
      {/* Top Navbar Placeholder Line */}
      <div className="h-24 w-full bg-slate-50/80 border-b border-slate-100 flex items-center justify-between px-8">
        <SkeletonBase className="h-8 w-24 rounded-lg bg-emerald-100/60" />
        <div className="flex gap-4 hidden sm:flex">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBase key={i} className="h-4 w-16 rounded" />
          ))}
        </div>
      </div>

      {/* Main Container */}
      <main className="pt-32 pb-16">
        <SubpageHeroSkeleton />
        <CategoryTabSelectorSkeleton count={5} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {gridType === "districts" ? (
            <DistrictDetailSkeleton />
          ) : gridType === "pioneers" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Array.from({ length: count }).map((_, idx) => (
                <PioneerCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Array.from({ length: count }).map((_, idx) => (
                <ContentCardSkeleton key={idx} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
