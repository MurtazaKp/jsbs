import FacultySection from "@/components/FacultySection/FacultySection";
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
    <div>
      <FacultySection />
    </div>
  );
};

export default FacultyOverview;
