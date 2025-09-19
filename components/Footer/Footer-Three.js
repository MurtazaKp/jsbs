import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.png";
// import logoLight from "../../public/images/dark/logo/logo";

import FooterData from "../../data/footer.json";

import { useAppContext } from "@/context/Context";
import { usePathname } from "next/navigation";
import CopyRight from "../Footer/CopyRight";

const FooterThree = () => {
  const { isLightTheme } = useAppContext();
  const pathname = usePathname();

  const hideLinks = pathname === "/login";

  const quotes = {
    "/about-us": (
      <>
        All organizations are perfectly designed to get the results they are now
        getting. If we want different results, we must change the way we do
        things.
        <br /> – Tom Northup
      </>
    ),
    "/academic-programs/degree-course": (
      <>
        The way to get started is to quit talking and begin doing.
        <br /> – Walt Disney
      </>
    ),
    "/academic-programs/certificate-course": (
      <>
        It always seems impossible until it’s done.
        <br /> – Nelson Mandela
      </>
    ),
    "/academic-programs": (
      <>
        Management is doing things right; leadership is doing the right things.
        <br /> – Peter Drucker
      </>
    ),
    "/faculty-research": (
      <>
        Mindfulness is observing and asking why. Millions saw the apple fall but
        Newton asked why.
        <br /> – Amit Ray
      </>
    ),
    "/student-life": (
      <>
        Leadership and learning are indispensable to each other.
        <br /> – John F. Kennedy
      </>
    ),
    "/campus-facilities": (
      <>
        Management is, above all, a practice where art, science, and craft meet.
        <br /> – Henry Mintzberg
      </>
    ),
    "/research-publication": (
      <>
        Time management is really personal management, life management and
        management of yourself.
        <br /> – Brian Tracy
      </>
    ),
    "/events/rsch-meth-course": (
      <>
        Success is not final, failure is not fatal: it is the courage to
        continue that counts.
        <br /> – Winston S. Churchill
      </>
    ),
    "/events/conference": (
      <>
        Success is not final, failure is not fatal: it is the courage to
        continue that counts.
        <br /> – Winston S. Churchill
      </>
    ),
    "/events": (
      <>
        Success is not final, failure is not fatal: it is the courage to
        continue that counts.
        <br /> – Winston S. Churchill
      </>
    ),
    "/": (
      <>
        The pursuit of knowledge is obligatory upon every Muslim man and woman"
        <br />
        -Prophet Mohammed
      </>
    ),
  };

  const getQuote = () => {
    switch (pathname) {
      case "/about-us":
        return quotes["/about-us"];
      case "/academic-programs/degree-course":
        return quotes["/academic-programs/degree-course"];
      case "/academic-programs/certificate-course":
        return quotes["/academic-programs/certificate-course"];
      case "/academic-programs":
        return quotes["/academic-programs"];
      case "/faculty-research":
        return quotes["/faculty-research"];
      case "/student-life":
        return quotes["/student-life"];
      case "/campus-facilities":
        return quotes["/campus-facilities"];
      case "/research-publication":
        return quotes["/research-publication"];
      case "/events/rsch-meth-course":
        return quotes["/events/rsch-meth-course"];
      case "/events/conference":
        return quotes["/events/conference"];
      case "/events":
        return quotes["/events"];
      case "/":
        return quotes["/"];
      default:
        return "We are constantly evolving as we are interacting with the world. Mindfulness and growth mindset drives our evolution faster and on right tracks. – Amit Ray";
    }
  };

  const quoteToShow = getQuote();

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

                          {/* Replacing description with quote */}
                          <p className="description mt--20 text-justify">
                            {quoteToShow}
                          </p>
                        </div>
                      </div>

                      <div className="col-xl-3 offset-xl-2 col-md-6 col-sm-6 col-12 mt--30 align-items-end d-flex">
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
