import React from "react";
import PortalService from "@/services/portalService";
import HistoryClient from "@/components/features/history/HistoryClient";

// Layer 2: async Server Component — fetches data and passes to Client
export default async function HistoryDataWrapper() {
  // Deliberate delay to allow skeleton inspection during development
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const historyEras = PortalService.getHistoryEras();

  return <HistoryClient historyEras={historyEras} />;
}
