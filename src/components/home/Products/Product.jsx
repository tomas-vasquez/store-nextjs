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
    <article className="product d-flex shadow rounded">
      <div className=" mx-auto d-inline-block">
        <Link href={`/${product.categorie}/${getShortLink(product.name)}`}>
          {product.images[0] ? (
            <img
              src={product.images[0].imageUrl}
              width={230}
              height={230}
              alt={product.images[0].imageId}
            />
          ) : (
            <Image
              src={"/600px-GHS-pictogram-unknown.svg.png"}
              width={230}
              height={230}
            />
          )}
          <h5 className="text-dark">{product.name}</h5>
        </Link>
        <div className="px-2 pb-1">
          <div className="price-group">
            <div className="old-price">
              <span data-product-price>{price + 10}</span>{" "}
              <span className="currency" data-product-currency>
                {currentExchangeRate.type}
              </span>
            </div>

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
      </div>
    </article>
  );
}
