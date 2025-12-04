"use client";

import Image from "next/image";

export default function CapabilityCard1() {
  const protocols = [
    { name: "OPC UA", logo: "/assets/platform/eagle/opcua.png" },
    { name: "Modbus", logo: "/assets/platform/eagle/modbus.png" },
    { name: "MTConnect", logo: "/assets/platform/eagle/mtconnect.png" },
    { name: "MQTT", logo: "/assets/platform/eagle/mqtt.png" },
    { name: "FANUC", logo: "/assets/platform/eagle/fanuc.png" },
    { name: "I/O", logo: "/assets/platform/eagle/iot.png" },
    { name: "HTTP", logo: "/assets/platform/eagle/http.png" },
  ];

  return (
    <div className="bg-[#ccf1ff] box-border content-stretch flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[30px] xl:gap-[36px] items-start overflow-hidden p-[20px] sm:p-[26px] md:p-[32px] lg:p-[38px] xl:p-[42px] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] w-full relative shadow-[0px_10px_30px_rgba(0,0,0,0.2)] sm:shadow-[0px_12px_36px_rgba(0,0,0,0.2)] md:shadow-[0px_15px_45px_rgba(0,0,0,0.2)] lg:shadow-[0px_18px_52px_rgba(0,0,0,0.2)] xl:shadow-[0px_20px_60px_rgba(0,0,0,0.2)]">
      <p className="font-semibold leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[36px] xl:leading-[40px] not-italic relative shrink-0 text-[#005b80] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[31px] xl:text-[34px]">{`Supported Protocols & Drivers`}</p>

      <div className="relative overflow-hidden w-full mt-[8px] sm:mt-[10px] md:mt-[12px] lg:mt-[16px] xl:mt-[20px]">
        <div
          className="flex animate-scroll gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[80px] xl:gap-[100px]"
          style={{ width: "max-content" }}
        >
          {/* Duplicate multiple times for seamless loop */}
          {[...protocols, ...protocols, ...protocols].map((protocol, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-[70px] sm:h-[85px] md:h-[100px] lg:h-[138px] xl:h-[165px] min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[200px] xl:min-w-[240px]"
            >
              <Image
                src={protocol.logo}
                alt={protocol.name}
                width={200}
                height={140}
                className="object-contain  h-[70px] sm:h-[85px] md:h-[100px] lg:h-[138px] xl:h-[160px] min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[200px] xl:min-w-[240px] "
              />
            </div>
          ))}
        </div>
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
          animation: scroll 25s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
