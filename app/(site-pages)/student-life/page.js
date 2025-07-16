import BackToTop from "@/app/backToTop";
import StudentLifePage from "./(student-life)";

export const metadata = {
  title: "Student Life | JSBS",
  description: "Student Life Description",
};

const StudentLifeLayout = () => {
  return (
    <>
      <StudentLifePage />
      <BackToTop />
    </>
  );
};

export default StudentLifeLayout;
