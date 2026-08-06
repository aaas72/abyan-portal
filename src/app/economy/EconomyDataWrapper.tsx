import React from "react";
import PortalService from "@/services/portalService";
import EconomyClient from "@/components/features/economy/EconomyClient";

export default async function EconomyDataWrapper() {
  // Deliberate artificial delay for inspecting Purple Geometric Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const initialPillars = PortalService.getEconomyPillars();

  return <EconomyClient initialPillars={initialPillars} />;
}
