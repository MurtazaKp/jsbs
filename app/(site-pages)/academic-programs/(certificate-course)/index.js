"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";

import CertificationOverview from "@/components/site-components/CertificationOverview";

const CertificatePage = ({ getBlog }) => {
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
                <h3>11 Month Certification Course</h3>
              </div>

              <div className="rbt-splite-style text-center">
                <img
                  className="col-12 col-sm-6 col-lg-5"
                  src={"/images/certification.jpg"}
                />
              </div>
            </div>
          </div>
          {/* <div className="container  rbt-section-gap">
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
          </div> */}
          <div className="rbt-tab-area bg-color-white rbt-section-gap">
            <CertificationOverview />
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
                          10+2 or Equivalent
                          <br />
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
                To apply for the 11 Month Certificate Course, you will have to
                follow these steps:
              </p>
              <div className="row g-4">
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">1</div>
                      <h5>Check Eligibility</h5>
                      <p className="description has-small-font-size">
                        10+2 or equivalent.
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
                        10+2 or equivalent (Transcript).
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
                        Seek guidelines from JSBS experts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">4</div>
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
                      <div className="step-icon mx-auto">5</div>
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
                      <div className="step-icon mx-auto">6</div>
                      <h5>Accept Offer</h5>
                      <p className="description has-small-font-size">
                        Confirm your acceptance and pay the fees as per the
                        instructions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">7</div>
                      <h5>Prepare for Enrollment</h5>
                      <p className="description has-small-font-size">
                        Complete course registration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="card step-card h-100">
                    <div className="card-body text-center">
                      <div className="step-icon mx-auto">8</div>
                      <h5>Attend Orientation</h5>
                      <p className="description has-small-font-size">
                        Join orientation sessions to get familiar with the
                        course, resources, and support services.
                      </p>
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

export default CertificatePage;
