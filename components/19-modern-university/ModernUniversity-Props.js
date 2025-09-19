import React from "react";
import Image from "next/image";
import Link from "next/link";

const ModernUniversityProps = ({ bannerImg, title, description }) => {
  return (
    <>
      <div className={`bg_image rounded-1 banner-image-container`}>
        <Image
          className="rounded-1"
          width={1820}
          height={820}
          alt="Banner Image"
          src={bannerImg}
        ></Image>
        {/* Black overlay with description */}
        <div className="banner-overlay">
          <div className="banner-description">
            {title && <h3 className="banner-title">{title}</h3>}
            {description && <p className="banner-text">{description}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernUniversityProps;
