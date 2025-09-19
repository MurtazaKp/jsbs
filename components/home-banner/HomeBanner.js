"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import SingleCourseProp from "../UniversityOfLondon/UniversityOfLondon";

import languageClub from "../../public/images/home-page.jpg";

import SingleCourseData from "../../data/pages/11-singleCourse.json";

import TabData from "../../data/elements/advanceTab.json";
import ModernUniversityBanner from "../19-modern-university/ModernUniversity-Banner";
import AccordionThree from "../Accordions/Accordian";
const HomeTechnology = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <div className=" header-transperent-spacer bg-light-orange ">
        <ModernUniversityBanner />
      </div>
      <div className=" rbt-section-gap ">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 justify-content-between align-items-start">
              <div className="col-12">
                <h1> Aljamea-tus-Saifiyah Business School</h1>
              </div>
              <div className="col-xl-6 order-2 order-lg-2">
                <div className="content">
                  <div className="inner">
                    <div className="content">
                      <p className="description  mt--10 text-justify">
                        His Holiness Dr. Syedna Mufaddal Saifuddin TUS bestowed
                        Raza Mubarak for Aljamea-tus-Saifiyah Business School
                        (JSBS) in 1440/2018. JSBS integrates contemporary views
                        along with preserving the sanctity and wisdom of
                        tradition. As the first step, “SPECIALISATION IN
                        BUSINESS STUDIES” (AL-TAKHASSUS FI AL-BUYU) was
                        introduced in Aljamea-tus-Saifiyah. The Business School
                        is an institution designed to provide quality education
                        in business and management disciplines, rooted in the
                        principles and teachings of the Islamic ethos.
                      </p>

                      <p className="description  mt--10 text-justify">
                        As part of the larger Aljamea-tus-Saifiyah educational
                        framework, which offers a range of programs aimed at
                        holistic development, this business school emphasizes
                        both theoretical knowledge and practical application in
                        the world of business. The curriculum often integrates
                        core business concepts such as finance, marketing,
                        management, and entrepreneurship, with ethical
                        considerations and a strong focus on social
                        responsibility. This approach aims to prepare students
                        not just for professional success, but also to be
                        conscientious leaders who contribute positively to
                        society.
                      </p>

                      <p className="description mt--10 text-justify">
                        In addition to traditional learning, the school
                        incorporates various hands-on experiences such as
                        internships, industry partnerships, and workshops led by
                        seasoned professionals. This blend of academic rigor and
                        practical exposure ensures that graduates are
                        well-equipped to navigate the complexities of the modern
                        business environment, while also upholding the values of
                        integrity and service. Overall, Aljamea-tus-Saifiyah
                        Business School seeks to cultivate the next generation
                        of business leaders who are knowledgeable, ethical, and
                        committed to making a meaningful impact in their
                        communities and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 order-1 order-lg-1 sticky-xl-top  top-60  ">
                <div className="thumbnail-wrapper">
                  <div className="thumbnail ">
                    <Image
                      className="rounded-4 "
                      src={languageClub}
                      width={597}
                      height={479}
                      alt="Education Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-split-area bg-light-orange  rbt-section-gap overflow-hidden">
        <div className="wrapper">
          <AccordionThree />
        </div>
      </div>

      <div
        className="rbt-course-banner-area rbt-section-gap bg-color-white"
        id="guideline"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="section-title text-center mb--60"></div>
                <div className="row g-5">
                  <SingleCourseProp courseData={SingleCourseData.certificate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTechnology;
