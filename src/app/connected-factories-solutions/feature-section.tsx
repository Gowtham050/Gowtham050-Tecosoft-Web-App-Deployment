"use client";
import React, { useEffect, useRef, useState } from "react";
import svgPaths from "../../imports/svg-0dlgmqgi5c";

/* ===================== TYPES ===================== */

interface BulletPoint {
  text: string;
}

// Constants
const GRADIENT_COLORS = {
  from: "#00B7FF",
  to: "#0EB05C",
} as const;

interface FeatureCardData {
  icon: "setting" | "tools" | "tick-circle" | "document";
  title: string;
  description: string;
  bullets: BulletPoint[];
  routeName: string;
  variant: "gradient-first" | "white-first";
}

// Icon Components
function SettingIcon({ isActive }: { isActive?: boolean }) {
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
      <g
        className={`[&>path]:transition-all [&>path]:duration-300 ${
          isActive
            ? "[&>path]:stroke-[url(#settingGradient)] lg:[&>path]:stroke-white lg:group-hover:[&>path]:stroke-[url(#settingGradient)]"
            : "[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#settingGradient)]"
        }`}
      >
        <path d={svgPaths.p3fcd8970} strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p112e5b80} strokeWidth="2" />
      </g>
    </svg>
  );
}

function ToolsIcon({ isActive }: { isActive?: boolean }) {
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
      <g
        className={`[&>path]:transition-all [&>path]:duration-300 ${
          isActive
            ? "[&>path]:stroke-[url(#toolsGradient)] lg:[&>path]:stroke-white lg:group-hover:[&>path]:stroke-[url(#toolsGradient)]"
            : "[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#toolsGradient)]"
        }`}
      >
        <path d={svgPaths.p297286c0} strokeWidth="2" />
        <path d={svgPaths.p1562d00} strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p304bc400} strokeLinejoin="round" strokeWidth="2" />
      </g>
    </svg>
  );
}

function TickCircleIcon({ isActive }: { isActive?: boolean }) {
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
      <g
        className={`[&>path]:transition-all [&>path]:duration-300 ${
          isActive
            ? "[&>path]:stroke-[url(#tickCircleGradient)] lg:[&>path]:stroke-white lg:group-hover:[&>path]:stroke-[url(#tickCircleGradient)]"
            : "[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#tickCircleGradient)]"
        }`}
      >
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

function DocumentIcon({ isActive }: { isActive?: boolean }) {
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
      <g
        className={`[&>path]:transition-all [&>path]:duration-300 ${
          isActive
            ? "[&>path]:stroke-[url(#documentGradient)] lg:[&>path]:stroke-white lg:group-hover:[&>path]:stroke-[url(#documentGradient)]"
            : "[&>path]:stroke-white group-hover:[&>path]:stroke-[url(#documentGradient)]"
        }`}
      >
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
          d={svgPaths.p2a1b3c40}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d={svgPaths.p2a1b3c50}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

function IconBox({
  icon,
  variant,
  isActive,
}: {
  icon: FeatureCardData["icon"];
  variant: FeatureCardData["variant"];
  isActive?: boolean;
}) {
  const iconMap = {
    setting: <SettingIcon isActive={isActive} />,
    tools: <ToolsIcon isActive={isActive} />,
    "tick-circle": <TickCircleIcon isActive={isActive} />,
    document: <DocumentIcon isActive={isActive} />,
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg p-3 lg:p-5 size-[50px] lg:size-[70px] shrink-0 [background:linear-gradient(226.55deg,#00B7FF_21.48%,#0EB05C_76.42%)] group-hover:[background:white] transition-all duration-300 ${
        isActive
          ? "lg:[background:linear-gradient(226.55deg,#00B7FF_21.48%,#0EB05C_76.42%)] [background:white]"
          : ""
      }`}
    >
      <div className="size-[25px] lg:size-[30px]">{iconMap[icon]}</div>
    </div>
  );
}

/* ===================== DATA ===================== */

const FEATURES_DATA: FeatureCardData[] = [
  {
    icon: "setting",
    title: "Production Digitization",
    variant: "white-first",

    routeName: "/connected-factories-solutions/production-digitization",
    description:
      "Digitize your production floor with real-time monitoring and analytics.",
    bullets: [
      { text: "Live machine dashboards" },
      { text: "Job progress tracking" },
      { text: "Downtime analytics" },
    ],
  },
  {
    icon: "tools",
    title: "Tool Life Monitoring",
    variant: "white-first",

    routeName:
      "/connected-factories-solutions/tool-life-monitoring-digitization",
    description: "Predict tool wear and prevent unexpected breakdowns.",
    bullets: [
      { text: "Wear alerts" },
      { text: "Predictive replacement" },
      { text: "Usage insights" },
    ],
  },
  {
    icon: "tick-circle",
    title: "Quality Inspection",
    variant: "white-first",

    routeName: "/connected-factories-solutions/inspection-digitization",
    description: "AI-powered inspections and instant defect analysis.",
    bullets: [
      { text: "Digital inspections" },
      { text: "OK / NC classification" },
      { text: "Defect trends" },
    ],
  },
  {
    icon: "document",
    title: "Maintenance Digitization",
    variant: "white-first",

    routeName: "/connected-factories-solutions/maintenance-digitization",
    description: "Move from reactive to predictive maintenance.",
    bullets: [
      { text: "Preventive scheduling" },
      { text: "Health monitoring" },
      { text: "Technician workflows" },
    ],
  },
  {
    icon: "tick-circle",
    title: "Condition Monitoring",
    variant: "white-first",

    routeName: "/connected-factories-solutions/condition-monitoring",
    description: "Real-time machine health. Zero surprises.",
    bullets: [
      { text: "Sensor Integration" },
      { text: "Automated Interlocks" },
      { text: "Condition Based Maintenance" },
    ],
  },
];

/* ===================== ARROWS ===================== */

function ArrowDesktop() {
  return (
    <svg className="size-6 rotate-[270deg]" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4V20M12 20L19 12.4444M12 20L5 12.4444"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowMobile({ active }: { active: boolean }) {
  return (
    <svg className="size-5 rotate-270" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4V20M12 20L19 12.4444M12 20L5 12.4444"
        stroke={active ? "white" : "#0098D4"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ===================== CARD ===================== */

function FeatureCard({
  data,
  index,
  activeIndex,
}: {
  data: FeatureCardData;
  index: number;
  activeIndex: number | null;
}) {
  const { icon, title, description, bullets, variant, routeName } = data;

  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  const isActive = isDesktop ? isHovered : activeIndex === index;

  const handleClick = () => {
    window.location.href = data.routeName;
  };

  return (
    <div
      data-card
      onClick={handleClick}
      onMouseEnter={() => isDesktop && setIsHovered(true)}
      onMouseLeave={() => isDesktop && setIsHovered(false)}
      className={`
        snap-center
        group
        cursor-pointer
        rounded-2xl
        transition-all
        duration-300
        ${
          isActive
            ? "bg-gradient-to-br from-[#00B7FF] to-[#0EB05C] scale-[1.03] shadow-2xl"
            : "bg-white"
        }
      `}
    >
      <div className="p-6 flex flex-col gap-6 relative">
        {/* Header */}
        <div className="flex items-center  gap-4">
          {/* Icon + Title + Description */}
          <IconBox icon={icon} variant={variant} isActive={isActive} />

          <div>
            <h3
              className={`text-lg font-semibold ${
                isActive ? "text-white" : "text-[#282828]"
              }`}
            >
              {data.title}
            </h3>
            <p
              className={`text-sm mt-1 ${
                isActive ? "text-white" : "text-[#636363]"
              }`}
            >
              {data.description}
            </p>
          </div>

          <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity absolute top-6 right-6">
            <ArrowDesktop />
          </div>
          <div className="lg:hidden absolute top-6 right-6">
            <ArrowMobile active={isActive} />
          </div>
        </div>

        {/* Bullets */}
        <div className="flex flex-col gap-3">
          {data.bullets.map((b, i) => (
            <p
              key={i}
              className={`text-sm ${
                isActive ? "text-white" : "text-[#0098D4]"
              }`}
            >
              • {b.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== GRID ===================== */

function FeaturesGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) return; // ❌ disable scroll logic on desktop

    const onScroll = () => {
      const cards = ref.current?.querySelectorAll("[data-card]");
      if (!cards) return;

      const center = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < center && rect.bottom > center) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="
        grid
        grid-cols-1
        lg:grid-cols-4
        gap-6
        snap-y snap-mandatory
        lg:snap-none
      "
    >
      {FEATURES_DATA.map((item, index) => (
        <div
          key={index}
          className={`${
            index === FEATURES_DATA.length - 1
              ? "  lg:col-start-2  lg:col-end-4 "
              : "lg:col-span-2"
          }`}
        >
          <FeatureCard data={item} index={index} activeIndex={activeIndex} />
        </div>
      ))}
    </div>
  );
}

/* ===================== SECTION ===================== */

export default function FeatureSection() {
  return (
    <section
      className="w-full px-6 lg:px-24 py-16"
      style={{
        background: "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
      }}
    >
      <h2 className="text-white text-3xl font-semibold mb-10">Key Use Cases</h2>
      <FeaturesGrid />
    </section>
  );
}
