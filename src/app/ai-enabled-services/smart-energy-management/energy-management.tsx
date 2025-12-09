"use client";

import { HeroSection } from "@/components/Solutions/BannerSection/HeroSection";
import { FeaturesSection } from "@/components/Solutions/FeatureSection/FeaturesSection";
import { AnalyticsSection } from "@/components/Solutions/AnalyticsSection/analyticsSection";
import {
  heroContent,
  featuresContent,
  analyticsContent,
} from "@/constants/ai-enabled-service/smart-energy-management";
import React from "react";
import CoreFeatures from "./core-features";

export default function ConnectedFactories1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="AI Enabled Services"
    >
      <HeroSection content={heroContent} />
      <FeaturesSection content={featuresContent} />
      <CoreFeatures />
      <AnalyticsSection content={analyticsContent} />
    </div>
  );
}
