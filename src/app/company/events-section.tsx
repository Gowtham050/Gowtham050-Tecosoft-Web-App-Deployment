"use client";
import React from "react";
import svgPaths from "../../imports/svg-wnzeyhu3eg";
import clsx from "clsx";
// import imgFrame1171279081 from "figma:asset/abfa687f142cc5e3fd08acc7b4c32f822bbc24bd.png";
// import imgFrame1171279082 from "figma:asset/d23b728e7fc907c12df4fbf50c417ef159965f3c.png";
// import imgFrame1171279083 from "figma:asset/f5c647afeff36760e69c064b45463a2a96f292b5.png";




const imgFrame1171279081 = "/assets/pages/company/events/abfa687f142cc5e3fd08acc7b4c32f822bbc24bd.png";
const imgFrame1171279082 = "/assets/pages/company/events/d23b728e7fc907c12df4fbf50c417ef159965f3c.png";
const imgFrame1171279083 = "/assets/pages/company/events/f5c647afeff36760e69c064b45463a2a96f292b5.png";
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

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f5f5f5] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full">
      <p className=" font-semibold   leading-[28px] relative shrink-0 text-[#282828] text-[22px] w-full">{text}</p>
      <p className="-webkit-box  font-normal   leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e8e8e] text-[16px] w-full">{text1}</p>
    </div>
  );
}

type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="bg-clip-text  font-medium  leading-[22px] not-italic relative shrink-0 text-[18px] text-nowrap" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(206.144deg, rgb(0, 188, 239) 6.4454%, rgb(0, 35, 99) 95.133%)" }}>
        {text}
      </p>
      <BackgroundImage4 additionalClassNames="size-[14px]">
        <BackgroundImage6>
          <g id="iconoir:arrow-down">
            <path d={svgPaths.p1feb4d00} id="Vector" stroke="url(#paint0_linear_1_476)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_476" x1="11.9583" x2="-0.184638" y1="1.75" y2="7.72701">
              <stop offset="0.0644535" stopColor="#00BCEF" />
              <stop offset="0.95133" stopColor="#002363" />
            </linearGradient>
          </defs>
        </BackgroundImage6>
      </BackgroundImage4>
    </div>
  );
}

type BackgroundImageAndText7Props = {
  text: string;
};

function BackgroundImageAndText7({ text }: BackgroundImageAndText7Props) {
  return (
    <div style={{ backgroundImage: "linear-gradient(198.224deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)" }} className="absolute content-stretch flex items-center justify-center px-[12px] py-[6px] right-[20px] rounded-[60px] top-[20px]">
      <p className=" font-semibold   leading-[22px] not-italic relative shrink-0 text-[18px] text-nowrap text-white">{text}</p>
    </div>
  );
}

export default function EventsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-start overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1512px]" data-name="Events">
      <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 w-full">
        <p className=" font-semibold   leading-[46px] relative shrink-0 text-[#0098d4] text-[42px] w-[364px]">Where Ideas Meet Action</p>
        <p className=" font-normal   leading-[24px] relative shrink-0 text-[#636363] text-[16px] w-[700px]">From team meetups and workshops to industry events and internal celebrations, we believe good work happens when people connect. Our events are about sharing knowledge, building culture, and occasionally stepping away from screens.</p>
      </div>
      <div className="content-stretch flex gap-[50px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[404px]">
          <div className="h-[200px] relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[169.14%] left-0 max-w-none top-[-10.05%] w-full" src={imgFrame1171279081} />
            </div>
          </div>
          <BackgroundImage3>
            <BackgroundImage1 text="Tech Innovation Summit" text1="A future-focused gathering exploring AI, cloud, and modern software practices through expert talks, live demos, and real-world case studies designed for teams building scalable digital products." />
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
              <div className="content-stretch flex  font-medium  gap-[8px] items-baseline justify-center not-italic relative shrink-0">
                <p className="h-[57px] leading-[66px] relative shrink-0 text-[#282828] text-[66px] w-[59px]">12</p>
                <p className="leading-[22px] relative shrink-0 text-[#636363] text-[18px] text-nowrap">March, 2025</p>
              </div>
              <BackgroundImageAndText6 text="View more" />
            </div>
          </BackgroundImage3>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[404px]">
          <div className="h-[200px] overflow-clip relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame1171279082} />
            <BackgroundImageAndText7 text="Upcoming" />
          </div>
          <BackgroundImage3>
            <BackgroundImage1 text="Cybersecurity Workshop" text1="An in-depth session covering threat detection, data protection, and secure development practices, helping teams understand real cyber risks and apply preventive strategies across systems and workflows." />
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
              <div className="content-stretch flex  font-medium  gap-[8px] items-baseline justify-center not-italic relative shrink-0">
                <p className="h-[57px] leading-[66px] relative shrink-0 text-[#282828] text-[66px] w-[79px]">08</p>
                <p className="leading-[22px] relative shrink-0 text-[#636363] text-[18px] text-nowrap">Jan, 2026</p>
              </div>
              <BackgroundImageAndText6 text="View more" />
            </div>
          </BackgroundImage3>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[404px]">
          <div className="h-[200px] overflow-clip relative shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[154.5%] left-0 max-w-none top-[-9.76%] w-full" src={imgFrame1171279083} />
            </div>
            <BackgroundImageAndText7 text="Upcoming" />
          </div>
          <BackgroundImage3>
            <BackgroundImage1 text="Developer Hackathon 2026" text1="A high-energy 48-hour coding challenge where developers collaborate, innovate, and build functional solutions, pushing technical creativity, teamwork, and problem-solving under real-time constraints." />
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
              <div className="content-stretch flex  font-medium  gap-[8px] items-baseline justify-center not-italic relative shrink-0">
                <p className="h-[57px] leading-[66px] relative shrink-0 text-[#282828] text-[66px] w-[76px]">20</p>
                <p className="leading-[22px] relative shrink-0 text-[#636363] text-[18px] text-nowrap">May, 2026</p>
              </div>
              <BackgroundImageAndText6 text="View more" />
            </div>
          </BackgroundImage3>
        </div>
      </div>
    </div>
  );
}
