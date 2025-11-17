"use client";
import { useState } from "react";
import PageLoader from "@/components/PageLoader";
import { getAllAssets, getCriticalAssets } from "@/config/preloadAssets";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Choose which assets to preload:
  // - getAllAssets(): Preload ALL assets (slower initial load, smoother navigation)
  // - getCriticalAssets(): Preload only critical assets (faster initial load)
  const assetsToLoad = getAllAssets(); // Change to getCriticalAssets() for faster load

  return (
    <>
      {isLoading && (
        <PageLoader
          onLoadComplete={() => setIsLoading(false)}
          assetsToLoad={assetsToLoad}
        />
      )}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
