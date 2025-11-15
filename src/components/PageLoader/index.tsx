"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface PageLoaderProps {
  onLoadComplete?: () => void;
}

export default function PageLoader({ onLoadComplete }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadComplete?.();
    }, 2000); // 2 seconds minimum load time

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B8DB]/10 via-white to-[#0098d4]/10 animate-pulse" />

      {/* Loader content */}
      <div className="relative flex flex-col items-center justify-center gap-6 z-10">
        {/* GIF Loader */}
        <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]">
          <Image
            src="/assets/loader/eagle-loader.gif"
            alt="Loading..."
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>

        {/* Loading text with animation */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0098d4] animate-pulse">
            Loading EAGLE
          </h2>

          {/* Loading dots animation */}
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-[#00B8DB] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-3 h-3 bg-[#0098d4] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-3 h-3 bg-[#00B8DB] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-[200px] sm:w-[250px] md:w-[300px] h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00B8DB] to-[#0098d4] animate-[loading_2s_ease-in-out]"
               style={{
                 animation: 'loadingBar 2s ease-in-out forwards'
               }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
