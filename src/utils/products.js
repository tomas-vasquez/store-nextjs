import firebase from "../myFirebase";
import { collection, getDocs } from "firebase/firestore";

export const getAllProducts = async () => {
  const db = firebase.firestore();
  let products = [];

  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    products.push(product);
  });

  return products;
};
