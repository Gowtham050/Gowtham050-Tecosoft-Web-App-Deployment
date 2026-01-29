"use client";

import { IndustriesCarousel } from "@/components/IndustriesCarousel";
import svgPaths from "../../imports/svg-wzyskd72fo";
// import img from "figma:asset/f68e97624cc30902e3d6742d87a8b33b4cde4f79.png";

const img =
  "/assets/pages/industries/f68e97624cc30902e3d6742d87a8b33b4cde4f79.png";

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[700px]">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[44px] relative shrink-0 text-[#181818] text-[36px] text-center">{`Industries & Use Cases`}</p>
      <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">{`Browse our comprehensive list of industries to explore tailored use cases and discover the transformative outcomes we've delivered for businesses like yours.`}</p>
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

function Frame28() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconoirArrowDown5 />
        </div>
      </div>
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

function Frame27() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <IconoirArrowDown6 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame28 />
      <Frame27 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame34 />
      <Frame89 />
    </div>
  );
}

function Component() {
  return (
    <div
      className="flex-[1_0_0] h-[446px] min-h-px min-w-px relative rounded-[16px]"
      data-name="`"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
        src={img}
      />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[32px] relative shrink-0 text-[#005b80] text-[28px]">
        Manufacturing
      </p>
      <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">
        Digitize operations from shopfloor to leadership using connected assets,
        role-ready dashboards, and AI-driven decisions that improve visibility,
        speed, accountability, and smarter outcomes across teams.
      </p>
    </div>
  );
}

function VuesaxBoldTickCircle() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/bold/tick-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="tick-circle">
          <path
            d={svgPaths.p1a881f00}
            fill="url(#paint0_linear_2_1316)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1316"
            x1="14.7826"
            x2="5.38498"
            y1="5.27778"
            y2="14.181"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxBoldTickCircle1() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="vuesax/bold/tick-circle"
    >
      <VuesaxBoldTickCircle />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <VuesaxBoldTickCircle1 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px]">{`Real-Time Production Tracking `}</p>
    </div>
  );
}

function VuesaxBoldTickCircle2() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/bold/tick-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="tick-circle">
          <path
            d={svgPaths.p1a881f00}
            fill="url(#paint0_linear_2_1316)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1316"
            x1="14.7826"
            x2="5.38498"
            y1="5.27778"
            y2="14.181"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxBoldTickCircle3() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="vuesax/bold/tick-circle"
    >
      <VuesaxBoldTickCircle2 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <VuesaxBoldTickCircle3 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px]">{`Tool Life & Calibration`}</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame36 />
      <Frame81 />
    </div>
  );
}

function VuesaxBoldTickCircle4() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/bold/tick-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="tick-circle">
          <path
            d={svgPaths.p1a881f00}
            fill="url(#paint0_linear_2_1316)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1316"
            x1="14.7826"
            x2="5.38498"
            y1="5.27778"
            y2="14.181"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxBoldTickCircle5() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="vuesax/bold/tick-circle"
    >
      <VuesaxBoldTickCircle4 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <VuesaxBoldTickCircle5 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px]">{`Digital Work Instructions `}</p>
    </div>
  );
}

function VuesaxBoldTickCircle6() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/bold/tick-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="tick-circle">
          <path
            d={svgPaths.p1a881f00}
            fill="url(#paint0_linear_2_1316)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1316"
            x1="14.7826"
            x2="5.38498"
            y1="5.27778"
            y2="14.181"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxBoldTickCircle7() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="vuesax/bold/tick-circle"
    >
      <VuesaxBoldTickCircle6 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <VuesaxBoldTickCircle7 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px]">{`Maintenance Planning & CMMS Sync`}</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame37 />
      <Frame82 />
    </div>
  );
}

function VuesaxBoldTickCircle8() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/bold/tick-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="tick-circle">
          <path
            d={svgPaths.p1a881f00}
            fill="url(#paint0_linear_2_1316)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1316"
            x1="14.7826"
            x2="5.38498"
            y1="5.27778"
            y2="14.181"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxBoldTickCircle9() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="vuesax/bold/tick-circle"
    >
      <VuesaxBoldTickCircle8 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <VuesaxBoldTickCircle9 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px]">{`SPC & Quality Traceability `}</p>
    </div>
  );
}

function VuesaxBoldTickCircle10() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/bold/tick-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="tick-circle">
          <path
            d={svgPaths.p1a881f00}
            fill="url(#paint0_linear_2_1316)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1316"
            x1="14.7826"
            x2="5.38498"
            y1="5.27778"
            y2="14.181"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxBoldTickCircle11() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="vuesax/bold/tick-circle"
    >
      <VuesaxBoldTickCircle10 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <VuesaxBoldTickCircle11 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[16px]">{`Predictive Maintenance `}</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame38 />
      <Frame83 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <Frame86 />
      <Frame87 />
      <Frame88 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0098d4] text-[17px]">
          Use cases:
        </p>
        <Frame84 />
      </div>
    </div>
  );
}

function Elements1() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-9.34%_-5.86%_-9.41%_-3.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 11.7096 7.91667"
        >
          <g>
            <path
              d={svgPaths.p52e2980}
              id="Vector"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
            <path
              d={svgPaths.p1a40a300}
              id="Vector_2"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUp02Sharp() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="arrow-up-02-sharp"
    >
      <div className="absolute flex inset-[16.67%_29.18%_16.67%_29.15%] items-center justify-center">
        <div className="flex-none h-[6.667px] rotate-[90deg] scale-y-[-100%] w-[10.667px]">
          <Elements1 />
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#ccf1ff] content-stretch flex gap-[5px] items-start justify-center pb-[4px] pl-[10px] pr-[12px] pt-[6px] relative rounded-[60px] shrink-0">
      <ArrowUp02Sharp />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007aaa] text-[16px]">
        OEE
      </p>
    </div>
  );
}

function Elements2() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-9.34%_-5.86%_-9.41%_-3.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 11.7096 7.91667"
        >
          <g>
            <path
              d={svgPaths.p52e2980}
              id="Vector"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
            <path
              d={svgPaths.p1a40a300}
              id="Vector_2"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUp02Sharp1() {
  return (
    <div
      className="overflow-clip relative size-[16px]"
      data-name="arrow-up-02-sharp"
    >
      <div className="absolute flex inset-[16.67%_29.18%_16.67%_29.15%] items-center justify-center">
        <div className="flex-none h-[6.667px] rotate-[90deg] scale-y-[-100%] w-[10.667px]">
          <Elements2 />
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[#ccf1ff] content-stretch flex gap-[5px] items-start justify-center pb-[4px] pl-[10px] pr-[12px] pt-[6px] relative rounded-[60px] shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowUp02Sharp1 />
        </div>
      </div>
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007aaa] text-[16px]">
        Unplanned Downtime
      </p>
    </div>
  );
}

function Elements3() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-9.34%_-5.86%_-9.41%_-3.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 11.7096 7.91667"
        >
          <g>
            <path
              d={svgPaths.p52e2980}
              id="Vector"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
            <path
              d={svgPaths.p1a40a300}
              id="Vector_2"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUp02Sharp2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="arrow-up-02-sharp"
    >
      <div className="absolute flex inset-[16.67%_29.18%_16.67%_29.15%] items-center justify-center">
        <div className="flex-none h-[6.667px] rotate-[90deg] scale-y-[-100%] w-[10.667px]">
          <Elements3 />
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#ccf1ff] content-stretch flex gap-[5px] items-start justify-center pb-[4px] pl-[10px] pr-[12px] pt-[6px] relative rounded-[60px] shrink-0">
      <ArrowUp02Sharp2 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007aaa] text-[16px]">
        On-Time Delivery
      </p>
    </div>
  );
}

function Elements4() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-9.34%_-5.86%_-9.41%_-3.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 11.7096 7.91667"
        >
          <g>
            <path
              d={svgPaths.p52e2980}
              id="Vector"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
            <path
              d={svgPaths.p1a40a300}
              id="Vector_2"
              stroke="var(--stroke-0, #07AF40)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUp02Sharp3() {
  return (
    <div
      className="overflow-clip relative size-[16px]"
      data-name="arrow-up-02-sharp"
    >
      <div className="absolute flex inset-[16.67%_29.18%_16.67%_29.15%] items-center justify-center">
        <div className="flex-none h-[6.667px] rotate-[90deg] scale-y-[-100%] w-[10.667px]">
          <Elements4 />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-[#ccf1ff] content-stretch flex gap-[5px] items-start justify-center pb-[4px] pl-[10px] pr-[12px] pt-[6px] relative rounded-[60px] shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowUp02Sharp3 />
        </div>
      </div>
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007aaa] text-[16px]">{`Scrap & Rework`}</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame91 />
      <Frame92 />
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[630px]">
      <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[17px] text-black w-full">
        Expected Outcomes:
      </p>
      <Frame98 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start min-h-px min-w-px relative">
      <Frame80 />
      <Frame85 />
      <Frame95 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Component />
      <Frame96 />
    </div>
  );
}

export function IndustriesSection() {
  const slides = [
    <Frame97 key="slide-1" />,
    <Frame97 key="slide-2" />,
    <Frame97 key="slide-3" />,
    <Frame97 key="slide-4" />,
    <Frame97 key="slide-5" />,
  ];

  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[50px] items-start overflow-clip p-[60px] relative shrink-0 w-[1512px]"
      data-name="Industries"
    >
      <Frame90 />
      <IndustriesCarousel>{slides}</IndustriesCarousel>
    </div>
  );
}
