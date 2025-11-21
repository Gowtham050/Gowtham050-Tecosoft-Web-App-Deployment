// Footer card configuration based on route paths
export const footerCardConfig = {
  "/": {
    title: "Next-Gen Industry is Here",
    highlightText: "Are You Ready to Lead?",
    buttonText: "Talk to an Expert",
    buttonHref: "#demo",
    description: "",
  },
  "/eagle": {
    title: "Explore Solutions from ",
    highlightText: "EAGLE",
    buttonText: "Explore Solutions",
    buttonHref: "#contact",
    description:
      "Using EAGLE, you can build comprehensive Connected Factory solutions — from Production and Quality to Tool-life and Maintenance.",
  },
  "/analytics": {
    title: "Ready to explore ",
    highlightText: "Tecosoft Analytics?",
    buttonText: "Book a Demo",
    buttonHref: "#analytics-demo",
    description:
      "Book a personalized demo and see how our platform can transform your data into decisions.",
  },
  "/solutions/": {
    title: "Ready to modernize your ",
    highlightText: "factory?",
    buttonText: "Request a Pilot",
    buttonHref: "#request-pilot",
    description:
      "Experience how our platform connects every process, boosts efficiency, and turns data into smarter decisions.",
  },
  // Default fallback configuration
  default: {
    title: "Next-Gen Industry is Here",
    highlightText: "Are You Ready to Lead?",
    buttonText: "Talk to an Expert",
    buttonHref: "#demo",
  },
  "/production-digitization/": {
    title: "Achieve 360° Production Visibility with  ",
    highlightText: "EAGLE",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Empower your manufacturing operations with real-time OEE tracking, closed-loop feedback, and performance-driven insights.",
  },
};

// Helper function to get config based on pathname
export const getFooterCardConfig = (pathname) => {
  return footerCardConfig[pathname] || footerCardConfig.default;
};
