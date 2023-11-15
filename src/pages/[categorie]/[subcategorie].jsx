import React from "react";
import {
  getAllCategoriesAsync,
  getAllProducts,
  getShortLink,
} from "../../utils/fetcher";
import Products from "../../components/home/Products";
import SingleProduct from "../../components/SingleProduct";

export default function Subcategorie({ products, product, categorie }) {
  return categorie.hasSubcategories ? (
    <Products products={products} />
  ) : (
    <SingleProduct product={product} />
  );
}

export async function getStaticPaths() {
  let categories = await getAllCategoriesAsync();
  let products = await getAllProducts();
  let paths = [];

  categories.forEach((categorie) => {
    if (categorie.hasSubcategories) {
      categorie.subCategories.forEach((subCategorie) => {
        paths.push(
          "/" +
            getShortLink(categorie.name) +
            "/" +
            getShortLink(subCategorie.name)
        );
      });
    } else {
      products.forEach((product) => {
        if (product.categorie == getShortLink(categorie.name))
          paths.push(
            "/" +
              getShortLink(categorie.name) +
              "/" +
              getShortLink(product.name)
          );
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
  let categories = await getAllCategoriesAsync();

  const categorie = categories.find((categorie) => {
    return getShortLink(categorie.name) == params.categorie;
  });

  let product = null;
  if (!categorie.hasSubcategories)
    product = products.find((_product) => {
      return getShortLink(_product.name) === params.subcategorie;
    });

  const filteredProducts = products.filter((product) => {
    return product.categorie == params.categorie + "/" + params.subcategorie;
  });

  return {
    props: { categories, categorie, product, products: filteredProducts },
  };
}
