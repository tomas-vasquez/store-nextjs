import React, { useState } from "react";
import Image from "next/image";
import { connect } from "react-redux";
import {
  addProduct as _addProduct,
  removeProduct as _removeProduct,
} from "../../store/car_store/actions";

var exchangeRate = "BS";

const SingleProduct = function ({ product, car, addProduct, removeProduct }) {
  let price = product.price.find((price) => exchangeRate === price.type)
    ?.amount;

  const pushProductToCart = () => {
    addProduct(product);
  };

  const removeProductToCart = () => {
    removeProduct(product);
  };

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      <article className="product-details container" data-component-product="">
        <div className="row">
          <div className="col-md-8">
            <div className="row d-flex">
              {product.images[1] && (
                <ul className="list-unstyled product-gallery col-md-2">
                  {product.images.map((image, index) => (
                    <li
                      key={index}
                      style={{ cursor: "pointer" }}
                      className={`list-item ${
                        currentImage === index && " border-1 shadow2"
                      }`}
                    >
                      <Image
                        src={image}
                        className="img-fluid"
                        height="100%"
                        width="100%"
                        onClick={() => setCurrentImage(index)}
                      />
                    </li>
                  ))}
                </ul>
              )}

              <div className="col-md-10 m-auto d-flex">
                <div className="m-auto">
                  <Image
                    src={product.images[currentImage]}
                    height={400}
                    width={400}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h1 className="product-heading" data-name="">
              {product.name}
            </h1>

            <ul className="list-unstyled text-muted">
              <li>
                Brand: <span>Apple</span>
              </li>
              <li>
                SKU: <span>333</span>
              </li>
              <li>
                Stock: <span>In stock</span>
              </li>
            </ul>

            <div className="old-price">
              <span data-price="">{price + 15}</span>{" "}
              <span className="currency" data-currency="">
                {exchangeRate}
              </span>
            </div>

            <div className="price h3">
              <span data-price="">{price}</span>{" "}
              <span className="currency" data-currency="">
                {exchangeRate}
              </span>
            </div>

            <hr />

            <div className="form-group row">
              <label htmlFor="productQuantity" className="col-form-label col-4">
                Cantidad:
              </label>
              <input
                id="productQuantity"
                className="col-8 form-control"
                type="number"
                name="quantity"
                min="1"
                max="5"
                defaultValue={1}
              />
            </div>

            {car.products.find((_product) => _product === product) ? (
              <button
                type="button"
                className="btn btn-danger btn-block btn-icon"
                onClick={removeProductToCart}
              >
                <i className="la la-car"></i> sacar del carrito
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-block btn-icon"
                onClick={pushProductToCart}
              >
                <i className="la la-cart-plus"></i> añadir al carrito
              </button>
            )}

            <button
              type="button"
              className="btn btn-outline-secondary btn-block  btn-icon"
            >
              <i className="la la-shopping-cart"></i> Comprar ahora!
            </button>
          </div>
        </div>

        <div className="product-tabs clearfix" role="tabpanel">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-expanded="true"
              >
                Descripcion
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-expanded="false"
              >
                Especificaciones
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              role="tabpanel"
              className="tab-pane fade active show"
              id="home"
              aria-labelledby="home-tab"
              aria-expanded="true"
              data-description=""
            >
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
              aria-expanded="false"
            >
              <p></p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = (state) => ({
  car: state.car,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(_addProduct(product)),
  removeProduct: (product) => dispatch(_removeProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
