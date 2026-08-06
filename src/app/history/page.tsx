"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, SmartContainer } from "@/components/layout";
import { SubpageHero } from "@/components/ui";
import PortalService from "@/services/portalService";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
  itemFadeInRight,
} from "@/lib/animations";

export default function HistoryPage() {
  const [selectedEraId, setSelectedEraId] = useState<string>("ancient");

  // DATA FETCHED STRICTLY VIA PORTAL SERVICE FROM SRC/DATA/HISTORYDATA.TS
  const historyEras = PortalService.getHistoryEras();

  const activeEra =
    historyEras.find((e) => e.id === selectedEraId) || historyEras[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar activeSection="history" />

      {/* Main Content with Safe Distance Padding below 150px Navbar */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        {/* REUSABLE SUBPAGE HERO HEADER */}
        <SubpageHero
          tag="العمق التاريخي والحضاري"
          titlePrefix="التاريخ والحضارات في"
          titleHighlight="أبين"
          description="استعراض موسوعي شامل للحقب التاريخية، الممالك اليمنية القديمة، العصر الإسلامي، عصر السلطنات، والنهضة الحديثة"
        />

        {/* MAIN HISTORY TIMELINE SELECTOR & ERA SHOWCASE */}
        <SmartContainer>
          
          {/* MOBILE VIEW: ACCORDION LIST (Visible on Mobile & Tablet Portrait < lg) */}
          <div className="block lg:hidden space-y-4">
            <span className="text-xs font-normal text-slate-900 font-abyan-title block text-right mb-3">
              انقر على الحقبة للاستعراض والتوسيع المفصل:
            </span>

            <div className="space-y-3">
              {historyEras.map((era) => {
                const isSelected = selectedEraId === era.id;

                return (
                  <div
                    key={era.id}
                    className="border-b border-slate-100 pb-4 text-right transition-colors"
                  >
                    {/* Era Card Header */}
                    <div
                      onClick={() => setSelectedEraId(isSelected ? "" : era.id)}
                      className="cursor-pointer py-2 flex items-center justify-between"
                    >
                      <div className="space-y-0.5 text-right flex-1 pl-3">
                        <span className="text-[11px] font-normal text-[#10b981] font-abyan-title block">
                          {era.timeframe}
                        </span>
                        <h3
                          className={`font-abyan-title text-base sm:text-lg font-normal transition-colors duration-300 ${
                            isSelected
                              ? "text-sky-600 font-medium"
                              : "text-slate-900 hover:text-sky-600"
                          }`}
                        >
                          {era.eraTitle}
                        </h3>
                        <p className="text-xs text-slate-500 font-abyan-title font-normal">
                          {era.shortSummary}
                        </p>
                      </div>

                      {/* Expand / Collapse Indicator */}
                      <span className="text-xs font-abyan-title text-sky-600 font-normal shrink-0">
                        {isSelected ? "إغلاق" : "استعراض"}
                      </span>
                    </div>

                    {/* Accordion Expandable Detailed Content */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pt-4 space-y-5"
                        >
                          {/* Timeframe & Subtitle */}
                          <div className="space-y-1">
                            <span className="text-xs text-slate-500 font-abyan-title block">
                              العاصمة أو المركز التاريخي: {era.historicalCapital}
                            </span>
                          </div>

                          {/* Full Description */}
                          <p className="text-xs sm:text-sm text-slate-700 font-abyan-title font-normal leading-relaxed">
                            {era.fullDescription}
                          </p>

                          {/* Key Events List (Pure Sky Blue Text) */}
                          <div className="space-y-2 pt-1">
                            <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                              أبرز الأحداث والمشاهد التاريخية:
                            </span>
                            <ul className="space-y-1.5 list-none p-0 m-0">
                              {era.keyEvents.map((evt, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs sm:text-sm text-sky-600 font-abyan-title font-normal leading-relaxed"
                                >
                                  • {evt}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Notable Landmarks (Pure Spring Green Text) */}
                          <div className="space-y-1 pt-1">
                            <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                              المعالم والشواهد المرتبطة بالحقبة:
                            </span>
                            <p className="text-xs sm:text-sm text-[#10b981] font-abyan-title font-normal leading-relaxed">
                              {era.notableLandmarks.join(" • ")}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DESKTOP VIEW: 2-COLUMN SIDE-BY-SIDE LAYOUT (Visible on Large Screens >= lg) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Right Column: Eras Selector List (Thinner 4 Cols) */}
            <div className="lg:col-span-4 max-w-sm space-y-3">
              <span className="text-xs font-normal text-slate-900 font-abyan-title block text-right mb-2">
                اختر الحقبة التاريخية للاستعراض المفصل:
              </span>

              <div className="grid grid-cols-1 gap-1 border-r border-slate-100 pr-3">
                {historyEras.map((era) => {
                  const isSelected = selectedEraId === era.id;

                  return (
                    <div
                      key={era.id}
                      onClick={() => setSelectedEraId(era.id)}
                      className="py-3.5 px-1 text-right cursor-pointer bg-transparent border-b border-slate-100 last:border-none shadow-none transition-colors duration-300"
                    >
                      <div className="flex flex-col text-right space-y-0.5">
                        <span className="text-[11px] font-normal text-[#10b981] font-abyan-title">
                          {era.timeframe}
                        </span>
                        <h3 className={`font-abyan-title text-base sm:text-lg font-normal transition-colors duration-300 ${
                          isSelected ? "text-sky-600 font-medium" : "text-slate-900 hover:text-sky-600"
                        }`}>
                          {era.eraTitle}
                        </h3>
                        <p className="text-xs text-slate-500 font-abyan-title font-normal truncate">
                          {era.shortSummary}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Left Column: Active Era Detailed Showcase (8 Cols) */}
            <div className="lg:col-span-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEra.id}
                  initial={curtainOverlayVariants.initial}
                  animate={curtainOverlayVariants.animate}
                  exit={curtainOverlayVariants.exit}
                  transition={curtainOverlayTransition}
                  className="p-6 sm:p-8 text-right bg-white border-none shadow-none space-y-6"
                >
                  {/* Timeframe & Subtitle */}
                  <motion.div {...itemFadeInRight(0.05)} className="space-y-1">
                    <span className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block">
                      {activeEra.timeframe}
                    </span>
                    <span className="text-xs text-slate-500 font-abyan-title block">
                      العاصمة أو المركز التاريخي: {activeEra.historicalCapital}
                    </span>
                  </motion.div>

                  {/* Era Title */}
                  <motion.h2
                    {...itemFadeInRight(0.1)}
                    className="font-abyan-title text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug font-normal"
                  >
                    {activeEra.eraTitle}
                  </motion.h2>

                  {/* Full Description */}
                  <motion.p
                    {...itemFadeInRight(0.16)}
                    className="text-xs sm:text-sm lg:text-base text-slate-700 font-abyan-title font-normal leading-relaxed pt-1"
                  >
                    {activeEra.fullDescription}
                  </motion.p>

                  {/* Key Events List (Pure Sky Blue Text) */}
                  <motion.div {...itemFadeInRight(0.22)} className="space-y-2 pt-2">
                    <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                      أبرز الأحداث والمشاهد التاريخية:
                    </span>
                    <ul className="space-y-1.5 list-none p-0 m-0">
                      {activeEra.keyEvents.map((evt, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-sky-600 font-abyan-title font-normal leading-relaxed"
                        >
                          • {evt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Notable Landmarks (Pure Spring Green Text) */}
                  <motion.div {...itemFadeInRight(0.28)} className="space-y-1 pt-2">
                    <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                      المعالم والشواهد المرتبطة بالحقبة:
                    </span>
                    <p className="text-xs sm:text-sm text-[#10b981] font-abyan-title font-normal leading-relaxed">
                      {activeEra.notableLandmarks.join(" • ")}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </SmartContainer>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
