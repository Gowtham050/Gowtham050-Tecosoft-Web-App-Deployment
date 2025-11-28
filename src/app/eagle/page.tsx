// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import EagePage from "./eagle-page";

export const metadata: Metadata = {
  title: "Tecosoft - Eagle",
  description: "Tecosoft",
};

export default function page() {
  return (
    <>
      <EagePage />
    </>
  );
}
