const faculties = [
  {
    title: "Faculty of Employability",
    description:
      "The Faculty of Employability is an educational concept focusing on equipping students with the skills and competencies necessary to thrive in the job market. It emphasizes soft skills, such as communication, teamwork, problem-solving, and adaptability, alongside essential technical skills relevant to specific industries. This faculty encourages experiential learning, internships, and partnerships with employers to provide practical experiences and insight into workplace expectations. Additionally, it often includes career services like resume workshops, interview preparation, and networking opportunities, fostering a holistic approach to facilitate students' transition from education to employment.",
  },
  {
    title: "Faculty of Human Resource Management",
    description:
      "The Faculty of Human Resource Management typically focuses on developing knowledge and skills related to managing an organization's workforce. This may include programs on recruitment, employee training, performance management, labor relations, compensation, and organizational behavior. The curriculum often blends theoretical knowledge with practical application, often featuring case studies and internships.",
  },
  {
    title: "Faculty of Strategic Management",
    description:
      "The Faculty of Strategic Management typically focuses on understanding and developing effective strategies within organizations. It encompasses various aspects such as strategic planning, decision-making, competitive analysis, and resource management, preparing students for roles in leadership and consultancy.",
  },
  {
    title: "Faculty of Operation Management",
    description:
      "The Faculty of Operations Management focuses on teaching and researching the principles and practices of managing and optimizing business operations. It typically covers topics such as supply chain management, logistics, quality management, project management, and organizational behavior.",
  },
  {
    title: "Faculty of Marketing Strategy",
    description:
      "The Faculty of Marketing Strategy typically focuses on equipping students and professionals with the skills and knowledge necessary to develop effective marketing strategies. This includes an exploration of market research, consumer behavior, branding, digital marketing, and strategic planning.",
  },
  {
    title: "Faculty of Managing Organisational Change & Performance",
    description:
      "The Faculty of Managing Organisational Change and Performance focuses on the development and implementation of strategies to drive and sustain organisational change and performance improvement. It explores topics such as strategic management, innovation, leadership, and change implementation in business environments.",
  },
  {
    title: "Faculty of Marketing Research",
    description:
      "The Faculty of Marketing Research is responsible for analyzing customer behavior, competitors, and market trends to support data-driven decision-making. It involves conducting surveys, focus groups, and using statistical tools to support product development, pricing, and promotion strategies.",
  },
  {
    title: "Faculty of Digital Marketing",
    description:
      "The Faculty of Digital Marketing equips students with the skills to plan and execute marketing strategies using digital tools and platforms, such as SEO, social media, content marketing, analytics, and email campaigns. It focuses on consumer behavior and ethics in the digital space.",
  },
  {
    title: "Faculty of The Global Economy and Multinational Enterprise",
    description:
      "This faculty focuses on international economic policies, global trade, and how multinational corporations operate across diverse markets. It prepares students for careers in global finance, consulting, and business strategy.",
  },
];

const SecondYearBsc = () => {
  return (
    <div className="container rbt-section-gap">
      <div className="rbt-split-area overflow-hidden">
        <div className="wrapper">
          <div className="section-title text-center mb--60">
            <span className="subtitle bg-coral-opacity">Faculties</span>
            <h3>2nd Year B.Sc Faculty Directory</h3>
          </div>

          <div className="faculty-list">
            {faculties.map((faculty, index) => (
              <div key={index} className="mb-5">
                <h5 className="text-orange mb-2">{faculty.title}</h5>
                <p className="description">{faculty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondYearBsc;
