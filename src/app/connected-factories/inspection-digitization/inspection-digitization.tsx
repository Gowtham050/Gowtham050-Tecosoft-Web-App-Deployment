"use client";
import React from "react";

import { FeaturesSection } from "../../../components/Solutions/FeatureSection/FeaturesSection";
import { HeroSection } from "../../../components/Solutions/BannerSection/HeroSection";
import { WhyUsSection } from "../../../components/Solutions/WhyUsSection/WhyUsSection";

import {
  heroContent,
  featuresContent,
  whyDigitizeContent,
  workflowContent,
} from "@/constants/connected-factories/inspection-digitization";
import { WorkflowSection } from "@/components/Solutions/WorkflowSection/WorkflowSection";

const InspectionDigitizationHomePage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <HeroSection content={heroContent} />
      <FeaturesSection content={featuresContent} />
      <WorkflowSection content={workflowContent} />
      <WhyUsSection content={whyDigitizeContent} />
    </div>
  );
};

export default InspectionDigitizationHomePage;
