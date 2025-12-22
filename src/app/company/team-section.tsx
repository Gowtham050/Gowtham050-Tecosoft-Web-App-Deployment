"use client";
// ***************************** Import packages ***********************************************
import React from "react";

// import imgFrame1171279050 from "figma:asset/69b62573041aee9284d18081552c9a6ec088df6b.png";
// import imgFrame1171279051 from "figma:asset/77777bb1d0120f76370974d774a1243f13a97a2c.png";
// import imgFrame1171279052 from "figma:asset/6936e897f7f0ed6e66a97c4618be066b570832a8.png";
// import imgFrame1171279057 from "figma:asset/3241298ae455e424c48f34ad02e93822cc809895.png";
// import imgFrame1171279054 from "figma:asset/3fc571b02b349a403a4e5ea5437f4677bf052167.png";
// import imgFrame1171279055 from "figma:asset/a303feb766c5938b519f940c04c2c2e4f0139b02.png";

const arjunMehta = "/assets/pages/company/team/arjun-mehta.png";
const ananyaVerma = "/assets/pages/company/team/ananya-verma.png";
const priyaNair = "/assets/pages/company/team/priya-nair.png";
const riyaMalhotra = "/assets/pages/company/team/riya-malhotra.png";
const vikramSingh = "/assets/pages/company/team/vikram-singh.png";
const karanKapoor = "/assets/pages/company/team/karan-kapoor.png";

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none rounded-[16px]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[16px]">
        {children}
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[rgba(0,0,0,0.325)]" />
    </div>
  );
}

type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(220.628deg, rgba(0, 183, 255, 0.75) 21.481%, rgba(14, 176, 92, 0.75) 76.423%)",
      }}
      className="backdrop-blur backdrop-filter h-[330px] overflow-clip relative shrink-0 w-full"
    >
      <p className="absolute font-['Gilroy:Medium',sans-serif] leading-[28px] left-[24px] not-italic text-[20px] text-white top-[24px] w-[358px]">
        {text}
      </p>
    </div>
  );
}

type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic pl-[24px] pr-0 py-0 relative shrink-0 text-nowrap text-white">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[26px] relative shrink-0 text-[20px] text-center">
        {text}
      </p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[18px] relative shrink-0 text-[16px]">
        {text1}
      </p>
    </div>
  );
}

export default function TeamSection() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[46px] items-center overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1512px]"
      data-name="Meet our team"
    >
      <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-[700px]">
        <p className="font-['Gilroy:Semibold',sans-serif] leading-[44px] relative shrink-0 text-[#181818] text-[36px] text-nowrap">
          Meet our team
        </p>
        <p className="font-['Gilroy:Medium',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#8e8e8e] text-[16px] w-[min-content]">
          We're designers, developers, strategists, and problem-solvers who
          believe good products come from clear thinking and strong
          collaboration.
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[46px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[46px] items-center relative shrink-0 w-full">
          <div className="h-[330px] overflow-clip relative rounded-[16px] shrink-0 w-[406px] cursor-pointer group">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-[16px]"
            >
              <img
                alt=""
                className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full"
                src={arjunMehta}
              />
              <div
                className="absolute inset-0 rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.324) 100%)",
                }}
              />
            </div>
            <div
              className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div className="absolute bottom-[-330px] group-hover:bottom-0 content-stretch flex flex-col gap-[24px] items-start left-0 w-[406px] transition-all duration-500">
              <BackgroundImage
                text="Arjun Mehta"
                text1="Chief Technology Officer"
              />
              <BackgroundImageAndText2 text="Leads the company's technology vision, architecture, and engineering teams. Focused on building scalable, secure, and high-performance systems while turning business goals into practical, reliable tech solutions." />
            </div>
          </div>
          <div className="h-[330px] overflow-clip relative rounded-[16px] shrink-0 w-[406px] cursor-pointer group">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-[16px]"
            >
              <img
                alt=""
                className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full"
                src={ananyaVerma}
              />
              <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[rgba(0,0,0,0.325)]" />
            </div>
            <div
              className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div className="absolute bottom-[-330px] group-hover:bottom-0 content-stretch flex flex-col gap-[24px] items-start left-0 w-[406px] transition-all duration-500">
              <BackgroundImage text="Ananya Verma" text1="Data Scientist" />
              <BackgroundImageAndText2 text="Transforms raw data into clear insights using analytics, models, and a lot of logic. Helps teams make smarter decisions by spotting patterns, predicting trends, and turning numbers into stories that actually make sense." />
            </div>
          </div>
          <div className="h-[330px] overflow-clip relative rounded-[16px] shrink-0 w-[406px] cursor-pointer group">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none rounded-[16px]"
            >
              <img
                alt=""
                className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full"
                src={priyaNair}
              />
              <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[rgba(0,0,0,0.325)]" />
            </div>
            <div
              className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div className="absolute bottom-[-330px] group-hover:bottom-0 content-stretch flex flex-col gap-[24px] items-start left-0 w-[406px] transition-all duration-500">
              <BackgroundImage text="Priya Nair" text1="Content Strategist" />
              <BackgroundImageAndText2 text="Shapes clear, compelling content that aligns with brand goals and user intent. Plans, creates, and optimizes stories across platforms to drive engagement, consistency, and meaningful connections." />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[46px] items-center relative shrink-0 w-full">
          <div className="h-[330px] overflow-clip relative rounded-[16px] shrink-0 w-[406px] cursor-pointer group">
            <BackgroundImage7>
              <img
                alt=""
                className="absolute h-full left-[-6.75%] max-w-none top-0 w-[121.82%]"
                src={riyaMalhotra}
              />
            </BackgroundImage7>
            <div
              className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div className="absolute bottom-[-330px] group-hover:bottom-0 content-stretch flex flex-col gap-[24px] items-start left-0 w-[406px] transition-all duration-500">
              <BackgroundImage text="Riya Malhotra" text1="HR Manager" />
              <BackgroundImageAndText2 text="Oversees talent, culture, and people operations to keep teams motivated and compliant. Focused on hiring the right people, supporting growth, and building a workplace where productivity and sanity coexist." />
            </div>
          </div>
          <div className="h-[330px] overflow-clip relative rounded-[16px] shrink-0 w-[406px] cursor-pointer group">
            <BackgroundImage7>
              <img
                alt=""
                className="absolute h-[130.91%] left-[-12.95%] max-w-none top-0 w-[160.24%]"
                src={vikramSingh}
              />
            </BackgroundImage7>
            <div
              className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div className="absolute bottom-[-330px] group-hover:bottom-0 content-stretch flex flex-col gap-[24px] items-start left-0 w-[406px] transition-all duration-500">
              <BackgroundImage
                text="Vikram Singh"
                text1="Lead UX/UI Designer"
              />
              <BackgroundImageAndText2 text="Leads user-centered design across products, turning complex requirements into intuitive, visually clean experiences. Balances usability, aesthetics, and business goals to ship designs that actually work in the real world." />
            </div>
          </div>
          <div className="h-[330px] overflow-clip relative rounded-[16px] shrink-0 w-[406.667px] cursor-pointer group">
            <BackgroundImage7>
              <img
                alt=""
                className="absolute h-[168.32%] left-[0.05%] max-w-none top-[-24.94%] w-[99.91%]"
                src={karanKapoor}
              />
            </BackgroundImage7>
            <div
              className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div className="absolute bottom-[-330px] group-hover:bottom-0 content-stretch flex flex-col gap-[24px] items-start left-0 w-[406px] transition-all duration-500">
              <BackgroundImage text="Karan Kapoor" text1="Head of Marketing" />
              <BackgroundImageAndText2 text="Leads brand, growth, and campaign strategy to drive visibility and demand. Focused on data-driven marketing, clear messaging, and turning attention into measurable business results." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
