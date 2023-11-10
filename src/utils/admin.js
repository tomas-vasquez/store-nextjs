import firebase from "../myFirebase";
import { collection, getDocs } from "firebase/firestore";

export const getAllCategories = async () => {
  const db = firebase.firestore();
  let categories = [];

  const querySnapshot = await getDocs(collection(db, "categories"));
  querySnapshot.forEach((doc) => {
    const categorie = doc.data();
    categories.push(categorie);
  });

  return categories;
};

export const addCategorie = async () => {};
export const deleteCategorie = async () => {};
export const editCategorie = async () => {};
