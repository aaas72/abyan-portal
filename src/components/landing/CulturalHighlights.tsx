"use client";

import React from "react";
import { motion } from "framer-motion";
import { SmartContainer } from "@/components/layout";
import { UniversalCard } from "@/components/cards";
import PortalService from "@/services/portalService";
import { sectionFadeUpVariants } from "@/lib/animations";

export default function CulturalHighlights() {
  // DATA FETCHED STRICTLY VIA PORTAL SERVICE FROM SRC/DATA/HIGHLIGHTSDATA.TS
  const highlights = PortalService.getHomeHighlights();

  return (
    <section
      id="highlights"
      className="w-full bg-white border-none shadow-none relative overflow-hidden flex flex-col justify-center items-center cursor-default py-16 sm:py-24 lg:py-28"
    >
      {/* Section Header */}
      <SmartContainer className="mb-8 lg:mb-10 w-full">
        <motion.div
          {...sectionFadeUpVariants}
          className="text-center space-y-2"
        >
          <h2 className="font-abyan-title text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-normal font-normal">
            ركائز ومكنونات هوية <span className="text-sky-600">أبين</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-abyan-title font-normal leading-relaxed">
            لمحة عن الأركان الأساسية التي تميز المحافظة تمهيداً للاستكشاف التفصيلي عبر الصفحات المخصصة
          </p>
        </motion.div>
      </SmartContainer>

      {/* 4 REUSABLE UNIVERSAL HIGHLIGHT CARDS GRID */}
      <SmartContainer className="w-full">
        <motion.div
          {...sectionFadeUpVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"
        >
          {highlights.map((item) => (
            <UniversalCard key={item.id} data={item} variant="highlight" />
          ))}
        </motion.div>
      </SmartContainer>
    </section>
  );
}
