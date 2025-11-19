"use client";

import React from "react";

import { HorizontalScrollSection } from "../../components/HoruzontalScroll";
import ConnectedFactories from "./banner-section";
import Features from "./feature-section";
import Stats from "./stats-section";

export default function ConnectedFactories1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative w-full pt-[81px]"
      data-name="Connected Factories"
    >
      <HorizontalScrollSection scrollDistance={1650}>
        <ConnectedFactories />
      </HorizontalScrollSection>
      <Features />
      <Stats />
    </div>
  );
}
