import Link from "next/link";
import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

export default function User() {
  return (
    <>
      <UncontrolledDropdown size="lg">
        <DropdownToggle nav className="dropdown-toggle chevron-big">
          <i className="la la-user d-inline-block" style={{ fontSize: 42 }}></i>
          &ensp;
          <div className="d-inline-block text-dark" data-if="login">
            <span className="small d-block text-left">My account</span>
            <span className="font-weight-bold">Login/Register</span>
          </div>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-xl " end>
          <p>sds</p>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}
