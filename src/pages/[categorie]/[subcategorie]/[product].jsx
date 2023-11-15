import React from "react";
import {
  getAllCategoriesAsync,
  getAllProducts,
  getShortLink,
} from "../../../utils/fetcher";
import SingleProduct from "../../../components/SingleProduct";

export default function Product({ product }) {
  return <SingleProduct product={product} />;
}

export async function getStaticPaths() {
  let categories = await getAllCategoriesAsync();
  let products = await getAllProducts();
  let paths = [];

  categories.forEach((categorie) => {
    if (categorie.hasSubcategories) {
      categorie.subCategories.forEach((subCategorie) => {
        products.forEach((product) => {
          if (
            product.categorie ==
            getShortLink(categorie.name) + "/" + getShortLink(subCategorie.name)
          ) {
            paths.push(
              "/" +
                getShortLink(categorie.name) +
                "/" +
                getShortLink(subCategorie.name) +
                "/" +
                getShortLink(product.name)
            );
          }
        });
      });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let products = await getAllProducts();
  const categories = await getAllCategoriesAsync();

  let product = null;
  product = products.find((_product) => {
    return getShortLink(_product.name) === params.product;
  });

  return {
    props: { product, categories },
  };
}
