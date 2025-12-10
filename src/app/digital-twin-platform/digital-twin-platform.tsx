import HeroSection from "./banner-section";
import HowItWorks from "./how-It-works";
import IndustriesCarousel from "./industries-carousel";
import WhyDigitalTwinPlatform from "./why-section";

const DigitalTwinPlatform = () => {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="Digital twin Platform"
    >
      <HeroSection />
      <WhyDigitalTwinPlatform />
      <IndustriesCarousel />
      <HowItWorks />
    </div>
  );
};

export default DigitalTwinPlatform;
