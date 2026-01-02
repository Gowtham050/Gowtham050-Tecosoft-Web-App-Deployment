// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ManufacturingConditionMonitoring  from "./condition-monitoring";

export const metadata: Metadata = {
  title: "Tech Soft - Condition Monitoring",
  description: "Tech Soft Condition Monitoring Solution Page",
};

export default function page() {
  return (
    <>
      <ManufacturingConditionMonitoring />
    </>
  );
}
