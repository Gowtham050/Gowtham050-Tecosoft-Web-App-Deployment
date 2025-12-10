"use client";

import Image from "next/image";

// -----------------------------
// Reusable Components
// -----------------------------
function MetricCard({
  bg,
  valueColor,
  value,
  labelColor = "#282828",
  label,
}: any) {
  return (
    <div
      className={`rounded-2xl w-full aspect-[1.4] ${bg} flex flex-col justify-end p-5 sm:p-6 lg:p-7`}
    >
      <p
        className="text-[34px] sm:text-[48px] lg:text-[60px] leading-tight tracking-tight"
        style={{ color: valueColor }}
      >
        {value}
      </p>

      <p
        className="text-[13px] sm:text-[15px] lg:text-[16px] leading-[20px] mt-1 sm:mt-2 max-w-[220px]"
        style={{ color: labelColor }}
      >
        {label}
      </p>
    </div>
  );
}

function ImageCard({ src }: any) {
  return (
    <div className="rounded-2xl w-full  relative overflow-hidden shadow-lg">
      <Image
        src={src}
        alt="AI Insight"
        fill
        quality={100}
        className="object-cover"
        priority
      />
    </div>
  );
}

function RequestDemoButton() {
  return (
    <button className="bg-[#07af40] hover:bg-[#049836] transition-all duration-300 flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-md w-fit shadow-lg active:scale-95">
      Request Demo
      <span className="block rotate-[270deg]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167"
            stroke="white"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

// -----------------------------
// Hero Text
// -----------------------------
function HeroText() {
  return (
    <div className="absolute left-0 top-[18%] sm:top-[25%] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-auto px-6 sm:px-10 lg:left-[8%] max-w-[650px] space-y-5 sm:space-y-7">
      <h1 className="text-white font-semibold text-[34px] leading-[42px] sm:text-[48px] sm:leading-[56px] lg:text-[64px] lg:leading-[72px]">
        One platform. Two{" "}
        <span className="text-[#00ff84]">Super power potentials.</span>
      </h1>

      <p className="text-white text-[14px] sm:text-[17px] leading-[22px] sm:leading-[26px] opacity-90 max-w-[520px]">
        Unify energy and machine health under a single AI layer. Forecast
        demand, prevent failures, and automate actions across your shop floor.
      </p>

      <RequestDemoButton />
    </div>
  );
}

// -----------------------------
// Metrics Section
// -----------------------------
function MetricsSection() {
  return (
    <div className="absolute bottom-6 sm:bottom-10 lg:top-[150px] lg:right-[8%] left-0 px-6 sm:px-10 lg:px-0">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          gap-5 
          sm:gap-6 
          w-full 
          max-w-[560px] 
          ml-auto
        "
      >
        <ImageCard src="/assets/pages/ai-enabled/67afda521ae6a78fba911782311713969b82ad14.png" />

        <MetricCard
          bg="bg-[#cdefd9]"
          valueColor="#07af40"
          value="15%+"
          label="Carbon intensity improvement"
        />

        <MetricCard
          bg="bg-[#ccf1ff]"
          valueColor="#0098d4"
          value="10–18%"
          label="Typical energy cost reduction"
        />

        <MetricCard
          bg="bg-[#003d55]"
          valueColor="#55cfff"
          labelColor="white"
          value="<6 mo"
          label="Median payback period"
        />
      </div>
    </div>
  );
}

// -----------------------------
// HERO SECTION WRAPPER
// -----------------------------
export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] lg:min-h-[750px] max-h-[1100px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/pages/ai-enabled/6be83863a5fa40ccefa1725cc8f430fd0def2e3a.png"
        alt="Hero Background"
        fill
        quality={100}
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[10px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), linear-gradient(206deg, rgba(6,86,217,0.3), rgba(55,188,255,0.3))",
        }}
      />

      <HeroText />
      <MetricsSection />
    </div>
  );
}
