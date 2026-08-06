import React from "react";
import PortalService from "@/services/portalService";
import GalleryClient from "@/components/features/gallery/GalleryClient";

export default async function GalleryDataWrapper() {
  const initialCategories = PortalService.getGalleryCategories();
  const galleryItems = PortalService.getGalleryArchive();

  return (
    <GalleryClient
      initialCategories={initialCategories}
      galleryItems={galleryItems}
    />
  );
}
