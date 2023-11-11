import Categories from "../components/home/Categories";
import Banner from "../components/home/Banner";

import { getAllCategoriesAsync, getAllProducts } from "../utils/fetcher";

export default function Home({ products, categories }) {
  return (
    <>
      <Banner />
      <div className="text-center  my-5">
        <h2>Navega por categorias:</h2>
        <p>Encuentra mas facilmente lo que buscas:</p>
      </div>
      <Categories basePath={""} categories={categories} />
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
