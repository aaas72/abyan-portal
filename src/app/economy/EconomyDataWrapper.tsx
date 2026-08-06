import React from "react";
import PortalService from "@/services/portalService";
import EconomyClient from "@/components/features/economy/EconomyClient";

export default async function EconomyDataWrapper() {
  const initialPillars = PortalService.getEconomyPillars();

  return <EconomyClient initialPillars={initialPillars} />;
}
