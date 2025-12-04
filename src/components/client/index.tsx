import React from "react";

import Image from "next/image";

const ClientSlider = () => {
  const clients = [
    { name: "Ennar", logo: "/assets/pages/home/client/ennar.png" },
    {
      name: "Fasteners India",
      logo: "/assets/pages/home/client/fasteners-india.png",
    },
    { name: "Fujitec", logo: "/assets/pages/home/client/fujitec.png" },
    { name: "Gaha", logo: "/assets/pages/home/client/gaha.png" },
    { name: "Greaves", logo: "/assets/pages/home/client/greaves.png" },
    { name: "MacPro", logo: "/assets/pages/home/client/mac-pro.png" },
    { name: "Matalsa", logo: "/assets/pages/home/client/matalsa.png" },
    { name: "Neolite", logo: "/assets/pages/home/client/neolite.png" },
    { name: "Netalkar", logo: "/assets/pages/home/client/netalkar.png" },
    { name: "Paras Wires", logo: "/assets/pages/home/client/paras-wires.png" },
    { name: "Raj Auto", logo: "/assets/pages/home/client/raj-auto.png" },
    { name: "Skipper", logo: "/assets/pages/home/client/skipper.png" },
    { name: "Wheels India", logo: "/assets/pages/home/client/wheels.png" },
  ];

  return (
    <div className="relative overflow-hidden pt-8 lg:pt-10">
      <div className="flex animate-scroll gap-11 lg:gap-14" style={{ width: 'max-content' }}>
        {/* Duplicate multiple times for seamless loop */}
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center min-w-[140px] lg:min-w-[180px]"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={200}
              height={100}
              className="w-[140px] h-[90px] object-contain"
              style={{
                filter: "brightness(0) invert(1)",
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
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;
