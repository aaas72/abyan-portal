"use client";

import React from "react";

/* =============================================================================
   🌿 ABYAN SHIMMER BASE ATOMS
   ============================================================================= */

export function SkeletonBase({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-abyan-shimmer-rtl border-none shadow-none outline-none ${className}`} />
  );
}

export function SkeletonTextLine({
  height = "h-3.5",
  width = "w-full",
  className = "",
}: {
  height?: string;
  width?: string;
  className?: string;
}) {
  return <SkeletonBase className={`${height} ${width} rounded-md ${className}`} />;
}

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
        align === "center" ? "flex flex-col items-center" : align === "left" ? "flex flex-col items-start" : "flex flex-col items-end"
      } ${className}`}
    >
      {Array.from({ length: lines }).map((_, idx) => (
        <SkeletonTextLine key={idx} height="h-3" width={lineWidths[idx % lineWidths.length]} />
      ))}
    </div>
  );
}

/* =============================================================================
   🧩 SHARED REUSABLE SKELETON ATOMS (Hero + Tabs + Cards)
   ============================================================================= */

export function SubpageHeroSkeleton() {
  return (
    <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4">
      <SkeletonBase className="h-6 sm:h-7 w-36 sm:w-48 mx-auto rounded-full" />
      <div className="pt-1 flex justify-center">
        <SkeletonTextLine height="h-8 sm:h-11" width="w-3/4 max-w-md" className="rounded-xl" />
      </div>
      <div className="pt-1 max-w-2xl mx-auto space-y-2">
        <SkeletonTextLine height="h-3.5" width="w-full" className="mx-auto" />
        <SkeletonTextLine height="h-3.5" width="w-4/5" className="mx-auto" />
      </div>
    </section>
  );
}

export function CategoryTabSelectorSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-6 relative z-10">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
        <SkeletonBase className="h-7 w-5 rounded-md shrink-0" />
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonBase key={i} className={`h-8 sm:h-9 rounded-full shrink-0 ${i === 0 ? "w-28 sm:w-36" : "w-24 sm:w-32"}`} />
        ))}
        <SkeletonBase className="h-7 w-5 rounded-md shrink-0" />
      </div>
    </div>
  );
}

export function PioneerCardSkeleton() {
  return (
    <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-none shadow-none space-y-4 text-right w-full flex flex-col justify-between">
      <div className="flex items-center justify-between gap-3">
        <SkeletonTextLine height="h-5 sm:h-6" width="w-1/2" />
        <SkeletonBase className="h-5 w-24 rounded-full shrink-0" />
      </div>
      <SkeletonTextLine height="h-3.5" width="w-1/3" />
      <SkeletonParagraph lines={3} align="right" />
      <div className="pt-3 flex items-center justify-between">
        <SkeletonTextLine height="h-3" width="w-28" />
        <SkeletonBase className="h-4 w-14 rounded-md" />
      </div>
    </div>
  );
}

export function ImageShowcaseCardSkeleton() {
  return (
    <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-none shadow-none space-y-3.5 text-right w-full flex flex-col justify-between">
      <SkeletonBase className="w-full aspect-video rounded-xl sm:rounded-2xl" />
      <div className="space-y-2">
        <SkeletonTextLine height="h-5 sm:h-6" width="w-3/4" />
        <SkeletonParagraph lines={2} align="right" />
      </div>
      <div className="pt-1 text-left">
        <SkeletonBase className="h-3.5 w-16 rounded-md inline-block" />
      </div>
    </div>
  );
}

export const ContentCardSkeleton = ImageShowcaseCardSkeleton;

export function FoodCardSkeleton() {
  return (
    <div className="bg-white/95 rounded-2xl p-4 border-none shadow-none space-y-3 text-right w-full flex flex-col justify-between">
      <SkeletonBase className="w-full aspect-square rounded-xl" />
      <div className="space-y-1.5">
        <SkeletonTextLine height="h-4 sm:h-5" width="w-4/5" />
        <SkeletonParagraph lines={2} align="right" />
      </div>
      <div className="pt-1 text-left">
        <SkeletonBase className="h-3.5 w-14 rounded-md inline-block" />
      </div>
    </div>
  );
}

export function DistrictDetailSkeleton() {
  return (
    <div className="w-full">
      <div className="hidden lg:flex gap-8 items-start w-full">
        <div className="w-[270px] shrink-0 space-y-3 text-right">
          <SkeletonTextLine height="h-3.5" width="w-44" className="mb-2" />
          <div className="grid grid-cols-1 gap-1.5 border-none shadow-none pr-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="py-3 px-1 space-y-1.5">
                <SkeletonTextLine height="h-4" width="w-3/4" />
                <SkeletonTextLine height="h-3" width="w-1/2" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 min-w-0 bg-white border-none shadow-none rounded-3xl p-6 sm:p-8 space-y-6 text-right">
          <div className="space-y-1.5">
            <SkeletonTextLine height="h-3.5" width="w-40" />
            <SkeletonTextLine height="h-3" width="w-56" />
          </div>
          <div className="space-y-2">
            <SkeletonTextLine height="h-8 sm:h-10" width="w-2/3" className="rounded-xl" />
            <SkeletonTextLine height="h-4" width="w-1/2" />
          </div>
          <div className="flex gap-2 py-1 overflow-x-auto no-scrollbar">
            {Array.from({ length: 7 }).map((_, i) => (
              <SkeletonBase key={i} className={`h-8 rounded-full shrink-0 ${i === 0 ? "w-28" : "w-24"}`} />
            ))}
          </div>
          <div className="space-y-5 pt-2">
            <SkeletonParagraph lines={4} align="right" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <PioneerCardSkeleton />
              <PioneerCardSkeleton />
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden space-y-3 text-right">
        <SkeletonTextLine height="h-3.5" width="w-44" className="mb-3" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="pb-4 space-y-2">
            <div className="py-2 flex items-center justify-between">
              <div className="space-y-1 flex-1 pl-3 text-right">
                <SkeletonTextLine height="h-5" width="w-1/2" />
                <SkeletonTextLine height="h-3" width="w-1/3" />
              </div>
              <SkeletonBase className="h-3.5 w-16 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MediaViewerModalSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl w-full text-right shadow-none border-none">
      <div className="flex flex-row-reverse gap-4 sm:gap-6 items-start">
        <SkeletonBase className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl shrink-0" />
        <div className="space-y-3 flex-1">
          <SkeletonBase className="h-4 w-24 mr-0 rounded" />
          <SkeletonTextLine height="h-7" width="w-3/4" className="rounded-lg" />
          <SkeletonTextLine height="h-4" width="w-1/2" />
        </div>
      </div>
      <div className="space-y-3 pt-4">
        <SkeletonTextLine height="h-5" width="w-44" />
        <SkeletonParagraph lines={4} align="right" />
      </div>
    </div>
  );
}

/* =============================================================================
   🏛️ LANDMARKS PAGE SKELETON (/landmarks)
   Blueprint: Hero → Tabs → SmartContainer[max-w-4xl]:
     • Category meta (1 green line + 1 gray subtitle)
     • H2 title (large)
     • Description paragraph (3 lines)
     • Section label + 3-col ImageShowcaseCard grid (3 cards)
     • Section label + bullet list (4 lines, sky blue)
     • Section label + features paragraph
   ============================================================================= */
export function LandmarksPageSkeleton() {
  return (
    <div className="w-full">
      <SubpageHeroSkeleton />
      <CategoryTabSelectorSkeleton count={5} />

      {/* SmartContainer max-w-6xl → inner max-w-4xl */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 sm:py-6 text-right space-y-6 max-w-4xl mx-auto">

          {/* Category Subtitle & Header: 1 green label + 1 gray subtitle */}
          <div className="space-y-1">
            <SkeletonTextLine height="h-3.5" width="w-28" className="rounded-md" />
            <SkeletonTextLine height="h-3" width="w-44" className="rounded-sm" />
          </div>

          {/* H2 Main Title */}
          <SkeletonTextLine height="h-9 sm:h-11" width="w-2/3" className="rounded-xl" />

          {/* Description Paragraph */}
          <SkeletonParagraph lines={3} align="right" />

          {/* Section label + 3-col ImageShowcaseCard Grid */}
          <div className="pt-2 space-y-4">
            <SkeletonTextLine height="h-3.5" width="w-48" className="rounded-md" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <ImageShowcaseCardSkeleton />
              <ImageShowcaseCardSkeleton />
              <ImageShowcaseCardSkeleton />
            </div>
          </div>

          {/* Section label + Bullet list (4 items) */}
          <div className="space-y-2 pt-2">
            <SkeletonTextLine height="h-3.5" width="w-52" className="rounded-md" />
            <div className="space-y-1.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonTextLine key={i} height="h-3.5" width={["w-[80%]", "w-[72%]", "w-[76%]", "w-[68%]"][i]} className="rounded-md" />
              ))}
            </div>
          </div>

          {/* Section label + Features paragraph */}
          <div className="space-y-1 pt-2">
            <SkeletonTextLine height="h-3.5" width="w-56" className="rounded-md" />
            <SkeletonTextLine height="h-3.5" width="w-full" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   🗺️ DISTRICTS PAGE SKELETON (/districts)
   Blueprint: Hero → Tabs(regions) → SmartContainer full-width:
     Desktop: w-[270px] sidebar list + flex-1 active district card with sub-tabs
   ============================================================================= */
export function DistrictsPageSkeleton() {
  return (
    <div className="w-full">
      <SubpageHeroSkeleton />
      <CategoryTabSelectorSkeleton count={4} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <DistrictDetailSkeleton />
      </div>
    </div>
  );
}

/* =============================================================================
   📜 PIONEERS PAGE SKELETON (/pioneers)
   Blueprint: Hero → Tabs → SmartContainer[max-w-4xl]:
     • Category section label + H2 title + subtitle
     • 2-col PioneerCard grid (4 cards)
   ============================================================================= */
export function PioneersPageSkeleton() {
  return (
    <div className="w-full">
      <SubpageHeroSkeleton />
      <CategoryTabSelectorSkeleton count={5} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 max-w-4xl mx-auto">

          {/* Category Header: green label + H2 + gray subtitle */}
          <div className="text-right space-y-1">
            <SkeletonTextLine height="h-3.5" width="w-28" className="rounded-md" />
            <SkeletonTextLine height="h-9 sm:h-10" width="w-3/5" className="rounded-xl" />
            <SkeletonTextLine height="h-3" width="w-40" className="rounded-sm" />
          </div>

          {/* 2-col PioneerCard grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PioneerCardSkeleton />
            <PioneerCardSkeleton />
            <PioneerCardSkeleton />
            <PioneerCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   🎨 CULTURE PAGE SKELETON (/culture)
   Blueprint: Hero → Tabs → SmartContainer[max-w-4xl]:
     • Green label + gray subtitle
     • H2 title
     • Description paragraph
     • Audio player bar (h-16 wide bar)
     • Section label + 3-col FoodCard grid
     • Excerpts list (3 quote lines)
     • Features dotted line
   ============================================================================= */
export function CulturePageSkeleton() {
  return (
    <div className="w-full">
      <SubpageHeroSkeleton />
      <CategoryTabSelectorSkeleton count={5} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 sm:py-6 text-right space-y-6 max-w-4xl mx-auto">

          {/* Category label + subtitle */}
          <div className="space-y-1">
            <SkeletonTextLine height="h-3.5" width="w-28" className="rounded-md" />
            <SkeletonTextLine height="h-3" width="w-44" className="rounded-sm" />
          </div>

          {/* H2 Title */}
          <SkeletonTextLine height="h-9 sm:h-11" width="w-3/5" className="rounded-xl" />

          {/* Description paragraph */}
          <SkeletonParagraph lines={3} align="right" />

          {/* Audio Player bar */}
          <div className="pt-2">
            <SkeletonTextLine height="h-3.5" width="w-44" className="mb-2 rounded-md" />
            <SkeletonBase className="h-16 w-full rounded-2xl" />
          </div>

          {/* Section label + 3-col FoodCard grid */}
          <div className="pt-3 space-y-4">
            <SkeletonTextLine height="h-3.5" width="w-60" className="rounded-md" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <FoodCardSkeleton />
              <FoodCardSkeleton />
              <FoodCardSkeleton />
            </div>
          </div>

          {/* Quote excerpts list */}
          <div className="space-y-2 pt-2">
            <SkeletonTextLine height="h-3.5" width="w-48" className="rounded-md" />
            <div className="space-y-1.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonTextLine key={i} height="h-3.5" width={["w-[85%]", "w-[78%]", "w-[70%]"][i]} className="rounded-md" />
              ))}
            </div>
          </div>

          {/* Features line */}
          <div className="space-y-1 pt-2">
            <SkeletonTextLine height="h-3.5" width="w-48" className="rounded-md" />
            <SkeletonTextLine height="h-3.5" width="w-full" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   🌴 ECONOMY PAGE SKELETON (/economy)
   Blueprint: Hero → Tabs → SmartContainer[max-w-4xl]:
     • Green pillar label + gray subtitle
     • H2 title
     • Description paragraph
     • Section label + 3-col FoodCard grid
     • Key products bullet list
     • Economic impact line
   ============================================================================= */
export function EconomyPageSkeleton() {
  return (
    <div className="w-full">
      <SubpageHeroSkeleton />
      <CategoryTabSelectorSkeleton count={5} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 sm:py-6 text-right space-y-6 max-w-4xl mx-auto">

          {/* Pillar label + subtitle */}
          <div className="space-y-1">
            <SkeletonTextLine height="h-3.5" width="w-32" className="rounded-md" />
            <SkeletonTextLine height="h-3" width="w-48" className="rounded-sm" />
          </div>

          {/* H2 Title */}
          <SkeletonTextLine height="h-9 sm:h-11" width="w-3/5" className="rounded-xl" />

          {/* Description paragraph */}
          <SkeletonParagraph lines={3} align="right" />

          {/* Section label + 3-col FoodCard grid */}
          <div className="pt-2 space-y-4">
            <SkeletonTextLine height="h-3.5" width="w-52" className="rounded-md" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <FoodCardSkeleton />
              <FoodCardSkeleton />
              <FoodCardSkeleton />
            </div>
          </div>

          {/* Key products bullet list */}
          <div className="space-y-2 pt-2">
            <SkeletonTextLine height="h-3.5" width="w-56" className="rounded-md" />
            <div className="space-y-1.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonTextLine key={i} height="h-3.5" width={["w-[78%]", "w-[70%]", "w-[74%]", "w-[66%]"][i]} className="rounded-md" />
              ))}
            </div>
          </div>

          {/* Economic impact line */}
          <div className="space-y-1 pt-2">
            <SkeletonTextLine height="h-3.5" width="w-52" className="rounded-md" />
            <SkeletonTextLine height="h-3.5" width="w-full" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   🖼️ GALLERY PAGE SKELETON (/gallery)
   Blueprint: Hero → Tabs(6) → SmartContainer[max-w-5xl]:
     • Archive green label + H2 title
     • 3-col ImageShowcaseCard grid (6 cards)
   ============================================================================= */
export function GalleryPageSkeleton() {
  return (
    <div className="w-full">
      <SubpageHeroSkeleton />
      <CategoryTabSelectorSkeleton count={6} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 sm:py-6 text-right space-y-6 max-w-5xl mx-auto">

          {/* Archive label + H2 title */}
          <div className="space-y-1">
            <SkeletonTextLine height="h-3.5" width="w-36" className="rounded-md" />
            <SkeletonTextLine height="h-9 sm:h-10" width="w-2/5" className="rounded-xl" />
          </div>

          {/* 3-col ImageShowcaseCard grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ImageShowcaseCardSkeleton />
            <ImageShowcaseCardSkeleton />
            <ImageShowcaseCardSkeleton />
            <ImageShowcaseCardSkeleton />
            <ImageShowcaseCardSkeleton />
            <ImageShowcaseCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   🔄 LEGACY GENERIC FALLBACK (Kept for compatibility only)
   ============================================================================= */
export function PageSkeleton({
  gridType = "cards",
}: {
  gridType?: "cards" | "pioneers" | "districts" | "food";
  count?: number;
}) {
  if (gridType === "districts") return <DistrictsPageSkeleton />;
  if (gridType === "pioneers") return <PioneersPageSkeleton />;
  if (gridType === "food") return <EconomyPageSkeleton />;
  return <LandmarksPageSkeleton />;
}
