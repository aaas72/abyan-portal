import React, { Suspense } from "react";
import CultureDataWrapper from "./CultureDataWrapper";
import { PageSkeleton } from "@/components/ui/Skeletons";

export default function CulturePage() {
  return (
    <Suspense fallback={<PageSkeleton gridType="cards" count={3} />}>
      <CultureDataWrapper />
    </Suspense>
  );
}
