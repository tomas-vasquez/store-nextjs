import Link from "next/link";
import React from "react";
import Car from "./Car";
import Nav from "./Nav";
import User from "./User";
import Topbar from "../Topbar";

const Navbar = ({ car, products }) => {
  return (
    <>
      <Topbar />
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand logo m-0" href="/">
            <h1 className="text-dark">
              <i className="text-secondary la la-plug"></i>
              electróni<span className="text-secondary">cos.</span>
            </h1>
          </Link>
          <div className="d-flex">
            <Car />
            <User />
          </div>
        </div>
      </nav>

      <header className="container mt-2">
        <Nav products={products} />
      </header>
    </>
  );
};

export default Navbar;
