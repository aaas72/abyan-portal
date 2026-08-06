import { z } from "zod";

/**
 * 1. Photo & Visual Card Schema
 */
export const PhotoCardSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  tag: z.string().min(1),
  location: z.string().min(1),
  description: z.string().min(1),
  bgGradient: z.string().min(1),
});
export type PhotoCard = z.infer<typeof PhotoCardSchema>;

/**
 * 2. Landmark Category Schema
 */
export const LandmarkCategorySchema = z.object({
  id: z.string().min(1),
  categoryName: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  keyLandmarks: z.array(z.string()),
  details: z.array(z.string()),
  photoCards: z.array(PhotoCardSchema).optional(),
});
export type LandmarkCategory = z.infer<typeof LandmarkCategorySchema>;

/**
 * 3. Pioneer Figure & Category Schema
 */
export const PioneerFigureSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  era: z.string().min(1),
  location: z.string().min(1),
  biography: z.string().min(1),
  quote: z.string().optional(),
  bgGradient: z.string().min(1),
});
export type PioneerFigure = z.infer<typeof PioneerFigureSchema>;

export const PioneerCategorySchema = z.object({
  id: z.string().min(1),
  categoryName: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  figures: z.array(PioneerFigureSchema),
});
export type PioneerCategory = z.infer<typeof PioneerCategorySchema>;

/**
 * 4. Folk Heritage & Audio/Cuisine Schema
 */
export const AudioTrackSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  artist: z.string().min(1),
  category: z.string().min(1),
  duration: z.string().min(1),
  lyricsExcerpt: z.string().min(1),
});
export type AudioTrack = z.infer<typeof AudioTrackSchema>;

export const VisualShowcaseSchema = z.object({
  title: z.string().min(1),
  tag: z.string().min(1),
  description: z.string().min(1),
  bgGradient: z.string().min(1),
});
export type VisualShowcase = z.infer<typeof VisualShowcaseSchema>;

export const CultureCategorySchema = z.object({
  id: z.string().min(1),
  categoryName: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  excerpts: z.array(z.string()),
  features: z.array(z.string()),
  audioTrack: AudioTrackSchema.optional(),
  visualShowcase: VisualShowcaseSchema.optional(),
  foodPhotoCards: z.array(PhotoCardSchema).optional(),
});
export type CultureCategory = z.infer<typeof CultureCategorySchema>;

/**
 * 5. Economy Pillar Schema
 */
export const EconomyPillarSchema = z.object({
  id: z.string().min(1),
  pillarName: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  keyProducts: z.array(z.string()),
  details: z.array(z.string()),
  photoCards: z.array(PhotoCardSchema).optional(),
});
export type EconomyPillar = z.infer<typeof EconomyPillarSchema>;

export const LandmarkDetailSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.string().optional(),
  description: z.string().min(1),
  image: z.string().optional(),
  bgGradient: z.string().optional(),
});
export type LandmarkDetail = z.infer<typeof LandmarkDetailSchema>;

export const PioneerDetailSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  era: z.string().optional(),
  description: z.string().min(1),
  image: z.string().optional(),
  bgGradient: z.string().optional(),
});
export type PioneerDetail = z.infer<typeof PioneerDetailSchema>;

export const DistrictCardItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().min(1),
  fullBiography: z.string().optional(),
  image: z.string().optional(),
  bgGradient: z.string().optional(),
});
export type DistrictCardItem = z.infer<typeof DistrictCardItemSchema>;

/**
 * 6. District Item Schema
 */
export const DistrictItemSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  title: z.string().min(1),
  region: z.string().min(1),
  regionLabel: z.string().min(1),
  capital: z.string().min(1),
  areaKm2: z.string().min(1),
  areaPercentage: z.string().min(1),
  crops: z.array(z.string()),
  landmarks: z.array(z.string()),
  villages: z.array(z.string()),
  description: z.string().min(1),
  geography: z.string().min(1),
  oldName: z.string().optional(),
  historyOverview: z.string().optional(),
  historyMilestones: z.array(z.string()).optional(),
  climateAndNature: z.string().optional(),
  famousPioneers: z.array(z.string()).optional(),
  pioneersDetails: z.array(z.string()).optional(),
  historicalSites: z.array(z.string()).optional(),
  economyDetails: z.string().optional(),
  naturalResources: z.array(z.string()).optional(),
  traditionsAndCulture: z.string().optional(),
  folkHeritage: z.array(z.string()).optional(),
  landmarksList: z.array(LandmarkDetailSchema).optional(),
  pioneersList: z.array(PioneerDetailSchema).optional(),
  pioneersCardList: z.array(DistrictCardItemSchema).optional(),
  sitesCardList: z.array(DistrictCardItemSchema).optional(),
  cropsCardList: z.array(DistrictCardItemSchema).optional(),
  heritageCardList: z.array(DistrictCardItemSchema).optional(),
});
export type DistrictItem = z.infer<typeof DistrictItemSchema>;

/**
 * 7. History Era Schema
 */
export const HistoryEraSchema = z.object({
  id: z.string().min(1),
  timeframe: z.string().min(1),
  eraTitle: z.string().min(1),
  historicalCapital: z.string().min(1),
  shortSummary: z.string().min(1),
  fullDescription: z.string().min(1),
  keyEvents: z.array(z.string()),
  notableLandmarks: z.array(z.string()),
});
export type HistoryEra = z.infer<typeof HistoryEraSchema>;

/**
 * 8. Archive Item Schema
 */
export const ArchiveItemSchema = z.object({
  id: z.string().min(1),
  category: z.string().min(1),
  categoryLabel: z.string().min(1),
  title: z.string().min(1),
  year: z.string().min(1),
  location: z.string().min(1),
  aspectRatio: z.string().min(1),
  bgGradient: z.string().min(1),
  description: z.string().min(1),
});
export type ArchiveItem = z.infer<typeof ArchiveItemSchema>;

/**
 * 9. Home Highlight Item Schema
 */
export const HighlightItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
  linkText: z.string().min(1),
  href: z.string().min(1),
});
export type HighlightItem = z.infer<typeof HighlightItemSchema>;

/**
 * 10. Unified Media Viewer Item Schema
 */
export const MediaItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  categoryLabel: z.string().optional(),
  year: z.string().optional(),
  location: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  fullBiography: z.string().optional(),
  bgGradient: z.string().optional(),
  image: z.string().optional(),
});
export type MediaItem = z.infer<typeof MediaItemSchema>;

/**
 * 11. About Pillar Item Schema
 */
export const AboutPillarItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});
export type AboutPillarItem = z.infer<typeof AboutPillarItemSchema>;
