"use client";
import React from "react";
import svgPaths from "../../imports/svg-wnzeyhu3eg";
import clsx from "clsx";
import {
  CAREER_CATEGORIES,
  CAREER_JOBS,
} from "../../constants/company/company";

type ArrowIconProps = {
  className?: string;
  strokeColor?: string;
  size?: number;
};

function ArrowIcon({
  className = "",
  strokeColor = "white",
  size = 14,
}: ArrowIconProps) {
  return (
    <div
      className={clsx("flex items-center justify-center shrink-0", className)}
      style={
        {
          "--transform-inner-width": "0",
          "--transform-inner-height": "0",
        } as React.CSSProperties
      }
    >
      <div className="flex-none rotate-[270deg]">
        <div
          className={clsx(
            "relative",
            size === 20 ? "size-[20px]" : "size-[14px]"
          )}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox={size === 20 ? "0 0 20 20" : "0 0 14 14"}
          >
            <g clipPath={size === 20 ? "url(#clip0_arrow_20)" : undefined}>
              <path
                d={size === 20 ? svgPaths.p5b5660 : svgPaths.p1feb4d00}
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={size === 20 ? "1.75" : "1.35"}
              />
            </g>
            {size === 20 && (
              <defs>
                <clipPath id="clip0_arrow_20">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

type BadgeProps = {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  width?: string;
};

function Badge({ text, variant = "secondary", width }: BadgeProps) {
  const variantStyles = {
    primary:
      "bg-gradient-to-br from-[#00B7FF] to-[#0EB05C] text-white font-semibold ",
    secondary: "bg-white text-[#282828] font-medium",
    outline: "bg-white text-[#0098d4] font-semibold border border-[#07af40]",
  };

  return (
    <div
      className={clsx(
        `flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shrink-0 text-sm sm:text-base whitespace-nowrap ${width}`,
        variantStyles[variant]
      )}
    >
      {text}
    </div>
  );
}

type TagProps = {
  text: string;
};

function Tag({ text }: TagProps) {
  return (
    <div className="bg-[#ccf1ff] flex items-center justify-center px-3 py-1 rounded-full shrink-0">
      <p className=" font-medium  text-[#005b80] text-xs sm:text-sm whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

type ApplyButtonProps = {
  onClick?: () => void;
};

function ApplyButton({ onClick }: ApplyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex gap-1 items-center shrink-0 hover:opacity-90 transition-opacity"
      aria-label="Apply for job"
    >
      <p
        className="bg-clip-text  font-semibold   text-lg sm:text-xl whitespace-nowrap"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(194.931deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)",
        }}
      >
        Apply Job
      </p>
      <ArrowIcon
        className="size-5"
        strokeColor="url(#paint0_linear_apply)"
        size={20}
      />
      <svg width="0" height="0">
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_apply"
            x1="9.8692"
            x2="9.24276"
            y1="4.11973"
            y2="15.3983"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

type JobCardProps = {
  title: string;
  description: string;
  tags: string[];
};

function JobCard({ title, description, tags }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 w-full hover:shadow-lg transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex flex-col gap-2.5 flex-1">
          <h3 className=" font-medium  text-lg sm:text-xl text-black">
            {title}
          </h3>
          <p className=" font-normal   text-sm sm:text-base text-[#777] leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        <div className="lg:ml-4 self-start">
          <ApplyButton />
        </div>
      </div>
    </div>
  );
}

type CategoryFilterProps = {
  categories: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
};

function CategoryFilter({
  categories,
  activeCategory = "View all",
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3.5 w-full">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange?.(category)}
          className="transition-transform hover:scale-105  w-full sm:w-auto"
        >
          <Badge
            text={category}
            variant={category === activeCategory ? "primary" : "secondary"}
          />
        </button>
      ))}
    </div>
  );
}

type LoadMoreButtonProps = {
  onClick?: () => void;
};

function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#07af40] flex gap-2 items-center justify-center px-4 py-2.5 hover:bg-[#06a038] transition-colors rounded-md"
      aria-label="Load more jobs"
    >
      <span className=" font-semibold   text-sm sm:text-base text-white whitespace-nowrap">
        Load more
      </span>
      <ArrowIcon className="size-3.5" strokeColor="white" size={14} />
    </button>
  );
}

type SeeLessButtonProps = {
  onClick?: () => void;
};

function SeeLessButton({ onClick }: SeeLessButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white flex gap-2 items-center justify-center px-4 py-2.5 hover:bg-gray-100 transition-colors rounded-md border border-[#07af40]"
      aria-label="See less jobs"
    >
      <span className=" font-semibold   text-sm sm:text-base text-[#07af40] whitespace-nowrap">
        See less
      </span>
      <ArrowIcon className="size-3.5 rotate-180" strokeColor="#07af40" size={14} />
    </button>
  );
}

export default function CareersSection() {
  const [activeCategory, setActiveCategory] = React.useState("View all");
  const [visibleJobs, setVisibleJobs] = React.useState(5);

  const handleLoadMore = () => {
    setVisibleJobs((prev) => prev + 5);
  };

  const handleSeeLess = () => {
    setVisibleJobs(5);
  };

  const jobsToDisplay = CAREER_JOBS.slice(0, visibleJobs);
  const hasMoreJobs = visibleJobs < CAREER_JOBS.length;
  const canSeeLess = visibleJobs > 5;

  return (
    <section
      className="flex flex-col gap-8 sm:gap-10 overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-28 w-full max-w-[1600px] mx-auto"
      style={{
        backgroundImage:
          "linear-gradient(236.839deg, rgb(0, 188, 239) 6.4454%, rgb(0, 35, 99) 95.133%)",
      }}
      aria-labelledby="careers-heading"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-6 w-full">
        <Badge text="We're Hiring!" variant="outline" width="w-[130px]" />
        <div className="flex flex-col gap-2 sm:gap-3">
          <h1
            id="careers-heading"
            className=" font-semibold   text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] text-[#00ff84] leading-tight"
          >
            Be part of our missions
          </h1>
          <p className=" font-normal   text-base sm:text-lg lg:text-xl text-[#e4e4e4] leading-relaxed w-full">
            We're always looking for people who care about craft, ask smart
            questions, and enjoy solving meaningful problems. If you like
            building things that make sense and actually ship, you'll fit right
            in.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        categories={CAREER_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Job Listings */}
      <div className="flex flex-col gap-4 sm:gap-5 w-full">
        {jobsToDisplay.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            description={job.description}
            tags={job.tags}
          />
        ))}
      </div>

      {/* Action Buttons */}
      {(hasMoreJobs || canSeeLess) && (
        <div className="flex justify-center gap-3 w-full">
          {hasMoreJobs && <LoadMoreButton onClick={handleLoadMore} />}
          {canSeeLess && <SeeLessButton onClick={handleSeeLess} />}
        </div>
      )}
    </section>
  );
}
