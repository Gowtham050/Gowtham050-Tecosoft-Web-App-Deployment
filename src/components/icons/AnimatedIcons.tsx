import svgPaths from "../../imports/svg-6sw94kd16o";

interface IconProps {
  isHovered: boolean;
}

export function SettingsIcon({ isHovered }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStroke {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .settings-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .settings-path-1.animate {
          animation: drawStroke 1.5s ease-in-out infinite;
        }
        .settings-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .settings-path-2.animate {
          animation: drawStroke 1.5s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="setting-2">
            <path
              d={svgPaths.p34392700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`settings-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.pad9dd00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`settings-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function RefreshIcon({ isHovered }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeRefresh1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeRefresh2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .refresh-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .refresh-path-1.animate {
          animation: drawStrokeRefresh1 1.5s ease-in-out infinite;
        }
        .refresh-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .refresh-path-2.animate {
          animation: drawStrokeRefresh2 1.5s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="refresh-square-2">
            <path
              d={svgPaths.p20901f80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`refresh-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p3cd4a700}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`refresh-path-2 ${isHovered ? "animate" : ""}`}
              />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function TargetIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeTarget1 {
          0% { stroke-dashoffset: 90; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeTarget2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .target-path-1 {
          stroke-dasharray: 90;
          stroke-dashoffset: 0;
        }
        .target-path-1.animate {
          animation: drawStrokeTarget1 1.5s ease-in-out infinite;
        }
        .target-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .target-path-2.animate {
          animation: drawStrokeTarget2 1.5s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-3.75%_-3.74%_-3.75%_-3.75%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 29 29"
          >
            <g>
              <path
                d={svgPaths.p3da63c00}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeWidth="2"
                className={`target-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d={svgPaths.p334d6880}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeWidth="2"
                className={`target-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path d={svgPaths.pebe53b0} fill="#07AF40" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ChartIcon({ isHovered }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeChart1 {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeChart2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .chart-path-1 {
          stroke-dasharray: 24;
          stroke-dashoffset: 0;
        }
        .chart-path-1.animate {
          animation: drawStrokeChart1 1.5s ease-in-out infinite;
        }
        .chart-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .chart-path-2.animate {
          animation: drawStrokeChart2 1.5s ease-in-out 0.15s infinite;
        }
        .chart-path-3.animate {
          animation: drawStrokeChart2 1.5s ease-in-out 0.25s infinite;
        }
        .chart-path-4.animate {
          animation: drawStrokeChart2 1.5s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d="M4 29.3333H28"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p1445600}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path
                d={svgPaths.pf9ac4f0}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 chart-path-3 ${
                  isHovered ? "animate" : ""
                }`}
              />
              <path
                d={svgPaths.p15994780}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 chart-path-4 ${
                  isHovered ? "animate" : ""
                }`}
              />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function MessageIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeMessage1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeMessage2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeMessage3 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        .message-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .message-path-1.animate {
          animation: drawStrokeMessage1 1.5s ease-in-out infinite;
        }
        .message-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .message-path-2.animate {
          animation: drawStrokeMessage2 1.5s ease-in-out 0.2s infinite;
        }
        .message-path-3 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .message-path-3.animate {
          animation: drawStrokeMessage3 1.5s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p1aac8b00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`message-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p140c4870}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`message-path-2 ${isHovered ? "animate" : ""}`}
              />
            </g>
            <path
              d={svgPaths.p204bc700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`message-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ArchiveIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeArchive1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeArchive2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeArchive3 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .archive-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .archive-path-1.animate {
          animation: drawStrokeArchive1 1.5s ease-in-out infinite;
        }
        .archive-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .archive-path-2.animate {
          animation: drawStrokeArchive2 1.5s ease-in-out 0.2s infinite;
        }
        .archive-path-3 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .archive-path-3.animate {
          animation: drawStrokeArchive3 1.5s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p37330f80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`archive-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p28009480}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`archive-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p349e9000}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`archive-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export const iconMap = {
  settings: SettingsIcon,
  refresh: RefreshIcon,
  target: TargetIcon,
  chart: ChartIcon,
  message: MessageIcon,
  archive: ArchiveIcon,
};

export type IconType = keyof typeof iconMap;
