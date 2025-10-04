"use client";

// ✅ All content in one object
const aboutContent = {
  sectionTitle: "Mission",
  subTitle: "WHY JSBS",
  quotes: {
    amirStatement:
      "Amir al-Mumineen AS has stated: “Learn Fiqh, then enter the marketplace”",
    syednaIntro:
      "Al-Dai al-Ajal Syedna Aali Qadr Mufaddal Saifuddin TUS states:",
    syednaQuote:
      "Always seek sustenance through halal means, for Barakat lies in what is halal. There is no blessings or Barakat in what is haram or forbidden. [Transacting in] haram is how one becomes ensnared in sin.",
  },
  missionParagraphs: [
    "Aljamea-tus-Saifiyah Business School offers a unique blend of academic rigor and ethical values rooted in its cultural heritage, making it an attractive choice for students seeking a holistic education. The institution emphasizes both theoretical knowledge and practical skills, preparing students to face the challenges of the modern business landscape while fostering a commitment to social responsibility and community development. Its distinguished faculty and innovative curriculum offer opportunities for personal and professional growth, enabling graduates to make meaningful contributions to the global economy.",
    "JSBS brings together the two primary characteristics of the Dawoodi Bohra community — its orientation towards trade and its dedication to education — into a single institution under the banner of Aljamea-tus-Saifiyah. As envisioned by the rectors of the Academy, JSBS will be an institute where members of the Dawoodi Bohra community will assimilate centuries worth of business acumen and tradition, while fully understanding the technicalities, complexities, and opportunities of today’s global market, and wholeheartedly valuing and embracing the principles and praxis of business as outlined by the Ahle Bayt AS in Fatimi jurisprudential texts.",
    "Most importantly, for a community whose single most fundamental business premise is to refrain from interest transactions, a comprehensive understanding of today’s markets and business practices is absolutely necessary. This is why the Prophet Mohammed’s SAW legatee, Amirul Mumineen Ali b. Abi Talib AS, stated that fiqh — i.e., the knowledge and understanding of Islamic jurisprudence — is a prerequisite for business: al-fiqh thumma al-matjar. It is this simple, yet powerful and encompassing directive that inspired the establishment of JSBS and will, Allah willing, guide its development in the coming years.",
    "Distinguishing itself from countless renowned business schools across the globe, JSBS will adopt an approach to business education that acknowledges modernity yet preserves the sanctity and wisdom of tradition. For the Dawoodi Bohra community, business is not merely a mechanism to generate revenue and profits; it is to uphold an injunction of Islam, and as such, is as integral to faith as are fasting and prayer. Business is in Bohra blood, and therefore, to be successful in trade and commerce while respecting the principles of shariah is to honour the community’s past and secure its identity for the future.",
  ],
  aims: [
    "To enlighten, empower and engender responsibility among entrepreneurs with the Fiqh Ahl al-Bayt AS",
    "To nurture world-class leaders equipped with sound business knowledge.",
    "To blend modernity with the wisdom of tradition for Dawoodi Bohra entrepreneurs and business leaders.",
    "To develop a business-minded attitude.",
    "To foster values towards rendering service to humanity.",
    "To foster a sense of commitment for a transformation towards a shari’a-compliant business economy.",
    "To become a center of excellence for business research.",
    "To provide a platform for entrepreneurs to brainstorm, create and connect with one another.",
  ],
};

const About = () => {
  return (
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-12  pt-sm-0 mt-sm-0">
          <div className="inner pt--50 pl_sm--0 pl_md--0 pt-5 pt-sm-0">
            <div className="section-title text-start">
              <h3 className="title">{aboutContent.sectionTitle}</h3>
              <h5 className="title mt--20">{aboutContent.subTitle}</h5>
            </div>

            <p className="description">
              <em>{aboutContent.quotes.amirStatement}</em>
            </p>

            <div>
              <h5>{aboutContent.quotes.syednaIntro}</h5>
              <p className="description ">{aboutContent.quotes.syednaQuote}</p>

              {aboutContent.missionParagraphs.map((para, index) => (
                <p
                  key={index}
                  className="description  mt--10 text-justify pe-4"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Aims Section */}
        <div className="pt--50">
          <div className="card-body">
            <h3>Aims</h3>
            <ul className="ps-0 plan-offer-list rbt-list-primary-opacity pt--10">
              {aboutContent.aims.map((aim, index) => (
                <li
                  key={index}
                  className="mb-3 description d-flex align-items-start mb-3"
                >
                  <i className="feather-check text-success me-2 mt-2"></i>
                  <p className="description">{aim}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
