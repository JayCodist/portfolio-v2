import { useEffect, useState } from "react";
import AppStorage from "../helpers/storage-helpers";

const safeWindow = typeof window !== "undefined" ? window : null;

const savedSetting = AppStorage.get("isDark");

const currentUserSetting =
  typeof savedSetting === "boolean"
    ? savedSetting
    : window?.matchMedia("(prefers-color-scheme: dark)").matches;

const useDarkMode: (params?: {
  initialState?: boolean;
}) => { isDark: boolean; setIsDark: (isDark: boolean) => void } = params => {
  const [isDark, setIsDark] = useState(currentUserSetting);

  const { initialState } = params || {};

  useEffect(() => {
    if (typeof initialState === "boolean") {
      setIsDark(initialState);
    }
  }, [initialState]);

  useEffect(() => {
    safeWindow?.localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return { isDark, setIsDark };
};

export default useDarkMode;
