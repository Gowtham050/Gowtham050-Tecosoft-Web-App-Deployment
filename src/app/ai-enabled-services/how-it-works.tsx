import React from "react";

// ===========================
// TypeScript Interfaces
// ===========================

interface Step {
  id: number;
  title: string;
  description: string;
  variant?: "default" | "special";
}

interface StepCardProps {
  step: Step;
  index: number;
}

interface SectionHeaderProps {
  title: string;
  description: string;
}

// ===========================
// Constants & Data
// ===========================

const HOW_IT_WORKS_DATA: Step[] = [
  {
    id: 1,
    title: "Connect",
    description:
      "Easily integrate meters, sensors, PLC/SCADA systems, and historians with the EAGLE Edge platform to improve data collection and analysis.",
  },
  {
    id: 2,
    title: "Ingest",
    description:
      "Stream data easily to your on-premises setup or a cloud data lake, featuring time-series indexing for improved management and analysis.",
  },
  {
    id: 3,
    title: "Analyze",
    description:
      "Use AI to boost forecasting accuracy, spot anomalies, predict Remaining Useful Life (RUL), and optimize processes for better efficiency.",
  },
  {
    id: 4,
    title: "Act",
    description:
      "Align all elements by effectively integrating schedules, set points, and work orders. This approach will help close the loop and boost operational efficiency.",
    variant: "special",
  },
];

const HERO_IMAGE =
  "/assets/pages/ai-enabled/f3618873d8cb715764fc03e465951335b8a8705c.png";

// ===========================
// Reusable Components
// ===========================

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] items-start w-full max-w-[980px]">
      <h2 className="font-semibold leading-[32px] sm:leading-[38px] md:leading-[42px] lg:leading-[46px] text-[#282828] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]">
        {title}
      </h2>
      <p className="font-normal leading-[22px] sm:leading-[23px] md:leading-[24px] lg:leading-[25px] text-[#777777] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
        {description}
      </p>
    </div>
  );
};

const StepNumber: React.FC<{
  number: number;
  variant?: "default" | "special";
}> = ({ number, variant = "default" }) => {
  const gradientStyle =
    variant === "special"
      ? "bg-gradient-to-br from-[#00B7FF] to-[#0EB05C]"
      : "bg-gradient-to-br from-[#55cfff] to-[#00B7FF]";

  return (
    <div
      className={`${gradientStyle} bg-clip-text text-transparent font-medium text-[120px] sm:text-[140px] md:text-[160px] lg:text-[180px] xl:text-[198px] leading-none select-none flex-shrink-0 w-[80px] sm:w-[90px] md:w-[100px] lg:w-[106px] text-center`}
      aria-label={`Step ${number}`}
    >
      {number}
    </div>
  );
};

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  return (
    <div
      className="relative bg-[rgba(204,241,255,0.36)] backdrop-blur-sm rounded-[14px] sm:rounded-[15px] md:rounded-[16px] w-full border border-[#55cfff] transition-all duration-300 hover:shadow-lg hover:bg-[rgba(204,241,255,0.45)] group"
      role="article"
      tabIndex={index}
      aria-labelledby={`step-title-${step.id}`}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="relative h-[130px] sm:h-[140px] md:h-[150px] w-full px-[20px] sm:px-[30px] md:px-[40px] py-[20px] sm:py-[25px] md:py-[30px]">
          <div className="absolute left-[40px] sm:left-[60px] md:left-[80px] lg:left-[99px] top-1/2 -translate-y-1/2 -translate-x-1/2">
            <StepNumber number={step.id} variant={step.variant} />
          </div>
          <div className="ml-[120px] sm:ml-[140px] md:ml-[160px] lg:ml-[198px] flex flex-col gap-[10px] sm:gap-[12px]">
            <h3
              id={`step-title-${step.id}`}
              className="font-semibold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#282828] text-[20px] sm:text-[22px] md:text-[24px]"
            >
              {step.title}
            </h3>
            <p className="font-normal leading-[22px] sm:leading-[23px] md:leading-[24px] lg:leading-[25px] text-[#8e8e8e] text-[15px] sm:text-[16px] md:text-[17px]">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroImage: React.FC = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[660px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shrink-0 w-full lg:w-[320px] xl:w-[392px] overflow-hidden shadow-lg group">
      <img
        alt="How it works visualization"
        className="absolute inset-0 size-full object-cover rounded-[inherit] transition-transform duration-500 group-hover:scale-105"
        src={HERO_IMAGE}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const StepsList: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] w-full">
      {HOW_IT_WORKS_DATA.map((step, index) => (
        <StepCard key={step.id} step={step} index={index} />
      ))}
    </div>
  );
};

// ===========================
// Main Component
// ===========================

const HowItWorks: React.FC = () => {
  return (
    <section
      className="relative w-full bg-white"
      data-name="How it works"
      aria-labelledby="how-it-works-title"
    >
      <div className="w-full">
        <div className="flex flex-col gap-[40px] sm:gap-[44px] md:gap-[48px] lg:gap-[50px] items-start px-[16px] sm:px-[32px] md:px-[48px] lg:px-[70px] xl:px-[100px] py-[40px] sm:py-[48px] md:py-[56px] lg:py-[60px] w-full max-w-[1440px] mx-auto">
          {/* Section Header */}
          <SectionHeader
            title="How it works"
            description="Our AI-powered system captures data, analyzes patterns, automates workflows, and guides smarter actions—reducing errors, improving decisions, and streamlining execution across your entire operation."
          />

          {/* Main Content: Image + Steps */}
          <div className="flex flex-col lg:flex-row gap-[24px] sm:gap-[20px] items-start w-full">
            {/* Hero Image */}
            <div className="w-full lg:w-auto order-2 lg:order-1">
              <HeroImage />
            </div>

            {/* Steps List */}
            <div className="w-full lg:flex-1 order-1 lg:order-2">
              <StepsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
