"use client";
import React from "react";
import { BenefitsSection } from "./benefits-section";
import { FeaturesSection } from "../../../components/Solutions/FeatureSection/FeaturesSection";
import { HeroSection } from "../../../components/Solutions/BannerSection/HeroSection";
import { StatsSection } from "../../../components/Solutions/StatsSection/StatsSection";
import {
  heroContent,
  featuresContent,
  workflowContent,
} from "@/constants/connected-factories/production-digitization";
import { WorkflowSection } from "@/components/Solutions/WorkflowSection/WorkflowSection";

const ProductionDigitizationHomePage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <HeroSection content={heroContent} />
      <StatsSection />
      <FeaturesSection content={featuresContent} />
      <WorkflowSection content={workflowContent} />
      <BenefitsSection />
    </div>
  );
};

export default ProductionDigitizationHomePage;
