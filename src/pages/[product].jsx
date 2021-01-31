import React from "react";
import { products } from "../../site.data";
import SingleProduct from "../components/SingleProduct";

const Product = function ({ product }) {
  return (
    <div className="content">
      <nav className="breadcrumb container">
        <a className="breadcrumb-item" href="#">
          Home
        </a>
        <a className="breadcrumb-item" href="#">
          Laptops
        </a>
        <a className="breadcrumb-item" href="#">
          Slim laptops
        </a>
        <span className="breadcrumb-item active">Sony Vaio</span>
      </nav>

      <SingleProduct product={product} />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: products.map((product) => `/${product.shortLink}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { product } }) {
  return {
    props: {
      product: products.find((_product) => _product.shortLink === product),
    },
  };
}

export default Product;
