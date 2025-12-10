"use client";
import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "../../imports/svg-zvmjtzwbe4";

// import imgFrame1171278959 from "figma:asset/5d4f19825559777cc57fee70478564d07d866ce7.png";
// import imgFrame1171278964 from "figma:asset/1d9ecc089142280cfa9db0f3c0f1abce5029dd66.png";
// import imgFrame1171278963 from "figma:asset/9309dccf64f1303adcc012f237f719382b3c67ca.png";
// import imgFrame1171278962 from "figma:asset/f6058f802ce72f17fabed2207bcc69a51d093449.png";
// import imgFrame1171278961 from "figma:asset/56ea414f0372a5f85e31c9ca107c2b1c3d5f9df3.png";
// import imgFrame1171278960 from "figma:asset/27b1cb6fffa72b17039db1871a1f519745ca5b1f.png";

// const imgFrame1171278959 =
//   "./assets/pages/digital-twin-platform/5d4f19825559777cc57fee70478564d07d866ce7.png";
// const imgFrame1171278964 =
//   "./assets/pages/digital-twin-platform/1d9ecc089142280cfa9db0f3c0f1abce5029dd66.png";
// const imgFrame1171278963 =
//   "./assets/pages/digital-twin-platform/9309dccf64f1303adcc012f237f719382b3c67ca.png";
// const imgFrame1171278962 =
//   "./assets/pages/digital-twin-platform/f6058f802ce72f17fabed2207bcc69a51d093449.png";
// const imgFrame1171278961 =
//   "./assets/pages/digital-twin-platform/56ea414f0372a5f85e31c9ca107c2b1c3d5f9df3.png";
// const imgFrame1171278960 =
//   "./assets/pages/digital-twin-platform/27b1cb6fffa72b17039db1871a1f519745ca5b1f.png";

const industries = [
  {
    id: 0,
    title: "Smart Energy Management",
    subtitle: "Smart Energy Management",
    description:
      "Forecast, optimize, and automate energy efficiency across utilities and lines. Build a digital energy twin and let AI reduce cost, peaks, and carbon.",
    image: "/assets/pages/digital-twin-platform/5d4f19825559777cc57fee70478564d07d866ce7.png",
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
    image: "/assets/pages/digital-twin-platform/1d9ecc089142280cfa9db0f3c0f1abce5029dd66.png",
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
    image: "/assets/pages/digital-twin-platform/9309dccf64f1303adcc012f237f719382b3c67ca.png",
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
    image: "/assets/pages/digital-twin-platform/f6058f802ce72f17fabed2207bcc69a51d093449.png",
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
    image: "/assets/pages/digital-twin-platform/56ea414f0372a5f85e31c9ca107c2b1c3d5f9df3.png",
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
    image: "/assets/pages/digital-twin-platform/27b1cb6fffa72b17039db1871a1f519745ca5b1f.png",
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

function IconoirArrowDown5() {
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

function IconoirArrowDown6() {
  return (
    <div
      className="relative shrink-0 size-[22px]"
      data-name="iconoir:arrow-down"
    >
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

interface ExpandedCardProps {
  industry: (typeof industries)[0];
}

const ExpandedCard = forwardRef<HTMLDivElement, ExpandedCardProps>(
  ({ industry }, ref) => {
    return (
      <div
        ref={ref}
        className="content-stretch flex flex-col gap-[30px] h-[520px] items-start justify-end overflow-clip p-[30px] relative rounded-[12px] shrink-0 w-[582px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[12px]"
        >
          <img
            alt=""
            className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
            src={industry.image}
          />
          <div className="absolute bg-gradient-to-b from-[rgba(17,17,17,0)] inset-0 rounded-[12px] to-90% to-[#111111]" />
        </div>
        <div className="content-stretch flex flex-col gap-[14px] items-start not-italic relative shrink-0 w-full z-10">
          <p className="font-['Gilroy:Semibold',sans-serif] leading-[36px] relative shrink-0 text-[#00ff84] text-[32px] text-nowrap whitespace-pre">
            {industry.title}
          </p>
          <div className="font-['Gilroy:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#d2d2d2] text-[16px] w-[min-content]">
            <p className="mb-0">{industry.description}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[14px] py-[12px] relative w-full">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">
                    {industry.tags[0]}
                  </p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[14px] py-[12px] relative w-full">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">
                    {industry.tags[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[14px] py-[12px] relative w-full">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">
                    {industry.tags[2]}
                  </p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.24)] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[14px] py-[12px] relative w-full">
                  <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">
                    {industry.tags[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ExpandedCard.displayName = "ExpandedCard";

interface CollapsedCardProps {
  industry: (typeof industries)[0];
  onClick: () => void;
}

const CollapsedCard = forwardRef<HTMLDivElement, CollapsedCardProps>(
  ({ industry, onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className="h-[520px] overflow-clip relative rounded-[12px] shrink-0 w-[130px] cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img
            alt=""
            className="absolute max-w-none object-cover rounded-[12px] size-full object-center"
            src={industry.image}
          />
        </div>
        <div className="absolute backdrop-blur-[1.5px] backdrop-filter bg-gradient-to-b from-[rgba(0,0,0,0)] h-[520px] left-0 rounded-[16px] to-[rgba(0,0,0,0.8)] top-0 w-[130px]" />
        <div className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42px]">
          <div className="flex-none rotate-[270deg]">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[42px] not-italic relative text-[28px] text-nowrap text-white whitespace-pre">
              {industry.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

CollapsedCard.displayName = "CollapsedCard";

const MotionExpandedCard = motion.create(ExpandedCard);
const MotionCollapsedCard = motion.create(CollapsedCard);

function IndustriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedPosition, setExpandedPosition] = useState(0); // 0, 1, or 2 for 1st, 2nd, 3rd position

  const handlePrevious = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === 0 ? industries.length - 1 : prev - 1;
      return newIndex;
    });
    // Cycle through expanded positions: 0 -> 2 -> 1 -> 0
    setExpandedPosition((prev) => {
      if (prev === 0) return 2;
      if (prev === 2) return 1;
      return 0;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === industries.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
    // Cycle through expanded positions: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 0
    setExpandedPosition((prev) => (prev + 1) % 6);
  };

  const handleCardClick = (clickedIndex: number) => {
    setActiveIndex(clickedIndex);
    // Set expanded position based on which card was clicked
    const visibleCards = getVisibleCards();
    const clickedPosition = visibleCards.findIndex(
      (card) => card.id === industries[clickedIndex].id
    );
    if (clickedPosition !== -1 && clickedPosition !== expandedPosition) {
      setExpandedPosition(clickedPosition);
    }
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < 6; i++) {
      const index = (activeIndex + i) % industries.length;
      visible.push(industries[index]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  // Rearrange cards based on expanded position
  const renderCards = () => {
    const cards = [];

    for (let i = 0; i < 6; i++) {
      const isExpanded = i === expandedPosition;
      const card = visibleCards[i];

      if (isExpanded) {
        // Cards at position 2-6 expand from right to left
        const expandFromRight = i >= 2;

        cards.push(
          <MotionExpandedCard
            key={`expanded-${card.id}-${expandedPosition}`}
            industry={card}
            layout
            initial={{
              opacity: 0,
              x: expandFromRight ? 50 : -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: expandFromRight ? 50 : -50,
            }}
            transition={{
              layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.6, ease: "easeInOut" },
              x: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{
              transformOrigin: expandFromRight ? "right center" : "left center",
            }}
          />
        );
      } else {
        cards.push(
          <MotionCollapsedCard
            key={`collapsed-${card.id}-${i}`}
            industry={card}
            onClick={() => {
              const clickedGlobalIndex = (activeIndex + i) % industries.length;
              handleCardClick(clickedGlobalIndex);
            }}
            layout
            transition={{
              layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            }}
          />
        );
      }
    }

    return cards;
  };

  return (
    <div
      className="bg-[#e0f6fa] content-stretch flex flex-col gap-[50px] items-center overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1512px]"
      data-name="Industries"
    >
      <Frame42 />

      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        <AnimatePresence mode="popLayout">{renderCards()}</AnimatePresence>
      </div>

      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
        <button
          onClick={handlePrevious}
          className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Previous industry"
        >
          <div
            aria-hidden="true"
            className="absolute border border-[#aae7ff] border-solid inset-0 pointer-events-none rounded-[8px]"
          />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <IconoirArrowDown5 />
            </div>
          </div>
        </button>
        <button
          onClick={handleNext}
          className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all"
          aria-label="Next industry"
        >
          <div
            aria-hidden="true"
            className="absolute border border-[#aae7ff] border-solid inset-0 pointer-events-none rounded-[8px]"
          />
          <IconoirArrowDown6 />
        </button>
      </div>
    </div>
  );
}
export default IndustriesCarousel;
