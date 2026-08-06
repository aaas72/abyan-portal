"use client";

import React from "react";
import { motion } from "framer-motion";

export interface FoodCardData {
  id: string;
  title: string;
  tag: string;
  location: string;
  description: string;
  bgGradient: string;
}

interface FoodCardProps {
  foodCard: FoodCardData;
  onClick: () => void;
}

export default function FoodCard({ foodCard, onClick }: FoodCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group cursor-pointer text-right bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 hover:from-emerald-100/90 hover:to-sky-100/90 rounded-2xl p-4 border-none space-y-3 shadow-none overflow-hidden w-full relative"
    >
      {/* Square Food Photo Box */}
      <div
        className={`w-full aspect-square rounded-xl overflow-hidden relative bg-gradient-to-br ${foodCard.bgGradient} p-4 flex flex-col justify-between text-white shadow-inner`}
      >
        <span className="text-[10px] text-emerald-300 font-abyan-title font-normal block truncate">
          {foodCard.tag}
        </span>
        <span className="text-[10px] text-sky-200 font-abyan-title font-normal block leading-tight truncate">
          {foodCard.location}
        </span>
      </div>

      {/* Title & Short Description */}
      <div className="space-y-1 overflow-hidden">
        <h3 className="font-abyan-title text-sm sm:text-base font-normal leading-snug text-slate-900 group-hover:text-sky-600 transition-colors overflow-hidden break-words">
          {foodCard.title}
        </h3>
        <p className="text-[11px] text-slate-600 font-abyan-title font-normal line-clamp-2 leading-relaxed overflow-hidden">
          {foodCard.description}
        </p>
      </div>

      {/* Prompt Link */}
      <div className="pt-1 text-left text-xs text-sky-600 font-abyan-title border-none">
        <span className="group-hover:translate-x-[-3px] transition-transform font-normal inline-block">
          معاينة ←
        </span>
      </div>
    </motion.div>
  );
}
