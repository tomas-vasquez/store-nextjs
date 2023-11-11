import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

export default function index() {
  return (
    <div className="bg-light py-3 mb-4">
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={false}
        responsive={{
          desktop: {
            breakpoint: { max: 4000, min: 992 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 991, min: 576 },
            items: 1,
          },
          mobile: {
            breakpoint: { max: 575, min: 0 },
            items: 1,
          },
        }}
      >
        {["a", "a", "a", "a", "a", "a"].map((course, index) => (
          <div className="container" key={`ca-${index}`}>
            <div className="row">
              <div className="col-lg-4 p-5">
                <h1 className="font-weight-bold">iMac Pro 2.</h1>
                <p className="font-weight-normal pb-4">
                  Mobile ready, outstanding performance
                  <br />
                  with gorgeous display
                </p>
                <p>
                  <Link
                    className="btn btn-md btn-outline-primary font-weight-bold px-5 py-2"
                    href="#"
                    role="button"
                  >
                    Añadir al carrito <i className="la la-arrow-right"></i>
                  </Link>
                </p>
              </div>
              <div className="col-lg-8">
                <Image
                  src="/ipad.png"
                  className="float-right col-md-8"
                  alt="dsd"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
