import { getShortLink } from "../../utils/fetcher";
import Products from "../../components/home/Products";
import SingleProduct from "../../components/SingleProduct";

import * as mainData from "/mainData.json";
import Header from "../../components/common/Header";

export default function Subcategorie({ categorie, products, product }) {
  return categorie.hasSubcategories ? (
    <>
      <Header title={categorie.name} />
      <Products products={products} />
    </>
  ) : (
    <>
      <Header title={product.name} />
      <Products products={products} />
      <SingleProduct product={product} />
    </>
  );
}

export async function getStaticPaths() {
  const { categories, products } = mainData;

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
  const { categories, products } = mainData;

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
    props: { categorie, product, products: filteredProducts },
  };
}
