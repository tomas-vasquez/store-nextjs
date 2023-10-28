import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div id="top-nav" className="bg-light smaller-font-size text-muted">
      <nav className="navbar-expand-md container px-3">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-muted" href="#">
                <i className="la la-heart"></i>{" "}
                <span className="hidden-xs hidden-sm hidden-md">
                  Wish List (0)
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" href="#">
                <i className="la la-shopping-cart"></i>{" "}
                <span className="hidden-xs hidden-sm hidden-md">
                  Shopping Cart
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" href="#">
                <i className="la la-share"></i>{" "}
                <span className="hidden-xs hidden-sm hidden-md">Checkout</span>
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav float-right" data-component-currency>
            <li className="nav-item dropdown float-right">
              <Link
                className="nav-link dropdown-toggle text-muted"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="la la-dollar"></i>&ensp;USD
              </Link>

              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
              </div>
            </li>

            <li
              className="nav-item dropdown float-right"
              data-component-language
            >
              <Link
                className="nav-link dropdown-toggle text-muted"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="la la-flag"></i>&ensp;EN
              </Link>

              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
