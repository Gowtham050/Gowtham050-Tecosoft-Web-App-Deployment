"use client";
import React from "react";
import { BenefitsSection } from "./benefits-section";
import { FeaturesSection } from "../../components/Solutions/FeatureSection/FeaturesSection";
import { HeroSection } from "../../components/Solutions/BannerSection/HeroSection";
import { StatsSection } from "../../components/Solutions/StatsSection/StatsSection";
import { WorkflowSection } from "./workflow-section";
import { heroContent } from "@/constants/solutions/production-digitization";

const ProductionDigitizationHomePage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-white py-10 sm:pt-2">
      <HeroSection content={heroContent} />
      <StatsSection />
      <FeaturesSection />
      {/* <WorkflowSection /> */}
      <BenefitsSection />
    </div>
  );
};

export default ProductionDigitizationHomePage;
