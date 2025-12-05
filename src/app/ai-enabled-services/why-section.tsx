import {
  WHY_AI_SECTION,
  WHY_AI_FEATURES,
} from "../../constants/ai-enabled-service/ai-enable-service.js";

interface FeatureCardProps {
  title: string;
  description: string;
  iconPath: string;
  bgColor: string;
  iconColor: string;
}

function FeatureCard({
  title,
  description,
  iconPath,
  bgColor,
  iconColor,
}: FeatureCardProps) {
  return (
    <div
      className="w-full h-full min-h-[200px] relative rounded-[16px] md:rounded-[20px] transition-transform duration-300 ease-in-out hover:scale-[1.03] cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[16px] md:p-[20px] lg:p-[24px] relative size-full gap-[16px] md:gap-[20px]">
          {/* Icon Container */}
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[12px] md:p-[16px] lg:p-[20px] relative rounded-[8px] md:rounded-[12px] shrink-0">
            <div className="relative shrink-0 size-[24px] md:size-[28px] lg:size-[32px]">
              <img src={iconPath} alt={title} className="size-full" />
            </div>
          </div>

          {/* Content */}
          <div className="content-stretch flex flex-col gap-[8px] md:gap-[10px] items-start not-italic  relative shrink-0 w-full">
            <h3 className="font-semibold leading-[26px] md:leading-[30px] relative text-[#282828] text-[18px] md:text-[20px] lg:text-[22px] w-full break-words">
              {title}
            </h3>
            <p className="font-normal leading-[20px] md:leading-[22px] relative text-[#8e8e8e] text-[14px] md:text-[15px] lg:text-[16px] w-full break-words">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyAiEnabledServices() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Why AI Enabled Services"
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[40px] lg:gap-[50px] items-center px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[40px] md:py-[50px] lg:py-[60px] relative w-full">
          {/* Header Section */}
          <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center not-italic relative shrink-0 text-center w-full max-w-[320px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px]">
            <h2 className="font-semibold leading-[32px] md:leading-[38px] lg:leading-[44px] relative shrink-0 text-[#282828] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]">
              {WHY_AI_SECTION.title}
            </h2>
            <p className="font-medium leading-[20px] md:leading-[22px] lg:leading-[23px] min-w-full relative shrink-0 text-[#8e8e8e] text-[14px] md:text-[15px] lg:text-[16px]">
              {WHY_AI_SECTION.description}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px] lg:gap-[28px] xl:gap-[32px] w-full auto-rows-fr">
            {WHY_AI_FEATURES.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                iconPath={feature.iconPath}
                bgColor={feature.bgColor}
                iconColor={feature.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyAiEnabledServices;
