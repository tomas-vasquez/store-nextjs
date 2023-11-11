import firebase from "../myFirebase";
import { collection, getDocs } from "firebase/firestore";

//products

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

  fireStore.collection("products").onSnapshot((snapshot) => {
    const products = [];
    snapshot.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));
    _callback(products);
  });
};

export const addProduct = (firebase, newProduct, _callback) => {
  const fireStore = firebase.firestore();
  fireStore.collection("products").doc().set(newProduct).then(_callback);
};

export const deleteProduct = (firebase, productId, _callback) => {
  const fireStore = firebase.firestore();
  fireStore.collection("products").doc(productId).delete().then(_callback);
};

//categories
export const getAllCategoriesAsync = async () => {
  const db = firebase.firestore();
  let categories = [];

  const querySnapshot = await getDocs(collection(db, "categories"));
  querySnapshot.forEach((doc) => {
    const categorie = doc.data();
    categories.push(categorie);
  });

  return categories;
};

export const getAllCategories = (firebase, _callback) => {
  const fireStore = firebase.firestore();

  fireStore.collection("categories").onSnapshot((snapshot) => {
    const categories = [];
    snapshot.forEach((doc) => categories.push({ ...doc.data(), id: doc.id }));
    _callback(categories);
  });
};

export const addCategorie = (firebase, newCategorie, _callback) => {
  const fireStore = firebase.firestore();
  fireStore.collection("categories").doc().set(newCategorie).then(_callback);
};

export const deleteCategorie = (firebase, categorieId, _callback) => {
  const fireStore = firebase.firestore();
  fireStore.collection("categories").doc(categorieId).delete().then(_callback);
};

export const updateCategorie = (firebase, updatedCategorie, _callback) => {
  const fireStore = firebase.firestore();

  fireStore
    .collection("categories")
    .doc(updatedCategorie.id)
    .update(updatedCategorie)
    .then(_callback);
};

//storage

export const uploadFile = (firebase, file, nameFolder, _callback) => {
  const storage = firebase.storage();
  var fileName = new Date().getMilliseconds() + "-" + file.name;

  const newRef = storage.ref(nameFolder).child(fileName);

  newRef.put(file).then(() => {
    newRef.getDownloadURL().then((FileUrl) => {
      _callback({ fileName, FileUrl });
    });
  });
};

export const deleteFile = (firebase, imageId, _callback) => {
  const storage = firebase.storage();
  const newRef = storage.ref().child(imageId);
  newRef.delete().then(_callback);
};

//utils

export const getShortLink = (link) => {
  let newString = link;
  newString = newString.toLowerCase();
  newString = newString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  newString = newString.replace(/ /g, "_");
  newString = newString.replace(/\?/g, "");
  newString = newString.replace(/¿/g, "");
  return newString;
};
