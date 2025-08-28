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
    { id: "/academic-programs", label: "Academic Programs" },
    { id: "/faculty-research", label: "Faculty" },
    { id: "/student-life", label: "Student Life" },
    { id: "/campus-facilities", label: "Campus Facilities" },
    { id: "/research-publication", label: "Research & Publication" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 180);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="rbt-header">
      <div className="rbt-sticky-placeholder"></div>

      <div className={`rbt-header-wrapper ${isSticky ? "rbt-sticky" : ""}`}>
        <div className="container">
          <div className="mainbar-row rbt-navigation-center align-items-center">
            {/* Logo */}
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

            {/* Navigation */}
            <div className="rbt-main-navigation d-none d-xxl-block">
              <nav className="mainmenu-nav onepagenav">
                <ul className="mainmenu">
                  {sections.map((sec, i) => (
                    <li
                      key={i}
                      className={pathname === sec.id ? "current" : ""}
                    >
                      <Link href={sec.id}>{sec.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Trigger */}
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
  );
};

export default HeaderStyleTwelve;
