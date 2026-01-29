export const INDUSTRIES_DATA = [
  {
    id: 1,
    title: "Manufacturing",
    description:
      "Digitize operations from shopfloor to leadership using connected assets, role-ready dashboards, and AI-driven decisions.",
    image: "/assets/pages/industries/manufacturing.png",
    useCases: [
      "Real-Time Production Tracking",
      "Tool Life & Calibration",
      "Digital Work Instructions",
      "Maintenance Planning & CMMS Sync",
      "SPC & Quality Traceability",
      "Predictive Maintenance",
    ],
    outcomes: [
      "OEE",
      "Unplanned Downtime",
      "On-Time Delivery",
      "Scrap & Rework",
    ],
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Enable connected care experiences with unified patient data, workflow automation, and compliance-ready systems.",
    image: "/assets/pages/industries/healthcare.png",
    useCases: [
      "Patient Flow Optimization",
      "Medical Asset Tracking",
      "Digital Health Records",
      "Compliance Automation",
      "Remote Monitoring",
    ],
    outcomes: [
      "Care Quality",
      "Operational Efficiency",
      "Patient Satisfaction",
    ],
  },
  {
    id: 3,
    title: "Retail",
    description:
      "Deliver omnichannel retail experiences with real-time inventory visibility and customer insights.",
    image: "/assets/pages/industries/retail.png",
    useCases: [
      "Inventory Optimization",
      "Demand Forecasting",
      "Customer Analytics",
      "POS Integration",
    ],
    outcomes: ["Sales Growth", "Inventory Turnover", "Customer Retention"],
  },
  {
    id: 4,
    title: "Logistics",
    description:
      "Optimize supply chain operations with live tracking, predictive analytics, and intelligent routing.",
    image: "/assets/pages/industries/logistics.png",
    useCases: [
      "Fleet Tracking",
      "Route Optimization",
      "Warehouse Automation",
      "Delivery SLA Monitoring",
    ],
    outcomes: ["Delivery Time", "Fuel Efficiency", "Cost Reduction"],
  },
  {
    id: 5,
    title: "Energy & Utilities",
    description:
      "Monitor and manage distributed energy assets with real-time insights and predictive intelligence.",
    image: "/assets/pages/industries/energy.png",
    useCases: [
      "Asset Monitoring",
      "Predictive Maintenance",
      "Grid Optimization",
      "Energy Forecasting",
    ],
    outcomes: ["Uptime", "Energy Efficiency", "Operational Safety"],
  },
];





import svgPaths from "../../imports/svg-wzyskd72fo";


export const FEATURES = [
  {
    id: 1,
    title: "Condition & Health Monitoring",
    description: "Track the real-time health and performance of assets.",
    icon: (
      <svg viewBox="0 0 18.33 16.5" className="w-[22px] h-[22px]">
        <path d={svgPaths.pbf9d180} fill="url(#grad1)" />
        <defs>
          <linearGradient id="grad1">
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Maintenance Planning & Reliability",
    description: "Schedule preventive maintenance to maximize uptime.",
    icon: (
      <svg viewBox="0 0 12 20" className="w-[22px] h-[22px]">
        <path d={svgPaths.pd040580} fill="url(#grad2)" />
        <defs>
          <linearGradient id="grad2">
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Safety, Compliance & Audit",
    description:
      "Ensure operations meet safety standards and regulatory requirements.",
    icon: (
      <svg viewBox="0 0 22 22" className="w-[22px] h-[22px]">
        <path d={svgPaths.p284f5fb0} fill="url(#grad3)" />
        <defs>
          <linearGradient id="grad3">
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Remote & Virtual Operations",
    description: "Manage operations and monitor assets from anywhere.",
    icon: null,
  },
  {
    id: 5,
    title: "Production & Work Order Tracking",
    description: "Monitor progress and status of production and work orders.",
    icon: null,
  },
  {
    id: 6,
    title: "Energy Oversight & Optimization",
    description: "Analyze and optimize energy consumption across processes.",
    icon: null,
  },
  {
    id: 7,
    title: "Throughput & Bottleneck Analysis",
    description: "Identify process constraints and improve efficiency.",
    icon: null,
  },
  {
    id: 8,
    title: "Reports & Scheduled Insights",
    description: "Generate automated reports and actionable insights.",
    icon: null,
  },
  {
    id: 9,
    title: "Quality SPC & Traceability",
    description: "Maintain and trace quality standards in production.",
    icon: null,
  },
  {
    id: 10,
    title: "Inventory & Supply Chain Insights",
    description: "Optimize inventory levels and supply chain operations.",
    icon: null,
  },
  {
    id: 11,
    title: "Forecasting & What-If Scenarios",
    description: "Simulate scenarios to predict outcomes and plan ahead.",
    icon: null,
  },
  {
    id: 12,
    title: "Integrations & Data Exchange",
    description: "Connect systems and share data across platforms effortlessly.",
    icon: null,
  },
];
