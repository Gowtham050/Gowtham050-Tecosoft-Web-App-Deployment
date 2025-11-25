"use client";
import React from "react";
import svgPaths from "../../imports/svg-0dlgmqgi5c";

// Types
interface BulletPoint {
  text: string;
}

interface FeatureCardData {
  icon: "setting" | "tools" | "tick-circle" | "document";
  title: string;
  description: string;
  bullets: BulletPoint[];
  routeName: string;
  variant: "gradient-first" | "white-first";
}

// Constants
const GRADIENT_COLORS = {
  from: "#00B7FF",
  to: "#0EB05C",
} as const;

const FEATURES_DATA: FeatureCardData[] = [
  {
    icon: "setting",
    title: "Production Digitization",
    routeName: "/connected-factories/production-digitization",
    description:
      "Digitize your production floor with real-time monitoring, smart job tracking, and automated data insights to optimize performance.",
    bullets: [
      { text: "Live machine performance dashboards" },
      { text: "Job scheduling and progress analytics" },
      { text: "Smart shift and downtime tracking" },
    ],
    variant: "white-first",
  },
  {
    icon: "tools",
    title: "Tool Life Monitoring",
    routeName: "/connected-factories/tool-life-monitoring-digitization",
    description:
      "Keep tools healthy and efficient using predictive insights and real-time alerts that prevent breakdowns and optimize usage.",
    bullets: [
      { text: "Real-time tool wear tracking and alerts" },
      { text: "Predictive replacement recommendations" },
      { text: "Visual analytics for tool performance" },
    ],
    variant: "white-first",
  },
  {
    icon: "tick-circle",
    title: "Quality Inspection",
    routeName: "/connected-factories/inspection-digitization",
    description:
      "Ensure consistent quality with digital inspection workflows, AI-driven checks, and instant analytics for defect prevention.",
    bullets: [
      { text: "Stage-wise inspection planning" },
      { text: "Instant OK/NC classification" },
      { text: "Defect trend visualization and reports" },
    ],
    variant: "white-first",
  },
  {
    icon: "document",
    title: "Maintenance Digitization",
    routeName: "/connected-factories/maintenance-digitization",
    description:
      "Shift from reactive to predictive maintenance with digital checklists, IoT-based alerts, and condition monitoring systems.",
    bullets: [
      { text: "Preventive maintenance scheduling" },
      { text: "Machine health score and alerts" },
      { text: "Technician workflow management" },
    ],
    variant: "white-first",
  },
];

// Icon Components
function SettingIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 27 27"
    >
      <defs>
        <linearGradient
          id="settingGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="21.48%" stopColor={GRADIENT_COLORS.from} />
          <stop offset="76.42%" stopColor={GRADIENT_COLORS.to} />
        </linearGradient>
      </defs>
      <g className="[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#settingGradient)] [&>path]:transition-all [&>path]:duration-300">
        <path d={svgPaths.p3fcd8970} strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p112e5b80} strokeWidth="2" />
      </g>
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 25 25"
    >
      <defs>
        <linearGradient id="toolsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="21.48%" stopColor={GRADIENT_COLORS.from} />
          <stop offset="76.42%" stopColor={GRADIENT_COLORS.to} />
        </linearGradient>
      </defs>
      <g className="[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#toolsGradient)] [&>path]:transition-all [&>path]:duration-300">
        <path d={svgPaths.p297286c0} strokeWidth="2" />
        <path d={svgPaths.p1562d00} strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p304bc400} strokeLinejoin="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

function TickCircleIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 30 30"
    >
      <defs>
        <linearGradient
          id="tickCircleGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="21.48%" stopColor={GRADIENT_COLORS.from} />
          <stop offset="76.42%" stopColor={GRADIENT_COLORS.to} />
        </linearGradient>
      </defs>
      <g className="[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#tickCircleGradient)] [&>path]:transition-all [&>path]:duration-300">
        <path
          d={svgPaths.p1d400b00}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d={svgPaths.p3ef5d96}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 30 30"
    >
      <defs>
        <linearGradient
          id="documentGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="21.48%" stopColor={GRADIENT_COLORS.from} />
          <stop offset="76.42%" stopColor={GRADIENT_COLORS.to} />
        </linearGradient>
      </defs>
      <g className="[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#documentGradient)] [&>path]:transition-all [&>path]:duration-300">
        <path
          d={svgPaths.p23d97900}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d={svgPaths.p1fb79c90}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M10 16.25H15"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M10 21.25H20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="size-6 rotate-[270deg]" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4V20M12 20L19 12.4444M12 20L5 12.4444"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

// Components
function FeaturesHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 w-full">
      <h2 className="font-semibold  text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">
        Key Use Cases
      </h2>
      <p className=" font-medium text-[#ccf1ff] text-sm sm:text-base leading-relaxed max-w-full sm:max-w-md lg:max-w-lg">
        Transform Your Shop Floor into a Smart, Connected, and Insight-Driven
        Ecosystem
      </p>
    </div>
  );
}

function BulletPoint({
  text,
  variant,
}: {
  text: string;
  variant: "gradient-first" | "white-first";
}) {
  return (
    <div className="flex gap-3 items-center">
      <div className="relative shrink-0 size-2.5">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <circle
            cx="5"
            cy="5"
            r="5"
            className="fill-[#0098D4] group-hover:fill-white transition-all duration-300"
          />
        </svg>
      </div>
      <p className=" font-medium text-sm leading-relaxed text-[#0098d4] group-hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  );
}

function IconBox({
  icon,
  variant,
}: {
  icon: FeatureCardData["icon"];
  variant: FeatureCardData["variant"];
}) {
  const iconMap = {
    setting: <SettingIcon />,
    tools: <ToolsIcon />,
    "tick-circle": <TickCircleIcon />,
    document: <DocumentIcon />,
  };

  return (
    <div className="flex items-center justify-center rounded-lg p-5 size-[70px] shrink-0 [background:linear-gradient(226.55deg,#00B7FF_21.48%,#0EB05C_76.42%)] group-hover:[background:white] transition-all duration-300">
      <div className="size-[30px]">{iconMap[icon]}</div>
    </div>
  );
}

function FeatureCard({ data }: { data: FeatureCardData }) {
  const { icon, title, description, bullets, variant, routeName } = data;

  return (
    <div
      className="group bg-white hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C] hover:cursor-pointer relative rounded-2xl transition-all duration-300 w-full"
      onClick={() => {
        window.location.href = routeName;
      }}
    >
      <div className="flex flex-col gap-7 p-6 relative">
        {/* Header */}
        <div className="flex gap-5 items-center w-full">
          <IconBox icon={icon} variant={variant} />
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center justify-between w-full">
              <h3 className="font-semibold  text-xl sm:text-[22px] leading-tight text-[#282828] group-hover:text-white transition-colors duration-300">
                {title}
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shrink-0">
                <ArrowIcon />
              </div>
            </div>
            <p className=" font-normal  text-xs sm:text-[13px] leading-relaxed text-[#636363] group-hover:text-white transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>

        {/* Bullets */}
        <div className="flex flex-col gap-4">
          {bullets.map((bullet, index) => (
            <BulletPoint key={index} text={bullet.text} variant={variant} />
          ))}
        </div>
      </div>

      {/* Border */}
      <div
        aria-hidden="true"
        className="absolute border-[#bbbbbb] group-hover:border-transparent border-[0.5px] border-solid inset-0 pointer-events-none rounded-2xl transition-all duration-300"
      />
    </div>
  );
}

function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 w-full">
      {FEATURES_DATA.map((feature, index) => (
        <FeatureCard key={index} data={feature} />
      ))}
    </div>
  );
}

function FeatureSection() {
  return (
    <section className="relative w-full" data-name="Features">
      <div className="overflow-hidden rounded-[inherit] size-full">
        <div
          className="flex flex-col gap-10 sm:gap-12 lg:gap-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-44 py-12 sm:py-14 lg:py-16 w-full"
          style={{
            background:
              "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
          }}
        >
          <FeaturesHeader />
          <FeaturesGrid />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
