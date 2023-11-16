require("dotenv").config();
fs = require("fs");

// Requiere los módulos necesarios de Firebase
var firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Inicializa la aplicación Firebase
firebase.initializeApp(firebaseConfig);
var fireStore = firebase.firestore();

console.log("✓ loading data from Firebase....");

//obtenemos todos los productos
fireStore.collection("products").onSnapshot((snapshot) => {
  let products = [];

  snapshot.forEach((doc) => products.push({ ...doc.data(), id: doc.id }));

  //obtenemos todas las categorias
  fireStore.collection("categories").onSnapshot((snapshot) => {
    let categories = [];
    snapshot.forEach((doc) => categories.push({ ...doc.data(), id: doc.id }));

    //guardamos todo en un archivo JSON
    const jsonUri = "mainData.json";
    const NewData = JSON.stringify({ products, categories }, null, 4);
    fs.writeFileSync(jsonUri, NewData);
    console.log("✓ data saved in " + jsonUri + "");

    process.exit(0);
  });
});
