import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import SingleProduct from "../components/SingleProduct";
import Products from "../components/Products";

import { getAllProducts } from "../utils/fetcher";

const Product = function ({ product, products }) {
  const route = useRouter();
  return (
    <>
      <div className="content">
        <nav className="breadcrumb container">
          <Link href="/" className="breadcrumb-item">
            Inicio
          </Link>

          <span className="breadcrumb-item active">{route.query.product}</span>
        </nav>

        <SingleProduct product={product} />
      </div>
      <div className="mt-5">
        <Products products={products} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  let products = await getAllProducts();

  return {
    paths: products.map((product) => `/${product.shortLink}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { product } }) {
  let products = await getAllProducts();

  return {
    props: {
      products,
      product: products.find((_product) => _product.shortLink === product),
    },
  };
}

export default Product;
