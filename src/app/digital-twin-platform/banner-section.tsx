import svgPathsHero from "../../imports/svg-gesaxlp4ee";
// import imgLogo2 from "figma:asset/7237d837fb840eb1fdf3472a3a5d42c920a312a7.png";
// import imgHeroSection from "figma:asset/4c1dc57c1e7b64d3e936b9fbfff3dec05024ba0b.png";
// import imgWhatIsABuildingDigitalTwin1024X5361 from "figma:asset/10ef3b80e732e618d4a20651618c6ba1cf14cb41.png";


const imgHeroSection = "/assets/pages/digital-twin-platform/4c1dc57c1e7b64d3e936b9fbfff3dec05024ba0b.png";
const imgWhatIsABuildingDigitalTwin1024X5361 =
  "/assets/pages/digital-twin-platform/10ef3b80e732e618d4a20651618c6ba1cf14cb41.png";












function IconoirArrowDown4() {
  return (
    <div className="relative size-[14px]" data-name="iconoir:arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="iconoir:arrow-down">
          <path d={svgPathsHero.p1feb4d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#07af40] content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Request Demo</p>
      <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "14", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconoirArrowDown4 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[100px] top-[140px] w-[720px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[90px] min-w-full not-italic relative shrink-0 text-[76px] text-white w-[min-content]">Smarter Operations: Digital Twins for the Future</p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">Mirror your physical operations in software to predict, simulate, and optimize performance. Connect once, model fast, automate everywhere.</p>
      <Frame3 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[636px] overflow-clip relative shrink-0 w-full" data-name="Hero section">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroSection} />
      <div className="absolute flex h-[636px] items-center justify-center left-0 top-0 w-[1512px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="backdrop-blur-[10px] backdrop-filter h-[636px] w-[1512px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(202.813deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)" }} />
        </div>
      </div>
      <Frame40 />
      <div className="absolute h-[460px] left-[832px] top-[calc(50%+40px)] translate-y-[-50%] w-[580px]" data-name="What-is-a-Building-Digital-Twin-1024x536 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhatIsABuildingDigitalTwin1024X5361} />
      </div>
    </div>
  );
}

export default HeroSection;