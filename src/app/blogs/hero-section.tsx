"use client";

function Badge() {
  return (
    <div className="relative inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#07af40] bg-white/70 backdrop-blur-sm">
      <p className="text-[#0098d4] text-sm font-semibold">
        Blogs
      </p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full
        min-h-[480px] sm:min-h-[520px] lg:min-h-[600px]
        flex items-center justify-center
        px-4 sm:px-6 lg:px-12
        overflow-hidden
      "
      style={{
        background:
          "linear-gradient(201deg, #00B7FF 20%, #0EB05C 75%)",
      }}
    >
      {/* Soft White Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-white/80 to-white/40" />

      {/* Content Container */}
      <div
        className="
          relative z-10
          max-w-[1200px]
          mx-auto
          text-center
          flex flex-col
          items-center
          gap-6
        "
      >
        <Badge />

        {/* Heading */}
        <h1
          className="
            font-semibold
            text-[#282828]
            leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            max-w-[90%]
            lg:max-w-[850px]
          "
        >
          Insights and Updates
        </h1>

        {/* Description */}
        <p
          className="
            text-[#636363]
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            max-w-[95%]
            sm:max-w-[650px]
            lg:max-w-[800px]
          "
        >
          Deploy connected operations with EAGLE at the Edge and Tecosoft
          Analytics in the Cloud. We bring dashboards, alerts, monitoring,
          digital twins and AI to every industry.
        </p>
      </div>
    </section>
  );
}
