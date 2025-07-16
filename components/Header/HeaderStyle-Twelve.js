"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import logo from "../../public/images/logo/logo.svg";
import { useAppContext } from "@/context/Context";
// import DarkSwitch from "./dark-switch";

const HeaderStyleTwelve = () => {
  const { mobile, setMobile } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const sections = [
    { id: "/about-us", label: "About Us" },
    { id: "/academic-programs", label: "Academic Programs" },
    { id: "/faculty-research", label: "Faculty & Research" },
    { id: "/student-life", label: "Student Life" },
    { id: "/campus-facilities", label: "Campus Facilities" },
    { id: "/graduate-profile", label: "Graduate's Profile" },
    { id: "/fees-structure", label: "Fee Structure" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} /> */}
      <header className="rbt-header">
        {/* <HeaderTopBar /> */}

        <div className="rbt-sticky-placeholder"></div>

        <div className={`rbt-header-wrapper ${isSticky ? "rbt-sticky" : ""}`}>
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={152}
                      height={50}
                      alt="Education Logo Images"
                    />
                  </Link>
                </div>
              </div>

              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav onepagenav">
                  <ul className="mainmenu">
                    {sections.map((sec, i) => (
                      <li
                        className={currentSection === sec.id ? "current" : ""}
                        key={i}
                      >
                        <Link href={sec.id}>{sec.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="header-right ">
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
