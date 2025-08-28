"use client";

const StudentLifePage = ({ getBlog }) => {
  const graduateData = [
    {
      title: "Good Human Beings",
      icon: "heart",
      description:
        "Individuals with empathy, kindness, and compassion who create a supportive environment and strengthen the social fabric.",
    },
    {
      title: "Humble and Hard Working",
      icon: "award",
      description:
        "Grounded in their achievements and committed to excellence with a strong work ethic and persistence to overcome challenges.",
    },
    {
      title: "Business Minded",
      icon: "bar-chart-2",
      description:
        "Strategic decision-makers who understand business dynamics and seize opportunities to ensure organizational growth.",
    },
    {
      title: "Trained in Shari‘ah & Business Ethics",
      icon: "book-open",
      description:
        "Professionals who navigate complex situations with ethical integrity, aligning actions with Islamic and business values.",
    },
    {
      title: "Philanthropic with Zeal for Dawat Khidmat",
      icon: "users",
      description:
        "Driven by service and compassion, they use success to uplift others and support community-oriented initiatives.",
    },
    {
      title: "Creative Business Leaders",
      icon: "zap",
      description:
        "Innovative thinkers who develop original solutions and foster creativity within their organizations.",
    },
    {
      title: "Visionaries in Business",
      icon: "eye",
      description:
        "Forward-thinkers who guide organizations toward future growth through long-term strategies and foresight.",
    },
    {
      title: "Professional Entrepreneurs",
      icon: "briefcase",
      description:
        "Experts in their fields who build and scale ventures through innovation, professionalism, and business acumen.",
    },
  ];
  return (
    <>
      {/* Clubs and Organisations Section */}

      {/* Student Activities Section */}
      <section className="rbt-split-area bg-light-orange rbt-section-gap overflow-hidden">
        <div className="wrapper container">
          <div className="section-title text-center mb-4">
            <span className="subtitle bg-coral-opacity ">Activities</span>
            <h2 className="mb-5 text-center "> Student Activities</h2>
          </div>

          {/* Table Header */}
          <div className="row bg-dark-blue text-white fw-bold text-center text-md-start text-sm-left p-2 rounded-3 d-none d-md-flex">
            <div className="col-md-3">Date</div>
            <div className="col-md-5">Name of Activity</div>
            <div className="col-md-4">Participation Details</div>
          </div>

          {/* Activities */}
          {[
            {
              date: "15 September",
              name: "Maraz Ilmi",
              details: "Std 8 – 11 students",
            },
            {
              date: "2 October",
              name: "Cryptocurrency and other Fraudulent Schemes",
              details: "Std 8 – 11 students",
            },
            {
              date: "15 September",
              name: "Alumni Program",
              details: "Alumni of JSBS Batch 1 & 2",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="row bg-orange text-white mt-4 p-3 rounded-3 text-center text-md-start"
            >
              <div className="col-md-3 col-12 fw-semibold mb-2 mb-md-0">
                {activity.date}
              </div>
              <div className="col-md-5 col-12 mb-2 mb-md-0">
                {activity.name}
              </div>
              <div className="col-md-4 col-12">{activity.details}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container  rbt-section-gap ">
        <div className="section-title  text-center">
          <span className="subtitle bg-coral-opacity">Alumni</span>
        </div>

        <h3 className="mb-5 text-center ">Our Graduates’ Profile</h3>
        <div className="row g-4">
          {graduateData.map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="rbt-card variation-01 rbt-hover h-100 ">
                <div className="card-body d-flex">
                  <div className="me-3">
                    <i
                      className={`feather-${item.icon} text-orange`}
                      style={{ fontSize: "2.75rem" }}
                    ></i>
                  </div>
                  <div>
                    <h5 className="mb-2 text-orange">{item.title}</h5>
                    <p className="mb-0 description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StudentLifePage;
