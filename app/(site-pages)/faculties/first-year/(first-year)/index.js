const faculties = [
  {
    title: "Faculty of Market & Consumption",
    description:
      "The Faculty of Market & Consumption typically focuses on the study of consumer behavior, market dynamics, and the interplay between marketing strategies and consumer needs. It encompasses various disciplines including marketing, economics, sociology, and psychology to analyze how individuals and groups make purchasing decisions. Curricula often include topics such as market research, branding, consumer psychology, ethics in marketing, and digital marketing trends. Graduates are equipped for careers in marketing analytics, market research, brand management, and consultancy, with skills to influence and understand market trends and consumer interactions effectively.",
  },
  {
    title: "Faculty of International Business",
    description:
      "The Faculty of International Business is an academic unit that focuses on the study and practice of international business, often offered at universities as a standalone program or as part of a larger business school. These programs typically encompass a wide range of subjects, including global economics, international trade, foreign exchange, and global supply chain management, as well as cross-cultural communication and negotiation skills. Students gain a deeper understanding of how businesses operate across different countries and cultures, preparing them for careers in multinational companies, international finance, global marketing, or as entrepreneurs in a globalized marketplace.",
  },
  {
    title: "Faculty of Quantitative Methods",
    description:
      "The Faculty of Quantitative Methods typically focuses on the application of mathematical, statistical, and computational techniques to address complex problems in fields such as economics, finance, social sciences, and data science. It emphasizes quantitative analysis, modeling, data interpretation, and decision-making processes. Academic programs may include courses in statistics, operations research, econometrics, and machine learning.",
  },
  {
    title: "Faculty of Information Systems",
    description:
      "The Faculty of Information Systems typically focuses on the study and development of information systems, combining elements of computer science, information technology, and business. Programs often include topics such as software development, database management, systems analysis, and project management, equipping students with the skills needed to design, implement, and manage technology-based solutions in various organizational contexts.",
  },
  {
    title: "Faculty of Interpreting Management",
    description:
      "The Faculty of Interpreting Management typically focuses on the intersection of language interpretation and the management of interpreting services. It offers programs that train students in both the practical skills of interpreting, including simultaneous and consecutive methods, and the administrative aspects, such as quality control, project management, and client relations.",
  },
  {
    title: "Faculty of Accounting",
    description:
      "The Faculty of Accounting is an academic division within a university that specializes in the study and practice of accounting principles, financial reporting, auditing, taxation, and management accounting. Programs typically offer undergraduate and graduate degrees, preparing students for careers in public accounting, corporate finance, and government organizations.",
  },
  {
    title: "Faculty of Sustainable Organizations",
    description:
      "The Faculty of Sustainable Organizations focuses on integrating sustainability principles into organizational practices and strategies. It typically encompasses interdisciplinary studies, addressing areas such as environmental science, social equity, corporate governance, and ethical leadership.",
  },
  {
    title: "Faculty of Organization Studies",
    description:
      "The Faculty of Organization Studies typically focuses on the interdisciplinary study of organizations, management, and related social sciences. It frequently offers programs in organizational behavior, HR management, operations management, strategic management, and entrepreneurship.",
  },
];

const FirstYearBsc = () => {
  return (
    <div className="container rbt-section-gap">
      <div className="rbt-split-area overflow-hidden">
        <div className="wrapper">
          <div className="section-title text-center mb--60">
            <span className="subtitle bg-coral-opacity">Faculties</span>
            <h3>1st Year B.Sc Faculty Directory</h3>
          </div>

          <div className="faculty-list">
            {faculties.map((faculty, index) => (
              <div key={index} className="mb-5">
                <h5 className=" mb-2 text-orange">{faculty.title}</h5>
                <p className="description">{faculty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstYearBsc;
