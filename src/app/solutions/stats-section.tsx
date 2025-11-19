"use client";

import { useEffect, useRef, useState } from "react";
import svgPaths from "../../imports/svg-0dlgmqgi5c";

// Types
interface StatCardProps {
  value: string;
  description: string;
}

// Constants
const GRADIENT_STYLE = {
  WebkitTextFillColor: "transparent",
  backgroundImage: "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
} as const;

const STATS_DATA: StatCardProps[] = [
  {
    value: "+25%",
    description: "Improved Production Efficiency",
  },
  {
    value: "-30%",
    description: "Reduction in Tool Downtime",
  },
  {
    value: "+20%",
    description: "Higher Quality Accuracy",
  },
  {
    value: "-40%",
    description: "Reduction in Unplanned Maintenance",
  },
];

// Custom Hook for Intersection Observer
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isInView based on whether element is intersecting
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isInView };
}

// Custom Hook for Number Animation
function useCountAnimation(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset count when animation should stop
    if (!shouldStart) {
      setCount(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (end - startValue) * easeOutQuart;

      setCount(Math.floor(currentCount));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
}

// Components
function StatsHeader() {
  return (
    <div className="flex flex-col gap-3 items-center w-full max-w-[680px] px-4">
      <h2 className="font-Bold text-[#1a1a1a] text-center text-3xl sm:text-4xl lg:text-[42px] leading-tight sm:leading-[50px]">
        Impact That Drives Results
      </h2>
      <p className="font-medium text-[#666666] text-center text-base sm:text-[17px] leading-relaxed">
        Turning Data into Decisions - Real, Measurable Impact Across Every Layer
        of Your Factory.
      </p>
    </div>
  );
}

function AnimatedValue({ value, isInView }: { value: string; isInView: boolean }) {
  // Parse the value to extract prefix, number, and suffix
  const match = value.match(/^([+-]?)(\d+)(%?)$/);

  if (!match) {
    // If pattern doesn't match, return the original value
    return <>{value}</>;
  }

  const [, prefix, numberStr, suffix] = match;
  const targetNumber = parseInt(numberStr, 10);

  const animatedCount = useCountAnimation(targetNumber, 2000, isInView);

  return (
    <>
      {prefix}
      {animatedCount}
      {suffix}
    </>
  );
}

function StatCard({ value, description, isInView }: StatCardProps & { isInView: boolean }) {
  return (
    <div className="flex flex-col gap-5 items-center rounded-[20px] p-6 sm:p-8 w-full">
      <p
        className="font-bold leading-none text-5xl sm:text-6xl lg:text-[72px] tracking-[-2px] bg-clip-text"
        style={GRADIENT_STYLE}
      >
        <AnimatedValue value={value} isInView={isInView} />
      </p>
      <p className="font-medium text-[#333333] text-center text-base sm:text-[17px] leading-normal">
        {description}
      </p>
    </div>
  );
}

function StatsGrid() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
      {STATS_DATA.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          description={stat.description}
          isInView={isInView}
        />
      ))}
    </div>
  );
}

function Stats() {
  return (
    <div
      className="bg-[#fafbfc] flex flex-col gap-12 lg:gap-16 items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-12 sm:py-16 lg:py-20 relative w-full"
      data-name="Stats"
    >
      <div
        className="absolute h-full max-h-[527px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1512px] opacity-40 pointer-events-none"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1512 527"
        >
          <g id="Union">
            <path d={svgPaths.p3f018400} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.p2b734600}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p398dd280}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p1a274e00} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.p23f14040}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p34a99e00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pf3bbc00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p28087c72}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p37aab280} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.p2aa94d00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pa3ec900}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3cc52000}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3c1b1700}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p10484280}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p29445b00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p43f92f0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p233a5b80} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.p116a7080}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p1d0b7420} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.p47d0580}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p100c3380} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.p14028e00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1e720c0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3296b091}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1d640d00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3fb15980}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p18751c00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p29adb00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p357ec4c0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pa5430f0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p2568ff80}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pc88b380}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p29314500} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.p3eaefcf0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.pc2dfb00} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.p22d6d000}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p30a52480}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p176d2480}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.pda9d280} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.p1fb78d00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pb1c700}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1c770580}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p4b3d200}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p24ff5520}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p38c83180}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3a201f00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p31823f80}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pa53c3f0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p17d6c690}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1195f500}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p56c3100}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1fab8080}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pd621500}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p14f5a100}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1ae68d80}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p31303a00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.peb721c0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p38508100}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1c7850f0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p20cecd00} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.p34c0cf0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p15bfc180}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p7403380}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p30670a00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p123d4880} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.p1ac83900}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p37f26680} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.p34e3000}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p8007780}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.pc3ff780}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p38390b00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p17cf8700} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.p8613780}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p21f7f980}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p2e26e580}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1ba2f500}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p32969a20}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p2dcb7d80}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p2e7a5830}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3086b580}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p28d9cf70}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p25cf77b1} fill="#00A55E" fillOpacity="0.1" />
            <path
              d={svgPaths.ped42f00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p89cba20}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p3de34500} fill="#00A55E" fillOpacity="0.1" />
            <path d={svgPaths.p20f9b980} fill="#00A55E" fillOpacity="0.1" />
            <path d={svgPaths.p24074180} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.p126e78f0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3afd5d00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p1d349d00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p2fd78c80}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p12692800}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p32e6d970}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p17849e80}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3b266300}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p3d8cd400}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path d={svgPaths.p26bffb00} fill="#D3EEFF" fillOpacity="0.3" />
            <path
              d={svgPaths.pd8bcb00}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p14c58af0}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p9f4400}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p864800}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
            <path
              d={svgPaths.p2154c390}
              fill="var(--fill-0, #D3EEFF)"
              fillOpacity="0.3"
            />
          </g>
        </svg>
      </div>
      <StatsHeader />
      <StatsGrid />
    </div>
  );
}

export default Stats;
