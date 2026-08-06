import React, { Suspense } from "react";
import GalleryDataWrapper from "./GalleryDataWrapper";
import { PageSkeleton } from "@/components/ui/Skeletons";

export default function GalleryPage() {
  return (
    <Suspense fallback={<PageSkeleton gridType="cards" count={6} />}>
      <GalleryDataWrapper />
    </Suspense>
  );
}
