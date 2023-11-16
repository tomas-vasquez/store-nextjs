import React from "react";
import { getAllCategoriesAsync, getShortLink } from "../utils/fetcher";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import * as mainData from "/mainData.json";
import Header from "../components/common/Header";

const Product = function ({ categorie, products }) {
  return (
    <>
      <div className="mt-5">
        {categorie.hasSubcategories ? (
          <>
            <Header title={categorie.name} subtitle="" />
            <Categories
              basePath={getShortLink(categorie.name)}
              categorie={categorie}
              categories={categorie.subCategories}
            />
          </>
        ) : (
          <>
            <Header title={categorie.name} subtitle="" />
            <Products products={products} categorie={categorie} />
          </>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const { categories } = mainData;
  return {
    paths: categories.map((categorie) => `/${getShortLink(categorie.name)}`),
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const { categories, products } = mainData;

  const categorie = categories.find(
    (_categorie) => getShortLink(_categorie.name) === props.params.categorie
  );

  const leakedProducts = products.filter((product) => {
    return product.categorie === props.params.categorie;
  });

  return {
    props: {
      products: leakedProducts,
      categorie,
    },
  };
}

export default Product;
