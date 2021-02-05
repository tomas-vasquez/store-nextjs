import Link from "next/link";
import React from "react";
import Car from "./Car";
import Nav from "./Nav";

const Navbar = ({ car, products }) => {
  return (
    <header className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <Link href="/">
            <a className="logo">
              <h1 className="text-dark">
                <i className="text-secondary la la-plug"></i>
                <span>
                  electróni<span className="text-secondary">cos.</span>
                </span>
              </h1>
              <small className="text-dark">
                electronics shopping in latam.
              </small>
            </a>
          </Link>
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
                <option defaultValue="on">All categories</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
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
          <Car />
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
      <Nav products={products} />
    </header>
  );
};

export default Navbar;
