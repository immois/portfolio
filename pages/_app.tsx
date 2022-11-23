import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import BaseLayout from "../layouts/base";

const calibre = localFont({
  src: "../assets/fonts/Calibre/Calibre-Regular.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <style jsx global>{`
        html {
          font-family: ${calibre.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
