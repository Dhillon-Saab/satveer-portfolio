"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

function MainLayout({ children }) {
  const [load, onLoad] = useState(false);

  useEffect(() => {
    onLoad(true);
  }, []);

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
