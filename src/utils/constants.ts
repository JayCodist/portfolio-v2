export const resources = {
  icons: {
    LOGO: "/icons/logo.svg",
    LINKEDIN: "/icons/linkedin-icon.svg",
    LOADING_ROSARY: "/icons/loading-icon-rosary.svg",
    LOADING_TAIL: "/icons/loading-icon-tail.svg",
    LOADING_TYPING: "/icons/loading-icon-typing.svg",
    STACK_OVERFLOW: "/icons/stack-overflow-icon.svg",
    TWITTER: "/icons/twitter-icon.svg"
  },
  images: {
    HERO_BACKGROUND: "/images/hero-background.svg"
  }
};

export const allImageAssets = [
  ...Object.values(resources.icons),
  ...Object.values(resources.images)
];

/**
 * Minimum time (in milliseconds) for splash screen to show, even if assets have been loaded
 */
export const minimumWaitTime = 3000000;

/**
 * Maximum time (in milliseconds) for splash screen to show, even if all assets have not been loaded
 */
export const maximumWaitTime = 6000000;
