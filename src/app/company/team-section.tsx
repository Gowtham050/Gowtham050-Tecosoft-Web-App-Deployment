"use client";
import React from "react";
import TeamCard from "../../components/TeamCard";
import { TEAM_MEMBERS } from "@/constants/company/company";

export default function TeamSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-[#181818] sm:text-4xl">
          Meet our team
        </h2>
        <p className="mt-4 text-base text-[#8e8e8e]">
          We're designers, developers, strategists, and problem-solvers who
          believe good products come from clear thinking and strong
          collaboration.
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
}
