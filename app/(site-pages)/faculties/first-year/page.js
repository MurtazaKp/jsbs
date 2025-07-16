import BackToTop from "@/app/backToTop";
import FirstYearBsc from "./(first-year)";

export const metadata = {
  title: "First Year Faculties | JSBS",
  description: "Online Courses & Education NEXTJS14 Template",
};

const FirstYearPage = () => {
  return (
    <>
      <FirstYearBsc />
      <BackToTop />
    </>
  );
};

export default FirstYearPage;
