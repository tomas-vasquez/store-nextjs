import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import SingleProduct from "../components/SingleProduct";

// Firebase
import firebase from "firebase/app";
import firebaseConfig from "../firebaseConfig";
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
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  var db = firebase.firestore();

  let products = [];
  const querySnapshot = await db.collection("products").get();

  for (const doc of querySnapshot.docs) {
    const product = doc.data();
    products.push(product);
  }

  return {
    paths: products.map((product) => `/${product.shortLink}`),
    fallback: false,
  };
}

export async function getStaticProps({ params: { product } }) {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  var db = firebase.firestore();

  let products = [];
  const querySnapshot = await db.collection("products").get();

  for (const doc of querySnapshot.docs) {
    const product = doc.data();
    products.push(product);
  }
  return {
    props: {
      product: products.find((_product) => _product.shortLink === product),
    },
  };
}

export default Product;
