"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, SmartContainer } from "@/components/layout";
import { SubpageHero, CategoryTabSelector, UnifiedMediaViewer, MediaItem } from "@/components/ui";
import { UniversalCard } from "@/components/cards";
import PortalService from "@/services/portalService";
import { PioneerFigure } from "@/types/schemas";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
} from "@/lib/animations";

export default function PioneersPage() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>("poets");
  const [selectedPioneerModal, setSelectedPioneerModal] = useState<MediaItem | null>(null);

  // DATA FETCHED STRICTLY VIA PORTAL SERVICE FROM SRC/DATA/PIONEERSDATA.TS
  const pioneerCategories = PortalService.getPioneerCategories();

  const categoryTabs = pioneerCategories.map((c) => ({
    id: c.id,
    label: c.categoryName,
  }));

  const currentCategory =
    pioneerCategories.find((p) => p.id === activeCategoryTab) ||
    pioneerCategories[0];

  const handleOpenPioneerModal = (fig: PioneerFigure) => {
    setSelectedPioneerModal({
      id: fig.id,
      title: fig.name,
      year: fig.era,
      location: fig.location,
      categoryLabel: currentCategory.categoryName,
      description: `${fig.role} - ${fig.biography} ${fig.quote ? `\n\nالمقولة الأثرية: « ${fig.quote} »` : ""}`,
      bgGradient: fig.bgGradient,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar activeSection="pioneers" />

      {/* Main Content with Safe Distance Padding below 150px Navbar */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        {/* REUSABLE SUBPAGE HERO HEADER */}
        <SubpageHero
          tag="الأعلام والشخصيات التاريخية"
          titlePrefix="أعلام أبين ورواد"
          titleHighlight="الفكر والتاريخ"
          description="تخليد لسير العلماء، الشعراء، القادة، ورواد التنمية والنهضة الذين صاغوا الوجدان الأبيني والوطني"
        />

        {/* REUSABLE CATEGORY TAB SELECTOR */}
        <CategoryTabSelector
          tabs={categoryTabs}
          activeTab={activeCategoryTab}
          onSelectTab={setActiveCategoryTab}
        />

        {/* PIONEER PROFILE CARDS SHOWCASE GRID */}
        <SmartContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={curtainOverlayVariants.initial}
              animate={curtainOverlayVariants.animate}
              exit={curtainOverlayVariants.exit}
              transition={curtainOverlayTransition}
              className="space-y-8 max-w-4xl mx-auto"
            >
              {/* Category Header Title */}
              <div className="text-right space-y-1">
                <span className="text-xs font-normal text-[#10b981] font-abyan-title block">
                  قسم {currentCategory.categoryName}
                </span>
                <h2 className="font-abyan-title text-2xl sm:text-3xl text-slate-900 font-normal">
                  {currentCategory.title}
                </h2>
                <p className="text-xs text-slate-500 font-abyan-title font-normal">
                  {currentCategory.subtitle}
                </p>
              </div>

              {/* REUSABLE PIONEER CARDS GRID USING UNIVERSAL CARD */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentCategory.figures.map((fig) => (
                  <UniversalCard
                    key={fig.id}
                    variant="pioneer"
                    data={{
                      id: fig.id,
                      title: fig.name,
                      category: fig.role,
                      era: fig.era,
                      location: fig.location,
                      description: fig.biography,
                      quote: fig.quote,
                      bgGradient: fig.bgGradient,
                      linkText: "معاينة ←",
                    }}
                    onClick={() => handleOpenPioneerModal(fig)}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </SmartContainer>

        {/* UNIFIED MEDIA VIEWER MODAL FOR PIONEER FULL PROFILE */}
        <UnifiedMediaViewer
          item={selectedPioneerModal}
          onClose={() => setSelectedPioneerModal(null)}
        />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
