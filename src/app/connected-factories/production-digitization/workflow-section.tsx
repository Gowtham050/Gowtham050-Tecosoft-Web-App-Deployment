import svgPaths from "../../../imports/svg-6sw94kd16o";
import { workflowContent } from "../../../constants/connected-factories/production-digitization";

interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
}

function WorkflowStep({
  number,
  title,
  description,
}: WorkflowStepProps) {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.32)] box-border content-stretch flex gap-[26px] items-start p-[26px] rounded-[16px] w-full">
      <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[24px] relative rounded-[12px] shrink-0 size-[60px]">
        <p className="font-bold:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#07af40] text-[26px] text-nowrap whitespace-pre">
          {number}
        </p>
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[14px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-white">
        <p className=" font-semibold  leading-[36px] relative shrink-0 text-[26px] text-nowrap whitespace-pre">
          {title}
        </p>
        <p className=" font-medium leading-[22px] min-w-full relative shrink-0 text-[16px] w-[min-content]">
          {description}
        </p>
      </div>
    </div>
  );
}

function EagleLogo() {
  return (
    <div className="relative h-[75.479px] w-[212px] mb-[60px]">
      <div className="absolute h-[42.123px] left-0 top-[16.678px] w-[118.357px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 119 43"
        >
          <g>
            <path
              d={svgPaths.pbbe0700}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p21df9100}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p2b759e00}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p2f050180}
              fill="var(--fill-0, white)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="flex flex-col items-start justify-center px-[60px] py-[80px]">
      <EagleLogo />
      <h2
        className="font-bold:Bold',sans-serif] leading-[52px] not-italic text-[44px] mb-[24px]"
        style={{ color: "rgba(0, 255, 132, 1)" }}
      >
        EAGLE <span className="text-white">Workflow</span>
      </h2>
      <p className=" font-medium leading-[26px] not-italic text-[18px] text-white/90 max-w-[500px]">
        Follow our streamlined production workflow from setup to
        analysis. Each step ensures accountability,
        traceability, and real-time performance monitoring.
      </p>
    </div>
  );
}

export function WorkflowSection() {
  return (
    <div
      className="relative shrink-0 w-full min-h-[550px] flex"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(7, 80, 142) 0%, rgb(7, 80, 142) 100%)",
      }}
    >
      {/* Fixed Left Side */}
      <div className="w-[45%] flex-shrink-0 sticky top-0 h-screen">
        <LeftContent />
      </div>

      {/* Scrollable Right Side */}
      <div className="w-[55%] flex-shrink-0 overflow-y-auto py-[80px] pr-[60px] pl-[40px] h-screen snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex flex-col gap-[32px]">
          <WorkflowStep
            number="1"
            title="Setup & Configuration"
            description="Map tool setup, configure machine time and output expectations, or leverage pre-built configurations from the cloud."
          />

          {/* Vertical dotted line separator */}
          <div className="flex justify-start my-[-16px] ml-[56px]">
            <div className="h-[40px] w-[2px] border-l-2 border-dashed border-white"></div>
          </div>

          <WorkflowStep
            number="2"
            title="Define Production Context"
            description="Select job, machine shift, and operator info to contextualize production with traceability and accountability."
          />

          {/* Vertical dotted line separator */}
          <div className="flex justify-start my-[-16px] ml-[56px]">
            <div className="h-[40px] w-[2px] border-l-2 border-dashed border-white"></div>
          </div>

          <WorkflowStep
            number="3"
            title="Record Tool Alarms"
            description="Document tool faults or alarms with reasons, classify as Maintenance or Operational issue, and notify the relevant party."
          />

          {/* Vertical dotted line separator */}
          <div className="flex justify-start my-[-16px] ml-[56px]">
            <div className="h-[40px] w-[2px] border-l-2 border-dashed border-white"></div>
          </div>

          <WorkflowStep
            number="4"
            title="Track Tool Downtime Reasons"
            description="Whenever the tool stops, operators record standardized downtime reasons (e.g. Setup, Unplanned Stop, Break), and production halts until recorded."
          />

          {/* Vertical dotted line separator */}
          <div className="flex justify-start my-[-16px] ml-[56px]">
            <div className="h-[40px] w-[2px] border-l-2 border-dashed border-white"></div>
          </div>

          <WorkflowStep
            number="5"
            title="Calculate Machine Time"
            description="Compute machine run time, downtime, planned idle, and stop durations automatically based on tool activity and operator inputs."
          />

          {/* Vertical dotted line separator */}
          <div className="flex justify-start my-[-16px] ml-[56px] rounded-[123px]">
            <div className="h-[40px] w-[2px] border-l-2 border-dashed border-white"></div>
          </div>

          <WorkflowStep
            number="6"
            title="Inspect & Analyze OEE"
            description="Perform part inspections, validate OK/NC counts, and compute APQ & OEE automatically to measure real-time performance."
          />
        </div>
      </div>
    </div>
  );
}