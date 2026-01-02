// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import InspectionDigitizationHomePage from "./inspection-digitization";

export const metadata: Metadata = {
  title: "Tech Soft - Inspection Digitization",
  description: "Tech Soft Inspection Digitization Solution Page",
};

export default function page() {
  return (
    <>
      <InspectionDigitizationHomePage />
    </>
  );
}
