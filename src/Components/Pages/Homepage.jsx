import Footer from "../../Ui/Footer";
import Header from "../Header";
import HomepageHeroSection from "../HomepageHeroSection";
import RecentProjects from "../RecentProjects";
import Skills from "../Skills";

function Homepage() {
  return (
    <section className="w-full p-0 overflow-x-hidden">
      <Header />
      <HomepageHeroSection />
      <Skills />
      <RecentProjects />
      <Footer />
    </section>
  );
}

export default Homepage;
