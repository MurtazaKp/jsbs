"use client";

import Image from "next/image";
import Link from "next/link";

import { useParallax } from "react-scroll-parallax";

import aboutImg7 from "@/public/images/about/about-07.jpg";
import aboutImg8 from "@/public/images/about/about-08.jpg";
import aboutImg9 from "@/public/images/about/about-09.jpg";

const About = () => {
  const { ref: ref1, style: style1 } = useParallax({
    translateY: [0, -20],
  });

  const { ref: ref2, style: style2 } = useParallax({
    translateY: [0, 20],
  });

  const { ref: ref3, style: style3 } = useParallax({
    translateY: [0, 20],
  });
  return (
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="thumbnail-wrapper">
            <div className={`thumbnail image-1`} ref={ref1} style={style1}>
              <Image
                src={aboutImg7}
                width={366}
                height={490}
                alt="Education Images"
              />
            </div>
            <div className={`thumbnail image-2`} ref={ref2} style={style2}>
              <Image
                src={aboutImg9}
                width={308}
                height={250}
                alt="Education Images"
              />
            </div>
            <div className={`thumbnail image-3`} ref={ref3} style={style3}>
              <Image
                src={aboutImg8}
                width={405}
                height={490}
                alt="Education Images"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6  mt-5 pt-5 pt-sm-0 mt-sm-0">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pt-5 pt-sm-0">
            <div className="section-title text-start">
              <span className="subtitle bg-coral-opacity">Mission</span>
              <h2 className="title">WHY JSBS</h2>
            </div>
            <p className="description mt--30">
              Amir al-Mumineen has stated: <br /> “Learn Fiqh, then enter the
              marketplace”
            </p>
            <div className="about-content">
              <h5>
                Al-Dai al-Ajal Syedna Aali Qadr Mufaddal Saifuddin TUS states:
              </h5>

              <p className="description has-small-font-size mt--10">
                Always seek sustenance through halal means, for Barakat lies in
                what is halal. There is no blessings or Barakat in what is haram
                or forbidden. [Transacting in] haram is how one becomes ensnared
                in sin.
              </p>

              <p className="description has-small-font-size mt--10">
                Aljamea-Tus-Saifiyah Business School offers a unique blend of
                academic rigor and ethical values rooted in its cultural
                heritage, making it an attractive choice for students seeking a
                holistic education. The institution emphasizes both theoretical
                knowledge and practical skills, preparing students to face the
                challenges of the modern business landscape while fostering a
                commitment to social responsibility and community development.
                Its distinguished faculty and innovative curriculum offer
                opportunities for personal and professional growth, enabling
                graduates to make meaningful contributions to the global
                economy.
              </p>

              <p className="description has-small-font-size mt--10">
                JSBS brings together the two primary characteristics of the
                Dawoodi Bohra community — its orientation towards trade and its
                dedication to education — into a single institution under the
                banner of Aljamea-Tus-Saifiyah. As envisioned by the rectors of
                the Academy, JSBS will be an institute where members of the
                Dawoodi Bohra community will assimilate centuries worth of
                business acumen and tradition, while fully understanding the
                technicalities, complexities, and opportunities of today’s
                global market, and wholeheartedly valuing and embracing the
                principles and praxis of business as outlined by the Ahle Bayt
                AS in Fatimi jurisprudential texts.
              </p>

              <p className="description has-small-font-size mt--10">
                Most importantly, for a community whose single most fundamental
                business premise is to refrain from interest transactions, a
                comprehensive understanding of today’s markets and business
                practices is absolutely necessary. This is why the Prophet
                Mohammed’s SAW legatee, Amirul Mumineen Ali b. Abi Talib AS,
                stated that fiqh — i.e., the knowledge and understanding of
                Islamic jurisprudence — is a prerequisite for business:{" "}
                <em>al-fiqh thumma al-matjar</em>. It is this simple, yet
                powerful and encompassing directive that inspired the
                establishment of JSBS and will, Allah willing, guide its
                development in the coming years.
              </p>

              <p className="description has-small-font-size mt--10">
                Distinguishing itself from countless renowned business schools
                across the globe, JSBS will adopt an approach to business
                education that acknowledges modernity yet preserves the sanctity
                and wisdom of tradition. For the Dawoodi Bohra community,
                business is not merely a mechanism to generate revenue and
                profits; it is to uphold an injunction of Islam, and as such, is
                as integral to faith as are fasting and prayer. Business is in
                Bohra blood, and therefore, to be successful in trade and
                commerce while respecting the principles of shariah is to honour
                the community’s past and secure its identity for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
