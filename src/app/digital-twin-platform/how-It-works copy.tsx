"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HOW_IT_WORKS_SECTION,
  HOW_IT_WORKS_STEPS,
} from "../../constants/digial-twin-platform/digital-twin-platform.js";

// ===========================
// Types
// ===========================

interface TimelineNodeProps {
  position: "top" | "bottom";
  className?: string;
}

// ===========================
// Components
// ===========================

/**
 * Section Header Component
 * Displays the title and description for the "How it Works" section
 */
function SectionHeader() {
  return (
    <div className="flex flex-col gap-5 items-center text-center max-w-full px-4 md:px-8 lg:px-0 lg:max-w-[980px]">
      <h2 className="font-semibold text-3xl md:text-4xl lg:text-[42px] leading-tight lg:leading-[46px] text-white">
        {HOW_IT_WORKS_SECTION.title}
      </h2>
      <p className="font-normal text-base md:text-lg leading-relaxed lg:leading-[25px] text-[#e4e4e4] max-w-full lg:max-w-[980px]">
        {HOW_IT_WORKS_SECTION.description}
      </p>
    </div>
  );
}

/**
 * Timeline Node Component
 * Displays a vertical line with a dot indicator
 * Position determines if dot is at top or bottom
 */
function TimelineNode({ position, className = "" }: TimelineNodeProps) {
  const isTopPosition = position === "top";

  return (
    <div className={`h-[200px] w-[18px] ${className}`}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 200"
        aria-hidden="true"
      >
        <g>
          {/* Vertical line */}
          <path
            d="M9 0L9 200"
            fill="none"
            stroke="white"
            strokeOpacity="0.36"
            strokeWidth="2"
          />
          {/* Indicator dot */}
          <circle
            cx="9"
            cy={isTopPosition ? "191" : "9"}
            fill="#2AC3FF"
            r="9"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Step Card Component
 * Displays individual step information with number, title, and description
 */
interface StepCardProps {
  step: number;
  title: string;
  description: string;
  opacity: any; // framer-motion MotionValue
  className?: string;
}

function StepCard({
  step,
  title,
  description,
  opacity,
  className = "",
}: StepCardProps) {
  return (
    <motion.div
      style={{ opacity }}
      className={`flex flex-col gap-2 max-w-[280px] ${className}`}
    >
      <h3 className="font-semibold text-2xl md:text-[28px] lg:text-[24px] lg:text-[28px] leading-8 text-[#2ac3ff]">
        {step}. {title}
      </h3>
      <p className="font-normal text-sm md:text-base lg:text-[14px] xl:text-[16px] leading-relaxed md:leading-[22px] text-white">
        {description}
      </p>
    </motion.div>
  );
}

/**
 * Animated Timeline Component
 * Displays the horizontal timeline with animated line and step indicators
 * Animates based on scroll position
 */
function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate the horizontal line length based on scroll
  const lineLength = useTransform(scrollYProgress, [0, 1], [1, 1575]);

  // Fade in each step as user scrolls through the timeline
  const step1Opacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 1]);
  const step2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0.6, 1]);
  const step3Opacity = useTransform(scrollYProgress, [0.35, 0.55], [0.6, 1]);
  const step4Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0.6, 1]);

  return (
    <div className="relative w-full hidden lg:block px-4 xl:px-0">
      {/* Timeline grid layout - scale down for 1024-1410px, full size for 1410px+ */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 grid-rows-1 relative origin-top-left l transition-transform duration-300"
      >
        {/* Horizontal animated line */}
        <div className="row-start-1 col-start-1 h-0 relative mt-[192px] w-full max-w-[1576px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1576 2"
            >
              {/* Background line */}
              <line
                stroke="#FFFFFF3D"
                strokeLinecap="round"
                strokeWidth="2"
                x1="1"
                x2="1575"
                y1="1"
                y2="1"
              />
              {/* Animated foreground line that fills on scroll */}
              <motion.line
                stroke="white"
                strokeLinecap="round"
                strokeWidth="2"
                x1="1"
                x2={lineLength}
                y1="1"
                y2="1"
              />
            </svg>
          </div>
        </div>

        {/* Step 1: Connect (top-left) */}
        <TimelineNode
          position="top"
          className="row-start-1 col-start-1 ml-[150px] mt-0"
        />
        <StepCard
          step={1}
          title={HOW_IT_WORKS_STEPS[0].title}
          description={HOW_IT_WORKS_STEPS[0].description}
          opacity={step1Opacity}
          className="row-start-1 col-start-1 ml-[190px] mt-0"
        />

        {/* Step 2: Model (bottom-left) */}
        <TimelineNode
          position="bottom"
          className="row-start-1 col-start-1 ml-[411px] mt-[184px]"
        />
        <StepCard
          step={2}
          title={HOW_IT_WORKS_STEPS[1].title}
          description={HOW_IT_WORKS_STEPS[1].description}
          opacity={step2Opacity}
          className="row-start-1 col-start-1 ml-[451px] mt-[278px]"
        />

        {/* Step 3: Simulate (top-right) */}
        <TimelineNode
          position="top"
          className="row-start-1 col-start-1 ml-[620px] xl:ml-[708px] mt-0"
        />
        <StepCard
          step={3}
          title={HOW_IT_WORKS_STEPS[2].title}
          description={HOW_IT_WORKS_STEPS[2].description}
          opacity={step3Opacity}
          className="row-start-1 col-start-1 ml-[660px] xl:ml-[748px] mt-0"
        />

        {/* Step 4: Optimize (bottom-right) */}
        <TimelineNode
          position="bottom"
          className="row-start-1 col-start-1 ml-[760px] xl:ml-[980px] mt-[184px]"
        />
        <StepCard
          step={4}
          title={HOW_IT_WORKS_STEPS[3].title}
          description={HOW_IT_WORKS_STEPS[3].description}
          opacity={step4Opacity}
          className="row-start-1 col-start-1  ml-[800px] xl:ml-[1020px] mt-[278px]"
        />
      </div>
    </div>
  );
}

/**
 * Mobile Timeline Component
 * Simplified vertical layout for mobile devices
 */
function MobileTimeline() {
  return (
    <div className="flex flex-col gap-8 w-full lg:hidden px-4">
      {HOW_IT_WORKS_STEPS.map((step) => (
        <div
          key={step.id}
          className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
        >
          <h3 className="font-semibold text-xl md:text-2xl leading-8 text-[#2ac3ff]">
            {step.step}. {step.title}
          </h3>
          <p className="font-normal text-sm md:text-base leading-relaxed text-white/90">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Main How It Works Section
 * Displays the complete "How it Works" section with header and timeline
 */
function HowItWorks() {
  return (
    <section
      className="flex flex-col gap-12 md:gap-16 lg:gap-8 xl:gap-20 items-center overflow-clip py-12 md:py-16 lg:pb-[20px] xl:pb-[70px] lg:pt-[60px] px-4 md:px-8 lg:px-0 w-full max-w-[1576px] mx-auto"
      data-name="How it works"
      style={{
        background: "linear-gradient(257.57deg, #003D55 0%, #055778 100%)",
      }}
    >
      <SectionHeader />
      <AnimatedTimeline />
      <MobileTimeline />
    </section>
  );
}

export default HowItWorks;
