import React, { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-txc4khmm90";
// import imgRectangle59 from "figma:asset/cbd07f254dfbf3ad759e853c6d966c3252b8ad07.png";
// import imgRectangle60 from "figma:asset/f01f07ceb8ba38fc08ca15a17209afd0ee47f318.png";
// import imgRectangle61 from "figma:asset/f3618873d8cb715764fc03e465951335b8a8705c.png";

const imgRectangle59 = "/assets/pages/ai-enabled/cbd07f254dfbf3ad759e853c6d966c3252b8ad07.png";
const imgRectangle60 = "/assets/pages/ai-enabled/f01f07ceb8ba38fc08ca15a17209afd0ee47f318.png";
const imgRectangle61 = "/assets/pages/ai-enabled/f3618873d8cb715764fc03e465951335b8a8705c.png";

function Frame49() {
  return (
    <div className="content-stretch flex items-start justify-between not-italic relative shrink-0 text-white w-full">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[46px] relative shrink-0 text-[42px] text-nowrap whitespace-pre">
        Solutions
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-[650px]">
        Deliver smarter, scalable solutions with AI-driven
        workflows that reduce errors, enhance decision-making,
        and streamline execution across teams, systems, and
        end-to-end business operations.
      </p>
    </div>
  );
}

function IconoirArrowDown5() {
  return (
    <div
      className="relative size-[28px]"
      data-name="iconoir:arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p22ee4d80}
            id="Vector"
            stroke="var(--stroke-0, #181818)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.25"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#181818] text-[30px] text-nowrap whitespace-pre">
        Smart Energy Management
      </p>
      <div
        className="flex items-center justify-center relative shrink-0 size-[28px]"
        style={
          {
            "--transform-inner-width": "28",
            "--transform-inner-height": "28",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[270deg]">
          <IconoirArrowDown5 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame59 />
      <div className="font-['Gilroy:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8e8e8e] text-[16px] w-full">
        <p className="mb-0">{`Forecast, optimize, and automate energy efficiency across utilities and lines. Build a digital energy twin and let AI reduce cost, peaks, `}</p>
        <p>and carbon.</p>
      </div>
    </div>
  );
}

function AkarIconsThunder() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="akar-icons:thunder"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="akar-icons:thunder">
          <path
            d={svgPaths.p45a2780}
            id="Vector"
            stroke="var(--stroke-0, #0098D4)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(204,241,255,0.5)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <AkarIconsThunder />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">
            Real‑time Energy Metering
          </p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.91%_-3.91%_-3.91%_-3.9%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 21"
        >
          <g id="Group">
            <path
              d={svgPaths.p19c9e740}
              id="Vector"
              stroke="var(--stroke-0, #0098D4)"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.pcbd100}
              id="Vector_2"
              stroke="var(--stroke-0, #0098D4)"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p3404db00}
              id="Vector_3"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarCpuLinear() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="solar:cpu-linear"
    >
      <Group />
    </div>
  );
}

function Frame42() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(204,241,255,0.5)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <SolarCpuLinear />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">{`Edge Aggregation & Control`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function TablerBatteryCharging() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="tabler:battery-charging"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="tabler:battery-charging">
          <path
            d={svgPaths.p3e6ef80}
            id="Vector"
            stroke="var(--stroke-0, #0098D4)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(204,241,255,0.5)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <TablerBatteryCharging />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">
            Automated Load Balancing
          </p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[10%]" data-name="Group">
      <div className="absolute inset-[-3.91%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 21"
        >
          <g id="Group">
            <path
              d={svgPaths.p2c9a82ac}
              id="Vector"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p16b8ec00}
              id="Vector_2"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p124cf200}
              id="Vector_3"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.pcfd6f80}
              id="Vector_4"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TablerBrain() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="tabler:brain"
    >
      <Group2 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(204,241,255,0.5)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <TablerBrain />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">
            AI‑driven Optimization
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] self-stretch shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[30px] relative size-full">
          <Frame54 />
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Frame56({
  activeIndex,
  onDotClick,
}: {
  activeIndex: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="absolute h-[20px] left-1/2 top-[calc(50%+196px)] translate-x-[-50%] translate-y-[-50%] w-[50px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 50 20"
      >
        <g id="Frame 1171278946">
          <rect
            fill="var(--fill-0, white)"
            fillOpacity="0.24"
            height="20"
            rx="10"
            width="50"
          />
          <circle
            cx="10"
            cy="10"
            fill={
              activeIndex === 0
                ? "var(--fill-0, #00FF84)"
                : "var(--fill-0, white)"
            }
            id="Ellipse 13"
            r="5"
            className="cursor-pointer transition-all"
            onClick={() => onDotClick(0)}
          />
          <circle
            cx="25"
            cy="10"
            fill={
              activeIndex === 1
                ? "var(--fill-0, #00FF84)"
                : "var(--fill-0, white)"
            }
            id="Ellipse 14"
            r="5"
            className="cursor-pointer transition-all"
            onClick={() => onDotClick(1)}
          />
          <circle
            cx="40"
            cy="10"
            fill={
              activeIndex === 2
                ? "var(--fill-0, #00FF84)"
                : "var(--fill-0, white)"
            }
            id="Ellipse 15"
            r="5"
            className="cursor-pointer transition-all"
            onClick={() => onDotClick(2)}
          />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    imgRectangle59,
    imgRectangle60,
    imgRectangle61,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="h-[460px] relative rounded-[16px] shrink-0 w-[632px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            alt=""
            className={`absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full transition-opacity duration-500 ${
              activeIndex === index
                ? "opacity-100"
                : "opacity-0"
            }`}
            src={img}
          />
        ))}
      </div>
      <Frame56
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] relative rounded-[24px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start p-[20px] relative w-full">
          <Frame51 />
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame69({
  activeIndex,
  onDotClick,
}: {
  activeIndex: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="absolute h-[20px] left-1/2 top-[calc(50%+196px)] translate-x-[-50%] translate-y-[-50%] w-[50px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 50 20"
      >
        <g id="Frame 1171278946">
          <rect
            fill="var(--fill-0, white)"
            fillOpacity="0.24"
            height="20"
            rx="10"
            width="50"
          />
          <circle
            cx="10"
            cy="10"
            fill={
              activeIndex === 0
                ? "var(--fill-0, #00FF84)"
                : "var(--fill-0, white)"
            }
            id="Ellipse 13"
            r="5"
            className="cursor-pointer transition-all"
            onClick={() => onDotClick(0)}
          />
          <circle
            cx="25"
            cy="10"
            fill={
              activeIndex === 1
                ? "var(--fill-0, #00FF84)"
                : "var(--fill-0, white)"
            }
            id="Ellipse 14"
            r="5"
            className="cursor-pointer transition-all"
            onClick={() => onDotClick(1)}
          />
          <circle
            cx="40"
            cy="10"
            fill={
              activeIndex === 2
                ? "var(--fill-0, #00FF84)"
                : "var(--fill-0, white)"
            }
            id="Ellipse 15"
            r="5"
            className="cursor-pointer transition-all"
            onClick={() => onDotClick(2)}
          />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    imgRectangle60,
    imgRectangle59,
    imgRectangle61,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="h-[460px] relative rounded-[16px] shrink-0 w-[632px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            alt=""
            className={`absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full transition-opacity duration-500 ${
              activeIndex === index
                ? "opacity-100"
                : "opacity-0"
            }`}
            src={img}
          />
        ))}
      </div>
      <Frame69
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
}

function IconoirArrowDown6() {
  return (
    <div
      className="relative size-[28px]"
      data-name="iconoir:arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p22ee4d80}
            id="Vector"
            stroke="var(--stroke-0, #181818)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.25"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#181818] text-[30px] text-nowrap whitespace-pre">
        Predictive Maintenance
      </p>
      <div
        className="flex items-center justify-center relative shrink-0 size-[28px]"
        style={
          {
            "--transform-inner-width": "28",
            "--transform-inner-height": "28",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[270deg]">
          <IconoirArrowDown6 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame71 />
      <p className="font-['Gilroy:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#8e8e8e] text-[16px] w-[529px]">
        Move from reactive to proactive maintenance. Predict
        failures, schedule service automatically, and sustain
        peak performance across assets and shifts.
      </p>
    </div>
  );
}

function Elements1() {
  return (
    <div
      className="absolute inset-[8.33%]"
      data-name="elements"
    >
      <div className="absolute inset-[-3.75%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 22"
        >
          <g>
            <circle
              cx="5"
              cy="5"
              id="Ellipse 1574"
              r="4.25"
              stroke="var(--stroke-0, #069235)"
              strokeWidth="1.5"
            />
            <circle
              cx="16.5"
              cy="16.5"
              id="Ellipse 1575"
              r="4.25"
              stroke="var(--stroke-0, #069235)"
              strokeWidth="1.5"
            />
            <circle
              cx="5"
              cy="16.5"
              id="Ellipse 1576"
              r="4.25"
              stroke="var(--stroke-0, #069235)"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p2be34700}
              id="Vector"
              stroke="var(--stroke-0, #069235)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DashboardCircleAdd() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="dashboard-circle-add"
    >
      <Elements1 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(205,239,217,0.46)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <DashboardCircleAdd />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">
            Sensors Integration
          </p>
        </div>
      </div>
    </div>
  );
}

function StreamlineStar() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="streamline:star-2"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_1_430)" id="streamline:star-2">
          <path
            d={svgPaths.p31b92700}
            id="Vector"
            stroke="var(--stroke-0, #069235)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_430">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(205,239,217,0.46)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <StreamlineStar />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">
            Edge Intelligence
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame45 />
      <Frame73 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute inset-[7.14%_7.09%_11.31%_7.07%]"
      data-name="Group"
    >
      <div className="absolute inset-[-3.83%_-3.64%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 23 22"
        >
          <g id="Group">
            <path
              d={svgPaths.p3fa69480}
              id="Vector"
              stroke="var(--stroke-0, #069235)"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p3fea0180}
              id="Vector_2"
              stroke="var(--stroke-0, #069235)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarServerLinear() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="solar:server-linear"
    >
      <Group3 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(205,239,217,0.46)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <SolarServerLinear />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">
            Automated Maintenance
          </p>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute inset-[11.89%_8.33%_16.98%_8.33%]"
      data-name="Group"
    >
      <div className="absolute inset-[-4.39%_-3.75%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 19"
        >
          <g id="Group">
            <path
              d={svgPaths.p13657ee0}
              id="Vector"
              stroke="var(--stroke-0, #069235)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p323e2780}
              id="Vector_2"
              stroke="var(--stroke-0, #069235)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M10.75 10.75V7.11362"
              id="Vector_3"
              stroke="var(--stroke-0, #069235)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineDashboard() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="icon-park-outline:dashboard"
    >
      <Group4 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(205,239,217,0.46)] grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-start p-[14px] relative w-full">
          <IconParkOutlineDashboard />
          <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">
            Failure Prediction
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame75 />
      <Frame76 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame74 />
      <Frame77 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] self-stretch shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[30px] relative size-full">
          <Frame72 />
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[rgba(255,255,255,0.24)] relative rounded-[24px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start p-[20px] relative w-full">
          <Frame70 />
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame50 />
      <Frame80 />
    </div>
  );
}

function Solutions() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Solutions"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div
          className="box-border content-stretch flex flex-col gap-[60px] items-start px-[100px] py-[60px] relative w-full"
          style={{
            background:
              "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
          }}
        >
          <Frame49 />
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

export default Solutions;