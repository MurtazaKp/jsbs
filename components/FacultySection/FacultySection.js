import React from "react";

const facultyData = [
  {
    name: "Prof. (Dr). Nardeep. K. Maheshwary",
    title: "Director Academics, JSBS",
    description:
      "More than 29 years’ experience as an academician, researcher, administrator and dean. Presented &amp; published more than 30 research papers articles in various national international journals. Published 6 books on subjects of management. Taught subjects of Management at NAAC Accredited Universities of repute in India.",
    qualification: "B. Com, MBA, Ph.D.",
    specialization:
      "Corporate Finance, SAPM, Marketing Management & other Management subjects.",
    imageUrl: "/images/faculty/prof-nardeep-maheshwari.png",
    icon: "book-open", // Feather icon name
  },
  {
    name: "Shk Mufaddal M. Qutbuddin Shakir",
    title: "Head of Faculty of Business Studies",
    description:
      "He leads curricular innovation and departmental operations within one of the world’s most respected Arabic academic institutions. He brings over 18 years of progressive educational experience, having held leadership roles across multiple departments and contributed significantly to both academic and co-curricular excellence",
    qualification: "Al Faqih Al Jayyid, MBA",
    specialization:
      "Research Analyst, Project management, Leadership & Management",
    imageUrl: "/images/faculty/shk-mufaddal-shakir.jpg",
    icon: "briefcase",
  },
  {
    name: "CA Pratiksha Jain",
    title: "Faculty - Accounts & Finance",
    description:
      "Chartered Accountant by Profession, Professor by Passion, Taught Accounts Finance Subject across 10,000+ students across India.",
    qualification: "Chartered Accountant",
    specialization: "Accounts, Costing and Finance",
    imageUrl: "/images/faculty/ca-pratiksha-jain.png",
    icon: "bar-chart-2",
  },
  {
    name: "Pankaj Patil",
    title: "Faculty - IT & Systems",
    description:
      "An inquisitive dedicated educator, teaching computer science or related subjects with a focus on topics like database management, system design, cryptography, information security, Information Technology and Systems.",
    qualification: "B.E., M.E., PG-DAC",
    specialization: "Information Technology, Databases, Programming",
    imageUrl: "/images/faculty/mr-pankaj-patil.jpg",
    icon: "cpu",
  },
  {
    name: "Dr CA Purvaa Jain",
    title: "Faculty - Finance & Management",
    description:
      "Founder at Pro Capitalist Advisory, Seasoned Finance Professional, with blended experience of academia and industry. Strategic finance evangelist, with one and a half decades of experience, specializing in designing, aligning financial strategy with the vision and organizational goals and exponential growth enablement across multiple sectors.",
    qualification: "CA, PhD",
    specialization: "Finance and Management",
    imageUrl: "/images/faculty/dr-purva-shah.jpg",
    icon: "pie-chart",
  },
  {
    name: "Sulagna Ray Purkayastha",
    title: "Faculty - Sociology & HR",
    description:
      "As a teacher with 18 years’ experience of teaching several national and international courses. I live by the maxim: teach, inspire and empower",
    qualification: "Postgraduate in Sociology",
    specialization: "Labour, HRM, Development Studies",
    imageUrl: "/images/faculty/mrs-sulagna-ray.jpg",
    icon: "users",
  },
  // {
  //   name: "Uma Lele",
  //   title: "Faculty - Statistics & Six Sigma",
  //   description:
  //     "25 years of industry experience, Conducted lean six Sigma workshops for corporates, Statistics faculty and Statistical Analysis for clinical trials/research.",
  //   qualification: "BSc, DBM, Diploma MR, Six Sigma",
  //   specialization: "Statistics, Six Sigma",
  //   imageUrl: "https://placehold.co/600x600",
  //   icon: "trending-up",
  // },
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
            <div className="col-md-6 col-sm-6 col-xl-4 single-item" key={index}>
              <div className="item">
                <div className="thumb">
                  <img
                    className="card-img-top img-fluid"
                    style={{ objectFit: "cover", height: "425px" }}
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <div className="overlay">
                    <p className="">
                      <strong>Qualification:</strong> {member.qualification}
                    </p>
                    <div className="seperator" />
                    <p className="">{member.description}</p>
                    <div className="seperator" />
                    <p className=" ">
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
