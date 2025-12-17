"use client";
import React from "react";
import HeroSection from "./hero-section";
import Features from "./features";
import TechnologyCardsSlider from "../../components/analytics/TechnologyCardsSlider";
import Benefits from "./Benefits";

export default function TecosoftAnalytics() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Tecosoft Analytics">
      <HeroSection />
      <Features />
      <TechnologyCardsSlider />
      <div className="min-[1023.5px]:h-[753px] w-full">
        <Benefits />
      </div>
    </div>
  );
}