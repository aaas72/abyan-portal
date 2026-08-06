import React, { Suspense } from "react";
import DistrictsDataWrapper from "./DistrictsDataWrapper";
import { PageSkeleton } from "@/components/ui/Skeletons";

export default function DistrictsPage() {
  return (
    <Suspense fallback={<PageSkeleton gridType="districts" />}>
      <DistrictsDataWrapper />
    </Suspense>
  );
}
