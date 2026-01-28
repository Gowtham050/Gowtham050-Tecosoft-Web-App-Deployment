"use client";

import React from "react";

// =============================================================================
// CONSTANTS & CONFIGURATION
// =============================================================================

/** Banner content */
const BANNER_CONTENT = {
  title: "The result?",
  description:
    "One operating rhythm—where every handoff, every workflow, every resource moves in sync with clarity, confidence, and purpose.",
  ctaText: "See it in action",
} as const;

/** SVG path data */
const SVG_PATHS = {
  arrowDown: "M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167",
} as const;

/** Style constants */
const STYLES = {
  ctaButton: "bg-[#07af40]",
} as const;

// =============================================================================
// ICON COMPONENTS
// =============================================================================

/** Arrow icon pointing right (rotated from down arrow) */
function ArrowRightIcon() {
  return (
    <div className="relative size-[14px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
        aria-hidden="true"
      >
        <path
          d={SVG_PATHS.arrowDown}
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
      </svg>
    </div>
  );
}

// =============================================================================
// UI COMPONENTS
// =============================================================================

/** Call-to-action button with arrow icon */
function CTAButton() {
  return (
    <button
      className={`${STYLES.ctaButton} content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity`}
      type="button"
    >
      <span className="font-semibold leading-[20px] not-italic relative shrink-0 text-[15px] text-white">
        {BANNER_CONTENT.ctaText}
      </span>
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
          <ArrowRightIcon />
        </div>
      </div>
    </button>
  );
}

/** Content row with description and CTA */
function ContentRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-normal leading-[26px] not-italic relative shrink-0 text-[#4f4f4f] text-[18px] w-[842px]">
        {BANNER_CONTENT.description}
      </p>
      <CTAButton />
    </div>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export function BannerIntro() {
  return (
    <section
      className="bg-gradient-to-r from-white relative shrink-0 to-white w-full"
      aria-label="Banner introduction"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[100px] py-[60px] relative w-full">
          <h2 className="font-semibold leading-[44px] not-italic relative shrink-0 text-[#282828] text-[40px]">
            {BANNER_CONTENT.title}
          </h2>
          <ContentRow />
        </div>
      </div>
    </section>
  );
}

