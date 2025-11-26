export const heroContent = {
  title: "Tool Life Monitoring ",
  highlight: "Digitization",
  description:
    "A centralized, web-based platform for tool tracking, analytics, and real-time machine integration - empowering the Tool Management Team with total control and visibility.",
  video: "/assets/video/tool-life-monitoring-digitization.mp4",
  image:
    "/assets/pages/solutions/production-digitization/722868975ad87bdad1f880aefbc37c33e60f610d.png",
  imageAlt: "EAGLE Edge Gateway Device",
};

export const featuresContent = {
  sectionTitle: "Smart Features for Smarter Tool Management",
  sectionDescription:
    "Simplify, monitor, and fully automate every aspect of tool operations—from requests and usage tracking to timely replacements—using a digital-first approach that ensures maximum reliability and precision.",

  backgroundImage:
    "linear-gradient(90deg, rgba(0, 184, 219, 0.12) 0%, rgba(0, 184, 219, 0.12) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
  features: [
    {
      id: "tool-requests",
      icon: "box",
      title: "Tool Requests & Returns",
      description:
        "Digitally manage every tool request, issue, and return with full traceability and tool history records.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "tool-stock",
      icon: "chart",
      title: "Tool Stock Management",
      description:
        "Monitor real-time stock levels, manage inward and outward tools, and track tool availability instantly.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "machine-block",
      icon: "hierarchy",
      title: "Machine Block Integration",
      description:
        "Automatically restrict machines from operation if an expired tool is in use, ensuring production safety.",
      bgColor: "rgba(204,241,255,0.5)",
      flipIcon: true,
    },
    {
      id: "analytics",
      icon: "presentationChart",
      title: "Analytics & Reports",
      description:
        "Access detailed insights such as tool trends, cost-per component & damage causes in a one dashboard.",
      bgColor: "rgba(204,241,255,0.5)",
    },
  ],
};

export const whyDigitizeContent = {
  sectionTitle: "Why Digitize Tool Life Monitoring?",
  sectionDescription:
    "Turn your manual tool management into a predictive and data-driven system that minimizes waste, boosts uptime, and increases operational reliability.",
  image:
    "/assets/pages/solutions/tool-life-monitoring-digitization/why-us-tools.png",
  imageAlt: "Digital inspection on tablet device",
  benefits: [
    {
      id: "reliable-data",
      icon: "/assets/pages/solutions/tool-life-monitoring-digitization/tabler.svg",
      title: "Extended Tool Life",
      description:
        "Get smart alerts to track tool performance and predict lifespan.",
      bgColor: "rgba(225, 245, 232, 1)",
    },
    {
      id: "reduced-downtime",
      icon: "/assets/pages/solutions/tool-life-monitoring-digitization/clock.svg",
      title: "Reduced Downtime",
      description:
        "Use real-time monitoring and machine hold to reduce downtime.",
      bgColor: "rgba(214, 244, 252, 1)",
    },
    {
      id: "cost-optimization",
      icon: "/assets/pages/solutions/tool-life-monitoring-digitization/dollar-square.svg",
      title: "Cost Optimization",
      description:
        "Cut costs with precise CPC reports and smart stock management.",
      bgColor: "rgba(246, 223, 215, 1)",
    },
    {
      id: "informed-decisions",
      icon: "/assets/pages/solutions/tool-life-monitoring-digitization/hierarchy-3.svg",
      title: "Informed Decisions",
      description:
        "Get actionable insights into tool performance, costs, and replacement.",
      bgColor: "rgba(252, 238, 214, 1)",
    },
    {
      id: "proactive-maintenance",
      icon: "/assets/pages/solutions/tool-life-monitoring-digitization/ai-brain.svg",
      title: "Proactive Maintenance",
      description:
        "Schedule tool changes with smart analytics to prevent failures.",
      bgColor: "rgba(247, 216, 216, 1)",
    },
    {
      id: "quality-precision",
      icon: "/assets/pages/solutions/tool-life-monitoring-digitization/target.svg",
      title: "Quality Precision",
      description:
        "Ensure consistent quality and precision with automated tool life tracking.",
      bgColor: "rgba(215, 214, 252, 1)",
    },
  ],
};

export const workflowContent = {
  steps: [
    {
      id: 0,
      title: "Manage Tool Master Data",
      description:
        "Define tool attributes like Tool Name, Make, and Life within the centralized monitoring system.",
      iconPath:
        "/assets/pages/solutions/tool-life-monitoring-digitization/workflow/note.svg",
    },
    {
      id: 1,
      title: "EAGLE Synchronization",
      description:
        "EAGLE and the Tool Life module work together via a central server, ensuring synchronized and updated data.",
      iconPath:
        "/assets/pages/solutions/tool-life-monitoring-digitization/workflow/sync.svg",
    },
    {
      id: 2,
      title: "Operator Tool Handling",
      description:
        "Operators can request, mount, or unmount tools through the EAGLE interface with real-time tool validation.",
      iconPath:
        "/assets/pages/solutions/tool-life-monitoring-digitization/workflow/toolbox.svg",
    },
    {
      id: 3,
      title: "Tool Request Workflow",
      description:
        "Requests from operators are processed by the Tool Room, where tools are issued and tracked using barcodes or QR codes. ",
      iconPath:
        "/assets/pages/solutions/tool-life-monitoring-digitization/workflow/tool-fill.svg",
    },
    {
      id: 4,
      title: "Continuous Tracking & Alerts",
      description:
        "Tool usage is continuously tracked, with multi-level alerts triggered as tool life decreases.",
      iconPath:
        "/assets/pages/solutions/tool-life-monitoring-digitization/workflow/alert.svg",
    },
    {
      id: 5,
      title: "Closed-loop Gauge Feedback",
      description:
        "When the tool expires, EAGLE automatically holds machine operations until the tool is replaced.",
      iconPath:
        "/assets/pages/solutions/tool-life-monitoring-digitization/workflow/refresh-2.svg",
    },
    {
      id: 6,
      title: "Analytics & Reports ",
      description:
        "Generate detailed analytics, CPC insights, and downloadable tool reports for better management decisions.",
      iconPath:
        "/assets/pages/solutions/tool-life-monitoring-digitization/workfolw/presentation-chart.svg",
    },
  ],
};
