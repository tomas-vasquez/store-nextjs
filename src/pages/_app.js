// import "../styles/globals.css";

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/stylesheet.css";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
