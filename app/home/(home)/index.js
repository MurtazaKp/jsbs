"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";

import HomeTechnology from "@/components/home-banner/HomeBanner";

const HomeTechnologyPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          {/* <Cart /> */}

          <HomeTechnology />
        </Context>
      </Provider>
    </>
  );
};

export default HomeTechnologyPage;
