import svgPaths from "../../imports/svg-6sw94kd16o";
// import imgRectangle33 from "figma:asset/b36ab99564a2aa274c64136aab7874678f4f2562.png";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  title: string;
  description: string;

}

const imgRectangle33 = "/assets/platform/analytics/5b09b3ed17e7e67dbdf8354dab5988545de2374f.png";
// Custom hook for animating numbers
function useAnimatedCounter(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
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

function StatCard({ value, title, description, shouldAnimate }: StatCardProps & { shouldAnimate: boolean }) {
  // Parse the value to extract number and format
  const parseValue = (val: string) => {
    // Remove commas and spaces for parsing
    const cleanVal = val.replace(/,/g, '');
    
    if (val.includes('%')) {
      return { number: parseFloat(cleanVal), suffix: '%', decimals: cleanVal.includes('.') ? 1 : 0 };
    } else if (val.includes('hrs')) {
      return { number: parseFloat(cleanVal), suffix: ' hrs', decimals: 1 };
    } else if (val.includes(',')) {
      return { number: parseInt(cleanVal), suffix: '', decimals: 0, useCommas: true };
    }
    return { number: parseFloat(cleanVal), suffix: '', decimals: 0 };
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[250px]">
      <p className="bg-clip-text font-['Gilroy:Semibold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[68px] text-nowrap tracking-[-1.36px] whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)" }}>
        {displayValue}
      </p>
      <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-nowrap w-full whitespace-pre">
        <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px]">{title}</p>
        <p className="font-['Gilroy:Medium',sans-serif] leading-[18px] relative shrink-0 text-[#8e8e8e] text-[16px]">{description}</p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[600px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[45px] relative shrink-0 text-[#282828] text-[36px] w-[335px]">Performance at a Glance</p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[23px] relative shrink-0 text-[#8e8e8e] text-[16px] w-[542px]">{`Get a quick view of your factory's most important benchmarks - overall equipment efficiency, production yield, downtime savings, and throughput. `}</p>
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
          if (entry.isIntersecting && !shouldAnimate) {
            setShouldAnimate(true);
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
  }, [shouldAnimate]);
  
  return (
    <div ref={gridRef} className="content-start flex flex-wrap gap-[120px] items-start relative shrink-0 w-[620px]">
      <StatCard 
        value="78%" 
        title="Average OEE" 
        description="Measured across pilot lines" 
        shouldAnimate={shouldAnimate}
      />
      <StatCard 
        value="92%" 
        title="Yield (APQ)" 
        description="Availability · Productivity · Quality" 
        shouldAnimate={shouldAnimate}
      />
      <StatCard 
        value="3.2 hrs" 
        title="Downtime Saved" 
        description="Per shift (estimated)" 
        shouldAnimate={shouldAnimate}
      />
      <StatCard 
        value="1,240" 
        title="Pcs Throughput" 
        description="Pieces / shift (avg)" 
        shouldAnimate={shouldAnimate}
      />
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div className="absolute flex h-[527px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[1512px]">
      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
        <div className="h-[527px] relative w-[1512px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1512 527">
            <g id="Union">
              <path d={svgPaths.p3f018400} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p2b734600} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p398dd280} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1a274e00} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p23f14040} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p34a99e00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pf3bbc00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p28087c72} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p37aab280} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p2aa94d00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pa3ec900} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3cc52000} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3c1b1700} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p10484280} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p29445b00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p43f92f0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p233a5b80} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p116a7080} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1d0b7420} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p47d0580} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p100c3380} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p14028e00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1e720c0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3296b091} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1d640d00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3fb15980} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p18751c00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p29adb00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p357ec4c0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pa5430f0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p2568ff80} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pc88b380} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p29314500} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p3eaefcf0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pc2dfb00} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p22d6d000} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p30a52480} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p176d2480} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pda9d280} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p1fb78d00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pb1c700} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1c770580} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p4b3d200} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p24ff5520} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p38c83180} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3a201f00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p31823f80} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pa53c3f0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p17d6c690} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1195f500} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p56c3100} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1fab8080} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pd621500} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p14f5a100} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1ae68d80} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p31303a00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.peb721c0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p38508100} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1c7850f0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p20cecd00} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p34c0cf0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p15bfc180} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p7403380} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p30670a00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p123d4880} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p1ac83900} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p37f26680} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p34e3000} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p8007780} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.pc3ff780} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p38390b00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p17cf8700} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p8613780} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p21f7f980} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p2e26e580} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1ba2f500} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p32969a20} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p2dcb7d80} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p2e7a5830} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3086b580} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p28d9cf70} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p25cf77b1} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.ped42f00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p89cba20} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3de34500} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p20f9b980} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p24074180} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.p126e78f0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3afd5d00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p1d349d00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p2fd78c80} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p12692800} fill="#00A55E" fillOpacity="0.09" />
              <path d={svgPaths.p32e6d970} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p17849e80} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3b266300} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3d8cd400} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p26bffb00} fill="#D3EEFF" fillOpacity="0.35" />
              <path d={svgPaths.pd8bcb00} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p14c58af0} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p9f4400} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p864800} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
              <path d={svgPaths.p2154c390} fill="var(--fill-0, #D3EEFF)" fillOpacity="0.35" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BottomGradient() {
  return (
    <div className="absolute bottom-0 flex h-[100px] items-center justify-center left-0 w-[1512px]">
      <div className="flex-none scale-y-[-100%]">
        <div className="h-[100px] relative w-[1512px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle33} />
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Stats">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[60px] pt-[80px] px-[100px] relative w-full">
          <BackgroundPattern />
          <BottomGradient />
          <SectionHeader />
          <StatsGrid />
        </div>
      </div>
    </div>
  );
}