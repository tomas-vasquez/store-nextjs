import React from "react";

export default function SingleProduct() {
  return (
    <article class="product d-flex shadow rounded">
      <div className=" mx-auto d-inline-block">
        <a href="product.html" data-url>
          <img src="products/3.jpg" class="img-fluid" data-img />
        </a>
        <div className="px-2 pb-1">
          <h3>
            <a href="product.html" data-product-url data-name data-url>
              Apple cinema
            </a>
          </h3>

          <span class="description" data-product-description>
            Lorem ipsum
          </span>

          <div class="price-group">
            <div class="old-price">
              <span class="currency" data-product-currency>
                $
              </span>{" "}
              <span data-product-price>385</span>
            </div>

            <div class="price mb-1">
              <span class="currency" data-product-currency>
                $
              </span>{" "}
              <span data-product-price>315</span>
            </div>
          </div>

          <div class="btngroup">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              title="Add to Cart"
              data-product-cart-url
              data-vvveb-action="addCart"
            >
              <i class="la la-shopping-cart"></i> Add to cart
            </button>

            <button
              type="button"
              class="btn btn-sm btn-muted ml-2"
              title="Add to favorites"
              data-product-fav-url
            >
              <i class="la la-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
