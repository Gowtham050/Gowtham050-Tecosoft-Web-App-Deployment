// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import SolutionPage from "../../app/solutions/solution-page";

export const metadata: Metadata = {
  title: "Tecosoft - Connected Factories",
  description: "Tecosoft",
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
