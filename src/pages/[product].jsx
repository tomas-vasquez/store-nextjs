import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { products } from "../../site.data";
import SingleProduct from "../components/SingleProduct";

// Firebase
import firebase from "firebase/app";
import firebaseConfig from "../firebaseConfig";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const Product = function ({ product }) {
  const route = useRouter();
  return (
    <div className="content">
      <nav className="breadcrumb container">
        <Link href="/">
          <a className="breadcrumb-item">Inicio</a>
        </Link>

        <span className="breadcrumb-item active">{route.query.product}</span>
      </nav>

      <SingleProduct product={product} />
    </div>
  );
};

export async function getStaticPaths() {
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  db.collection("products")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });

  return {
    paths: products.map((product) => `/${product.shortLink}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { product } }) {
  return {
    props: {
      product: products.find((_product) => _product.shortLink === product),
    },
  };
}

export default Product;
