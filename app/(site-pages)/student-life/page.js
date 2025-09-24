import BackToTop from "@/app/backToTop";
import StudentLifePage from "./(student-life)";

export const metadata = {
  title: "Student Life | JSBS",
  description:
    "Discover the vibrant student life at JSBS. Explore a wide range of student clubs, cultural events, and leadership opportunities that promote holistic development alongside academic excellence.",
  keywords: [
    "student life",
    "campus life",
    "student clubs",
    "college events",
    "leadership opportunities",
    "extracurricular activities",
    "JSBS students",
  ],

  authors: [{ name: "JSBS", url: "https://jsbs.jameasaifiyah.edu/" }],
  publisher: "JSBS",

  alternates: {
    canonical: "https://jsbs.jameasaifiyah.edu/student-life",
  },

  openGraph: {
    title: "Experience Vibrant Student Life at JSBS",
    description:
      "From student-led clubs to cultural festivals, see how JSBS offers a rich and balanced campus experience.",
    url: "https://jsbs.jameasaifiyah.edu/student-life",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Students participating in an event at JSBS.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vibrant Student Life at JSBS",
    description:
      "Explore the clubs, events, and opportunities that make our campus life dynamic and enriching.",
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

const StudentLifeLayout = () => {
  return (
    <>
      <StudentLifePage />
      <BackToTop />
    </>
  );
};

export default StudentLifeLayout;
