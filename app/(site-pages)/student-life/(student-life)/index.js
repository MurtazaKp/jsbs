"use client";

const StudentLifePage = ({ getBlog }) => {
  return (
    <>
      {/* Clubs and Organisations Section */}
      <section className="rbt-split-area bg-light-orange rbt-section-gap overflow-hidden">
        <div className="wrapper container text-center">
          <div className="section-title mb-4">
            <span className="subtitle bg-coral-opacity ">
              Clubs and Organisation
            </span>
          </div>

          <div className="rbt-splite-style">
            <h2 className="fw-bold">Coming Soon</h2>
          </div>
        </div>
      </section>

      {/* Student Activities Section */}
      <section className="rbt-split-area rbt-section-gap overflow-hidden">
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
    </>
  );
};

export default StudentLifePage;
