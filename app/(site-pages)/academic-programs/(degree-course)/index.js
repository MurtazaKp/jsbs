"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import Image from "next/image";
import AdvanceTabFive from "@/components/site-components/AdvanceTab-Five";

const DegreeCoursePage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <div className="rbt-split-area   rbt-section-gap overflow-hidden bg-light-orange">
            <div className="wrapper container">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-coral-opacity">
                  Academic Programs
                </span>
                <h3>3 Year B.Sc. Business Administration</h3>
              </div>

              <div className="rbt-splite-style text-center">
                <img className="col-10 mx-auto" src={"/images/Uol.jpg"} />
              </div>
            </div>
          </div>
          <div className="container  rbt-section-gap">
            <div className="row">
              <div className="col-lg-12">
                <div className="modern-course-features-box bg-dark-blue grid-content-reverse h-100">
                  <div className="inner">
                    <div className="content">
                      <h3 className="title text-white mt-2">
                        {" "}
                        Accreditation of University of London (UoL)
                      </h3>
                      <p className="description pe-2 text-white text-justify">
                        The University of London (UoL) is a well-established
                        institution with a long history, dating back to its
                        founding in 1836. It comprises several constituent
                        colleges and institutions, each of which may have its
                        own accreditation and recognition. The University of
                        London itself is recognized by several relevant bodies,
                        including UK Government and Education Authorities: As a
                        recognized university in the UK, it is subject to
                        oversight by the UK Quality Assurance Agency for Higher
                        Education (QAA), which ensures standards are maintained
                        across UK institutions. Professional Accreditations:
                        Many of the University of London’s programs are
                        accredited by relevant professional bodies, depending on
                        the field of study. For example, programs in business
                        may be accredited by bodies like the Association of MBAs
                        (AMBA) or the Chartered Institute of Personnel and
                        Development (CIPD).International Recognition: The
                        University of London degrees are recognized globally,
                        and its distance learning programs, in particular,
                        attract students from around the world. The London
                        School of Economics and Political Science (LSE), one of
                        its most renowned constituent colleges, is also highly
                        regarded and holds multiple accreditations related to
                        its specific programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rbt-tab-area bg-color-white rbt-section-gap">
            <AdvanceTabFive />
          </div>

          <div className="bg-light-orange  rbt-section-gap ">
            <section className="container py-5">
              <h3 className="mb-4 ">Admissions: General Entry Requirement</h3>

              {/* Jamea Students */}
              <div className="mb-4">
                <div className=" border-0">
                  <div className="">
                    <h5 className=" mb-3 text-orange">Jamea Students</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start description">
                        <i className="feather-check  text-orange me-2 mt-1"></i>
                        <span>Faqeeh Certificate</span>
                      </li>
                      <li className="mb-1 d-flex align-items-start description">
                        <i className="feather-check  text-orange me-2 mt-1"></i>
                        <span>
                          General English Communication Course (IELTS / TOEFL /
                          Duolingo)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Non-Jamea Students */}
              <div>
                <div className="border-0">
                  <div className="card-body">
                    <h5 className=" mb-3 text-orange">Non-Jamea Students</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start description">
                        <i className="feather-check text-orange me-2 mt-1"></i>
                        <span>
                          Year XII – All India Boards (CBSE / CISCE / NIOS):
                          <br />
                          <ul className="mt-2 ps-5 description">
                            <li className="description">
                              4 subjects passed with 70% or above OR
                            </li>
                            <li className="description">
                              Overall average of 70% across all Year XII
                              subjects
                            </li>
                          </ul>
                        </span>
                      </li>
                      <li className="mb-1 d-flex align-items-start description">
                        <i className="feather-check  text-orange me-2 mt-1"></i>
                        <span>
                          General English Communication Course (IELTS / TOEFL /
                          Duolingo)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="rbt-section-gap">
            <div className="container py-5 ">
              <h3 className="text-center mb-5">Admission Process</h3>
              <p className="description text-center">
                To apply for the 3-Year B.Sc (Business Administration) course at
                the University of London, you will typically need to follow
                these steps. Be sure to check the university's official website
                for the most current information, as procedures and requirements
                may change.
              </p>
              <div className="row g-4">
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">1</div>
                      <h5>Check Eligibility</h5>
                      <p className="description has-small-font-size">
                        Ensure you meet academic and English language
                        proficiency requirements (e.g., A-levels, IELTS/TOEFL).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">2</div>
                      <h5>Gather Documents</h5>
                      <p className="description has-small-font-size">
                        Prepare transcripts, personal statement, CV, and letters
                        of recommendation if applicable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">3</div>
                      <h5>Seek Guidance</h5>
                      <p className="description has-small-font-size">
                        Seek guidelines from JSBS experts for completion of your
                        application
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">4</div>
                      <h5>Select JSBS</h5>
                      <p className="description has-small-font-size">
                        Select JSBS – Burhani College (RTC) as your preferred
                        college
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">5</div>
                      <h5>Submit Application</h5>
                      <p className="description has-small-font-size">
                        Complete all sections and submit your application before
                        the deadline, including any required fees.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">6</div>
                      <h5>Track Status</h5>
                      <p className="description has-small-font-size">
                        Monitor your application progress and respond to any
                        additional requests or assessments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">7</div>
                      <h5>Receive Offer</h5>
                      <p className="description has-small-font-size">
                        Get an offer letter – conditional or unconditional –
                        after evaluation of your profile.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">8</div>
                      <h5>Accept Offer</h5>
                      <p className="description has-small-font-size">
                        Confirm your acceptance as per the university's
                        instructions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">9</div>
                      <h5>Prepare for Enrollment</h5>
                      <p className="description has-small-font-size">
                        Arrange tuition payments, course registration, and visas
                        if required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">10</div>
                      <h5>Attend Orientation</h5>
                      <p className="description has-small-font-size">
                        Join orientation sessions to get familiar with the
                        campus, resources, and support services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <div className="card step-card h-100">
                    <div className="card-body ">
                      <h4 className="text-center">Additional Tips</h4>
                      <br />
                      <ul className="mt-2 ps-5 description">
                        <li className="description fs-4 p-0 m-0">
                          Deadlines: Keep track of application deadlines and
                          ensure you apply well in advance.
                        </li>
                        <li className="description fs-4 p-0 m-0">
                          Support Services: Utilize university support services
                          if you need guidance during the application process.
                        </li>
                        <li className="description fs-4 p-0 m-0">
                          Programs and Modules: Familiarize yourself with the
                          course structure, modules, and faculty.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Context>
      </Provider>
    </>
  );
};

export default DegreeCoursePage;
