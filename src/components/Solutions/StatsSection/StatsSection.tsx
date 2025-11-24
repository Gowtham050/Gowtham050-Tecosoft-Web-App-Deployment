import { useEffect, useRef, useState } from "react";
import { statsContent } from "../../../constants/connected-factories/production-digitization";

interface StatCardProps {
  value: string;
  title: string;
  description: string;
}
// Custom hook for animating numbers
function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  shouldStart: boolean
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

function StatCard({
  value,
  title,
  description,
  shouldAnimate,
}: StatCardProps & { shouldAnimate: boolean }) {
  // Parse the value to extract number and format
  const parseValue = (val: string) => {
    // Remove commas and spaces for parsing
    const cleanVal = val.replace(/,/g, "");

    if (val.includes("%")) {
      return {
        number: parseFloat(cleanVal),
        suffix: "%",
        decimals: cleanVal.includes(".") ? 1 : 0,
      };
    } else if (val.includes("hrs")) {
      return { number: parseFloat(cleanVal), suffix: " hrs", decimals: 1 };
    } else if (val.includes(",")) {
      return {
        number: parseInt(cleanVal),
        suffix: "",
        decimals: 0,
        useCommas: true,
      };
    }
    return { number: parseFloat(cleanVal), suffix: "", decimals: 0 };
  };

  const { number, suffix, decimals, useCommas } = parseValue(value);
  const animatedValue = useAnimatedCounter(number, 2000, shouldAnimate);

  // Format the animated value
  const formatValue = (val: number) => {
    if (useCommas) {
      return val.toLocaleString();
    }
    return decimals > 0 ? val.toFixed(decimals) : val.toString();
  };

  const displayValue = formatValue(animatedValue) + suffix;

  return (
    <div className="flex flex-col gap-3 justify-center items-center sm:items-start w-full min-w-[200px]">
      <p
        className="bg-clip-text  font-semibold  leading-tight not-italic text-5xl md:text-6xl lg:text-[68px] tracking-tight"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
        }}
      >
        {displayValue}
      </p>
      <div className="flex flex-col gap-1 items-center sm:items-start w-full">
        <p className=" font-semibold  leading-snug text-[#282828] text-base md:text-lg">
          {title}
        </p>
        <p className=" font-medium leading-relaxed text-[#8e8e8e] text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-center text-center sm:text-left sm:items-start  w-full lg:max-w-[600px] relative z-10">
      <p className=" font-semibold  leading-tight text-[#282828] text-2xl md:text-3xl lg:text-4xl">
        {statsContent.sectionTitle}
      </p>
      <p className=" font-medium  leading-relaxed text-[#8e8e8e] text-sm md:text-base">
        {statsContent.sectionDescription}
      </p>
    </div>
  );
}

function StatsGrid() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          } else {
            setShouldAnimate(false);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full lg:max-w-[650px] relative z-10 justify-items-center sm:justify-items-start"
    >
      {statsContent.stats.map((stat) => (
        <StatCard
          key={stat.id}
          value={stat.value}
          title={stat.title}
          description={stat.description}
          shouldAnimate={shouldAnimate}
        />
      ))}
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden ">
      <div className="absolute inset-0 rotate-180 w-full h-full">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100"
          src={statsContent.backgroundImage}
        />
      </div>
    </div>
  );
}

function BottomGradient() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-20 md:h-[100px] z-0">
      <div className="scale-y-[-100%] w-full h-full">
        <img
          alt=""
          className="w-full h-full object-cover pointer-events-none"
          src={statsContent.bottomGradient}
        />
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <div
      className="bg-white relative w-full min-h-[500px] md:min-h-[600px]"
      data-name="Stats"
    >
      <div className="flex flex-col items-center overflow-clip w-full h-full">
        <BackgroundPattern />
        <div className="box-border flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20 py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-24 relative w-full max-w-[1400px] mx-auto min-h-[500px] md:min-h-[600px]">
          <BottomGradient />
          <SectionHeader />
          <StatsGrid />
        </div>
      </div>
    </div>
  );
}
