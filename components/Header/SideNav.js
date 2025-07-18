"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo/logo.svg";
import { useAppContext } from "@/context/Context";

const SideNav = () => {
  const { mobile, setMobile } = useAppContext();
  const sideNavRef = useRef(null);

  const sections = [
    { id: "/about-us", label: "About Us" },
    { id: "/academic-programs", label: "Academic Programs" },
    { id: "/faculty-research", label: "Faculty & Research" },
    { id: "/student-life", label: "Student Life" },
    { id: "/campus-facilities", label: "Campus Facilities" },
    { id: "/graduate-profile", label: "Graduate's Profile" },
    { id: "/fees-structure", label: "Fee Structure" },
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobile]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (!mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <>
      <div
        ref={sideNavRef}
        className={`side-menu ${!mobile ? "side-menu-active" : ""}`}
      >
        <div className="inner-wrapper side-menu-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link onClick={() => setMobile(!mobile)} href="/">
                  <Image
                    src={logo}
                    width={152}
                    height={50}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close" id="btn_sideNavClose">
                <button
                  className="rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>

            <p className="description">
              Aljamea-Tus-Saifiyah Business School offers a unique blend of
              academic rigor and ethical values rooted in its cultural heritage,
              making it an attractive choice for students seeking a holistic
              education.
            </p>

            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <a href="mailto:hello@example.com">
                  <i className="feather-mail"></i>example@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="feather-phone"></i>(302) 555-0107
                </a>
              </li>
            </ul>
          </div>

          <nav className="side-nav w-100 mt--60 mb--80">
            <ul className="navbar-nav">
              {sections.map((sec, i) => (
                <li key={i}>
                  <Link onClick={() => setMobile(!mobile)} href={sec.id}>
                    {sec.label}
                  </Link>
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
    </>
  );
};

export default SideNav;
