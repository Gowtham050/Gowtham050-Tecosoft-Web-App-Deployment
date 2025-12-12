"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import { gsap } from "gsap";
import svgPaths from "../../imports/svg-zvmjtzwbe4";

const industries = [
  {
    id: 0,
    title: "Smart Energy Management",
    subtitle: "Smart Energy Management",
    description:
      "Forecast, optimize, and automate energy efficiency across utilities and lines. Build a digital energy twin and let AI reduce cost, peaks, and carbon.",
    image:
      "/assets/pages/digital-twin-platform/5d4f19825559777cc57fee70478564d07d866ce7.png",
    tags: [
      "Line & Cell Modeling",
      "Condition & Process Twin",
      "Anomaly & RUL",
      "Scenario Simulation",
    ],
  },
  {
    id: 1,
    title: "Energy & Utilities",
    subtitle: "Energy & Utilities",
    description:
      "Build a grid-aware twin for plants, microgrids, and utilities to forecast demand, orchestrate loads, and integrate renewables.",
    image:
      "/assets/pages/digital-twin-platform/1d9ecc089142280cfa9db0f3c0f1abce5029dd66.png",
    tags: [
      "Load Forecasting",
      "DER Orchestration",
      "Carbon Tracking",
      "Tariff Optimization",
    ],
  },
  {
    id: 2,
    title: "Oil & Gas",
    subtitle: "Oil & Gas",
    description:
      "From reservoirs and wells to pipelines and plants—unify models to optimize throughput, integrity, and safety.",
    image:
      "/assets/pages/digital-twin-platform/9309dccf64f1303adcc012f237f719382b3c67ca.png",
    tags: [
      "Well & Flow Assurance",
      "Predictive Integrity",
      "Production Optimization",
      "Emissions",
    ],
  },
  {
    id: 3,
    title: "Healthcare",
    subtitle: "Healthcare",
    description:
      "Digital twins for hospital operations, patient flow, and medical equipment. Optimize resource allocation and improve patient outcomes.",
    image:
      "/assets/pages/digital-twin-platform/f6058f802ce72f17fabed2207bcc69a51d093449.png",
    tags: [
      "Patient Flow",
      "Equipment Tracking",
      "Resource Planning",
      "Facility Management",
    ],
  },
  {
    id: 4,
    title: "Logistics & Warehousing",
    subtitle: "Logistics & Warehousing",
    description:
      "Optimize warehouse operations, inventory management, and supply chain logistics. Reduce costs and improve delivery times.",
    image:
      "/assets/pages/digital-twin-platform/56ea414f0372a5f85e31c9ca107c2b1c3d5f9df3.png",
    tags: [
      "Inventory Tracking",
      "Route Optimization",
      "Warehouse Layout",
      "Fleet Management",
    ],
  },
  {
    id: 5,
    title: "Smart Cities",
    subtitle: "Smart Cities",
    description:
      "Create digital twins of urban infrastructure for traffic management, utilities, and public services. Build sustainable, efficient cities.",
    image:
      "/assets/pages/digital-twin-platform/27b1cb6fffa72b17039db1871a1f519745ca5b1f.png",
    tags: [
      "Traffic Management",
      "Infrastructure",
      "Public Services",
      "Sustainability",
    ],
  },
];

function Frame42() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between not-italic relative shrink-0 w-full gap-4 md:gap-6">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[38px] md:leading-[48px] lg:leading-[54px] text-[#0098d4] text-[28px] md:text-[36px] lg:text-[42px] w-full md:w-auto md:max-w-[411px] m-0">
        Digital Twins for Your Industry
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[22px] md:leading-[24px] lg:leading-[26px] text-[#636363] text-[14px] md:text-[16px] lg:text-[18px] w-full md:max-w-[648px] m-0">
        Built to adapt across industries, our AI-driven platform reduces errors,
        strengthens decision-making, and streamlines execution for operations of
        every size and complexity.
      </p>
    </div>
  );
}

function IconoirArrowDown() {
  return (
    <div className="relative size-[22px]" data-name="iconoir:arrow-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p14bd7580}
            id="Vector"
            stroke="var(--stroke-0, #007AAA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

interface IndustryCardProps {
  industry: (typeof industries)[0];
  isActive: boolean;
  onClick: () => void;
}

function IndustryCard({ industry, isActive, onClick }: IndustryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getResponsiveWidth = () => {
    if (typeof window === 'undefined') return isActive ? 582 : 130;

    const width = window.innerWidth;
    if (width < 576) {
      // Mobile: always full width
      return "100%";
    }

    if (isActive) {
      if (width < 768) return 400; // Small tablets
      if (width < 992) return 450; // Tablets
      if (width < 1200) return 500; // Small laptops
      return 582; // Desktops
    } else {
      if (width < 768) return 100; // Small tablets
      if (width < 992) return 110; // Tablets
      if (width < 1200) return 120; // Small laptops
      return 130; // Desktops
    }
  };

  useEffect(() => {
    if (cardRef.current && isMounted) {
      if (isActive) {
        gsap.to(cardRef.current, {
          width: getResponsiveWidth(),
          duration: 0.8,
          ease: "power2.out",
        });

        // Fade in content after card expands
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
          );
        }
      } else {
        // Fade out content before card collapses
        if (contentRef.current) {
          gsap.to(contentRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          });
        }

        gsap.to(cardRef.current, {
          width: getResponsiveWidth(),
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    }
  }, [isActive, isMounted]);

  // Handle window resize
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (cardRef.current) {
        gsap.set(cardRef.current, {
          width: getResponsiveWidth(),
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive, isMounted]);

  return (
    <div
      ref={cardRef}
      onClick={!isActive ? onClick : undefined}
      className={`w-full sm:w-auto h-[420px] sm:h-[450px] md:h-[480px] lg:h-[520px] overflow-clip relative rounded-[12px] shrink-0 transition-all ${
        !isActive ? "cursor-pointer hover:scale-105" : ""
      }`}
      style={{
        width: isMounted ? getResponsiveWidth() : (isActive ? "100%" : "130px"),
        minWidth: isMounted && typeof window !== 'undefined' && window.innerWidth < 576 ? "100%" : "auto"
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[12px] overflow-hidden"
      >
        <img
          alt=""
          className="absolute max-w-none object-cover rounded-[12px] size-full object-center"
          src={industry.image}
        />
        {isActive ? (
          <div className="absolute bg-gradient-to-b from-[rgba(17,17,17,0)] inset-0 rounded-[12px] to-90% to-[#111111]" />
        ) : (
          <div className="absolute backdrop-blur-[1.5px] backdrop-filter bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[rgba(0,0,0,0.8)]" />
        )}
      </div>

      {isActive ? (
        <div
          ref={contentRef}
          className="absolute bottom-[20px] sm:bottom-[25px] lg:bottom-[30px] left-[20px] sm:left-[25px] lg:left-[30px] right-[20px] sm:right-[25px] lg:right-[30px] flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] z-10"
        >
          <div className="content-stretch flex flex-col gap-[10px] sm:gap-[12px] lg:gap-[14px] items-start not-italic">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[28px] sm:leading-[32px] lg:leading-[36px] text-[#00ff84] text-[24px] sm:text-[28px] lg:text-[32px] text-nowrap whitespace-pre m-0">
              {industry.title}
            </p>
            <div className="font-['Gilroy:Medium',sans-serif] leading-[18px] sm:leading-[20px] lg:leading-[22px] text-[#d2d2d2] text-[13px] sm:text-[14px] lg:text-[16px]">
              <p className="mb-0">{industry.description}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px] items-start">
            <div className="content-stretch flex gap-[12px] sm:gap-[14px] lg:gap-[16px] items-center w-full">
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[6px] sm:rounded-[7px] lg:rounded-[8px]">
                <div className="flex items-center justify-center px-[10px] sm:px-[12px] lg:px-[14px] py-[8px] sm:py-[10px] lg:py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[12px] sm:text-[13px] lg:text-[15px] text-center text-white m-0">
                    {industry.tags[0]}
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[6px] sm:rounded-[7px] lg:rounded-[8px]">
                <div className="flex items-center justify-center px-[10px] sm:px-[12px] lg:px-[14px] py-[8px] sm:py-[10px] lg:py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[12px] sm:text-[13px] lg:text-[15px] text-center text-white m-0">
                    {industry.tags[1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] sm:gap-[14px] lg:gap-[16px] items-center w-full">
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[6px] sm:rounded-[7px] lg:rounded-[8px]">
                <div className="flex items-center justify-center px-[10px] sm:px-[12px] lg:px-[14px] py-[8px] sm:py-[10px] lg:py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[12px] sm:text-[13px] lg:text-[15px] text-center text-white m-0">
                    {industry.tags[2]}
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[6px] sm:rounded-[7px] lg:rounded-[8px]">
                <div className="flex items-center justify-center px-[10px] sm:px-[12px] lg:px-[14px] py-[8px] sm:py-[10px] lg:py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[12px] sm:text-[13px] lg:text-[15px] text-center text-white m-0">
                    {industry.tags[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42px]">
          <div className="flex-none rotate-[270deg]">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[32px] sm:leading-[36px] lg:leading-[42px] not-italic text-[22px] sm:text-[24px] lg:text-[28px] text-nowrap text-white whitespace-pre m-0">
              {industry.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

interface CustomArrowProps {
  onClick?: () => void;
  direction: "prev" | "next";
}

function CustomArrow({ onClick, direction }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white content-stretch flex items-center justify-center p-[10px] sm:p-[12px] relative rounded-[6px] sm:rounded-[8px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all hover:cursor-pointer"
      aria-label={direction === "prev" ? "Previous industry" : "Next industry"}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#aae7ff] border-solid inset-0 pointer-events-none rounded-[6px] sm:rounded-[8px]"
      />
      <div className="flex items-center justify-center relative shrink-0">
        <div
          className={
            direction === "prev"
              ? "flex-none rotate-[180deg] scale-y-[-100%]"
              : ""
          }
        >
          <IconoirArrowDown />
        </div>
      </div>
    </button>
  );
}

function IndustriesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);
  const programmaticSlide = useRef(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const swiperOptions: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 16,
    loop: false,
    speed: 600,
    centeredSlides: false,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    initialSlide: 0,
    breakpoints: {
      // Mobile (0-399px)
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
      },
      // Small mobile (400-499px)
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
      },
      // Mobile (500-767px)
      500: {
        slidesPerView: 2,
        spaceBetween: 12,
        centeredSlides: false,
      },
      // Tablets (768-1023px)
      768: {
        slidesPerView: 3,
        spaceBetween: 14,
        centeredSlides: false,
      },
      // Small laptops (1024-1279px)
      1024: {
        slidesPerView: 4,
        spaceBetween: 16,
        centeredSlides: false,
      },
      // Laptops (1280-1399px)
      1280: {
        slidesPerView: 5,
        spaceBetween: 16,
        centeredSlides: false,
      },
      // Desktops (1400px+)
      1400: {
        slidesPerView: 6,
        spaceBetween: 16,
        centeredSlides: false,
      },
    },
  };

  const handleSwiper = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    // Only update active slide for manual swipes (not programmatic slides)
    if (!programmaticSlide.current && !isTransitioning) {
      setIsTransitioning(true);
      setActiveSlide(swiper.activeIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
    programmaticSlide.current = false;
  };

  const handleCardClick = (index: number) => {
    if (activeSlide !== index && !isTransitioning && swiperRef.current) {
      programmaticSlide.current = true;
      setIsTransitioning(true);
      setActiveSlide(index);
      swiperRef.current.slideTo(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (swiperRef.current && !isTransitioning) {
      programmaticSlide.current = true;
      setIsTransitioning(true);
      const newIndex = activeSlide > 0 ? activeSlide - 1 : industries.length - 1;
      setActiveSlide(newIndex);
      swiperRef.current.slideTo(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && !isTransitioning) {
      programmaticSlide.current = true;
      setIsTransitioning(true);
      const newIndex = activeSlide < industries.length - 1 ? activeSlide + 1 : 0;
      setActiveSlide(newIndex);
      swiperRef.current.slideTo(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  // Update swiper when active slide changes (after GSAP animations)
  useEffect(() => {
    if (swiperRef.current) {
      // Delay to allow GSAP animations to complete
      const timer = setTimeout(() => {
        swiperRef.current?.update();
      }, 900); // 800ms GSAP animation + 100ms buffer

      return () => clearTimeout(timer);
    }
  }, [activeSlide]);

  // Handle resize to update swiper
  useEffect(() => {
    const onResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="bg-[#e0f6fa] content-stretch flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px] items-center overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[100px] py-[40px] md:py-[50px] lg:py-[60px] relative shrink-0 w-full max-w-[1512px] mx-auto"
      data-name="Industries"
    >
      <Frame42 />

      <div className="content-stretch relative shrink-0 w-full overflow-visible min-h-[450px]">
        <style jsx global>{`
          .industries-slider {
            overflow: visible !important;
          }
          .industries-slider .swiper-wrapper {
            display: flex !important;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          .industries-slider .swiper-slide {
            width: auto !important;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            height: auto !important;
          }
          @media (max-width: 575px) {
            .industries-slider .swiper-slide {
              width: 100% !important;
            }
          }
          .industries-slider .swiper-slide-active {
            z-index: 10;
          }
        `}</style>
        {isClient ? (
          <Swiper
            {...swiperOptions}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            className="industries-slider !overflow-visible"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={industry.id}>
                <IndustryCard
                  industry={industry}
                  isActive={index === activeSlide}
                  onClick={() => handleCardClick(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex items-center justify-center w-full min-h-[450px]">
            <div className="text-[#0098d4] text-lg">Loading...</div>
          </div>
        )}
      </div>

      <div className="content-stretch flex gap-[8px] sm:gap-[10px] items-center justify-center relative shrink-0 w-full sm:w-auto">
        <CustomArrow onClick={handlePrevious} direction="prev" />
        <CustomArrow onClick={handleNext} direction="next" />
      </div>
    </div>
  );
}

export default IndustriesCarousel;
