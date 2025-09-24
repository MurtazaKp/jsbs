import React from "react";
import EventsLayout from "../(events)";

export const metadata = {
  title: "Research Methodology Workshop | JSBS Events",
  description:
    "Join our comprehensive Research Methodology Workshop for Jamea students. This event covers fundamentals, data analysis tools like SPSS & Power BI, research ethics, and report writing to enhance your academic skills.",
  keywords: [
    "research methodology",
    "academic workshop",
    "data analysis",
    "SPSS training",
    "Power BI",
    "research ethics",
    "report writing",
    "JSBS workshop",
  ],

  authors: [{ name: "JSBS", url: "https://jsbs.jameasaifiyah.edu/" }],
  publisher: "JSBS",

  alternates: {
    canonical:
      "https://jsbs.jameasaifiyah.edu/events/research-methodology-course",
  },

  openGraph: {
    title: "Intensive Workshop on Research Methodology | JSBS",
    description:
      "Equipping Jamea students with essential skills in research, from formulating problems to data analysis and ethical publishing.",
    url: "https://jsbs.jameasaifiyah.edu/events/research-methodology-course",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "A graphic for the JSBS Research Methodology Workshop.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Research Methodology Workshop at JSBS",
    description:
      "A hands-on workshop covering everything from research fundamentals to advanced data analysis tools.",
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

const EventsPage = () => {
  return <EventsLayout />;
};

export default EventsPage;
