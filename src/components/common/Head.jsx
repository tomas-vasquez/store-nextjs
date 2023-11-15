import Head from "next/head";
import React from "react";
import { siteMetadata } from "../../../site.config";

export default function () {
  return (
    <Head>
      <title>{siteMetadata.title}</title>
      <meta name="viewport" con tent="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
