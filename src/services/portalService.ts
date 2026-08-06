import { landmarkCategoriesData } from "@/data/landmarksData";
import { pioneersCategoriesData } from "@/data/pioneersData";
import { cultureCategoriesData, folkAudioTracksData } from "@/data/cultureData";
import { economyPillarsData } from "@/data/economyData";
import { districtsData, districtRegionsData } from "@/data/districtsData";
import { historyErasData, timelineErasData, TimelineEraItem } from "@/data/historyData";
import { galleryArchiveData, galleryCategoriesData } from "@/data/galleryData";
import { homeHighlightsData } from "@/data/highlightsData";
import { aboutPillarsData, aboutValuesData, aboutScopesData, aboutStatsData } from "@/data/aboutData";

import {
  LandmarkCategorySchema,
  LandmarkCategory,
  PioneerCategorySchema,
  PioneerCategory,
  CultureCategorySchema,
  CultureCategory,
  EconomyPillarSchema,
  EconomyPillar,
  DistrictItemSchema,
  DistrictItem,
  HistoryEraSchema,
  HistoryEra,
  ArchiveItemSchema,
  ArchiveItem,
  HighlightItemSchema,
  HighlightItem,
  AboutPillarItemSchema,
  AboutPillarItem,
} from "@/types/schemas";

export class PortalService {
  /**
   * Fetch & Validate all Landmark Categories at Runtime via Zod
   */
  static getLandmarkCategories(): LandmarkCategory[] {
    return LandmarkCategorySchema.array().parse(landmarkCategoriesData);
  }

  /**
   * Fetch & Validate all Pioneer Categories at Runtime via Zod
   */
  static getPioneerCategories(): PioneerCategory[] {
    return PioneerCategorySchema.array().parse(pioneersCategoriesData);
  }

  /**
   * Fetch & Validate all Culture & Folk Heritage Categories at Runtime via Zod
   */
  static getCultureCategories(): CultureCategory[] {
    return CultureCategorySchema.array().parse(cultureCategoriesData);
  }

  /**
   * Fetch & Validate all Economy Pillars at Runtime via Zod
   */
  static getEconomyPillars(): EconomyPillar[] {
    return EconomyPillarSchema.array().parse(economyPillarsData);
  }

  /**
   * Fetch & Validate all 11 Districts at Runtime via Zod
   */
  static getAllDistricts(): DistrictItem[] {
    return DistrictItemSchema.array().parse(districtsData);
  }

  /**
   * Fetch & Validate all Historical Eras at Runtime via Zod
   */
  static getHistoryEras(): HistoryEra[] {
    return HistoryEraSchema.array().parse(historyErasData);
  }

  /**
   * Fetch Timeline Eras for Homepage Timeline
   */
  static getTimelineEras(): TimelineEraItem[] {
    return timelineErasData;
  }

  /**
   * Fetch & Validate Gallery & Digital Archive Items at Runtime via Zod
   */
  static getGalleryArchive(): ArchiveItem[] {
    return ArchiveItemSchema.array().parse(galleryArchiveData);
  }

  /**
   * Fetch & Validate Home Page Cultural Highlights at Runtime via Zod
   */
  static getHomeHighlights(): HighlightItem[] {
    return HighlightItemSchema.array().parse(homeHighlightsData);
  }

  /**
   * Fetch & Validate About Portal Pillars at Runtime via Zod
   */
  static getAboutPillars(): AboutPillarItem[] {
    return AboutPillarItemSchema.array().parse(aboutPillarsData);
  }

  /**
   * Fetch About Values Data
   */
  static getAboutValues() {
    return aboutValuesData;
  }

  /**
   * Fetch About Scopes Data
   */
  static getAboutScopes() {
    return aboutScopesData;
  }

  /**
   * Fetch About Stats Data
   */
  static getAboutStats() {
    return aboutStatsData;
  }

  /**
   * Fetch District Regions Filters Data
   */
  static getDistrictRegions() {
    return districtRegionsData;
  }

  /**
   * Fetch Gallery Categories Data
   */
  static getGalleryCategories() {
    return galleryCategoriesData;
  }

  /**
   * Fetch Folk Audio Tracks Data
   */
  static getFolkAudioTracks() {
    return folkAudioTracksData;
  }
}

export default PortalService;
