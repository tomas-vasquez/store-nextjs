import { getShortLink } from "/src/utils/fetcher";
import SingleProduct from "/src/components/SingleProduct";

import * as mainData from "/mainData.json";
import Header from "../../../components/common/Header";
import Products from "../../../components/home/Products";

export default function Product({ product, products }) {
  return (
    <>
      <Header title={product.name} />
      <SingleProduct product={product} />
      <div className="mt-5">
        <Products products={products} />
      </div>
    </>
  );
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
    props: { product, categories, products },
  };
}
