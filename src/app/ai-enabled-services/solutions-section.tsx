import React, { useEffect, useState } from "react";
import {
  SOLUTIONS_SECTION,
  SOLUTIONS_DATA,
} from "../../constants/ai-enabled-service/ai-enable-service.js";
import svgPaths from "../../imports/svg-txc4khmm90";

// ===========================
// TypeScript Interfaces
// ===========================

interface FeatureCardProps {
  icon: string;
  label: string;
  bgColor: string;
  iconColor: string;
}

interface ImageCarouselProps {
  images: string[];
}

interface SolutionCardProps {
  title: string;
  description: string;
  features: FeatureCardProps[];
  images: string[];
  imagePosition?: "left" | "right";
}

// ===========================
// Icon Components
// ===========================

const iconComponents: Record<string, React.FC<{ color: string }>> = {
  thunder: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p45a2780}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  cpu: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 21 21">
      <path d={svgPaths.p19c9e740} stroke={color} strokeWidth="1.5" />
      <path d={svgPaths.pcbd100} stroke={color} strokeWidth="1.5" />
      <path
        d={svgPaths.p3404db00}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  battery: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p3e6ef80}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  brain: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 21 21">
      <path
        d={svgPaths.p2c9a82ac}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p16b8ec00}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p124cf200}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.pcfd6f80}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  "dashboard-add": ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 22 22">
      <circle cx="5" cy="5" r="4.25" stroke={color} strokeWidth="1.5" />
      <circle cx="16.5" cy="16.5" r="4.25" stroke={color} strokeWidth="1.5" />
      <circle cx="5" cy="16.5" r="4.25" stroke={color} strokeWidth="1.5" />
      <path
        d={svgPaths.p2be34700}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  star: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p31b92700}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  server: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 23 22">
      <path d={svgPaths.p3fa69480} stroke={color} strokeWidth="1.5" />
      <path
        d={svgPaths.p3fea0180}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  dashboard: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 22 19">
      <path
        d={svgPaths.p13657ee0}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p323e2780}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.75 10.75V7.11362"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

// ===========================
// Reusable Components
// ===========================

const ArrowIcon: React.FC = () => (
  <svg className="size-full" fill="none" viewBox="0 0 28 28">
    <path
      d={svgPaths.p22ee4d80}
      stroke="#181818"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.25"
    />
  </svg>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  label,
  bgColor,
  iconColor,
}) => {
  const IconComponent = iconComponents[icon];

  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter basis-0 grow min-h-px min-w-px rounded-[12px] shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[14px] items-start p-[14px] w-full">
          <div className="shrink-0 size-[24px]">
            {IconComponent && <IconComponent color={iconColor} />}
          </div>
          <p className="font-medium leading-[20px] text-[#282828] text-[16px] whitespace-pre">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

const CarouselIndicator: React.FC<{
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}> = ({ total, activeIndex, onDotClick }) => (
  <div className="absolute h-[20px] left-1/2 top-[calc(50%+196px)] translate-x-[-50%] translate-y-[-50%] w-[50px]">
    <svg className="block size-full" fill="none" viewBox="0 0 50 20">
      <rect fill="white" fillOpacity="0.24" height="20" rx="10" width="50" />
      {Array.from({ length: total }).map((_, index) => (
        <circle
          key={index}
          cx={10 + index * 15}
          cy="10"
          r="5"
          fill={activeIndex === index ? "#00FF84" : "white"}
          className="cursor-pointer transition-all"
          onClick={() => onDotClick(index)}
        />
      ))}
    </svg>
  </div>
);

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="h-[460px] relative rounded-[16px] shrink-0 w-[632px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            alt={`Solution slide ${index + 1}`}
            className={`absolute inset-0 max-w-none object-cover rounded-[16px] size-full transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            src={img}
          />
        ))}
      </div>
      <CarouselIndicator
        total={images.length}
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  features,
  images,
  imagePosition = "right",
}) => {
  const ContentSection = (
    <div className="basis-0 bg-white grow min-h-px min-w-px rounded-[16px] self-stretch shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col items-start justify-between p-[30px] size-full">
          {/* Title and Description */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="flex items-center justify-between w-full">
              <h3 className="font-semibold leading-[34px] text-[#181818] text-[30px] whitespace-pre">
                {title}
              </h3>
              <div className="flex items-center justify-center shrink-0 size-[28px] rotate-[270deg]">
                <ArrowIcon />
              </div>
            </div>
            <p className="font-medium leading-[22px] text-[#8e8e8e] text-[16px] w-full">
              {description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col gap-[20px] items-start w-full">
            <div className="flex gap-[20px] items-center w-full">
              <FeatureCard {...features[0]} />
              <FeatureCard {...features[1]} />
            </div>
            <div className="flex gap-[20px] items-center w-full">
              <FeatureCard {...features[2]} />
              <FeatureCard {...features[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ImageSection = <ImageCarousel images={images} />;

  return (
    <div className="bg-[rgba(255,255,255,0.24)] rounded-[24px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="flex gap-[20px] items-start p-[20px] w-full">
          {imagePosition === "left" ? (
            <>
              {ImageSection}
              {ContentSection}
            </>
          ) : (
            <>
              {ContentSection}
              {ImageSection}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ===========================
// Main Component
// ===========================

const Solutions: React.FC = () => {
  return (
    <section className="relative shrink-0 w-full" data-name="Solutions">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div
          className="flex flex-col gap-[60px] items-start px-[100px] py-[60px] w-full"
          style={{
            background:
              "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
          }}
        >
          {/* Section Header */}
          <div className="flex items-start justify-between text-white w-full">
            <h2 className="font-semibold leading-[46px] text-[42px] whitespace-pre">
              {SOLUTIONS_SECTION.title}
            </h2>
            <p className="font-normal leading-[24px] text-[16px] w-[650px]">
              {SOLUTIONS_SECTION.description}
            </p>
          </div>

          {/* Solution Cards */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            {SOLUTIONS_DATA.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                images={solution.images}
                imagePosition={index % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
