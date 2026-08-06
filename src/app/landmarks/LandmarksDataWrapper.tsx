import React from "react";
import PortalService from "@/services/portalService";
import LandmarksClient from "@/components/features/landmarks/LandmarksClient";

export default async function LandmarksDataWrapper() {
  // Layer 2: Fetch data from backend service / PortalService
  const landmarkCategories = PortalService.getLandmarkCategories();

  return <LandmarksClient initialData={landmarkCategories} />;
}
