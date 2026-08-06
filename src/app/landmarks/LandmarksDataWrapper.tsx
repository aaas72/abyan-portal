import React from "react";
import PortalService from "@/services/portalService";
import LandmarksClient from "@/components/features/landmarks/LandmarksClient";

export default async function LandmarksDataWrapper() {
  // Deliberate artificial delay for inspecting Purple Geometric Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Layer 2: Fetch data from backend service / PortalService
  const landmarkCategories = PortalService.getLandmarkCategories();

  return <LandmarksClient initialData={landmarkCategories} />;
}
