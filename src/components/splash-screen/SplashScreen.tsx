import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { resources } from "../../utils/constants";
import useAssetsReady from "../../utils/hooks/useAssetsReady";
import styles from "./SplashScreen.module.scss";

interface SplashScreenProps {
  /**
   * Image assets to prefetch while showing splash screen
   */
  assets: string[];
  /**
   * Minimum wait time in milliseconds
   */
  minimumWaitTime?: number;
  /**
   * Maximum wait time in milliseconds
   */
  maximumWaitTime?: number;
  children: ReactNode;
}

let minimumWaitTimerRef: ReturnType<typeof setTimeout>;
let maximumWaitTimerRef: ReturnType<typeof setTimeout>;

/**
 * Shows a splash screen while the provided image assets are loaded.
 * Splash screen only shows within the specified `minimumWaitTime` and a `maximumWaitTime`
 * @param children The `ReactNode` to display after showing splash screen
 */
const SplashScreen: FunctionComponent<SplashScreenProps> = ({
  children,
  minimumWaitTime = 1000,
  maximumWaitTime = 4000,
  assets
}) => {
  const assetsLoaded = useAssetsReady(assets);
  const [minimumWaitCheck, setMinimumWaitCheck] = useState(false);
  const [maximumWaitCheck, setMaximumWaitCheck] = useState(false);

  useEffect(() => {
    clearTimeout(minimumWaitTimerRef);
    clearTimeout(maximumWaitTimerRef);

    minimumWaitTimerRef = setTimeout(
      () => setMinimumWaitCheck(true),
      minimumWaitTime
    );
    maximumWaitTimerRef = setTimeout(
      () => setMaximumWaitCheck(true),
      maximumWaitTime
    );
  }, [maximumWaitTime, minimumWaitTime]);

  const shouldShowMainPage =
    maximumWaitCheck || (minimumWaitCheck && assetsLoaded);

  return shouldShowMainPage ? (
    <>{children}</>
  ) : (
    <section className={styles.wrapper}>
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "50%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 0,
          repeatDelay: 0
        }}
      />
      <img
        src={resources.icons.LOGO}
        alt="johnson ubaezuonu logo"
        className={styles.logo}
      />
      <div className={styles["loading-wrapper"]}>
        <img
          alt="loading"
          className={styles.loading}
          src={resources.icons.LOADING_ROSARY}
        />
        <strong>Loading assets . . .</strong>
      </div>
    </section>
  );
};

export default SplashScreen;
