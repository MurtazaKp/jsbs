"use client";
import React from "react";

const AccordionThree = () => {
  const data = {
    tag: "UNIQUE LEARNING AMBIENCE",
    title: "Fostering Academic Excellence",
    subTitle: "Through Innovation & Collaboration",
    strong: "Explore our educational pillars:",
    description:
      "World-class faculty, cutting-edge technology, real-life projects, strategic problem-solving, and collaborative environments that shape future leaders.",
    faqBody: [
      {
        accordionTitle: "World-class Faculty",
        heading: "headingOne",
        collapse: "collapseOne",
        expanded: false,
        collapsed: true,
        show: true,
        desc: `The quality and expertise of faculty members play a crucial role in delivering an exceptional education experience. World-class faculty possess a deep understanding of their subject matter, are accomplished professionals in their field, and are dedicated to imparting knowledge to students. Their diverse experiences, research expertise, and ability to bridge theory and practice enable students to engage in meaningful discussions, tackle complex challenges, and develop a comprehensive understanding of their chosen discipline. Additionally, they often provide guidance, mentorship, and support to students, helping them navigate personal and professional growth. This, in turn, fosters a sense of community, inspires students to reach their full potential, and equips them with the skills required to succeed in their chosen careers.`,
      },
      {
        accordionTitle: "Cutting-edge Technology",
        heading: "headingTwo",
        collapse: "collapseTwo",
        expanded: false,
        collapsed: true,
        show: false,
        desc: `Integrating cutting-edge technology into academic programs is essential in today's rapidly evolving world. It enables students to stay up-to-date with the latest industry trends, develop valuable technical skills, and cultivate a growth mindset. Technology can enhance learning outcomes by providing students with access to simulations, virtual labs, data analytics tools, and other digital resources that facilitate experimentation, analysis, and critical thinking. Furthermore, technology facilitates collaboration, communication, and information dissemination, allowing students to work on projects, share ideas, and engage with peers and experts from diverse backgrounds. By leveraging cutting-edge technology, institutions can create innovative learning environments that prepare students for the challenges and opportunities of the 21st century.`,
      },
      {
        accordionTitle: "Real-life Projects",
        heading: "headingThree",
        collapse: "collapseThree",
        expanded: false,
        collapsed: true,
        show: false,
        desc: `Real-life projects are an essential component of a well-rounded academic experience, as they allow students to apply theoretical knowledge to practical problems and develop a deeper understanding of the subject matter. By working on projects that mimic real-world scenarios, students can develop essential skills such as critical thinking, problem-solving, creativity, and collaboration. These projects also provide students with the opportunity to identify and address the needs and challenges of local and global communities, develop a sense of social responsibility, and foster a sense of purpose and fulfillment. Real-life projects help students connect the classroom to the world beyond, demonstrating the relevance and significance of their academic pursuits and preparing them for a fulfilling and successful professional life.`,
      },
      {
        accordionTitle: "Problem-solving Strategies",
        heading: "headingFour",
        collapse: "collapseFour",
        expanded: false,
        collapsed: true,
        show: false,
        desc: `Developing effective problem-solving strategies is an essential skill for success in academia and beyond. Academic programs that focus on cultivating problem-solving skills help students develop a structured approach to tackling complex challenges, analyze information, identify key issues, and generate creative solutions. By integrating problem-solving strategies into the curriculum, institutions can empower students to tackle real-world problems, think critically, and develop innovative solutions. Additionally, problem-solving strategies help students develop essential soft skills, such as time management, teamwork, and communication, which are highly valued by employers and essential for success in a rapidly changing world.`,
      },
      {
        accordionTitle: "Collaboration for Academic Excellence",
        heading: "headingFive",
        collapse: "collapseFive",
        expanded: false,
        collapsed: true,
        show: false,
        desc: `Collaboration and teamwork are essential components of academic excellence, as they enable students to learn from one another, develop essential communication and interpersonal skills, and work towards a common goal. Collaborative learning environments foster a sense of community and social responsibility, encouraging students to engage with peers from diverse backgrounds and disciplines. By working together, students can share perspectives, exchange ideas, and develop a deeper understanding of the subject matter. Furthermore, collaboration enables students to develop essential soft skills, such as leadership, negotiation, and project management, which are highly valued by employers and essential for success in a rapidly changing world. By prioritizing collaboration and teamwork, institutions can create a positive and inclusive learning environment that prepares students for the challenges and opportunities of the 21st century.`,
      },
    ],
  };

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-10 offset-lg-1">
          <div className="rbt-accordion-style accordion">
            <div className="section-title text-center mb--60">
              <span className="subtitle bg-coral-opacity">{data.tag}</span>
              <h2 className="title">
                {data.title} <br /> {data.subTitle}
              </h2>
            </div>

            <div className="rbt-accordion-style rbt-accordion-04 accordion">
              <div className="accordion" id="accordionExamplec3">
                {data.faqBody.map((item, index) => (
                  <div className="accordion-item card" key={index}>
                    <h2
                      className="accordion-header card-header "
                      id={item.heading}
                    >
                      <button
                        className={`accordion-button has-medium-font-size ${
                          !item.collapsed ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.collapse}`}
                        aria-expanded={item.expanded}
                        aria-controls={item.collapse}
                      >
                        {item.accordionTitle}
                      </button>
                    </h2>
                    <div
                      id={item.collapse}
                      className={`accordion-collapse collapse ${
                        item.show ? "show" : ""
                      }`}
                      aria-labelledby={item.heading}
                      data-bs-parent="#accordionExamplec3"
                    >
                      <div className="accordion-body card-body  text-justify description">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionThree;
