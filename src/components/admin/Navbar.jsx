import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="container mt-3 mb-4">
      <div className="row d-flex">
        <div className="col-md-4">
          <Link href="/">
            <a className="logo">
              <h1 className="text-dark">
                <i className="text-secondary la la-plug"></i>
                <span>
                  electróni<span className="text-secondary">cos</span>
                </span>
              </h1>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
