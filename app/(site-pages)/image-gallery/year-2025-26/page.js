import BackToTop from "@/app/backToTop";

import ImageGallaryPage from ".";

export const metadata = {
  title: "Image Gallary | JSBS",
  description: "Student Life Description",
};

const ImageGallaryLayout = () => {
  return (
    <>
      <ImageGallaryPage />
      <BackToTop />
    </>
  );
};

export default ImageGallaryLayout;
