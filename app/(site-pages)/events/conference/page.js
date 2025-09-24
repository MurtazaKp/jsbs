import React from "react";
import EventsLayout from "../(events)";
import ConferenceLayout from "../(conference)";

export const metadata = {
  title: "Conference | JSBS",
  description:
    "Join our conference, 'Learning to Lead: Bridging Education and Business,' organized by JSBS, Burhani College, and EDII. Explore topics like innovation, digital business, and the future of education.",
  keywords: [
    "business conference",
    "leadership event",
    "innovation and entrepreneurship",
    "digital business",
    "education and business",
    "JSBS events",
    "EDII conference",
  ],

  authors: [{ name: "JSBS", url: "https://jsbs.jameasaifiyah.edu/" }],
  publisher: "JSBS",

  alternates: {
    canonical: "https://jsbs.jameasaifiyah.edu/events/conference",
  },

  openGraph: {
    title: "JSBS Conference: Learning to Lead, Bridging Education and Business",
    description:
      "A collaborative conference exploring the synergy between education and industry, focusing on leadership, innovation, and digital transformation.",
    url: "https://jsbs.jameasaifiyah.edu/events/conference",
    siteName: "JSBS",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo for the Learning to Lead conference.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Conference: Learning to Lead | JSBS",
    description:
      "Join experts and academics to discuss innovation, digital business, and the future of leadership and education.",
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

const ConferencePage = () => {
  return <ConferenceLayout />;
};

export default ConferencePage;
