"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import Image from "next/image";
import AdvanceTabFive from "@/components/site-components/AdvanceTab-Five";
import AdmissionProcess from "@/components/site-components/AdmissionProcess";

const AcademicProgramsPage = ({ getBlog }) => {
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
                <h3>3 Year’s B.Sc. Business Administration</h3>
              </div>

              <div className="rbt-splite-style text-center">
                <img src={"/images/Uol.jpg"} />
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
                        <span>Al Fiqh Certificate</span>
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
          <div>
            <AdmissionProcess />
          </div>
        </Context>
      </Provider>
    </>
  );
};

export default AcademicProgramsPage;
