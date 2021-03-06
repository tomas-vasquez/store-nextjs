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

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//firebase
import firebaseConfig from "../firebaseConfig";
import { FirebaseAppProvider } from "reactfire";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import AuthWrapper from "../components/admin/AuthWrapper";
import Login from "../components/admin/Login";

function MyApp({ Component, pageProps }) {
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
          <Navbar />
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

export default MyApp;
