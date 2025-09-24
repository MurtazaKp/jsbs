import React from "react";

const ImageGalleryPage = () => {
  // A structured array to hold all gallery data, making it easy to manage and scale.
  const galleryData = [
    {
      id: "uolVisit",
      title: "University of London Representative Visit on 12th & 20th March",
      images: [
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
      gridClasses: "col-12 col-md-6 col-lg-4", // Defines the grid layout for these images
      show: true, // This accordion item will be open by default
    },
    {
      id: "facultyOrientation",
      title: "Faculty Orientation Program Held at Marol Campus on 3rd June",
      images: [
        "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-1.jpg",
        "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-2.jpg",
        "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-3.jpg",
        "/images/image-gallary/faculty-orientation-program/faculty-orientation-program-3rd-june-4.jpg",
      ],
      gridClasses: "col-12 col-md-6",
      show: false,
    },
    {
      id: "ediiMeeting",
      title: "Meeting with Director General of EDII on 11th April 2025",
      images: [
        "/images/image-gallary/edii-meeting/edii-meeting-with-general.png",
      ],
      gridClasses: "col-12",
      show: false,
    },
    {
      id: "researchWorkshop",
      title:
        "Prof (Dr). Anil Sutar taking Session 1 - Fundamentals of Research on 9th August 2025",
      images: ["/images/eventThree.jpg"],
      gridClasses: "col-12",
      show: false,
    },
  ];

  return (
    <section className="rbt-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-4">
              <span className="subtitle bg-coral-opacity">Gallery</span>
            </div>

            {/* Accordion Wrapper */}
            <div
              className="accordion rbt-accordion-style"
              id="imageGalleryAccordion"
            >
              {galleryData.map((gallery, index) => (
                <div className="accordion-item card" key={index}>
                  <h2
                    className="accordion-header card-header bg-white"
                    id={`heading-${gallery.id}`}
                  >
                    <button
                      className={`accordion-button has-medium-font-size ${
                        !gallery.show ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${gallery.id}`}
                      aria-expanded={gallery.show ? "true" : "false"}
                      aria-controls={`collapse-${gallery.id}`}
                    >
                      {gallery.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${gallery.id}`}
                    className={`accordion-collapse collapse bg-white ${
                      gallery.show ? "show" : ""
                    }`}
                    aria-labelledby={`heading-${gallery.id}`}
                    data-bs-parent="#imageGalleryAccordion"
                  >
                    <div className="accordion-body card-body">
                      <div className="row g-4">
                        {gallery.images.map((path, imgIndex) => (
                          <div className={gallery.gridClasses} key={imgIndex}>
                            <img
                              src={path}
                              className="w-100 h-100 rounded-4"
                              alt={`${gallery.title} image ${imgIndex + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGalleryPage;
