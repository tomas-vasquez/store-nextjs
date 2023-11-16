import React from "react";
import Product from "./Product";

export default function index({ products }) {
  return (
    <>
      {/* <div className="text-center  my-5">
        <h2>{products[0].categorie}</h2>

        <p>Encuentra mas facilmente lo que buscasss:</p>
      </div> */}
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
