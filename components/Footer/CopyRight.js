import Link from "next/link";
import Separator from "../site-components/Separator";

const CopyRight = () => {
  return (
    <>
      <Separator />
      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">
                Copyright © 2025
                <Link className="mx-2" href="https://rainbowthemes.net">
                  JSBS
                </Link>
                All Rights Reserved
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
