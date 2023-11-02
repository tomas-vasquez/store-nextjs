import Banner from "../components/Banner";
import Products from "../components/Products";

import { getAllProducts } from "../utils/products";

export default function Home({ products }) {
  return (
    <>
      <Banner />
      <Products products={products} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: await getAllProducts(),
    },
  };
}
