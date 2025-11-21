import svgPaths from "../../imports/svg-6sw94kd16o";

interface IconProps {
  color: string;
}

export function CubeScanIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p37330f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p28009480} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g>
              <path d={svgPaths.p204bc700} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M16 23.6934V16.4267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d={svgPaths.p349e9000} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ChartSquareIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p20901f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g>
              <path d={svgPaths.p343c6800} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p12eb6780} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function GraphIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p115a1300} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pcd3db80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function DocumentTextIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.pdae4200} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p1d5624c0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M10.6667 17.3333H16" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M10.6667 22.6667H21.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function UserTagIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p34478800} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g>
              <path d={svgPaths.p201248a0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p30f5bc80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function LinkSquareIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p20901f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g>
              <path d={svgPaths.p1c8af000} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export const benefitsIconMap = {
  cubeScan: CubeScanIcon,
  chartSquare: ChartSquareIcon,
  graph: GraphIcon,
  documentText: DocumentTextIcon,
  userTag: UserTagIcon,
  linkSquare: LinkSquareIcon,
};

export type BenefitsIconType = keyof typeof benefitsIconMap;
