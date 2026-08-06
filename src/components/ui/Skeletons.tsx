"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Shimmer base pulse utility wrapper
 */
export function SkeletonBase({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-slate-200/80 dark:bg-slate-800/50 animate-pulse rounded-xl ${className}`}
    />
  );
}

/**
 * 1. Content Card Skeleton (for Landmarks, Economy, Culture & Gallery Photo Cards)
 */
export function ContentCardSkeleton() {
  return (
    <div className="bg-white/90 border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 space-y-4 shadow-sm text-right">
      {/* Image / Gradient Box Shimmer */}
      <SkeletonBase className="w-full h-44 sm:h-52 rounded-xl sm:rounded-2xl" />

      {/* Title & Subtitle Shimmer */}
      <div className="space-y-2 pt-1">
        <SkeletonBase className="h-5 sm:h-6 w-3/4 mr-0" />
        <SkeletonBase className="h-3.5 sm:h-4 w-1/2 mr-0" />
      </div>

      {/* Paragraph Lines Shimmer */}
      <div className="space-y-2 pt-2">
        <SkeletonBase className="h-3 w-full" />
        <SkeletonBase className="h-3 w-5/6" />
      </div>

      {/* Footer Prompt Link Shimmer */}
      <div className="pt-3 flex justify-end">
        <SkeletonBase className="h-4 w-20 rounded-lg" />
      </div>
    </div>
  );
}

/**
 * 2. District Detail Profile Skeleton (For Districts Page Left Showcase Column)
 */
export function DistrictDetailSkeleton() {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6 border border-slate-100 text-right shadow-sm">
      {/* Top Banner Image Shimmer */}
      <SkeletonBase className="w-full h-48 sm:h-64 rounded-2xl" />

      {/* Title & Category Tag */}
      <div className="space-y-3">
        <SkeletonBase className="h-4 w-32 mr-0" />
        <SkeletonBase className="h-8 sm:h-10 w-2/3 mr-0" />
        <SkeletonBase className="h-4 w-1/2 mr-0" />
      </div>

      {/* Key Highlights Tags Row */}
      <div className="flex flex-wrap gap-2 pt-2 justify-end">
        <SkeletonBase className="h-7 w-24 rounded-full" />
        <SkeletonBase className="h-7 w-28 rounded-full" />
        <SkeletonBase className="h-7 w-20 rounded-full" />
      </div>

      {/* Narrative Section Shimmer */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <SkeletonBase className="h-5 w-40 mr-0" />
        <SkeletonBase className="h-3.5 w-full" />
        <SkeletonBase className="h-3.5 w-11/12" />
        <SkeletonBase className="h-3.5 w-4/5" />
      </div>
    </div>
  );
}

/**
 * 3. Pioneer Figure Card Skeleton (For Pioneers Page)
 */
export function PioneerCardSkeleton() {
  return (
    <div className="bg-white/90 rounded-2xl p-5 border border-slate-100 space-y-4 text-right shadow-sm">
      <div className="flex items-center gap-4 flex-row-reverse">
        {/* Circle Avatar Shimmer */}
        <SkeletonBase className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0" />
        <div className="space-y-2 flex-1 text-right">
          <SkeletonBase className="h-5 w-3/4 mr-0" />
          <SkeletonBase className="h-3.5 w-1/2 mr-0" />
          <SkeletonBase className="h-3 w-1/3 mr-0" />
        </div>
      </div>
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <SkeletonBase className="h-3 w-full" />
        <SkeletonBase className="h-3 w-4/5" />
      </div>
    </div>
  );
}

/**
 * 4. Unified Media Viewer Modal Skeleton (For Modal Previews)
 */
export function MediaViewerModalSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 max-w-2xl w-full text-right">
      {/* Header Row */}
      <div className="flex flex-row-reverse gap-4 sm:gap-6 items-start">
        <SkeletonBase className="w-28 h-28 sm:w-40 sm:h-40 rounded-2xl shrink-0" />
        <div className="space-y-3 flex-1">
          <SkeletonBase className="h-4 w-24 mr-0" />
          <SkeletonBase className="h-7 w-3/4 mr-0" />
          <SkeletonBase className="h-4 w-1/2 mr-0" />
          <SkeletonBase className="h-3.5 w-1/3 mr-0" />
        </div>
      </div>

      {/* Body Narrative Section */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <SkeletonBase className="h-5 w-44 mr-0" />
        <SkeletonBase className="h-3.5 w-full" />
        <SkeletonBase className="h-3.5 w-full" />
        <SkeletonBase className="h-3.5 w-11/12" />
        <SkeletonBase className="h-3.5 w-4/5" />
      </div>
    </div>
  );
}

/**
 * 5. Generic Grid Page Skeleton Wrapper (Renders N Card Skeletons)
 */
export function CardGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {Array.from({ length: count }).map((_, idx) => (
        <ContentCardSkeleton key={idx} />
      ))}
    </div>
  );
}
