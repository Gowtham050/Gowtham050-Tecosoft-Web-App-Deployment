"use client";
import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  description,
}) => {
  return (
    <div className="group relative h-[320px] w-full overflow-hidden rounded-2xl cursor-pointer">
      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
      />

      {/* BLACK GRADIENT (DEFAULT) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 68%, rgba(0,0,0,0.90) 100%)",
        }}
      />

      {/* GREEN / BLUE OVERLAY (HOVER ONLY) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background:
            "linear-gradient(226.55deg, rgba(0,183,255,0.95) 21.48%, rgba(14,176,92,0.95) 76.42%)",
        }}
      />

      {/* ALWAYS VISIBLE FOOTER (NAME + ROLE) */}
      <div className="absolute bottom-0 left-0 z-[3] w-full p-6 text-white transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm opacity-90">{role}</p>
      </div>

      {/* HOVER CONTENT (DESCRIPTION) */}
      <div className="absolute bottom-[-100%] left-0 z-[4] w-full p-6 text-white transition-all duration-500 group-hover:bottom-0">
        {/* <h3 className="text-lg font-semibold">{name}</h3> */}
        {/* <p className="text-sm opacity-90">{role}</p> */}
        <p className="mt-4 text-[18px] lg:text-[20px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
