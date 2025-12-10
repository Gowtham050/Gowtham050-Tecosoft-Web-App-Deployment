"use client";

import Image from "next/image";
import React from "react";

function Frame3() {
  return (
    <div className="bg-[#07af40] flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 rounded-md cursor-pointer max-w-[150px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] text-[15px] text-white whitespace-nowrap">
        Request Demo
      </p>

      {/* Arrow */}
      <div className="flex items-center justify-center size-[14px]">
        <div className="rotate-[270deg]">
          <IconoirArrowDown4 />
        </div>
      </div>
    </div>
  );
}

function IconoirArrowDown4() {
  return (
    <svg
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      className="block"
    >
      <path
        d="M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function Frame11() {
  return (
    <div className="absolute flex flex-col gap-[46px] left-[100px] top-[calc(50%+32px)] -translate-y-1/2 w-[650px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[90px] text-[76px] text-white">
        One platform. Two{" "}
        <span className="text-[#00ff84]">Super power potentials.</span>
      </p>

      <p className="font-['Gilroy:Medium',sans-serif] leading-[26px] text-[18px] text-white">
        Unify energy and machine health under a single AI layer. Forecast
        demand, prevent failures, and automate actions across your shopfloor.
      </p>

      <Frame3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[250px] relative rounded-[20px] w-full overflow-hidden">
      <Image
        src="/assets/pages/ai-enabled/67afda521ae6a78fba911782311713969b82ad14.png"
        alt="AI Enabled"
        fill
        className="object-cover rounded-[20px]"
        priority
      />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#cdefd9] h-[250px] rounded-[20px] w-full">
      <div className="flex flex-col justify-end h-full p-[28px]">
        <p className="text-[#07af40] text-[60px] leading-[60px] tracking-[-1.2px]">
          15%+
        </p>
        <p className="text-[#282828] text-[16px] leading-[20px] w-[181px]">
          Carbon intensity improvement
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex flex-col gap-[20px] w-[250px]">
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ccf1ff] h-[250px] rounded-[20px] w-full">
      <div className="flex flex-col justify-end h-full p-[28px]">
        <p className="text-[#0098d4] text-[60px] leading-[60px] tracking-[-1.2px]">
          10-18%
        </p>
        <p className="text-[#282828] text-[16px] leading-[20px] w-[181px]">
          Typical energy cost reduction
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#003d55] h-[250px] rounded-[20px] w-full">
      <div className="flex flex-col justify-end h-full p-[28px]">
        <p className="text-[#55cfff] text-[60px] leading-[60px] tracking-[-1.2px]">
          &lt;6 mo
        </p>
        <p className="text-white text-[16px] leading-[20px] w-[181px]">
          Median payback period
        </p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex flex-col gap-[20px] w-[250px]">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute flex gap-[24px] left-[888px] top-[140px]">
      <Frame17 />
      <Frame16 />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full h-[750px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/pages/ai-enabled/6be83863a5fa40ccefa1725cc8f430fd0def2e3a.png"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Layer */}
      <div
        className="absolute inset-0 backdrop-blur-[10px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)), linear-gradient(206deg, rgba(6,86,217,0.3), rgba(55,188,255,0.3))",
        }}
      />

      <Frame11 />
      <Frame18 />
    </div>
  );
}
