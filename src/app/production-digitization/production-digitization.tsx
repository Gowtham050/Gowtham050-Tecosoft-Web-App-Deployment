"use client";
import React from "react";
import { BenefitsSection } from "./BenefitsSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { StatsSection } from "./StatsSection";
import { WorkflowSection } from "./WorkflowSection";



const  ProductionDigitizationHomePage = () => {
  return (

    <div className="content-stretch flex flex-col items-start relative size-full bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <WorkflowSection />
      <BenefitsSection />
    </div>
  );
}

export default ProductionDigitizationHomePage;