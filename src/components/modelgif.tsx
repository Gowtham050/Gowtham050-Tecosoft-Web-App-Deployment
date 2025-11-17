import Image from 'next/image';

export default function ModelGif({ currentProduct, hoveredProduct }: any) {
    return (
        <div
            className={`hidden lg:flex fixed top-0 left-0 right-0 bottom-0 z-[100] ${hoveredProduct && currentProduct ? " w-full h-full opacity-100 duration-500" : "opacity-0 w-[20%] h-[20%] duration-300"} m-auto items-center justify-center pointer-events-none transition-all ease-out overflow-hidden bg-[#3b83f129] backdrop-blur-3xl modalgif`}
            style={{
                animation: "overlayFadeIn 0.9s ease-out forwards",
            }}
        >
            <div className="w-full max-h-[80%] flex flex-col items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-full flex-1 flex items-center justify-center ">
                    {hoveredProduct && currentProduct && (
                        <div className="max-w-[90%] md:max-w-[80%] max-h-[300px] md:max-h-[500px] m-auto bg-[#0a0e27] rounded-2xl overflow-hidden flex items-center justify-center relative">
                            <Image
                                src={currentProduct?.gifPath}
                                alt={`${currentProduct?.title} animation`}
                                className="object-cover transition-opacity duration-700"
                                fill
                                sizes="(max-width: 768px) 90vw, 80vw"
                                style={{
                                    animation: "imageReveal 0.7s ease-out forwards",
                                }}
                                unoptimized
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}