import svgPaths from "../../imports/svg-6sw94kd16o";
import { useState } from "react";

const imgRectangle34 =
  "./assets/pages/production-digitization/solutions/3a380a8126032af34701f98b609fdbd9e932781c.png";

interface FeatureCardProps {
  icon: (isHovered: boolean) => React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  bgColor = "rgba(204,241,255,0.5)",
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[20px] shrink-0 w-[421.333px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <div
        className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[24px] relative rounded-[12px] shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        {icon(isHovered)}
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start leading-[22px] not-italic relative shrink-0 w-full">
        <p className="font-['Gilroy:Semibold',sans-serif] relative shrink-0 text-[#181818] text-[18px] text-nowrap whitespace-pre">
          {title}
        </p>
        <p className="font-['Gilroy:Regular',sans-serif] min-w-full relative shrink-0 text-[#777777] text-[15px] w-[min-content]">
          {description}
        </p>
      </div>
    </div>
  );
}

function SettingsIcon(isHovered: boolean) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStroke {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .settings-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .settings-path-1.animate {
          animation: drawStroke 1.5s ease-in-out infinite;
        }
        .settings-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .settings-path-2.animate {
          animation: drawStroke 1.5s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="setting-2">
            <path
              d={svgPaths.p34392700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`settings-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.pad9dd00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`settings-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function RefreshIcon(isHovered: boolean) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeRefresh1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeRefresh2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .refresh-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .refresh-path-1.animate {
          animation: drawStrokeRefresh1 1.5s ease-in-out infinite;
        }
        .refresh-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .refresh-path-2.animate {
          animation: drawStrokeRefresh2 1.5s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="refresh-square-2">
            <path
              d={svgPaths.p20901f80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`refresh-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p3cd4a700}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`refresh-path-2 ${isHovered ? "animate" : ""}`}
              />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TargetIcon(isHovered: boolean) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeTarget1 {
          0% { stroke-dashoffset: 90; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeTarget2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .target-path-1 {
          stroke-dasharray: 90;
          stroke-dashoffset: 0;
        }
        .target-path-1.animate {
          animation: drawStrokeTarget1 1.5s ease-in-out infinite;
        }
        .target-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .target-path-2.animate {
          animation: drawStrokeTarget2 1.5s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-3.75%_-3.74%_-3.75%_-3.75%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 29 29"
          >
            <g>
              <path
                d={svgPaths.p3da63c00}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeWidth="2"
                className={`target-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d={svgPaths.p334d6880}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeWidth="2"
                className={`target-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path d={svgPaths.pebe53b0} fill="#07AF40" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChartIcon(isHovered: boolean) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeChart1 {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeChart2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .chart-path-1 {
          stroke-dasharray: 24;
          stroke-dashoffset: 0;
        }
        .chart-path-1.animate {
          animation: drawStrokeChart1 1.5s ease-in-out infinite;
        }
        .chart-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .chart-path-2.animate {
          animation: drawStrokeChart2 1.5s ease-in-out 0.15s infinite;
        }
        .chart-path-3.animate {
          animation: drawStrokeChart2 1.5s ease-in-out 0.25s infinite;
        }
        .chart-path-4.animate {
          animation: drawStrokeChart2 1.5s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d="M4 29.3333H28"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p1445600}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path
                d={svgPaths.pf9ac4f0}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 chart-path-3 ${
                  isHovered ? "animate" : ""
                }`}
              />
              <path
                d={svgPaths.p15994780}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 chart-path-4 ${
                  isHovered ? "animate" : ""
                }`}
              />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MessageIcon(isHovered: boolean) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeMessage1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeMessage2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeMessage3 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        .message-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .message-path-1.animate {
          animation: drawStrokeMessage1 1.5s ease-in-out infinite;
        }
        .message-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .message-path-2.animate {
          animation: drawStrokeMessage2 1.5s ease-in-out 0.2s infinite;
        }
        .message-path-3 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .message-path-3.animate {
          animation: drawStrokeMessage3 1.5s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p1aac8b00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`message-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p140c4870}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`message-path-2 ${isHovered ? "animate" : ""}`}
              />
            </g>
            <path
              d={svgPaths.p204bc700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`message-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArchiveIcon(isHovered: boolean) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeArchive1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeArchive2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeArchive3 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .archive-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .archive-path-1.animate {
          animation: drawStrokeArchive1 1.5s ease-in-out infinite;
        }
        .archive-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .archive-path-2.animate {
          animation: drawStrokeArchive2 1.5s ease-in-out 0.2s infinite;
        }
        .archive-path-3 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .archive-path-3.animate {
          animation: drawStrokeArchive3 1.5s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p37330f80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`archive-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p28009480}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`archive-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p349e9000}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`archive-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex gap-[283px] items-center not-italic relative shrink-0 w-[1312px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[45px] relative shrink-0 text-[#181818] text-[36px] w-[384px]">
        Your All-in-One Intelligence Platform
      </p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[23px] relative shrink-0 text-[#8e8e8e] text-[16px] w-[625px]">
        Tecosoft Analytics unifies data across manufacturing, energy, logistics,
        and healthcare, turning complex information into real-time insights that
        power smarter decisions and greater operational efficiency.
      </p>
    </div>
  );
}

function TopGradient() {
  return (
    <div className="absolute h-[180px] left-0 top-0 w-[1512px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgRectangle34}
        />
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[60px] items-center overflow-clip px-0 py-[60px] relative shrink-0 w-[1512px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 184, 219, 0.12) 0%, rgba(0, 184, 219, 0.12) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <TopGradient />
      <SectionHeader />
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
        <FeatureCard
          icon={SettingsIcon}
          title="Collect. Connect. Optimize."
          description="Seamlessly capture live production data and connect machines to the cloud for real-time analytics and optimization."
        />
        <FeatureCard
          icon={RefreshIcon}
          title="Closed Loop Production System."
          description="EAGLE ensures accountability by halting operations until downtime or alarm reasons are recorded — ensuring accurate data tracking."
        />
        <FeatureCard
          icon={TargetIcon}
          title="Pinpoint the Cause, Fix Faster."
          description="Identify downtime sources instantly with guided operator input, real-time validation, and continuous live system feedback."
        />
      </div>
      <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
        <FeatureCard
          icon={ChartIcon}
          title="Track. Analyze. Improve."
          description="Monitor KPIs in real-time and empower your team with data-driven insights to optimize production and reduce waste."
        />
        <FeatureCard
          icon={MessageIcon}
          title="Flexible, Agentic, Platform."
          description="Adaptable production workflows with intelligent automation that learns and adjusts to optimize your unique operational needs."
        />
        <FeatureCard
          icon={ArchiveIcon}
          title="One Device. Total Integration."
          description="A single edge gateway connects PLCs, sensors, and systems, unifying your production infrastructure effortlessly."
        />
      </div>
    </div>
  );
}
