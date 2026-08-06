"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface UniversalCardData {
  id?: string;
  category?: string;
  title: string;
  subtitle?: string;
  description: string;
  linkText?: string;
  href?: string;
  era?: string;
  location?: string;
  quote?: string;
  bgGradient?: string;
  aspectRatio?: string;
}

interface UniversalCardProps {
  data: UniversalCardData;
  onClick?: () => void;
  variant?: "highlight" | "pioneer" | "food" | "plain";
}

export default function UniversalCard({
  data,
  onClick,
  variant = "highlight",
}: UniversalCardProps) {
  // VARIANT 1: FOOD CARD (VERTICAL LAYOUT: TOP FULL-WIDTH SQUARE IMAGE BOX + TEXT UNDERNEATH)
  if (variant === "food") {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="group cursor-pointer text-right bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 hover:from-emerald-100/90 hover:to-sky-100/90 rounded-2xl p-4 border-none space-y-3 shadow-none overflow-hidden w-full relative"
      >
        {/* Full-Width Aspect-Square Food Photo Box on Top */}
        <div
          className={`w-full aspect-square rounded-xl overflow-hidden relative bg-gradient-to-br ${
            data.bgGradient || "from-emerald-900 via-sky-900 to-slate-900"
          } p-4 flex flex-col justify-between text-white shadow-inner`}
        >
          <span className="text-[10px] text-emerald-300 font-abyan-title font-normal block truncate">
            {data.category}
          </span>
          <span className="text-[10px] text-sky-200 font-abyan-title font-normal block leading-tight truncate">
            {data.location}
          </span>
        </div>

        {/* Title & Short Description Below Photo Box */}
        <div className="space-y-1 overflow-hidden">
          <h3 className="font-abyan-title text-sm sm:text-base font-normal leading-snug text-slate-900 group-hover:text-sky-600 transition-colors overflow-hidden break-words">
            {data.title}
          </h3>
          <p className="text-[11px] text-slate-600 font-abyan-body font-normal line-clamp-2 leading-relaxed overflow-hidden">
            {data.description}
          </p>
        </div>
      </motion.div>
    );
  }

  // VARIANT 2: PIONEER CARD (HORIZONTAL LAYOUT: SIDE SQUARE PROFILE BOX + TITLE/ROLE/BIO NEXT TO IT)
  if (variant === "pioneer") {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="group cursor-pointer text-right bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 hover:from-emerald-100/90 hover:to-sky-100/90 rounded-2xl p-6 border-none space-y-4 shadow-none transition-all duration-300 overflow-hidden w-full relative"
      >
        {/* Header Row with Side Square Profile Box */}
        <div className="flex items-start gap-4 sm:gap-5 w-full overflow-hidden">
          <div
            className={`w-24 h-24 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden relative bg-gradient-to-br ${
              data.bgGradient || "from-emerald-900 via-slate-800 to-slate-900"
            } p-3 sm:p-4 flex flex-col justify-between text-white shadow-inner`}
          >
            {data.era && (
              <span className="text-xs text-emerald-300 font-abyan-title font-normal block truncate">
                {data.era}
              </span>
            )}
            {data.location && (
              <span className="text-xs text-sky-200 font-abyan-title font-normal block leading-tight truncate">
                {data.location}
              </span>
            )}
          </div>

          {/* Title & Role Info Side Container */}
          <div className="space-y-1 overflow-hidden flex-1">
            {data.category && (
              <span className="text-xs font-normal text-[#10b981] font-abyan-title block overflow-hidden truncate">
                {data.category}
              </span>
            )}
            <h3 className="font-abyan-title text-base sm:text-lg font-normal leading-snug text-slate-900 group-hover:text-sky-600 transition-colors overflow-hidden break-words">
              {data.title}
            </h3>
          </div>
        </div>

        {/* Short Bio */}
        <div className="space-y-2 overflow-hidden w-full">
          <p className="text-xs text-slate-700 font-abyan-body font-normal line-clamp-3 leading-relaxed overflow-hidden break-words">
            {data.description}
          </p>
        </div>

        {/* Quote if provided */}
        {data.quote && (
          <p className="text-xs text-sky-600 font-abyan-body font-normal leading-relaxed pt-1 line-clamp-2 overflow-hidden break-words w-full">
            « {data.quote} »
          </p>
        )}

        {/* Footer Prompt */}
        <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400 font-abyan-title overflow-hidden border-none">
          <span>بطاقة قيد العلم</span>
          <span className="text-sky-600 group-hover:translate-x-[-3px] transition-transform font-normal">
            {data.linkText || "عرض السيرة الكاملة ←"}
          </span>
        </div>
      </motion.div>
    );
  }

  // VARIANT 3: HIGHLIGHT & PLAIN CARD (PURE TYPOGRAPHY LINKED CARD)
  const cardContent = (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group cursor-pointer text-right bg-transparent border-none pb-6 mb-2 space-y-3 shadow-none transition-all duration-300 overflow-hidden w-full relative"
    >
      <div className="space-y-1 overflow-hidden">
        {data.category && (
          <span className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block">
            {data.category}
          </span>
        )}
        <h3 className="font-abyan-title text-xl sm:text-2xl text-slate-900 font-normal group-hover:text-sky-600 transition-colors leading-snug">
          {data.title}
        </h3>
      </div>

      <div className="space-y-2 overflow-hidden w-full">
        <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed line-clamp-3 overflow-hidden break-words">
          {data.description}
        </p>
      </div>

      {data.linkText && (
        <div className="pt-2">
          <span className="text-xs sm:text-sm text-sky-600 font-abyan-title font-normal group-hover:translate-x-[-4px] transition-transform inline-block">
            {data.linkText}
          </span>
        </div>
      )}
    </motion.div>
  );

  if (data.href) {
    return (
      <Link href={data.href} className="no-underline block w-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
