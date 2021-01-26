import Head from "next/head";

import Banner from "../components/Banner";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <Banner />
      <Products />
    </>
  );
}
