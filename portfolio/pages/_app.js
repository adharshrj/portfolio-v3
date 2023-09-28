import "../styles/globals.css";
import NavBar from "./components/NavBar";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import GlobalProvider from "../context/AppContext";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        setTimeout(() => {
          loader.remove();
        }, "2000");
      }
    }
  }, []);

  return (
    <GlobalProvider>
      <NavBar />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
