"use client";
import React from "react";
import Image from "next/image";

interface BenefitCardProps {
  iconPath: string | undefined;
  title: string;
  description: string;
  bgColor: string;
}

function BenefitCard({
  iconPath,
  title,
  description,
  bgColor,
}: BenefitCardProps) {
  return (
    <div
      className="w-full sm:basis-0 sm:grow min-h-[140px] relative rounded-[20px] sm:shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col justify-center h-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] lg:gap-[18px] 2xl:gap-[24px] items-start justify-center p-[16px] lg:p-[18px] 2xl:p-[24px] relative w-full">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-hidden p-[16px] lg:p-[18px] 2xl:p-[20px] relative rounded-[12px] shrink-0">
            {iconPath ? (
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <Image
                  src={iconPath}
                  alt={title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-[32px] h-[32px]" />
            )}
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
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

export function WhyUsSection({
  content: whyDigitizeContent,
}: {
  content?: any;
}) {
  return (
    <div className="bg-white relative w-full">
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center pb-[60px] md:pb-[90px] pt-[40px] md:pt-[60px] px-[20px] sm:px-[40px] lg:px-[60px] 2xl:px-[100px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center not-italic relative shrink-0 text-center w-full max-w-[800px]">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[32px] sm:leading-[38px] md:leading-[44px] relative shrink-0 text-[#282828] text-[28px] sm:text-[32px] md:text-[36px] whitespace-normal lg:whitespace-pre">
              {whyDigitizeContent.sectionTitle}
            </p>
            <p className="font-['Gilroy:Medium',sans-serif] leading-[20px] md:leading-[23px] w-full relative shrink-0 text-[#8e8e8e] text-[14px] md:text-[16px]">
              {whyDigitizeContent.sectionDescription}
            </p>
          </div>

          {/* Content */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[50px] 2xl:gap-[80px] items-center relative shrink-0 w-full">
            {/* Image */}
            <div className="content-stretch flex h-[300px] sm:h-[400px] lg:h-[380px] 2xl:h-[476px] items-center relative shrink-0 w-full sm:w-[300px] lg:w-[280px] 2xl:w-[350px] mx-auto lg:mx-0 ">
              <div className="absolute bg-[#00b8db] h-[300px] sm:h-[400px] lg:h-[380px] 2xl:h-[476px] right-[-12px] sm:right-[-20px] lg:right-[-16px] rounded-[12px] top-[12px] sm:top-[20px] lg:top-[16px] w-full sm:w-[300px] lg:w-[280px] 2xl:w-[350px]" />
              <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-10">
                <img
                  alt={whyDigitizeContent.imageAlt}
                  className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[12px] w-full h-full"
                  src={whyDigitizeContent.image}
                />
              </div>
            </div>

            {/* Benefits Grid */}

            {whyDigitizeContent.benefits.length === 6 ? (
              <div className="grid grid-cols-1  lg:grid-cols-3 gap-[20px] lg:gap-[24px] 2xl:gap-[36px] w-full lg:flex-1">
                {whyDigitizeContent.benefits?.map((item: any) => (
                  <div key={item.id}>
                    <BenefitCard
                      iconPath={item.icon}
                      title={item.title}
                      description={item.description}
                      bgColor={item.bgColor}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] lg:gap-[24px] 2xl:gap-[36px] w-full lg:flex-1">
                {whyDigitizeContent.benefits?.map((item: any) => (
                  <div key={item.id}>
                    <BenefitCard
                      iconPath={item.icon}
                      title={item.title}
                      description={item.description}
                      bgColor={item.bgColor}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
