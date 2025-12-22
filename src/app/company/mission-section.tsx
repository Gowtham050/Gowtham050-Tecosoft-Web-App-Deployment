"use client";
// ***************************** Import packages ***********************************************
import React from "react";
import clsx from "clsx";

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-[14px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        {children}
      </svg>
    </div>
  );
}

type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div
      style={
        {
          "--transform-inner-width": "0",
          "--transform-inner-height": "0",
        } as React.CSSProperties
      }
      className={clsx(
        "flex items-center justify-center relative shrink-0",
        additionalClassNames
      )}
    >
      <div className="flex-none rotate-[270deg]">{children}</div>
    </div>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-[#07af40] content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white">
        {text}
      </p>
      <BackgroundImage4 additionalClassNames="size-[14px]">
        <BackgroundImage6>
          <g id="iconoir:arrow-down">
            <path
              d="M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167"
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.35"
            />
          </g>
        </BackgroundImage6>
      </BackgroundImage4>
    </div>
  );
}

export default function MissionSection() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Banner Intro"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(224, 246, 250) 0%, rgb(224, 246, 250) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[150px] items-start px-[100px] py-[60px] relative w-full">
          <div className="font-['Gilroy:Semibold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#282828] text-[0px] text-[40px] w-[320px]">
            <p className="mb-0">Build, Learn and</p>
            <p className="text-[#0098d4]">Grow with us.</p>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[46px] grow items-start min-h-px min-w-px relative shrink-0">
            <p className="font-['Gilroy:Regular',sans-serif] leading-[29px] min-w-full not-italic relative shrink-0 text-[#4f4f4f] text-[20px] w-[min-content]">
              We empower organizations to transform intricate processes into
              transparent, data-informed strategies. Through the fusion of
              intelligent software and user-centric design, we equip teams to
              enhance productivity, accelerate responsiveness, and achieve
              scalable growth. Our solutions drive efficiency and clarity,
              ensuring every decision is grounded in actionable insights.
            </p>
            <BackgroundImageAndText1 text="Join our team" />
          </div>
        </div>
      </div>
    </div>
  );
}
