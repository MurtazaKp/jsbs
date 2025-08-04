"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";

import Context from "@/context/Context";

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

const GraduateProfilePage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <section className="container  rbt-section-gap ">
            <div className="section-title  text-center">
              <span className="subtitle bg-coral-opacity">Profiles</span>
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
        </Context>
      </Provider>
    </>
  );
};

export default GraduateProfilePage;
