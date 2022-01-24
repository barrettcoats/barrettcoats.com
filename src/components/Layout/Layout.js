import "@fontsource/open-sans";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content-area">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
