import React from "react";

export default function index() {
  return (
    <div id="top-nav" class="bg-light smaller-font-size text-muted">
      <nav class="navbar-expand-md container px-3">
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-muted" href="#">
                <i class="la la-heart"></i>{" "}
                <span class="hidden-xs hidden-sm hidden-md">Wish List (0)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-muted" href="#">
                <i class="la la-shopping-cart"></i>{" "}
                <span class="hidden-xs hidden-sm hidden-md">Shopping Cart</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-muted" href="#">
                <i class="la la-share"></i>{" "}
                <span class="hidden-xs hidden-sm hidden-md">Checkout</span>
              </a>
            </li>
          </ul>

          <ul class="navbar-nav float-right" data-component-currency>
            <li class="nav-item dropdown float-right">
              <a
                class="nav-link dropdown-toggle text-muted"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="la la-dollar"></i>&ensp;USD
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            <li class="nav-item dropdown float-right" data-component-language>
              <a
                class="nav-link dropdown-toggle text-muted"
                href="http://example.com"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="la la-flag"></i>&ensp;EN
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
