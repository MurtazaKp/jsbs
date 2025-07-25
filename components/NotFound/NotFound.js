"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import Link from "next/link";
import { Provider } from "react-redux";

const NotFound = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <div className="rbt-error-area bg-light-orange rbt-section-gap">
            <div className="error-area">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-10">
                    <h1 className="title">404!</h1>
                    <h3 className="sub-title">Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link className="rbt-btn bg-orange icon-hover" href="/">
                      <span className="btn-text">Back To Home</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Context>
      </Provider>
    </>
  );
};

export default NotFound;
