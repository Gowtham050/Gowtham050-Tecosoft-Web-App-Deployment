// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import Homepage from "./_home/page";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <>
      <main>
        <Homepage />
      </main>
    </>
  );
}
