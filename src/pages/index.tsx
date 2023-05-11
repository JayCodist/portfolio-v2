import SplashScreen from "../components/splash-screen/SplashScreen";
import {
  allImageAssets,
  maximumWaitTime,
  minimumWaitTime
} from "../utils/constants";

const Index = () => {
  return (
    <main className="content-layout">
      <SplashScreen
        maximumWaitTime={maximumWaitTime}
        minimumWaitTime={minimumWaitTime}
        assets={allImageAssets}
      >
        <section>Loaded!!</section>
      </SplashScreen>
    </main>
  );
};

export default Index;
