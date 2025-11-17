/**
 * Configuration file for assets to preload on initial page load
 * Add or remove asset paths as needed for your application
 */

export const preloadAssets = {
  // Loader assets
  // loader: [
  //   "/assets/loader/loader.gif",
  // ],

  // Logo and branding
  branding: [
    "/assets/tecosoft-logo.svg",
    "/assets/tecosoft-black.svg",
    "/fav.svg",
  ],

  // Footer assets
  footer: [
    "/assets/footer-ct.svg",
    "/assets/footer-dot.png",
    "/assets/footer-stroke.png",
  ],

  // Eagle page - Feature section
  eagleFeatures: [
    "/assets/platform/eagle/gray-blur.png",
    // Animated GIFs
    "/assets/platform/eagle/feature/data-processing.gif",
    "/assets/platform/eagle/feature/one-box.gif",
    "/assets/platform/eagle/feature/kpis.gif",
    "/assets/platform/eagle/feature/flex-edge.gif",
    // Static images
    // "/assets/platform/eagle/feature/data-proccess.png",
    // "/assets/platform/eagle/feature/one-data.png",
    // "/assets/platform/eagle/feature/kpi.png",
    // "/assets/platform/eagle/feature/edge.png",
  ],

  // Analytics page assets
  analytics: [
    // Add analytics page assets here
  ],

  // Add more categories as needed
};

/**
 * Get all assets as a flat array
 */
export function getAllAssets(): string[] {
  return Object.values(preloadAssets).flat();
}

/**
 * Get specific category of assets
 */
export function getAssetsByCategory(...categories: (keyof typeof preloadAssets)[]): string[] {
  return categories.flatMap(category => preloadAssets[category]);
}

/**
 * Get critical assets only (loader, branding, above-the-fold content)
 */
export function getCriticalAssets(): string[] {
  return [
    ...preloadAssets.loader,
    ...preloadAssets.branding,
  ];
}
