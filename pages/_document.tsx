import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
         {/* can be used as portals */}
         <div id="portal"></div>
        <NextScript />
      </body>
    </Html>
  );
}
