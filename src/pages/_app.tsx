import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import LayoutContext from "../utils/context/LayoutContext";
import { useEffect, useMemo, useState } from "react";
import AppStorage from "../utils/helpers/storage-helpers";
import { safeWindow } from "../utils/constants";

const App = (props: AppProps) => {
  const [isDark, setIsDark] = useState(false);

  const { Component, pageProps } = props;

  useEffect(() => {
    const savedSetting = AppStorage.get("isDark");
    const currentUserSetting =
      typeof savedSetting === "boolean"
        ? savedSetting
        : safeWindow?.matchMedia("(prefers-color-scheme: dark)").matches ||
          false;
    setIsDark(currentUserSetting);
  }, []);

  const contextValue = useMemo(() => {
    return {
      isDark,
      setIsDark
    };
  }, [isDark]);

  return (
    <LayoutContext.Provider value={contextValue}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Portfolio page of Johnson Ubaezuonu"
        />
        <meta
          name="keywords"
          content="Johnson Ubaezuonu, Full-stack engineer, Nigerian software engineer, Nigeria tech"
        />
        <meta name="author" content="Johnson Ubaezuonu" />
        <meta name="og:title" content="Johnson Ubaezuonu portfolio" />
        <meta
          name="og:description"
          content="Portfolio page of Johnson Ubaezuonu"
        />
        <meta name="og:url" content="https://johnson-ubaezuonu.web.app" />
        <meta
          property="og:image"
          content="https://johnson-ubaezuonu.web.app/images/johnson.jpg"
        />
        <link rel="icon" type="image/png" href="/icons/logo-full.svg" />
        <title>Portfolio page</title>
      </Head>
      <Component {...pageProps} />
    </LayoutContext.Provider>
  );
};

export default App;
