import { useState } from "react";
import { motion } from "framer-motion";
import svgPathsSettings from "../../imports/svg-9h0ezj771j";
import svgPathsDoc from "../../imports/svg-3zywriu5xc";
import svgPathsProduction from "../../imports/svg-knaibo6bbd";

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  iconPath: string;
  iconViewBox: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 0,
    title: "Setup & Configuration",
    description:
      "Define Production Context. EAGLE and configure parameters such as Machine ID, Idle Timeout, and server connectivity to get production lines digitally ready.",
    iconPath: svgPathsSettings.p27d7e8c0,
    iconViewBox: "0 0 70 70",
  },
  {
    id: 1,
    title: "Define Production Context",
    description:
      "Setup company details, shifts, operators, and alarm reasons in Tecosoft Analytics for structured and accurate monitoring.",
    iconPath: svgPathsDoc.p1038e800,
    iconViewBox: "0 0 70 70",
  },
  {
    id: 2,
    title: "Start Production",
    description:
      "Log in, select model and Job ID, and begin production - EAGLE automatically initiates real-time data collection.",
    iconPath: svgPathsProduction.p17d91e00,
    iconViewBox: "0 0 70 70",
  },
  {
    id: 3,
    title: "Monitor & Control",
    description:
      "Live performance metrics, production counts, and downtime alerts directly on dashboards for proactive control.",
    iconPath: svgPathsSettings.p27d7e8c0,
    iconViewBox: "0 0 70 70",
  },
  {
    id: 4,
    title: "Closed-loop Response",
    description:
      "When a machine goes idle or into alarm, EAGLE prompts for a reason and pauses production to keep downtime data accurate.",
    iconPath: svgPathsSettings.p27d7e8c0,
    iconViewBox: "0 0 70 70",
  },
  {
    id: 5,
    title: "Inspect & Analyze OEE",
    description:
      "Review part inspections, validate OK/NC counts, and compute APQ & OEE automatically to measure real-time performance.",
    iconPath: svgPathsSettings.p27d7e8c0,
    iconViewBox: "0 0 70 70",
  },
];

function IconoirArrowDown() {
  return (
    <div className="relative size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={svgPathsSettings.p124ac900}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function IconoirArrowDownBlue() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={svgPathsSettings.p124ac900}
            stroke="#0098D4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

export function WorkflowSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < workflowSteps.length - 1) {
      setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const activeStep = workflowSteps[currentStep];

  // Calculate the offset for sliding animation
  // Each step moves the container 850px to the left
  const containerOffset = 10;

  // Get previous steps (to show on the left)
  const previousSteps = workflowSteps.slice(0, currentStep);

  // Get future steps (to show on the right)
  const futureSteps = workflowSteps.slice(currentStep + 1);

  return (
    <div
      className="bg-[linear-gradient(242.47deg,#00BCEF_6.45%,#002363_95.13%)] relative w-full h-[690px] overflow-hidden"
      data-name="Workflow Section"
    >
      {/* Header */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 -translate-x-1/2 not-italic text-white top-[60px]">
        <p className="font-['Gilroy:Semibold',sans-serif] leading-[46px] relative shrink-0 text-[42px] text-nowrap whitespace-pre">
          <span className="not-italic text-white">Workflow:</span>
          <span>{` A Connected Inspection Journey`}</span>
        </p>
        <p className="font-['Gilroy:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-center w-[500px]">
          A simple, connected flow from setup to continuous improvement - short,
          clear steps for shopfloor adoption.
        </p>
      </div>

      {/* Animated Container */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: containerOffset }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative size-full">
          {/* Timeline Line */}
          <div className="absolute h-0 left-0 top-[423px] w-[3000px]">
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 3000 2"
              >
                <path
                  d="M0 1H3000"
                  stroke="white"
                  strokeOpacity="0.24"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Render all steps with animations */}
          {workflowSteps.map((step, index) => {
            const isActive = index === currentStep;
            const isPast = index < currentStep;
            const isFuture = index > currentStep;

            // Calculate position based on state
            let left = 100; // default active position
            let top = 200;
            let opacity = 1;
            let titleSize = 56;
            let descriptionSize = 20;
            let iconSize = 140;
            let showDescription = true;

            if (isPast) {
              // Past steps - small on the left
              const pastIndex = currentStep - index;
              if (pastIndex === 1) {
                left = -350;
              } else if (pastIndex === 2) {
                left = -800;
              } else {
                left = -1250; // far left, hidden
              }
              top = 365;
              opacity = 0.5;
              titleSize = 24;
              showDescription = false;
              iconSize = 0; // hide icon
            } else if (isFuture) {
              // Future steps - small on the right
              const futureIndex = index - currentStep;
              const rightPositions = [950, 1400, 1850, 2300, 2750];
              left = rightPositions[futureIndex - 1] || 3000;
              top = 365;
              opacity = 0.5;
              titleSize = 24;
              showDescription = false;
              iconSize = 0; // hide icon
            }

            return (
              <motion.div
                key={step.id}
                className="absolute content-stretch flex flex-col items-start w-[700px]"
                animate={{
                  left: `${left}px`,
                  top: `${top}px`,
                  opacity: opacity,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <div className="content-stretch flex gap-[36px] items-start relative shrink-0">
                  <motion.div
                    className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[7px] relative rounded-[12px] shrink-0 shadow-2xl overflow-hidden"
                    animate={{
                      width: iconSize,
                      height: iconSize,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {isActive && (
                      <div className="relative shrink-0 size-[70px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox={step.iconViewBox}
                        >
                          <g>
                            <path d={step.iconPath} fill="#00FF84" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </motion.div>
                  <motion.p
                    className={`font-['Gilroy:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 max-w-[477px] ${
                      isActive ? "text-[#00ff84]" : "text-white"
                    } ${!isActive ? "font-['Gilroy:Medium',sans-serif]" : ""}`}
                    animate={{ fontSize: `${titleSize}px` }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {step.title}
                  </motion.p>
                </div>

                <motion.div
                  className="relative shrink-0 size-[10px]"
                  animate={{
                    marginTop: isActive ? "78px" : "25px",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 10 10"
                  >
                    <circle cx="5" cy="5" fill="white" r="5" />
                  </svg>
                </motion.div>

                {showDescription && (
                  <motion.p
                    className="font-['Gilroy:Regular',sans-serif] leading-[25px] min-w-full not-italic relative shrink-0 text-white w-[min-content] text-[18px]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      fontSize: `${descriptionSize}px`,
                      marginTop: "50px",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {step.description}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Navigation Buttons - Fixed Position */}
      <div className="absolute content-stretch flex gap-[12px] items-center right-[100px] top-[486px] z-10">
        {/* Previous Button */}
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`box-border content-stretch flex gap-[10px] items-center p-[7px] relative rounded-[8px] shrink-0 ${
            currentStep === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]"
          />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <IconoirArrowDown />
            </div>
          </div>
        </button>

        {/* Next Button */}
        <button
          onClick={nextStep}
          disabled={currentStep === workflowSteps.length - 1}
          className={`bg-white box-border content-stretch flex gap-[10px] items-center p-[7px] relative rounded-[8px] shrink-0 ${
            currentStep === workflowSteps.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
        >
          <IconoirArrowDownBlue />
        </button>
      </div>
    </div>
  );
}
