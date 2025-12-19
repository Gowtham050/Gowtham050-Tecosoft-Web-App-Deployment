// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ManufacturingConditionMonitoring  from "./manufacturing-condition-monitoring";

export const metadata: Metadata = {
  title: "home page tech soft",
  description: "home page tech soft",
};

export default function page() {
  return (
    <>
      <ManufacturingConditionMonitoring />
    </>
  );
}
