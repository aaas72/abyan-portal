"use client";

import React from "react";

/**
 * 🌿 Abyan Shimmer Base Utility
 * Right-to-Left (RTL) Spring Green & Sky Blue smooth shimmer animation
 * Borderless with clean system rounded corners
 */
export function SkeletonBase({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-abyan-shimmer-rtl border-none outline-none ${className}`}
    />
  );
}

/**
 * ✒️ Single Text Line Skeleton (Borderless, natural Arabic typography height)
 */
export function SkeletonTextLine({
  height = "h-3.5",
  width = "w-full",
  className = "",
}: {
  height?: string;
  width?: string;
  className?: string;
}) {
  return (
    <SkeletonBase
      className={`${height} ${width} rounded-md ${className}`}
    />
  );
}

/**
 * 📝 Realistic Paragraph Text Skeleton
 */
export function SkeletonParagraph({
  lines = 3,
  align = "right",
  className = "",
}: {
  lines?: number;
  align?: "right" | "center" | "left";
  className?: string;
}) {
  const lineWidths = ["w-full", "w-[92%]", "w-[85%]", "w-[65%]"];

  return (
    <div
      className={`space-y-2 pt-1 ${
        align === "center"
          ? "flex flex-col items-center"
          : align === "left"
          ? "flex flex-col items-start"
          : "flex flex-col items-end"
      } ${className}`}
    >
      {Array.from({ length: lines }).map((_, idx) => (
        <SkeletonTextLine
          key={idx}
          height="h-3"
          width={lineWidths[idx % lineWidths.length]}
        />
      ))}
    </div>
  );
}

/**
 * 1. SubpageHero Skeleton (1-to-1 Blueprint Copy, Borderless)
 */
export function SubpageHeroSkeleton() {
  return (
    <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4">
      {/* Category Tag Pill */}
      <div className="inline-block py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-emerald-500/10 border-none">
        <SkeletonBase className="h-3.5 sm:h-4 w-32 sm:w-44 rounded-full" />
      </div>

      {/* Main Title Line */}
      <div className="pt-1 flex justify-center">
        <SkeletonBase className="h-8 sm:h-11 w-3/4 max-w-md rounded-xl" />
      </div>

      {/* Description Paragraph Lines */}
      <div className="pt-1 max-w-2xl mx-auto space-y-2">
        <SkeletonTextLine height="h-3.5" width="w-full" className="mx-auto" />
        <SkeletonTextLine height="h-3.5" width="w-4/5" className="mx-auto" />
      </div>
    </section>
  );
}

/**
 * 2. CategoryTabSelector Skeleton (Borderless, System Rounded Pills)
 */
export function CategoryTabSelectorSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-6 relative z-10">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
        {/* Navigation Arrow Left Placeholder */}
        <SkeletonBase className="h-7 w-5 rounded-md shrink-0" />

        {/* Tab Pills Row */}
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonBase
            key={i}
            className={`h-8 sm:h-9 rounded-full shrink-0 border-none ${
              i === 0 ? "w-28 sm:w-36" : "w-24 sm:w-32"
            }`}
          />
        ))}

        {/* Navigation Arrow Right Placeholder */}
        <SkeletonBase className="h-7 w-5 rounded-md shrink-0" />
      </div>
    </div>
  );
}

/**
 * 3. UniversalCard Pioneer Variant Skeleton (Borderless, System rounded-2xl sm:rounded-3xl)
 */
export function PioneerCardSkeleton() {
  return (
    <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-none space-y-4 shadow-sm text-right w-full flex flex-col justify-between">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-3">
        <SkeletonTextLine height="h-5 sm:h-6" width="w-1/2" className="rounded-md" />
        <SkeletonBase className="h-5 w-24 rounded-full shrink-0" />
      </div>

      {/* Subtitle */}
      <SkeletonTextLine height="h-3.5" width="w-1/3" className="rounded-md" />

      {/* Realistic Narrative Paragraph */}
      <SkeletonParagraph lines={3} align="right" />

      {/* Footer Row */}
      <div className="pt-3 border-none flex items-center justify-between">
        <SkeletonTextLine height="h-3" width="w-28" />
        <SkeletonBase className="h-4 w-14 rounded-md" />
      </div>
    </div>
  );
}

/**
 * 4. ImageShowcaseCard Skeleton (Borderless, System rounded-2xl sm:rounded-3xl)
 */
export function ImageShowcaseCardSkeleton() {
  return (
    <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-none space-y-3.5 shadow-sm text-right w-full flex flex-col justify-between">
      {/* Aspect Video Image Box */}
      <div className="w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden relative border-none p-4 flex flex-col justify-between">
        <SkeletonBase className="w-full h-full absolute inset-0" />
        <SkeletonBase className="h-3 w-20 rounded relative z-10 mr-0" />
        <SkeletonBase className="h-3 w-28 rounded relative z-10 mr-0" />
      </div>

      {/* Title & Description Paragraph */}
      <div className="space-y-2">
        <SkeletonTextLine height="h-5 sm:h-6" width="w-3/4" className="rounded-md" />
        <SkeletonParagraph lines={2} align="right" />
      </div>

      {/* Prompt Link Footer */}
      <div className="pt-1 text-left">
        <SkeletonBase className="h-3.5 w-16 rounded-md inline-block" />
      </div>
    </div>
  );
}

export const ContentCardSkeleton = ImageShowcaseCardSkeleton;

/**
 * 5. FoodCard Skeleton (Borderless, System rounded-2xl)
 */
export function FoodCardSkeleton() {
  return (
    <div className="bg-white/95 rounded-2xl p-4 border-none space-y-3 shadow-none text-right w-full flex flex-col justify-between">
      {/* Square Image Box */}
      <div className="w-full aspect-square rounded-xl overflow-hidden relative border-none p-4 flex flex-col justify-between">
        <SkeletonBase className="w-full h-full absolute inset-0" />
        <SkeletonBase className="h-3 w-16 rounded relative z-10 mr-0" />
        <SkeletonBase className="h-3 w-24 rounded relative z-10 mr-0" />
      </div>

      {/* Title & Paragraph */}
      <div className="space-y-1.5">
        <SkeletonTextLine height="h-4 sm:h-5" width="w-4/5" className="rounded-md" />
        <SkeletonParagraph lines={2} align="right" />
      </div>

      {/* Prompt Link Footer */}
      <div className="pt-1 text-left">
        <SkeletonBase className="h-3.5 w-14 rounded-md inline-block" />
      </div>
    </div>
  );
}

/**
 * 6. District Showcase Detail Skeleton (Borderless)
 */
export function DistrictDetailSkeleton() {
  return (
    <div className="w-full">
      {/* Desktop 2-Column Split View */}
      <div className="hidden lg:flex gap-8 items-start w-full">
        {/* Right Sidebar Column (w-[270px]) */}
        <div className="w-[270px] shrink-0 space-y-3 text-right">
          <SkeletonTextLine height="h-3.5" width="w-44" className="rounded mb-2" />
          <div className="grid grid-cols-1 gap-1.5 border-none pr-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="py-3 px-1 space-y-1.5 border-none">
                <SkeletonTextLine height="h-4" width="w-3/4" className="rounded-md" />
                <SkeletonTextLine height="h-3" width="w-1/2" className="rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Left Column Active District Showcase */}
        <div className="flex-1 min-w-0 bg-white border-none rounded-3xl p-6 sm:p-8 space-y-6 text-right">
          {/* Header Info */}
          <div className="space-y-1.5">
            <SkeletonTextLine height="h-3.5" width="w-40" className="rounded" />
            <SkeletonTextLine height="h-3" width="w-56" className="rounded" />
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <SkeletonTextLine height="h-8 sm:h-10" width="w-2/3" className="rounded-xl" />
            <SkeletonTextLine height="h-4" width="w-1/2" className="rounded-md" />
          </div>

          {/* Subtab Selector Pills */}
          <div className="flex gap-2 py-1 overflow-x-auto no-scrollbar">
            {Array.from({ length: 7 }).map((_, i) => (
              <SkeletonBase
                key={i}
                className={`h-8 rounded-full shrink-0 border-none ${
                  i === 0 ? "w-28" : "w-24"
                }`}
              />
            ))}
          </div>

          {/* Main Narrative & 2-Column Cards Grid */}
          <div className="space-y-5 pt-2">
            <SkeletonParagraph lines={4} align="right" />

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
        <SkeletonTextLine height="h-3.5" width="w-44" className="rounded mb-3" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border-none pb-4 space-y-2">
            <div className="py-2 flex items-center justify-between">
              <div className="space-y-1 flex-1 pl-3 text-right">
                <SkeletonTextLine height="h-5" width="w-1/2" className="rounded-md" />
                <SkeletonTextLine height="h-3" width="w-1/3" className="rounded-sm" />
              </div>
              <SkeletonBase className="h-3.5 w-16 rounded" />
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
    <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl w-full text-right shadow-2xl border-none">
      <div className="flex flex-row-reverse gap-4 sm:gap-6 items-start">
        <SkeletonBase className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl shrink-0 border-none" />
        <div className="space-y-3 flex-1">
          <SkeletonBase className="h-4 w-24 mr-0 rounded" />
          <SkeletonTextLine height="h-7" width="w-3/4" className="rounded-lg" />
          <SkeletonTextLine height="h-4" width="w-1/2" className="rounded" />
        </div>
      </div>
      <div className="space-y-3 pt-4 border-none">
        <SkeletonTextLine height="h-5" width="w-44" className="rounded" />
        <SkeletonParagraph lines={4} align="right" />
      </div>
    </div>
  );
}

/**
 * 8. Pure Body Content Skeleton (Navbar & Footer are ALWAYS Real & Persistent!)
 */
export function PageSkeleton({
  gridType = "cards",
  count = 6,
}: {
  gridType?: "cards" | "pioneers" | "districts" | "food";
  count?: number;
}) {
  return (
    <div className="w-full">
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
    </div>
  );
}
