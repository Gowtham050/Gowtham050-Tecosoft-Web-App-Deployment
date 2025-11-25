"use client";

import React from "react";

import { HorizontalScrollSection } from "../../components/HoruzontalScroll";
import ConnectedFactories from "./banner-section";
import Features from "./feature-section";
import Stats from "./stats-section";

export default function ConnectedFactories1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative w-full pt-[30px]"
      data-name="Connected Factories"
    >
      <div className="w-full">
        {/* <HorizontalScrollSection scrollDistance={1300}> */}
        <ConnectedFactories />
        {/* </HorizontalScrollSection> */}
      </div>
      <Features />
      <Stats />
    </div>
  );
}
