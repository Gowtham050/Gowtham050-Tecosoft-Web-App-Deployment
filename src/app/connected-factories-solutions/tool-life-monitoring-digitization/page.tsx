// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ProductionDigitization from "./tool-life-monitoring-digitization";

export const metadata: Metadata = {
  title: "Tech Soft - Tool Life Monitoring Digitization",
  description: "Tech Soft Tool Life Monitoring Digitization Solution Page",
};

export default function page() {
  return (
    <>
      <ProductionDigitization />
    </>
  );
}
