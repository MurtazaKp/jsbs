"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import logo from "../../public/images/logo.png";
import { useAppContext } from "@/context/Context";

const HeaderStyleTwelve = () => {
  const { mobile, setMobile } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const sections = [
    { id: "/about-us", label: "About Us" },
    {
      id: "/academic-programs/degree-course",
      label: "Academic Programs",
      children: [
        { id: "/academic-programs/degree-course", label: "Degree Course" },
        {
          id: "/academic-programs/certificate-course",
          label: "Certification Course",
        },
      ],
    },
    { id: "/faculty-research", label: "Faculty" },
    { id: "/student-life", label: "Student Life" },
    { id: "/campus-facilities", label: "Campus Facilities" },
    { id: "/research-publication", label: "Research & Publications" },
    {
      id: "/events/research-methodology-course",
      label: "Events",
      children: [
        {
          id: "/events/research-methodology-course",
          label: "Research Methodology Course",
        },
        {
          id: "/events/conference",
          label: "Conference",
        },
      ],
    },
    {
      id: "/gallery/year-2025-26",
      label: "Gallery",
      children: [{ id: "/gallery/year-2025-26", label: "Year 2025-26" }],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced active section checking with better logic
  const isActiveSection = (section) => {
    // Exact match for the main section
    if (pathname === section.id) {
      console.log(`Exact match found for: ${section.id}`);
      return true;
    }

    // Check if current path starts with section path (for nested routes)
    if (pathname.startsWith(section.id + "/")) {
      console.log(`Path starts with section: ${section.id}`);
      return true;
    }

    // Check children if they exist
    if (section.children) {
      const hasActiveChild = section.children.some((child) => {
        const isActive =
          pathname === child.id || pathname.startsWith(child.id + "/");
        if (isActive) {
          console.log(`Active child found: ${child.id}`);
        }
        return isActive;
      });
      return hasActiveChild;
    }

    return false;
  };

  // Helper function to check if a specific child is active
  const isActiveChild = (childPath) => {
    return pathname === childPath || pathname.startsWith(childPath + "/");
  };

  return (
    <>
      <header className="rbt-header">
        <div className="rbt-sticky-placeholder"></div>

        <div className={`rbt-header-wrapper ${isSticky ? "rbt-sticky" : ""}`}>
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={80}
                      height={80}
                      alt="Education Logo Images"
                    />
                  </Link>
                </div>
              </div>

              <div className="rbt-main-navigation d-none d-xxl-block">
                <nav className="mainmenu-nav onepagenav">
                  <ul className="mainmenu">
                    {sections.map((sec, i) => {
                      const isActive = isActiveSection(sec);

                      return (
                        <li
                          key={i}
                          className={`menu-item ${
                            isActive ? "active-parent" : ""
                          } ${sec.children ? "has-dropdown" : ""}`}
                        >
                          <Link href={sec.id}>
                            {sec.label}
                            {sec.children && (
                              <i className="feather-chevron-down ms-1"></i>
                            )}
                          </Link>

                          {sec.children && (
                            <ul className="submenu">
                              {sec.children.map((child, j) => (
                                <li
                                  key={j}
                                  className={
                                    isActiveChild(child.id)
                                      ? "active-child"
                                      : ""
                                  }
                                >
                                  <Link href={child.id}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                <div
                  className="rbt-offcanvas-trigger"
                  id="rbt-offcanvas-activation"
                  onClick={() => setMobile(!mobile)}
                >
                  <span className="offcanvas-trigger">
                    <span className="offcanvas-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderStyleTwelve;
