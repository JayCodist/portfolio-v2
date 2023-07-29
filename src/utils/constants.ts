export const resources = {
  icons: {
    LOGO: "/icons/logo.svg",
    LOGO_FULL: "/icons/logo-full.svg",
    LINKEDIN: "/icons/linkedin-icon.svg",
    GITHUB: "/icons/github-icon.svg",
    LOADING_ROSARY: "/icons/loading-icon-rosary.svg",
    LOADING_TAIL: "/icons/loading-icon-tail.svg",
    LOADING_TYPING: "/icons/loading-icon-typing.svg",
    STACK_OVERFLOW: "/icons/stack-overflow-icon.svg",
    TWITTER: "/icons/twitter-icon.svg",
    DOWNLOAD: "/icons/download-icon.svg"
  },
  images: {
    HERO_BACKGROUND_LIGHT: "/images/hero-bg-light.svg",
    HERO_BACKGROUND_DARK: "/images/hero-bg-dark.svg",
    JOHNSON: "/images/johnson.jpg"
  }
};

export const allImageAssets = [
  ...Object.values(resources.icons),
  ...Object.values(resources.images)
];

/**
 * Minimum time (in milliseconds) for splash screen to show, even if assets have been loaded
 */
export const minimumWaitTime = 3000;

/**
 * Maximum time (in milliseconds) for splash screen to show, even if all assets have not been loaded
 */
export const maximumWaitTime = 6000;

export const email = "jaycodist@gmail.com";
