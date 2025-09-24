"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import ModernUniversityProps from "./ModernUniversity-Props";

const profiles = [
  { name: "Ava Miller", src: "/images/shape/art-stu-2.png" },
  { name: "Mark Jordan", src: "/images/shape/art-stu-1.png" },
  { name: "Jordan", src: "/images/shape/art-stu-3.png" },
];

const ModernUniversityBanner = () => {
  return (
    <>
      <div className="rbt-banner-area rbt-banner-19 rbt-section-gapBottom pt-5 ">
        <div className="wrapper">
          <div className="swiper rbt-banner-activation-2 rbt-slider-animation rbt-arrow-between">
            <Swiper
              className="swiper-wrapper"
              modules={[Navigation, Autoplay]}
              loop={true}
              slidesPerView={1}
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={0}
              navigation={{
                nextEl: ".rbt-arrow-left",
                prevEl: ".rbt-arrow-right",
                clickable: true,
              }}
            >
              <SwiperSlide className="swiper-slide  ">
                <ModernUniversityProps
                  bannerImg={"/images/home/carousel/infrastructure.jpg"}
                  title="Modern Infrastructure"
                  description="State-of-the-art facilities designed for excellence in education and research."
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide ">
                <ModernUniversityProps
                  bannerImg={"/images/home/carousel/jsbs.png"}
                  title="Jamea Business School"
                  description="Leading business education with Islamic principles and modern methodology."
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide ">
                <ModernUniversityProps
                  bannerImg={"/images/home/carousel/library.jpg"}
                  title="World-Class Library"
                  description="Extensive collection of books and digital resources for comprehensive learning."
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide ">
                <ModernUniversityProps
                  bannerImg={"/images/home/carousel/nairobi-jamea.jpg"}
                  title="Global Campus Network"
                  description="International campuses connecting students across continents."
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide ">
                <ModernUniversityProps
                  bannerImg={"/images/home/carousel/sports-complex.png"}
                  title="Sports Complex"
                  description="Modern sports facilities promoting healthy lifestyle and team spirit."
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide ">
                <ModernUniversityProps
                  bannerImg={"/images/home/carousel/conference.png"}
                  title="Conference"
                  description="Organised by - Aljamea-tus-Saifiyah Business School (JSBS), Burhani College & Entrepreneurship Development Institute of India (EDII)"
                  viewMoreLink="/events/conference"
                />
              </SwiperSlide>
            </Swiper>

            <div className="rbt-slider-control">
              <div className="rbt-swiper-arrow-2 rbt-arrow-right">
                <span className="icon">
                  <i className="rbt-icon-top feather-arrow-left"></i>
                </span>
                <span className="text">Prev</span>
              </div>
              <div>
                <div className="rbt-swiper-arrow-2 rbt-arrow-left">
                  <span className="text">Next</span>
                  <span className="icon">
                    <i className="rbt-icon feather-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernUniversityBanner;
