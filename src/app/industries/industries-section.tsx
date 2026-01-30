"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const INDUSTRIES_DATA = [
  {
    id: 1,
    title: "Manufacturing",
    description:
      "Digitize operations from shopfloor to leadership using connected assets, role-ready dashboards, and AI-driven decisions.",
    image: "/assets/pages/industries/manufacturing.png",
    useCases: [
      "Real-Time Production Tracking",
      "Tool Life & Calibration",
      "Digital Work Instructions",
      "Maintenance Planning & CMMS Sync",
      "SPC & Quality Traceability",
      "Predictive Maintenance",
    ],
    outcomes: [
      "OEE",
      "Unplanned Downtime",
      "On-Time Delivery",
      "Scrap & Rework",
    ],
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Enable connected care experiences with unified patient data, workflow automation, and compliance-ready systems.",
    image: "/assets/pages/industries/manufacturing.png",
    useCases: [
      "Patient Flow Optimization",
      "Medical Asset Tracking",
      "Digital Health Records",
      "Compliance Automation",
      "Remote Monitoring",
    ],
    outcomes: [
      "Care Quality",
      "Operational Efficiency",
      "Patient Satisfaction",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* ICONS */
/* ------------------------------------------------------------------ */

const TickIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <defs>
      <linearGradient id="tickGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00B7FF" />
        <stop offset="100%" stopColor="#0EB05C" />
      </linearGradient>
    </defs>
    <path
      fill="url(#tickGradient)"
      d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-1.2 14.2L4.6 10l1.4-1.4 2.8 2.8 5.6-5.6L15.8 7l-7 7.2z"
    />
  </svg>
);

const ArrowButton = ({ direction }: { direction: "prev" | "next" }) => (
  <div className="bg-white border border-[#d2d2d2] rounded-[8px] p-[12px] cursor-pointer flex items-center justify-center hover:bg-[#f0f0f0] h-[44px] w-[44px]  ">
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className={`transition-transform ${
        direction === "prev" ? "" : "rotate-180"
      }`}
    >
      <path
        d="M18.7031 11H3.30313M3.30313 11L10.5753 3.29995M3.30313 11L10.5753 18.7"
        stroke="#007AAA"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

/* ------------------------------------------------------------------ */
/* CARD */
/* ------------------------------------------------------------------ */

const IndustryCard = ({ data }: { data: any }) => (
  <div className="flex gap-[40px] items-center">
    <div className="h-[446px] w-[676px] rounded-[16px] overflow-hidden">
      <img
        src={data.image}
        alt={data.title}
        className="h-full w-full object-cover"
      />
    </div>

    <div className="flex flex-col gap-[32px] w-[676px]">
      <div>
        <h3 className="text-[28px] font-semibold text-[#005b80]">
          {data.title}
        </h3>
        <p className="text-[#8e8e8e] text-[16px] mt-2">{data.description}</p>
      </div>

      <div className="bg-[#f8f8f8] p-[16px] rounded-[12px]">
        <p className="text-[#0098d4] font-semibold mb-4">Use cases:</p>

        <div className="grid grid-cols-2 gap-[16px]">
          {data.useCases.map((item: string) => (
            <div key={item} className="flex gap-[12px] items-center">
              <TickIcon />
              <span className="text-[#282828] text-[16px]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-medium text-[17px] mb-3">Expected Outcomes:</p>
        <div className="flex flex-wrap gap-[10px]">
          {data.outcomes.map((outcome: string) => (
            <span
              key={outcome}
              className="bg-[#ccf1ff] text-[#007aaa] px-[14px] py-[6px] rounded-full text-[14px]"
            >
              {outcome}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* SECTION */
/* ------------------------------------------------------------------ */

export default function IndustriesSection() {
  const swiperRef = useRef<SwiperType>(undefined);

  return (
    <section className="bg-white p-[60px] w-full">
      {/* Header + Custom Navigation */}
      <div className="flex justify-between items-start mb-[50px]">
        <div>
          <h2 className="text-[36px] font-semibold text-[#181818]">
            Industries & Use Cases
          </h2>
          <p className="text-[#8e8e8e] mt-2 max-w-[700px]">
            Browse our comprehensive list of industries to explore tailored use
            cases and discover outcomes we've delivered.
          </p>
        </div>

        <div className="flex gap-[16px] pt-12">
          <div onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowButton direction="prev" />
          </div>
          <div onClick={() => swiperRef.current?.slideNext()}>
            <ArrowButton direction="next" />
          </div>
        </div>
      </div>

      {/* Swiper (Pagination DISABLED) */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {INDUSTRIES_DATA.map((item) => (
          <SwiperSlide key={item.id}>
            <IndustryCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
