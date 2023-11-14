import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getShortLink } from "../../utils/fetcher";

export default function Categories({ basePath = "", categories, categorie }) {
  return (
    <>
      {categorie !== undefined && (
        <div className="text-center  my-5">
          <h2>{categorie.name}:</h2>

          <p>Encuentra mas facilmente lo que buscasss:</p>
        </div>
      )}

      <div className="row">
        {categories.map((categorie, index) => (
          <div key={index} className="col-6 col-md-3 mb-5">
            <article className="product d-flex shadow rounded p-0">
              <div className=" mx-auto d-inline-block">
                <Link href={basePath + `/${getShortLink(categorie.name)}`}>
                  {categorie.images[0] ? (
                    <img
                      src={categorie.images[0].imageUrl}
                      width={230}
                      height={230}
                      alt={categorie.images[0].imageId}
                    />
                  ) : (
                    <Image
                      alt="   "
                      src={"/600px-GHS-pictogram-unknown.svg.png"}
                      width={230}
                      height={230}
                    />
                  )}
                  <h5 className="text-dark m-2">{categorie.name}</h5>
                </Link>
                {/* {JSON.stringify(categorie)} */}
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
