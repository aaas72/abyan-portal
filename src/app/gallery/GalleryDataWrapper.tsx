import React from "react";
import PortalService from "@/services/portalService";
import GalleryClient from "@/components/features/gallery/GalleryClient";

export default async function GalleryDataWrapper() {
  // Deliberate artificial delay for inspecting Purple Geometric Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const initialCategories = PortalService.getGalleryCategories();
  const galleryItems = PortalService.getGalleryArchive();

  return (
    <GalleryClient
      initialCategories={initialCategories}
      galleryItems={galleryItems}
    />
  );
}
