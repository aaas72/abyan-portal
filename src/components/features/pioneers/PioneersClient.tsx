"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, SmartContainer } from "@/components/layout";
import { SubpageHero, CategoryTabSelector, UnifiedMediaViewer, MediaItem } from "@/components/ui";
import { UniversalCard } from "@/components/cards";
import { PioneerCategory, PioneerFigure } from "@/types/schemas";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
} from "@/lib/animations";

interface PioneersClientProps {
  initialData: PioneerCategory[];
}

export default function PioneersClient({ initialData }: PioneersClientProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    initialData[0]?.id || "poets"
  );
  const [selectedPioneerModal, setSelectedPioneerModal] = useState<MediaItem | null>(null);

  const categoryTabs = useMemo(() => {
    return initialData.map((c) => ({
      id: c.id,
      label: c.categoryName,
    }));
  }, [initialData]);

  const currentCategory = useMemo(() => {
    return initialData.find((p) => p.id === activeTabId) || initialData[0];
  }, [initialData, activeTabId]);

  const handleOpenPioneerModal = (fig: PioneerFigure) => {
    setSelectedPioneerModal({
      id: fig.id,
      title: fig.name,
      subtitle: fig.role,
      fullBiography: `${fig.biography}${fig.quote ? `\n\nالمقولة والشاهد التراثي: « ${fig.quote} »` : ""}`,
      year: fig.era,
      location: fig.location,
      categoryLabel: currentCategory.categoryName,
      description: fig.role,
      bgGradient: fig.bgGradient,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar activeSection="pioneers" />

      {/* Main Content */}
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
          activeTab={activeTabId}
          onSelectTab={setActiveTabId}
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
