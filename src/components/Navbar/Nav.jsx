import React, { useState } from "react";
import Link from "next/link";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getShortLink } from "../../utils/fetcher";

import { navbar } from "../../../site.config";
import * as mainData from "../../../mainData.json";

export default function Nav() {
  const [openDropdownCategories, setOpenDropdownCategories] = useState(false);
  const toggle = () => setOpenDropdownCategories(!openDropdownCategories);

  const { categories } = mainData;

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

          {navbar.map((item) => (
            <li className="nav-item ml-3" key={item.title}>
              <Link href={item.url} className="nav-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="thickline"></div>
    </nav>
  );
}
