import BackToTop from "./backToTop";
import HomeTechnologyPage from "./home/(home)";

export const metadata = {
  title: "Home | JSBS",
  description: "JSBS home page",
};

export default function Home() {
  return (
    <main>
      <HomeTechnologyPage />
      <BackToTop />
    </main>
  );
}
