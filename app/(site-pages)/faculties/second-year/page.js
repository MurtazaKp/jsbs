import BackToTop from "@/app/backToTop";
import FirstYearBsc from "./(second-year)";
import SecondYearBsc from "./(second-year)";

export const metadata = {
  title: "Second Year Faculties | JSBS",
  description: "Second Year Faculties description",
};

const SecondYearPage = () => {
  return (
    <>
      <SecondYearBsc />
      <BackToTop />
    </>
  );
};

export default SecondYearPage;
