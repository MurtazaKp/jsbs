import BackToTop from "@/app/backToTop";
import AcademicProgramsPage from "./(research-publication)";
import ResearchPublicationPage from "./(research-publication)";

export const metadata = {
  title: "Faculty Research & Publications | JSBS",
  description:
    "Explore the scholarly articles, case studies, and publications by the faculty at al Jamea tus Saifiyah Business School. Discover our contributions to academic and industry knowledge.",
  keywords: [
    "faculty publications",
    "academic research",
    "business case studies",
    "scholarly articles",
    "JSBS research",
    "faculty papers",
  ],

  authors: [{ name: "JSBS", url: "https://jsbs.jameasaifiyah.edu/" }],
  publisher: "JSBS",

  alternates: {
    canonical: "https://jsbs.jameasaifiyah.edu/research-publication",
  },

  openGraph: {
    title: "Explore Faculty Research & Publications | JSBS",
    description:
      "Browse the collection of academic articles, case studies, and publications from our distinguished faculty.",
    url: "https://jsbs.jameasaifiyah.edu/research-publication",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "A collection of research papers and publications.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Faculty Research & Publications at JSBS",
    description:
      "Discover the scholarly contributions and published works of our expert faculty.",
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

const ResearchPublicationLayout = () => {
  return (
    <>
      <ResearchPublicationPage />
      <BackToTop />
    </>
  );
};

export default ResearchPublicationLayout;
