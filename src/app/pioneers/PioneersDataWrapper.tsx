import React from "react";
import PortalService from "@/services/portalService";
import PioneersClient from "@/components/features/pioneers/PioneersClient";

export default async function PioneersDataWrapper() {
  // Deliberate artificial delay for inspecting Purple Geometric Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const pioneerCategories = PortalService.getPioneerCategories();

  return <PioneersClient initialData={pioneerCategories} />;
}
