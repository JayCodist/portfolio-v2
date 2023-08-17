import Portfolio from "../components/portfolio/Portfolio";
import { useContext } from "react";
import LayoutContext from "../utils/context/LayoutContext";

const Index = () => {
  const { isDark } = useContext(LayoutContext);
  return (
    <section
      className={["app-wrapper", isDark ? "dark-mode" : "light-mode"].join(" ")}
      suppressHydrationWarning
    >
      <Portfolio />
    </section>
  );
};

export default Index;
