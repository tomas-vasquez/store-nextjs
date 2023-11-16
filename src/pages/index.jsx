import Categories from "../components/home/Categories";
import Banner from "../components/home/Banner";
import Header from "../components/common/Header";

import { getAllCategoriesAsync, getAllProducts } from "../utils/fetcher";

export default function Home({ products, categories }) {
  return (
    <>
      <Banner />
      <Header
        title="Navega por categorias:"
        subtitle="Encuentra mas facilmente lo que buscas:"
      />

      <Categories categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: await getAllProducts(),
      categories: await getAllCategoriesAsync(),
    },
  };
}
