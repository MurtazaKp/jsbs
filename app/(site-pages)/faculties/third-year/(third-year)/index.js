const faculties = [
  {
    title: "Faculty of Integrating Management",
    description:
      "The Faculty of Integrating Management takes a comprehensive approach to decision-making, combining principles from strategy, finance, operations, marketing, and HR. It emphasizes systems thinking and adaptability, helping organizations align internal and external factors for long-term performance.",
  },
  {
    title: "Faculty of Business Leadership",
    description:
      "This faculty focuses on cultivating leadership, strategic vision, and ethical decision-making in business environments. Programs cover topics such as organizational behavior, entrepreneurship, and transformational leadership to prepare students for executive roles.",
  },
  {
    title: "Faculty of Business Innovation",
    description:
      "Emphasizes innovation, entrepreneurship, and design thinking. Students are trained to solve real-world problems through creative approaches and to lead innovation initiatives in startups and large enterprises alike.",
  },
  {
    title: "Faculty of Consumer Behavior",
    description:
      "This faculty analyzes consumer attitudes, motivations, and buying behavior. It prepares students to conduct consumer research and apply insights to branding, advertising, and product development strategies.",
  },
  {
    title: "Faculty of Global Marketing",
    description:
      "Focuses on international marketing strategies, cultural branding, and cross-border customer engagement. Students learn to manage marketing operations in diverse economic and cultural environments.",
  },
  {
    title: "Faculty of Brands, Branding and Advertising",
    description:
      "Specializes in brand building, advertising strategies, and marketing communication. The curriculum includes storytelling, digital campaigns, visual identity, and analytics, with strong industry engagement.",
  },
  {
    title: "Faculty of International Human Resource Management",
    description:
      "Covers HR practices in a global context, including cross-cultural management, international labor law, and talent mobility. Prepares students to lead people strategies in multinational corporations.",
  },
  {
    title: "Faculty of Emerging Markets and Asia Pacific Business",
    description:
      "This faculty explores business strategies in fast-growing economies across Asia, Africa, and Latin America. Focus areas include regional trade blocs, political-economic environments, and market entry strategies.",
  },
  {
    title: "Faculty of European Business and International Competition",
    description:
      "Equips students with deep understanding of European markets, competition laws, and EU trade policies. The program bridges international commerce and competitive strategy, especially within European and global frameworks.",
  },
];

const ThirdYearBsc = () => {
  return (
    <div className="container rbt-section-gap px-4 px-sm-0">
      <div className="rbt-split-area overflow-hidden">
        <div className="wrapper">
          <div className="section-title text-center mb--60">
            <span className="subtitle bg-coral-opacity">Faculties</span>
            <h3>3rd Year B.Sc Faculty Directory</h3>
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

export default ThirdYearBsc;
