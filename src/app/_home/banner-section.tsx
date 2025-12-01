// ***************************** Import packages ***********************************************

import React from "react";
import Image from "next/image";

// Z-index constants - Banner should be below navbar (navbar uses 999-1001)
const Z_INDEX = {
  VIDEO_LAYER: 1, // Video background (bottom layer)
  OVERLAY_LAYER: 2, // Dark overlay above video
  CONTENT_LAYER: 10, // Banner content (below navbar)
};

const ClientSlider = () => {
  const clients = [
    { name: "Gaha", logo: "/assets/pages/home/client/gaha.png" },
    { name: "Greaves", logo: "/assets/pages/home/client/greaves.png" },
    { name: "Matalsa", logo: "/assets/pages/home/client/matalsa.png" },
    { name: "Neolite", logo: "/assets/pages/home/client/neolite.png" },
    { name: "Skipper", logo: "/assets/pages/home/client/skipper.png" },
    { name: "Wheels India", logo: "/assets/pages/home/client/wheels.png" },

    // { name: "MacPro", logo: "/assets/pages/home/new/macpro.png" },`
    // { name: "Fujitec", logo: "/assets/pages/home/new/fujitec.jpg" },
    // { name: "Netalkar", logo: "/assets/pages/home/new/netalkar.png" },
    // { name: "Paras Wires", logo: "/assets/pages/home/new/paras-wires.png" },
    // { name: "Ennar", logo: "/assets/pages/home/new/ennar.png" },
    // { name: "Fasteners India", logo: "/assets/pages/home/new/fasteners-india.png" },
    // { name: "Raj Auto", logo: "/assets/pages/home/new/raj-auto.png" },
  ];

  return (
    <div className="relative overflow-hidden pt-8 lg:pt-10 ">
      <div className="flex animate-scroll gap-12 lg:gap-16">
        {/* Duplicate for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center min-w-[140px] lg:min-w-[180px]"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={200}
              height={100}
              className=" w-[140px]  h-[90px] object-contain"
              style={{
                filter:"brightness(0) invert(1)"
              }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const BannerSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/images/banner-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: Z_INDEX.VIDEO_LAYER }}
        onError={(e) => {
          console.error("Banner video failed to load:", e);
          // Fallback: hide video and show static background
          e.currentTarget.style.display = "none";
        }}
      >
        <source src="/assets/video/banner-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background:
            'url("/assets/images/banner-black-cover.svg") no-repeat center center',
          backgroundSize: "cover",
          zIndex: Z_INDEX.OVERLAY_LAYER,
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: Z_INDEX.CONTENT_LAYER }}>
        <div className="w-[90%]  mx-auto px-4 lg:px-4">
          <div className="pt-24 pb-12 lg:pt-48 ">
            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-bold text-white leading-tight lg:leading-[1.1] mb-6">
              Building Intelligent Ecosystems for the{" "}
              <span className="text-[#0eb05c] block lg:inline">
                Next-Gen Industries
              </span>
            </h1>

            <div className="relative flex flex-col lg:flex-row lg:items-center mb-4">
              <p className="text-base sm:text-lg lg:text-[22px] font-medium text-white/90 max-w-3xl leading-relaxed mb-6 lg:mb-0">
                With the power of IIoT, AI, and Digital Twins, Tecosoft
                transforms operations <br className="lg:hidden" />
                across industries into intelligent connected ecosystems.
              </p>

              {/* Horizontal Line - Desktop Only (Absolute) */}
              <Image
                src="/assets/icons/h-line.svg"
                alt=""
                width={480}
                height={20}
                className="hidden xl:block absolute left-[50%] right-0 bottom-3 -translate-y-1/2 h-auto w-[400px]  2xl:w-[480px] max-w-full"
              />

              {/* Book a Demo Link - Desktop */}
              <a
                href="#demo"
                className="hidden xl:flex items-center gap-2 text-white font-medium text-lg whitespace-nowrap hover:text-[#0eb05c] transition-colors cursor-pointer ml-auto pt-13 "
              >
                Book a Demo
                <span className="text-xl">
                  <Image
                    src="/assets/icons/white-right-arrow.svg"
                    alt=""
                    width={16}
                    height={20}
                  />
                </span>
              </a>
            </div>
            {/* Book a Demo Button - Mobile */}
            <div className="lg:hidden mb-12">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-[#0eb05c] text-white px-8 py-3 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium text-lg"
              >
                Book a Demo
                <span>
                  <Image
                    src="/assets/icons/white-right-arrow.svg"
                    alt=""
                    width={16}
                    height={20}
                  />
                </span>
              </a>
            </div>

            {/* Client Logos Slider */}
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
