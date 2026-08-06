import React from "react";
import PortalService from "@/services/portalService";
import DistrictsClient from "@/components/features/districts/DistrictsClient";

export default async function DistrictsDataWrapper() {
  // Deliberate artificial delay for inspecting Purple Geometric Skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const allDistricts = PortalService.getAllDistricts();
  const regions = PortalService.getDistrictRegions();

  return <DistrictsClient allDistricts={allDistricts} regions={regions} />;
}
