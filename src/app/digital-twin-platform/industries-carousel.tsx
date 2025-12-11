"use client";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 w-full">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[54px] relative shrink-0 text-[#0098d4] text-[42px] w-[411px]">
        Digital Twins for Your Industry
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#636363] text-[18px] w-[648px]">
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

  useEffect(() => {
    if (cardRef.current) {
      if (isActive) {
        gsap.to(cardRef.current, {
          width: 582,
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
          width: 130,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      onClick={!isActive ? onClick : undefined}
      className={`h-[520px] overflow-clip relative rounded-[12px] shrink-0 transition-all ${
        !isActive ? "cursor-pointer hover:scale-105" : ""
      }`}
      style={{ width: isActive ? "582px" : "130px" }}
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
          className="absolute bottom-[30px] left-[30px] right-[30px] flex flex-col gap-[30px] z-10"
        >
          <div className="content-stretch flex flex-col gap-[14px] items-start not-italic">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[36px] text-[#00ff84] text-[32px] text-nowrap whitespace-pre">
              {industry.title}
            </p>
            <div className="font-['Gilroy:Medium',sans-serif] leading-[22px] text-[#d2d2d2] text-[16px]">
              <p className="mb-0">{industry.description}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start">
            <div className="content-stretch flex gap-[16px] items-center w-full">
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[8px]">
                <div className="flex items-center justify-center px-[14px] py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] text-[15px] text-nowrap text-white whitespace-pre">
                    {industry.tags[0]}
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[8px]">
                <div className="flex items-center justify-center px-[14px] py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] text-[15px] text-nowrap text-white whitespace-pre">
                    {industry.tags[1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center w-full">
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[8px]">
                <div className="flex items-center justify-center px-[14px] py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] text-[15px] text-nowrap text-white whitespace-pre">
                    {industry.tags[2]}
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow rounded-[8px]">
                <div className="flex items-center justify-center px-[14px] py-[12px]">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] text-[15px] text-nowrap text-white whitespace-pre">
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
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[42px] not-italic text-[28px] text-nowrap text-white whitespace-pre">
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
      className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all hover:cursor-pointer"
      aria-label={direction === "prev" ? "Previous industry" : "Next industry"}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#aae7ff] border-solid inset-0 pointer-events-none rounded-[8px]"
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
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    arrows: false,
    swipe: true,
    draggable: true,
    variableWidth: true,
    beforeChange: (current: number, next: number) => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSlide(next);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }, 100);
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          variableWidth: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  };

  const handleCardClick = (index: number) => {
    if (activeSlide !== index && !isTransitioning) {
      setIsTransitioning(true);
      sliderRef.current?.slickGoTo(index);
      setTimeout(() => {
        setActiveSlide(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }, 100);
    }
  };

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div
      className="bg-[#e0f6fa] content-stretch flex flex-col gap-[50px] items-center overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1512px]"
      data-name="Industries"
    >
      <Frame42 />

      <div className="content-stretch relative shrink-0 w-full">
        <style jsx global>{`
          .industries-slider .slick-slide {
            padding: 0 8px;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .industries-slider .slick-list {
            margin: 0 -8px;
            overflow: hidden;
          }
          .industries-slider .slick-track {
            display: flex !important;
            gap: 0;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          .industries-slider .slick-slide > div {
            display: flex;
            justify-content: center;
            width: 100%;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .industries-slider .slick-slide.slick-active {
            z-index: 10;
          }
        `}</style>
        <Slider ref={sliderRef} {...settings} className="industries-slider">
          {industries.map((industry, index) => (
            <div key={industry.id}>
              <IndustryCard
                industry={industry}
                isActive={index === activeSlide}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
        <CustomArrow onClick={handlePrevious} direction="prev" />
        <CustomArrow onClick={handleNext} direction="next" />
      </div>
    </div>
  );
}

export default IndustriesCarousel;
