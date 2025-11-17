"use client";
import Image from "next/image";

export default function ModelGif({ currentProduct, hoveredProduct }: any) {
  return (
    <div
      className={`hidden lg:flex fixed top-0 left-0 right-0 bottom-0 z-[100] ${
        hoveredProduct && currentProduct
          ? " w-full h-full opacity-100 duration-500"
          : "opacity-0 w-[20%] h-[20%] duration-300"
      } m-auto items-center justify-center pointer-events-none transition-all ease-out overflow-hidden bg-[#3b83f129] backdrop-blur-2xl modalgif`}
      style={{
        animation: "overlayFadeIn 0.9s ease-out forwards",
      }}
    >
      <div className="w-full max-h-[80%] flex flex-col items-center justify-center overflow-hidden">
        {/* <div className="flex flex-col items-center gap-4 md:gap-6">
                    <div className="flex flex-col items-center gap-1 md:gap-1.5">
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-center leading-tight">
                            Our Platforms
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-center leading-tight bg-gradient-to-r from-[#00b7ff] to-[#0eb05c] bg-clip-text text-transparent">
                            From Edge to Insights
                        </h3>
                    </div>

                    <p className="text-white/75 text-base md:text-lg font-normal text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-relaxed px-4">
                        Whether it's a factory, utility, or city — our platforms turn data
                        into intelligence and intelligence into impact.
                    </p>
                </div> */}
        <div className="relative w-full max-w-full flex-1 flex items-center justify-center ">
          {hoveredProduct && currentProduct && (
            <div className="max-w-[90%] md:max-w-[80%] max-h-[300px] md:max-h-[500px] m-auto bg-[#0a0e27] rounded-2xl overflow-hidden flex items-center justify-center relative">
              <Image
                fill
                // sizes="100vw"
                src={currentProduct?.gifPath}
                alt={`${currentProduct?.title} animation`}
                className="w-full h-full object-cover transition-opacity duration-700"
                style={{
                  animation: "imageReveal 0.7s ease-out forwards",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
