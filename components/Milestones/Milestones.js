import React, { useEffect, useRef } from "react";

const milestonesData = [
  {
    date: "1439-40H (2018-19)",
    title: "Raza Mubarak Received",
    description:
      "A significant spiritual milestone as Raza Mubarak was received, marking an important phase in the community's development.",
    icon: "award",
    type: "type1",
  },
  {
    date: "1440-41H (2019-20)",
    title: "New Programs and Affiliations",
    description: (
      <>
        Commencement of <strong>Al-Takhassus fi al-Buyu</strong> at Nairobi
        Campus and affiliation with <strong>Strathmore Business School</strong>,
        paving the way for academic collaborations.
      </>
    ),
    icon: "book",
    type: "type2",
  },
  {
    date: "1441-42H (2020-21)",
    title: "First Batch Completion & New Initiatives",
    description: (
      <>
        Certificate course completed by the first batch and initiation of the
        Diploma Course with{" "}
        <strong>Strathmore Institute of Management Technology</strong>,
        expanding educational opportunities.
      </>
    ),
    icon: "briefcase",
    type: "type3",
  },
  {
    date: "1443-44H (2022-23)",
    title: "Global Collaborations and Training",
    description: (
      <>
        Affiliation with <strong>University of London</strong> for degree
        courses, training needs analysis completed in India and Karachi, and a
        series of webinars conducted on business-mindedness.
      </>
    ),
    icon: "globe",
    type: "type1",
  },
  {
    date: "1444-45H (2023-24)",
    title: "Growth and Expansion Planning",
    description: (
      <>
        Muntasebeen included at JSBS and the process initiated to establish{" "}
        <strong>JSBS at Marol Campus</strong>, expanding the community's
        outreach.
      </>
    ),
    icon: "users",
    type: "type2",
  },
  {
    date: "1445-46H (2024-25)",
    title: "Recognition and Open Doors",
    description: (
      <>
        Became a recognized teaching centre for{" "}
        <strong>University of London</strong> in collaboration with{" "}
        <strong>Burhani College</strong>, and opened doors for mumineen, marking
        a new chapter of growth.
      </>
    ),
    icon: "home",
    type: "type3",
  },
];

const Timeline = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated", "fadeInUp");
            entry.target.classList.remove("hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => refs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <>
      <h3 className="text-center">Our Milestones</h3>
      <div className="timeline container px-0">
        {milestonesData.map((event, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`timeline__event timeline__event--${event.type} `}
          >
            <div className="timeline__event__icon d-flex justify-content-center align-items-center">
              <i className={`feather-${event.icon}`} />
            </div>
            <div className="timeline__event__date">{event.date}</div>
            <div className="timeline__event__content">
              <div className="timeline__event__title pb-2">{event.title}</div>
              <div className="timeline__event__description">
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
