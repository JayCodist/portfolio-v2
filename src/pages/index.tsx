import useDarkMode from "use-dark-mode";
import Portfolio from "../components/portfolio/Portfolio";
import SplashScreen from "../components/splash-screen/SplashScreen";
import {
  allImageAssets,
  maximumWaitTime,
  minimumWaitTime
} from "../utils/constants";

const Index = () => {
  const {} = useDarkMode(false);
  return (
    <main className="content-layout">
      <SplashScreen
        maximumWaitTime={maximumWaitTime}
        minimumWaitTime={minimumWaitTime}
        assets={allImageAssets}
      >
        <Portfolio />
      </SplashScreen>
    </main>
  );
};

export default Index;
