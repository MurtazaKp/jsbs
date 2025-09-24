"use client";

import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

import "../public/scss/styles.scss";
import HeaderStyleTwelve from "@/components/Header/HeaderStyle-Twelve";
import FooterThree from "@/components/Footer/Footer-Three";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import SideNav from "@/components/Header/SideNav";
import Separator from "@/components/site-components/Separator";
import Whatsapp from "@/components/site-components/Whatapp/whatsapp";

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "al Jamea tus Saifiyah Business School",
    alternateName: "JSBS",
    url: "https://jsbs.jameasaifiyah.edu/",
    logo: "https://jsbs.jameasaifiyah.edu/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 98765 43210",
      contactType: "Admissions Office",
      email: "info@jsbs.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Street Address",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/your-profile",
      "https://www.twitter.com/JSBS_handle",
      "https://www.linkedin.com/school/your-profile",
    ],
  };

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <Provider store={Store}>
        <Context>
          <body className="" suppressHydrationWarning={true}>
            <HeaderStyleTwelve />
            <SideNav />
            {children}
            <Separator />
            <FooterThree />
          </body>
        </Context>
      </Provider>
    </html>
  );
}
