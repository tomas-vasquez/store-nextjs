import Banner from "../components/Banner";
import Products from "../components/Products";

// Firebase
import firebase from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import "firebase/firestore";

export default function Home({ products }) {
  return (
    <>
      <Banner />
      <Products products={products} />
    </>
  );
}

export async function getStaticProps() {
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
      products,
    },
  };
}
