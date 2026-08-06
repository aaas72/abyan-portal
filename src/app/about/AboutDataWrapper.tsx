import React from "react";
import PortalService from "@/services/portalService";
import AboutClient from "@/components/features/about/AboutClient";

// Layer 2: async Server Component — fetches data and passes to Client
export default async function AboutDataWrapper() {
  // Deliberate delay to allow skeleton inspection during development
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const pillars = PortalService.getAboutPillars();
  const values = PortalService.getAboutValues();
  const scopes = PortalService.getAboutScopes();
  const stats = PortalService.getAboutStats();

  return (
    <AboutClient
      pillars={pillars}
      values={values}
      scopes={scopes}
      stats={stats}
    />
  );
}
