import React from "react";
import Image from "next/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
            <div class="row">
              <div className="col-lg-4 p-5">
                <h1 class="font-weight-bold">iMac Pro 2.</h1>
                <p class="font-weight-normal pb-4">
                  Mobile ready, outstanding performance
                  <br />
                  with gorgeous display
                </p>
                <p>
                  <a
                    class="btn btn-md btn-outline-primary font-weight-bold px-5 py-2"
                    href="#"
                    role="button"
                  >
                    Añadir al carrito <i class="la la-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div className="col-lg-8">
                <Image
                  src="/ipad.png"
                  class="float-right col-md-8"
                  width={700}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
