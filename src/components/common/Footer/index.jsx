import Link from "next/link";
import React from "react";
import { socialIcons, footer, siteMetadata } from "../../../../site.config";

export default function Footer({ litle }) {
  return (
    <footer className="footer mb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <Link href="/" className="logo">
              <h1 className="text-dark">
                <i className="text-secondary fas fa-plug"></i>
                <span className="text-white">
                  Bol<span className="text-secondary">o.</span>
                </span>
              </h1>
              <small className="text-white">electronics shopping.</small>
            </Link>

            <p className="mt-4">{footer.aboutText}</p>
            <ul className="list-unstyled  mb-0 mt-4">
              {/* {socialIcons.map((icon, index) => (
                <li className="list-inline-item" key={index}>
                  <Link href="" className="text-foot">
                    <Icons className="fa-1x mx-2" icon={icon.icon} />
                  </Link>
                </li>
              ))} */}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">{footer.LinksTitle}</h4>
            <ul className="list-unstyled footer-list mt-4">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-foot">
                    <i className="fas fa-sm fa-circle" />
                    {link.title}l
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">{footer.newsLetterTitle}</h4>
            <p className="mt-4">{footer.newsLetterText}</p>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="foot-subscribe form-group position-relative">
                    <i data-feather="mail" className="fea icon-sm icons"></i>
                    <input
                      type="email"
                      name="email"
                      id="emailsubscribe"
                      className="form-control rounded"
                      placeholder="Your email:"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <input
                    type="submit"
                    id="submitsubscribe"
                    name="send"
                    className="btn btn-soft-primary btn-block"
                    defaultValue="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container text-center p-3 pt-4">
        <div className="text-center">
          <p className={litle ? "mb-0 text-center" : "mb-0"}>
            {/* © 2019-{new Date().getFullYear()} cursos-online.com.  */}
            Made with <i className="fas fa-heart" /> by{"   "}
            <Link
              className="badge badge-dark"
              rel="noopener"
              href="https://tomas-vasquez.vercel.app/"
              aria-label="My GitHub"
            >
              Tomi
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
