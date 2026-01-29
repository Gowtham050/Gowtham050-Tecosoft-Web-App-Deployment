"use client";

import { FEATURES } from "@/constants/industries";
// import { FeatureCard } from "./FeatureCard";
import { VerticalAutoScroll } from "@/components/VerticalAutoScroll";

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="bg-white rounded-[10px] shadow-[0_0_16px_rgba(0,0,0,0.05)]">
      <div className="flex gap-[16px] p-[16px]">
        <div className="w-[22px] h-[22px] shrink-0">{icon}</div>

        <div className="flex flex-col gap-[4px]">
          <p className="text-[17px] text-[#181818] font-medium leading-[24px]">
            {title}
          </p>
          <p className="text-[14px] text-[#8e8e8e] leading-[18px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative bg-[#f5f5f5] h-[650px] w-full overflow-hidden">
      {/* Left Content */}
      <div className="absolute left-[100px] top-1/2 -translate-y-1/2 w-[680px] space-y-[24px]">
        <div className="inline-flex px-[12px] py-[6px] rounded-full border border-[#07af40] text-[14px] text-[#0098d4]">
          Solutions in Action
        </div>

        <h2 className="text-[36px] font-semibold leading-[44px] text-[#282828]">
          Explore Use Cases Across{" "}
          <span className="text-[#07af40]">Industries</span>
        </h2>

        <p className="text-[16px] text-[#8e8e8e] leading-[24px]">
          Our advanced platforms and solutions power a range of use cases,
          transforming sectors like healthcare, finance, and manufacturing.
        </p>
      </div>

      {/* Right Auto Scroll */}
      <div className="absolute left-[892px] top-[24px] w-[500px] h-[602px]">
        <VerticalAutoScroll speed={50}>
          {FEATURES.map((item) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </VerticalAutoScroll>
      </div>

      {/* Fade masks */}
      <div className="absolute left-[892px] top-0 w-[500px] h-[60px] bg-gradient-to-b from-[#f5f5f5] to-transparent" />
      <div className="absolute left-[892px] bottom-0 w-[500px] h-[60px] bg-gradient-to-t from-[#f5f5f5] to-transparent" />
    </section>
  );
}
