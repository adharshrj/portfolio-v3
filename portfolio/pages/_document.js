import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="globalLoader">
          <img src="/assets/loader.gif" alt="" height="60" width="90" />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
