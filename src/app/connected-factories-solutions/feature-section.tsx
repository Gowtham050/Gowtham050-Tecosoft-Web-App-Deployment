"use client";
import React, { useEffect, useRef, useState } from "react";

/* ===================== TYPES ===================== */

interface BulletPoint {
  text: string;
}

interface FeatureCardData {
  icon: "setting" | "tools" | "tick-circle" | "document";
  title: string;
  description: string;
  bullets: BulletPoint[];
  routeName: string;
}

/* ===================== DATA ===================== */

const FEATURES_DATA: FeatureCardData[] = [
  {
    icon: "setting",
    title: "Production Digitization",
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
      <div className="p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
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

          <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowDesktop />
          </div>
          <div className="lg:hidden">
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
