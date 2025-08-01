"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import SplitData from "@/data/elements/split.json";

const SplitTwo = ({ isImg }) => {
  return (
    <>
      {SplitData &&
        SplitData.splitTwo.map((data, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              className="row g-5 align-items-center rbt-section-gapBottom"
              key={index}
            >
              {/* TEXT COLUMN */}
              <div
                className={`col-lg-6 ${
                  isEven ? "order-2 order-lg-1" : "order-2 order-lg-2"
                }`}
              >
                <div
                  className={`inner ${
                    isEven
                      ? "pr--50 pr_md--0 pr_sm--0"
                      : "pl--50 pl_md--0 pl_sm--0"
                  }`}
                >
                  <div className="section-title text-start">
                    <span className="subtitle bg-primary-opacity">
                      {data.tag}
                    </span>
                    <h2 className="title">{data.title}</h2>
                    <p className="description mt--30 text-justify">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* IMAGE COLUMN ONLY – No YouTube Icon */}
              <div
                className={`col-lg-6 ${
                  isEven ? "order-1 order-lg-2" : "order-1 order-lg-1"
                }`}
              >
                <div className="video-popup-wrapper">
                  <Image
                    className="w-100 rbt-radius"
                    src={isImg ? data.img : data.imgTwo}
                    width={638}
                    height={458}
                    alt="Split Image"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SplitTwo;
