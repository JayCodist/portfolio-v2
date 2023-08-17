import { createContext } from "react";

interface LayoutContextType {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType>({
  isDark: false,
  setIsDark: () => {}
});

export default LayoutContext;
