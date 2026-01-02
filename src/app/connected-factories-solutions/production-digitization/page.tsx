// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ProductionDigitization from "./production-digitization";

export const metadata: Metadata = {
  title: "Tech Soft - Production Digitization",
  description: "Tech Soft Production Digitization Solution Page",
};

export default function page() {
  return (
    <>
      <ProductionDigitization />
    </>
  );
}
