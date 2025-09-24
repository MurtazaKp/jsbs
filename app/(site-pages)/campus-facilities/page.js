import BackToTop from "@/app/backToTop";
import CampusFacilitiesPage from "./(campus-facilities)";

import { Metadata } from "next";

export const metadata = {
  title: "Campus Facilities: Modern Classrooms, Library & More | JSBS",
  description:
    "Explore the state-of-the-art campus facilities at JSBS, including modern classrooms, a comprehensive library, seminar halls, student accommodations, and recreational spaces designed for a holistic learning experience.",
  keywords: [
    "JSBS campus",
    "college facilities",
    "student accommodation",
    "modern classrooms",
    "university library",
    "campus life",
    "student resources",
  ],

  authors: [{ name: "JSBS", url: "https://jsbs.jameasaifiyah.edu/" }],
  publisher: "JSBS",

  alternates: {
    canonical: "https://jsbs.jameasaifiyah.edu/campus-facilities",
  },

  openGraph: {
    title: "Explore the JSBS Campus: State-of-the-Art Facilities",
    description:
      "Discover our modern learning environment, from fully-equipped classrooms and a vast library to comfortable student housing.",
    url: "https://jsbs.jameasaifiyah.edu/campus-facilities",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "A collage of campus facilities at JSBS, including the library and a classroom.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Campus Facilities at JSBS",
    description:
      "A look at the modern facilities that support our students academic and personal growth.",
    site: "@JSBS_handle",
    creator: "@JSBS_handle",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const CampusFacilitiesLayout = () => {
  return (
    <>
      <CampusFacilitiesPage />
      <BackToTop />
    </>
  );
};

export default CampusFacilitiesLayout;
