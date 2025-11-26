"use client";
import React from "react";
import svgPaths from "../../imports/svg-02fyg6sb5h";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

function BenefitCard({ icon, title, description, bgColor }: BenefitCardProps) {
  return (
    <div
      className="w-full sm:basis-0 sm:grow min-h-[140px] relative rounded-[20px] sm:shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] lg:gap-[18px] 2xl:gap-[24px] items-start justify-center p-[16px] lg:p-[18px] 2xl:p-[24px] relative w-full">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[16px] lg:p-[18px] 2xl:p-[20px] relative rounded-[12px] shrink-0">
            {icon}
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] lg:leading-[24px] 2xl:leading-[26px] relative shrink-0 text-[#181818] text-[18px] lg:text-[19px] 2xl:text-[20px] w-full">
              {title}
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[19px] lg:leading-[20px] 2xl:leading-[21px] relative shrink-0 text-[#777777] text-[14px] lg:text-[15px] 2xl:text-[16px] w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileIcon({ color = "#07AF40" }: { color?: string }) {
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
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p32bdce80}
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p2f02280}
                stroke={color}
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p34db4a0}
                stroke={color}
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

function FolderIcon({ color = "#00B7FF" }: { color?: string }) {
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
                stroke={color}
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p21f585f0}
                stroke={color}
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

function ChartSuccessIcon({ color = "#F9B70E" }: { color?: string }) {
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
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p398f7a00}
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M9.33333 14V18"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M16 14V18"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M22.6667 14V18"
              stroke={color}
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

function RefreshSquareIcon({ color = "#E53A3A" }: { color?: string }) {
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
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <g>
              <path
                d={svgPaths.p3cd4a700}
                stroke={color}
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

// Icon mapping helper
const getIconComponent = (iconName: string, iconColor: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    document: <FileIcon color={iconColor} />,
    folder: <FolderIcon color={iconColor} />,
    chart: <ChartSuccessIcon color={iconColor} />,
    "refresh-circle": <RefreshSquareIcon color={iconColor} />,
  };
  return iconMap[iconName] || null;
};

export default function WhyUsSection(whyDigitizeContent: any) {
  const { sectionTitle, sectionDescription, image, imageAlt, benefits } = whyDigitizeContent;

  return (
    <div className="bg-white relative size-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center pb-[60px] md:pb-[90px] pt-[40px] md:pt-[60px] px-[20px] sm:px-[40px] lg:px-[60px] 2xl:px-[100px] relative size-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center not-italic relative shrink-0 text-center w-full max-w-[800px]">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[32px] sm:leading-[38px] md:leading-[44px] relative shrink-0 text-[#282828] text-[28px] sm:text-[32px] md:text-[36px] whitespace-normal lg:whitespace-pre">
              {sectionTitle}
            </p>
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] md:leading-[23px] w-full relative shrink-0 text-[#8e8e8e] text-[14px] md:text-[16px]">
              {sectionDescription}
            </p>
          </div>

          {/* Content */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[50px] 2xl:gap-[80px] items-center relative shrink-0 w-full">
            {/* Image */}
            <div className="content-stretch flex h-[300px] sm:h-[400px] lg:h-[380px] 2xl:h-[476px] items-center relative shrink-0 w-full sm:w-[300px] lg:w-[280px] 2xl:w-[350px] mx-auto lg:mx-0 ">
              <div className="absolute bg-[#00b8db] h-[300px] sm:h-[400px] lg:h-[380px] 2xl:h-[476px] right-[-12px] sm:right-[-20px] lg:right-[-16px] rounded-[12px] top-[12px] sm:top-[20px] lg:top-[16px] w-full sm:w-[300px] lg:w-[280px] 2xl:w-[350px]" />
              <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-10">
                <img
                  alt={imageAlt}
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full"
                  src={image}
                />
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="content-stretch flex flex-col gap-[20px] lg:gap-[24px] 2xl:gap-[36px] items-start relative shrink-0 w-full lg:flex-1">
              {/* Row 1 */}
              <div className="content-stretch flex flex-col sm:flex-row gap-[20px] lg:gap-[24px] 2xl:gap-[36px] items-stretch relative shrink-0 w-full">
                {benefits.slice(0, 2).map((benefit: any) => (
                  <BenefitCard
                    key={benefit.id}
                    icon={getIconComponent(benefit.icon, benefit.iconColor)}
                    title={benefit.title}
                    description={benefit.description}
                    bgColor={benefit.bgColor}
                  />
                ))}
              </div>

              {/* Row 2 */}
              <div className="content-stretch flex flex-col sm:flex-row gap-[20px] lg:gap-[24px] 2xl:gap-[36px] items-stretch relative shrink-0 w-full">
                {benefits.slice(2, 4).map((benefit : any) => (
                  <BenefitCard
                    key={benefit.id}
                    icon={getIconComponent(benefit.icon, benefit.iconColor)}
                    title={benefit.title}
                    description={benefit.description}
                    bgColor={benefit.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}