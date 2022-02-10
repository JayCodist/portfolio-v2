import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <section>
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
        <meta name="og:url" content="www.johnson-ubaezuonu.com" />
        <meta
          property="og:image"
          content="https://www.johnson-ubaezuonu.com/assets/johnson.jpg"
        />
        <link rel="icon" type="image/png" href="/icons/logo.svg" />
        <title>Portfolio page</title>
      </Head>
      <Component {...pageProps} />
    </section>
  );
};

export default App;
