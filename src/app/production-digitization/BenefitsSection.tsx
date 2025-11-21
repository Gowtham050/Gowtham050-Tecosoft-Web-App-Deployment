import svgPaths from "../../imports/svg-6sw94kd16o";
import { useState } from "react";

interface BenefitCardProps {
  icon: (color: string) => React.ReactNode;
  title: string;
  bgColor: string;
  iconColor: string;
}

function BenefitCard({ icon, title, bgColor, iconColor }: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-[180px]">
      <div 
        className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[24px] relative rounded-[10px] shrink-0 cursor-pointer transition-colors duration-300" 
        style={{ backgroundColor: isHovered ? iconColor : bgColor }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon(isHovered ? "#FFFFFF" : iconColor)}
      </div>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">{title}</p>
    </div>
  );
}

function CubeScanIcon(color: string) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p37330f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p28009480} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g>
              <path d={svgPaths.p204bc700} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M16 23.6934V16.4267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d={svgPaths.p349e9000} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChartSquareIcon(color: string) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p20901f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g>
              <path d={svgPaths.p343c6800} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p12eb6780} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function GraphIcon(color: string) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p115a1300} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pcd3db80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function DocumentTextIcon(color: string) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.pdae4200} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p1d5624c0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M10.6667 17.3333H16" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M10.6667 22.6667H21.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function UserTagIcon(color: string) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p34478800} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g>
              <path d={svgPaths.p201248a0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p30f5bc80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function LinkSquareIcon(color: string) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p20901f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g>
              <path d={svgPaths.p1c8af000} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center w-[800px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[45px] relative shrink-0 text-[#282828] text-[36px] text-nowrap whitespace-pre">Benefits of Production Digitization</p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[23px] min-w-full relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">{`Get a quick view of your factory's most important benchmarks - overall equipment efficiency, production yield, downtime savings, and throughput. `}</p>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[60px] items-center overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1512px]">
      <SectionHeader />
      <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-full">
        <BenefitCard 
          icon={CubeScanIcon}
          title="Turn-by-Turn Production Insights"
          bgColor="#e1f5e8"
          iconColor="#07AF40"
        />
        <BenefitCard 
          icon={ChartSquareIcon}
          title="Reduced Downtime & Increased Availability"
          bgColor="#d2f1f8"
          iconColor="#00B8DB"
        />
        <BenefitCard 
          icon={GraphIcon}
          title="Real-Time Performance Insights"
          bgColor="#fceed6"
          iconColor="#EF9300"
        />
        <BenefitCard 
          icon={DocumentTextIcon}
          title={`Digital & Paperless Shopfloor`}
          bgColor="#f7d8d8"
          iconColor="#CB0A0D"
        />
        <BenefitCard 
          icon={UserTagIcon}
          title="Traceability & Operator Accountability"
          bgColor="#d8d9f7"
          iconColor="#0800EF"
        />
        <BenefitCard 
          icon={LinkSquareIcon}
          title="Rapid Traceability & Auditability"
          bgColor="#fbe3d2"
          iconColor="#EF4E00"
        />
      </div>
    </div>
  );
}