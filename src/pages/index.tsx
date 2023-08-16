import useDarkMode from "use-dark-mode";
import Portfolio from "../components/portfolio/Portfolio";

const Index = () => {
  const {} = useDarkMode(false);
  return (
    <div className="app-wrapper">
      <Portfolio />
      {/* <SplashScreen
        maximumWaitTime={maximumWaitTime}
        minimumWaitTime={minimumWaitTime}
        assets={allImageAssets}
      >
        
      </SplashScreen> */}
    </div>
  );
};

export default Index;
