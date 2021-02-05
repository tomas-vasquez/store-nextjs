import "../assets/css/style.css";
import { Suspense } from "react";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/admin/Navbar";
import Footer from "../components/Footer";
import AdminFooter from "../components/admin/Footer";

//redux
import { Provider } from "react-redux";
import store from "../store";

//nprogress module
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //styles of nprogress

// Firebase

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//firebase
import firebase from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { FirebaseAppProvider } from "reactfire";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import AuthWrapper from "../components/admin/AuthWrapper";
import Login from "../components/admin/Login";

function MyApp({ Component, pageProps, products }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      {router.route.includes("admin") ? (
        <div>
          <Topbar />
          <AdminNavbar />
          <div className="content">
            <div className="container">
              <div className="thickline mb-3"></div>
            </div>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
              <AuthWrapper fallback={<Login />}>
                <Component {...pageProps} />
              </AuthWrapper>
            </FirebaseAppProvider>
          </div>
          <AdminFooter />
        </div>
      ) : (
        <>
          <Topbar />
          <Navbar products={products} />
          <div className="content">
            <div className="container">
              <div className="thickline mb-3"></div>
            </div>
            <Component {...pageProps} />
          </div>
          <Footer />
        </>
      )}
    </Provider>
  );
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

export default MyApp;
