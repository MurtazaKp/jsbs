"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import Split from "@/components/site-components/Split/Split";
import SplitTwo from "@/components/site-components/Split/Split-Two";
import AccordionThree from "@/components/Accordions/Accordian";

const CampusFacilitiesPage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <div className="rbt-split-area bg-light-orange rbt-section-gap overflow-hidden">
            <div className="wrapper">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-coral-opacity">Campus</span>
              </div>

              <div className="rbt-splite-style">
                <div className="split-wrapper">
                  <Split />
                </div>
              </div>
            </div>
          </div>

          <div className="rbt-split-area bg-color-white rbt-section-gapTop overflow-hidden container ">
            <div className="wrapper">
              <div className="rbt-splite-style">
                <div className="split-wrapper">
                  <SplitTwo />
                </div>
              </div>
            </div>
          </div>

          <div className="rbt-split-area bg-light-orange  rbt-section-gap overflow-hidden">
            <div className="wrapper">
              <AccordionThree />
            </div>
          </div>

          <div className="rbt-split-area  rbt-section-gap overflow-hidden">
            <div className="wrapper">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-coral-opacity">Events</span>
              </div>

              <div className="rbt-splite-style text-center">
                <h2>Comming Soon</h2>
              </div>
            </div>
          </div>
        </Context>
      </Provider>
    </>
  );
};

export default CampusFacilitiesPage;
