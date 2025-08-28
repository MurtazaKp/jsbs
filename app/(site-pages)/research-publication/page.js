import BackToTop from "@/app/backToTop";
import AcademicProgramsPage from "./(research-publication)";
import ResearchPublicationPage from "./(research-publication)";

export const metadata = {
  title: "Academic Programs | JSBS",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ResearchPublicationLayout = () => {
  return (
    <>
      <ResearchPublicationPage />
      <BackToTop />
    </>
  );
};

export default ResearchPublicationLayout;
