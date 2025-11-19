'use client';

import { useEffect, useRef, useState } from "react";

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  scrollDistance?: number;
}

export function HorizontalScrollSection({ 
  children, 
  scrollDistance = 1650 
}: HorizontalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      
      // Calculate if section is in viewport
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Section is active - calculate progress
        const scrolled = Math.abs(rect.top);
        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
        setScrollProgress(progress);
      } else if (rect.bottom < windowHeight) {
        // Section has passed
        setScrollProgress(1);
      } else {
        // Section not reached yet
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate horizontal translation based on scroll progress
  const horizontalOffset = scrollProgress * scrollDistance;

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{
        height: '300vh', // Extra height to allow scrolling through horizontal content
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="h-full"
          style={{
            transform: `translateX(-${horizontalOffset}px)`,
            transition: 'none',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
