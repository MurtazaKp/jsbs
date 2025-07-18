"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "@/components/site-components/Abouts/About";
import Vision from "@/components/site-components/Vision";
import Milestones from "@/components/Milestones/Milestones";

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
            <Milestones />
          </div>
        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPage;
