import svgPaths from "../../imports/svg-6sw94kd16o";
// import imgLogo2 from "figma:asset/7237d837fb840eb1fdf3472a3a5d42c920a312a7.png";
// import imgEagle11 from "figma:asset/722868975ad87bdad1f880aefbc37c33e60f610d.png";

const imgLogo2 =
  "./assets/pages/solutions/production-digitization/7237d837fb840eb1fdf3472a3a5d42c920a312a7.png";
const imgEagle11 =
  "./assets/pages/solutions/production-digitization/722868975ad87bdad1f880aefbc37c33e60f610d.png";

function LogoIcon() {
  return (
    <div className="h-[22.465px] relative shrink-0 w-[107.002px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 23">
        <g id="Group 1">
          <path d={svgPaths.p1512000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2d6e9500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p308e4780} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pe18f000} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2c4ad000} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p30670680} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p19fdc840} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3b3a3000} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p19204700} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p30d40b80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.pc1e3540} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p15912900} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p3b5f2a70} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.pf5fb680} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.pcbc3000} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p2b4c2000} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p1a9a1a00} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p1f6ce680} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p1319e400} fill="var(--fill-0, white)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="h-[36px] relative shrink-0 w-[30px]" data-name="logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.11%] max-w-none top-0 w-[476.88%]" src={imgLogo2} />
        </div>
      </div>
      <LogoIcon />
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="relative size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.p1feb4d00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function BookDemoButton() {
  return (
    <div className="bg-[#07af40] box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Book a Demo</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "14", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path d={svgPaths.p1bf4c500} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function NavDropdown() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-[7px] pt-0 px-0 relative shrink-0">
      <DropdownIcon />
    </div>
  );
}

function NavItem({ label, hasDropdown = false }: { label: string; hasDropdown?: boolean }) {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{label}</p>
      {hasDropdown && <NavDropdown />}
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[42px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <NavItem label="Platform" hasDropdown />
      <NavItem label="Solutions" hasDropdown />
      <NavItem label="Industries" hasDropdown />
      <NavItem label="Company" hasDropdown />
      <NavItem label="Why TecoSoft" />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[30px] backdrop-filter bg-[rgba(255,255,255,0)] box-border content-stretch flex items-center justify-between left-0 overflow-clip px-[100px] py-[20px] top-0 w-[1512px]">
      <Logo />
      <BookDemoButton />
      <Navigation />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[100px] not-italic text-white top-[180px] w-[700px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[96px] relative shrink-0 text-[86px] w-full">
        <span>{`Production Digitization with `}</span>
        <span className="text-[#00ff84]">EAGLE</span>
      </p>
      <p className="font-['Gilroy:Medium',sans-serif] leading-[29px] relative shrink-0 text-[21px] w-full">Digitize your production floor with live data collection, real-time OEE tracking, and closed-loop feedback powered by Tecosoft's EAGLE Edge Gateway.</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="h-[711px] overflow-clip relative shrink-0 w-full" data-name="Hero section">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop muted playsInline>
        <source src="/_videos/v1/589b51fb90bc3834c965c21fe8a5133a8782a77c" />
      </video>
      <div className="absolute flex h-[711px] items-center justify-center left-0 top-0 w-[1512px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[711px] w-[1512px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(205.185deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)" }} />
        </div>
      </div>
      <Header />
      <HeroContent />
      <div className="absolute h-[341px] left-[930px] rounded-[10px] top-[215px] w-[482px]" data-name="Eagle (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="EAGLE Device" className="absolute h-[102.09%] left-[-0.63%] max-w-none top-[-0.9%] w-[101.27%]" src={imgEagle11} />
        </div>
      </div>
    </div>
  );
}