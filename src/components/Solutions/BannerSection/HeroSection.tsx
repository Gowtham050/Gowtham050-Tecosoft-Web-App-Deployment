import React from "react";

// Types
interface HeroContentProps {
  title: string;
  highlight: string;
  description: string;
  video: string;
  image: string;
  imageAlt: string;
}

// Constants
const BRAND_COLOR = "#00ff84";
const GRADIENT_OVERLAY =
  "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(205.185deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)";

// Sub-components
interface BackgroundVideoProps {
  videoPath: string;
}

function BackgroundVideo({ videoPath }: BackgroundVideoProps) {
  return (
    <video
      autoPlay
      className="absolute inset-0 w-full h-full object-cover"
      controlsList="nodownload"
      loop
      muted
      playsInline
      aria-label="Production digitization background video"
    >
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function GradientOverlay() {
  return (
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
}

interface TextContentProps {
  title: string;
  highlight: string;
  description: string;
}

function TextContent({ title, highlight, description }: TextContentProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-9 text-white text-center lg:text-left w-full lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[700px]">
      <h1 className=" font-semibold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[86px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-[96px]">
        <span>{title} </span>
        <span
          className="text-[var(--brand-color)]"
          style={{ "--brand-color": BRAND_COLOR } as React.CSSProperties}
        >
          {highlight}
        </span>
      </h1>
      <p className=" font-medium text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-[21px] leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-relaxed 2xl:leading-[29px] opacity-90">
        {description}
      </p>
    </div>
  );
}

interface DeviceImageProps {
  imagePath: string;
  imageAlt: string;
}

function DeviceImage({ imagePath, imageAlt }: DeviceImageProps) {
  return (
    <div
      className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[460px] 2xl:max-w-[482px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[320px] 2xl:h-[341px] rounded-lg overflow-hidden flex-shrink-0"
      data-name="Eagle Device"
    >
      <img
        alt={imageAlt}
        className="w-full h-full object-contain"
        src={imagePath}
        loading="lazy"
      />
    </div>
  );
}

interface HeroContentComponentProps extends HeroContentProps {}

function HeroContent({
  title,
  highlight,
  description,
  image,
  imageAlt,
}: HeroContentComponentProps) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[100px] py-20 md:py-24 lg:py-32 xl:py-[180px]">
      <TextContent title={title} highlight={highlight} description={description} />
      <DeviceImage imagePath={image} imageAlt={imageAlt} />
    </div>
  );
}

// Main component
interface HeroSectionProps {
  content?: HeroContentProps;
}

export function HeroSection({ content }: HeroSectionProps) {
  if (!content) {
    return null;
  }

  return (
    <section
      className="relative w-full min-h-[500px] h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[711px] overflow-hidden"
      data-name="Hero section"
      aria-label="Production Digitization Hero Section"
    >
      <BackgroundVideo videoPath={content.video} />
      <GradientOverlay />
      <HeroContent {...content} />
    </section>
  );
}
