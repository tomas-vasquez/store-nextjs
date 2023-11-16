import Categories from "../components/home/Categories";
import Banner from "../components/home/Banner";
import Header from "../components/common/Header";

import * as mainData from "/mainData.json";

export default function Home() {
  const { categories } = mainData;

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
