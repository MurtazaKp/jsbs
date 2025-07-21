import React from "react";
import Image from "next/image";
import Link from "next/link";

const ModernUniversityProps = ({}) => {
  return (
    <>
      <div className={` bg_image runded-1 `}>
        <Image
          className="rounded-3"
          width={1820}
          height={820}
          alt="Banner Image"
          src={"/images/bg/bg-image-24.jpg"}
        ></Image>
      </div>
    </>
  );
};

export default ModernUniversityProps;
