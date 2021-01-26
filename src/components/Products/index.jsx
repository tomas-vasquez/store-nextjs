import React from "react";
import Navigation from "./Navigation";
import Product from "./SingleProduct";

export default function index() {
  return (
    <div className="container">
      <Navigation />
      <div className="row">
        {["a", "b", "c", "c"].map((product, index) => (
          <div className="col-6 col-md-4 col-lg-3 mb-5">
            <Product product={product} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
