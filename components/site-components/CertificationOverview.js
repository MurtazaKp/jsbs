"use client";

import React from "react";
import Image from "next/image";

const CertificationOverview = () => {
  const tabData = [
    {
      tag: "COURSE OUTLINE",
      title: "Program Structure",
      img: "/images/tab/tabs-02.jpg",
      body: [
        {
          text: "Term 1",
          isActive: true,
          tab: "term1-tab",
          target: "term1",
          controls: "term1",
          title: "Business Foundations (3 months)",
          desc: [
            "Entrepreneurial Mindset",
            "Business Economics",
            "Marketing: A Primer for Entrepreneurs",
            "Leadership & Organizational Behavior",
            "Business Communication",
            "Basics of Finance & Fundraising",
          ],
          descTwo: [],
        },
        {
          text: "Term 2",
          isActive: false,
          tab: "term2-tab",
          target: "term2",
          controls: "term2",
          title:
            "Advanced Business & Growth Strategies (3 months) + Internship (2 months)",
          desc: [
            "Design Thinking & Innovation",
            "Social Business Model",
            "Operations & Supply Chain",
            "Data for Decision Making (Costing & Pricing)",
            "Legal Aspects of Business",
            "Managing Business Growth, Divestiture & Exit",
          ],
          descTwo: [
            "Internship Opportunities:",
            "Work with Startups",
            "Family Business Firms",
            "Incubators",
          ],
        },
        {
          text: "Term 3",
          isActive: false,
          tab: "term3-tab",
          target: "term3",
          controls: "term3",
          title: "Specializations (3 months)",
          desc: [
            "Family Business Management:",
            "Understanding Family Business",
            "Business Taxation",
            "Corporate Social Responsibility & Sustainability",
            "Managing Family Business (Governance, Succession, Conflict Resolution)",
            "Building Lasting Family Business - Synergy in Vision, Values & Strategy",
          ],
          descTwo: [
            "Entrepreneurship and New Ventures:",
            " Digital Marketing for Startups",
            " Launching and Managing an Enterprise",
            " Talent Management: From Startup to Scale up",
            " Pitching and Venture Funding",
            " Final Business Project & Pitch to Investors",
          ],
        },
      ],
    },
  ];

  return (
    <>
      {tabData.map((data, index) => (
        <div className="container" key={index}>
          <div className="row mb--40">
            <div className="col-lg-12">
              <div
                className="section-title sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h3 className="title">Program Overview</h3>
                <p className="description mt-2 text-justify">
                  Under the Academic Guidance of Royal Holloway, this degree is
                  designed to provide students with a strong academic foundation
                  in core business functions including general business
                  administration, accounting, finance, project management,
                  information technology, human resources, marketing,
                  international business, logistics and organizational behavior.
                </p>
              </div>
            </div>
          </div>

          <div className="row row--30 align-items-center">
            <div className="col-lg-5">
              <Image
                className="radius-small"
                src={data.img}
                width={509}
                height={367}
                alt="Program Overview Image"
              />
            </div>

            <div className="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1">
              <div className="rbt-default-tab">
                <ul className="nav nav-tabs tab-button" role="tablist">
                  {data.body.map((item, innerIndex) => (
                    <li
                      className="nav-item tabs__tab"
                      role="presentation"
                      key={innerIndex}
                    >
                      <button
                        className={`nav-link ${item.isActive ? "active" : ""}`}
                        id={item.tab}
                        data-bs-toggle="tab"
                        data-bs-target={`#${item.target}`}
                        type="button"
                        role="tab"
                        aria-controls={item.target}
                        aria-selected={item.isActive}
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="rainbow-tab-content tab-content p-4 p-sm-5 bg-light-orange">
                  {data.body.map((item, innerIndex) => (
                    <div
                      className={`tab-pane fade ${
                        item.isActive ? "active show" : ""
                      }`}
                      id={item.target}
                      role="tabpanel"
                      aria-labelledby={item.tab}
                      key={innerIndex}
                    >
                      {item.title && <h6>{item.title}</h6>}
                      {item.desc.length > 0 && (
                        <ul className="plan-offer-list rbt-list-primary-opacity">
                          {item.desc.map((point, idx) => (
                            <li
                              className="description has-small-font-size mb-5 mb-sm-0 d-flex align-items-start justify-content-start"
                              key={idx}
                            >
                              <i className="feather-check"></i>{" "}
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.descTwo.length > 0 && (
                        <div className=" pt-4 mt-3">
                          <h6 className="pb-0 m-0">{item.descTwo[0]}</h6>
                          <ul className="plan-offer-list rbt-list-primary-opacity mt--10">
                            {item.descTwo.slice(1).map((point, idx) => (
                              <li
                                className="description has-small-font-size d-flex align-items-start"
                                key={idx}
                              >
                                <i className="feather-check"></i>{" "}
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CertificationOverview;
