import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import bannerImg from "../../public/images/shape/m-banner-shape-01.png";
import trustpilotImg from "../../public/images/icons/trustpilot-white.png";
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
                  parentClass="bg_image--24"
                  bannerImg={bannerImg}
                  rating="Excellent 4.9 out of 5"
                  trustpilotImg={trustpilotImg}
                  title="Education Is The Best Key Success In Life"
                  desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat."
                  userProfiles={profiles}
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide ">
                <ModernUniversityProps
                  parentClass="bg_image--25"
                  bannerImg={bannerImg}
                  rating="Excellent 4.9 out of 5"
                  trustpilotImg={trustpilotImg}
                  title="Unlock Your Potential with Quality Education"
                  desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat."
                  userProfiles={profiles}
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide ">
                <ModernUniversityProps
                  parentClass="bg_image--26"
                  bannerImg={bannerImg}
                  rating="Excellent 4.9 out of 5"
                  trustpilotImg={trustpilotImg}
                  title="Online Learning Now In Your Fingertps"
                  desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat."
                  userProfiles={profiles}
                />
              </SwiperSlide>
            </Swiper>

            <div className="rbt-slider-control">
              <div className="rbt-swiper-arrow-2 rbt-arrow-right">
                <span className="icon">
                  <i className="rbt-icon-top feather-arrow-left"></i>
                </span>
                <span className="text">Prev</span>

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
