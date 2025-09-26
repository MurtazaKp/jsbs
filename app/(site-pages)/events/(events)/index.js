"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

const EventsLayout = ({ getBlog }) => {
  // ===== DATA DECLARATION =====
  const eventData = {
    subtitle: "Professional Development",
    title: "Research Methodology Workshop",
    description:
      "A comprehensive 6-session workshop designed to empower research scholars with systematic methods of inquiry and data analysis",
    details: [
      {
        icon: "feather-map-pin",
        label: "Venue:",
        value: "JSBS Marol Campus , India",
      },
      {
        icon: "feather-users",
        label: "Eligibility:",
        value: "Jamea Students",
      },
    ],
    conceptNotes: {
      title: "Concept Notes",
      description:
        "Research is a systematic method of inquiry that includes data gathering documentation of information, analysis and interpretation of that data/information, all under appropriate methodology established by certain professional and academic disciplines. It empowers policymakers with data to make informed decisions and fosters critical thinking skills within the population, both essential for navigating the complexities of our world. In short, research serves as the cornerstone of societal progress.",
    },
    objectives: [
      "To be able to define and formulate research problems",
      "To be able to design appropriate research methodologies for research",
      "To develop skills in data collection and analysis.",
      "To sensitize research scholars on matters related to ethical considerations in research and publications.",
      "To provide an opportunity for the young research scholars to interact with the experts in the area.",
    ],
    sessions: [
      {
        number: "Session 1",
        title: "Fundamentals of Research",
        description:
          "Introduction to Basic & Applied Research methodologies, understanding research paradigms and their applications",
        date: "Saturday, 9th August 2025",
        time: "2:30pm to 4:30pm",
      },
      {
        number: "Session 2",
        title: "Types of Research",
        description:
          "Comprehensive coverage of Qualitative, Quantitative & Mixed Method Approaches in research",
        date: "Saturday, 16th August 2025",
        time: "2:30pm to 4:30pm",
      },

      {
        number: "Session 3",
        title: "Measurement & Sampling",
        description:
          "Advanced techniques in measurement scales and various sampling methodologies for research",
        date: "Saturday, 23rd August 2025",
        time: "2:30pm to 4:30pm",
      },
      {
        number: "Session 4",
        title: "Data Analysis Tools",
        description:
          "Hands-on training in Advanced MS Excel, SPSS & Power BI for quantitative data analysis and interpretation",
        date: "Saturday, 30th August 2025",
        time: "2:30pm to 4:30pm",
      },
      {
        number: "Session 5",
        title: "Research Ethics",
        description:
          "Understanding ethical considerations, guidelines and best practices in research conduct and publication",
        date: "Saturday, 13th September 2025",
        time: "2:30pm to 4:30pm",
      },
      {
        number: "Session 6",
        title: "Research Report Writing",
        description:
          "Comprehensive guide to writing effective research reports, papers and academic publications",
        date: "Saturday, 20th September 2025",
        time: "2:30pm to 4:30pm",
      },
    ],
  };

  return (
    <Provider store={Store}>
      <Context>
        {/* Hero Section */}
        <div className="rbt-split-area rbt-section-gap overflow-hidden bg-light-orange">
          <div className="wrapper container">
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
        <div className="container rbt-section-gap px-3 px-sm-0">
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
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--60">
                  <h3>Workshop Objectives</h3>
                </div>
                <ul className="rbt-list-primary-opacity mt--10">
                  {eventData.objectives.map((objective, idx) => (
                    <li
                      key={idx}
                      className="description fs-2 d-flex align-items-start"
                    >
                      {idx + 1}. {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Sessions */}
        <div className="rbt-section-gap">
          <div className="container">
            <div className="section-title text-center mb--60">
              <h3>Workshop Sessions</h3>
              <p className="description">
                Six comprehensive sessions covering all aspects of research
                methodology
              </p>
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
                      <p className="card-text description">
                        {session.description}
                      </p>
                      <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="session-date">
                          <i className="feather-calendar text-orange fs-3"></i>
                          <span> {session.date}</span>
                        </div>

                        <div className="session-date">
                          <i className="feather-clock text-orange fs-3"></i>
                          <span> {session.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container  rbt-section-gap px-3 px-sm-0">
          <div className="">
            <h3 className="text-center mb-4">
              Research Methodology Workshop Gallery
            </h3>

            <p className="text-center description col-10 mx-auto pb-5">
              Get a glimpse of our Research Methodology Workshop in action. See
              distinguished TISS faculty conducting interactive sessions and
              engaging with Jamea students in our state-of-the-art facilities.
            </p>
          </div>
          {/* First Row: Vertical + Horizontal - Centered */}
          <div className="row   mb-4 justify-content-center">
            {/* Vertical Image */}
            <div className="col-lg-3 ">
              <div className="image-container h-100">
                <img
                  src="/images/eventOne.jpg"
                  alt="Prof NK Maheshwary welcoming Prof Anil Sutar"
                  className="img-fluid w-100 h-100 rounded-5 shadow-sm"
                />
                <div className="image-caption pt-2">
                  <p className="small text-orange mb-0 text-center">
                    Prof (Dr). NK Maheshwary Welcoming Prof (Dr). Anil Sutar,
                    Dean TISS, Mumbai
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Image */}
            <div className="col-lg-6  pt-5 mt-5 pt-lg-0 mt-lg-0 ">
              <div className="image-container h-100">
                <img
                  src="/images/eventTwo.jpg"
                  alt="Research Methodology Session"
                  className="img-fluid w-100 h-100 rounded-5 shadow-sm"
                />
                <div className="image-caption pt-2">
                  <p className="small text-orange mb-0 text-center">
                    Prof (Dr). NK Maheshwary giving introduction to Research
                    Methodology Workshop
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3  pt-5 mt-5 pt-lg-0 mt-lg-0">
              <div className="image-container h-100">
                <img
                  src="/images/eventFour.jpg"
                  alt="Workshop Introduction"
                  className="img-fluid w-100 h-100 rounded-5 shadow-sm"
                />
                <div className="image-caption pt-2">
                  <p className="small text-orange mb-0 text-center">
                    Prof (Dr). Anil Sutar taking Session 1 - Fundamentals of
                    Research
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12  pt-5 mt-5">
              <div className="image-container h-100">
                <img
                  src="/images/eventThree.jpg"
                  alt="Workshop Introduction"
                  className="img-fluid w-100 h-100 rounded-5 shadow-sm"
                />
                <div className="image-caption pt-2">
                  <p className="small text-orange mb-0 text-center">
                    Prof (Dr). Anil Sutar taking Session 1 - Fundamentals of
                    Research
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Context>
    </Provider>
  );
};

export default EventsLayout;
