import React from "react";

const facultyData = [
  {
    name: "Prof. (Dr). Nardeep. K. Maheshwary",
    title: "Director Academics, JSBS",
    description:
      "More than 29 years’ experience as an academician, researcher, administrator and dean...",
    qualification: "B. Com, MBA, Ph.D.",
    specialization:
      "Corporate Finance, SAPM, Marketing Management & other Management subjects.",
    imageUrl: "https://placehold.co/600x600",
    icon: "book-open", // Feather icon name
  },
  {
    name: "Shk Mufaddal M. Qutbuddin Shakir",
    title: "Head of Faculty of Business Studies",
    description:
      "He leads curricular innovation within one of the world’s most respected Arabic academic institutions...",
    qualification: "Al Faqih Al Jayyid, MBA",
    specialization:
      "Research Analyst, Project management, Leadership & Management",
    imageUrl: "https://placehold.co/600x600",
    icon: "briefcase",
  },
  {
    name: "CA Pratiksha Jain",
    title: "Faculty - Accounts & Finance",
    description: "Chartered Accountant by Profession, Professor by Passion...",
    qualification: "Chartered Accountant",
    specialization: "Accounts, Costing and Finance",
    imageUrl: "https://placehold.co/600x600",
    icon: "bar-chart-2",
  },
  {
    name: "Pankaj Patil",
    title: "Faculty - IT & Systems",
    description:
      "Dedicated educator with focus on DBMS, system design, cryptography...",
    qualification: "B.E., M.E., PG-DAC",
    specialization: "Information Technology, Databases, Programming",
    imageUrl: "https://placehold.co/600x600",
    icon: "cpu",
  },
  {
    name: "Dr CA Purvaa Jain",
    title: "Faculty - Finance & Management",
    description:
      "Founder at Pro Capitalist Advisory. Strategic finance evangelist...",
    qualification: "CA, PhD",
    specialization: "Finance and Management",
    imageUrl: "https://placehold.co/600x600",
    icon: "pie-chart",
  },
  {
    name: "Sulagna Ray Purkayastha",
    title: "Faculty - Sociology & HR",
    description:
      "18 years’ experience teaching national and international courses...",
    qualification: "Postgraduate in Sociology",
    specialization: "Labour, HRM, Development Studies",
    imageUrl: "https://placehold.co/600x600",
    icon: "users",
  },
  {
    name: "Uma Lele",
    title: "Faculty - Statistics & Six Sigma",
    description:
      "25 years of industry experience. Conducted Lean Six Sigma workshops...",
    qualification: "BSc, DBM, Diploma MR, Six Sigma",
    specialization: "Statistics, Six Sigma",
    imageUrl: "https://placehold.co/600x600",
    icon: "trending-up",
  },
];

const Faculty = () => {
  return (
    <section
      id="team"
      className="team-area bg-light-orange bg-light-orange rbt-section-gap "
    >
      <div className="wrapper container">
        <div className="section-title text-center mb-4">
          <span className="subtitle bg-coral-opacity ">Faculty</span>
          <h3 className="mb-5 text-center "> Our Faculty</h3>
        </div>

        <div className="row team-items">
          {facultyData.map((member, index) => (
            <div className="col-md-6 col-sm-6 col-lg-4 single-item" key={index}>
              <div className="item">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <div className="overlay">
                    <p>
                      <strong>Qualification:</strong> {member.qualification}
                    </p>
                    <div className="seperator" />
                    <p>{member.description}</p>
                    <div className="seperator" />
                    <p>
                      <strong>Specialization:</strong> {member.specialization}
                    </p>
                  </div>
                </div>
                <div className="info">
                  <span className="message">
                    <a href="#">
                      <i className={`feather-${member.icon}`}></i>
                    </a>
                  </span>
                  <h5>{member.name}</h5>
                  <span>{member.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
