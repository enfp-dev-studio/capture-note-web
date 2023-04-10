import React from "react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
// import "../styles/device.min.css";
import "../styles/macbook.css";
import "../styles/frame.min.css";
import Layout from "../components/Layout";
import Script from "next/script";

const DEFAULT_SEO = {
  title: "Capture Note: Quick and easy notes on the screenshot",
  description:
    "Capture Note makes it easy to add notes to visual content, making it the simplest way to organize and remember important information",
  canonical: "https://capture-note.enfpdev.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://capture-note.enfpdev.com",
    title: "Capture Note: Quick and easy notes on the screenshot",
    site_name: "Capture Note",
    images: [
      {
        url: "https://capture-note.enfpdev.com/og-image.webp",
        width: 533,
        height: 320,
        alt: "image",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "google-site-verification",
      content: "8cQSD-YmLYyjhiW6x5AF1ZLRgk9WYcZJOZtldEzHUjM",
    },
  ],
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J1G2H0DF21" //G-MKXLB8FSDV
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J1G2H0DF21');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
