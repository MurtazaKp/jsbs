import React from "react";
import Image from "next/image";
import Link from "next/link";

const ModernUniversityProps = ({
  bannerImg,
  title,
  description,
  viewMoreLink,
}) => {
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
            {description && (
              <p className="banner-text">
                {description}{" "}
                {viewMoreLink && (
                  <Link
                    target="_blank"
                    href={viewMoreLink}
                    className="text-orange rbt-btn-link text-underline"
                  >
                    Know More{" "}
                  </Link>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernUniversityProps;
