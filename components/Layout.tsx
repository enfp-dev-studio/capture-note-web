import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-dark-background text-dark-primary"
      style={{
        fontFamily: inter.style.fontFamily,
      }}
    >
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
