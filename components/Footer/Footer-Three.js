import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.png";
// import logoLight from "../../public/images/dark/logo/logo";

import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";
import CopyRight from "./CopyRight";
import { useAppContext } from "@/context/Context";
import { usePathname } from "next/navigation";

const FooterThree = () => {
  const { isLightTheme } = useAppContext();
  const pathname = usePathname();

  const hideLinks = pathname === "/login";

  return (
    <>
      {!hideLinks && (
        <div>
          <footer className="rbt-footer footer-style-1">
            <div className="footer-top">
              <div className="container">
                {FooterData &&
                  FooterData.footerOne.map((footer, index) => (
                    <div className="row row--15 mt_dec--30" key={index}>
                      <div className="col-xl-7 col-md-12 col-sm-12 col-12 mt--30">
                        <div className="footer-widget">
                          <div className="logo">
                            <Link href="/">
                              {isLightTheme ? (
                                <Image
                                  src={logo}
                                  width={150}
                                  height={150}
                                  alt="Education Logo Images"
                                />
                              ) : (
                                <Image
                                  src={logo}
                                  width={80}
                                  height={80}
                                  alt="Education Logo Images"
                                />
                              )}
                            </Link>
                          </div>

                          <p className="description mt--20 text-justify">
                            {footer.description}
                          </p>

                          {/* <div className="contact-btn mt--30">
                        <Link
                          className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                          href="#"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">Contact With Us</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </div>
                        </Link>
                      </div> */}
                        </div>
                      </div>

                      <div className="col-xl-3 offset-xl-2  col-md-6 col-sm-6 col-12 mt--30 align-items-end d-flex">
                        <div className="footer-widget">
                          <h5 className="ft-title">JSBS Campuses</h5>
                          <ul className="ft-link">
                            <li>
                              <span>Location:</span> {footer.address}
                            </li>
                            <li>
                              <span>Phone:</span>
                              <Link href="#">{footer.phone}</Link>
                            </li>
                            <li>
                              <span>E-mail:</span>
                              <Link href="mailto:jsbs@jameasafiyah.edu">
                                {footer.mail}
                              </Link>
                            </li>
                          </ul>
                          <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                            {footer.socialLink.map((value, innerIndex) => (
                              <li key={innerIndex}>
                                <Link href={value.link}>
                                  <i className={value.icon}></i>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </footer>
          <CopyRight />
        </div>
      )}
    </>
  );
};

export default FooterThree;
