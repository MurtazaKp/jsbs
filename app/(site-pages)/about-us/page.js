import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us)";

export const metadata = {
  title: "About US | JSBS",
  description: "About Us Description",
};

const AboutUsLayout = () => {
  return (
    <>
      <AboutUsPage />
      <BackToTop />
    </>
  );
};

export default AboutUsLayout;
