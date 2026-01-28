"use client";

import React from "react";

// =============================================================================
// CONSTANTS & CONFIGURATION
// =============================================================================

/** Asset paths */
const ASSETS = {
  heroImage:
    "/assets/pages/why-tecosoft/cc632dcc9f8af8f81593fdb0a0db918fe56ac65a.png",
} as const;

/** Section content */
const SECTION_CONTENT = {
  title: {
    main: "Why Tecosoft ",
    highlight: "Stands Apart",
  },
  description:
    "We don't just ship features - we shape outcomes. From architecture to adoption, our approach makes transformation feel simple and stick for the long run.",
} as const;

/** Shared gradient style */
const GRADIENT_BG_STYLE = {
  backgroundImage:
    "linear-gradient(226.547deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)",
} as const;

// =============================================================================
// TYPES
// =============================================================================

interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  callout: string;
  icon: React.ComponentType;
}

// =============================================================================
// SVG ICON COMPONENTS
// =============================================================================

/** Analytics chart icon */
function AnalyticsIcon() {
  return (
    <div className="absolute inset-[10.42%]">
      <div className="absolute inset-[-4.61%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20.75 20.75"
        >
          <g>
            <path
              d="M5.375 15.375L5.375 11.375"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
            <path
              d="M10.375 15.375L10.375 5.375"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
            <path
              d="M15.375 15.375L15.375 9.375"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
            <path
              d="M0.875001 10.375C0.875001 5.89666 0.875001 3.65749 2.26624 2.26624C3.65749 0.875001 5.89666 0.875001 10.375 0.875001C14.8533 0.875001 17.0925 0.875001 18.4838 2.26624C19.875 3.65749 19.875 5.89666 19.875 10.375C19.875 14.8533 19.875 17.0925 18.4838 18.4838C17.0925 19.875 14.8533 19.875 10.375 19.875C5.89666 19.875 3.65749 19.875 2.26624 18.4838C0.875001 17.0925 0.875001 14.8533 0.875001 10.375Z"
              stroke="var(--stroke-0, white)"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

/** Data/connections icon */
function DataIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <path
          d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <path
          d="M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <path
          d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <path
          d="M6 12H18"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <path
          d="M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
      </g>
    </svg>
  );
}

/** User in octagon icon */
function UserOctagonIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48 18.15C3.51 17.59 2.91 16.55 2.91 15.42V8.58003C2.91 7.46003 3.51 6.41999 4.48 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
        />
        <g>
          <path
            d="M12 11C13.2868 11 14.33 9.95681 14.33 8.66998C14.33 7.38316 13.2868 6.34003 12 6.34003C10.7132 6.34003 9.67 7.38316 9.67 8.66998C9.67 9.95681 10.7132 11 12 11Z"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d="M16 16.66C16 14.86 14.21 13.4 12 13.4C9.79 13.4 8 14.86 8 16.66"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </g>
      </g>
    </svg>
  );
}

/** Arrow right icon for callouts */
function ArrowRightIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute flex inset-[29.17%_16.67%_29.17%_16.65%] items-center justify-center">
        <div className="flex-none h-[10.669px] rotate-[90deg] scale-y-[-100%] w-[6.667px]">
          <div className="relative size-full">
            <div className="absolute inset-[-7.01%_-11.25%_-5.09%_-11.25%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 8.16667 11.9594"
              >
                <g>
                  <path
                    d="M4.08327 10.75L4.08327 0.75"
                    stroke="var(--stroke-0, #0098D4)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0.75 8.08321L3.37623 10.7094C3.70956 11.0428 3.87623 11.2094 4.08333 11.2094C4.29044 11.2094 4.45711 11.0428 4.79044 10.7094L7.41667 8.08321"
                    stroke="var(--stroke-0, #0098D4)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// FEATURE CARDS DATA
// =============================================================================

/** Icon wrapper components */
function ImpactFirstIconWrapper() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <AnalyticsIcon />
    </div>
  );
}

function UnifiedByDesignIconWrapper() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <DataIcon />
    </div>
  );
}

function AdoptionIconWrapper() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <UserOctagonIcon />
    </div>
  );
}

const FEATURES_DATA: FeatureCardData[] = [
  {
    id: "impact-first",
    title: "Impact-First",
    description:
      "Start with business goals: reliability, efficiency, sustainability, responsiveness. Tech follows strategy - not the other way around.",
    callout: "Built for decisions, not just dashboards.",
    icon: ImpactFirstIconWrapper,
  },
  {
    id: "unified-by-design",
    title: "Unified by Design",
    description:
      "A single data + intelligence layer ties apps and workflows together. Keep what works; extend what doesn't—without lock‑in.",
    callout: "No rip-and-replace. Zero dead-ends.",
    icon: UnifiedByDesignIconWrapper,
  },
  {
    id: "adoption-that-lasts",
    title: "Adoption that Lasts",
    description:
      "We co-create with your teams so change is embraced, not imposed. Your people gain confidence and real ownership.",
    callout: "You can run it. We help you scale.",
    icon: AdoptionIconWrapper,
  },
];

// =============================================================================
// SECTION COMPONENTS
// =============================================================================

/** Section header with title and description */
function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full">
      <h2 className="font-semibold leading-[0] relative shrink-0 text-[#282828] text-[40px] w-[396px]">
        <span className="leading-[44px]">{SECTION_CONTENT.title.main}</span>
        <span className="leading-[44px] text-[#0098d4]">
          {SECTION_CONTENT.title.highlight}
        </span>
      </h2>
      <p className="font-medium leading-[22px] min-w-full relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">
        {SECTION_CONTENT.description}
      </p>
    </div>
  );
}

/** Hero image section */
function HeroImage() {
  return (
    <div className="h-[300px] relative rounded-[12px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img
          alt="Tecosoft team collaboration"
          className="absolute h-[289.71%] left-0 max-w-none top-[-130.45%] w-full"
          src={ASSETS.heroImage}
        />
      </div>
    </div>
  );
}

/** Left content column with header and image */
function LeftColumn() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[580px]">
      <SectionHeader />
      <HeroImage />
    </div>
  );
}

// =============================================================================
// FEATURE CARD COMPONENTS
// =============================================================================

/** Icon container with gradient background */
function IconContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[6px] shrink-0 size-[46px]"
      style={GRADIENT_BG_STYLE}
    >
      {children}
    </div>
  );
}

/** Feature callout with arrow and text */
function FeatureCallout({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ArrowRightIcon />
      <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#0098d4] text-[14px]">
        {text}
      </p>
    </div>
  );
}

/** Reusable feature card component */
function FeatureCard({ data }: { data: FeatureCardData }) {
  const IconComponent = data.icon;

  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full">
          <IconContainer>
            <IconComponent />
          </IconContainer>
          <div className="flex flex-col font-semibold justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
            <h3 className="leading-[22px]">{data.title}</h3>
          </div>
          <p className="font-medium leading-[20px] min-w-full not-italic relative shrink-0 text-[#777] text-[15px] w-[min-content]">
            {data.description}
          </p>
          <FeatureCallout text={data.callout} />
        </div>
      </div>
    </div>
  );
}

/** Right column with feature cards */
function RightColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      {FEATURES_DATA.map((feature) => (
        <FeatureCard key={feature.id} data={feature} />
      ))}
    </div>
  );
}

/** Main content layout */
function ContentLayout() {
  return (
    <div className="content-stretch flex gap-[60px] h-[648px] items-center relative shrink-0 w-full">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export function WhyUs() {
  return (
    <section
      className="bg-[#e0f6fa] relative shrink-0 w-full"
      aria-label="Why Us section"
    >
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[100px] py-[60px] relative w-full">
          <ContentLayout />
        </div>
      </div>
    </section>
  );
}

