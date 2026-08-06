import React, { Suspense } from "react";
import EconomyDataWrapper from "./EconomyDataWrapper";
import { PageSkeleton } from "@/components/ui/Skeletons";

export default function EconomyPage() {
  return (
    <Suspense fallback={<PageSkeleton gridType="cards" count={3} />}>
      <EconomyDataWrapper />
    </Suspense>
  );
}
