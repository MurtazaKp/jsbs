import BackToTop from "@/app/backToTop";
import AcademicProgramsPage from "../(degree-course)";

export const metadata = {
  title: "B.Sc. in Business Administration Degree | JSBS",
  description:
    "Explore the 3-year Bachelor of Science (B.Sc.) in Business Administration at JSBS. This undergraduate program provides a comprehensive foundation in key business disciplines, preparing students for dynamic careers in the business world.",
  keywords: [
    "B.Sc. in Business Administration",
    "BSc degree",
    "undergraduate business degree",
    "business science",
    "3-year business degree",
    "JSBS degrees",
    "bachelor of science",
  ],

  authors: [
    { name: "JSBS", url: "https://jameasaifiyah-bussiness-school.vercel.app/" },
  ],
  publisher: "JSBS",

  alternates: {
    canonical:
      "https://jameasaifiyah-bussiness-school.vercel.app/academic-programs/degree-course",
  },

  openGraph: {
    title: "Earn Your B.Sc. in Business Administration at JSBS",
    description:
      "Discover our 3-year undergraduate program designed to build a strong foundation in essential business principles.",
    url: "https://jameasaifiyah-bussiness-school.vercel.app/academic-programs/degree-course",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Students studying at al Jamea tus Saifiyah Business School",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "B.Sc. in Business Administration at JSBS",
    description:
      "Learn about our comprehensive 3-year undergraduate degree in Business Administration.",
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

const DegreeCourseLayout = () => {
  return (
    <>
      <AcademicProgramsPage />
      <BackToTop />
    </>
  );
};

export default DegreeCourseLayout;
