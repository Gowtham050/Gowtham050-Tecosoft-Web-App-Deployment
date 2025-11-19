// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import SolutionPage from "./solution-page";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <>
      <main>
        <SolutionPage />
      </main>
    </>
  );
}
