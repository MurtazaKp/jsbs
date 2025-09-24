import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us)";

export const metadata = {
  title: "About Us | JSBS",
  description:
    "Learn about al Jamea tus Saifiyah Business School (JSBS). Discover our rich history, our mission to foster ethical leaders, and our commitment to academic excellence in business education.",
  keywords: [
    "About JSBS",
    "JSBS mission",
    "JSBS vision",
    "business school history",
    "our story",
    "academic values",
    "ethical leadership",
  ],

  authors: [
    { name: "JSBS", url: "https://jameasaifiyah-bussiness-school.vercel.app/" },
  ],
  publisher: "JSBS",

  alternates: {
    canonical: "https://jameasaifiyah-bussiness-school.vercel.app/about-us",
  },

  openGraph: {
    title: "Discover Our Story | al Jamea tus Saifiyah Business School",
    description:
      "Explore the mission, vision, and values that define JSBS and our approach to business education.",
    url: "https://jameasaifiyah-bussiness-school.vercel.app/about-us",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "The main campus of al Jamea tus Saifiyah Business School",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About JSBS: Our Mission, Vision & History",
    description:
      "Learn about our commitment to fostering ethical leaders and academic excellence.",
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

const AboutUsLayout = () => {
  return (
    <>
      <AboutUsPage />
      <BackToTop />
    </>
  );
};

export default AboutUsLayout;
