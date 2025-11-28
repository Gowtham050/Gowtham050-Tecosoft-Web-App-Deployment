

// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import Analytics from "./tecosoft-analytics";

export const metadata: Metadata = {
  title: "Tecosoft - Analytics",
  description: "Tecosoft",
};

export default function page() {
  return (
    <>
      <Analytics />
    </>
  );
}
