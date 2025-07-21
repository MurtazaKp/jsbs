"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";

import accordionImg from "@/public/images/others/accordion-01.png";
import CourseData from "@/data/elements/accordion.json";
import Image from "next/image";
import shape from "@/public/images/shape/v-union.png";
import TeacherGallery from "@/components/OurGallary/OurGallary";

const FeesStructurePage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <div className=" bg-light-orange  rbt-section-gap">
            <div className="wrapper container">
              <h3 className="title text-center"> Fees Structure</h3>
              <h5 className="mb-4 ">
                Fees for Session starting Academic Year 2024–2025
              </h5>
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center align-middle rounded-sm">
                  <thead className="table-primary">
                    <tr>
                      <th>Fees</th>
                      <th>1st Year</th>
                      <th>2nd Year</th>
                      <th>3rd Year</th>

                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">UoL Fees in Pounds</th>
                      <td>4500</td>
                      <td>3213</td>
                      <td>3374</td>

                      <td>11,087</td>
                    </tr>
                    <tr>
                      <th scope="row">UoL Fees in ₹</th>
                      <td>₹4,95,000</td>
                      <td>₹3,53,430</td>
                      <td>₹3,71,102</td>

                      <td>₹12,19,532</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="thumb-wrapper bg-color-white rbt-section-gapBottom mt--40">
            <div className="section-title text-center mb-5 ">
              <h3 className="title"> Our Gallery</h3>
            </div>
            <TeacherGallery />
          </div>
        </Context>
      </Provider>
    </>
  );
};

export default FeesStructurePage;
