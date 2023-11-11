import React from "react";
import {
  getAllCategoriesAsync,
  getAllProducts,
  getShortLink,
} from "../../utils/fetcher";

export default function Subcategorie({ products, categorie, subCategorie }) {
  return (
    <div>
      {categorie + "" + subCategorie}
      {JSON.stringify(products)}
    </div>
  );
}

export async function getStaticPaths(param) {
  let categories = await getAllCategoriesAsync();
  let links = [];

  categories.forEach((categorie) => {
    categorie.subCategories.forEach((subCategorie) => {
      links.push(
        "/" +
          getShortLink(categorie.name) +
          "/" +
          getShortLink(subCategorie.name)
      );
    });
  });

  return {
    paths: links,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let products = await getAllProducts();
  console.log(">>>>>>>>>", params);

  const { categorie, subcategorie } = params;

  return {
    props: { products, categorie, subCategorie: subcategorie },
  };
}
