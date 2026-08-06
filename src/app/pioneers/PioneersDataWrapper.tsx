import React from "react";
import PortalService from "@/services/portalService";
import PioneersClient from "@/components/features/pioneers/PioneersClient";

export default async function PioneersDataWrapper() {
  const pioneerCategories = PortalService.getPioneerCategories();

  return <PioneersClient initialData={pioneerCategories} />;
}
