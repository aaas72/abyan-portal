"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, SmartContainer } from "@/components/layout";
import { SubpageHero, CategoryTabSelector, UnifiedMediaViewer, MediaItem } from "@/components/ui";
import { ImageShowcaseCard, ImageShowcaseData } from "@/components/cards";
import PortalService from "@/services/portalService";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
  itemFadeInRight,
} from "@/lib/animations";

export default function LandmarksPage() {
  const [activeLandmarkTab, setActiveLandmarkTab] = useState<string>("delta");
  const [selectedLandmarkModal, setSelectedLandmarkModal] = useState<MediaItem | null>(null);

  // DATA FETCHED STRICTLY VIA PORTAL SERVICE FROM SRC/DATA/LANDMARKSDATA.TS
  const landmarkCategories = PortalService.getLandmarkCategories();

  const categoryTabs = landmarkCategories.map((l) => ({
    id: l.id,
    label: l.categoryName,
  }));

  const currentLandmark =
    landmarkCategories.find((l) => l.id === activeLandmarkTab) ||
    landmarkCategories[0];

  const handleOpenLandmarkModal = (photoCard: ImageShowcaseData) => {
    setSelectedLandmarkModal({
      id: photoCard.id,
      title: photoCard.title,
      subtitle: photoCard.tag ? `${photoCard.tag} • ${photoCard.location || "أبين"}` : photoCard.location,
      fullBiography: photoCard.description,
      location: photoCard.location,
      categoryLabel: currentLandmark.categoryName,
      description: photoCard.description,
      bgGradient: photoCard.bgGradient,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar activeSection="landmarks" />

      {/* Main Content with Safe Distance Padding below 150px Navbar */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        {/* REUSABLE SUBPAGE HERO HEADER */}
        <SubpageHero
          tag="التضاريس، المعالم، والدلتا الخضراء"
          titlePrefix="معالم وأطواد"
          titleHighlight="أبين التاريخية"
          description="استكشاف دقيق لصرح سد باتيس، دلتا بنا الخصيبة، حصن القارة المنيع، عقبة ثرة الشامخة، وسواحل شقرة وأحور العريضة"
        />

        {/* REUSABLE CATEGORY TAB SELECTOR */}
        <CategoryTabSelector
          tabs={categoryTabs}
          activeTab={activeLandmarkTab}
          onSelectTab={setActiveLandmarkTab}
        />

        {/* MAIN LANDMARK SHOWCASE PANEL */}
        <SmartContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLandmark.id}
              initial={curtainOverlayVariants.initial}
              animate={curtainOverlayVariants.animate}
              exit={curtainOverlayVariants.exit}
              transition={curtainOverlayTransition}
              className="py-2 sm:py-6 text-right space-y-6 max-w-4xl mx-auto"
            >
              {/* Category Subtitle & Header */}
              <motion.div {...itemFadeInRight(0.05)} className="space-y-1">
                <span className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block">
                  {currentLandmark.categoryName}
                </span>
                <span className="text-xs text-slate-500 font-abyan-title block">
                  {currentLandmark.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                {...itemFadeInRight(0.1)}
                className="font-abyan-title text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug font-normal"
              >
                {currentLandmark.title}
              </motion.h2>

              {/* Description Paragraph */}
              <motion.p
                {...itemFadeInRight(0.16)}
                className="text-xs sm:text-sm lg:text-base text-slate-700 font-abyan-title font-normal leading-relaxed pt-1"
              >
                {currentLandmark.description}
              </motion.p>

              {/* VISUAL LANDMARK CARDS GRID USING DEDICATED IMAGE SHOWCASE CARD */}
              {currentLandmark.photoCards && (
                <motion.div {...itemFadeInRight(0.2)} className="pt-2 space-y-4">
                  <span className="text-xs font-normal text-[#10b981] font-abyan-title block">
                    معرض مشاهد ومعالم {currentLandmark.categoryName}:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {currentLandmark.photoCards.map((photoCard) => (
                      <ImageShowcaseCard
                        key={photoCard.id}
                        item={photoCard}
                        onClick={() => handleOpenLandmarkModal(photoCard)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key Landmarks List (Pure Sky Blue Text) */}
              <motion.div {...itemFadeInRight(0.24)} className="space-y-2 pt-2">
                <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                  أبرز الشواهد والمعالم الجغرافية:
                </span>
                <ul className="space-y-1.5 list-none p-0 m-0">
                  {currentLandmark.keyLandmarks.map((lm, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-sky-600 font-abyan-title font-normal leading-relaxed"
                    >
                      • {lm}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Unique Features (Pure Spring Green Text) */}
              <motion.div {...itemFadeInRight(0.28)} className="space-y-1 pt-2">
                <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                  الأهمية والقيمة التاريخية والطبيعية:
                </span>
                <p className="text-xs sm:text-sm text-[#10b981] font-abyan-title font-normal leading-relaxed">
                  {currentLandmark.details.join(" • ")}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </SmartContainer>

        {/* UNIFIED MEDIA VIEWER MODAL FOR LANDMARK FULL PHOTO */}
        <UnifiedMediaViewer
          item={selectedLandmarkModal}
          onClose={() => setSelectedLandmarkModal(null)}
        />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
