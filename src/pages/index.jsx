import Banner from "../components/Banner";
import Products from "../components/Products";

// // Firebase
// import firebase from "firebase/app";
// import firebaseConfig from "../firebaseConfig";
import "firebase/firestore";

// Firebase
import app from "../myFirebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home({ products }) {
  return (
    <>
      <Banner />
      {/* <Products products={products} /> */}
      <>{JSON.stringify(products)}</>
    </>
  );
}

export async function getStaticProps() {
  const db = app.firestore();

  let products = [];

  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    products.push(product);
  });

  console.log(products)

  return {
    props: {
      products,
    },
  };
}
