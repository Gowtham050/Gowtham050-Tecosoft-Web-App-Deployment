"use client";
import svgPaths from "../../imports/svg-9v3kh9sdih";
import { motion, type Variants } from "framer-motion";
import React from "react";

// =============================================================================
// CONSTANTS & CONFIGURATION
// =============================================================================

/** Asset paths */
const ASSETS = {
  logo: "/assets/pages/why-tecosoft/7237d837fb840eb1fdf3472a3a5d42c920a312a7.png",
  heroBackground:
    "/assets/pages/why-tecosoft/e54110e1697ad6aa53311cf3395acde3b0aeda4d.png",
} as const;

/** Hero content configuration */
const HERO_CONTENT = {
  tagline: "Where Operations Meet Intelligence",
  headline: {
    main: "Connect. Sense. Predict. ",
    highlight: "Elevate.",
  },
  description:
    "Turn scattered processes into a living, learning system. Tecosoft brings your people, tools, and data together so work flows — and results grow.",
  ctaText: "Give demo",
} as const;

/** Shared floating card animation */
const floatingCardAnimation: Variants = {
  animate: {
    x: [0, -1.2, 1.2, -1.2, 1.2, 0],
    y: [0, -1.2, 1.2, -1.2, 1.2, 0],
  },
};

const floatingCardTransition = {
  duration: 0.9,
  repeat: Infinity,
} as const;

/** Style constants */
const STYLES = {
  fontGilroySemibold: "font-['Gilroy:Semibold',sans-serif]",
  fontGilroyMedium: "font-['Gilroy:Medium',sans-serif]",
  floatingCardBase:
    "absolute bg-white content-stretch flex gap-[8px] items-center justify-center p-[12px] rounded-[8px]",
  floatingCardText:
    "css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#282828] text-[17px]",
} as const;

// =============================================================================
// TYPES
// =============================================================================

interface FloatingCardData {
  id: string;
  label: string;
  position: { left: string; top: string };
  icon: React.ComponentType;
}

interface GradientIconProps {
  svgPath: string;
  gradientId: string;
  viewBox?: string;
  gradientConfig: {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
  };
}

// =============================================================================
// REUSABLE ICON COMPONENTS
// =============================================================================

/** Reusable gradient icon component for SVG icons with linear gradients */
function GradientIcon({
  svgPath,
  gradientId,
  viewBox = "0 0 20 20",
  gradientConfig,
  fillRule,
}: GradientIconProps & { fillRule?: "evenodd" }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={viewBox}
      >
        <path
          d={svgPath}
          fill={`url(#${gradientId})`}
          {...(fillRule && { clipRule: "evenodd", fillRule: "evenodd" })}
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={gradientId}
            x1={gradientConfig.x1}
            x2={gradientConfig.x2}
            y1={gradientConfig.y1}
            y2={gradientConfig.y2}
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Arrow icon component */
function ArrowIcon() {
  return (
    <div className="relative size-[14px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <path
          d={svgPaths.p1feb4d00}
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
      </svg>
    </div>
  );
}

/** Location icon */
function LocationIcon() {
  return (
    <GradientIcon
      svgPath={svgPaths.pe041600}
      gradientId="gradient_location"
      gradientConfig={{
        x1: "18.3333",
        x2: "-1.92311",
        y1: "1.66667",
        y2: "12.2238",
      }}
    />
  );
}

/** Operations icon */
function OperationsIcon() {
  return (
    <GradientIcon
      svgPath={svgPaths.p2aa8aa80}
      gradientId="gradient_operations"
      gradientConfig={{ x1: "18", x2: "-1.13995", y1: "2", y2: "11.9752" }}
      fillRule="evenodd"
    />
  );
}

/** Tick/Check icon */
function TickIcon() {
  return (
    <GradientIcon
      svgPath={svgPaths.p3fb5f100}
      gradientId="gradient_tick"
      gradientConfig={{ x1: "19", x2: "-2.53244", y1: "1", y2: "12.2221" }}
    />
  );
}

/** Scale icon */
function ScaleIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[10%_10%_0.78%_10%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 17.845"
        >
          <path d={svgPaths.pab1b780} fill="url(#gradient_scale)" />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="gradient_scale"
              x1="16"
              x2="-3.13995"
              y1="0"
              y2="9.97524"
            >
              <stop offset="0.0644535" stopColor="#00BCEF" />
              <stop offset="0.95133" stopColor="#002363" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// =============================================================================
// FLOATING CARDS DATA
// =============================================================================

const FLOATING_CARDS_DATA: FloatingCardData[] = [
  {
    id: "one-place",
    label: "One place.",
    position: { left: "338px", top: "41px" },
    icon: LocationIcon,
  },
  {
    id: "unified-operations",
    label: "Unified operations.",
    position: { left: "13px", top: "357px" },
    icon: OperationsIcon,
  },
  {
    id: "ready-today",
    label: "Ready today.",
    position: { left: "332px", top: "282px" },
    icon: TickIcon,
  },
  {
    id: "built-to-scale",
    label: "Built to scale.",
    position: { left: "26px", top: "95px" },
    icon: ScaleIcon,
  },
];

// =============================================================================
// HERO SECTION COMPONENTS
// =============================================================================

/** Tagline badge component */
function TaglineBadge() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[60px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#07af40] border-solid inset-0 pointer-events-none rounded-[60px]"
      />
      <p
        className={`css-ew64yg font-semibold leading-[18px] not-italic relative shrink-0 text-[#0098d4] text-[13.5px]`}
      >
        {HERO_CONTENT.tagline}
      </p>
    </div>
  );
}

/** Hero headline component */
function HeroHeadline() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      <TaglineBadge />
      <h1
        className={`css-4hzbpn font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[80px] text-white w-[min-content]`}
      >
        <span className="leading-[94px]">{HERO_CONTENT.headline.main}</span>
        <span className="leading-[94px] text-[#00ff84]">
          {HERO_CONTENT.headline.highlight}
        </span>
      </h1>
    </div>
  );
}

/** Demo CTA button */
function DemoButton() {
  return (
    <button className="bg-[#07af40] content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 border-none cursor-pointer">
      <span
        className={`css-ew64yg font-semibold leading-[20px] not-italic relative shrink-0 text-[15px] text-white`}
      >
        {HERO_CONTENT.ctaText}
      </span>
      <div className="flex items-center justify-center relative shrink-0 size-[14px]">
        <div className="flex-none rotate-[-90deg]">
          <ArrowIcon />
        </div>
      </div>
    </button>
  );
}

/** Hero content section with headline, description, and CTA */
function HeroContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%-281px)] top-[172px] translate-x-[-50%] w-[750px]">
      <HeroHeadline />
      <p
        className={`css-4hzbpn  font-medium leading-[29px] min-w-full not-italic relative shrink-0 text-[21px] text-white w-[min-content]`}
      >
        {HERO_CONTENT.description}
      </p>
      <DemoButton />
    </div>
  );
}

// =============================================================================
// LOGO & DECORATIVE COMPONENTS
// =============================================================================

/** Floating logo in glass container */
function LogoContainer() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[162px] overflow-clip px-[40px] py-[30px] rounded-[200px] shadow-[0px_0px_36px_5px_rgba(255,255,255,0.16)] size-[160px] top-[145px]">
      <div className="h-[120px] relative shrink-0 w-[100px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt="Tecosoft Logo"
            className="absolute h-full left-[-0.11%] max-w-none top-0 w-[476.88%]"
            src={ASSETS.logo}
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3px_3px_20px_0px_rgba(5,128,173,0.36)]" />
    </div>
  );
}

/** Decorative gradient circles */
function GradientCircles() {
  return (
    <>
      {/* Outer circle */}
      <div className="absolute left-[42px] size-[400px] top-[25px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 400 400"
        >
          <path
            d={svgPaths.p32ded680}
            fill="url(#gradient_circle_outer)"
            fillOpacity="0.8"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="gradient_circle_outer"
              x1="314.783"
              x2="89.2395"
              y1="86.6667"
              y2="300.345"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Inner circle */}
      <div className="absolute left-[132px] size-[220px] top-[115px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 220 220"
        >
          <circle
            cx="110"
            cy="110"
            fill="url(#gradient_circle_inner)"
            fillOpacity="0.8"
            r="110"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="gradient_circle_inner"
              x1="173.13"
              x2="49.0817"
              y1="47.6667"
              y2="165.19"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

/** Logo section with decorative elements */
function LogoSection() {
  return (
    <div className="absolute contents left-[42px] top-[25px]">
      <GradientCircles />
      <LogoContainer />
    </div>
  );
}

// =============================================================================
// FLOATING CARDS
// =============================================================================

/** Reusable floating card component */
function FloatingCard({ data }: { data: FloatingCardData }) {
  const IconComponent = data.icon;

  return (
    <motion.div
      className={STYLES.floatingCardBase}
      style={{ left: data.position.left, top: data.position.top }}
      data-name={data.id}
      variants={floatingCardAnimation}
      animate="animate"
      transition={floatingCardTransition}
    >
      <IconComponent />
      <p className={STYLES.floatingCardText}>{data.label}</p>
    </motion.div>
  );
}

/** Container for all floating cards and decorative elements */
function FloatingCardsSection() {
  return (
    <div className="absolute h-[450px] left-[937px] top-[160px] w-[500px]">
      <LogoSection />
      {FLOATING_CARDS_DATA.map((cardData) => (
        <FloatingCard key={cardData.id} data={cardData} />
      ))}
    </div>
  );
}

// =============================================================================
// BACKGROUND COMPONENTS
// =============================================================================

/** Hero background image */
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img
        alt=""
        className="absolute h-[140%] left-0 max-w-none top-[-0.03%] w-full"
        src={ASSETS.heroBackground}
      />
    </div>
  );
}

/** Gradient overlay */
function GradientOverlay() {
  return (
    <div className="absolute flex h-[692px] items-center justify-center left-0 top-0 w-[1512px]">
      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
        <div
          className="h-[692px] w-[1512px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(204.592deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)",
          }}
        />
      </div>
    </div>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export function HeroSection() {
  return (
    <section
      className="h-[692px] overflow-clip relative shrink-0 w-full"
      aria-label="Hero section"
    >
      <HeroBackground />
      <GradientOverlay />

      <HeroContent />
      <FloatingCardsSection />
    </section>
  );
}
