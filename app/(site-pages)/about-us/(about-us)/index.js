"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "@/components/site-components/Abouts/About";
import Vision from "@/components/site-components/Vision";

const AboutUsPage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <div className="rbt-about-area about-style-1 bg-light-orange rbt-section-gap">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>
          <div className="rbt-section-gap">
            <Vision />
          </div>
          <div className="rbt-section-gap bg-light-orange">
            <section class="container my-5">
              <div class="text-center mb-5">
                <h2>Milestones</h2>
              </div>

              <div class="row g-5">
                <div
                  class="col-md-6 sal-animate"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <div class="rbt-card variation-01 rbt-hover card-list-2">
                    <div class="card-body">
                      <h5 class="card-title mb-3 text-warning text-center">
                        1441 / 2019
                      </h5>
                      <p class="has-small-font-size  text-center">
                        Commencement of Business-Mindedness project.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="col-md-6 sal-animate"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <div class="rbt-card variation-01 rbt-hover card-list-2">
                    <div class="card-body">
                      <h5 class="card-title mb-3 text-primary text-center">
                        1441 / 2020
                      </h5>
                      <p class="has-small-font-size  text-center">
                        Aljamea-Tus-Saifiyah Beginner’s Entrepreneurship
                        Certificate Program with 31 students and 4 faculty
                        members was completed. (Students were selected from all
                        campuses.)
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="col-md-6 sal-animate"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <div class="rbt-card variation-01 rbt-hover card-list-2">
                    <div class="card-body">
                      <h5 class="card-title mb-3 text-danger text-center">
                        1441 / 2020
                      </h5>
                      <p class="has-small-font-size  text-center">
                        Diploma in Entrepreneurship and job creation started as
                        an extension of “Specialization in Business Studies”
                        (al-Takhassus fi al-Buyu).
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="col-md-6 sal-animate"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <div class="rbt-card variation-01 rbt-hover card-list-2">
                    <div class="card-body">
                      <h5 class="card-title mb-3 text-success text-center">
                        1441 / 2020
                      </h5>
                      <p class="has-small-font-size  text-center">
                        Batch 1 – 26 students (3 Years)
                        <br />
                        Batch 2 – 27 students (4 Years)
                        <br />
                        Dedicated team of 4 faculty members from Aljamea-Tus
                        Saifiyah operates from the Nairobi Campus.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="rbt-card variation-01 rbt-hover card-list-2 bg-orange text-white">
                    <div class="card-body">
                      <h5 class="card-title mb-3 text-center">1445 / 2024</h5>
                      <p class="has-small-font-size text-white  text-center">
                        Launch of JSBS Marol Campus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPage;
