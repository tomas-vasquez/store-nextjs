import Document, { Html, Head, Main, NextScript } from "next/document";
import { siteMetadata } from "../../site.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Agrega aquí tus etiquetas meta, enlaces a hojas de estilo, scripts, etc.
          <title>{siteMetadata.title}</title> */}
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
