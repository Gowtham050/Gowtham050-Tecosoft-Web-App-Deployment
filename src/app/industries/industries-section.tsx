"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { INDUSTRIES_DATA } from "@/constants/industries";

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
  <div className="bg-white border border-[#d2d2d2] rounded-lg p-3 cursor-pointer flex items-center justify-center hover:bg-[#f0f0f0] h-[44px] w-[44px]">
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className={`transition-transform ${direction === "prev" ? "" : "rotate-180"
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
  <div className="flex flex-col lg:flex-row gap-10 items-stretch">
    {/* IMAGE */}
    <div className="w-full  h-[400px] lg:h-[441px] lg:w-1/2 rounded-2xl overflow-hidden">

      <img
        src={data.image}
        alt={data.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT */}
    <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
      {/* TOP CONTENT */}
      <div className="space-y-6">
        <div>
          <h3 className="text-[30px] font-semibold text-[#007aaa]">
            {data.title}
          </h3>
          <p className="text-[#9a9a9a] text-[16px] leading-[28px] mt-3 max-w-[640px]">
            {data.description}
          </p>
        </div>

        {/* USE CASES */}
        <div className="bg-[#F8F8F8] rounded-2xl p-6 shadow-sm">
          <p className="text-[#0098d4] font-semibold mb-6 text-[18px]">
            Use cases:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
            {data.useCases.map((item: string) => (
              <div key={item} className="flex items-center gap-4">
                <TickIcon />
                <span className="text-[#2b2b2b] text-[16px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM OUTCOMES (ALIGNED WITH IMAGE END) */}
      <div className="pt-8">
        <div className="flex flex-wrap gap-3">
          {data.outcomes.map((outcome: string) => {
            const isUp = outcome.includes("↑");
            const isDown = outcome.includes("↓");

            return (
              <span
                key={outcome}
                className={`px-4 py-2 rounded-full text-[15px] font-medium
                  ${isUp
                    ? "bg-[#e8f8f1] text-[#0EB05C]"
                    : isDown
                      ? "bg-[#fdeaea] text-[#d92d20]"
                      : "bg-[#e6f6ff] text-[#007aaa]"
                  }
                `}
              >
                {outcome}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* SECTION */
/* ------------------------------------------------------------------ */

export default function IndustriesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white w-full px-4 sm:px-8 lg:px-[60px] py-12 lg:py-[60px]">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
        <div>
          <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold text-[#181818]">
            Industries & Use Cases
          </h2>
          <p className="text-[#8e8e8e] mt-2 max-w-[700px] text-[14px] sm:text-[15px]">
            Browse our comprehensive list of industries to explore tailored use
            cases and discover outcomes we've delivered.
          </p>
        </div>

        {/* NAVIGATION (DESKTOP ONLY) */}
        <div className="hidden lg:flex gap-4 items-center">
          <div onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowButton direction="prev" />
          </div>
          <div onClick={() => swiperRef.current?.slideNext()}>
            <ArrowButton direction="next" />
          </div>
        </div>
      </div>

      {/* SWIPER */}
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
