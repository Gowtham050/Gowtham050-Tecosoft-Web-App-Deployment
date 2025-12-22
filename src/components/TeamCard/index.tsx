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
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Default gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF] to-[#0EB05C] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Slide content */}
      <div className="absolute bottom-[-100%] left-0 w-full p-6 text-white transition-all duration-500 group-hover:bottom-0">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm opacity-90">{role}</p>
        <p className="mt-4 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
