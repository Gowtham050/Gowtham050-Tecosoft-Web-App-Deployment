"use client";
import React from "react";
import { BenefitsSection } from "./BenefitsSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "../../components/Solutions/BannerSection/HeroSection";
import { StatsSection } from "./StatsSection";
import { WorkflowSection } from "./WorkflowSection";
import { heroContent } from "@/constants/solutions/production-digitization";

const ProductionDigitizationHomePage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full bg-white">
      <HeroSection content={heroContent} />
      {/* <StatsSection /> */}
      <FeaturesSection />
      {/* <WorkflowSection /> */}
      {/* <BenefitsSection /> */}
    </div>
  );
};

export default ProductionDigitizationHomePage;
