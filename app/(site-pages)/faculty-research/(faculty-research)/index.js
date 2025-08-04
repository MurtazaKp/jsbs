import Link from "next/link";

const yearFaculties = [
  {
    year: "1st Year B.Sc",
    faculty: {
      title: "Faculty of Market & Consumption",
      description:
        "The Faculty of Market & Consumption typically focuses on the study of consumer behavior, market dynamics, and the interplay between marketing strategies and consumer needs. It encompasses various disciplines including marketing, economics, sociology, and psychology to analyze how individuals and groups make purchasing decisions. Curricula often include topics such as market research, branding, consumer psychology, ethics in marketing, and digital marketing trends. Graduates are equipped for careers in marketing analytics, market research, brand management, and consultancy, with skills to influence and understand market trends and consumer interactions effectively.",
    },
    link: "/faculties/first-year",
  },
  {
    year: "2nd Year B.Sc",
    faculty: {
      title: "Faculty of Employability",
      description:
        "The Faculty of Employability is an educational concept focusing on equipping students with the skills and competencies necessary to thrive in the job market. It emphasizes soft skills, such as communication, teamwork, problem-solving, and adaptability, alongside essential technical skills relevant to specific industries. This faculty encourages experiential learning, internships, and partnerships with employers to provide practical experiences and insight into workplace expectations. Additionally, it often includes career services like resume workshops, interview preparation, and networking opportunities, fostering a holistic approach to facilitate students' transition from education to employment.",
    },
    link: "/faculties/second-year",
  },
  {
    year: "3rd Year B.Sc",
    faculty: {
      title: "Faculty of Integrating Management",
      description:
        "The Faculty of Employability is an educational concept focusing on equipping students with the skills and competencies necessary to thrive in the job market. It emphasizes soft skills, such as communication, teamwork, problem-solving, and adaptability, alongside essential technical skills relevant to specific industries. This faculty encourages experiential learning, internships, and partnerships with employers to provide practical experiences and insight into workplace expectations. Additionally, it often includes career services like resume workshops, interview preparation, and networking opportunities, fostering a holistic approach to facilitate students' transition from education to employment.",
    },
    link: "/faculties/third-year",
  },
];

const FacultyOverview = () => {
  return (
    <div className="">
      <div className="bg-light-orange  rbt-section-gap">
        <div className="container">
          <div className="rbt-split-area  overflow-hidden">
            <div className="wrapper">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-coral-opacity">
                  Faculty & Research
                </span>
                <h3>Faculty Directory</h3>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {yearFaculties.map((yearItem, index) => (
              <div className="col-md-12" key={index}>
                <div className="rbt-card variation-01 rbt-hover card-list-2 ">
                  <div className="card-body">
                    <h5 className=" mb-2">{yearItem.year}</h5>
                    <h6 className=" text-orange">{yearItem.faculty.title}</h6>
                    <p className="description  text-justify">
                      {yearItem.faculty.description}
                    </p>
                    <div className="text-end ">
                      <Link href={yearItem.link} className="text-orange fs-4">
                        View All Faculties
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="rbt-split-area  rbt-section-gap overflow-hidden">
        <div className="wrapper container text-center">
          <div className="section-title mb-4">
            <span className="subtitle bg-coral-opacity ">
              Research & Publication
            </span>
          </div>

          <div className="rbt-splite-style">
            <h2 className="fw-bold">Coming Soon</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyOverview;
