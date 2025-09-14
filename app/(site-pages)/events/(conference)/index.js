"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import Link from "next/link";

const ConferenceLayout = ({ getBlog }) => {
  // ===== DATA DECLARATION =====
  const eventData = {
    subtitle: "Conference",
    title: "Conference on Learning to Lead: Bridging Education and Business",
    description:
      " Organised by - Aljamea-tus-Saifiyah Business School (JSBS), Burhani College & Entrepreneurship Development Institute of India (EDII)",
    details: [
      {
        icon: "feather-map-pin",
        label: "Venue:",
        value: "Burhani College Mazgoan Mumbai",
      },
      {
        icon: "feather-users",
        label: "Date",
        value: "7th and 8th November 2025",
      },
    ],
    conceptNotes: {
      title: "Concepts Notes",
      description:
        "This Conference will bring together innovators, entrepreneurs, business owners, researchers, academicians, policymakers, and industry professionals. It serves as a platform for presenting cutting-edge business & entrepreneurial research and innovation in allied fields. Over two days, participants will engage in enriching technical sessions, workshops and discussions. All these with renowned industry leaders, researchers and policymakers.",
    },
    institutes: [
      {
        id: 1,
        title: "Aljamea-tus-Saifiyah Business School (JSBS)",
        description: `Aljamea-tus-Saifiyah Business School (JSBS) is established under the auspices of prestigious Arabic institute Aljamea-tus-Saifiyah. JSBS located at Jamea Campus in Mumbai & Nairobi is a testament to the Dawoodi Bohra community’s heritage. JSBS integrates contemporary views along with preserving the sanctity and wisdom of tradition in the field of Business Studies.`,
        image: "https://placehold.co/600x400", // replace with actual path
      },
      {
        id: 2,
        title: "Burhani College, Mumbai",
        description: `Burhani College, Mumbai is a Commerce, Liberal Arts, Management Science and Life Skills College located in the heart of Mumbai. The courses cover a Junior College in Commerce and Arts; a Degree College leading to Bachelor of Commerce, of Arts, of Management Studies, of Arts in Mass Media and Communication; Bachelor of Science (Computer Science) and Master of Commerce; and Certificate courses in vital life skills under the Sciences of the Home program.`,
        image: "https://placehold.co/600x400", // replace with actual path
      },
      {
        id: 3,
        title: "Entrepreneurship Development Institute of India (EDII)",
        description: `Entrepreneurship Development Institute of India (EDII) is a premier institute in Ahmedabad dedicated to entrepreneurship education, research, and capacity building. It is supported by financial institutions and the Government of Gujarat. EDII developed successful models like the EDII-EDP for new enterprise creation. It has established entrepreneurship development centers across India and internationally in countries like Cambodia and Rwanda.`,
        image: "https://placehold.co/600x400", // replace with actual path
      },
    ],
    sessions: [
      {
        number: "Subtheme 1",
        title: "Innovation & Entrepreneurship",
        points: [
          "Startup ecosystems",
          "Social entrepreneurship",
          "Innovation in traditional industries",
          "Disruptive business models",
          "Risk management in volatile markets",
        ],
      },
      {
        number: "Subtheme 2",
        title: "Digital Business & Technology",
        points: [
          "Digital transformation and AI in business",
          "Remote work and the future workplace",
          "Cybersecurity and risk in the digital age",
          "Metaverse and business opportunities",
        ],
      },

      {
        number: "Subtheme 3",
        title: "Measurement & Sampling Practice",
        points: [
          "Digital transformation and AI in business",
          "Remote work and the future workplace",
          "Cybersecurity and risk in the digital age",
          "Metaverse and business opportunities",
        ],
      },
      {
        number: "Subtheme 4",
        title: "Education, Research & Pedagogy",
        points: [
          "  The Future of Business Education",
          "Industry-Academia Collaborations",
          "Neuromarketing and Human Behavior",
        ],
      },
    ],
  };

  return (
    <Provider store={Store}>
      <Context>
        {/* Hero Section */}
        <div className="rbt-split-area rbt-section-gap overflow-hidden bg-light-orange">
          <div className="wrapper container">
            <div className="row d-flex justify-content-center gap-sm-3 pb-5">
              <div className="col-4 col-md-2 d-flex justify-content-center align-items-center">
                <img className="" src="/images/logo.png"></img>
              </div>
              <div className="col-4 col-md-2 d-flex justify-content-center align-items-center">
                <img className="" src="/images/burhani-logo.jpg"></img>
              </div>
              <div className="col-4 col-md-3 d-flex justify-content-center align-items-center">
                <img className="" src="/images/edi-logo.png"></img>
              </div>
            </div>
            <div className="section-title text-center mb--60">
              <span className="subtitle bg-coral-opacity">
                {eventData.subtitle}
              </span>
              <h3>{eventData.title}</h3>
              <p className="description col-12">{eventData.description}</p>

              <div className="d-flex flex-column flex-md-row align-items-center gap-4 justify-content-center text-center">
                {eventData.details.map((item, idx) => (
                  <div
                    key={idx}
                    className="d-flex align-items-center text-center"
                  >
                    <div className="me-3">
                      <i className={`${item.icon} text-orange fs-4`}></i>
                    </div>
                    <div>
                      <p className=" fs-4">
                        <span className="text-orange">{item.label}</span>{" "}
                        {item.value}
                      </p>
                    </div>
                    {idx < eventData.details.length - 1 && (
                      <div className="text-dark-blue mx-3 d-none d-md-block">
                        |
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Concept Notes */}
        <div className="container rbt-section-gap px-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="modern-course-features-box bg-dark-blue grid-content-reverse h-100">
                <div className="inner">
                  <div className="content">
                    <h3 className="title text-white pt-2">
                      {eventData.conceptNotes.title}
                    </h3>
                    <p className="description pe-2 text-white text-justify">
                      {eventData.conceptNotes.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Objectives */}
        <div className="rbt-tab-area bg-light-orange rbt-section-gap">
          <div className="container">
            <h3 className="text-center mb--60">Conference Organizers</h3>
            <div className="publications-grid">
              {eventData.institutes.map((institue, index) => (
                <div key={institue.id} className="publication-card pb-2">
                  <img
                    src={institue.image}
                    alt={institue.title}
                    className="w-100"
                  />
                  <div className="p-4">
                    <h5 className="card-title">{institue.title}</h5>
                    <p className="description has-small-font-size">
                      {institue.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workshop Sessions */}
        <div className="rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h3>Conference Subthemes</h3>
            </div>

            <div className="row g-4">
              {eventData.sessions.map((session, idx) => (
                <div key={idx} className="col-lg-6">
                  <div className="card session-card rounded h-100 p-2">
                    <div className="card-body">
                      <div className="session-number text-dark-blue">
                        {session.number}
                      </div>
                      <h4 className=" text-orange">{session.title}</h4>
                      <ul className="plan-offer-list rbt-list-primary-opacity pb-3">
                        {session.points.map((point, index) => {
                          return (
                            <li
                              className="description has-small-font-size mb-5 mb-sm-0 d-flex align-items-start justify-content-start"
                              key={idx}
                            >
                              <i className="feather-check"></i>
                              <span>{point}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container px-3  rbt-section-gap">
          <div className="">
            <h3 className="text-center mb-4">Register Now</h3>

            <p className="text-center description col-sm-8 col-lg-6 mx-auto pb-5">
              Registration opens on 1st September. Click below to register now
              or scan the QR code to join the Conference!
            </p>
          </div>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <div className="d-flex flex-column gap-4 flex-sm-row align-items-center">
              {/* QR Code Section */}
              <div className="me-4 d-flex justify-content-center">
                <img
                  className="w-75"
                  src="/images/conference-qr.png"
                  alt="QR Code"
                />
              </div>

              {/* Buttons Section */}
              <div className="d-flex flex-column ">
                <Link
                  target="_blank"
                  href="https://bit.ly/jsbs_conference"
                  className="view-btn mb-5"
                >
                  <span>
                    Register Now
                    <i className="fas fa-arrow-right ms-1"></i>
                  </span>
                </Link>
                <a
                  target="_blank"
                  href="/JSBSConference.pdf"
                  className="view-btn"
                >
                  <span>
                    View More Details
                    <i className="fas fa-arrow-right ms-1"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column pt-3">
            <ul>
              <span className="text-dark-blue"> Note :</span>
              <li className="text-orange has-small-font-size">
                1) Paper to be only send on jsbs.conference@gmail.com
              </li>
              <li className="text-orange has-small-font-size">
                2) Email Subject should be : JSBS Conference Name of the
                subtheme
              </li>
            </ul>
          </div>
        </div>
      </Context>
    </Provider>
  );
};

export default ConferenceLayout;
