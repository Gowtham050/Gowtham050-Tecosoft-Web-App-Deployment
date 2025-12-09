"use client";

import svgPaths from "../../../imports/svg-plhzsxyavn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Content Configuration
const CORE_FEATURES_CONTENT = {
  title: "Core Features",
  description:
    "From precise sensor integration to automated maintenance and AI-driven predictions, each layer works together to create a connected, self-aware maintenance ecosystem.",
  features: [
    {
      icon: "chart-relationship",
      title: "Real‑time Energy Metering",
      description:
        "Precision sub‑metering captures energy flow from each asset and zone - creating a digital energy twin for your plant.",
    },
    {
      icon: "artificial-intelligence",
      title: "Edge Aggregation & Control",
      description:
        "EAGLE Gateway filters, processes, and controls energy data locally, enabling autonomous decision‑making at the edge.",
    },
    {
      icon: "database-export",
      title: "Automated Load Balancing",
      description:
        "Smart scheduling powered by AI distributes loads efficiently, reducing energy spikes and lowering operational costs.",
    },
    {
      icon: "danger",
      title: "AI‑driven Efficiency Optimization",
      description:
        "Predictive algorithms identify inefficiencies, forecast demand, and dynamically tune process parameters for optimal usage.",
    },
    {
      icon: "danger",
      title: "Self‑Learning Energy Models",
      description:
        "Machine learning models continuously learn from historical data to improve accuracy of consumption forecasts.",
    },
    {
      icon: "danger",
      title: "Self‑Learning Energy Models",
      description:
        "Machine learning models continuously learn from historical data to improve accuracy of consumption forecasts.",
    },
    {
      icon: "danger",
      title: "Self‑Learning Energy Models",
      description:
        "Machine learning models continuously learn from historical data to improve accuracy of consumption forecasts.",
    },
    {
      icon: "danger",
      title: "Self‑Learning Energy Models",
      description:
        "Machine learning models continuously learn from historical data to improve accuracy of consumption forecasts.",
    },
  ],
};

// Icon Components
function ChartRelationship() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[36px]"
      data-name="chart-relationship"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.33%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32 32"
          >
            <g>
              <path
                d="M14.5 5.5L25 5.5"
                id="Vector"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M13 13L19.75 19.75"
                id="Vector_2"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M5.5 14.5L5.5 25"
                id="Vector_3"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <circle
                cx="7.66667"
                cy="7.66667"
                id="Ellipse 1557"
                r="6.66667"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
              <circle
                cx="5.5"
                cy="28"
                id="Ellipse 1558"
                r="3"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
              <circle
                cx="22"
                cy="22"
                id="Ellipse 1559"
                r="3"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
              <circle
                cx="28"
                cy="5.5"
                id="Ellipse 1560"
                r="3"
                stroke="var(--stroke-0, white)"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArtificialIntelligence() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[36px]"
      data-name="artificial-intelligence-04"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.33%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32 32"
          >
            <g>
              <path
                d={svgPaths.p272cd480}
                id="Vector"
                stroke="var(--stroke-0, white)"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p69ef200}
                id="Vector_2"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M21.25 11.5V20.5"
                id="Vector_3"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p2cf251a0}
                id="Vector_4"
                stroke="var(--stroke-0, white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function DatabaseExport() {
  return (
    <div
      className="overflow-clip relative size-[36px]"
      data-name="database-export"
    >
      <div className="absolute flex inset-[8.33%_20.83%_8.33%_12.5%] items-center justify-center">
        <div className="flex-none h-[30px] scale-y-[-100%] w-[24px]">
          <div className="relative size-full" data-name="elements">
            <div className="absolute inset-[-3.33%_-4.17%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 26 32"
              >
                <g>
                  <ellipse
                    cx="13"
                    cy="5.5"
                    id="Ellipse 1578"
                    rx="12"
                    ry="4.5"
                    stroke="var(--stroke-0, white)"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.pc4a3780}
                    id="Vector"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p1c16d300}
                    id="Vector_2"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p10604900}
                    id="Vector_3"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p38e2870}
                    id="Vector_4"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.p2f4f6100}
                    id="Vector_5"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearDanger() {
  return (
    <div
      className="relative shrink-0 size-[36px]"
      data-name="vuesax/linear/danger"
    >
      <div
        className="absolute contents inset-0"
        data-name="vuesax/linear/danger"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <g id="danger">
            <path
              d="M18 13.5V21"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.pf025680}
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M17.9918 25.5H18.0052"
              id="Vector_3"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <g id="Vector_4" opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

// Feature Card Component
function CoreFeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const IconComponent =
    icon === "chart-relationship"
      ? ChartRelationship
      : icon === "artificial-intelligence"
      ? ArtificialIntelligence
      : icon === "database-export"
      ? DatabaseExport
      : VuesaxLinearDanger;

  return (
    <div className="bg-[rgba(255,255,255,0.16)] backdrop-blur-md box-border flex flex-col gap-[20px] items-start p-[24px] rounded-[16px] h-full min-h-[280px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.22)]">
      <div className="shrink-0">
        {icon === "database-export" ? (
          <div className="flex items-center justify-center">
            <div className="flex-none scale-y-[-100%]">
              <IconComponent />
            </div>
          </div>
        ) : (
          <IconComponent />
        )}
      </div>
      <div className="flex flex-col gap-[16px] flex-1">
        <h3 className="font-semibold leading-[28px] text-[#00ff84] text-[20px] m-0">
          {title}
        </h3>
        <p className="font-normal leading-[22px] text-[14px] text-white text-opacity-90 m-0">
          {description}
        </p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex flex-col md:flex-row items-start md:justify-between gap-6 md:gap-8 text-white w-full">
      <h2 className="font-semibold text-[36px] md:text-[42px] leading-[42px] md:leading-[50px] text-white m-0 whitespace-nowrap">
        {CORE_FEATURES_CONTENT.title}
      </h2>
      <p className="font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-white text-opacity-90 max-w-[645px] m-0">
        {CORE_FEATURES_CONTENT.description}
      </p>
    </div>
  );
}

// Custom Arrow Components for React Slick
interface ArrowProps {
  onClick?: () => void;
}

function CustomPrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-prev"
      aria-label="Previous slide"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function CustomNextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-next"
      aria-label="Next slide"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function Frame40() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.25,
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="core-features-slider w-full max-w-full">
      <style jsx>{`
        .core-features-slider :global(.slick-slide) {
          padding: 0 10px;
        }
        .core-features-slider :global(.slick-list) {
          margin: 0 -10px;
          overflow: visible;
        }
        .core-features-slider :global(.slick-track) {
          display: flex !important;
          align-items: stretch;
        }
        .core-features-slider :global(.slick-slide) {
          height: inherit !important;
        }
        .core-features-slider :global(.slick-slide > div) {
          height: 100%;
          min-width: 280px;
          max-width: 340px;
        }
        .core-features-slider :global(.slick-arrow) {
          display: flex !important;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          z-index: 10;
          position: absolute;
        }
        .core-features-slider :global(.slick-arrow:hover:not(.slick-disabled)) {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.08);
        }
        .core-features-slider :global(.slick-arrow.slick-disabled) {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .core-features-slider :global(.slick-arrow::before) {
          display: none;
        }
        .core-features-slider :global(.slick-prev) {
          left: 50%;
          transform: translateX(-58px);
          bottom: -85px;
          top: auto;
        }
        .core-features-slider :global(.slick-next) {
          right: 50%;
          transform: translateX(58px);
          bottom: -85px;
          top: auto;
        }
        .core-features-slider :global(.slick-prev:hover:not(.slick-disabled)) {
          transform: translateX(-58px) scale(1.08);
        }
        .core-features-slider :global(.slick-next:hover:not(.slick-disabled)) {
          transform: translateX(58px) scale(1.08);
        }

        @media (max-width: 768px) {
          .core-features-slider :global(.slick-prev) {
            bottom: -75px;
          }
          .core-features-slider :global(.slick-next) {
            bottom: -75px;
          }
          .core-features-slider :global(.slick-arrow) {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
      <Slider {...settings}>
        {CORE_FEATURES_CONTENT.features.map((feature, index) => (
          <div key={index} className="h-full">
            <CoreFeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function CoreFeatures() {
  return (
    <div
      className="box-border flex flex-col gap-[50px] md:gap-[60px] items-start px-6 md:px-16 lg:px-[100px] pt-[50px] md:pt-[60px] pb-[130px] md:pb-[150px] w-full overflow-hidden"
      data-name="Core features"
      style={{
        background: "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
      }}
    >
      <Frame35 />
      <Frame40 />
    </div>
  );
}

export default CoreFeatures;
