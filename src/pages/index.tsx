import { useEffect, useState } from "react";
import SplashScreen from "../components/splash-screen/SplashScreen";
import { allImageAssets, minimumWaitTime } from "../utils/constants";
import useAssetsReady from "../utils/hooks/useAssetsReady";

const Index = () => {
  const assetsLoaded = useAssetsReady(allImageAssets);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => setWaiting(false), minimumWaitTime);
  }, []);

  return (
    <main className="content-layout">
      {!waiting && assetsLoaded ? (
        <section>Loaded!!</section>
      ) : (
        <SplashScreen />
      )}
    </main>
  );
};

export default Index;
