"use client";

import React from "react";
import Image from "next/image";

const AdvanceTabFive = () => {
  const tabData = [
    {
      tag: "YOU CAN CUSTOMIZE ALL",
      title: "Advance Tab Style Five.",
      img: "/images/tab/tabs-02.jpg",
      body: [
        {
          text: "Year 1",
          isActive: true,
          tab: "home-tab-5",
          target: "home-5",
          controls: "home",
          title: "Mandatory: ",
          desc: [
            "Foundations of Quantitative Methods for Sustainable Organisations.",
            "Interpreting Management, Market and Consumption.",
            "Information Systems and Organisation Studies.",
            "International Business and Accounting.",
          ],
          descTwo: [],
        },
        {
          text: "Year 2",
          isActive: false,
          tab: "profile-tab-5",
          target: "profile-5",
          controls: "profile",
          title: "Mandatory: ",
          desc: [
            "Employability and Human Resource Management.",
            "Strategic Management and Accounting.",
            "Operations Management and Marketing Strategy.",
          ],
          descTwo: [
            "Optional Subjects (Choose any one):",
            "Managing Organisational Change and Performance.",
            "Marketing Research and Digital Marketing.",
            "The Global Economy and Multinational Enterprise.",
          ],
        },
        {
          text: "Year 3",
          isActive: false,
          tab: "contact-tab-5",
          target: "contact-5",
          controls: "contact",
          title: "Mandatory: ",
          desc: [
            "Integrating Management: Business, Leadership and Innovation.",
          ],
          descTwo: [
            "Choose any one:",
            "Consumer Behavior and Global Marketing.",
            "Brands, Branding and Advertising.",
            "Emerging markets and Asia Pacific business",
            "International human resource management",
            "The individual at work and Globalisation",
            "European business and international competition",
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

export default AdvanceTabFive;
