import React from "react";
import Image from "next/Image";
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

  return (
    <div>
      <article className="product-details container" data-component-product="">
        <div className="row">
          <div className="col-md-8">
            <div className="zoom-gallery row d-flex">
              {product.images[1] && (
                <ul className="list-unstyled product-gallery col-md-2">
                  {product.images.map((image, index) => (
                    <li key={index} className="list-item">
                      <a href="img/products/1.jpg">
                        <Image
                          src={image}
                          className="img-fluid"
                          height="100%"
                          width="100%"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <div className="col-md-10 m-auto d-flex">
                <a href="img/products/5.jpg" className="m-auto">
                  <Image src={product.images[0]} height={400} width={400} />
                </a>
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
              <p>
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                single-origin coffee squid. Exercitation +1 labore velit, blog
                sartorial PBR leggings next level wes anderson artisan four loko
                farm-to-table craft beer twee. Qui photo booth letterpress,
                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                vero magna velit sapiente labore stumptown. Vegan fanny pack
                odio cillum wes anderson 8-bit, sustainable jean shorts beard ut
                DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente
                accusamus tattooed echo park.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="dropdown1"
              role="tabpanel"
              aria-labelledby="dropdown1-tab"
            >
              <p>
                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                farm-to-table readymade. Messenger bag gentrify pitchfork
                tattooed craft beer, iphone skateboard locavore carles etsy
                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                retro mlkshk vice blog. Scenester cred you probably haven't
                heard of them, vinyl craft beer blog stumptown. Pitchfork
                sustainable tofu synth chambray yr.
              </p>
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
