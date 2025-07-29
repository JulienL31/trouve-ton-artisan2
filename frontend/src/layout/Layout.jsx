import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">
        <div className="content-wrapper">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
