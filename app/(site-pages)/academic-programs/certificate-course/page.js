import BackToTop from "@/app/backToTop";
import AcademicProgramsPage from "../(degree-course)";
import CertificatePage from "../(certificate-course)";

export const metadata = {
  title: "Academic Programs | JSBS",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AcademicProgramLayout = () => {
  return (
    <>
      <CertificatePage />
      <BackToTop />
    </>
  );
};

export default AcademicProgramLayout;
