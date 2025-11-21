export const heroContent = {
  title: "Production Digitization with",
  highlight: "EAGLE",
  description:
    "Digitize your production floor with live data collection, real-time OEE tracking, and closed-loop feedback powered by Tecosoft's EAGLE Edge Gateway.",
  video: "/assets/video/production-digitization.mp4",
  image:
    "/assets/pages/solutions/production-digitization/722868975ad87bdad1f880aefbc37c33e60f610d.png",
  imageAlt: "EAGLE Edge Gateway Device",
};

export const featuresContent = {
  sectionTitle: "Your All-in-One Intelligence Platform",
  sectionDescription:
    "Tecosoft Analytics unifies data across manufacturing, energy, logistics, and healthcare, turning complex information into real-time insights that power smarter decisions and greater operational efficiency.",
  
    backgroundImage:
    "./assets/pages/solutions/production-digitization/3a380a8126032af34701f98b609fdbd9e932781c.png",
  features: [
    {
      id: "collect-connect",
      icon: "settings",
      title: "Collect. Connect. Optimize.",
      description:
        "Seamlessly capture live production data and connect machines to the cloud for real-time analytics and optimization.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "closed-loop",
      icon: "refresh",
      title: "Closed Loop Production System.",
      description:
        "EAGLE ensures accountability by halting operations until downtime or alarm reasons are recorded — ensuring accurate data tracking.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "pinpoint-cause",
      icon: "target",
      title: "Pinpoint the Cause, Fix Faster.",
      description:
        "Identify downtime sources instantly with guided operator input, real-time validation, and continuous live system feedback.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "shift-efficiency",
      icon: "chart",
      title: "Optimize Shift Efficiency.",
      description:
        "Visualize productivity across shifts and quickly spot improvement areas to boost output, strengthen flow, and maintain consistency.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "predict-prevent",
      icon: "message",
      title: "Predict. Prevent. Perform.",
      description:
        "Predict performance trends and plan maintenance in advance with smart insight dashboards that keep your operations running smoothly.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "machine-integration",
      icon: "archive",
      title: "Seamless Machine Integration.",
      description:
        "Effortlessly integrate with PLCs, sensors, and devices to enable scalable, plug-and-play production monitoring.",
      bgColor: "rgba(204,241,255,0.5)",
    },
  ],
};

export const statsContent = {
  sectionTitle: "Performance at a Glance",
  sectionDescription:
    "Get a quick view of your factory's most important benchmarks - overall equipment efficiency, production yield, downtime savings, and throughput.",
  backgroundImage: "/assets/pages/solutions/production-digitization/stats-bg.svg",
  bottomGradient: "/assets/platform/analytics/5b09b3ed17e7e67dbdf8354dab5988545de2374f.png",
  stats: [
    {
      id: "average-oee",
      value: "78%",
      title: "Average OEE",
      description: "Measured across pilot lines",
    },
    {
      id: "yield-apq",
      value: "92%",
      title: "Yield (APQ)",
      description: "Availability · Productivity · Quality",
    },
    {
      id: "downtime-saved",
      value: "3.2 hrs",
      title: "Downtime Saved",
      description: "Per shift (estimated)",
    },
    {
      id: "pcs-throughput",
      value: "1,240",
      title: "Pcs Throughput",
      description: "Pieces / shift (avg)",
    },
  ],
};

export const benefitsContent = {
  sectionTitle: "Benefits of Production Digitization",
  sectionDescription:
    "Get a quick view of your factory's most important benchmarks - overall equipment efficiency, production yield, downtime savings, and throughput.",
  benefits: [
    {
      id: "production-insights",
      icon: "cubeScan",
      title: "Turn-by-Turn Production Insights",
      bgColor: "#e1f5e8",
      iconColor: "#07AF40",
    },
    {
      id: "reduced-downtime",
      icon: "chartSquare",
      title: "Reduced Downtime & Increased Availability",
      bgColor: "#d2f1f8",
      iconColor: "#00B8DB",
    },
    {
      id: "realtime-insights",
      icon: "graph",
      title: "Real-Time Performance Insights",
      bgColor: "#fceed6",
      iconColor: "#EF9300",
    },
    {
      id: "digital-shopfloor",
      icon: "documentText",
      title: "Digital & Paperless Shopfloor",
      bgColor: "#f7d8d8",
      iconColor: "#CB0A0D",
    },
    {
      id: "traceability",
      icon: "userTag",
      title: "Traceability & Operator Accountability",
      bgColor: "#d8d9f7",
      iconColor: "#0800EF",
    },
    {
      id: "auditability",
      icon: "linkSquare",
      title: "Rapid Traceability & Auditability",
      bgColor: "#fbe3d2",
      iconColor: "#EF4E00",
    },
  ],
};

export const workflowContent = {
  title: "EAGLE Workflow",
  highlightText: "EAGLE",
  description:
    "Follow our streamlined production workflow from setup to analysis. Each step ensures accountability, traceability, and real-time performance monitoring.",
  backgroundColor: "linear-gradient(90deg, rgb(7, 80, 142) 0%, rgb(7, 80, 142) 100%)",
  steps: [
    {
      id: "setup",
      number: "1",
      title: "Setup & Configuration",
      description:
        "Map tool setup, configure machine time and output expectations, or leverage pre-built configurations from the cloud.",
    },
    {
      id: "context",
      number: "2",
      title: "Define Production Context",
      description:
        "Select job, machine shift, and operator info to contextualize production with traceability and accountability.",
    },
    {
      id: "alarms",
      number: "3",
      title: "Record Tool Alarms",
      description:
        "Document tool faults or alarms with reasons, classify as Maintenance or Operational issue, and notify the relevant party.",
    },
    {
      id: "downtime",
      number: "4",
      title: "Track Tool Downtime Reasons",
      description:
        "Whenever the tool stops, operators record standardized downtime reasons (e.g. Setup, Unplanned Stop, Break), and production halts until recorded.",
    },
    {
      id: "calculate",
      number: "5",
      title: "Calculate Machine Time",
      description:
        "Compute machine run time, downtime, planned idle, and stop durations automatically based on tool activity and operator inputs.",
    },
    {
      id: "analyze",
      number: "6",
      title: "Inspect & Analyze OEE",
      description:
        "Perform part inspections, validate OK/NC counts, and compute APQ & OEE automatically to measure real-time performance.",
    },
  ],
};
