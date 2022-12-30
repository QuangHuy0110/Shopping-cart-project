import { Fragment } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main style={{ marginTop: "110px", marginBottom: "100px" }}>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
