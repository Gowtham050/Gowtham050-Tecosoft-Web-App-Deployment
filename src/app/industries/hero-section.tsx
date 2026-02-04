"use client";

import svgPaths from "../../imports/svg-wzyskd72fo";

/** Background video path */
const BANNER_VIDEO_PATH = "/assets/video/industry-banner-bg.mp4";

/** Z-index layers - Banner should be below navbar (navbar uses 999-1001) */
const Z_INDEX = {
  VIDEO_LAYER: 1,
  OVERLAY_LAYER: 2,
  CONTENT_LAYER: 10,
} as const;

/** Color palette used in this component */
const COLORS = {
  PRIMARY_GREEN: "#07af40",
  ACCENT_GREEN: "#00ff84",
  WHITE: "white",
  TRANSPARENT: "rgba(255,255,255,0)",
} as const;

/** Common text styles */
const TEXT_STYLES = {
  gilroySemibold: "font-['Gilroy:Semibold',sans-serif]",
  gilroyMedium: "font-['Gilroy:Medium',sans-serif]",
} as const;

// =============================================================================
// TYPES
// =============================================================================

interface ArrowIconProps {
  /** Icon size in pixels */
  size?: 12 | 14;
  /** Direction the arrow points */
  direction?: "down" | "right";
}

interface ButtonProps {
  /** Button label text */
  label: string;
  /** Button style variant */
  variant: "primary" | "outline";
  /** Whether to show arrow icon */
  showArrow?: boolean;
}


// =============================================================================
// REUSABLE ICON COMPONENTS
// =============================================================================

/**
 * Arrow icon component - consolidates all arrow icon variants
 * Used for buttons and navigation dropdowns
 */
function ArrowIcon({ size = 14, direction = "down" }: ArrowIconProps) {
  const svgPath = size === 12 ? svgPaths.p1bf4c500 : svgPaths.p1feb4d00;
  const rotationClass = direction === "right" ? "rotate-[-90deg]" : "";

  return (
    <div
      className={`relative shrink-0 size-[${size}px] ${rotationClass}`}
      data-testid="arrow-icon"
      data-direction={direction}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <path
          d={svgPath}
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
// BUTTON COMPONENTS
// =============================================================================

/**
 * CTA Button component
 * Renders primary (filled) or outline button variants
 */
function CTAButton({ label, variant, showArrow = true }: ButtonProps) {
  const baseClasses =
    "content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0";
  const variantClasses =
    variant === "primary"
      ? `bg-[${COLORS.PRIMARY_GREEN}]`
      : `bg-[${COLORS.TRANSPARENT}]`;

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${variant === "outline" ? "w-[172px]" : ""}`}
      data-testid={`cta-button-${variant}`}
    >
      {/* Outline border for outline variant */}
      {variant === "outline" && (
        <div
          aria-hidden="true"
          className="absolute border border-solid border-white inset-0 pointer-events-none"
        />
      )}

      {/* Button Label */}
      <p
        className={`${TEXT_STYLES.gilroySemibold} leading-[20px] not-italic relative shrink-0 text-[15px] text-white`}
      >
        {label}
      </p>

      {/* Arrow Icon */}
      {showArrow && (
        <div className="flex items-center justify-center relative shrink-0 size-[14px]">
          <div className="flex-none rotate-[-90deg]">
            <ArrowIcon size={14} />
          </div>
        </div>
      )}
    </div>
  );
}





/**
 * Hero section headline with highlighted text
 */
function HeroHeadline() {
  return (
    <h1
      className="font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[80px] text-center text-white w-[min-content]"
      data-testid="hero-headline"
    >
      <span className="leading-[94px]">
        From Factory Floors to City Blocks -{" "}
      </span>
      <span className={`leading-[94px] text-[${COLORS.ACCENT_GREEN}]`}>
        Tecosoft Powers Real Operations
      </span>
    </h1>
  );
}

/**
 * Hero section subtitle/description
 */
function HeroSubtitle() {
  return (
    <p
      className={`${TEXT_STYLES.gilroyMedium} leading-[29px] min-w-full not-italic relative shrink-0 text-[21px] text-center text-white w-[min-content]`}
      data-testid="hero-subtitle"
    >
      Deploy connected operations with EAGLE at the Edge and Tecosoft Analytics
      in the Cloud. We bring dashboards, alerts, monitoring, digital twins and
      AI to every industry.
    </p>
  );
}

/**
 * Hero CTA buttons group
 */
function HeroCTAButtons() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-start relative shrink-0"
      data-testid="hero-cta-buttons"
    >
      <CTAButton label="Explore Industries" variant="primary" />
      <CTAButton label="Why Tecosoft" variant="outline" />
    </div>
  );
}

/**
 * Main hero content container
 * Contains headline, subtitle, and CTA buttons
 */
function HeroContent() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[36px] items-center left-1/2 top-[calc(50%+40px)] translate-x-[-50%] translate-y-[-50%] w-[1200px]"
      style={{ zIndex: Z_INDEX.CONTENT_LAYER }}
      data-testid="hero-content"
    >
      <HeroHeadline />
      <HeroSubtitle />
      <HeroCTAButtons />
    </div>
  );
}

// =============================================================================
// BACKGROUND COMPONENTS
// =============================================================================

/**
 * Video background element
 */
function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      className="absolute max-w-none object-cover size-full"
      controlsList="nodownload"
      loop
      playsInline
      style={{ zIndex: Z_INDEX.VIDEO_LAYER }}
      data-testid="video-background"
    >
      <source src={BANNER_VIDEO_PATH} type="video/mp4" />
    </video>
  );
}

/**
 * Gradient overlay on top of video
 * Creates the dark tint effect for text readability
 */
function GradientOverlay() {
  const GRADIENT_OVERLAY =
    "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(205.185deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)";

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: Z_INDEX.OVERLAY_LAYER }}
      data-testid="gradient-overlay"
    >
      <div className="w-full h-full rotate-180 scale-y-[-100%]">
        <div
          className="w-full h-full"
          style={{ backgroundImage: GRADIENT_OVERLAY }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

// =============================================================================
// MAIN HERO SECTION
// =============================================================================

/**
 * Industries page hero section
 * Displays video background with overlay, header navigation, and main content
 */
function HeroSection() {
  return (
    <section
      className="h-[692px] overflow-clip relative shrink-0 w-full"
      data-testid="hero-section"
      aria-label="Industries Hero"
    >
      {/* Background Layers */}
      <VideoBackground />
      <GradientOverlay />

      {/* Content Layers */}
      <HeroContent />
    </section>
  );
}

export default HeroSection;
