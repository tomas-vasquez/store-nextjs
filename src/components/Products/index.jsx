import React from "react";
import Navigation from "./Navigation";
import Product from "./Product";

export default function index({ products }) {
  return (
    <>
      <Navigation />
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-6 col-md-3 mb-5">
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
