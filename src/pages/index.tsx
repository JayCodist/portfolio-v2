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
    <div>
      <SplashScreen
        maximumWaitTime={maximumWaitTime}
        minimumWaitTime={minimumWaitTime}
        assets={allImageAssets}
      >
        <Portfolio />
      </SplashScreen>
    </div>
  );
};

export default Index;
