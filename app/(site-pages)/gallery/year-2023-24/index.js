import React from "react";

const ImageGalleryPage = () => {
  // A structured array to hold all gallery data, making it easy to manage and scale.
  const galleryData = [
    {
      id: "alumniGallary",
      title: "Alumni of Year 2023-2024",
      images: [
        "/images/image-gallary/year-2023-24/alumni/alumni-2.jpg",
        "/images/image-gallary/year-2023-24/alumni/alumni-3.jpg",
        "/images/image-gallary/year-2023-24/alumni/alumni-4.jpg",
        "/images/image-gallary/year-2023-24/alumni/alumni-5.jpg",
        "/images/image-gallary/year-2023-24/alumni/alumni-6.png",
        "/images/image-gallary/year-2023-24/alumni/alumni-7.jpg",
        "/images/image-gallary/year-2023-24/alumni/alumni-1.jpg",
      ],
      gridClasses: "col-12 col-md-6 col-lg-4", // Defines the grid layout for these images
      show: true, // This accordion item will be open by default
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
