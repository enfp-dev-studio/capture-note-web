import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-dark-background dark:text-dark-primary text-primary">
      <div className="container flex-none">
        <AppBar />
      </div>
      <main>{children}</main>
      <div className="container flex-none mx-auto mt-16 md:mt-52">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
