import React from "react";

export default function Navbar() {
  return (
    <header class="container mt-5">
      <div class="row">
        <div class="col-md-3">
          <a href="/" class="logo">
            <h1 class="text-dark">
              <i class="text-secondary la la-plug"></i>
              <span>
                Bol<span class="text-secondary">o.</span>
              </span>
            </h1>
            <small class="text-dark">electronics shopping.</small>
          </a>
        </div>

        <div class="col-md-5">
          <form class="">
            <div
              class="input-group input-group-lg mb-3"
              id="search-box"
              data-component-category
            >
              <input
                type="text"
                class="form-control default-font-size"
                placeholder="Search product"
                aria-label="Search product"
              />

              <select class="custom-select input-group-append form-control-lg no-border-x default-font-size">
                <option selected="">All categories</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="la la-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-4">
          <div class="dropdown float-right" id="mini-cart" data-component-cart>
            <a
              class="btn btn-link dropdown-toggle bg-faded p-0 chevron-big"
              href="https://example.com"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                class="la la-shopping-cart d-inline-block"
                style={{ fontSize: 42 }}
              >
                <span class="cart-items" data-total_items>
                  3
                </span>
              </i>
              &ensp;{" "}
              <div class="d-inline-block text-dark">
                <span class="small d-block text-left">Your cart</span>
                <span class="font-weight-bold" data-total>
                  $3500.05
                </span>
              </div>
            </a>

            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuLink"
            >
              <table class="table table-sm table-striped">
                <tbody>
                  <tr>
                    <td class="text-center">
                      {" "}
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=40">
                        <img
                          src="http://opencart3100.givan.ro/image/cache/catalog/demo/iphone_1-47x47.jpg"
                          alt="iPhone"
                          title="iPhone"
                          class="img-thumbnail"
                        />
                      </a>{" "}
                    </td>
                    <td class="text-left">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=40">
                        iPhone
                      </a>
                    </td>
                    <td class="text-right">x 1</td>
                    <td class="text-right">$123.20</td>
                    <td class="text-center">
                      <button
                        type="button"
                        onclick="cart.remove('1');"
                        data-toggle="tooltip"
                        title=""
                        class="btn btn-danger btn-sm"
                        data-original-title="Remove"
                      >
                        <i class="la la-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      {" "}
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=43">
                        <img
                          src="http://opencart3100.givan.ro/image/cache/catalog/demo/macbook_1-47x47.jpg"
                          alt="MacBook"
                          title="MacBook"
                          class="img-thumbnail"
                        />
                      </a>{" "}
                    </td>
                    <td class="text-left">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=43">
                        MacBook
                      </a>
                    </td>
                    <td class="text-right">x 1</td>
                    <td class="text-right">$602.00</td>
                    <td class="text-center">
                      <button
                        type="button"
                        onclick="cart.remove('2');"
                        data-toggle="tooltip"
                        title=""
                        class="btn btn-danger btn-sm"
                        data-original-title="Remove"
                      >
                        <i class="la la-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      {" "}
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=30">
                        <img
                          src="http://opencart3100.givan.ro/image/cache/catalog/demo/canon_eos_5d_1-47x47.jpg"
                          alt="Canon EOS 5D"
                          title="Canon EOS 5D"
                          class="img-thumbnail"
                        />
                      </a>{" "}
                    </td>
                    <td class="text-left">
                      <a href="http://opencart3100.givan.ro/index.php?route=product/product&amp;language=en-gb&amp;product_id=30">
                        Canon EOS 5D
                      </a>
                      <br />- <small>Select Red</small>{" "}
                    </td>
                    <td class="text-right">x 1</td>
                    <td class="text-right">$98.00</td>
                    <td class="text-center">
                      <button
                        type="button"
                        onclick="cart.remove('3');"
                        data-toggle="tooltip"
                        title=""
                        class="btn btn-danger btn-sm"
                        data-original-title="Remove"
                      >
                        <i class="la la-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <table class="table table-sm table-bordered">
                  <tbody>
                    <tr>
                      <td class="text-right">
                        <strong>Sub-Total</strong>
                      </td>
                      <td class="text-right">$681.00</td>
                    </tr>
                    <tr>
                      <td class="text-right">
                        <strong>Eco Tax (-2.00)</strong>
                      </td>
                      <td class="text-right">$6.00</td>
                    </tr>
                    <tr>
                      <td class="text-right">
                        <strong>VAT (20%)</strong>
                      </td>
                      <td class="text-right">$136.20</td>
                    </tr>
                    <tr>
                      <td class="text-right">
                        <strong>Total</strong>
                      </td>
                      <td class="text-right">$823.20</td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-right">
                  <a href="http://opencart3100.givan.ro/index.php?route=checkout/cart&amp;language=en-gb">
                    <strong>
                      <i class="la la-shopping-cart"></i> View Cart
                    </strong>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="http://opencart3100.givan.ro/index.php?route=checkout/checkout&amp;language=en-gb">
                    <strong>
                      <i class="la la-share"></i> Checkout
                    </strong>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="dropdown float-right" id="mini-user" data-component-user>
            <a
              class="btn btn-link dropdown-toggle bg-faded p-0 chevron-big"
              href="https://example.com"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="la la-user d-inline-block" style={{ fontSize: 42 }}></i>
              &ensp;
              <div class="d-inline-block text-dark" data-if="login">
                <span class="small d-block text-left">My account</span>
                <span class="font-weight-bold">Login/Register</span>
              </div>
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">
                Register
              </a>
              <a class="dropdown-item" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-light bg-white  rounded navbar-expand-md mt-4">
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#containerNavbar"
          aria-controls="containerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="containerNavbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown categories-dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="la la-bars"></i>&ensp;Categories{" "}
                <i class="la la-angle-down float-right"></i>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown04">
                <a class="dropdown-item" href="#">
                  <i class="la la-desktop"></i> Desktops
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item dropdown dropdown--canvas dropdown--canvas--left dropdown--canvas--sm">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Store Location
              </a>
              <div class="dropdown-menu">Hello!</div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Delivery Services
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Blog
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                Support
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown04">
                <a class="dropdown-item" href="#">
                  FAQ
                </a>
                <a class="dropdown-item" href="#">
                  Our Story
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
