import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  getAllCategoriesAsync,
  getAllProducts,
  getShortLink,
} from "../utils/fetcher";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

const Product = function ({ categorie, products }) {
  const route = useRouter();
  return (
    <>
      <div className="mt-5">
        {categorie.hasSubcategories ? (
          <Categories
            basePath={getShortLink(categorie.name)}
            categorie={categorie}
            categories={categorie.subCategories}
          />
        ) : (
          <Products products={products} categorie={categorie} />
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  let categories = await getAllCategoriesAsync();

  return {
    paths: categories.map((categorie) => `/${getShortLink(categorie.name)}`),
    fallback: false,
  };
}

export async function getStaticProps(props) {
  let categories = await getAllCategoriesAsync();
  let products = await getAllProducts();

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
      categories,
    },
  };
}

export default Product;
