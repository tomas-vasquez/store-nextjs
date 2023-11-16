import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getShortLink } from "../../utils/fetcher";
import * as mainData from "/mainData.json";

export default function Categories({ basePath = "", categories }) {
  const { products } = mainData;

  const getPrductsCounter = (categorie) => {
    let c = 0;
    products.forEach((product) => {
      if (product.categorie.includes(getShortLink(categorie.name))) c = c + 1;
    });
    return c;
  };

  return (
    <>
      <div className="row">
        {categories.map((categorie) => (
          <div key={categorie.name} className="col-6 col-md-3 mb-5">
            <article className="product d-flex p-0">
              <div className=" mx-auto d-inline-block">
                <Link href={basePath + `/${getShortLink(categorie.name)}`}>
                  {categorie.images[0] ? (
                    <img
                      src={categorie.images[0].imageUrl}
                      width={230}
                      height={230}
                      alt={categorie.name}
                    />
                  ) : (
                    <Image
                      alt="   "
                      src={"/600px-GHS-pictogram-unknown.svg.png"}
                      width={230}
                      height={230}
                    />
                  )}
                  <h6 className="m-2">
                    {categorie.name} ({getPrductsCounter(categorie)})
                  </h6>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
