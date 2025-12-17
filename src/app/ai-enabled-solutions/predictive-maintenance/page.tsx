// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import Aienabled from "./predictive-maintenance";
export const metadata: Metadata = {
  title: "Tecosoft - AI Enabled Services",
  description: "Tecosoft AI Enabled Services",
};

export default function Home() {
  return (
    <>
      <Aienabled />
    </>
  );
}
