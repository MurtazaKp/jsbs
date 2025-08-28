import Image from "next/image";
import React from "react";

import imageOne from "@/public/images/course/single-course-02.jpg";
import imageTwo from "@/public/images/course/course-feature-03.jpg";
import Link from "next/link";

export default function SingleCourseProp({ courseData, image }) {
  return (
    <>
      <div className="col-lg-12">
        <div className="modern-course-features-box bg-dark-blue h-100">
          <h3 className="title text-white mt-2 "> University Of London</h3>
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
              To Know more About University of London{" "}
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
    </>
  );
}
