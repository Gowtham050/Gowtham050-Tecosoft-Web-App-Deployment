import React from "react";
import svgPaths from "../../imports/svg-txc4khmm90";

// ===========================
// Constants & Configuration
// ===========================

const ASSETS = {
  heroBackground:
    "/assets/pages/ai-enabled/6be83863a5fa40ccefa1725cc8f430fd0def2e3a.png",
} as const;

const COLORS = {
  primary: "#07af40",
  accent: "#00ff84",
  textLight: "#bbbbbb",
  white: "white",
} as const;

const GRADIENT_OVERLAY =
  "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(205.185deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)";

// ===========================
// Types & Interfaces
// ===========================

interface StatCardProps {
  value: string;
  description: string;
}

// ===========================
// Reusable Components
// ===========================

const ArrowIcon: React.FC = () => (
  <div className="relative size-[14px]">
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 14 14"
    >
      <path
        d={svgPaths.p1feb4d00}
        stroke={COLORS.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  </div>
);

const CTAButton: React.FC<{ label: string }> = ({ label }) => (
  <button
    className="bg-[#07af40] hover:bg-[#06a03a] transition-colors box-border flex gap-[6px] sm:gap-[8px] items-center justify-center px-[10px] sm:px-[12px] md:px-[14px] py-[8px] sm:py-[9px] md:py-[10px] whitespace-nowrap"
    aria-label={label}
  >
    <span className="font-semibold leading-[18px] sm:leading-[20px] text-[13px] sm:text-[14px] md:text-[15px] text-white">
      {label}
    </span>
    <div className="flex items-center justify-center size-[12px] sm:size-[14px] rotate-[270deg]">
      <ArrowIcon />
    </div>
  </button>
);

const Divider: React.FC = () => (
  <div className="h-0 relative w-full">
    <div className="absolute inset-[-0.63px_0]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1314 2"
      >
        <path
          d="M0.625 0.625H1312.62"
          opacity="0.4"
          stroke={COLORS.white}
          strokeLinecap="round"
          strokeWidth="1.25"
        />
      </svg>
    </div>
  </div>
);

const StatCard: React.FC<StatCardProps> = ({ value, description }) => (
  <div className="flex flex-col font-medium gap-1 items-start w-full sm:w-[140px] md:w-[160px] lg:w-[184px]">
    <p className="leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[60px] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-white tracking-[-1.12px] whitespace-nowrap">
      {value}
    </p>
    <p className="leading-[12px] sm:leading-[13px] md:leading-[14px] text-[#bbbbbb] text-[11px] sm:text-[12px] md:text-[13px]">
      {description}
    </p>
  </div>
);

// ===========================
// Section Components
// ===========================

const HeroHeading: React.FC = () => (
  <h1 className="font-semibold leading-[32px] sm:leading-[40px] md:leading-[60px] lg:leading-[80px] xl:leading-[90px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[76px] text-white w-full">
    One platform. Two superpowers:{" "}
    <span className="text-[#00ff84]">Energy Intelligence</span> &{" "}
    <span className="text-[#00ff84]">Predictive Maintenance</span>
  </h1>
);

const HeroDescription: React.FC = () => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 w-full">
    <p className="font-medium leading-[20px] sm:leading-[24px] md:leading-[26px] text-[14px] sm:text-[16px] md:text-[18px] text-white w-full sm:w-auto sm:flex-1 max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
      Unify energy and machine health under a single AI layer. Forecast demand,
      prevent failures, and automate actions across your shopfloor.
    </p>
    <CTAButton label="Request Demo" />
  </div>
);

const HeroContent: React.FC = () => (
  <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[42px] w-full">
    <HeroHeading />
    <HeroDescription />
  </div>
);

const StatsGrid: React.FC = () => {
  const stats: StatCardProps[] = [
    { value: "10‑18%", description: "Typical energy cost reduction" },
    { value: "30‑50%", description: "Unplanned downtime avoided" },
    { value: "<6 mo", description: "Median payback period" },
    { value: "15%+", description: "Carbon intensity improvement" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-4 xl:gap-6 items-start w-full">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          description={stat.description}
        />
      ))}
    </div>
  );
};

const HeroContentWrapper: React.FC = () => (
  <div className="absolute flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] items-start left-0 right-0 top-20 sm:top-24 md:top-28 lg:top-[130px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[100px] pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-[60px] mx-auto max-w-[1512px]">
    <HeroContent />
    <Divider />
    <StatsGrid />
  </div>
);

const BackgroundOverlay: React.FC = () => (
  <div className="absolute inset-0 w-full h-full">
    <div className="w-full h-full rotate-180 scale-y-[-100%]">
      <div
        className="w-full h-full"
        style={{ backgroundImage: GRADIENT_OVERLAY }}
        aria-hidden="true"
      />
    </div>
  </div>
);

// ===========================
// Main Component
// ===========================

const HeroSection: React.FC = () => {
  return (
    <section
      className="min-h-[830px] sm:min-h-[800px] md:min-h-[750px] lg:min-h-[780px] xl:min-h-[800px] overflow-hidden relative w-full"
      aria-label="Hero Section"
    >
      {/* Background Image */}
      <img
        alt="Industrial factory background"
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={ASSETS.heroBackground}
      />

      {/* Gradient Overlay */}
      <BackgroundOverlay />

      {/* Content */}
      <HeroContentWrapper />
    </section>
  );
};

export default HeroSection;
