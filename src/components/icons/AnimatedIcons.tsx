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
          animation: drawStroke 1.2s ease-in-out infinite;
        }
        .settings-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .settings-path-2.animate {
          animation: drawStroke 1.2s ease-in-out 0.2s infinite;
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
          animation: drawStrokeRefresh1 1.2s ease-in-out infinite;
        }
        .refresh-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .refresh-path-2.animate {
          animation: drawStrokeRefresh2 1.2s ease-in-out 0.2s infinite;
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
          animation: drawStrokeTarget1 1.2s ease-in-out infinite;
        }
        .target-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .target-path-2.animate {
          animation: drawStrokeTarget2 1.2s ease-in-out 0.2s infinite;
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
          animation: drawStrokeChart1 1.2s ease-in-out infinite;
        }
        .chart-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .chart-path-2.animate {
          animation: drawStrokeChart2 1.2s ease-in-out 0.15s infinite;
        }
        .chart-path-3.animate {
          animation: drawStrokeChart2 1.2s ease-in-out 0.25s infinite;
        }
        .chart-path-4.animate {
          animation: drawStrokeChart2 1.2s ease-in-out 0.35s infinite;
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
        @keyframes drawStrokeTrendUp1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeTrendUp2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeTrendUp3 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        .trend-up-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .trend-up-path-1.animate {
          animation: drawStrokeTrendUp1 1.2s ease-in-out infinite;
        }
        .trend-up-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .trend-up-path-2.animate {
          animation: drawStrokeTrendUp2 1.2s ease-in-out 0.2s infinite;
        }
        .trend-up-path-3 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .trend-up-path-3.animate {
          animation: drawStrokeTrendUp3 1.2s ease-in-out 0.35s infinite;
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
              d="M22 12.6666L16.4 18.2666L14.2667 15.0666L10 19.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`trend-up-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M19.332 12.6666H21.9987V15.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`trend-up-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M12.0013 29.3333H20.0013C26.668 29.3333 29.3346 26.6666 29.3346 20V12C29.3346 5.33329 26.668 2.66663 20.0013 2.66663H12.0013C5.33464 2.66663 2.66797 5.33329 2.66797 12V20C2.66797 26.6666 5.33464 29.3333 12.0013 29.3333Z"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`trend-up-path-3 ${isHovered ? "animate" : ""}`}
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
        @keyframes drawStrokeLink1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeLink2 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .link-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .link-path-1.animate {
          animation: drawStrokeLink1 1s ease-in-out infinite;
        }
        .link-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .link-path-2.animate {
          animation: drawStrokeLink2 1s ease-in-out 0.2s infinite;
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
              d="M13.332 17.6387C13.5209 17.9479 13.7449 18.2406 14.0042 18.5105C15.6143 20.1861 18.0683 20.448 19.9421 19.2963C20.2893 19.0829 20.6166 18.8209 20.9149 18.5105L25.2341 14.0153C27.1424 12.0292 27.1424 8.80905 25.2341 6.82295C23.3258 4.83685 20.2318 4.83685 18.3234 6.82295L17.3721 7.81308"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeWidth="2"
              className={`link-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M14.6258 24.1866L13.6741 25.1771C11.7657 27.1632 8.67165 27.1632 6.7633 25.1771C4.85494 23.191 4.85494 19.9709 6.7633 17.9848L11.0825 13.4896C12.9909 11.5035 16.0849 11.5035 17.9933 13.4896C18.2525 13.7594 18.4766 14.052 18.6654 14.3611"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeWidth="2"
              className={`link-path-2 ${isHovered ? "animate" : ""}`}
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
