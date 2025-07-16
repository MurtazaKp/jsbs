import BackToTop from "@/app/backToTop";
import GraduateProfilePage from "./(graduate-profile)";

export const metadata = {
  title: "Graduate Profile | JSBS",
  description: "Graduate Profile Descrition",
};

const GraduateProfileLayout = () => {
  return (
    <>
      <GraduateProfilePage />
      <BackToTop />
    </>
  );
};

export default GraduateProfileLayout;
