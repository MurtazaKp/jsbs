import BackToTop from "./backToTop";
import HomeTechnologyPage from "./home/(home)";

export const metadata = {
  title: "Home | JSBS",
  description:
    "Welcome to al Jamea tus Saifiyah Business School (JSBS). We are dedicated to fostering a new generation of ethical business leaders by blending modern education with timeless Fatemi principles. Explore our B.Sc. and Certificate programs.",
  keywords: [
    "JSBS",
    "business school",
    "ethical leadership",
    "Fatemi traditions",
    "B.Sc. in Business Administration",
    "business education",
    "apply to business school",
  ],

  authors: [{ name: "JSBS", url: "https://jsbs.jameasaifiyah.edu/" }],
  publisher: "JSBS",

  alternates: {
    canonical: "https://jsbs.jameasaifiyah.edu/",
  },

  openGraph: {
    title: "Home | JSBS",
    description:
      "Discover how we blend modern business education with timeless principles to create the leaders of tomorrow. Explore our programs and apply today.",
    url: "https://jsbs.jameasaifiyah.edu/",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "The main campus of al Jamea tus Saifiyah Business School.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home | JSBS",
    description:
      "Fostering a new generation of ethical business leaders through a unique blend of modern education and Fatemi principles.",
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

export default function Home() {
  return (
    <main>
      <HomeTechnologyPage />
      <BackToTop />
    </main>
  );
}
