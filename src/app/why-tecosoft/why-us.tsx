"use client";

import svgPaths from "@/imports/svg-9v3kh9sdih";
// import imgRectangle65 from "figma:asset/cc632dcc9f8af8f81593fdb0a0db918fe56ac65a.png";

const imgRectangle65 =
  "/assets/pages/why-tecosoft/cc632dcc9f8af8f81593fdb0a0db918fe56ac65a.png";

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Gilroy:Semibold',sans-serif] leading-[0] relative shrink-0 text-[#282828] text-[40px] w-[396px]">
        <span className="leading-[44px]">{`Why Tecosoft `}</span>
        <span className="leading-[44px] text-[#0098d4]">Stands Apart</span>
      </p>
      <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">
        We don't just ship features - we shape outcomes. From architecture to
        adoption, our approach makes transformation feel simple and stick for
        the long run.
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[580px]">
      <Frame37 />
      <div className="h-[300px] relative rounded-[12px] shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img
            alt=""
            className="absolute h-[289.71%] left-0 max-w-none top-[-130.45%] w-full"
            src={imgRectangle65}
          />
        </div>
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[10.42%]" data-name="elements">
      <div className="absolute inset-[-4.61%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20.75 20.75"
        >
          <g>
            <path
              d="M5.375 15.375L5.375 11.375"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
            <path
              d="M10.375 15.375L10.375 5.375"
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
            <path
              d="M15.375 15.375L15.375 9.375"
              id="Vector_3"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
            <path
              d={svgPaths.p3cc36500}
              id="Vector_4"
              stroke="var(--stroke-0, white)"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[24px]"
      data-name="analytics-01"
    >
      <Elements />
    </div>
  );
}

function Frame33() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[6px] shrink-0 size-[46px]"
      style={{
        backgroundImage:
          "linear-gradient(226.547deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)",
      }}
    >
      <Analytics />
    </div>
  );
}

function Elements1() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-7.01%_-11.25%_-5.09%_-11.25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8.16667 11.9594"
        >
          <g>
            <path
              d="M4.08327 10.75L4.08327 0.75"
              id="Vector"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p14884480}
              id="Vector_2"
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

function ArrowRight02Sharp() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="arrow-right-02-sharp"
    >
      <div className="absolute flex inset-[29.17%_16.67%_29.17%_16.65%] items-center justify-center">
        <div className="flex-none h-[10.669px] rotate-[90deg] scale-y-[-100%] w-[6.667px]">
          <Elements1 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ArrowRight02Sharp />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0098d4] text-[14px]">
        Built for decisions, not just dashboards.
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full">
          <Frame33 />
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
            <p className="css-4hzbpn leading-[22px]">Impact-First</p>
          </div>
          <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#777] text-[15px] w-[min-content]">
            Start with business goals: reliability, efficiency, sustainability,
            responsiveness. Tech follows strategy - not the other way around.
          </p>
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearData() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/data">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="data">
          <path
            d={svgPaths.p16dc3080}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.pbb34800}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.p5075f20}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.p1fe50c00}
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d="M6 12H18"
            id="Vector_5"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <path
            d={svgPaths.p1343b8a0}
            id="Vector_6"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <g id="Vector_7" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearData1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="vuesax/linear/data"
    >
      <VuesaxLinearData />
    </div>
  );
}

function Frame34() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[6px] shrink-0 size-[46px]"
      style={{
        backgroundImage:
          "linear-gradient(226.547deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)",
      }}
    >
      <VuesaxLinearData1 />
    </div>
  );
}

function Elements2() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-7.01%_-11.25%_-5.09%_-11.25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8.16667 11.9594"
        >
          <g>
            <path
              d="M4.08327 10.75L4.08327 0.75"
              id="Vector"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p14884480}
              id="Vector_2"
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

function ArrowRight02Sharp1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="arrow-right-02-sharp"
    >
      <div className="absolute flex inset-[29.17%_16.67%_29.17%_16.65%] items-center justify-center">
        <div className="flex-none h-[10.669px] rotate-[90deg] scale-y-[-100%] w-[6.667px]">
          <Elements2 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ArrowRight02Sharp1 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0098d4] text-[14px]">
        No rip-and-replace. Zero dead-ends.
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full">
          <Frame34 />
          <div className="css-g0mm18 flex flex-col font-['Gilroy:Semibold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-black">
            <p className="css-ew64yg leading-[22px]">Unified by Design</p>
          </div>
          <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#777] text-[15px] w-[min-content]">
            A single data + intelligence layer ties apps and workflows together.
            Keep what works; extend what doesn't—without lock‑in.
          </p>
          <Frame44 />
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearUserOctagon() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/linear/user-octagon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="user-octagon">
          <path
            d={svgPaths.pbb6cb80}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
          <g id="Group">
            <path
              d={svgPaths.pa516b00}
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
            <path
              d={svgPaths.p38f4bb00}
              id="Vector_3"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </g>
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearUserOctagon1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="vuesax/linear/user-octagon"
    >
      <VuesaxLinearUserOctagon />
    </div>
  );
}

function Frame35() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip p-[18px] relative rounded-[6px] shrink-0 size-[46px]"
      style={{
        backgroundImage:
          "linear-gradient(226.547deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)",
      }}
    >
      <VuesaxLinearUserOctagon1 />
    </div>
  );
}

function Elements3() {
  return (
    <div className="relative size-full" data-name="elements">
      <div className="absolute inset-[-7.01%_-11.25%_-5.09%_-11.25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8.16667 11.9594"
        >
          <g>
            <path
              d="M4.08327 10.75L4.08327 0.75"
              id="Vector"
              stroke="var(--stroke-0, #0098D4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p14884480}
              id="Vector_2"
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

function ArrowRight02Sharp2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="arrow-right-02-sharp"
    >
      <div className="absolute flex inset-[29.17%_16.67%_29.17%_16.65%] items-center justify-center">
        <div className="flex-none h-[10.669px] rotate-[90deg] scale-y-[-100%] w-[6.667px]">
          <Elements3 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ArrowRight02Sharp2 />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0098d4] text-[14px]">
        You can run it. We help you scale.
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full">
          <Frame35 />
          <div className="css-g0mm18 flex flex-col font-['Gilroy:Semibold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[18px] text-black">
            <p className="css-ew64yg leading-[22px]">Adoption that Lasts</p>
          </div>
          <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#777] text-[15px] w-[min-content]">
            We co-create with your teams so change is embraced, not imposed.
            Your people gain confidence and real ownership.
          </p>
          <Frame59 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <Frame38 />
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[60px] h-[648px] items-center relative shrink-0 w-full">
      <Frame43 />
      <Frame41 />
    </div>
  );
}

export function WhyUs() {
  return (
    <div className="bg-[#e0f6fa] relative shrink-0 w-full" data-name="Why us">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[100px] py-[60px] relative w-full">
          <Frame45 />
        </div>
      </div>
    </div>
  );
}
