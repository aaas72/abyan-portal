"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ImageShowcaseData {
  id: string;
  title: string;
  tag?: string;
  location?: string;
  year?: string;
  description: string;
  bgGradient?: string;
  aspectRatio?: string;
}

interface ImageShowcaseCardProps {
  item: ImageShowcaseData;
  onClick?: () => void;
}

export default function ImageShowcaseCard({
  item,
  onClick,
}: ImageShowcaseCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group cursor-pointer text-right bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 hover:from-emerald-100/90 hover:to-sky-100/90 rounded-2xl p-4 border-none space-y-3 shadow-none overflow-hidden w-full relative"
    >
      {/* Full-Width Aspect Photo Box on Top */}
      <div
        className={`w-full ${
          item.aspectRatio || "aspect-square"
        } rounded-xl overflow-hidden relative bg-gradient-to-br ${
          item.bgGradient || "from-emerald-900 via-sky-900 to-slate-900"
        } p-4 flex flex-col justify-between text-white shadow-inner`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

        <span className="text-[11px] text-emerald-300 font-abyan-title font-normal block truncate z-10">
          {item.tag || "معرض المشاهد والتعريف"}
        </span>
        <span className="text-[11px] text-sky-200 font-abyan-title font-normal block leading-tight truncate z-10">
          {item.location || item.year || "أبين - اليمن"}
        </span>
      </div>

      {/* Title & Short Description Below Photo Box */}
      <div className="space-y-1 overflow-hidden">
        <h3 className="font-abyan-title text-sm sm:text-base font-normal leading-snug text-slate-900 group-hover:text-sky-600 transition-colors overflow-hidden break-words">
          {item.title}
        </h3>
        <p className="text-[11px] text-slate-600 font-abyan-title font-normal line-clamp-2 leading-relaxed overflow-hidden">
          {item.description}
        </p>
      </div>

      {/* Prompt Link */}
      <div className="pt-1 flex justify-between items-center text-[10px] text-sky-600 font-abyan-title border-none">
        <span>عرض المشهد بالكامل</span>
        <span className="group-hover:translate-x-[-3px] transition-transform font-normal">
          تأطير المكثف ←
        </span>
      </div>
    </motion.div>
  );
}
