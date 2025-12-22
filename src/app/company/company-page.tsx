"use client";
import React from "react";
import HeroSection from "./hero-section";
import MissionSection from "./mission-section";
import TeamSection from "./team-section";
import CareersSection from "./careers-section";
import EventsSection from "./events-section";

export default function CompanyInfo() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <CareersSection />
      {/* <EventsSection /> */}
    </div>
  );
}
