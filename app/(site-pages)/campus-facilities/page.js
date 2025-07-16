import BackToTop from "@/app/backToTop";
import CampusFacilitiesPage from "./(campus-facilities)";

export const metadata = {
  title: "Campus Facilities | JSBS",
  description: "Campus Facilities Page",
};

const CampusFacilitiesLayout = () => {
  return (
    <>
      <CampusFacilitiesPage />
      <BackToTop />
    </>
  );
};

export default CampusFacilitiesLayout;
