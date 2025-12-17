// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ProductionDigitization from "./tool-life-monitoring-digitization";

export const metadata: Metadata = {
  title: "home page tech soft",
  description: "home page tech soft",
};

export default function page() {
  return (
    <>
      <ProductionDigitization />
    </>
  );
}
