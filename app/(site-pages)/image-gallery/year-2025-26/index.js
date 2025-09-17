import React from "react";

const ImageGallaryPage = () => {
  const images = {
    uolVisit: [
      "/images/image-gallary/uol-visit/uol-representative-visit-on-12-march-1.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-12-march-2.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-12-march-3.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-12-march-4.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-12-march-5.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-12-march-6.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-20-march-1.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-20-march-2.jpg",
      "/images/image-gallary/uol-visit/uol-representative-visit-on-20-march-3.jpg",
    ],

    facultyOrientation: [
      "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-1.jpg",
      "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-2.jpg",
      "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-3.jpg",
      "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-4.jpg",
    ],

    ediiMeeting: [
      "/images/image-gallary/edii-meeting/edii-meeting-with-general.png",
    ],

    researchMethodologyWorkshop: ["/images/eventThree.jpg"],
  };
  return (
    <div>
      <div className="container text-center px-4 my-5 rbt-section-gap">
        <div className="section-title">
          <span className="subtitle bg-coral-opacity">Image Gallery</span>
          <h3 className="text-center mb--30">
            University of London Representative Visit on 12th March and 20th
            March
          </h3>
          <div className="row g-4">
            {images.uolVisit.map((path, index) => (
              <div className="col-12 col-md-6 col-lg-4 " key={index}>
                <img
                  src={path}
                  className="w-100 h-100  rounded-4"
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt--100">
          <h3 className="text-center mb--30">
            Faculty Orientation Program Held at Marol Campus on 3rd june
          </h3>
          <div className="row g-5">
            {images.facultyOrientation.map((path, index) => (
              <div className="col-12 col-md-6 col-lg-6" key={index}>
                <img
                  src={path}
                  className="w-100  rounded-4"
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt--100">
          <div></div>
          <h3 className="text-center mb--30">
            Meeting with Director General of Entrepreneurship Development
            Institute of India (EDII) on 11th April 2025
          </h3>
          <div className="row g-5">
            {images.ediiMeeting.map((path, index) => (
              <div className="col-12 " key={index}>
                <img
                  src={path}
                  className="w-100  rounded-4"
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt--100">
          <div></div>
          <h3 className="text-center mb--30">
            Prof (Dr). Anil Sutar taking Session 1 - Fundamentals of Research
          </h3>
          <div className="row g-5">
            {images.researchMethodologyWorkshop.map((path, index) => (
              <div className="col-12 " key={index}>
                <img
                  src={path}
                  className="w-100  rounded-4"
                  alt={`Gallery image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallaryPage;
