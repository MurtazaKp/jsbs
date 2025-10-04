import React from "react";

const Vision = () => {
  return (
    <section className="container ">
      <div className="section-title text-center mb-4">
        <span className="subtitle bg-coral-opacity ">About</span>
        <h3 className="mb-3 text-center ">About Us</h3>
        <p className="description">
          Aljamea-tus-Saifiyah Business School: A vision of Tradition and
          Learning
        </p>
        <img
          src="/images/home/carousel/aljamea.jpg"
          className=" w-full rounded-4"
          alt="His Holiness Syedna AaliQadr Mufaddal Saifuddin (TUS)"
        />
        <div className="image-caption pt-2">
          <p className=" text-orange mb-0 text-center">
            His Holiness Syedna AaliQadr Mufaddal Saifuddin (TUS)
          </p>
        </div>
      </div>
      <div className="quote-highlight-wrapper pt--50 ">
        <div className="blockquote-wrapper col-12 col-sm-10 mx-auto">
          <div className="blockquote">
            <div className="col-10 col-sm-9 col-lg-10 mx-auto">
              <h3 className="">
                O believer! Shall I not guide you to a trade that will save you
                from a painful punishment?
              </h3>

              <footer className="">
                <h6>
                  It is to have faith in Allah and His Messenger, and to strive
                  in the cause of Allah with your wealth and your souls.
                  <br />
                  That is best for you, if only you knew.
                </h6>
              </footer>
            </div>

            <img
              className="curly1"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/Curly_Krungthep.svg"
              alt=""
            />

            <img
              className="curly2"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95802/Curly_Krungthep.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="card-body">
          <h3 className="">Vision</h3>
          <p className="description ">
            Aljamea-tus-Saifiyah Business School envisions to cultivate
            insightful, ethical, and innovative leaders through a robust
            education that integrates business acumen with ethical principles
            derived from Islamic teachings. The institution aims to empower
            students with the skills and knowledge necessary to navigate the
            complexities of the modern business environment while maintaining a
            commitment to social responsibility and community development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
