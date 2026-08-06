"use client";

import React from "react";
import { motion } from "framer-motion";

export interface PioneerData {
  id: string;
  name: string;
  role: string;
  era: string;
  location: string;
  biography: string;
  quote?: string;
  bgGradient: string;
}

interface PioneerCardProps {
  figure: PioneerData;
  onClick: () => void;
}

export default function PioneerCard({ figure, onClick }: PioneerCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group cursor-pointer text-right bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 hover:from-emerald-100/90 hover:to-sky-100/90 rounded-2xl p-6 border-none space-y-4 shadow-none transition-all duration-300 overflow-hidden w-full relative"
    >
      {/* Top Header Row with Square Profile Box */}
      <div className="flex items-start gap-4 sm:gap-5 w-full overflow-hidden">
        {/* Square Pioneer Profile Box */}
        <div
          className={`w-24 h-24 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden relative bg-gradient-to-br ${figure.bgGradient} p-3 sm:p-4 flex flex-col justify-between text-white shadow-inner`}
        >
          <span className="text-xs text-emerald-300 font-abyan-title font-normal block truncate">
            {figure.era}
          </span>
          <span className="text-xs text-sky-200 font-abyan-title font-normal block leading-tight truncate">
            {figure.location}
          </span>
        </div>

        {/* Title & Role Info Side Container */}
        <div className="space-y-1 overflow-hidden flex-1">
          <span className="text-xs font-normal text-[#10b981] font-abyan-title block overflow-hidden truncate">
            {figure.role}
          </span>
          <h3 className="font-abyan-title text-base sm:text-lg font-normal leading-snug text-slate-900 group-hover:text-sky-600 transition-colors overflow-hidden break-words">
            {figure.name}
          </h3>
        </div>
      </div>

      {/* Short Bio */}
      <div className="space-y-2 overflow-hidden w-full">
        <p className="text-xs text-slate-700 font-abyan-title font-normal line-clamp-3 leading-relaxed overflow-hidden break-words">
          {figure.biography}
        </p>
      </div>

      {/* Quote Excerpt if available */}
      {figure.quote && (
        <p className="text-xs text-sky-600 font-abyan-title font-normal leading-relaxed pt-1 line-clamp-2 overflow-hidden break-words w-full">
          « {figure.quote} »
        </p>
      )}

      {/* Footer Prompt */}
      <div className="pt-2 flex justify-between items-center text-[11px] text-slate-400 font-abyan-title overflow-hidden border-none">
        <span>بطاقة قيد العلم</span>
        <span className="text-sky-600 group-hover:translate-x-[-3px] transition-transform font-normal">
          عرض السيرة الكاملة ←
        </span>
      </div>
    </motion.div>
  );
}
