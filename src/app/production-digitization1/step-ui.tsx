"use client";
import React from "react";
import svgPaths from "../../imports/svg-02fyg6sb5h";
// import imgRectangle56 from "figma:asset/89df7f87f44aa3ec491ad433ffc4d398dd64e9e4.png";

const imgRectangle56 =
  "./assets/pages/solutions/production-digitization/feature/dashboard.png";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

function BenefitCard({ icon, title, description, bgColor }: BenefitCardProps) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-[20px] shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative w-full">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0">
            {icon}
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[26px] relative shrink-0 text-[#181818] text-[20px] w-full">
              {title}
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#777777] text-[16px] w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <div className="absolute inset-[8.33%_14.59%_8.33%_14.58%]">
        <div className="absolute inset-[-3.75%_-4.41%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 29"
          >
            <g>
              <path
                d={svgPaths.p2961fb80}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p32bdce80}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p2f02280}
                stroke="#07AF40"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p34db4a0}
                stroke="#07AF40"
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

function FolderIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]">
        <div className="absolute inset-[-3.95%_-3.75%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 29 28"
          >
            <g>
              <path
                d={svgPaths.p23259580}
                stroke="#00B7FF"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p21f585f0}
                stroke="#00B7FF"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChartSuccessIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p2fbe8680}
              stroke="#F9B70E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p398f7a00}
              stroke="#F9B70E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M9.33333 14V18"
              stroke="#F9B70E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M16 14V18"
              stroke="#F9B70E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M22.6667 14V18"
              stroke="#F9B70E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function RefreshSquareIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p20901f80}
              stroke="#E53A3A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <g>
              <path
                d={svgPaths.p3cd4a700}
                stroke="#E53A3A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <div className="bg-white relative size-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center pb-[90px] pt-[60px] px-[100px] relative size-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-[800px]">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[44px] relative shrink-0 text-[#282828] text-[36px] text-nowrap whitespace-pre">
              Why Digitize Inspection?
            </p>
            <p className="font-['Gilroy:Medium',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">
              Turn manual checks into a fast, auditable, and automated
              inspection system — detect problems early, keep clear records, and
              close the loop with machines.
            </p>
          </div>

          {/* Content */}
          <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full">
            {/* Image */}
            <div className="content-stretch flex h-[476px] items-center relative shrink-0 w-[350px]">
              <div className="absolute bg-[#00b8db] h-[476px] right-[-20px] rounded-[12px] top-[20px] w-[350px]" />
              <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-10">
                <img
                  alt="Digital inspection"
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full"
                  src={imgRectangle56}
                />
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[882px]">
              {/* Row 1 */}
              <div className="content-stretch flex gap-[36px] items-center relative shrink-0 w-full">
                <BenefitCard
                  icon={<FileIcon />}
                  title="Reliable Data Capture"
                  description="Automated, standardized logging - no more handwritten sheets."
                  bgColor="#e1f5e8"
                />
                <BenefitCard
                  icon={<FolderIcon />}
                  title="Inspection Reports Digitization"
                  description="Generate audit-ready digital reports for traceability and compliance."
                  bgColor="#d6f4fc"
                />
              </div>

              {/* Row 2 */}
              <div className="content-stretch flex gap-[36px] items-start relative shrink-0 w-full">
                <BenefitCard
                  icon={<ChartSuccessIcon />}
                  title="End-to-End Traceability"
                  description="Follow every part from operator checks to final packing."
                  bgColor="#fceed6"
                />
                <BenefitCard
                  icon={<RefreshSquareIcon />}
                  title="Closed-Loop Correction"
                  description="Feed gauge feedback to machines to reduce rework and escapes."
                  bgColor="#f7d8d8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
