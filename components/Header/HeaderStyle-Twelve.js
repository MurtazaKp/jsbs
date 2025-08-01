"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

import logo from "../../public/images/logo/logo.svg";
import { useAppContext } from "@/context/Context";

const HeaderStyleTwelve = () => {
  const { mobile, setMobile, isLogin, setIsLogin } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const pathname = usePathname();
  const router = useRouter();

  const hideLinks = pathname === "/login";

  const sections = [
    { id: "/about-us", label: "About Us", protected: false },
    { id: "/academic-programs", label: "Academic Programs", protected: false },
    { id: "/faculty-research", label: "Faculty & Research", protected: false },
    { id: "/student-life", label: "Student Life", protected: false },
    { id: "/campus-facilities", label: "Campus Facilities", protected: true },
    { id: "/graduate-profile", label: "Graduate's Profile", protected: true },
    { id: "/fees-structure", label: "Fee Structure", protected: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsSticky(scrolled > 180);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    Cookies.remove("isLogin");
    setIsLogin(false);
    Cookies.remove("isLogin");
    router.push("/");
  };

  return (
    <>
      <header className="rbt-header">
        <div className="rbt-sticky-placeholder"></div>

        <div className={`rbt-header-wrapper ${isSticky ? "rbt-sticky" : ""}`}>
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              {/* Left: Logo */}
              <div className="header-left py-2">
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

              {/* Center: Navigation */}
              {!hideLinks && (
                <div className="rbt-main-navigation d-none d-xxl-block">
                  <nav className="mainmenu-nav onepagenav">
                    <ul className="mainmenu">
                      {sections.map((sec, i) => {
                        if (sec.protected && !isLogin) return null;
                        return (
                          <li
                            className={
                              currentSection === sec.id ? "current" : ""
                            }
                            key={i}
                          >
                            <Link href={sec.id}>{sec.label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Right: Login + Mobile Menu */}
              <div className="d-flex gap-3">
                {!hideLinks &&
                  (isLogin ? (
                    <button
                      onClick={handleLogout}
                      className="text-orange has-small-font-size bg-transparent border-0"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      className="text-orange has-small-font-size"
                      href="/login"
                    >
                      Login
                    </Link>
                  ))}
                {!hideLinks && (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderStyleTwelve;
