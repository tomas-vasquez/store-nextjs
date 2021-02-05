import React from "react";
import Image from "next/image";
import Link from "next/link";

var exchangeRate = "BS";

export default function Product({ product }) {
  let price = product.price.find((price) => exchangeRate === price.type)
    ?.amount;
  return (
    <article className="product d-flex shadow rounded">
      <div className=" mx-auto d-inline-block">
        <Link href={`/${product.shortLink}`}>
          <a>
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
          </a>
        </Link>
        <div className="px-2 pb-1">
          <h3>
            <a href="product.html" data-product-url data-name data-url>
              {product.name}
            </a>
          </h3>

          <div className="price-group">
            <div className="old-price">
              <span data-product-price>{price + 15}</span>{" "}
              <span className="currency" data-product-currency>
                {exchangeRate}
              </span>
            </div>

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
              className="btn btn-sm btn-secondary"
              title="Add to Cart"
              data-product-cart-url
              data-vvveb-action="addCart"
            >
              <i className="la la-shopping-cart"></i> Añadir al carrito
            </button>

            <button
              type="button"
              className="btn btn-sm btn-muted ml-2"
              title="Add to favorites"
              data-product-fav-url
            >
              <i className="la la-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
