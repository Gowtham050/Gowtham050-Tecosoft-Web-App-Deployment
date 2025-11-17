"use client";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import { getAllAssets, getCriticalAssets } from "@/config/preloadAssets";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Choose which assets to preload:
  // - getAllAssets(): Preload ALL assets (slower initial load, smoother navigation)
  // - getCriticalAssets(): Preload only critical assets (faster initial load)
  const assetsToLoad = getAllAssets(); // Change to getCriticalAssets() for faster load
  const pathname = usePathname();

  // Disable browser scroll restoration on mount
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top on pathname change (route changes) and initial load (page reload)
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate scroll
    scrollToTop();

    // Delayed scroll to ensure it works after DOM updates
    const timeoutId = setTimeout(scrollToTop, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

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
