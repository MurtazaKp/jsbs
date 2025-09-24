import BackToTop from "@/app/backToTop";
import FacultyResearchPage from "./(faculty-research)";

export const metadata = {
  title: "Faculty | JSBS",
  description:
    "Meet the distinguished faculty at al Jamea tus Saifiyah Business School. Learn about our professors, their academic backgrounds, and their expertise in various business disciplines.",
  keywords: [
    "JSBS faculty",
    "business school professors",
    "academic staff",
    "faculty profiles",
    "business educators",
    "meet the faculty",
  ],

  authors: [
    { name: "JSBS", url: "https://jameasaifiyah-bussiness-school.vercel.app/" },
  ],
  publisher: "JSBS",

  alternates: {
    canonical:
      "https://jameasaifiyah-bussiness-school.vercel.app/faculty-research",
  },

  openGraph: {
    title: "Meet the Expert Faculty at JSBS",
    description:
      "Discover the academic leaders and distinguished professors who guide our students and define the academic excellence at JSBS.",
    url: "https://jameasaifiyah-bussiness-school.vercel.app/faculty-research",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "A collage of the faculty members at JSBS.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Faculty | JSBS",
    description:
      "Learn about the professors shaping the future of business education at JSBS.",
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

const FacultyLayout = () => {
  return (
    <>
      <FacultyResearchPage />
      <BackToTop />
    </>
  );
};

export default FacultyLayout;
