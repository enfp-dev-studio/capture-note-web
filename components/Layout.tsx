import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { Inter } from "@next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-dark-background text-dark-primary"
      style={{
        fontFamily: inter.style.fontFamily,
      }}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MKXLB8FSDV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MKXLB8FSDV');
        `}
      </Script>
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
