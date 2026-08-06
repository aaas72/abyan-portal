"use client";

import React from "react";

/**
 * 🌿 Shimmer Base Utility
 * Soft, elegant light-theme shimmer matching Abyan Portal palette
 */
export function SkeletonBase({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-r from-slate-100 via-emerald-50/60 to-slate-100 animate-pulse ${className}`}
    />
  );
}

/**
 * 1. SubpageHero Skeleton (1-to-1 Blueprint Copy of SubpageHero.tsx)
 * Container: pt-6 sm:pt-10 pb-6 sm:pb-8 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4
 */
export function SubpageHeroSkeleton() {
  return (
    <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4">
      {/* Category Tag Pill */}
      <div className="inline-block py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-emerald-500/10 border border-emerald-500/10">
        <SkeletonBase className="h-3.5 sm:h-4 w-32 sm:w-44 rounded-full bg-emerald-200/60" />
      </div>

      {/* Main Title Line */}
      <div className="space-y-2 pt-1">
        <SkeletonBase className="h-8 sm:h-12 w-3/4 mx-auto rounded-xl sm:rounded-2xl" />
      </div>

      {/* Description Paragraph Lines */}
      <div className="space-y-2 pt-1 max-w-2xl mx-auto">
        <SkeletonBase className="h-3.5 sm:h-4 w-full rounded-md" />
        <SkeletonBase className="h-3.5 sm:h-4 w-4/5 mx-auto rounded-md" />
      </div>
    </section>
  );
}

/**
 * 2. CategoryTabSelector Skeleton (1-to-1 Blueprint Copy of CategoryTabSelector.tsx)
 * Container: w-full max-w-4xl mx-auto px-4 py-4 sm:py-6
 */
export function CategoryTabSelectorSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-6 relative z-10">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
        {/* Navigation Arrow Left Placeholder */}
        <SkeletonBase className="h-7 w-5 rounded-md shrink-0 bg-emerald-100/60" />

        {/* Tab Pills Row */}
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonBase
            key={i}
            className={`h-9 sm:h-10 rounded-full shrink-0 border border-slate-100 ${
              i === 0 ? "w-28 sm:w-36 bg-emerald-100/80" : "w-24 sm:w-32"
            }`}
          />
        ))}

        {/* Navigation Arrow Right Placeholder */}
        <SkeletonBase className="h-7 w-5 rounded-md shrink-0 bg-emerald-100/60" />
      </div>
    </div>
  );
}

/**
 * 3. UniversalCard Pioneer Variant Skeleton (1-to-1 Blueprint Copy of UniversalCard.tsx)
 * Container: bg-white/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100/80 space-y-4 shadow-sm w-full
 */
export function PioneerCardSkeleton() {
  return (
    <div className="bg-white/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100/80 space-y-4 shadow-sm text-right w-full flex flex-col justify-between">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-3">
        <SkeletonBase className="h-5 sm:h-6 w-1/2 mr-0 rounded-lg" />
        <SkeletonBase className="h-5 w-24 rounded-full bg-emerald-100/80 shrink-0" />
      </div>

      {/* Subtitle */}
      <SkeletonBase className="h-3.5 w-1/3 mr-0 rounded-md bg-sky-100/60" />

      {/* Description lines (line-clamp-3 leading-relaxed) */}
      <div className="space-y-2 pt-1">
        <SkeletonBase className="h-3 sm:h-3.5 w-full rounded-sm" />
        <SkeletonBase className="h-3 sm:h-3.5 w-11/12 rounded-sm" />
        <SkeletonBase className="h-3 sm:h-3.5 w-4/5 rounded-sm" />
      </div>

      {/* Footer Row */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <SkeletonBase className="h-3 w-28 rounded-sm" />
        <SkeletonBase className="h-3.5 w-14 rounded-md bg-emerald-100/80" />
      </div>
    </div>
  );
}

/**
 * 4. ImageShowcaseCard Skeleton (1-to-1 Blueprint Copy of ImageShowcaseCard.tsx)
 * Container: bg-white/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-100/80 space-y-3.5 shadow-sm w-full
 */
export function ImageShowcaseCardSkeleton() {
  return (
    <div className="bg-white/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-100/80 space-y-3.5 shadow-sm text-right w-full flex flex-col justify-between">
      {/* Aspect Video Image Box */}
      <div className="w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden relative bg-slate-100 p-4 flex flex-col justify-between">
        <SkeletonBase className="h-3 w-20 rounded bg-emerald-200/50 mr-0" />
        <SkeletonBase className="h-3 w-28 rounded bg-sky-200/50 mr-0" />
      </div>

      {/* Title & Description */}
      <div className="space-y-2">
        <SkeletonBase className="h-5 sm:h-6 w-3/4 mr-0 rounded-lg" />
        <SkeletonBase className="h-3 w-full rounded-sm" />
        <SkeletonBase className="h-3 w-4/5 rounded-sm" />
      </div>

      {/* Prompt Link Footer */}
      <div className="pt-1 text-left">
        <SkeletonBase className="h-3.5 w-16 rounded-md bg-sky-100/80 inline-block" />
      </div>
    </div>
  );
}

export const ContentCardSkeleton = ImageShowcaseCardSkeleton;

/**
 * 5. FoodCard Skeleton (1-to-1 Blueprint Copy of FoodCard.tsx)
 * Container: bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 rounded-2xl p-4 space-y-3 shadow-none w-full
 */
export function FoodCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 rounded-2xl p-4 space-y-3 shadow-none text-right w-full flex flex-col justify-between">
      {/* Square Aspect-Square Image Box */}
      <div className="w-full aspect-square rounded-xl overflow-hidden relative bg-slate-100/80 p-4 flex flex-col justify-between">
        <SkeletonBase className="h-3 w-16 rounded bg-emerald-200/60 mr-0" />
        <SkeletonBase className="h-3 w-24 rounded bg-sky-200/60 mr-0" />
      </div>

      {/* Title & Short Description */}
      <div className="space-y-1.5">
        <SkeletonBase className="h-4 sm:h-5 w-4/5 mr-0 rounded-md" />
        <SkeletonBase className="h-3 w-full rounded-sm" />
        <SkeletonBase className="h-3 w-3/4 rounded-sm" />
      </div>

      {/* Prompt Link Footer */}
      <div className="pt-1 text-left">
        <SkeletonBase className="h-3.5 w-14 rounded-md bg-sky-100/80 inline-block" />
      </div>
    </div>
  );
}

/**
 * 6. District Showcase Detail Skeleton (1-to-1 Blueprint Copy of DistrictsClient.tsx 2-Column Split Layout)
 */
export function DistrictDetailSkeleton() {
  return (
    <div className="w-full">
      {/* Desktop 2-Column Split View */}
      <div className="hidden lg:flex gap-8 items-start w-full">
        {/* Right Sidebar Column (w-[270px] shrink-0 space-y-3) */}
        <div className="w-[270px] shrink-0 space-y-3 text-right">
          <SkeletonBase className="h-3.5 w-44 mr-0 rounded mb-2" />
          <div className="grid grid-cols-1 gap-1.5 border-r border-slate-100 pr-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="py-3 px-1 space-y-1.5 border-b border-slate-100">
                <SkeletonBase className="h-4 w-3/4 mr-0 rounded-md" />
                <SkeletonBase className="h-3 w-1/2 mr-0 rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Left Column Active District Showcase (flex-1 min-w-0 p-6 sm:p-8 space-y-6) */}
        <div className="flex-1 min-w-0 bg-white p-6 sm:p-8 space-y-6 text-right">
          {/* Header Info */}
          <div className="space-y-1.5">
            <SkeletonBase className="h-3.5 w-40 mr-0 rounded bg-emerald-100/80" />
            <SkeletonBase className="h-3 w-56 mr-0 rounded" />
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <SkeletonBase className="h-8 sm:h-10 w-2/3 mr-0 rounded-xl" />
            <SkeletonBase className="h-4 w-1/2 mr-0 rounded-md bg-sky-100/80" />
          </div>

          {/* Subtab Selector Pills */}
          <div className="flex gap-2 py-1 overflow-x-auto no-scrollbar">
            {Array.from({ length: 7 }).map((_, i) => (
              <SkeletonBase
                key={i}
                className={`h-8 rounded-full shrink-0 ${
                  i === 0 ? "w-28 bg-emerald-100/80" : "w-24"
                }`}
              />
            ))}
          </div>

          {/* Main Narrative & 2-Column Cards Grid */}
          <div className="space-y-5 pt-2">
            <div className="space-y-2.5">
              <SkeletonBase className="h-4 w-full rounded" />
              <SkeletonBase className="h-4 w-11/12 rounded" />
              <SkeletonBase className="h-4 w-4/5 rounded" />
            </div>

            {/* 2-Column UniversalCard Skeleton Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <PioneerCardSkeleton />
              <PioneerCardSkeleton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Skeleton View */}
      <div className="block lg:hidden space-y-3 text-right">
        <SkeletonBase className="h-3.5 w-44 mr-0 rounded mb-3" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border-b border-slate-100 pb-4 space-y-2">
            <div className="py-2 flex items-center justify-between">
              <div className="space-y-1 flex-1 pl-3 text-right">
                <SkeletonBase className="h-5 w-1/2 mr-0 rounded-md" />
                <SkeletonBase className="h-3 w-1/3 mr-0 rounded-sm" />
              </div>
              <SkeletonBase className="h-3.5 w-16 rounded bg-sky-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 7. Unified Media Viewer Modal Skeleton
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
 * 8. Complete 1-to-1 Page Skeleton Template
 */
export function PageSkeleton({
  gridType = "cards",
  count = 6,
}: {
  gridType?: "cards" | "pioneers" | "districts" | "food";
  count?: number;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar Header Safe Distance Area */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        {/* 1. SubpageHero Skeleton */}
        <SubpageHeroSkeleton />

        {/* 2. CategoryTabSelector Skeleton */}
        <CategoryTabSelectorSkeleton count={5} />

        {/* 3. Main Grid Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {gridType === "districts" ? (
            <DistrictDetailSkeleton />
          ) : gridType === "pioneers" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Array.from({ length: count }).map((_, idx) => (
                <PioneerCardSkeleton key={idx} />
              ))}
            </div>
          ) : gridType === "food" ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {Array.from({ length: count }).map((_, idx) => (
                <FoodCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Array.from({ length: count }).map((_, idx) => (
                <ImageShowcaseCardSkeleton key={idx} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
