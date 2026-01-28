"use client";

import svgPaths from "@/imports/svg-9v3kh9sdih";

const OUTCOMES_DATA = {
  hero: {
    title: "Outcomes that Matter",
    description:
      "Turn slow, manual processes into intelligent, self-improving workflows — spot issues sooner, maintain audit-ready trails, and let AI automate the heavy lifting across your operations.",
    buttons: [
      { text: "Talk to an expert", type: "primary" },
      { text: "Explore Platforms", type: "secondary" },
    ],
  },
  cards: [
    {
      id: 1,
      title: "Unbreakable Reliability",
      description:
        "Spot issues early, guide fixes, and keep work humming with fewer surprises.",
      iconComponent: "Background",
    },
    {
      id: 2,
      title: "Smarter Resource Use",
      description:
        "Cut waste and optimize consumption with demand‑aware insights and controls.",
      iconComponent: "Group4",
    },
    {
      id: 3,
      title: "Fast, Aligned Decisions",
      description:
        "A shared, real‑time picture for ops, service, and leadership so choices are clear and quick.",
      iconComponent: "Group5",
    },
    {
      id: 4,
      title: "Scale Without Friction",
      description:
        "Plug into what you already have, roll out in phases, expand across teams and locations smoothly.",
      iconComponent: "Component8Icon",
    },
  ],
};

function IconoirArrowDown5() {
  return (
    <div className="relative size-[14px]" data-name="iconoir:arrow-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p1feb4d00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#07af40] content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 w-[172px]">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-white">
        {OUTCOMES_DATA.hero.buttons[0].text}
      </p>
      <div
        className="flex items-center justify-center relative shrink-0 size-[14px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "2196",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-90deg]">
          <IconoirArrowDown5 />
        </div>
      </div>
    </div>
  );
}

function IconoirArrowDown6() {
  return (
    <div className="relative size-[14px]" data-name="iconoir:arrow-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p1feb4d00}
            id="Vector"
            stroke="var(--stroke-0, #07AF40)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 w-[172px]">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#07af40] text-[15px]">
        {OUTCOMES_DATA.hero.buttons[1].text}
      </p>
      <div
        className="flex items-center justify-center relative shrink-0 size-[14px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "2196",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-90deg]">
          <IconoirArrowDown6 />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[800px]">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[36px] text-center text-white">
        {OUTCOMES_DATA.hero.title}
      </p>
      <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[23px] min-w-full not-italic relative shrink-0 text-[#e4e4e4] text-[16px] text-center w-[min-content]">
        {OUTCOMES_DATA.hero.description}
      </p>
      <Frame47 />
    </div>
  );
}

function Frame29() {
  const card = OUTCOMES_DATA.cards[0];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#282828] text-[20px]">
        {card.title}
      </p>
      <p className="css-4hzbpn font-['Gilroy:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#777] text-[15px] text-center w-[min-content]">
        {card.description}
      </p>
    </div>
  );
}

function Background() {
  return (
    <div
      className="h-[100px] relative shrink-0 w-[91.464px]"
      data-name="Background"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 91.4643 100"
      >
        <defs>
          <linearGradient
            id="iconGradient1"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="21.48%" stopColor="#4CCCFF" />
            <stop offset="76.42%" stopColor="#00FF84" />
          </linearGradient>
        </defs>
        <g id="Background">
          <path
            d={svgPaths.p24c65180}
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p321ee600}
            fill="white"
            fillRule="evenodd"
            id="Path 2"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p37429200}
            fill="#777777"
            id="Path 3"
            className="transition-all duration-300 ease-in-out"
          />
        </g>
      </svg>
      <style>{`
        .group:hover #Background path#Path\\ 1,
        .group:hover #Background path#Path\\ 3 {
          fill: url(#iconGradient1);
        }
      `}</style>
    </div>
  );
}

function Component5() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[46px] items-center p-[36px] relative rounded-[12px] shrink-0 w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      data-name="36"
      style={{
        backgroundImage: "none",
      }}
    >
      <Frame29 />
      <Background />
    </div>
  );
}

function Frame30() {
  const card = OUTCOMES_DATA.cards[1];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#282828] text-[20px]">
        {card.title}
      </p>
      <p className="css-4hzbpn font-['Gilroy:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#777] text-[15px] text-center w-[min-content]">
        {card.description}
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[100px] relative shrink-0 w-[99.729px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 99.7292 100"
      >
        <defs>
          <linearGradient
            id="iconGradient2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="21.48%" stopColor="#4CCCFF" />
            <stop offset="76.42%" stopColor="#00FF84" />
          </linearGradient>
        </defs>
        <g id="Group 1171277053">
          <path
            d={svgPaths.p1ccdae80}
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p880c00}
            fill="white"
            id="Path 2"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p2f52d600}
            fill="#777777"
            id="Path 3"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p363e5300}
            fill="white"
            id="Path 4"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p21559b00}
            fill="#777777"
            id="Path 5"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.peea8500}
            fill="white"
            id="Path 6"
            className="transition-all duration-300 ease-in-out"
          />
        </g>
      </svg>
      <style>{`
        .group:hover #Group\\ 1171277053 path#Path\\ 1,
        .group:hover #Group\\ 1171277053 path#Path\\ 3,
        .group:hover #Group\\ 1171277053 path#Path\\ 5 {
          fill: url(#iconGradient2);
        }
      `}</style>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[46px] items-center p-[36px] relative rounded-[12px] shrink-0 w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      data-name="37"
      style={{
        backgroundImage: "none",
      }}
    >
      <Frame30 />
      <Group4 />
    </div>
  );
}

function Frame31() {
  const card = OUTCOMES_DATA.cards[2];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#282828] text-[20px]">
        {card.title}
      </p>
      <p className="css-4hzbpn font-['Gilroy:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#777] text-[15px] text-center w-[min-content]">
        {card.description}
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[100px] relative shrink-0 w-[118.958px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 118.958 100"
      >
        <defs>
          <linearGradient
            id="iconGradient3"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="21.48%" stopColor="#4CCCFF" />
            <stop offset="76.42%" stopColor="#00FF84" />
          </linearGradient>
        </defs>
        <g id="Group 1171277054">
          <path
            d={svgPaths.p122fd300}
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p162c7ab0}
            fill="white"
            fillRule="evenodd"
            id="Path 2"
            className="transition-all duration-300 ease-in-out"
          />
        </g>
      </svg>
      <style>{`
        .group:hover #Group\\ 1171277054 path#Path\\ 1 {
          fill: url(#iconGradient3);
        }
      `}</style>
    </div>
  );
}

function Component7() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[46px] items-center p-[36px] relative rounded-[12px] shrink-0 w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      data-name="38"
      style={{
        backgroundImage: "none",
      }}
    >
      <Frame31 />
      <Group5 />
    </div>
  );
}

function Frame32() {
  const card = OUTCOMES_DATA.cards[3];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#282828] text-[20px]">
        {card.title}
      </p>
      <p className="css-4hzbpn font-['Gilroy:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#777] text-[15px] text-center w-[min-content]">
        {card.description}
      </p>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[46px] items-center p-[36px] relative rounded-[12px] shrink-0 w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      data-name="39"
      style={{
        backgroundImage: "none",
      }}
    >
      <Frame32 />
      <div className="h-[100px] relative shrink-0 w-[95px]" data-name="Path 1">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 95 100"
        >
          <defs>
            <linearGradient
              id="iconGradient4"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="21.48%" stopColor="#4CCCFF" />
              <stop offset="76.42%" stopColor="#00FF84" />
            </linearGradient>
          </defs>
          <path
            d={svgPaths.p3b61d600}
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        <style>{`
          .group:hover path#Path\\ 1 {
            fill: url(#iconGradient4);
          }
        `}</style>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
    </div>
  );
}

export function OutcomesThatMatter() {
  return (
    <div
      className="content-stretch flex flex-col gap-[50px] items-center overflow-clip px-[100px] py-[60px] relative shrink-0 w-[1512px]"
      data-name="Outcomes that matter"
      style={{
        backgroundImage:
          "linear-gradient(219.604deg, rgb(0, 188, 239) 6.4454%, rgb(0, 35, 99) 95.133%)",
      }}
    >
      <Frame26 />
      <Frame48 />
    </div>
  );
}
