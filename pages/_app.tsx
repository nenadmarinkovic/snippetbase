import type { AppProps } from "next/app";
import { useEffect } from "react";
import { GlobalStyle } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((err) => console.log("Service Worker registration failed: ", err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
