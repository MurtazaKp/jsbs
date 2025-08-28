"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";
import Image from "next/image";
import AdvanceTabFive from "@/components/site-components/AdvanceTab-Five";
import Publications from "@/components/site-components/Publication";

const ResearchPublicationPage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Publications />
      </Provider>
    </>
  );
};

export default ResearchPublicationPage;
