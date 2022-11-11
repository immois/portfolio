import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const calibre = localFont({
  src: "../assets/fonts/Calibre/Calibre-Regular.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${calibre.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
