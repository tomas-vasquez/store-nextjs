import Image from "next/image";
import React, { useContext, useState } from "react";
import Icons from "../../common/Icons";
import ModalEditProduct from "./ModalEditProduct";
import Link from "next/link";
import { deleteProduct } from "../../../utils/fetcher";
import FirebaseContext from "../../../context/FirebaseContext";
import Alerts from "../../../utils/Alerts";
var exchangeRate = "BS";

export default function SingleProduct({ product, categorieList }) {
  let price = product.price.find(
    (price) => exchangeRate === price.type
  )?.amount;

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const toggleOpenModalEdit = () => setOpenModalEdit(!openModalEdit);

  const firebase = useContext(FirebaseContext);

  const buttonDeleteClickHandler = () => {
    const productId = product.id;
    Alerts.showLoading();
    deleteProduct(firebase, productId, () => {
      Alerts.showSuccess();
    });
  };

  return (
    <div className="product d-flex card shadow mb-5">
      <div className=" mx-auto d-inline-block">
        {product.images[0] ? (
          <img
            src={product.images[0].imageUrl}
            style={{ width: "100%" }}
            alt={product.name}
          />
        ) : (
          <img
            style={{ width: "100%" }}
            src={"/600px-GHS-pictogram-unknown.svg.png"}
            alt={product.name}
          />
        )}

        <div className="p-2">
          <h5>
            <Link href="product.html" data-product-url data-name data-url>
              {product.name}
            </Link>
          </h5>

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
                categorieList={categorieList}
                openModalEdit={openModalEdit}
                toggleOpenModalEdit={toggleOpenModalEdit}
              />
            )}
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={buttonDeleteClickHandler}
            >
              <Icons icon="trash" /> Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
