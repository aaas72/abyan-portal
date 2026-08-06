"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SmartContainer } from "@/components/layout";
import EraDetailOverlay from "./EraDetailOverlay";
import PortalService from "@/services/portalService";
import { sectionFadeUpVariants, subtleMicroHover } from "@/lib/animations";

export default function TimelineSection() {
  const [activeEraIndex, setActiveEraIndex] = useState<number | null>(null);

  // DATA FETCHED STRICTLY VIA PORTAL SERVICE FROM SRC/DATA/HISTORYDATA.TS
  const eras = PortalService.getTimelineEras();

  const isSelected = activeEraIndex !== null;
  const currentSelectedEra =
    activeEraIndex !== null ? eras[activeEraIndex] : null;

  // النقر على مكان فارغ لإغلاق مكون المحتوى السحابي
  const handleBackgroundClick = () => {
    if (isSelected) {
      setActiveEraIndex(null);
    }
  };

  return (
    <section
      id="timeline"
      onClick={handleBackgroundClick}
      className="w-full bg-white border-none shadow-none relative overflow-hidden flex flex-col justify-center items-center cursor-pointer py-16 sm:py-24 lg:py-28 selection:bg-emerald-500 selection:text-white"
    >
      {/* Dynamic Layered Content Showcase */}
      <EraDetailOverlay era={currentSelectedEra} isSelected={isSelected} />

      {/* SECTION HEADER */}
      <SmartContainer className="mb-10 lg:mb-14 z-10 w-full">
        <motion.div
          {...sectionFadeUpVariants}
          className="text-center space-y-2 pointer-events-auto"
        >
          <span className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block">
            السجل التاريخي العريق
          </span>
          <h2 className="font-abyan-title text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-normal font-normal">
            محطات في تاريخ <span className="text-sky-600">أبين الخالد</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-abyan-title font-normal leading-relaxed">
            انقر على الحقب التاريخية لاستكشاف المعالم والأحداث الوطنية
          </p>
        </motion.div>
      </SmartContainer>

      {/* FULL WIDTH HORIZONTAL TIMELINE AXIS */}
      <div className="w-full relative z-10 py-6 pointer-events-auto">
        <SmartContainer className="w-full overflow-x-auto no-scrollbar py-2">
          <div className="relative min-w-[600px] sm:min-w-full flex items-center justify-between min-h-[140px]">
            {/* Green Axis Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#10b981] z-0" />

            {/* Timeline Nodes */}
            {eras.map((era, index) => {
              const isActive = activeEraIndex === index;

              return (
                <motion.div
                  key={era.id}
                  {...subtleMicroHover}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveEraIndex(isActive ? null : index);
                  }}
                  className="relative z-10 flex flex-col items-center cursor-pointer group px-2 sm:px-4"
                >
                  {/* Era Name */}
                  <span
                    className={`font-abyan-title text-xs sm:text-sm lg:text-base font-normal mb-3 transition-colors duration-300 text-center whitespace-nowrap ${
                      isActive
                        ? "text-sky-600 font-medium"
                        : "text-slate-800 group-hover:text-sky-600"
                    }`}
                  >
                    {era.eraName}
                  </span>

                  {/* Interactive Node Dot */}
                  <div
                    className={`w-5 h-5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#10b981] border-2 border-white scale-125 ring-4 ring-[#10b981]/25"
                        : "bg-white border-[3px] border-[#10b981] group-hover:scale-110"
                    }`}
                  />

                  {/* Period Tag */}
                  <span className="font-abyan-title text-[10px] sm:text-xs text-slate-500 font-normal mt-3 whitespace-nowrap">
                    {era.period}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </SmartContainer>
      </div>
    </section>
  );
}
