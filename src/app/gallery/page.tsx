"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, SmartContainer } from "@/components/layout";
import { SubpageHero, CategoryTabSelector, UnifiedMediaViewer } from "@/components/ui";
import PortalService from "@/services/portalService";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItemModal, setActiveItemModal] = useState<any | null>(null);

  // DATA FETCHED STRICTLY VIA PORTAL SERVICE FROM SRC/DATA/GALLERYDATA.TS
  const categories = PortalService.getGalleryCategories();
  const archiveItems = PortalService.getGalleryArchive();

  const filteredItems =
    selectedCategory === "all"
      ? archiveItems
      : archiveItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar activeSection="gallery" />

      {/* Main Content with Safe Distance Padding below 150px Navbar */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        {/* REUSABLE SUBPAGE HERO HEADER */}
        <SubpageHero
          tag="الأرشيف الرقمي والذاكرة البصرية"
          titlePrefix="أرشيف ووثائق"
          titleHighlight="أبين النادرة"
          description="استعراض توثيقي للوثائق والمخطوطات القديمة، الصور التاريخية لسد باتيس، مزارع القطن، وموانئ شقرة وأحور"
        />

        {/* REUSABLE CATEGORY TAB SELECTOR */}
        <CategoryTabSelector
          tabs={categories}
          activeTab={selectedCategory}
          onSelectTab={setSelectedCategory}
        />

        {/* GALLERY STAGGERED MASONRY GRID */}
        <SmartContainer>
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() =>
                    setActiveItemModal({
                      id: item.id,
                      title: item.title,
                      subtitle: `${item.categoryLabel} • ${item.location}`,
                      fullBiography: item.description,
                      year: item.year,
                      location: item.location,
                      categoryLabel: item.categoryLabel,
                      description: item.description,
                      bgGradient: item.bgGradient,
                    })
                  }
                >
                  {/* Visual Card Banner */}
                  <div
                    className={`w-full ${item.aspectRatio} rounded-2xl overflow-hidden relative bg-gradient-to-br ${item.bgGradient} p-6 flex flex-col justify-end transition-transform duration-500 group-hover:scale-[1.02] shadow-sm`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                    <div className="absolute top-4 right-4 text-xs font-normal text-emerald-300 font-abyan-title z-10">
                      {item.year}
                    </div>

                    <div className="relative z-10 space-y-1">
                      <span className="text-[11px] text-sky-200 font-abyan-title block">
                        {item.location}
                      </span>
                      <h3 className="font-abyan-title text-lg sm:text-xl text-white font-normal leading-snug group-hover:text-sky-200 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Caption Text Below Card */}
                  <div className="pt-3 space-y-1">
                    <span className="text-[11px] font-normal text-[#10b981] font-abyan-title block">
                      {item.categoryLabel}
                    </span>
                    <p className="text-xs text-slate-600 font-abyan-title font-normal line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </SmartContainer>

        {/* UNIFIED MEDIA VIEWER MODAL */}
        <UnifiedMediaViewer
          item={activeItemModal}
          onClose={() => setActiveItemModal(null)}
        />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
