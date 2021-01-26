import React from "react";

export default function Navigation() {
  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          className="nav-item nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          Featured products
        </a>
        <a
          className="nav-item nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Popular products
        </a>
        <a
          className="nav-item nav-link"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-contact"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          Bestseller products
        </a>
      </div>
    </nav>
  );
}
