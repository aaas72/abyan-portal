"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
  itemFadeInRight,
} from "@/lib/animations";

interface EraDetail {
  id: string;
  eraName: string;
  period: string;
  title: string;
  description: string;
}

interface EraDetailOverlayProps {
  era: EraDetail | null;
  isSelected: boolean;
  onClose?: () => void;
}

export default function EraDetailOverlay({
  era,
  isSelected,
}: EraDetailOverlayProps) {
  return (
    <AnimatePresence mode="wait">
      {isSelected && era && (
        <motion.div
          key={era.id}
          initial={curtainOverlayVariants.initial}
          animate={curtainOverlayVariants.animate}
          exit={curtainOverlayVariants.exit}
          transition={curtainOverlayTransition}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-full lg:w-[60%] max-w-4xl pointer-events-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="py-8 pr-6 sm:pr-10 lg:pr-14 pl-8 sm:pl-14 text-right space-y-2.5 rounded-l-3xl bg-gradient-to-r from-transparent via-white/90 via-35% to-white shadow-none border-none backdrop-blur-none pointer-events-auto cursor-default"
          >
            {/* Era Period Tag */}
            <motion.span
              {...itemFadeInRight(0.05)}
              className="text-xs font-bold text-sky-600 font-abyan-title block"
            >
              {era.period}
            </motion.span>

            {/* Era Name */}
            <motion.span
              {...itemFadeInRight(0.08)}
              className="font-abyan-title text-[#10b981] text-base sm:text-lg block font-normal"
            >
              {era.eraName}
            </motion.span>
            
            {/* Main Title */}
            <motion.h3
              {...itemFadeInRight(0.12)}
              className="font-abyan-title text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-snug font-normal"
            >
              {era.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              {...itemFadeInRight(0.16)}
              className="text-xs sm:text-sm text-slate-700 font-abyan-title font-normal leading-relaxed pt-0.5 max-w-2xl"
            >
              {era.description}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
