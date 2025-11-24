"use client";
import React from "react";

import { FeaturesSection } from "../../../components/Solutions/FeatureSection/FeaturesSection";
import { HeroSection } from "../../../components/Solutions/BannerSection/HeroSection";

import { heroContent, featuresContent } from "@/constants/connected-factories/maintenance-digitization";

const MaintenanceDigitizationHomePage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <HeroSection content={heroContent} />
      <FeaturesSection content={featuresContent} />
    </div>
  );
};

export default MaintenanceDigitizationHomePage;
