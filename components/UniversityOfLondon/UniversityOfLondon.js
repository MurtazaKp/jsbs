import Image from "next/image";
import React from "react";

import Link from "next/link";

export default function SingleCourseProp({ courseData, image }) {
  return (
    <>
      <div className="col-12">
        <div className="modern-course-features-box bg-dark-blue h-100">
          <div className="position-relative d-inline-block">
            <h3 className="title text-white mt-2">University Of London</h3>
            <span class="badge admission-badge bg-orange">Admissions Open</span>
          </div>
          <div className="inner">
            <div className="">
              <p className="description text-white text-justify">
                The University of London (UOL) is one of the most prestigious
                and historically significant universities in the United Kingdom
                and globally. Established in 1836, it was the first university
                in England to provide degrees to students regardless of their
                social background or religious beliefs, reflecting its
                commitment to inclusivity and accessibility in higher education.
                UOL comprises 17-member institutions, including well-known
                colleges such as University College London (UCL), King's College
                London, and the London School of Economics and Political Science
                (LSE). Each member institution maintains its identity while
                contributing to the University of London’s wider academic
                community.
              </p>
            </div>
          </div>
          <div className="">
            <p className="description  text-white text-justify pt-3">
              The University offers a broad range of undergraduate and
              postgraduate programs across various disciplines, including
              humanities, social sciences, law, business, and natural sciences.
              UOL is particularly recognized for its research output and
              contributions to various fields. In addition to traditional
              face-to-face education, UOL also offers a number of distances
              learning programs, making it accessible to students worldwide.
              With a diverse student body representing many cultures and
              nationalities, UOL continues to foster a global educational
              environment. Overall, the University of London remains committed
              to innovation, research excellence, and producing graduates who
              can make significant contributions to society.
            </p>
            <p className="description  text-white">
              To Know More About University of London{" "}
              <Link
                className="text-orange rbt-btn-link"
                target={"_blank"}
                href={"https://www.london.ac.uk/"}
              >
                Click Here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 edii">
        <div className="modern-course-features-box bg-dark-blue h-100">
          <div className="position-relative d-inline-block">
            <h3 className="title text-white mt-2">
              Entrepreneurship Development Institute of India (EDII)
            </h3>
            <span class="badge admission-badge bg-orange">Admissions Open</span>
          </div>

          <div className="inner">
            <div className="">
              <p className="description text-white text-justify">
                Aljamea-tus-Saifiyah Business School (JSBS) along with
                Entrepreneurship Development Institute of India (EDII) has
                designed this course for aspiring entrepreneurs and family
                business leaders to acquire skills for new venture creation or
                family business growth. The program is structured into three
                semesters & 2 months Internship. The course emphasizes practical
                application and assimilating knowledge through industry
                interactions, case studies, mentorship, and a potential
                internship, focusing on aspects like strategic thinking,
                innovation, governance, and succession planning for family
                businesses
              </p>

              <p className="description  text-white">
                To Know more About Entrepreneurship Development Institute of
                India (EDII)
                <Link
                  className="text-orange rbt-btn-link"
                  target={"_blank"}
                  href={
                    "https://ediindia.org/event/11-months-certificate-program-for-jsbs-burhani-college-mumbai/"
                  }
                >
                  Click Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
