"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo/logo.svg";
import { useAppContext } from "@/context/Context";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const { mobile, setMobile } = useAppContext();
  const sideNavRef = useRef(null);
  const pathname = usePathname();

  const sections = [
    { id: "/about-us", label: "About Us" },
    {
      id: "/academic-programs",
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
    { id: "/research-publication", label: "Research & Publication" },
    {
      id: "/events/rsch-meth-course",
      label: "Events",
      children: [
        { id: "/events/rsch-meth-course", label: "Rsch Meth Course" },
        {
          id: "/JSBSConference.pdf",
          label: "Conference",
        },
      ],
    },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target) &&
        !mobile
      ) {
        setMobile(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobile]);

  // Determine if section should be expanded based on pathname
  const isSectionActive = (sec) => {
    if (pathname === sec.id) return true;
    if (sec.children) {
      return sec.children.some((child) => pathname === child.id);
    }
    return false;
  };

  return (
    <div
      ref={sideNavRef}
      className={`side-menu ${!mobile ? "side-menu-active" : ""}`}
    >
      <div className="inner-wrapper side-menu-wrapper">
        <div className="inner-top">
          <div className="content d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link onClick={() => setMobile(!mobile)} href="/">
                <Image src={logo} width={152} height={50} alt="Logo" />
              </Link>
            </div>
            <button
              className="btn-close"
              onClick={() => setMobile(!mobile)}
            ></button>
          </div>
          <p className="description">
            Aljamea-Tus-Saifiyah Business School offers a unique blend of
            academic rigor and ethical values rooted in its cultural heritage.
          </p>
        </div>

        <nav className="side-nav w-100 mt-3">
          <ul className="navbar-nav">
            {sections.map((sec, i) => (
              <li
                key={i}
                className={`nav-item ${
                  isSectionActive(sec) ? "active-parent" : ""
                }`}
              >
                {sec.children ? (
                  <>
                    <a
                      className="nav-link d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      href={`#collapse-${i}`}
                      role="button"
                      aria-expanded={isSectionActive(sec) ? "true" : "false"}
                      aria-controls={`collapse-${i}`}
                    >
                      {sec.label}
                      <i
                        className={`feather-chevron-${
                          isSectionActive(sec) ? "up" : "down"
                        } ms-2`}
                      ></i>
                    </a>
                    <div
                      className={`collapse ${
                        isSectionActive(sec) ? "show" : ""
                      }`}
                      id={`collapse-${i}`}
                    >
                      <ul className="navbar-nav ms-3">
                        {sec.children.map((child, j) => (
                          <li key={j} className="nav-item">
                            {child.id.endsWith(".pdf") ? (
                              <a
                                className="nav-link"
                                href={child.id}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobile(true)}
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                className={`nav-link ${
                                  pathname === child.id ? "text-primary" : ""
                                }`}
                                onClick={() => setMobile(true)}
                                href={child.id}
                              >
                                {child.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    className={`nav-link ${
                      pathname === sec.id ? "text-primary" : ""
                    }`}
                    onClick={() => setMobile(true)}
                    href={sec.id}
                  >
                    {sec.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="social-share-wrapper">
          <span className="rbt-short-title d-block">Find With Us</span>
          <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
            <li>
              <a href="https://www.facebook.com/">
                <i className="feather-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="feather-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="feather-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkdin.com/">
                <i className="feather-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
