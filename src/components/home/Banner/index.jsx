import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

import { banner } from "../../../../site.config";

export default function index() {
  return (
    <div className="pb-3 mb-4">
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
        {banner.map((item, index) => (
          <div className="container px-5" key={`ca-${index}`}>
            <div className="row px-5">
              <div className="col-lg-6 d-flex ">
                <div className="my-auto">
                  <h1 className="font-weight-bold mb-4">{item.title}</h1>
                  <p className="font-weight-normal mb-4">{item.text}</p>
                  <p>
                    <Link
                      className="btn btn-md btn-outline-primary font-weight-bold px-5 py-2"
                      href={item.bottomUrl}
                      role="button"
                    >
                      {item.bottomText + " "}
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={item.imageUrl}
                  className="float-right "
                  alt="dsd"
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
