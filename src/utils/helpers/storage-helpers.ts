import { safeWindow } from "../constants";

const AppStorage = {
  save: (key: string, value: unknown) => {
    try {
      safeWindow?.localStorage.setItem(
        key,
        typeof value === "object" ? JSON.stringify(value) : String(value)
      );
    } catch (error) {
      console.error("Unable to save to localStorage: ", error);
    }
  },
  get: (key: string) => {
    const str = safeWindow?.localStorage.getItem(key);
    try {
      const output = str ? JSON.parse(str) : null;
      return output;
    } catch (error) {
      return str;
    }
  },
  remove: (key: string) => {
    safeWindow?.localStorage.removeItem(key);
  },
  clear: () => {
    safeWindow?.localStorage.clear();
  }
};

export default AppStorage;
