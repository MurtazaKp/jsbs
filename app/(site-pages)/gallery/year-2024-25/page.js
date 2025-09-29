import BackToTop from "@/app/backToTop";

import ImageGallaryPage from ".";

export const metadata = {
  title: "Gallery | JSBS",
  description:
    "Explore the vibrant student life at JSBS through our official image gallery. Discover photos from campus events, academic achievements, cultural festivals, and daily life.",
  keywords: [
    "JSBS",
    "JSBS gallery",
    "student life",
    "campus events",
    "college photos",
    "university gallery",
    "student activities",
  ],

  authors: [{ name: "JSBS", url: "https://jsbs.jameasaifiyah.edu/" }],
  publisher: "JSBS",

  alternates: {
    canonical: "https://jsbs.jameasaifiyah.edu/gallery/year-2024-25",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Image Gallery (2024-25): Student Life at JSBS",
    description:
      "A visual journey through the events, culture, and student life at JSBS.",
    url: "https://jsbs.jameasaifiyah.edu/gallery/year-2024-25",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "A collage of photos showing student life at JSBS",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Image Gallery (2025-26): Student Life at JSBS",
    description:
      "Browse photos from campus events, festivals, and more at JSBS.",
    site: "@JSBS_handle",
    creator: "@JSBS_handle",
    images: ["/images/logo.png"],
  },
};

const ImageGallaryLayout = () => {
  return (
    <>
      <ImageGallaryPage />
      <BackToTop />
    </>
  );
};

export default ImageGallaryLayout;
