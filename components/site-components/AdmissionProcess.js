import React from "react";

const AdmissionProcess = () => {
  const steps = [
    {
      title: "Check Eligibility",
      description:
        "Ensure you meet academic and English language proficiency requirements (e.g., A-levels, IELTS/TOEFL).",
    },
    {
      title: "Gather Documents",
      description:
        "Prepare transcripts, personal statement, CV, and letters of recommendation if applicable.",
    },
    {
      title: "Apply Online",
      description:
        "Use UCAS or UoL portal to complete your application with all required details.",
    },
    {
      title: "Choose a College",
      description:
        "Select your preferred University of London college offering the B.Sc program.",
    },
    {
      title: "Submit Application",
      description:
        "Complete all sections and submit your application before the deadline, including any required fees.",
    },
    {
      title: "Track Status",
      description:
        "Monitor your application progress and respond to any additional requests or assessments.",
    },
    {
      title: "Receive Offer",
      description:
        "Get an offer letter – conditional or unconditional – after evaluation of your profile.",
    },
    {
      title: "Accept Offer",
      description:
        "Confirm your acceptance as per the university's instructions.",
    },
    {
      title: "Prepare for Enrollment",
      description:
        "Arrange tuition payments, course registration, and visas if required.",
    },
    {
      title: "Attend Orientation",
      description:
        "Join orientation sessions to get familiar with the campus, resources, and support services.",
    },
  ];

  const additionalTips = [
    "Deadlines: Keep track of application deadlines and ensure you apply well in advance.",
    "Support Services: Utilize university support services if you need guidance during the application process.",
    "Programs and Modules: Familiarize yourself with the course structure, modules, and faculty.",
  ];

  return (
    <div className="rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">Admission Process</h2>
              <p className="description mt--20">
                To apply for the 3-Year B.Sc (Business Administration) course at
                the University of London, you will typically need to follow
                these steps.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt--50">
          <div className="col-lg-8 mx-auto">
            <div className="admission-process-timeline">
              {steps.map((step, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-step-number">{index + 1}</div>
                    <h5 className="title">{step.title}</h5>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="admission-tips-card">
              <h4 className="title">Additional Tips</h4>
              <ul>
                {additionalTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
