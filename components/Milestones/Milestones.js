import React, { useEffect, useRef } from "react";

const milestonesData = [
  {
    date: "1441 / 2019",
    title: "Commencement of Business-Mindedness Project",
    description:
      "Our journey began with the inception of the Business-Mindedness project, laying the groundwork for future initiatives and fostering entrepreneurial spirit.",
    icon: "target",
    type: "type1",
  },
  {
    date: "1441 / 2020",
    title: "Beginner's Entrepreneurship Certificate Program",
    description:
      "Successfully completed the Aljamea-Tus-Saifiyah Beginner's Entrepreneurship Certificate Program, educating 31 students with the support of 4 dedicated faculty members.",
    icon: "award",
    type: "type2",
  },
  {
    date: "1441 / 2020",
    title: "Diploma in Entrepreneurship and Job Creation",
    description:
      "Launched the Diploma in Entrepreneurship and Job Creation, an advanced extension of our 'Specialization in Business Studies' for deeper learning.",
    icon: "briefcase",
    type: "type3",
  },
  {
    date: "1442 / 2021",
    title: "Program Expansion - Batches 1 & 2",
    description: (
      <>
        Expanded our reach with Batch 1 comprising 26 students (3-Year Program)
        and Batch 2 with 27 students (4-Year Program). This growth was supported
        by our dedicated team of 4 faculty members, ensuring continued quality.
      </>
    ),
    icon: "users",
    type: "type1",
  },
  {
    date: "1445 / 2024",
    title: "Launch of JSBS Marol Campus",
    description:
      "A significant milestone: the official launch of the JSBS Marol Campus. This expansion provides enhanced facilities and opportunities for our growing student body.",
    icon: "home",
    type: "type2",
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
      <h2 className="text-center">Our Milestones</h2>
      <div className="timeline container px-0">
        {milestonesData.map((event, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`timeline__event timeline__event--${event.type} hidden`}
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
