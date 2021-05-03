import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Html>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </Html>
    );
  }
}

export default MyDocument;
