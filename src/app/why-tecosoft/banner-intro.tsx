"use client";
import React from "react";
import svgPaths from "@/imports/svg-9v3kh9sdih";

function IconoirArrowDown4() {
  return (
    <div className="relative size-[14px]" data-name="iconoir:arrow-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p1feb4d00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#07af40] content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-white">
        See it in action
      </p>
      <div
        className="flex items-center justify-center relative shrink-0 size-[14px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "345.59375",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-90deg]">
          <IconoirArrowDown4 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Gilroy:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#4f4f4f] text-[18px] w-[842px]">
        One operating rhythm—where every handoff, every workflow, every resource
        moves in sync with clarity, confidence, and purpose.
      </p>
      <Frame5 />
    </div>
  );
}

export function BannerIntro() {
  return (
    <div
      className="bg-gradient-to-r from-white relative shrink-0 to-white w-full"
      data-name="Banner Intro"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[100px] py-[60px] relative w-full">
          <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#282828] text-[40px]">
            The result?
          </p>
          <Frame46 />
        </div>
      </div>
    </div>
  );
}
