"use client";

import svgPaths from "../../imports/svg-wzyskd72fo";
import { VerticalAutoScroll } from "@/components/VerticalAutoScroll";

function Frame23() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[60px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#07af40] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[60px]"
      />
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0098d4] text-[14px]">
        Solutions in Action
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[100px] top-1/2 translate-y-[-50%] w-[680px]">
      <Frame23 />
      <p className="css-4hzbpn font-['Gilroy:Semibold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#282828] text-[36px] w-[430px]">
        <span className="leading-[44px]">{`Explore Use Cases Across `}</span>
        <span className="leading-[44px] text-[#07af40]">Industries</span>
      </p>
      <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">
        Our advanced platforms and solutions power a range of use cases,
        transforming sectors like healthcare, finance, and manufacturing. We
        deliver customized solutions for complex problems, boosting growth and
        streamlining operations.
      </p>
    </div>
  );
}

// Component 1 - Condition & Health Monitoring
function Elements10() {
  return (
    <div
      className="absolute inset-[12.5%_8.32%_12.5%_8.35%]"
      data-name="elements"
    >
      <div className="absolute inset-[0_-0.01%_0_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18.3333 16.5006"
        >
          <g>
            <path
              d={svgPaths.pbf9d180}
              fill="url(#paint0_linear_2_1301)"
              id="Vector"
            />
            <path
              d={svgPaths.p35f20800}
              id="Vector_2"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_2_1301"
              x1="3.9058"
              x2="13.2108"
              y1="3.57558"
              y2="13.3706"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Healt() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[22px]"
      data-name="healt"
    >
      <Elements10 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Condition & Health Monitoring`}</p>
      <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
        Track the real-time health and performance of assets.
      </p>
    </div>
  );
}

function Component1() {
  return (
    <div
      className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
      data-name="1"
    >
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <Healt />
        <Frame62 />
      </div>
    </div>
  );
}

// Component 2 - Maintenance Planning
function Elements11() {
  return (
    <div
      className="absolute inset-[4.55%_22.73%_4.96%_22.73%]"
      data-name="elements"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 19.9089"
      >
        <g>
          <path
            d={svgPaths.pd040580}
            fill="url(#paint0_linear_2_1356)"
            id="Vector"
          />
          <path
            d={svgPaths.p30e04980}
            fill="url(#paint1_linear_2_1356)"
            id="Subtract"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1356"
            x1="9.44348"
            x2="3.23536"
            y1="2.38342"
            y2="8.79963"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2_1356"
            x1="7.87882"
            x2="3.16123"
            y1="12.9301"
            y2="16.2134"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Wrench1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[22px]"
      data-name="wrench-02"
    >
      <Elements11 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Maintenance Planning & Reliability`}</p>
      <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
        Schedule preventive maintenance to maximize uptime.
      </p>
    </div>
  );
}

function Component2() {
  return (
    <div
      className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
      data-name="26"
    >
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <Wrench1 />
        <Frame69 />
      </div>
    </div>
  );
}

// Component 3 - Safety & Compliance
function VuesaxBoldDirectboxNotif() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="vuesax/bold/directbox-notif"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="directbox-notif">
          <path
            d={svgPaths.p284f5fb0}
            fill="url(#paint0_linear_2_1328)"
            id="Vector"
          />
          <path
            d={svgPaths.p3c795f80}
            fill="url(#paint1_linear_2_1328)"
            id="Vector_2"
          />
          <g id="Vector_3" opacity="0"></g>
          <g id="Vector_4" opacity="0"></g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1328"
            x1="15.7716"
            x2="10.8015"
            y1="12.4835"
            y2="20.4662"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2_1328"
            x1="14.7931"
            x2="9.7182"
            y1="3.86314"
            y2="10.6469"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxBoldDirectboxNotif1() {
  return (
    <div
      className="relative shrink-0 size-[22px]"
      data-name="vuesax/bold/directbox-notif"
    >
      <VuesaxBoldDirectboxNotif />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Safety, Compliance & Audit`}</p>
      <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
        Ensure operations meet safety standards and regulatory requirements.
      </p>
    </div>
  );
}

function Component3() {
  return (
    <div
      className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
      data-name="27"
    >
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <VuesaxBoldDirectboxNotif1 />
        <Frame70 />
      </div>
    </div>
  );
}

// Remaining components (4-12) follow similar patterns - creating simplified versions
function Component4() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Remote & Virtual Operations`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Manage operations and monitor assets from anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Production & Work Order Tracking`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Monitor progress and status of production and work orders.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Energy Oversight & Optimization`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Analyze and optimize energy consumption across processes.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Throughput & Bottleneck Analysis`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Identify process constraints and improve efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Reports & Scheduled Insights`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Generate automated reports and actionable insights.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Quality SPC & Traceability`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Maintain and trace quality standards in production.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Inventory & Supply Chain Insights`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Optimize inventory levels and supply chain operations.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Forecasting & What-If Scenarios`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Simulate scenarios to predict outcomes and plan ahead.
          </p>
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[22px]"></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gilroy:Medium',sans-serif] gap-[4px] items-start min-h-px min-w-px not-italic relative">
          <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#181818] text-[17px]">{`Integrations & Data Exchange`}</p>
          <p className="css-4hzbpn leading-[18px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] w-[min-content]">
            Connect systems and share data across platforms effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute content-stretch items-start left-[892px] top-[24px] w-[500px] h-[602px]">
      <VerticalAutoScroll speed={50} className="w-full h-full">
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component8 />
        <Component9 />
        <Component10 />
        <Component11 />
        <Component12 />
      </VerticalAutoScroll>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <div
      className="bg-[#f5f5f5] h-[650px] overflow-clip relative shrink-0 w-[1512px]"
      data-name="Features"
    >
      <Frame60 />
      <Frame63 />
      <div className="absolute bg-gradient-to-b from-[#f5f5f5] h-[60px] left-[892px] to-[rgba(245,245,245,0)] top-0 w-[500px]" />
      <div className="absolute bottom-0 flex h-[60px] items-center justify-center left-[892px] w-[500px]">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-gradient-to-b from-[#f5f5f5] h-[60px] to-[rgba(245,245,245,0)] w-[500px]" />
        </div>
      </div>
    </div>
  );
}
