"use client";

import { FeaturesSection } from "./features-section";
import HeroSection from "./hero-section";
import { IndustriesSection } from "./industries-section";
import Solutions from "./solution-section";
import { TecosoftDashboardSection } from "./tecosoft-dashboard";

export default function Industries() {
  return (
    <div className="w-full" data-name="Industries">
      <HeroSection />
      <Solutions />
      <IndustriesSection />
      <FeaturesSection />
      <TecosoftDashboardSection />
    </div>
  );
}
