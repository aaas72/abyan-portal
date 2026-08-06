import React from "react";
import PortalService from "@/services/portalService";
import CultureClient from "@/components/features/culture/CultureClient";

export default async function CultureDataWrapper() {
  // Deliberate artificial delay for inspecting Purple Geometric Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const initialCategories = PortalService.getCultureCategories();
  const folkAudioTracks = PortalService.getFolkAudioTracks();

  return (
    <CultureClient
      initialCategories={initialCategories}
      folkAudioTracks={folkAudioTracks}
    />
  );
}
