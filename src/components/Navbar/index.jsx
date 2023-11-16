import Link from "next/link";
import React from "react";
import Car from "./Car";
import Nav from "./Nav";
import User from "./User";

const Navbar = ({ categories }) => {
  return (
    <>
      <nav className="navbar  mt-3">
        <div className="container-fluid">
          <Link className="navbar-brand logo m-0" href="/">
            <h1 className="text-dark">
              <i className="text-secondary fas fa-plug " /> electróni
              <span className="text-secondary">cos.</span>
            </h1>
          </Link>
          <div className="d-flex">
            <Car />
            <User />
          </div>
        </div>
      </nav>

      <header className="container mt-2">
        <Nav categories={categories} />
      </header>
    </>
  );
};

export default Navbar;
