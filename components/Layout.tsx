import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:container min-h-screen px-10 md:mx-auto dark:bg-dark-background bg-background dark:text-dark-primary text-primary">
      <div className="container flex-none">
        <AppBar />
      </div>
      <main className="container md:max-w-5xl mx-auto grow">{children}</main>
      <div className="container flex-none md:max-w-5xl mx-auto mt-16 md:mt-52">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
