"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import SplitData from "@/data/elements/split.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const SplitTwo = () => {
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
                <div className="video-popup-wrapper shadow-4">
                  {data.img.length > 1 ? (
                    <Swiper
                      className="swiper-wrapper"
                      modules={[Autoplay]}
                      loop={true}
                      slidesPerView={1}
                      speed={800}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={0}
                    >
                      {data.img.map((img, idx) => (
                        <SwiperSlide key={index} className="swiper-slide  ">
                          <Image
                            className="w-100 rbt-radius"
                            src={img}
                            width={638}
                            height={458}
                            alt="Split Image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    data.img.map((img, idx) => (
                      <Image
                        key={idx}
                        className="w-100 rbt-radius"
                        src={img}
                        width={638}
                        height={458}
                        alt="Split Image"
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SplitTwo;
