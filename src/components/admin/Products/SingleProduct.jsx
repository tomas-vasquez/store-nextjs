import Image from "next/image";
import React, { useState } from "react";
import { StorageImage } from "reactfire";
import Icons from "../../common/Icons";
import ModalEditProduct from "./ModalEditProduct";
var exchangeRate = "BS";

export default function SingleProduct({ product }) {
  let price = product.price.find((price) => exchangeRate === price.type)
    ?.amount;

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const toggleOpenModalEdit = () => setOpenModalEdit(!openModalEdit);

  return (
    <article className="product d-flex shadow rounded mb-5">
      <div className=" mx-auto d-inline-block">
        {product.images[0] ? (
          <a>
            <img
              src={product.images[0].imageUrl}
              style={{ width: "100%" }}
              alt={product.name}
            />
          </a>
        ) : (
          <img
            style={{ width: "100%" }}
            src={"/600px-GHS-pictogram-unknown.svg.png"}
            alt={product.name}
          />
        )}

        <div className="px-2 pb-1">
          <h3>
            <a href="product.html" data-product-url data-name data-url>
              {product.name}
            </a>
          </h3>

          <div className="price-group">
            <div className="price mb-1">
              <span data-product-price>{price}</span>{" "}
              <span className="currency" data-product-currency>
                {exchangeRate}
              </span>
            </div>
          </div>

          <div className="btngroup">
            <button
              type="button"
              className="btn btn-sm btn-secondary mr-2"
              title="Add to Cart"
              data-product-cart-url
              data-vvveb-action="addCart"
              onClick={() => setOpenModalEdit(true)}
            >
              <Icons icon="pencil" /> Editar
            </button>
            {openModalEdit && (
              <ModalEditProduct
                product={product}
                openModalEdit={openModalEdit}
                toggleOpenModalEdit={toggleOpenModalEdit}
              />
            )}
            <button
              type="button"
              className="btn btn-sm btn-danger"
              title="Add to Cart"
              data-product-cart-url
              data-vvveb-action="addCart"
            >
              <Icons icon="trash" /> Borrar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
