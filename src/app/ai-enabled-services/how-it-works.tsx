// import imgRectangle60 from "figma:asset/f3618873d8cb715764fc03e465951335b8a8705c.png";

const imgRectangle60 =
  "/assets/pages/ai-enabled/f3618873d8cb715764fc03e465951335b8a8705c.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-[1312px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[46px] relative shrink-0 text-[#282828] text-[42px] text-nowrap whitespace-pre">
        How it works
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#777777] text-[18px] w-[980px]">
        Our AI-powered system captures data, analyzes patterns, automates
        workflows, and guides smarter actions—reducing errors, improving
        decisions, and streamlining execution across your entire operation.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[90px] items-start left-[198px] not-italic top-[30px] w-[656px]">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[#282828] text-[24px] w-full">
        Connect
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#8e8e8e] text-[17px] w-full">
        Easily integrate meters, sensors, PLC/SCADA systems, and historians with
        the EAGLE Edge platform to improve data collection and analysis.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(204,241,255,0.36)] h-[150px] relative rounded-[16px] shrink-0 w-full">
      <div className="h-[150px] overflow-clip relative rounded-[inherit] w-full">
        <p
          className="absolute bg-clip-text font-['Gilroy:Medium',sans-serif] h-[110px] leading-[187px] left-[99px] not-italic text-[198px] text-center top-[10px] translate-x-[-50%] w-[106px]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          1
        </p>
        <Frame5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#55cfff] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[#282828] text-[24px] w-full">
        Ingest
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#8e8e8e] text-[17px] w-full">
        Stream data easily to your on-premises setup or a cloud data lake,
        featuring time-series indexing for improved management and analysis.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(204,241,255,0.36)] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[46px] items-center px-[46px] py-[20px] relative w-full">
          <p
            className="bg-clip-text font-['Gilroy:Medium',sans-serif] h-[110px] leading-[187px] not-italic relative shrink-0 text-[198px] text-center w-[106px]"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            2
          </p>
          <Frame8 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#55cfff] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[#282828] text-[24px] w-full">
        Analyze
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#8e8e8e] text-[17px] w-full">
        Use AI to boost forecasting accuracy, spot anomalies, predict Remaining
        Useful Life (RUL), and optimize processes for better efficiency.
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(204,241,255,0.36)] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[46px] items-center px-[46px] py-[20px] relative w-full">
          <p
            className="bg-clip-text font-['Gilroy:Medium',sans-serif] h-[110px] leading-[187px] not-italic relative shrink-0 text-[198px] text-center w-[106px]"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            3
          </p>
          <Frame9 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#55cfff] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[#282828] text-[24px] w-full">{`Act `}</p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[25px] relative shrink-0 text-[#8e8e8e] text-[17px] w-full">
        Align all elements by effectively integrating schedules, set points, and
        work orders. This approach will help close the loop and boost
        operational efficiency.
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(204,241,255,0.36)] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[46px] items-center px-[46px] py-[20px] relative w-full">
          <p
            className="bg-clip-text font-['Gilroy:Medium',sans-serif] h-[110px] leading-[187px] not-italic relative shrink-0 text-[198px] text-center w-[106px]"
            style={{
              WebkitTextFillColor: "transparent",
              color:
                "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
            }}
          >
            4
          </p>
          <Frame10 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#55cfff] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div className="h-[660px] relative rounded-[16px] shrink-0 w-[392px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full"
          src={imgRectangle60}
        />
      </div>
      <Frame6 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-white relative size-full" data-name="How it works">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start px-[100px] py-[60px] relative size-full">
          <Frame />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
