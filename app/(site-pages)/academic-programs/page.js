import BackToTop from "@/app/backToTop";
import AcademicProgramsPage from "./(academic-programs)";

export const metadata = {
  title: "Academic Programs | JSBS",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AcademicProgramLayout = () => {
  return (
    <>
      <AcademicProgramsPage />
      <BackToTop />
    </>
  );
};

export default AcademicProgramLayout;
