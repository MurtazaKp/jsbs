import BackToTop from "@/app/backToTop";
import AcademicProgramsPage from "../(degree-course)";

export const metadata = {
  title: "Academic Programs | JSBS",
  description: "Online Courses & Education NEXTJS14 Template",
};

const DegreeCourseLayout = () => {
  return (
    <>
      <AcademicProgramsPage />
      <BackToTop />
    </>
  );
};

export default DegreeCourseLayout;
