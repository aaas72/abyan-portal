import React, { Suspense } from "react";
import LandmarksDataWrapper from "./LandmarksDataWrapper";
import { PageSkeleton } from "@/components/ui/Skeletons";

export default function LandmarksPage() {
  return (
    <Suspense fallback={<PageSkeleton gridType="cards" count={6} />}>
      <LandmarksDataWrapper />
    </Suspense>
  );
}
