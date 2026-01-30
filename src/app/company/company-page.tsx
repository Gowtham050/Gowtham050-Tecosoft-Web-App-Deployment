"use client";
import React, { useState } from "react";
import HeroSection from "./hero-section";
import MissionSection from "./mission-section";
import TeamSection from "./team-section";
import CareersSection from "./careers-section";
import EventsSection from "./events-section";
import JobDetailsModal from "@/components/JobDetailsModal";

export default function CompanyInfo() {
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <div>
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <CareersSection setCareersOpen={setCareersOpen} />
      <EventsSection />

      <JobDetailsModal
        open={careersOpen}
        onClose={() => setCareersOpen(false)}
      />
    </div>
  );
}
