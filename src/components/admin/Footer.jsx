import Link from "next/link";
import React from "react";

export default function Footer({ litle }) {
  return (
    <footer className="footer mb-0 p-0 float fixed-bottom">
      <div className="container text-center p-2">
        <div className="text-center">
          <p className={litle ? "mb-0 text-center" : "mb-0"}>
            {/* © 2019-{new Date().getFullYear()} cursos-online.com.  */}
            Made withby{" "}
            <Link
              rel="noopener"
              href="https://tomas-vasquez.vercel.app/"
              aria-label="My GitHub"
            >
              Tomas Vasquez
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
