import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="description" content="Codebase for developers and designers." />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
