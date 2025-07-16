import BackToTop from "@/app/backToTop";
import FeesStructurePage from "./(fees-structure)";

export const metadata = {
  title: "Fees Structure | JSBS",
  description: "Fees Structure description",
};

const FeesStructureLayout = () => {
  return (
    <>
      <FeesStructurePage />
      <BackToTop />
    </>
  );
};

export default FeesStructureLayout;
