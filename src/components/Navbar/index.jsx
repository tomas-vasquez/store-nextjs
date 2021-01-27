import React from "react";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <header className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <a href="/" className="logo">
            <h1 className="text-dark">
              <i className="text-secondary la la-plug"></i>
              <span>
                electróni<span className="text-secondary">cos.</span>
              </span>
            </h1>
            <small className="text-dark">electronics shopping in latam.</small>
          </a>
        </div>

        <div className="col-md-5">
          <form className="">
            <div
              className="input-group input-group-lg mb-3"
              id="search-box"
              data-component-category
            >
              <input
                type="text"
                className="form-control default-font-size"
                placeholder="Search product"
                aria-label="Search product"
              />

              <select className="custom-select input-group-append form-control-lg no-border-x default-font-size">
                <option selected="">All categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="la la-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <div
            className="dropdown float-right"
            id="mini-cart"
            data-component-cart
          >
            <a
              className="btn btn-link dropdown-toggle bg-faded p-0 chevron-big"
              href="https://example.com"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className="la la-shopping-cart d-inline-block"
                style={{ fontSize: 42 }}
              >
                <span className="cart-items" data-total_items>
                  3
                </span>
              </i>
              &ensp;
              <div className="d-inline-block text-dark">
                <span className="small d-block text-left">Your cart</span>
                <span className="font-weight-bold" data-total>
                  $3500.05
                </span>
              </div>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuLink"
            >
              <table className="table table-sm table-striped">
                <tbody>
                  <tr>
                    <td className="text-center">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=40">
                        <img
                          src="http://opencart3100.givan.ro/image/cache/catalog/demo/iphone_1-47x47.jpg"
                          alt="iPhone"
                          title="iPhone"
                          className="img-thumbnail"
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=40">
                        iPhone
                      </a>
                    </td>
                    <td className="text-right">x 1</td>
                    <td className="text-right">$123.20</td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick="cart.remove('1');"
                        data-toggle="tooltip"
                        title=""
                        className="btn btn-danger btn-sm"
                        data-original-title="Remove"
                      >
                        <i className="la la-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=43">
                        <img
                          src="http://opencart3100.givan.ro/image/cache/catalog/demo/macbook_1-47x47.jpg"
                          alt="MacBook"
                          title="MacBook"
                          className="img-thumbnail"
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=43">
                        MacBook
                      </a>
                    </td>
                    <td className="text-right">x 1</td>
                    <td className="text-right">$602.00</td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick="cart.remove('2');"
                        data-toggle="tooltip"
                        title=""
                        className="btn btn-danger btn-sm"
                        data-original-title="Remove"
                      >
                        <i className="la la-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=30">
                        <img
                          src="http://opencart3100.givan.ro/image/cache/catalog/demo/canon_eos_5d_1-47x47.jpg"
                          alt="Canon EOS 5D"
                          title="Canon EOS 5D"
                          className="img-thumbnail"
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=30">
                        Canon EOS 5D
                      </a>
                      <br />- <small>Select Red</small>
                    </td>
                    <td className="text-right">x 1</td>
                    <td className="text-right">$98.00</td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick="cart.remove('3');"
                        data-toggle="tooltip"
                        title=""
                        className="btn btn-danger btn-sm"
                        data-original-title="Remove"
                      >
                        <i className="la la-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <table className="table table-sm table-bordered">
                  <tbody>
                    <tr>
                      <td className="text-right">
                        <strong>Sub-Total</strong>
                      </td>
                      <td className="text-right">$681.00</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>Eco Tax (-2.00)</strong>
                      </td>
                      <td className="text-right">$6.00</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>VAT (20%)</strong>
                      </td>
                      <td className="text-right">$136.20</td>
                    </tr>
                    <tr>
                      <td className="text-right">
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">$823.20</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-right">
                  <a href="http://opencart3100.givan.ro/index.php?route=checkout/cart&amp;language=en-gb">
                    <strong>
                      <i className="la la-shopping-cart"></i> View Cart
                    </strong>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="http://opencart3100.givan.ro/index.php?route=checkout/checkout&amp;language=en-gb">
                    <strong>
                      <i className="la la-share"></i> Checkout
                    </strong>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="dropdown float-right"
            id="mini-user"
            data-component-user
          >
            <a
              className="btn btn-link dropdown-toggle bg-faded p-0 chevron-big"
              href="https://example.com"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className="la la-user d-inline-block"
                style={{ fontSize: 42 }}
              ></i>
              &ensp;
              <div className="d-inline-block text-dark" data-if="login">
                <span className="small d-block text-left">My account</span>
                <span className="font-weight-bold">Login/Register</span>
              </div>
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">
                Register
              </a>
              <a className="dropdown-item" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
}
