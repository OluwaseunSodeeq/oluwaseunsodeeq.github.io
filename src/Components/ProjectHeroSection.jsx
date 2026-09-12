import { useState } from "react";
import ContentContainer from "../Ui/ContentContainer";
import ProjectCard from "./ProjectCard";
import ContinuousMovingIcons from "./ContinuousMovingIcons";
import { projectsDeatails } from "./AllMyProjects";

export default function ProjectHeroSection() {
  const categories = ["All", "Nextjs", "Reactjs", "Vanilla JavaScript"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projectsDeatails
      : projectsDeatails.filter(
          (p) =>
            p.category.toLocaleLowerCase() ===
            activeCategory.toLocaleLowerCase(),
        );

  return (
    <ContentContainer background="#ffffff">
      <section className="w-full lg:mt-[150px] px-4 lg:px-0 mt-24 lg:pb-[72px]">
        <div className="hidden lg:flex justify-center gap-6 mb-6">
          {categories.map((cat) => {
            const isActive = cat.toLowerCase() === activeCategory.toLowerCase();

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 md:px-4 text-nowrap text-base font-normal font-outfit leading-6 border-2 rounded-[8px] transition-colors
          ${
            isActive
              ? "text-blue-text bg-text-white border-blue-text"
              : "bg-text-color-two text-btn-text-color border-x-text-color-two hover:text-blue-text"
          }
        `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col bg-plain-white ">
          <div className="flex justify-end">
            <div className="font-mono text-right text-3xl font-bold mb-8 text-btn-text-color italic">
              My Skills
            </div>
          </div>
          <div>
            <ContinuousMovingIcons />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-7">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </ContentContainer>
  );
}
