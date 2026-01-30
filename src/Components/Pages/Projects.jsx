import Container from "../../Ui/Container";
import Header from "../Header";
import Footer from "../../Ui/Footer";
import ProjectHeroSection from "../ProjectHeroSection";

function Projects() {
  return (
    <Container>
      <section className="w-full p-0 overflow-x-hidden border-2">
        <Header />
        <ProjectHeroSection />
        <Footer />
      </section>
    </Container>
  );
}

export default Projects;
