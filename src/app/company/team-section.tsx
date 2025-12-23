"use client";
import React, { useEffect, useRef, useState } from "react";
import TeamCard from "../../components/TeamCard";
import { TEAM_MEMBERS } from "@/constants/company/company";

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 640) return; // Disable scroll tracking on desktop

    const onScroll = () => {
      const cards = scrollRef.current?.querySelectorAll("[data-team-card]");
      if (!cards) return;

      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Check if card is centered in viewport
        if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      {/* Snap Scroll Container (Mobile/Tablet) / Grid (Desktop) */}
      <div className="mx-auto mt-14 max-w-7xl">
        <div
          ref={scrollRef}
          className="
            grid grid-cols-1 sm:grid-cols-2 gap-8
            snap-y snap-mandatory
            lg:grid-cols-3 sm:snap-none
          "
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div key={member.id} data-team-card className="snap-center">
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
