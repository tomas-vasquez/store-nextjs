import React, { useState } from "react";
import Link from "next/link";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getShortLink } from "../../utils/fetcher";

// import { categories } from "../../../site.data";

export default function Nav({ categories }) {
  const [openDropdownCategories, setOpenDropdownCategories] = useState(false);
  const toggle = () => setOpenDropdownCategories(!openDropdownCategories);

  return (
    <nav className="navbar navbar-light bg-white  rounded navbar-expand-md ">
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
                <i className="fas fa-angle-down ml-1" />
              </DropdownToggle>
              <DropdownMenu>
                {categories.map((_categorie, index) => (
                  <DropdownItem key={index}>
                    <Link href={"/" + getShortLink(_categorie.name)}>
                      {_categorie.name}
                    </Link>
                  </DropdownItem>
                ))}
                <></>
              </DropdownMenu>
            </ButtonDropdown>
          </li>
          <li className="nav-item ml-3">
            <Link href="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Lista de deseos
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="#">
              preguntas?
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " href="/">
              Acerca de
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
      <div className="thickline"></div>
    </nav>
  );
}
