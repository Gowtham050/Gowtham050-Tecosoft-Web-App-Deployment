"use client";

import svgPaths from "../../imports/svg-9v3kh9sdih";
// import imgLogo2 from "figma:asset/7237d837fb840eb1fdf3472a3a5d42c920a312a7.png";
// import imgHeroSection from "figma:asset/e54110e1697ad6aa53311cf3395acde3b0aeda4d.png";
import { motion } from "framer-motion";

const imgLogo2 =
  "/assets/pages/why-tecosoft/7237d837fb840eb1fdf3472a3a5d42c920a312a7.png";
const imgHeroSection =
  "/assets/pages/why-tecosoft/e54110e1697ad6aa53311cf3395acde3b0aeda4d.png";

function Frame25() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[60px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#07af40] border-solid inset-0 pointer-events-none rounded-[60px]"
      />
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0098d4] text-[13.5px]">
        Where Operations Meet Intelligence
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      <Frame25 />
      <p className="css-4hzbpn font-['Gilroy:Semibold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[80px] text-white w-[min-content]">
        <span className="leading-[94px]">{`Connect. Sense. Predict. `}</span>
        <span className="leading-[94px] text-[#00ff84]">Elevate.</span>
      </p>
    </div>
  );
}

function IconoirArrowDown3() {
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

function Frame4() {
  return (
    <div className="bg-[#07af40] content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0">
      <p className="css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-white">
        Give demo
      </p>
      <div
        className="flex items-center justify-center relative shrink-0 size-[14px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "21.59375",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-90deg]">
          <IconoirArrowDown3 />
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[calc(50%-281px)] top-[172px] translate-x-[-50%] w-[750px]">
      <Frame36 />
      <p className="css-4hzbpn font-['Gilroy:Medium',sans-serif] leading-[29px] min-w-full not-italic relative shrink-0 text-[21px] text-white w-[min-content]">
        Turn scattered processes into a living, learning system. Tecosoft brings
        your people, tools, and data together so work flows — and results grow.
      </p>
      <Frame4 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)] content-stretch flex items-center justify-center left-[162px] overflow-clip px-[40px] py-[30px] rounded-[200px] shadow-[0px_0px_36px_5px_rgba(255,255,255,0.16)] size-[160px] top-[145px]">
      <div className="h-[120px] relative shrink-0 w-[100px]" data-name="logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[-0.11%] max-w-none top-0 w-[476.88%]"
            src={imgLogo2}
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3px_3px_20px_0px_rgba(5,128,173,0.36)]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[42px] top-[25px]">
      <div className="absolute left-[42px] size-[400px] top-[25px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 400 400"
        >
          <path
            d={svgPaths.p32ded680}
            fill="url(#paint0_linear_1_548)"
            fillOpacity="0.8"
            id="Ellipse 17"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_548"
              x1="314.783"
              x2="89.2395"
              y1="86.6667"
              y2="300.345"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[132px] size-[220px] top-[115px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 220 220"
        >
          <circle
            cx="110"
            cy="110"
            fill="url(#paint0_linear_1_626)"
            fillOpacity="0.8"
            id="Ellipse 18"
            r="110"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_626"
              x1="173.13"
              x2="49.0817"
              y1="47.6667"
              y2="165.19"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame24 />
    </div>
  );
}

function TablerLocationFilled() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="tabler:location-filled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="tabler:location-filled">
          <path
            d={svgPaths.pe041600}
            fill="url(#paint0_linear_1_574)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_574"
            x1="18.3333"
            x2="-1.92311"
            y1="1.66667"
            y2="12.2238"
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <motion.div
      className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[338px] p-[12px] rounded-[8px] top-[41px]"
      data-name="1"
      animate={{
        x: [0, -1.2, 1.2, -1.2, 1.2, 0],
        y: [0, -1.2, 1.2, -1.2, 1.2, 0],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
      }}
    >
      <TablerLocationFilled />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#282828] text-[17px]">
        One place.
      </p>
    </motion.div>
  );
}

function LsiconOperationFilled() {
  return (
    <div
      className="relative shrink-0 size-[20px]"
      data-name="lsicon:operation-filled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="lsicon:operation-filled">
          <path
            clipRule="evenodd"
            d={svgPaths.p2aa8aa80}
            fill="url(#paint0_linear_1_571)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_571"
            x1="18"
            x2="-1.13995"
            y1="2"
            y2="11.9752"
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <motion.div
      className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[13px] p-[12px] rounded-[8px] top-[357px]"
      data-name="2"
      animate={{
        x: [0, -1.2, 1.2, -1.2, 1.2, 0],
        y: [0, -1.2, 1.2, -1.2, 1.2, 0],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
      }}
    >
      <LsiconOperationFilled />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#282828] text-[17px]">
        Unified operations.
      </p>
    </motion.div>
  );
}

function MdiTickCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mdi:tick-circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="mdi:tick-circle">
          <path
            d={svgPaths.p3fb5f100}
            fill="url(#paint0_linear_1_605)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_605"
            x1="19"
            x2="-2.53244"
            y1="1"
            y2="12.2221"
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <motion.div
      className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[332px] p-[12px] rounded-[8px] top-[282px]"
      data-name="3"
      animate={{
        x: [0, -1.2, 1.2, -1.2, 1.2, 0],
        y: [0, -1.2, 1.2, -1.2, 1.2, 0],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
      }}
    >
      <MdiTickCircle />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#282828] text-[17px]">
        Ready today.
      </p>
    </motion.div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[10%_10%_0.78%_10%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 17.845"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.pab1b780}
            fill="url(#paint0_linear_1_577)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_577"
            x1="16"
            x2="-3.13995"
            y1="0"
            y2="9.97524"
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MingcuteScaleFill() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[20px]"
      data-name="mingcute:scale-fill"
    >
      <Group />
    </div>
  );
}

function Component3() {
  return (
    <motion.div
      className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-[26px] p-[12px] rounded-[8px] top-[95px]"
      data-name="4"
      animate={{
        x: [0, -1.2, 1.2, -1.2, 1.2, 0],
        y: [0, -1.2, 1.2, -1.2, 1.2, 0],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
      }}
    >
      <MingcuteScaleFill />
      <p className="css-ew64yg font-['Gilroy:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#282828] text-[17px]">
        Built to scale.
      </p>
    </motion.div>
  );
}

function Component4() {
  return (
    <div
      className="absolute h-[450px] left-[937px] top-[160px] w-[500px]"
      data-name="35"
    >
      <Group3 />
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export function HeroSection() {
  return (
    <div
      className="h-[692px] overflow-clip relative shrink-0 w-full"
      data-name="Hero section"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[140%] left-0 max-w-none top-[-0.03%] w-full"
          src={imgHeroSection}
        />
      </div>
      <div className="absolute flex h-[692px] items-center justify-center left-0 top-0 w-[1512px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="h-[692px] w-[1512px]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(204.592deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)",
            }}
          />
        </div>
      </div>
      {/* <Frame /> */}
      <Frame28 />
      <Component4 />
    </div>
  );
}
