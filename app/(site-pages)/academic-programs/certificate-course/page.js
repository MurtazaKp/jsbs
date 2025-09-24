import BackToTop from "@/app/backToTop";
import AcademicProgramsPage from "../(degree-course)";
import CertificatePage from "../(certificate-course)";

export const metadata = {
  title: "Certificate Course | JSBS",
  description:
    "Join our 11-month certification program, offered in collaboration with EDII, designed for aspiring entrepreneurs and family business leaders. Gain practical skills in business foundations, growth strategies, and specialized management techniques.",
  keywords: [
    "certificate course",
    "entrepreneurship program",
    "family business management",
    "EDII collaboration",
    "startup course",
    "business certification",
    "new venture management",
    "JSBS certificate",
  ],

  authors: [
    { name: "JSBS", url: "https://jameasaifiyah-bussiness-school.vercel.app/" },
  ],
  publisher: "JSBS",

  alternates: {
    canonical:
      "https://jameasaifiyah-bussiness-school.vercel.app/academic-programs/certificate-course",
  },

  openGraph: {
    title: "11-Month Certificate in Entrepreneurship & Family Business | JSBS",
    description:
      "A practical, hands-on certification for the next generation of business leaders, offered in collaboration with EDII.",
    url: "https://jameasaifiyah-bussiness-school.vercel.app/academic-programs/certificate-course",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Entrepreneurs collaborating on a new business venture.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Certificate in Entrepreneurship & Family Business | JSBS",
    description:
      "Learn to launch, manage, and scale a business with our comprehensive 11-month certification course.",
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

const AcademicProgramLayout = () => {
  return (
    <>
      <CertificatePage />
      <BackToTop />
    </>
  );
};

export default AcademicProgramLayout;
