import svgPaths from "../../imports/svg-6sw94kd16o";
import svgPaths2 from "../../imports/svg-qz3jjgq236";
import svgPaths3 from "../../imports/svg-lhtxf25f0z";
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

interface IconProps {
  isHovered: boolean;
}

export function BoxIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawBox1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawBox2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .box-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .box-path-1.animate {
          animation: drawBox1 0.8s ease-in-out infinite;
        }
        .box-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .box-path-2.animate {
          animation: drawBox2 0.8s ease-in-out 0.2s infinite;
        }
        .box-path-3 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .box-path-3.animate {
          animation: drawBox1 0.8s ease-in-out 0.4s infinite;
        }
        .box-path-4 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .box-path-4.animate {
          animation: drawBox1 0.8s ease-in-out 0.6s infinite;
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
              d={svgPaths.p3e82ea40}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M16 28.8133V16.72"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p24e9ab00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p1b2a6c80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-4 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ChartsIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawChart1 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawChart2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawChart3 {
          0% { stroke-dashoffset: 70; }
          100% { stroke-dashoffset: 0; }
        }
        .chart-path-1 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .chart-path-1.animate {
          animation: drawChart1 0.8s ease-in-out infinite;
        }
        .chart-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .chart-path-2.animate {
          animation: drawChart2 0.8s ease-in-out 0.2s infinite;
        }
        .chart-path-3 {
          stroke-dasharray: 70;
          stroke-dashoffset: 0;
        }
        .chart-path-3.animate {
          animation: drawChart3 0.8s ease-in-out 0.4s infinite;
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
              d={svgPaths.p20901f80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p27d1c80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p2eede80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function HierarchyIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawHier1 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHier2 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHier3 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .hier-path-1 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .hier-path-1.animate {
          animation: drawHier1 0.8s ease-in-out infinite;
        }
        .hier-path-2 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .hier-path-2.animate {
          animation: drawHier2 0.8s ease-in-out 0.2s infinite;
        }
        .hier-path-3 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .hier-path-3.animate {
          animation: drawHier3 0.8s ease-in-out 0.4s infinite;
        }
        .hier-path-4 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .hier-path-4.animate {
          animation: drawHier3 0.8s ease-in-out 0.6s infinite;
        }
        .hier-path-5 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .hier-path-5.animate {
          animation: drawHier3 0.8s ease-in-out 0.8s infinite;
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
              d="M6.66667 20V10.6667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p18fdab80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p32306a80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.pde99c00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-4 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p104aa700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-5 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function PresentationChartIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawPresent1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent2 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent3 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent4 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent5 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .present-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .present-path-1.animate {
          animation: drawPresent1 0.8s ease-in-out infinite;
        }
        .present-path-2 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .present-path-2.animate {
          animation: drawPresent2 0.8s ease-in-out 0.2s infinite;
        }
        .present-path-3 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .present-path-3.animate {
          animation: drawPresent3 0.8s ease-in-out 0.4s infinite;
        }
        .present-path-4 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .present-path-4.animate {
          animation: drawPresent4 0.8s ease-in-out 0.6s infinite;
        }
        .present-path-5 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .present-path-5.animate {
          animation: drawPresent5 0.8s ease-in-out 0.8s infinite;
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
              d={svgPaths.pea5b4f0}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M2.66667 2.66667H29.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p26e393c0}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M21.3333 29.3333L16 26.6667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-4 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p24f546c0}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-5 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function PeopleIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawPeople1 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPeople2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .people-path-1 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .people-path-1.animate {
          animation: drawPeople1 0.8s ease-in-out infinite;
        }
        .people-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .people-path-2.animate {
          animation: drawPeople2 0.8s ease-in-out 0.15s infinite;
        }
        .people-path-3 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .people-path-3.animate {
          animation: drawPeople1 0.8s ease-in-out 0.3s infinite;
        }
        .people-path-4 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .people-path-4.animate {
          animation: drawPeople2 0.8s ease-in-out 0.45s infinite;
        }
        .people-path-5 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .people-path-5.animate {
          animation: drawPeople1 0.8s ease-in-out 0.6s infinite;
        }
        .people-path-6 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .people-path-6.animate {
          animation: drawPeople2 0.8s ease-in-out 0.75s infinite;
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
              d={svgPaths2.p334b9d00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p3e147b10}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p13fbb800}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p16e49200}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-4 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p18942380}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-5 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p246a400}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-6 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function RulerIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawRuler1 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawRuler2 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .ruler-path-1 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .ruler-path-1.animate {
          animation: drawRuler1 0.8s ease-in-out infinite;
        }
        .ruler-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .ruler-path-2.animate {
          animation: drawRuler2 0.8s ease-in-out 0.3s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]">
          <div className="absolute inset-[-3.75%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 29 29"
            >
              <g>
                <path
                  d={svgPaths2.p2c079100}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`ruler-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths2.p297e7880}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ruler-path-2 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FolderIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawFolder1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawFolder2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .folder-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .folder-path-1.animate {
          animation: drawFolder1 0.8s ease-in-out infinite;
        }
        .folder-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .folder-path-2.animate {
          animation: drawFolder2 0.8s ease-in-out 0.3s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_8.34%_12.5%_8.33%]">
          <div className="absolute inset-[-3.95%_-3.75%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 29 28"
            >
              <g>
                <path
                  d={svgPaths2.p274bf600}
                  stroke="#07AF40"
                  strokeWidth="2"
                  className={`folder-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths2.pbdaae00}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`folder-path-2 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SearchIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawSearch1 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawSearch2 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .search-path-1 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .search-path-1.animate {
          animation: drawSearch1 0.8s ease-in-out infinite;
        }
        .search-path-2 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .search-path-2.animate {
          animation: drawSearch2 0.8s ease-in-out 0.4s infinite;
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
              d={svgPaths2.pf43b200}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`search-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p384d7300}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`search-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ReceiptIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawReceipt1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawReceipt2 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawReceipt3 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .receipt-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .receipt-path-1.animate {
          animation: drawReceipt1 0.8s ease-in-out infinite;
        }
        .receipt-path-2 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .receipt-path-2.animate {
          animation: drawReceipt2 0.8s ease-in-out 0.3s infinite;
        }
        .receipt-path-3 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .receipt-path-3.animate {
          animation: drawReceipt3 0.8s ease-in-out 0.5s infinite;
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
              d={svgPaths3.p3d902680}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`receipt-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M10.6667 9.33333H21.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`receipt-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M12 14.6667H20"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`receipt-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function SettingIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawSetting1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawSetting2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .setting-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .setting-path-1.animate {
          animation: drawSetting1 0.8s ease-in-out infinite;
        }
        .setting-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .setting-path-2.animate {
          animation: drawSetting2 0.8s ease-in-out 0.3s infinite;
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
              d={svgPaths3.p3ab7000}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`setting-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths3.p34392700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`setting-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function CalendarIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawCalendar1 {
          0% { stroke-dashoffset: 10; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawCalendar2 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawCalendar3 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawCalendar4 {
          0% { stroke-dashoffset: 5; }
          100% { stroke-dashoffset: 0; }
        }
        .calendar-path-1 {
          stroke-dasharray: 10;
          stroke-dashoffset: 0;
        }
        .calendar-path-1.animate {
          animation: drawCalendar1 0.8s ease-in-out infinite;
        }
        .calendar-path-2 {
          stroke-dasharray: 10;
          stroke-dashoffset: 0;
        }
        .calendar-path-2.animate {
          animation: drawCalendar1 0.8s ease-in-out 0.1s infinite;
        }
        .calendar-path-3 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .calendar-path-3.animate {
          animation: drawCalendar2 0.8s ease-in-out 0.2s infinite;
        }
        .calendar-path-4 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .calendar-path-4.animate {
          animation: drawCalendar3 0.8s ease-in-out 0.4s infinite;
        }
        .calendar-path-5 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .calendar-path-5.animate {
          animation: drawCalendar4 0.8s ease-in-out 0.6s infinite;
        }
        .calendar-path-6 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .calendar-path-6.animate {
          animation: drawCalendar4 0.8s ease-in-out 0.7s infinite;
        }
        .calendar-path-7 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .calendar-path-7.animate {
          animation: drawCalendar4 0.8s ease-in-out 0.8s infinite;
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
              d="M10.6667 2.66667V6.66667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M21.3333 2.66667V6.66667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M4.66667 12.12H27.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths3.p3fd72b00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-4 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
            <path
              d="M15.994 18.2667H16.006"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`calendar-path-5 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M11.0591 18.2667H11.0711"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`calendar-path-6 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M11.0591 22.2667H11.0711"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`calendar-path-7 ${isHovered ? "animate" : ""}`}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function DashboardIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawDashboard1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard2 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard3 {
          0% { stroke-dashoffset: 5; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard4 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard5 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .dashboard-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .dashboard-path-1.animate {
          animation: drawDashboard1 0.8s ease-in-out infinite;
        }
        .dashboard-path-2 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .dashboard-path-2.animate {
          animation: drawDashboard2 0.8s ease-in-out 0.2s infinite;
        }
        .dashboard-path-3 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .dashboard-path-3.animate {
          animation: drawDashboard3 0.8s ease-in-out 0.3s infinite;
        }
        .dashboard-path-4 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .dashboard-path-4.animate {
          animation: drawDashboard3 0.8s ease-in-out 0.4s infinite;
        }
        .dashboard-path-5 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .dashboard-path-5.animate {
          animation: drawDashboard4 0.8s ease-in-out 0.5s infinite;
        }
        .dashboard-path-6 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .dashboard-path-6.animate {
          animation: drawDashboard5 0.8s ease-in-out 0.7s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[10.42%_10.41%_10.42%_10.42%]">
          <div className="absolute inset-[-3.95%_-3.94%_-3.95%_-3.95%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 28 28"
            >
              <g>
                <path
                  d={svgPaths3.pbf17200}
                  stroke="#07AF40"
                  strokeWidth="2"
                  className={`dashboard-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d="M1 9.66667H26.3333"
                  stroke="#07AF40"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-2 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d="M6.99974 5.66667H7.01172"
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-3 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d="M12.3331 5.66667H12.3451"
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-4 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p22c5c580}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`dashboard-path-5 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p30ca5f80}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-6 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AiIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawAi1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawAi2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawAi3 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .ai-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .ai-path-1.animate {
          animation: drawAi1 0.8s ease-in-out infinite;
        }
        .ai-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .ai-path-2.animate {
          animation: drawAi1 0.8s ease-in-out 0.15s infinite;
        }
        .ai-path-3 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .ai-path-3.animate {
          animation: drawAi2 0.8s ease-in-out 0.3s infinite;
        }
        .ai-path-4 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .ai-path-4.animate {
          animation: drawAi2 0.8s ease-in-out 0.45s infinite;
        }
        .ai-path-5 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .ai-path-5.animate {
          animation: drawAi3 0.8s ease-in-out 0.6s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 26 29"
            >
              <g>
                <path
                  d={svgPaths3.p21faf780}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`ai-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p31521100}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`ai-path-2 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p2bf80a00}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ai-path-3 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p3ef800}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ai-path-4 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p3affee80}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ai-path-5 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
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
  hierarchy: HierarchyIcon,
  presentationChart: PresentationChartIcon,
  people: PeopleIcon,
  folder: FolderIcon,
  ruler: RulerIcon,
  search: SearchIcon,

  receipt: ReceiptIcon,
  setting: SettingIcon,
  calendar: CalendarIcon,
  dashboard: DashboardIcon,
  ai: AiIcon,
};

export type IconType = keyof typeof iconMap;
