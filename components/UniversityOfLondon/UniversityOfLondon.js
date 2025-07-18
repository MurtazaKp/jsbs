import Image from "next/image";
import React from "react";

export default function SingleCourseProp({ courseData, image }) {
  return (
    <>
      <div className="col-lg-12">
        {courseData.map((data, index) => (
          <div
            className="modern-course-features-box bg-dark-blue h-100"
            key={index}
          >
            {data.certificateOne.map((innerData, innerIndex) => (
              <div className="inner" key={innerIndex}>
                <div className="thumbnail">
                  <Image
                    src={image ? innerData.img : innerData.imgTwo}
                    width={604}
                    height={408}
                    alt="Image"
                  />
                </div>
                <div className="content">
                  <span className="rbt-badge-6 bg-orange text-white">
                    About University of London
                  </span>

                  <p className="description has-small-font-size text-white text-justify">
                    The University of London (UOL) is one of the most
                    prestigious and historically significant universities in the
                    United Kingdom and globally. Established in 1836, it was the
                    first university in England to provide degrees to students
                    regardless of their social background or religious beliefs,
                    reflecting its commitment to inclusivity and accessibility
                    in higher education. UOL comprises 17-member institutions,
                    including well-known colleges such as University College
                    London (UCL), King's College London, and the London School
                    of Economics and Political Science (LSE). Each member
                    institution maintains its identity while contributing to the
                    University of London’s wider academic community. The
                    University offers a broad range of undergraduate and
                    postgraduate programs across various disciplines, including
                    humanities, social sciences, law, business, and natural
                    sciences. UOL is particularly recognized for its research
                    output and contributions to various fields. In addition to
                    traditional face-to-face education, UOL also offers a number
                    of distances learning programs, making it accessible to
                    students worldwide. With a diverse student body representing
                    many cultures and nationalities, UOL continues to foster a
                    global educational environment. Overall, the University of
                    London remains committed to innovation, research excellence,
                    and producing graduates who can make significant
                    contributions to society.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="col-lg-6">
        {courseData.map((data, index) => (
          <div
            className="modern-course-features-box bg-orange one-colume-grid h-100"
            key={index}
          >
            {data.certificateTwo.map((innerData, innerIndex) => (
              <div className="inner" key={innerIndex}>
                <div className="thumbnail">
                  <Image
                    src={image ? innerData.img : innerData.imgTwo}
                    width={558}
                    height={397}
                    alt="Image"
                  />
                </div>
                <div className="content">
                  <h2 className="title text-white">
                    {" "}
                    Accreditation of Aljamea-Tus- Saifiyah Business School
                  </h2>
                  <p className="description  text-white text-justify">
                    Aljamea-Tus-Saifiyah is an institution of higher education
                    that was founded in 1810 in Surat, India. It is primarily
                    affiliated with the Dawoodi Bohra community. The institution
                    offers a range of courses in arts, humanities, and Islamic
                    studies.
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="col-lg-6">
        <div className="modern-course-features-box bg-dark-blue grid-content-reverse h-100">
          {courseData.map((data, index) => (
            <div className="inner" key={index}>
              {data.certificateThree.map((innerData, innerIndex) => (
                <div className="content" key={innerIndex}>
                  <h2 className="title text-white mt-2">
                    {" "}
                    Accreditation of Aljamea-Tus- Saifiyah Business School
                  </h2>
                  <p className="description pe-2 text-white text-justify">
                    The University of London (UoL) is a well-established
                    institution with a long history, dating back to its founding
                    in 1836. It comprises several constituent colleges and
                    institutions, each of which may have its own accreditation
                    and recognition. The University of London itself is
                    recognized by several relevant bodies, including UK
                    Government and Education Authorities: As a recognized
                    university in the UK, it is subject to oversight by the UK
                    Quality Assurance Agency for Higher Education (QAA), which
                    ensures standards are maintained across UK institutions.
                    Professional Accreditations: Many of the University of
                    London’s programs are accredited by relevant professional
                    bodies, depending on the field of study. For example,
                    programs in business may be accredited by bodies like the
                    Association of MBAs (AMBA) or the Chartered Institute of
                    Personnel and Development (CIPD).International Recognition:
                    The University of London degrees are recognized globally,
                    and its distance learning programs, in particular, attract
                    students from around the world. The London School of
                    Economics and Political Science (LSE), one of its most
                    renowned constituent colleges, is also highly regarded and
                    holds multiple accreditations related to its specific
                    programs.
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
