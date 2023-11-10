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

export const getAllProductsNotAsync = (firebase, _callback) => {
  const fireStore = firebase.firestore();

  let products = [];

  fireStore.collection("products").onSnapshot((snapshot) => {
    const products = [];
    snapshot.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));

    _callback(products);
  });

  return products;
};

export const addProduct = (firebase, _callback) => {
  const fireStore = firebase.firestore();

  fireStore
    .collection("products")
    .doc()
    .set({
      images: [],
      price: ExchangeTypes.map((type) => {
        return {
          type,
          amount: 0,
        };
      }),
      name: "no-definido",
      shortLink: "no-definido",
      description: "no-definido",
      specs: "no-definido",
    })
    .then(function () {
      Alerts.showSuccess();
    });
};
