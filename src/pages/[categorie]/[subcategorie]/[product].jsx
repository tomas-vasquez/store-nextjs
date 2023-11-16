import { getShortLink } from "/src/utils/fetcher";
import SingleProduct from "/src/components/SingleProduct";

import * as mainData from "/mainData.json";

export default function Product({ product }) {
  return <SingleProduct product={product} />;
}

export async function getStaticPaths() {
  const { categories, products } = mainData;

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
  const { categories, products } = mainData;

  let product = null;
  product = products.find((_product) => {
    return getShortLink(_product.name) === params.product;
  });

  return {
    props: { product, categories },
  };
}
