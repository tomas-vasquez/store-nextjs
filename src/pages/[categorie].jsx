import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getAllCategoriesAsync, getShortLink } from "../utils/fetcher";
import Categories from "../components/home/Categories";

const Product = function ({ categorie, categories }) {
  const route = useRouter();
  return (
    <>
      <div className="content">
        <nav className="breadcrumb container">
          <Link href="/" className="breadcrumb-item">
            Inicio
          </Link>

          <span className="breadcrumb-item active">{route.query.product}</span>
        </nav>
      </div>
      <div className="mt-5">
        <div className="text-center  my-5">
          <h2>{categorie.name}:</h2>

          <p>Encuentra mas facilmente lo que buscasss:</p>
        </div>
        <Categories
          basePath={getShortLink(categorie.name)}
          categories={categorie.subCategories}
        />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  let categories = await getAllCategoriesAsync();

  return {
    paths: categories.map((categorie) => `/${getShortLink(categorie.name)}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { categorie } }) {
  let categories = await getAllCategoriesAsync();

  return {
    props: {
      categories,
      categorie: categories.find(
        (_categorie) => getShortLink(_categorie.name) === categorie
      ),
    },
  };
}

export default Product;
