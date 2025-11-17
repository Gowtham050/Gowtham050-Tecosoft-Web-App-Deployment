"use client";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import { getAllAssets, getCriticalAssets } from "@/config/preloadAssets";
import { usePathname } from "next/navigation";
import { useLenis } from "../../libs/react-lenis";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  // Choose which assets to preload:
  // - getAllAssets(): Preload ALL assets (slower initial load, smoother navigation)
  // - getCriticalAssets(): Preload only critical assets (faster initial load)
  const assetsToLoad = getAllAssets(); // Change to getCriticalAssets() for faster load

  const pathname: any = usePathname();
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top using Lenis for smooth scroll library compatibility
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    }
  }, [pathname, lenis]);

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
