import "../assets/scss/default.scss";
import "react-autocomplete-input/dist/bundle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Topbar from "../components/common/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/common/Footer";
import AdminFooter from "../components/admin/Footer";
import Head from "next/head";

//redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import {
  setCurrentUser,
  deleteCurrentUser,
} from "../store/slices/settingSlice";

//nprogress module
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //styles of nprogress

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//firebase
import firebase from "../myFirebase";
import FirebaseContext from "../context/FirebaseContext";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import AuthWrapper from "../components/admin/AuthWrapper";
import Login from "../components/admin/Login";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      var user = firebase.auth().currentUser;
      if (user) {
        const { uid, displayName, photoURL } = user._delegate;
        store.dispatch(setCurrentUser({ uid, displayName, photoURL }));
      } else {
        store.dispatch(deleteCurrentUser());
      }
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <FirebaseContext.Provider value={firebase}>
        <ReduxProvider store={store}>
          <Topbar />
          {router.route.includes("admin") ? (
            <div>
              {/* <AdminNavbar /> */}
              <div className="content">
                <div className="container">
                  <div className="thickline mb-3"></div>
                </div>
                <AuthWrapper fallback={<Login />}>
                  <Component {...pageProps} />
                </AuthWrapper>
              </div>
              <AdminFooter />
            </div>
          ) : (
            <>
              <div className="container">
                <Navbar {...pageProps} />
                <div className="content">
                  <div className="container">
                    <div className="thickline mb-3"></div>
                  </div>
                  <Component {...pageProps} />
                </div>
              </div>
              <Footer />
            </>
          )}
        </ReduxProvider>
      </FirebaseContext.Provider>
    </>
  );
}

export default MyApp;
