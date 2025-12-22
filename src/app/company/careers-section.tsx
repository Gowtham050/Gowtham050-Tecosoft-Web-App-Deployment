"use client";
import React from "react";
import svgPaths from "../../imports/svg-wnzeyhu3eg";
import clsx from "clsx";

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      <div className="flex-none rotate-[270deg]">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between p-[18px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

type BackgroundImageAndText5Props = {
  text: string;
};

function BackgroundImageAndText5({ text }: BackgroundImageAndText5Props) {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <p className="bg-clip-text font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-nowrap" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(194.931deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)" }}>
        {text}
      </p>
      <BackgroundImage4 additionalClassNames="size-[20px]">
        <BackgroundImage5>
          <g clipPath="url(#clip0_1_473)" id="iconoir:arrow-down">
            <path d={svgPaths.p5b5660} id="Vector" stroke="url(#paint0_linear_1_473)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_473" x1="9.8692" x2="9.24276" y1="4.11973" y2="15.3983">
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
            <clipPath id="clip0_1_473">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </BackgroundImage5>
      </BackgroundImage4>
    </div>
  );
}

type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="bg-[#ccf1ff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[60px] shrink-0">
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#005b80] text-[14px] text-nowrap">
        <p className="leading-[18px]">{text}</p>
      </div>
    </div>
  );
}

type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[60px] shrink-0">
      <div className="flex flex-col font-['Gilroy:Medium',sans-serif] h-[18px] justify-end leading-[0] not-italic relative shrink-0 text-[#282828] text-[16px] w-[100px]">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-[#07af40] content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white">{text}</p>
      <BackgroundImage4 additionalClassNames="size-[14px]">
        <BackgroundImage6>
          <g id="iconoir:arrow-down">
            <path d={svgPaths.p1feb4d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
          </g>
        </BackgroundImage6>
      </BackgroundImage4>
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[60px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#07af40] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0098d4] text-[13.5px] text-nowrap">{text}</p>
    </div>
  );
}

export default function CareersSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip pb-[50px] pt-[60px] px-[100px] relative shrink-0 w-[1512px]" data-name="Careers" style={{ backgroundImage: "linear-gradient(236.839deg, rgb(0, 188, 239) 6.4454%, rgb(0, 35, 99) 95.133%)" }}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <BackgroundImageAndText text="We're Hiring!" />
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
          <p className="font-['Gilroy:Semibold',sans-serif] leading-[68px] relative shrink-0 text-[#00ff84] text-[56px] w-full">Be part of our missions</p>
          <p className="font-['Gilroy:Regular',sans-serif] leading-[29px] relative shrink-0 text-[#e4e4e4] text-[20px] w-full">We're always looking for people who care about craft, ask smart questions, and enjoy solving meaningful problems. If you like building things that make sense and actually ship, you'll fit right in.</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[60px] shrink-0" style={{ backgroundImage: "linear-gradient(203.594deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)" }}>
          <div className="flex flex-col font-['Gilroy:Semibold',sans-serif] h-[18px] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[57px]">
            <p className="leading-[16px]">View all</p>
          </div>
        </div>
        <BackgroundImageAndText3 text="Development" />
        <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[60px] shrink-0">
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] h-[18px] justify-end leading-[0] not-italic relative shrink-0 text-[#282828] text-[16px] w-[51px]">
            <p className="leading-[16px]">Design</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[60px] shrink-0">
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] h-[18px] justify-end leading-[0] not-italic relative shrink-0 text-[#282828] text-[16px] w-[74px]">
            <p className="leading-[16px]">Marketing</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[60px] shrink-0">
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] h-[18px] justify-end leading-[0] not-italic relative shrink-0 text-[#282828] text-[16px] w-[83px]">
            <p className="leading-[16px]">Operations</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[60px] shrink-0">
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] h-[18px] justify-end leading-[0] not-italic relative shrink-0 text-[#282828] text-[16px] w-[58px]">
            <p className="leading-[16px]">Finance</p>
          </div>
        </div>
        <BackgroundImageAndText3 text="Management" />
        <div className="bg-white content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[60px] shrink-0">
          <div className="flex flex-col font-['Gilroy:Medium',sans-serif] h-[18px] justify-end leading-[0] not-italic relative shrink-0 text-[#282828] text-[16px] w-[134px]">
            <p className="leading-[16px]">Customer services</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
        <BackgroundImage2>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">Product Designer</p>
            <p className="font-['Gilroy:Regular',sans-serif] h-[22px] leading-[20px] not-italic relative shrink-0 text-[#777] text-[16px] w-[679px]">{`We're seeking a passionate product designer to help shape the future of our user experience.`}</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <BackgroundImageAndText4 text="Remote" />
              <BackgroundImageAndText4 text="Full time" />
            </div>
          </div>
          <BackgroundImageAndText5 text="Apply Job" />
        </BackgroundImage2>
        <BackgroundImage2>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">Engineering Manager</p>
            <p className="font-['Gilroy:Regular',sans-serif] h-[22px] leading-[20px] not-italic relative shrink-0 text-[#777] text-[16px] w-[679px]">{`We're seeking an experienced engineering manager to guide our talented team.`}</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <BackgroundImageAndText4 text="Remote" />
              <BackgroundImageAndText4 text="Full time" />
            </div>
          </div>
          <BackgroundImageAndText5 text="Apply Job" />
        </BackgroundImage2>
        <BackgroundImage2>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">Customer Success Manager</p>
            <p className="font-['Gilroy:Regular',sans-serif] h-[22px] leading-[20px] not-italic relative shrink-0 text-[#777] text-[16px] w-[679px]">{`We're seeking a customer success manager to ensure client satisfaction.`}</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <BackgroundImageAndText4 text="Remote" />
              <BackgroundImageAndText4 text="Full time" />
            </div>
          </div>
          <BackgroundImageAndText5 text="Apply Job" />
        </BackgroundImage2>
        <BackgroundImage2>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">Account Executive</p>
            <p className="font-['Gilroy:Regular',sans-serif] h-[22px] leading-[20px] not-italic relative shrink-0 text-[#777] text-[16px] w-[679px]">{`We're seeking an account executive to drive growth and build relationships.`}</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <BackgroundImageAndText4 text="Remote" />
              <BackgroundImageAndText4 text="Full time" />
            </div>
          </div>
          <BackgroundImageAndText5 text="Apply Job" />
        </BackgroundImage2>
        <BackgroundImage2>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
            <p className="font-['Gilroy:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content]">SEO Marketing Manager</p>
            <p className="font-['Gilroy:Regular',sans-serif] h-[22px] leading-[20px] not-italic relative shrink-0 text-[#777] text-[16px] w-[679px]">{`We're seeking an experienced SEO marketing manager to elevate our online presence.`}</p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <BackgroundImageAndText4 text="Remote" />
              <BackgroundImageAndText4 text="Full time" />
            </div>
          </div>
          <BackgroundImageAndText5 text="Apply Job" />
        </BackgroundImage2>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
        <BackgroundImageAndText1 text="Load more" />
      </div>
    </div>
  );
}
