"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, SmartContainer } from "@/components/layout";
import { SubpageHero, CategoryTabSelector, FolkAudioPlayer, UnifiedMediaViewer, MediaItem } from "@/components/ui";
import { UniversalCard } from "@/components/cards";
import PortalService from "@/services/portalService";
import { PhotoCard } from "@/types/schemas";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
  itemFadeInRight,
} from "@/lib/animations";

export default function CulturePage() {
  const [activeTab, setActiveTab] = useState<string>("dan");
  const [selectedFoodModal, setSelectedFoodModal] = useState<MediaItem | null>(null);

  // DATA FETCHED STRICTLY VIA PORTAL SERVICE FROM SRC/DATA/CULTUREDATA.TS
  const heritageCategories = PortalService.getCultureCategories();

  const categoryTabs = heritageCategories.map((c) => ({
    id: c.id,
    label: c.categoryName,
  }));

  const currentCategory =
    heritageCategories.find((c) => c.id === activeTab) || heritageCategories[0];

  const handleOpenFoodModal = (foodCard: PhotoCard) => {
    setSelectedFoodModal({
      id: foodCard.id,
      title: foodCard.title,
      subtitle: `${foodCard.tag} • ${foodCard.location}`,
      fullBiography: foodCard.description,
      location: foodCard.location,
      categoryLabel: "ثقافة المائدة والمأكولات الشعبية",
      description: foodCard.description,
      bgGradient: foodCard.bgGradient,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar activeSection="culture" />

      {/* Main Content with Safe Distance Padding below 150px Navbar */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        {/* REUSABLE SUBPAGE HERO HEADER */}
        <SubpageHero
          tag="التراث الأدبي والفني والشفاهي الأبيني"
          titlePrefix="الأدب والفنون والتراث الشفاهي في"
          titleHighlight="أبين"
          description="سجل حافل بالدان الشجي، رقصات الشرح والهودون الشعبية، المهاجل الزراعية في الدلتا، وأشعار الزامل والحكمة التاريخية"
        />

        {/* REUSABLE CATEGORY TAB SELECTOR */}
        <CategoryTabSelector
          tabs={categoryTabs}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />

        {/* MAIN HERITAGE SHOWCASE PANEL */}
        <SmartContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={curtainOverlayVariants.initial}
              animate={curtainOverlayVariants.animate}
              exit={curtainOverlayVariants.exit}
              transition={curtainOverlayTransition}
              className="py-2 sm:py-6 text-right space-y-6 max-w-4xl mx-auto"
            >
              {/* Category Subtitle & Header */}
              <motion.div {...itemFadeInRight(0.05)} className="space-y-1">
                <span className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block">
                  {currentCategory.categoryName}
                </span>
                <span className="text-xs text-slate-500 font-abyan-title block">
                  {currentCategory.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                {...itemFadeInRight(0.1)}
                className="font-abyan-title text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug font-normal"
              >
                {currentCategory.title}
              </motion.h2>

              {/* Description Paragraph */}
              <motion.p
                {...itemFadeInRight(0.16)}
                className="text-xs sm:text-sm lg:text-base text-slate-700 font-abyan-title font-normal leading-relaxed pt-1"
              >
                {currentCategory.description}
              </motion.p>

              {/* CONDITIONAL SHOWCASE: AUDIO PLAYER / REUSABLE FOOD CARDS GRID / VISUAL BANNER */}
              {currentCategory.audioTrack ? (
                <motion.div {...itemFadeInRight(0.2)} className="pt-2">
                  <FolkAudioPlayer activeTrack={currentCategory.audioTrack} />
                </motion.div>
              ) : currentCategory.foodPhotoCards ? (
                <motion.div {...itemFadeInRight(0.2)} className="pt-2 space-y-4">
                  <span className="text-xs font-normal text-[#10b981] font-abyan-title block">
                    معرض كروت الأطباق والوجبات التراثية الأصيلة:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {currentCategory.foodPhotoCards.map((foodCard) => (
                      <UniversalCard
                        key={foodCard.id}
                        variant="food"
                        data={{
                          id: foodCard.id,
                          title: foodCard.title,
                          category: foodCard.tag,
                          location: foodCard.location,
                          description: foodCard.description,
                          bgGradient: foodCard.bgGradient,
                        }}
                        onClick={() => handleOpenFoodModal(foodCard)}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : currentCategory.visualShowcase ? (
                <motion.div {...itemFadeInRight(0.2)} className="pt-2">
                  <div
                    className={`w-full h-48 sm:h-56 rounded-2xl overflow-hidden relative bg-gradient-to-br ${currentCategory.visualShowcase.bgGradient} p-6 flex flex-col justify-end text-white shadow-sm`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                    <span className="text-xs text-emerald-300 font-abyan-title font-normal block z-10">
                      {currentCategory.visualShowcase.tag}
                    </span>
                    <h3 className="font-abyan-title text-xl sm:text-2xl font-normal leading-snug text-white z-10">
                      {currentCategory.visualShowcase.title}
                    </h3>
                    <p className="text-xs text-sky-200 font-abyan-title font-normal leading-relaxed pt-1 z-10">
                      {currentCategory.visualShowcase.description}
                    </p>
                  </div>
                </motion.div>
              ) : null}

              {/* Poetic & Folk Excerpts (Pure Sky Blue Text List) */}
              <motion.div {...itemFadeInRight(0.24)} className="space-y-2 pt-2">
                <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                  نماذج وأشعار ومقاطع تراثية:
                </span>
                <ul className="space-y-1.5 list-none p-0 m-0">
                  {currentCategory.excerpts.map((exc, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-sky-600 font-abyan-title font-normal leading-relaxed"
                    >
                      « {exc} »
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Unique Artistic Features (Pure Spring Green Text) */}
              <motion.div {...itemFadeInRight(0.28)} className="space-y-1 pt-2">
                <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                  الخصائص والميزات الفنية الأبينية:
                </span>
                <p className="text-xs sm:text-sm text-[#10b981] font-abyan-title font-normal leading-relaxed">
                  {currentCategory.features.join(" • ")}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </SmartContainer>

        {/* UNIFIED MEDIA VIEWER MODAL FOR FOOD PHOTO CARDS */}
        <UnifiedMediaViewer
          item={selectedFoodModal}
          onClose={() => setSelectedFoodModal(null)}
        />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
