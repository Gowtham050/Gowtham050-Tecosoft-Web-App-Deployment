"use client";
import React from "react";

import { HeroSection } from "../../../components/Solutions/BannerSection/HeroSection";
import { FeaturesSection } from "../../../components/Solutions/FeatureSection/FeaturesSection";

import {
  heroContent,
  featuresContent,
} from "@/constants/connected-factories/tool-life-monitoring-digitization";

const ToolLiftMonitoringDigitizationPage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <HeroSection content={heroContent} />
      <FeaturesSection content={featuresContent} />
    </div>
  );
};

export default ToolLiftMonitoringDigitizationPage;
