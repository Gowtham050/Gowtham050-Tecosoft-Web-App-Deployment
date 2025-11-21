import { useState } from "react";
import { iconMap, type IconType } from "../../components/icons/AnimatedIcons";
import { featuresContent } from "../../constants/solutions/production-digitization";

interface FeatureCardProps {
  icon: IconType;
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
  const IconComponent = iconMap[icon];

  return (
    <div
      className="bg-white box-border content-stretch flex flex-col gap-4 md:gap-6 items-start p-5 md:p-6 relative rounded-[20px] w-full cursor-pointer hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <div
        className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-5 md:p-6 relative rounded-[12px] shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <IconComponent isHovered={isHovered} />
      </div>
      <div className="content-stretch flex flex-col gap-3 items-start leading-[22px] not-italic relative shrink-0 w-full">
        <p className="font-['Gilroy:Semibold',sans-serif] relative shrink-0 text-[#181818] text-base md:text-lg">
          {title}
        </p>
        <p className="font-['Gilroy:Regular',sans-serif] relative shrink-0 text-[#777777] text-sm md:text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-start lg:items-center not-italic w-full max-w-7xl px-6 md:px-8 lg:px-12">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-tight text-[#181818] text-2xl md:text-3xl lg:text-4xl lg:w-[384px] shrink-0">
        {featuresContent.sectionTitle}
      </p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-relaxed text-[#8e8e8e] text-sm md:text-base flex-1">
        {featuresContent.sectionDescription}
      </p>
    </div>
  );
}

function TopGradient() {
  return (
    <div className="absolute h-32 md:h-40 lg:h-[180px] left-0 top-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={featuresContent.backgroundImage}
        />
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <div
      className="box-border flex flex-col gap-12 md:gap-16 lg:gap-[60px] items-center overflow-clip px-4 md:px-6 lg:px-12 py-12 md:py-16 lg:py-[60px] relative w-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 184, 219, 0.12) 0%, rgba(0, 184, 219, 0.12) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <TopGradient />
      <SectionHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl">
        {featuresContent.features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon as IconType}
            title={feature.title}
            description={feature.description}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </div>
  );
}
