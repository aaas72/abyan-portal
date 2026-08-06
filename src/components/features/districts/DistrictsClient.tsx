"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer, SmartContainer } from "@/components/layout";
import { SubpageHero, CategoryTabSelector, TagList } from "@/components/ui";
import UnifiedMediaViewer, { MediaItem } from "@/components/ui/UnifiedMediaViewer";
import UniversalCard from "@/components/cards/UniversalCard";
import { DistrictItem } from "@/types/schemas";
import {
  curtainOverlayVariants,
  curtainOverlayTransition,
  itemFadeInRight,
} from "@/lib/animations";

type DistrictSubTab = "history" | "nature" | "pioneers" | "sites" | "economy" | "culture" | "villages";

interface DistrictsClientProps {
  allDistricts: DistrictItem[];
  regions: { id: string; label: string }[];
}

export default function DistrictsClient({ allDistricts, regions }: DistrictsClientProps) {
  const searchParams = useSearchParams();
  const queryDistrictId = searchParams.get("id");

  const [selectedDistrictId, setSelectedDistrictId] = useState<string>(
    queryDistrictId || "zinjibar"
  );
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>("all");
  const [activeSubTab, setActiveSubTab] = useState<DistrictSubTab>("history");
  const [selectedMediaItem, setSelectedMediaItem] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (queryDistrictId) {
      setSelectedDistrictId(queryDistrictId);
    }
  }, [queryDistrictId]);

  useEffect(() => {
    setActiveSubTab("history");
  }, [selectedDistrictId]);

  const filteredDistricts =
    selectedRegionFilter === "all"
      ? allDistricts
      : allDistricts.filter((d) => d.region === selectedRegionFilter);

  const activeDistrict =
    allDistricts.find((d) => d.id === selectedDistrictId) || allDistricts[0];

  const subTabs: { id: DistrictSubTab; label: string }[] = [
    { id: "history", label: "التاريخ والنشأة" },
    { id: "nature", label: "الجغرافيا والمناخ" },
    { id: "pioneers", label: "الأعلام والشخصيات" },
    { id: "sites", label: "المعالم والأثار" },
    { id: "economy", label: "الاقتصاد والزراعة" },
    { id: "culture", label: "الثقافة والعادات" },
    { id: "villages", label: "القرى والبلدات" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-cairo selection:bg-emerald-500 selection:text-white">
      {/* Navbar Header */}
      <Navbar activeSection="districts" />

      {/* Main Content */}
      <main className="pt-44 sm:pt-48 lg:pt-52 pb-16">
        {/* REUSABLE SUBPAGE HERO HEADER */}
        <SubpageHero
          tag="التقسيم الإداري والجغرافي والتاريخي الشامل"
          titlePrefix="دليل وموسوعة مديريات"
          titleHighlight="أبين الـ 11"
          description="مرجع شامل ومفصل للتاريخ العريق، التضاريس والجغرافيا، المعالم الأثرية، الأعلام والشخصيات، والاقتصاد والتراث بكل مديرية"
        />

        {/* REUSABLE CATEGORY TAB SELECTOR */}
        <CategoryTabSelector
          tabs={regions}
          activeTab={selectedRegionFilter}
          onSelectTab={setSelectedRegionFilter}
        />

        {/* MAIN DISTRICTS GUIDE GRID & PROFILE SHOWCASE */}
        <SmartContainer>
          {/* MOBILE VIEW */}
          <div className="block lg:hidden space-y-4">
            <span className="text-xs font-normal text-slate-900 font-abyan-title block text-right mb-3">
              انقر على المديرية للاستعراض الموسوعي التفصيلي:
            </span>

            <div className="space-y-3">
              {filteredDistricts.map((dist) => {
                const isSelected = selectedDistrictId === dist.id;

                return (
                  <div
                    key={dist.id}
                    className="border-b border-slate-100 pb-4 text-right transition-colors"
                  >
                    {/* District Card Header */}
                    <div
                      onClick={() => setSelectedDistrictId(isSelected ? "" : dist.id)}
                      className="cursor-pointer py-2 flex items-center justify-between"
                    >
                      <div className="space-y-0.5 text-right flex-1 pl-3">
                        <h3
                          className={`font-abyan-title text-base sm:text-lg font-normal leading-snug transition-colors duration-300 ${
                            isSelected
                              ? "text-sky-600 font-medium"
                              : "text-slate-900 hover:text-sky-600"
                          }`}
                        >
                          مديرية {dist.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-abyan-title font-normal">
                          {dist.title}
                        </p>
                      </div>

                      <span className="text-xs font-abyan-title text-sky-600 font-normal shrink-0">
                        {isSelected ? "إغلاق" : "استعراض الموسوعة"}
                      </span>
                    </div>

                    {/* Accordion Expandable Detailed Profile */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pt-4 space-y-5 text-right"
                        >
                          <div className="pt-1 w-full overflow-hidden">
                            <CategoryTabSelector
                              tabs={subTabs}
                              activeTab={activeSubTab}
                              onSelectTab={(tabId) => setActiveSubTab(tabId as DistrictSubTab)}
                              size="sm"
                              noContainer
                            />
                          </div>

                          <div className="space-y-4 pt-1">
                            {activeSubTab === "history" && (
                              <div className="space-y-3">
                                <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed">
                                  {dist.description}
                                </p>
                                {dist.historyOverview && (
                                  <div className="space-y-1 pt-1">
                                    <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                                      النشأة والمسار التاريخي:
                                    </span>
                                    <p className="text-xs sm:text-sm text-slate-600 font-abyan-body font-normal leading-relaxed">
                                      {dist.historyOverview}
                                    </p>
                                  </div>
                                )}
                                {dist.historyMilestones && dist.historyMilestones.length > 0 && (
                                  <div className="pt-2">
                                    <TagList
                                      title="محطات وأحداث مفصلية بالمديرية:"
                                      items={dist.historyMilestones}
                                      variant="pure-text"
                                      color="emerald"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {activeSubTab === "nature" && (
                              <div className="space-y-3">
                                <div className="space-y-1">
                                  <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                                    التضاريس والموقع الجغرافي:
                                  </span>
                                  <p className="text-xs sm:text-sm text-slate-600 font-abyan-body font-normal leading-relaxed">
                                    {dist.geography}
                                  </p>
                                </div>
                                {dist.climateAndNature && (
                                  <div className="space-y-1 pt-1">
                                    <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                                      المناخ والطبيعة البيئية:
                                    </span>
                                    <p className="text-xs sm:text-sm text-slate-600 font-abyan-body font-normal leading-relaxed">
                                      {dist.climateAndNature}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}

                            {activeSubTab === "pioneers" && (
                              <div className="space-y-3">
                                {dist.famousPioneers && dist.famousPioneers.length > 0 && (
                                  <TagList
                                    title="أبرز الأعلام والشخصيات بالمديرية:"
                                    items={dist.famousPioneers}
                                    variant="pure-text"
                                    color="emerald"
                                  />
                                )}
                                {dist.pioneersDetails && dist.pioneersDetails.length > 0 && (
                                  <div className="pt-2">
                                    <TagList
                                      title="تفاصيل وأدوار الرواد التاريخية:"
                                      items={dist.pioneersDetails}
                                      variant="pure-text"
                                      color="sky"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {activeSubTab === "sites" && (
                              <div className="space-y-3">
                                <TagList
                                  title="أهم المعالم والحصون الأثرية:"
                                  items={dist.landmarks}
                                  variant="pure-text"
                                  color="emerald"
                                />
                                {dist.historicalSites && dist.historicalSites.length > 0 && (
                                  <div className="pt-2">
                                    <TagList
                                      title="الشواهد والقلاع التاريخية:"
                                      items={dist.historicalSites}
                                      variant="pure-text"
                                      color="sky"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {activeSubTab === "economy" && (
                              <div className="space-y-3">
                                {dist.economyDetails && (
                                  <p className="text-xs sm:text-sm text-slate-700 font-abyan-title font-normal leading-relaxed">
                                    {dist.economyDetails}
                                  </p>
                                )}
                                <TagList
                                  title="أبرز المحاصيل والمنتجات الزواعية:"
                                  items={dist.crops}
                                  variant="pure-text"
                                  color="sky"
                                />
                                {dist.naturalResources && dist.naturalResources.length > 0 && (
                                  <div className="pt-2">
                                    <TagList
                                      title="الثروات والموارد الطبيعية:"
                                      items={dist.naturalResources}
                                      variant="pure-text"
                                      color="emerald"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {activeSubTab === "culture" && (
                              <div className="space-y-3">
                                {dist.traditionsAndCulture && (
                                  <p className="text-xs sm:text-sm text-sky-600 font-abyan-title font-normal leading-relaxed">
                                    {dist.traditionsAndCulture}
                                  </p>
                                )}
                                {dist.folkHeritage && dist.folkHeritage.length > 0 && (
                                  <div className="pt-2">
                                    <TagList
                                      title="الفنون والموروث الشعبي بالمديرية:"
                                      items={dist.folkHeritage}
                                      variant="pure-text"
                                      color="emerald"
                                    />
                                  </div>
                                )}
                              </div>
                            )}

                            {activeSubTab === "villages" && (
                              <div className="pt-1">
                                <TagList
                                  title="أبرز القرى والبلدات والمناطق بالمديرية:"
                                  items={dist.villages}
                                  variant="pill"
                                  color="gradient"
                                />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DESKTOP VIEW: 2-COLUMN SIDE-BY-SIDE LAYOUT */}
          <div className="hidden lg:flex gap-8 items-start">
            {/* Right Column */}
            <div className="w-[270px] shrink-0 space-y-3">
              <span className="text-xs font-normal text-slate-900 font-abyan-title block text-right mb-2">
                اختر المديرية للاستعراض الموسوعي الشامل:
              </span>

              <div className="grid grid-cols-1 gap-1.5 border-r border-slate-100 pr-3">
                {filteredDistricts.map((dist) => {
                  const isSelected = selectedDistrictId === dist.id;

                  return (
                    <motion.div
                      key={dist.id}
                      onClick={() => setSelectedDistrictId(dist.id)}
                      className="py-3 px-1 text-right cursor-pointer bg-transparent border-b border-slate-100 last:border-none shadow-none transition-colors duration-300"
                    >
                      <h3
                        className={`font-abyan-title text-base font-normal leading-snug transition-colors duration-300 ${
                          isSelected
                            ? "text-sky-600 font-medium"
                            : "text-slate-900 hover:text-sky-600"
                        }`}
                      >
                        مديرية {dist.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-abyan-title font-normal truncate pt-0.5">
                        {dist.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Left Column: Active District Detailed Profile */}
            <div className="flex-1 min-w-0 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDistrict.id}
                  initial={curtainOverlayVariants.initial}
                  animate={curtainOverlayVariants.animate}
                  exit={curtainOverlayVariants.exit}
                  transition={curtainOverlayTransition}
                  className="p-6 sm:p-8 text-right bg-white border-none shadow-none space-y-6"
                >
                  {/* Header Info */}
                  <motion.div {...itemFadeInRight(0.05)} className="space-y-1">
                    <span className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block">
                      المركز الإداري: {activeDistrict.capital}
                    </span>
                    <span className="text-xs text-slate-500 font-abyan-title block">
                      المساحة الجغرافية: {activeDistrict.areaKm2} كم² ({activeDistrict.areaPercentage} من مساحة المحافظة)
                    </span>
                  </motion.div>

                  {/* Title & Subtitle */}
                  <motion.div {...itemFadeInRight(0.1)} className="space-y-1">
                    <h2 className="font-abyan-title text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug font-normal">
                      مديرية {activeDistrict.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-normal text-sky-600 font-abyan-title">
                      {activeDistrict.title}
                    </p>
                  </motion.div>

                  {/* Responsive Scrollable Sub-Tab Selector */}
                  <motion.div
                    {...itemFadeInRight(0.14)}
                    className="pt-1 w-full overflow-hidden"
                  >
                    <CategoryTabSelector
                      tabs={subTabs}
                      activeTab={activeSubTab}
                      onSelectTab={(tabId) => setActiveSubTab(tabId as DistrictSubTab)}
                      size="sm"
                      noContainer
                    />
                  </motion.div>

                  {/* Dynamic Sub-Tab Content Section */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSubTab}
                      initial={curtainOverlayVariants.initial}
                      animate={curtainOverlayVariants.animate}
                      exit={curtainOverlayVariants.exit}
                      transition={curtainOverlayTransition}
                      className="space-y-5 pt-2"
                    >
                      {/* TAB 1: HISTORY & MILESTONES */}
                      {activeSubTab === "history" && (
                        <div className="space-y-4">
                          <p className="text-xs sm:text-sm lg:text-base text-slate-700 font-abyan-body font-normal leading-relaxed">
                            {activeDistrict.description}
                          </p>
                          {activeDistrict.historyOverview && (
                            <div className="space-y-1.5 pt-1">
                              <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                                النشأة والمسار التاريخي:
                              </span>
                              <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed">
                                {activeDistrict.historyOverview}
                              </p>
                            </div>
                          )}
                          {activeDistrict.historyMilestones && activeDistrict.historyMilestones.length > 0 && (
                            <div className="pt-2">
                              <TagList
                                title="محطات وأحداث مفصلية في تاريخ المديرية:"
                                items={activeDistrict.historyMilestones}
                                variant="pure-text"
                                color="emerald"
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* TAB 2: GEOGRAPHY & NATURE */}
                      {activeSubTab === "nature" && (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                              التضاريس والموقع الجغرافي:
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed">
                              {activeDistrict.geography}
                            </p>
                          </div>
                          {activeDistrict.climateAndNature && (
                            <div className="space-y-1.5 pt-1">
                              <span className="text-xs font-normal text-slate-900 font-abyan-title block">
                                المناخ والطبيعة البيئية:
                              </span>
                              <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed">
                                {activeDistrict.climateAndNature}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* TAB 3: PIONEERS & FIGURES */}
                      {activeSubTab === "pioneers" && (
                        <div className="space-y-4">
                          <h4 className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block border-none">
                            أعلام وشخصيات المديرية الوطنية والتاريخية:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {activeDistrict.pioneersCardList && activeDistrict.pioneersCardList.length > 0 ? (
                              activeDistrict.pioneersCardList.map((pioneer) => (
                                <UniversalCard
                                  key={pioneer.id}
                                  variant="pioneer"
                                  onClick={() =>
                                    setSelectedMediaItem({
                                      id: pioneer.id,
                                      title: pioneer.title,
                                      subtitle: pioneer.subtitle,
                                      fullBiography: pioneer.fullBiography || pioneer.description,
                                      categoryLabel: `رمز تاريخي • مديرية ${activeDistrict.name}`,
                                      location: activeDistrict.name,
                                      year: "رواد أبين",
                                      bgGradient: pioneer.bgGradient,
                                      image: pioneer.image,
                                    })
                                  }
                                  data={{
                                    title: pioneer.title,
                                    category: `رمز تاريخي • ${activeDistrict.name}`,
                                    description: pioneer.subtitle || pioneer.description,
                                    location: activeDistrict.name,
                                    era: "رواد أبين",
                                    bgGradient: pioneer.bgGradient,
                                    image: pioneer.image,
                                  }}
                                />
                              ))
                            ) : (
                              activeDistrict.famousPioneers?.map((pioneer, idx) => (
                                <UniversalCard
                                  key={idx}
                                  variant="pioneer"
                                  onClick={() =>
                                    setSelectedMediaItem({
                                      id: `famous-${idx}`,
                                      title: pioneer,
                                      subtitle: `رمز وعلم من أعلام مديرية ${activeDistrict.name}`,
                                      fullBiography: `${pioneer} هو أحد أعمدة وشخصيات مديرية ${activeDistrict.name} البارزة في التاريخ والتراث الأبيني.`,
                                      categoryLabel: `علم بالمديرية • ${activeDistrict.name}`,
                                      location: activeDistrict.name,
                                      year: "رواد أبين",
                                      bgGradient: "from-emerald-950 via-slate-800 to-slate-900",
                                    })
                                  }
                                  data={{
                                    title: pioneer,
                                    category: `علم بالمديرية • ${activeDistrict.name}`,
                                    description: `رمز وعلم من أعلام مديرية ${activeDistrict.name}`,
                                    location: activeDistrict.name,
                                    era: "رواد أبين",
                                    bgGradient: "from-emerald-950 via-slate-800 to-slate-900",
                                  }}
                                />
                              ))
                            )}
                          </div>
                        </div>
                      )}

                      {/* TAB 4: SITES & LANDMARKS */}
                      {activeSubTab === "sites" && (
                        <div className="space-y-4">
                          <h4 className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block border-none">
                            الشواهد والمعالم والحصون الأثرية بالمديرية:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {activeDistrict.sitesCardList && activeDistrict.sitesCardList.length > 0 ? (
                              activeDistrict.sitesCardList.map((site) => (
                                <UniversalCard
                                  key={site.id}
                                  variant="food"
                                  onClick={() =>
                                    setSelectedMediaItem({
                                      id: site.id,
                                      title: site.title,
                                      subtitle: site.subtitle,
                                      fullBiography: site.fullBiography || site.description,
                                      categoryLabel: `معلم أثري • مديرية ${activeDistrict.name}`,
                                      location: activeDistrict.name,
                                      bgGradient: site.bgGradient,
                                      image: site.image,
                                    })
                                  }
                                  data={{
                                    title: site.title,
                                    category: `معلم أثري • ${activeDistrict.name}`,
                                    description: site.subtitle || site.description,
                                    location: activeDistrict.name,
                                    bgGradient: site.bgGradient,
                                    image: site.image,
                                  }}
                                />
                              ))
                            ) : (
                              activeDistrict.landmarks.map((landmark, idx) => (
                                <UniversalCard
                                  key={idx}
                                  variant="food"
                                  onClick={() =>
                                    setSelectedMediaItem({
                                      id: `landmark-${idx}`,
                                      title: landmark,
                                      subtitle: `معلم بارز في مديرية ${activeDistrict.name}`,
                                      fullBiography: `${landmark} أحد المعالم والشواهد الجغرافية والتاريخية البارزة في مديرية ${activeDistrict.name}.`,
                                      categoryLabel: `معلم بارز • مديرية ${activeDistrict.name}`,
                                      location: activeDistrict.name,
                                      bgGradient: "from-emerald-950 via-sky-900 to-slate-900",
                                    })
                                  }
                                  data={{
                                    title: landmark,
                                    category: `معلم بارز • ${activeDistrict.name}`,
                                    description: `معلم بارز في مديرية ${activeDistrict.name}`,
                                    location: activeDistrict.name,
                                    bgGradient: "from-emerald-950 via-sky-900 to-slate-900",
                                  }}
                                />
                              ))
                            )}
                          </div>
                        </div>
                      )}

                      {/* TAB 5: ECONOMY & CROPS */}
                      {activeSubTab === "economy" && (
                        <div className="space-y-5">
                          {activeDistrict.economyDetails && (
                            <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed">
                              {activeDistrict.economyDetails}
                            </p>
                          )}
                          <h4 className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block border-none">
                            أبرز المحاصيل والمنتجات الزراعية والحيوانية:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {activeDistrict.cropsCardList && activeDistrict.cropsCardList.length > 0 ? (
                              activeDistrict.cropsCardList.map((crop) => (
                                <UniversalCard
                                  key={crop.id}
                                  variant="food"
                                  onClick={() =>
                                    setSelectedMediaItem({
                                      id: crop.id,
                                      title: crop.title,
                                      subtitle: crop.subtitle,
                                      fullBiography: crop.fullBiography || crop.description,
                                      categoryLabel: `خيرات الأرض • مديرية ${activeDistrict.name}`,
                                      location: activeDistrict.name,
                                      bgGradient: crop.bgGradient,
                                      image: crop.image,
                                    })
                                  }
                                  data={{
                                    title: crop.title,
                                    category: `خيرات الأرض • ${activeDistrict.name}`,
                                    description: crop.subtitle || crop.description,
                                    location: activeDistrict.name,
                                    bgGradient: crop.bgGradient,
                                    image: crop.image,
                                  }}
                                />
                              ))
                            ) : (
                              activeDistrict.crops.map((crop, idx) => (
                                <UniversalCard
                                  key={idx}
                                  variant="food"
                                  onClick={() =>
                                    setSelectedMediaItem({
                                      id: `crop-${idx}`,
                                      title: crop,
                                      subtitle: `محصول وثروة خصيبة في ${activeDistrict.name}`,
                                      fullBiography: `${crop} ركن أساسي من الثروات والمحاصيل التي تعتز بها مديرية ${activeDistrict.name}.`,
                                      categoryLabel: `خيرات الأرض • مديرية ${activeDistrict.name}`,
                                      location: activeDistrict.name,
                                      bgGradient: "from-emerald-950 via-slate-800 to-sky-900",
                                    })
                                  }
                                  data={{
                                    title: crop,
                                    category: `خيرات الأرض • ${activeDistrict.name}`,
                                    description: `محصول وثروة خصيبة في ${activeDistrict.name}`,
                                    location: activeDistrict.name,
                                    bgGradient: "from-emerald-950 via-slate-800 to-sky-900",
                                  }}
                                />
                              ))
                            )}
                          </div>
                        </div>
                      )}

                      {/* TAB 6: CULTURE & TRADITIONS */}
                      {activeSubTab === "culture" && (
                        <div className="space-y-5">
                          {activeDistrict.traditionsAndCulture && (
                            <p className="text-xs sm:text-sm text-slate-700 font-abyan-body font-normal leading-relaxed">
                              {activeDistrict.traditionsAndCulture}
                            </p>
                          )}
                          <div className="space-y-3">
                            <h4 className="text-xs sm:text-sm font-normal text-[#10b981] font-abyan-title block border-none">
                              الفنون الشعبية وأصالة الموروث الأبيني:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {activeDistrict.heritageCardList && activeDistrict.heritageCardList.length > 0 ? (
                                activeDistrict.heritageCardList.map((item) => (
                                  <UniversalCard
                                    key={item.id}
                                    variant="food"
                                    onClick={() =>
                                      setSelectedMediaItem({
                                        id: item.id,
                                        title: item.title,
                                        subtitle: item.subtitle,
                                        fullBiography: item.fullBiography || item.description,
                                        categoryLabel: `موروث وفلكلور • مديرية ${activeDistrict.name}`,
                                        location: activeDistrict.name,
                                        bgGradient: item.bgGradient,
                                        image: item.image,
                                      })
                                    }
                                    data={{
                                      title: item.title,
                                      category: `موروث وفلكلور • ${activeDistrict.name}`,
                                      description: item.subtitle || item.description,
                                      location: activeDistrict.name,
                                      bgGradient: item.bgGradient,
                                      image: item.image,
                                    }}
                                  />
                                ))
                              ) : (
                                activeDistrict.folkHeritage?.map((item, idx) => (
                                  <UniversalCard
                                    key={idx}
                                    variant="food"
                                    onClick={() =>
                                      setSelectedMediaItem({
                                        id: `heritage-${idx}`,
                                        title: item,
                                        subtitle: `موروث وفلكلور أصيل في ${activeDistrict.name}`,
                                        fullBiography: `${item} فن وموروث فلكلوري شفاهي يتوارثه أهالي مديرية ${activeDistrict.name}.`,
                                        categoryLabel: `موروث وفلكلور • مديرية ${activeDistrict.name}`,
                                        location: activeDistrict.name,
                                        bgGradient: "from-sky-950 via-emerald-950 to-slate-900",
                                      })
                                    }
                                    data={{
                                      title: item,
                                      category: `موروث وفلكلور • ${activeDistrict.name}`,
                                      description: `موروث وفلكلور أصيل في ${activeDistrict.name}`,
                                      location: activeDistrict.name,
                                      bgGradient: "from-sky-950 via-emerald-950 to-slate-900",
                                    }}
                                  />
                                ))
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 7: VILLAGES & TOWNS */}
                      {activeSubTab === "villages" && (
                        <div className="pt-1">
                          <TagList
                            title="أبرز القرى والبلدات والمناطق بالمديرية:"
                            items={activeDistrict.villages}
                            variant="pill"
                            color="gradient"
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </SmartContainer>
      </main>

      {/* Unified Media Viewer Modal Preview */}
      <UnifiedMediaViewer item={selectedMediaItem} onClose={() => setSelectedMediaItem(null)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
