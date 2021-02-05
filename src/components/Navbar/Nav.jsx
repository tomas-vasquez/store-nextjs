import React, { useState } from "react";
import Link from "next/link";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// import { categories } from "../../../site.data";

export default function Nav(products) {
  const [openDropdownCategories, setOpenDropdownCategories] = useState(false);
  const toggle = () => setOpenDropdownCategories(!openDropdownCategories);

  return (
    <nav className="navbar navbar-light bg-white  rounded navbar-expand-md mt-3">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#containerNavbar"
        aria-controls="containerNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="containerNavbar">
        <ul className="navbar-nav mr-auto">
          <li>
            <ButtonDropdown isOpen={openDropdownCategories} toggle={toggle}>
              <DropdownToggle className="px-5 rounded">
                Categorias
                <i className="la la-angle-down ml-1" />
              </DropdownToggle>
              <DropdownMenu>
                {/* {categories.map((_categorie, index) => (
                  <DropdownItem key={index}>{_categorie}</DropdownItem>
                ))} */}
              </DropdownMenu>
            </ButtonDropdown>
          </li>

          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Inicio</a>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Servicio de envio
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Como comprar?
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="http://example.com"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Acerca de
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="#">
                FAQ
              </a>
              <a className="dropdown-item" href="#">
                Our Story
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contactanos
            </a>
          </li>
        </ul>
      </div>
      <div className="thickline"></div>
    </nav>
  );
}
