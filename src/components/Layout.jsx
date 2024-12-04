import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen  mx-auto flex flex-col">
      {/* Header and main content */}
      <div className="flex-grow px-5 sm:px-10  ">
        <NavBar />
        <main>{children}</main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
