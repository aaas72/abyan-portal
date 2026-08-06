"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { curtainOverlayVariants, curtainOverlayTransition } from "@/lib/animations";

import { MediaItem } from "@/types/schemas";
export type { MediaItem };

interface UnifiedMediaViewerProps {
  item: MediaItem | null;
  onClose: () => void;
}

export default function UnifiedMediaViewer({ item, onClose }: UnifiedMediaViewerProps) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={curtainOverlayVariants.initial}
          animate={curtainOverlayVariants.animate}
          exit={curtainOverlayVariants.exit}
          transition={curtainOverlayTransition}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[85dvh] sm:max-h-[90vh] overflow-hidden shadow-2xl relative cursor-default flex flex-col"
        >
          <div className="w-full h-full p-5 sm:p-8 text-right space-y-5 overflow-y-auto custom-thin-scrollbar">

          {/* Media Header Row: Square Image Box Right + Text Details In Front */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 pt-2 border-b border-slate-100 pb-5 sm:pb-6 w-full">
            {/* Square Image / Profile Box */}
            <div
              className={`w-28 h-28 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden relative bg-gradient-to-br ${
                item.bgGradient || "from-slate-800 via-slate-700 to-slate-900"
              } p-3 sm:p-4 flex flex-col justify-between text-white shadow-md`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              )}

              {item.year ? (
                <span className="text-xs text-emerald-300 font-abyan-title font-normal block z-10 truncate">
                  {item.year}
                </span>
              ) : (
                <span />
              )}

              {item.location && (
                <span className="text-xs text-sky-200 font-abyan-title font-normal block z-10 truncate leading-tight">
                  {item.location}
                </span>
              )}
            </div>

            {/* Text Details In Front of the Square Image Box */}
            <div className="flex-1 space-y-1.5 text-right">
              {item.categoryLabel && (
                <span className="text-xs font-normal text-[#10b981] font-abyan-title block">
                  التصنيف: {item.categoryLabel}
                </span>
              )}

              <h2 className="font-abyan-title text-2xl sm:text-3xl text-slate-900 font-normal leading-snug">
                {item.title}
              </h2>

              {/* Short Subtitle directly under Name */}
              {item.subtitle && (
                <p className="text-xs sm:text-sm text-slate-600 font-abyan-body font-normal leading-relaxed pt-0.5">
                  {item.subtitle}
                </p>
              )}

              {item.year && (
                <p className="text-[11px] text-slate-400 font-abyan-title font-normal pt-1">
                  سنة التوثيق: {item.year} {item.location ? `• الموقع: ${item.location}` : ""}
                </p>
              )}
            </div>
          </div>

          {/* Media Details Description (Full Extended Biography / Description) */}
          <div className="space-y-4 pt-1">
            <div className="space-y-2">
              <h4 className="font-abyan-title text-base sm:text-lg text-slate-900 font-normal border-none">
                تفاصيل القيد والتوثيق الحضاري:
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed whitespace-pre-line">
                {item.fullBiography || item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500 font-abyan-title">
              <span>محفوظ في الأرشيف الرقمي لبوابة أبين الثقافية</span>
              <button
                onClick={onClose}
                className="text-sky-600 hover:text-sky-700 font-normal bg-transparent border-none cursor-pointer"
              >
                إغلاق المعاينة
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
