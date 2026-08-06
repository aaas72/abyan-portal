"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SmartContainer } from "@/components/layout";
import { SubpageHero, CategoryTabSelector, FolkAudioPlayer, UnifiedMediaViewer, MediaItem } from "@/components/ui";
import FoodCard from "@/components/cards/FoodCard";
import ImageShowcaseCard from "@/components/cards/ImageShowcaseCard";
import { CultureCategory, AudioTrack } from "@/types/schemas";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
  itemFadeInRight,
} from "@/lib/animations";

interface CultureClientProps {
  initialCategories: CultureCategory[];
  folkAudioTracks: AudioTrack[];
}

export default function CultureClient({ initialCategories, folkAudioTracks }: CultureClientProps) {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>("dan");
  const [selectedCultureModal, setSelectedCultureModal] = useState<MediaItem | null>(null);

  const categoryTabs = useMemo(() => {
    return initialCategories.map((c) => ({
      id: c.id,
      label: c.categoryName,
    }));
  }, [initialCategories]);

  const currentCategory = useMemo(() => {
    return initialCategories.find((c) => c.id === activeCategoryTab) || initialCategories[0];
  }, [initialCategories, activeCategoryTab]);

  return (
    <>
      {/* REUSABLE SUBPAGE HERO HEADER */}
      <SubpageHero
        tag="الموروث الشفاهي، الفلكلور، والمطبخ الأصيل"
        titlePrefix="ثقافة وفنون"
        titleHighlight="أبين التراثية"
        description="استعراض حي لروائع شعر الدان الأبيني، أهازيج المهاجل الزراعية، إيقاعات الشرح والهودون، وأصالة المائدة الأبينية"
      />

      {/* REUSABLE CATEGORY TAB SELECTOR */}
      <CategoryTabSelector
        tabs={categoryTabs}
        activeTab={activeCategoryTab}
        onSelectTab={setActiveCategoryTab}
      />

      {/* CULTURE SHOWCASE PANEL */}
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
                قسم {currentCategory.categoryName}
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

            {/* AUDIO PLAYER (FOR DAN & FOLK TRACKS) */}
            {currentCategory.audioTrack && (
              <motion.div {...itemFadeInRight(0.2)} className="pt-2">
                <span className="text-xs font-normal text-[#10b981] font-abyan-title block mb-2">
                  استماع للتسجيل الشفاهي الموثق:
                </span>
                <FolkAudioPlayer activeTrack={currentCategory.audioTrack} tracks={folkAudioTracks} />
              </motion.div>
            )}

            {/* FOOD PHOTO CARDS SHOWCASE (FOR CUISINE CATEGORY) */}
            {currentCategory.foodPhotoCards && (
              <motion.div {...itemFadeInRight(0.24)} className="pt-3 space-y-4">
                <span className="text-xs font-normal text-[#10b981] font-abyan-title block">
                  معرض أطباق ومأكولات المائدة الأبينية الأصيلة:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {currentCategory.foodPhotoCards.map((food) => (
                    <FoodCard
                      key={food.id}
                      foodCard={food}
                      onClick={() =>
                        setSelectedCultureModal({
                          id: food.id,
                          title: food.title,
                          subtitle: food.tag ? `${food.tag} • ${food.location || "أبين"}` : food.location,
                          fullBiography: food.description,
                          location: food.location,
                          categoryLabel: "المطبخ والمأكولات الأبينية",
                          description: food.description,
                          bgGradient: food.bgGradient,
                        })
                      }
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* VISUAL SHOWCASE CARD (FOR STORYTELLING) */}
            {currentCategory.visualShowcase && (
              <motion.div {...itemFadeInRight(0.24)} className="pt-3 space-y-3">
                <span className="text-xs font-normal text-[#10b981] font-abyan-title block">
                  مشهد ومأثورات الحكايات الشعبية:
                </span>
                <ImageShowcaseCard
                  item={{
                    id: "visual-storytelling",
                    title: currentCategory.visualShowcase.title,
                    tag: currentCategory.visualShowcase.tag,
                    description: currentCategory.visualShowcase.description,
                    bgGradient: currentCategory.visualShowcase.bgGradient,
                  }}
                  onClick={() =>
                    setSelectedCultureModal({
                      id: "visual-storytelling",
                      title: currentCategory.visualShowcase?.title || "مجالس الحكايات والأمثال الشفاهية في أبين",
                      subtitle: currentCategory.visualShowcase?.tag || "معرض المشاهد والحكايات الشعبية",
                      fullBiography: currentCategory.visualShowcase?.description || "توثيق بصرِي لمجالس كبار السن وحكايات البحارة والمزارعين في شقرة وجعار ولودر",
                      categoryLabel: "التراث السردي الشفاهي",
                      bgGradient: currentCategory.visualShowcase?.bgGradient,
                    })
                  }
                />
              </motion.div>
            )}

            {/* POETRY EXCERPTS */}
            {currentCategory.excerpts && (
              <motion.div {...itemFadeInRight(0.26)} className="space-y-2 pt-2">
                <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                  شواهد وأبيات من الموروث الشفاهي:
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
            )}

            {/* KEY FEATURES */}
            {currentCategory.features && (
              <motion.div {...itemFadeInRight(0.3)} className="space-y-1 pt-2">
                <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                  سمات وأصالة الفن الأبيني:
                </span>
                <p className="text-xs sm:text-sm text-[#10b981] font-abyan-title font-normal leading-relaxed">
                  {currentCategory.features.join(" • ")}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </SmartContainer>

      {/* UNIFIED MEDIA VIEWER MODAL FOR CULTURE DETAILS */}
      <UnifiedMediaViewer
        item={selectedCultureModal}
        onClose={() => setSelectedCultureModal(null)}
      />
    </>
  );
}
