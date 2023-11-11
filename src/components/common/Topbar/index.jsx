import Link from "next/link";
import React from "react";

import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentExchangeRateIndex } from "../../../store/slices/settingSlice";

export default function index() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const currentExchangeRate =
    settings.exchangeRates[settings.currentExchangeRateIndex];

  const onClickHandler = (index) => {
    dispatch(setCurrentExchangeRateIndex(index));
  };

  return (
    <div id="top-nav" className="bg-light smaller-font-size text-muted">
      <nav className="navbar-expand-md container px-3">
        <UncontrolledDropdown size="lg">
          <DropdownToggle nav className="dropdown-toggle chevron-big">
            <i className="la la-dollar"></i>&ensp;{currentExchangeRate.type}
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-xl">
            <ul className="navbar-nav">
              {settings.exchangeRates.map((exchangeRate, index) => (
                <li className="nav-item dropdown float-right" key={index}>
                  <Link
                    className="dropdown-item"
                    href="#"
                    id={index}
                    onClick={(e) => {
                      e.preventDefault();
                      onClickHandler(index);
                    }}
                  >
                    {exchangeRate.type}
                  </Link>
                </li>
              ))}
            </ul>
            {/* {JSON.stringify(settings.exchangeRates)} */}
          </DropdownMenu>
        </UncontrolledDropdown>

        <div
          className="collapse navbar-collapse"
          id="navbarsExampleDefault"
        ></div>
      </nav>
    </div>
  );
}
