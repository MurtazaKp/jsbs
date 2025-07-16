import BackToTop from "@/app/backToTop";
import FacultyResearchPage from "./(faculty-research)";

export const metadata = {
  title: "Faculty & Research | JSBS",
  description: "Online Courses & Education NEXTJS14 Template",
};

const FacultyResearchLayout = () => {
  return (
    <>
      <FacultyResearchPage />
      <BackToTop />
    </>
  );
};

export default FacultyResearchLayout;
