import React from "react";

const milestonesData = [
  {
    date: "1441 / 2019",
    description: "Commencement of Business-Mindedness project.",
    color: "text-warning",
    position: "bottom",
  },
  {
    date: "1441 / 2020",
    description:
      "Aljamea-Tus-Saifiyah Beginner's Entrepreneurship Certificate Program with 31 students and 4 faculty members was completed.",
    color: "text-primary",
    position: "top",
  },
  {
    date: "1441 / 2020",
    description:
      'Diploma in Entrepreneurship and job creation started as an extension of "Specialization in Business Studies".',
    color: "text-danger",
    position: "bottom",
  },
  {
    date: "1442 / 2021",
    description: (
      <>
        Batch 1 – 26 students (3 Years)
        <br />
        Batch 2 – 27 students (4 Years)
        <br />
        Dedicated team of 4 faculty members.
      </>
    ),
    color: "text-success",
    position: "top",
  },
  {
    date: "1445 / 2024",
    description: "Launch of JSBS Marol Campus.",
    color: "text-white",
    bgColor: "bg-orange",
    position: "bottom",
  },
];

const Milestones = () => {
  return (
    <div className="milestone-container bg-light-orange">
      <div className="container">
        <h2 className="milestone-main-title">Our Milestones</h2>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-items-container">
            {milestonesData.map((milestone, index) => (
              <div
                className={`timeline-item ${milestone.position}`}
                key={index}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-card-wrapper">
                  <div className={`timeline-card ${milestone.bgColor || ""}`}>
                    <h5 className={`card-title mb-2 ${milestone.color}`}>
                      {milestone.date}
                    </h5>
                    <p
                      className={`has-small-font-size ${
                        milestone.bgColor ? milestone.color : ""
                      }`}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
