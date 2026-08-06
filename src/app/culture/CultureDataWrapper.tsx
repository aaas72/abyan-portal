import React from "react";
import PortalService from "@/services/portalService";
import CultureClient from "@/components/features/culture/CultureClient";

export default async function CultureDataWrapper() {
  const initialCategories = PortalService.getCultureCategories();
  const folkAudioTracks = PortalService.getFolkAudioTracks();

  return (
    <CultureClient
      initialCategories={initialCategories}
      folkAudioTracks={folkAudioTracks}
    />
  );
}
