import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
