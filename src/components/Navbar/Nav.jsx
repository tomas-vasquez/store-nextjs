import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-light bg-white  rounded navbar-expand-md mt-4">
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
          <li className="nav-item dropdown categories-dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="http://example.com"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="la la-bars"></i>&ensp;Categories
              <i className="la la-angle-down float-right"></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="#">
                <i className="la la-desktop"></i> Desktops
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#">
              inicio <span className="sr-only">(current)</span>
            </a>
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
