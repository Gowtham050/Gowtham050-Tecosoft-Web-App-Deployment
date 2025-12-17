// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import EneryManagement from "./energy-management";
export const metadata: Metadata = {
  title: "Tecosoft - AI Enabled Services",
  description: "Tecosoft AI Enabled Services",
};

export default function Home() {
  return (
    <>
      <EneryManagement />
    </>
  );
}
