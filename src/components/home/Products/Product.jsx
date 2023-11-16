import React from "react";
import Image from "next/image";
import Link from "next/link";

import Alerts from "../../../utils/Alerts";

import { useDispatch, useSelector } from "react-redux";

import { addProductToCart } from "../../../store/slices/carSlice";
import { addProductToWhiteList } from "../../../store/slices/whiteListSlice";
import { getShortLink } from "../../../utils/fetcher";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  const currentExchangeRate =
    settings.exchangeRates[settings.currentExchangeRateIndex];
  const price = product.price.find(
    (price) => currentExchangeRate.type === price.type
  )?.amount;

  const addCarButtonOnClick = () => {
    dispatch(
      addProductToCart({
        itemId: crypto.randomUUID(),
        ...product,
      })
    );
    Alerts.showToast("the product was added!");
  };

  const addWhiteListButtonOnClick = () => {
    dispatch(
      addProductToWhiteList({
        itemId: crypto.randomUUID(),
        ...product,
      })
    );
    Alerts.showToast("the product was added!");
  };

  return (
    <article className="product ">
      <Link href={`/${product.categorie}/${getShortLink(product.name)}`}>
        <div className="d-flex">
          {product.images[0] ? (
            <img
              className="mx-auto"
              src={product.images[0].imageUrl}
              width={230}
              height={230}
              alt={product.name}
            />
          ) : (
            <Image
              className="mx-auto"
              src={"/600px-GHS-pictogram-unknown.svg.png"}
              width={230}
              height={230}
            />
          )}
        </div>
      </Link>
      <div className="p-2">
        <h6 className="text-dark">{product.name}</h6>
        <div className="price-group">
          <div className="price mb-1">
            <span data-product-price>{price}</span>{" "}
            <span className="currency" data-product-currency>
              {currentExchangeRate.type}
            </span>
          </div>
        </div>

        <div className="btngroup">
          <button
            type="button"
            className="btn btn-sm btn-secondary"
            title="Add to Cart"
            onClick={addCarButtonOnClick}
          >
            <i className="fas fa-shopping-cart"></i> Añadir al carrito
          </button>

          <button
            type="button"
            className="btn btn-sm btn-muted ml-2"
            title="Add to favorites"
            onClick={addWhiteListButtonOnClick}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
