import React, { Suspense } from "react";
import PioneersDataWrapper from "./PioneersDataWrapper";
import { PageSkeleton } from "@/components/ui/Skeletons";

export default function PioneersPage() {
  return (
    <Suspense fallback={<PageSkeleton gridType="pioneers" count={4} />}>
      <PioneersDataWrapper />
    </Suspense>
  );
}
