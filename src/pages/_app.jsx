import Head from "next/head";

// import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
// import "../assets/css/stylesheet.css";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/admin/Navbar";
import Footer from "../components/Footer";

//redux
import { Provider } from "react-redux";
import store from "../store";

//nprogress module
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      {router.route.includes("admin") ? (
        <>
          <Topbar />
          <AdminNavbar />
          <div className="content">
            <div class="container">
              <div class="thickline mb-3"></div>
            </div>
            <Component {...pageProps} />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Topbar />
          <Navbar />
          <div className="content">
            <div class="container">
              <div class="thickline mb-3"></div>
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
